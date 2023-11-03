from django.shortcuts import render


def book_page(request):
    return render(request, 'index.html')

def get_books(request):
    pass

def get_recommendation(request):
    pass