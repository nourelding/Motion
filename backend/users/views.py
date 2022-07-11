from cgitb import lookup
from django.shortcuts import render
from .serializers import UserSerializer, FriendsSerializer, InterestSerializer
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView, ListAPIView, \
    RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from project.permissions import IsUser
from rest_framework import filters
from .models import Friend_request, Interest, ResetPassword
from django.core.mail import send_mail
from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import send_mail

User = get_user_model()


class GetUsers(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    search_fields = ['username', 'first_name', 'last_name', 'email']
    filter_backends = (filters.SearchFilter,)


class GetSpecificUser(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = 'user_id'


class GetLoggedUser(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsUser]

    def get_object(self):
        return self.request.user


class FriendRequest(RetrieveUpdateDestroyAPIView):
    queryset = Friend_request.objects.all()
    serializer_class = FriendsSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'friend_request_id'

    def patch(self, request, *args, **kwargs):
        status = request.data['status']
        print(status)
        friend_request = self.get_object()
        friend_request.status = status
        friend_request.save()

        print(friend_request.sender)
        print(friend_request.receiver)
        print(friend_request.status)

        if status == 'rejected':
            friend_request.sender.friends.remove(friend_request.receiver)

        elif status == 'accepted':
            friend_request.sender.friends.add(friend_request.receiver)
            send_mail(
                'Motion Friend Request',
                f'Hello {friend_request.sender.username} \n Your friend request to : {friend_request.receiver.username} was accepted',
                'sit.academy.testing@gmail.com',
                [f'{friend_request.sender.email}'],
                fail_silently=False
            )

        return Response(self.get_serializer(friend_request).data, status=200)


class SendFriendRequest(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = FriendsSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'user_id'

    def post(self, request, *args, **kwargs):
        user = request.user
        receiver = self.get_object()

        friend_request = Friend_request(sender=user, receiver=receiver)
        friend_request.save()
        send_mail(
            'Motion Friend Request',
            f'Hello {receiver.username} \n You have friend request from : {user.username}',
            'sit.academy.testing@gmail.com',
            [f'{receiver.email}'],
            fail_silently=False
        )

        return Response(self.get_serializer(friend_request).data)


class ListFollowers(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        return self.request.user.follwers


class ListFollowing(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        return self.request.user.following


class ToggleFollowe(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'user_id'

    def post(self, request, *args, **kwargs):
        user_to_follow = self.get_object()
        user = request.user

        print(user_to_follow)
        print(user)

        if user_to_follow in user.following.all():
            user.following.remove(user_to_follow)

        else:
            user.following.add(user_to_follow)
            send_mail(
                'Motion User Follow',
                f'Hello {user_to_follow.username} \n you have new follow from : {user.username}',
                'sit.academy.testing@gmail.com',
                [f'{user_to_follow.email}'],
                fail_silently=False
            )
        return Response(self.get_serializer(user).data)


class FriendOfList(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        user = User.objects.get(id=self.kwargs['user_id'])
        return user.friends


class FriendList(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        return self.request.user.friends


class ResetPasswordView(GenericAPIView):
    permission_classes = []

    def post(self, request, *args, **kwargs):
        user_email = request.data['email']
        user = User.objects.get(email=user_email)
        reset_password = ResetPassword(email=user_email)
        reset_password.save()
        # regeteration = Regesteration.objects.create(user=new_user)

        send_mail(
            'Motion Password Reset Code',
            f'Hello {user.username} \n Please use this code {reset_password.code} to Reset your Password',
            'sit.academy.testing@gmail.com',
            [f'{user.email}'],
            fail_silently=False
        )
        return Response(status=200)


class ValidationPassword(GenericAPIView):
    serializer_class = UserSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        code = request.data['code']
        email = request.data['email']

        try:
            check_validation = ResetPassword.objects.get(code=code, email=email, code_used=False)
            user = User.objects.get(email=email)
            user.set_password(request.data['password'])
            user.save()

            check_validation.code_used = True
            check_validation.save()

            return Response(self.get_serializer(user).data)

        except ObjectDoesNotExist:
            return Response(status=404, data=f"{code} is not valid for this email: {email}")



















