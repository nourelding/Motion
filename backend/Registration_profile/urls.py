from django.urls import path
from Registration_profile.views import RegesterationView


urlpatterns = [
    path('', RegesterationView.as_view()),
]