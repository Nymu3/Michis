from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .models import Post
from .forms import PostForm
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

# Create your views here.
def home(request):
    return render(request, 'home.html')
def foro(request):
    return render(request, 'foro.html')
def contacto(request):
    return render(request, 'contacto.html')
def paginaapi(request):
    return render(request, 'Paginaapi.html')
def nosotros(request):
    return render(request, 'Nosotros.html')

def registrar(request):
    return render(request, 'registrar.html')



