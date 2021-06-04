from django.shortcuts import render

# Create your views here.
def main_board(request):
    return render(request, 'blog/main_board.html', {})