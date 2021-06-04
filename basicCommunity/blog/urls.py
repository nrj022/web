from django.urls import path
from . import views

urlpatterns = [path('', views.main_board, name='main_board'),]