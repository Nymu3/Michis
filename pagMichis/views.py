from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login
from django.contrib import messages

# Create your views here.
def home(request):
    return render(request, 'home.html')
def contacto(request):
    return render(request, 'contacto.html')
def sesion(request):
    return render(request, 'sesion.html')

def paginaapi(request):
    return render(request, 'Paginaapi.html')
def foro(request):
    return render(request, 'Foro.html')
def nosotros(request):
    return render(request, 'Nosotros.html')

def registrar(request):
    return render(request, 'registrar.html')

def pokebusca(request):
    return render(request, 'pokebusca.html')