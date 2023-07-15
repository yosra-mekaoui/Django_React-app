from django.db import models
from users.models import *
# Create your models here.
#class Un niveau est caractérisé par un nom, nombre de classes.
class Niveau(models.Model):
    nom=models.CharField(max_length=120)
    nombre_classes=models.IntegerField()
    def __str__(self):
        return self.nom

class Option(models.Model):
    TWIN = 'TWIN'
    SE = 'SE'
    SAE = 'SAE'
    CLOUD = 'CLOUD'
    DS = 'DS'
    WIN = 'WIN'
    SIM = 'SIM'
    SLIM = 'SLIM'
    GAMIX = 'GAMIX'
    INFINI = 'INFINI'
    NOM_CHOICES = [
        (TWIN, 'TWIN'),
        (SE, 'SE'),
        (SAE, 'SAE'),
        (CLOUD, 'CLOUD'),
        (DS, 'DS'),
        (WIN, 'WIN'),
        (SIM, 'SIM'),
        (SLIM, 'SLIM'),
        (GAMIX, 'GAMIX'),
        (INFINI, 'INFINI'),
    ]
    
    nom = models.CharField(max_length=20, choices=NOM_CHOICES)
    nombre_classes = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return self.nom
    
class Classe(models.Model):
    nom = models.CharField(max_length=20)
    niveau = models.ForeignKey(Niveau, on_delete=models.CASCADE)
    options = models.ManyToManyField(Option)

    def __str__(self):
        return self.nom

#Un module est caractérisé par un nom, une description, nombre d’heures d’enseignement, liste des compétences, nombre d’ECTS, fiche module, nombre d'enseignants à affecter et un seul responsable module.
class Module(models.Model):
    nom=models.CharField(max_length=120)
    description=models.TextField()
    nombre_heures=models.IntegerField()
    competences=models.TextField()
    nombre_ects=models.IntegerField()
    fiche_module=models.FileField(upload_to='fichiers_modules/')
    nombre_enseignants=models.IntegerField()
    responsable_module = models.ForeignKey('users.Enseignant', on_delete=models.CASCADE)
def __str__(self):
        return self.nom