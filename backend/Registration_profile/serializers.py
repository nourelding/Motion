from rest_framework import serializers

from Registration_profile.models import RegistrationProfile


class RegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = RegistrationProfile
        fields = ['email']


class CodeSerializer(serializers.ModelSerializer):

    class Meta:
        model = RegistrationProfile
        fields = ['code']
