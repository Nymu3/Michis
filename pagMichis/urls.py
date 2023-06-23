from unicodedata import name
from django.urls import path
from pagMichis.views import  home,sesion,foro,nosotros,paginaapi

urlpatterns = [
    path('', home, name="home"),
    path('/sesion', sesion, name="sesion"),
    path('/foro', foro, name="foro"),
    path('/nosotros', nosotros, name="nosotros"),
    path('/paginaapi', paginaapi, name="paginaapi"),
]