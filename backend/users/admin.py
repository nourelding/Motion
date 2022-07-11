from django.contrib import admin

# Register your models here.
from .models import User , Friend_request , Interest , ResetPassword


class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'email', 'username']


admin.site.register(User,UserAdmin)
admin.site.register(Friend_request)
admin.site.register(Interest)

admin.site.register(ResetPassword)