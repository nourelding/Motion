from post.models import Post
from rest_framework import serializers
from users.serializers import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    posted_by = UserSerializer(read_only=True)
    like_count = serializers.SerializerMethodField()

    def get_like_count(self, obj):
        return obj.liked_by.count()

    class Meta:
        model = Post
        fields = ['id', 'content', 'created_at', 'posted_by', 'like_count', 'liked_by']


class ToggleLikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ['liked_by']
