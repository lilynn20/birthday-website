
from django.contrib import admin
from django.urls import path , include
from . import views
urlpatterns = [
    path('add/', views.add, name="add"),
    path('getitems/', views.getitems, name="getitems"),
    path('', views.home, name="add"),
]
