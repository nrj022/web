from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from .models import Post

# Create your views here.
def main_board(request):
    posts = Post.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    return render(request, 'blog/main_board.html', {'posts': posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post':post})

def login(request):
    return render(request, 'blog/login.html')

def new_post(request):
    return render(request, 'blog/new_post.html')

def create(request):
    if(request.method == 'POST'):
        post = Post()
        post.category = request.POST['category']
        post.author = request.user
        post.title = request.POST['title']
        post.text = request.POST['body']
        post.save()
    return redirect('main_board')

def remove_post(request, pk):
    post = Post.objects.get(pk=pk)
    if request.method == 'POST':
        post.delete()
        return redirect('main_board')
    return render(request, 'blog/remove_post.html', {'Post':post})
