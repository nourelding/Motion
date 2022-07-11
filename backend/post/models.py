from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Post(models.Model):
    content = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    posted_by = models.ForeignKey(to=User, on_delete=models.SET_NULL, blank=True, null=True, related_name='has_posted')
    liked_by = models.ManyToManyField(to=User, blank=True, related_name='liked_post', )
    external_Link = models.CharField(max_length=500, null=True, blank=True)
    like_count = models.IntegerField(blank=True, null=True)


def user_directory_path(instance, filename):
    # return f"{instance.post_images.author.username}/{instance.post_images.author.id}/{filename}"
    return f"{instance.post_images.author.username}/{filename}"


class Images(models.Model):
    post = models.ForeignKey(Post, related_name='post_images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=user_directory_path)

    def __str__(self):
        return str(self.post)


class Comment(models.Model):
    post_id = models.ForeignKey(Post, related_name='post_comment', on_delete=models.CASCADE)
    content = models.TextField(max_length=5000)
    author = models.ForeignKey(User, related_name='author_comment', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.author} - {self.post_id}"


class SharedPost(models.Model):
    parent_post = models.ForeignKey(Post, related_name='embedding_post',on_delete=models.CASCADE)
    child_post = models.ForeignKey(Post, related_name='is_shared_in',on_delete=models.CASCADE)

    def __str__(self):
        return str(self.parent_post)

#