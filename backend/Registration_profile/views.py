from rest_framework.generics import GenericAPIView
from .models import Regesteration
from django.core.mail import send_mail
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from users.serializers import UserSerializer
from django.core.exceptions import ObjectDoesNotExist

User = get_user_model()


class RegesterationView(GenericAPIView):
    permission_classes = []

    def post(self, request, *args, **kwargs):
        user_email = request.data['email']
        new_user = User(email=user_email, username=user_email, is_active=False)
        new_user.save()
        regeteration = Regesteration(user=new_user)
        regeteration.save()
        # regeteration = Regesteration.objects.create(user=new_user)

        send_mail(
            'Motion Regesteration Code',
            f'Hello {new_user.username} \n Please use this code {regeteration.code} to validate your email',
            'sit.academy.testing@gmail.com',
            [f'{new_user.email}'],
            fail_silently=False
        )
        return Response(status=200)


class Validation(GenericAPIView):
    serializer_class = UserSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        code = request.data['code']
        email = request.data['email']

        try:
            check_validation = Regesteration.objects.get(code=code, user__email=email)
            check_validation.user.username = request.data['username']
            check_validation.user.first_name = request.data['first_name']
            check_validation.user.last_name = request.data['last_name']
            check_validation.user.set_password(request.data['password'])
            # check_validation.password_confirm = request.data['password_confirm']
            check_validation.user.is_active = True
            check_validation.user.save()
            check_validation.save()
            return Response(self.get_serializer(check_validation.user).data)

        except ObjectDoesNotExist:
            return Response(status=404, data=f"{code} is not valid for this email: {email}")
