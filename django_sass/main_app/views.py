from django.shortcuts import render
from django.http import JsonResponse
import pandas as pd

from sklearn.metrics.pairwise import cosine_similarity
import json
from django.views.decorators.csrf import csrf_exempt


# @csrf_exempt
# def save_rating(request):
#     if request.method == "POST":
#         data = json.loads(request.body.decode("utf-8"))
#         print(data)
#
#
#         return JsonResponse({"message": "Rating saved successfully!"})
#     else:
#         return JsonResponse({"error": "Invalid request method"})

@csrf_exempt
def save_rating(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        books_and_marks = get_books_and_marks_from_json(data)
        recommendations = get_recommendation(books_and_marks)
        print(recommendations)
        return JsonResponse(recommendations, safe=False)
        # return JsonResponse({"message": "Rating saved successfully!"})
    else:
        return JsonResponse({"error": "Invalid request method"})

def book_page(request):
    return render(request, 'index.html')


def make_json(df: pd.DataFrame):
    data = {f"book_{i}": {} for i in range(df.shape[0])}
    for i in range(df.shape[0]):
        data[f"book_{i}"]["title"] = df.iloc[i]["title"]
        data[f"book_{i}"]["author"] = df.iloc[i]["author"]
        data[f"book_{i}"]["image"] = df.iloc[i]["image"]
        data[f"book_{i}"]["description"] = df.iloc[i]["description"]
    return json.dumps(data)


def get_books(request):
    df = pd.read_csv(".\\main_app\\static\\data\\final_books.csv", index_col=0)
    df_10_books = df.sample(10)
    df_10_books.reset_index(drop=True, inplace=True)
    return JsonResponse(make_json(df_10_books), safe=False)


def get_books_by_titles(titles):
    df_books = pd.read_csv(".\\main_app\\static\\data\\final_books.csv", index_col=0)
    return df_books[df_books['title'].isin(titles)]


def get_books_and_marks_from_json(data):
    books_and_marks = {}
    for i in range(10):
        books_and_marks[data[f"book_{i}"]['title']] = int(data[f"book_{i}"]['rating'])
    return books_and_marks


@csrf_exempt
def get_recommendation(books_and_marks):
    df_book_rating_user = pd.read_csv(".\\main_app\\static\\data\\book_rating_user.csv", index_col=0)
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
                return make_json(get_books_by_titles(neighbour_books))
    # df = pd.read_csv(".\\main_app\\static\\data\\final_books.csv", index_col=0)
    # df_3_books = df.sample(2)
    # df_3_books.reset_index(drop=True, inplace=True)
    # return make_json(df_3_books)
    # return JsonResponse(make_json(df_3_books), safe=False)
