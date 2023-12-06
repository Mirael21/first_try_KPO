from django.urls import path
from . import views

urlpatterns = [
    path('', views.book_page),
    path("get_books/", views.get_books),
    path("get_recommendation/", views.get_recommendation),
    path("save_rating/", views.save_rating),
]
