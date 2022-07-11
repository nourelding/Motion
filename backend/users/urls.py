from django.urls import path
from .views import GetLoggedUser, GetUsers, GetSpecificUser, FriendRequest, SendFriendRequest, ListFollowers, \
    ToggleFollowe, FriendList, FriendOfList, ListFollowing, ResetPasswordView, ValidationPassword

app_name = 'users'

urlpatterns = [
    path('users/', GetUsers.as_view()),
    path('users/<int:user_id>', GetSpecificUser.as_view()),
    path('users/me', GetLoggedUser.as_view()),

    path('social/followers/toggle-follow/<int:user_id>', ToggleFollowe.as_view()),
    path('social/followers/followers/', ListFollowers.as_view()),
    path('social/followers/following/', ListFollowing.as_view()),

    path('social/friends/request/<int:user_id>', SendFriendRequest.as_view()),
    path('social/friends/requests/<int:friend_request_id>', FriendRequest.as_view()),
    path('social/friends/', FriendList.as_view()),
    path('social/friendsof/<int:user_id>', FriendOfList.as_view()),

    path('auth/password-reset/', ResetPasswordView.as_view()),
    path('auth/password-reset/validation/', ValidationPassword.as_view()),
]
