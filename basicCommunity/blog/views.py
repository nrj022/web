from django.shortcuts import render
from django.utils import timezone
from .models import Post

# Create your views here.
def main_board(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'blog/main_board.html', {'posts': posts})