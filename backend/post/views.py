from django.contrib.auth import get_user_model
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.response import Response

from project.permissions import IsUser
from post.models import Post
from post.serializers import PostSerializer, ToggleLikeSerializer

User = get_user_model()


class ListCreatePostView(ListCreateAPIView):
    # display data in descending order from newest to highest
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(posted_by=self.request.user)


class RetrieveUpdateDeletePostView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_url_kwarg = 'post_id'
    permission_classes = [IsUser]


class ToggleLikePostView(GenericAPIView):
    queryset = Post.objects.all()
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'post_id'

    def get_serializer_class(self):
        return ToggleLikeSerializer

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class ListLikedPostView(GenericAPIView):
    queryset = Post.objects.all()
    permission_classes = [IsUser]
    serializer_class = PostSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(liked_by=request.user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListSpecificUserPostView(GenericAPIView):
    queryset = Post.objects.all()
    permission_classes = [IsUser]
    lookup_url_kwarg = 'user_id'

    def get_serializer_class(self):
        return PostSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(posted_by=kwargs['user_id'])
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListFollowingPostsFromUserView(GenericAPIView):
    queryset = User.objects.all()
    permission_classes = [IsUser]

    def get_serializer_class(self):
        return PostSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(followers=request.user.id)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)





# test from nour