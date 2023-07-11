from unicodedata import name
from django.urls import path
from pagMichis.views import  home,foro,nosotros,paginaapi

urlpatterns = [
    path('', home, name="home"),
    path('foro', foro, name="post"),
    path('nosotros', nosotros, name="nosotros"),
    path('paginaapi', paginaapi, name="paginaapi"),
    
]