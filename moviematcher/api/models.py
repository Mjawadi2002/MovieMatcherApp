from django.db import models


# Create your models here.
class Clients(models.Model):
    name=models.CharField(max_length=16)
    mail=models.CharField(max_length=30,unique=True)
    password=models.CharField(max_length=16)
    


