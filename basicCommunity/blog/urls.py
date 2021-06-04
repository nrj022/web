from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_board, name='main_board'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
]