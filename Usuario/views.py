from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, DetailView
from .forms import RegistroForm


# Create your views here.
class RegistroUsuario(CreateView):
    model = User
    template_name = "registrar.html"
    form_class = RegistroForm
    success_url = reverse_lazy('list_user')
 
 
class UserList(ListView):
    model = User
    template_name = 'list_user.html'