from django.shortcuts import render
from django.http import JsonResponse
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity


def book_page(request):
    return render(request, 'index.html')


def get_books(request):
    df = pd.read_csv(".\\static\\data\\final_book.csv", index_col=0)
    df_10_books = df.sample(10)
    df_10_books.reset_index(drop=True, inplace=True)
    return JsonResponse(df_10_books.to_json(), safe=False)


def get_books_by_titles(titles):
    df_books = pd.read_csv(".\\static\\data\\final_book.csv", index_col=0)
    return df_books[df_books['title'].isin(titles)]


def get_books_and_marks_from_json(request):
    pass


def get_recommendation(request):
    books_and_marks = get_books_and_marks_from_json(request)
    df_book_rating_user = pd.read_csv(".\\static\\data\\book_rating_user.csv", index_col=0)
    df_user_pivot = (df_book_rating_user.pivot_table(index=["user_id"], columns=["title"], values="rating").fillna(0)
                     .reset_index(drop=True))
    user_marks = {i: [0] for i in df_user_pivot.columns}
    for title, mark in books_and_marks.items():
        user_marks[title] = [mark]
    user_marks = pd.DataFrame(user_marks)
    similarity = cosine_similarity(df_user_pivot, user_marks)
    sorted_sim = sorted(enumerate(similarity), key=lambda x: x[1], reverse=True)
    neighbour_books = set()
    for user in sorted_sim:
        for book in df_user_pivot.iloc[user[0]].items():
            if book[1] > 5 and book[0] not in books_and_marks.keys():
                neighbour_books.add(book[0])
            if len(neighbour_books) == 3:
                return get_books_by_titles(neighbour_books)