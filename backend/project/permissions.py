from rest_framework.permissions import BasePermission


class IsUser(BasePermission):
    def has_object_permission(self, request, view, obj):
        if obj == request.user or obj.posted_by == request.user:
            return True
        elif request.method == "GET":
            return True
        else:
            return False
