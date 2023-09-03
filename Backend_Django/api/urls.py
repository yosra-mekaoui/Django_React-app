from django.urls import path
from .views import *
from . import views


urlpatterns = [
    path('register', views.UserRegister.as_view(), name='register'),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
	path('user', views.UserView.as_view(), name='user'),
#Enseignant
    path('', getEnseignants),
    path('add/', addEnseignant),
    path('update/<int:id>', updateEnseignant),
    path('chargehoraire/update/<int:id>/<int:charge>',update_charge),
    path('delete/<int:id>', deleteEnseignant),
    path('<int:id>', getEnseignant),
#Role
    path('roles/', getRoles),
    path('roles/add/', addRole),
    path('roles/update/<int:id>', updateRole),
    path('roles/delete/<int:id>', deleteRole),
    path('roles/<int:id>', getRole),

#Module
    path('modules/', getModules),
    path('modules/add/', addModule),
    path('modules/update/<int:id>', updateModule),
    path('modules/delete/<int:id>', deleteModule),
    path('modules/<int:id>', getModule),

#Niveau
    path('niveaux/', getNiveaux),
    path('niveaux/add/', addNiveau),
    path('niveaux/update/<int:id>', updateNiveau),
    path('niveaux/delete/<int:id>', deleteNiveau),
    path('niveaux/<int:id>', getNiveau),
#classe
    path('classes/', getClasses),
    path('classes/add/', addClasse),
    path('classes/update/<int:id>', updateClasse),
    path('classes/delete/<int:id>', deleteClasse),
    path('classes/<int:id>', getClasse),
#option
    path('options/', getOptions),
    path('options/add/', addOption),
    path('options/update/<int:id>', updateOption),
    path('options/delete/<int:id>', deleteOption),
    path('options/<int:id>', getOption),

#UP
    path('ups/', getUPs),
    path('ups/add/', addUP),
    path('ups/update/<int:id>', updateUP),
    path('ups/delete/<int:id>', deleteUP),
    path('ups/<int:id>', getUP),


]
