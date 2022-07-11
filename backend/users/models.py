from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
# Create your models here.
import random


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    email = models.EmailField(unique=True)
    following = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='follwers', null=True, blank=True)
    friends = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='firends_of', null=True, blank=True)
    avatar = models.ImageField(upload_to='users/', blank=True)
    banner = models.ImageField(upload_to='users/', blank=True)
    interests = models.ManyToManyField('Interest', related_name='things_user_likes', blank=True)


status_choices = [
    ('pending', 'pending'),
    ('accepted', 'accepted'),
    ('rejected', 'rejected')
]


class Friend_request(models.Model):
    sender = models.ForeignKey(settings.AUTH_USER_MODEL , related_name='sent_fr', null=True,blank=True , on_delete=models.SET_NULL)
    receiver = models.ForeignKey(settings.AUTH_USER_MODEL , related_name='receiver_fr', null=True,blank=True,on_delete=models.SET_NULL)
    status = models.CharField(choices=status_choices, max_length=10, default='pending')
    created = models.DateTimeField(auto_now_add=True)


class Interest(models.Model):
    title = models.CharField(max_length=100)

    # liked_things = models.ManyToManyField(settings.AUTH_USER_MODEL , related_name='things_user_likes', null=True,blank=True)

    def __str__(self):
        return self.title


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class ResetPassword(models.Model):
    email = models.EmailField()
    code = models.CharField(max_length=5, default=code_generator)
    code_used = models.BooleanField(default=False)

    def __str__(self):
        return self.email