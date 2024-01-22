from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def your_view(request):
    if request.method == 'OPTIONS':
        response = JsonResponse({'key': 'value'})
        response['Allow'] = 'GET, POST, OPTIONS'
        response['Access-Control-Allow-Headers'] = 'Content-Type, X-CSRFToken'
        return response

    # Your regular view logic for POST requests goes here
