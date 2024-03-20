from django.shortcuts import render
from rest_framework import generics
from .serializers import ClientSerializer
from .models import Clients
# Create your views here.

class ClientView(generics.CreateAPIView):
    queryset=Clients.objects.all()
    serializer_class=ClientSerializer