from django.test import TestCase
import json
from . import views


# Create your tests here.
class TestBookRecSys(TestCase):
    def test_index(self):
        response = self.client.get("")
        self.assertEquals(response.status_code, 200)

    def test_get_books_access(self):
        response = self.client.get("/get_books/")
        self.assertEquals(response.status_code, 200)

    def test_get_books_json_correct_data_len(self):
        response = self.client.get("/get_books/")
        json_books = json.loads(response.content.decode())
        json_books = json.loads(json_books)
        self.assertEquals(len(json_books.keys()), 10)

    def test_get_books_json_correct_data_keys(self):
        response = self.client.get("/get_books/")
        json_books = json.loads(response.content.decode())
        json_books = json.loads(json_books)
        self.assertEquals(list(json_books['book_0'].keys()), ['title', 'author', 'image', 'description'])

    def test_get_recommendation_access(self):
        response = self.client.get("/get_recommendation/")
        self.assertEquals(response.status_code, 200)

    def test_get_recommendation_json_correct_data_len(self):
        response = self.client.get("/get_recommendation/")
        json_books = json.loads(response.content.decode())
        json_books = json.loads(json_books)
        self.assertEquals(len(json_books.keys()), 3)

    # def test_get_book_and_marks_from_json(self):
    #     json_file = {"book_0": {"title": "A", "mark": 1},
    #                  "book_1": {"title": "B", "mark": 2},
    #                  "book_2": {"title": "C", "mark": 3},
    #                  "book_3": {"title": "D", "mark": 4},
    #                  "book_4": {"title": "E", "mark": 5},
    #                  "book_5": {"title": "F", "mark": 6},
    #                  "book_6": {"title": "G", "mark": 7},
    #                  }
    #     json_file = json.dumps(json_file)
    #     books_and_marks = views.get_books_and_marks_from_json(json_file)
    #     print(type(books_and_marks))

    def test_get_books_by_titles(self):
        self.assertEquals(views.get_books_by_titles(["The Master and Margarita"]).shape[0], 1)


