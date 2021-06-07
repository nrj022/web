from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_board, name='main_board'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
    path('login/', views.login, name='login'),
    path('newpost/', views.new_post, name='new_post'),
    path('create/', views.create, name='create'),
    path('post/<int:pk>/remove/', views.remove_post, name='remove_post'),
]