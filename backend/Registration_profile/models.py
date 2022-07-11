from django.db import models
from django.contrib.auth import get_user_model
from django.dispatch import receiver
import random
from django.db.models.signals import post_save


User = get_user_model()


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class Regesteration(models.Model):
    email = models.EmailField()
    user = models.OneToOneField(User,related_name='profile',on_delete=models.CASCADE)
    code = models.CharField(max_length=5 , default=code_generator)


@receiver(post_save, sender=User)
def create_registration_profile(sender, instance, *args, **kwargs):
    profile, created = User.objects.get_or_create(email=instance)
    if created:
        profile.save()