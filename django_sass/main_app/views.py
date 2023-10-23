from django.shortcuts import render

# Create your views here.
def book_page(request):
    return render(request, 'index.html')