from django.db import models

class Cards(models.Model):
    name = models.CharField(max_length=255)
    msg = models.TextField()
    pic = models.ImageField(upload_to='')
    
    def __str__(self):
        return self.name