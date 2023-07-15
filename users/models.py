from django.db import models

# Create your models here.
class Role(models.Model):
    ADMINISTRATEUR = 'administrateur'
    COORDINATEUR_UNITE_PEDAGOGIQUE = 'coordinateur_unité_pédagogique'
    ENSEIGNANT = 'enseignant'
    COORDINATEUR_DES_PROJETS = 'coordinateur_des_projets'
    RESPONSABLE_OPTION = 'responsable_option'
    RESPONSABLE_MODULE = 'responsable_module'

    ROLE_CHOICES = [
        (ADMINISTRATEUR, 'Administrateur'),
        (COORDINATEUR_UNITE_PEDAGOGIQUE, 'Coordinateur unité pédagogique'),
        (ENSEIGNANT, 'Enseignant'),
        (COORDINATEUR_DES_PROJETS, 'Coordinateur des projets'),
        (RESPONSABLE_OPTION, 'Responsable option'),
        (RESPONSABLE_MODULE, 'Responsable module')
    ]

    nom = models.CharField(max_length=50, choices=ROLE_CHOICES)
    description = models.TextField()
    charge_horaire = models.IntegerField()

    def __str__(self):
        return self.get_nom_display()
#samitha Enseignant 5ater User 3mlt prob  
class Enseignant(models.Model):
    nom=models.CharField(max_length=120)
    prenom=models.CharField(max_length=120)
    grade=models.CharField(max_length=120)
    roles = models.ManyToManyField(Role, related_name='enseignants')
    est_enseignant = models.BooleanField(default=False)



    def __str__(self):
        return self.nom

