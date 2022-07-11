# from django.contrib.auth import get_user_model
# from rest_framework import serializers
#
#
# User = get_user_model()
#
#
# class UserSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = User
#         fields = ['username']
#
#
# class ShowEmailSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = User
#         fields = ['first_name']
#
#
# class FollowersSerializer(serializers.ModelSerializer):
#     followers = ShowEmailSerializer
#
#     class Meta:
#         model = User
#         fields = ['followers']
#
#
# class LikedPostSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = User
#         fields = ['id']
#
#
# class ToggleFollowersSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = User
#         fields = ['following']
from rest_framework import serializers
from .models import User, Friend_request, Interest
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

User = get_user_model()


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ['title', ]


class FriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friend_request
        fields = ['sender', 'receiver', 'status', 'created']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'avatar', 'banner', 'interests']

    def validate_password(self, value: str) -> str:
        return make_password(value)