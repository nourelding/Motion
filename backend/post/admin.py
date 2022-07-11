from django.contrib import admin

from post.models import Post
from .models import Comment , SharedPost


class PostAdmin(admin.ModelAdmin):
    list_display = ['id', 'created_at', 'posted_by']


admin.site.register(Post, PostAdmin)
admin.site.register(Comment)
admin.site.register(SharedPost)
