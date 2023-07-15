from django.contrib import admin
from .models import Niveau, Option, Classe, Module

class ClasseAdmin(admin.ModelAdmin):
    list_display = ('nom', 'niveau', 'options_display')

    def options_display(self, obj):
        options = obj.options.all()
        return ", ".join([option.nom for option in options])
    options_display.short_description = 'Options'

class NiveauAdmin(admin.ModelAdmin):
    list_display = ('nom', 'nombre_classes')

class OptionAdmin(admin.ModelAdmin):
    list_display = ('nom', 'nombre_classes')

#Module
class ModuleAdmin(admin.ModelAdmin):
    list_display = ('nom', 'description', 'nombre_heures', 'competences', 'nombre_ects', 'fiche_module', 'nombre_enseignants', 'responsable_module')
# Register your models here.
admin.site.register(Niveau, NiveauAdmin)
admin.site.register(Option, OptionAdmin)
admin.site.register(Classe, ClasseAdmin)
admin.site.register(Module, ModuleAdmin)