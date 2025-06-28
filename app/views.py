from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from django.core.serializers import serialize

def add(request):
    if(request.method == 'POST'):
        senderName = request.POST.get("senderName")
        messageText = request.POST.get("messageText")
        messageImage = request.FILES.get("messageImage")
        print(messageImage)
        obj = Cards.objects.create(name=senderName, msg=messageText, pic=messageImage)
        obj.save()
        return JsonResponse({'status': 'success'})
    return JsonResponse({'error': 'Invalid request'}, status=400)


def getitems(request):
    objs = Cards.objects.all()
    data = [{
        'name': obj.name,
        'msg': obj.msg,
        'pic': obj.pic.url if obj.pic else None,
    }
    for obj in objs
    ]
    return JsonResponse(data, safe=False)
from .models import Cards
def home(request):
    context = {}
    return render(request , 'index.html',context )