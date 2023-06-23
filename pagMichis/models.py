from django.db import models

# Create your models here.
class Foro (models.Model):
    nombre = models.CharField(max_length=50)
    comentario = models.CharField(max_length=500,blank=True, null= True)
    
    def __str__(self):
        return str(self.nombre)
