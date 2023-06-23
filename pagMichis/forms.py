from django import forms
from .models import  Foro

class PostForm(forms.ModelForm):
    class Meta:
        model = Foro
        fields = '__all__'


