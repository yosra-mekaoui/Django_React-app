from django.contrib import admin
from django.contrib.auth.models import Group, Permission

from .models import *

class EnseignantAdmin(admin.ModelAdmin):
      list_display = ('nom', 'prenom', 'grade')



class RoleAdmin(admin.ModelAdmin):
    list_display = ('nom', 'description', 'charge_horaire')

# Register your models here.
admin.site.register(Enseignant, EnseignantAdmin)
admin.site.register(Role, RoleAdmin)

# Création d'un groupe pour le rôle administrateur et attribution des permissions d'administration pour tous les modèles
# groupe_admin, created = Group.objects.get_or_create(name='administrateur')
# for modele in [Enseignant, Role]:
#     permissions = Permission.objects.filter(content_type__app_label=modele._meta.app_label)
#     groupe_admin.permissions.add(*permissions)