from django.urls import path

from post.views import ListCreatePostView, RetrieveUpdateDeletePostView, ToggleLikePostView, ListLikedPostView, \
    ListSpecificUserPostView, ListFollowingPostsFromUserView


urlpatterns = [
    path('', ListCreatePostView.as_view()),
    path('<int:post_id>/', RetrieveUpdateDeletePostView.as_view()),
    path('toggle-like/<int:post_id>/', ToggleLikePostView.as_view()),
    path('likes/', ListLikedPostView.as_view()),
    path('following/', ListFollowingPostsFromUserView.as_view()),
    path('user/<int:user_id>/', ListSpecificUserPostView.as_view())
]