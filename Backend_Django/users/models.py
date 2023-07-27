from django.db import models
from django.core.exceptions import ValidationError
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

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
def is_mail_esprit(value):
    if str(value).endswith('@esprit.tn') == False:
        raise ValidationError(
            "Your email must be @esprit.tn"
        )
       
class AppUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('An email is required.')
        if not username:
            raise ValueError('A username is required.')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('An email is required.')
        if not username:
            raise ValueError('A username is required.')
        user = self.create_user(email, username, password, **extra_fields)
        user.is_superuser = True
        user.save()
        return user

	
#samitha Enseignant 5ater User 3mlt prob  
class Enseignant(AbstractBaseUser, PermissionsMixin):
    # probleme fl id
    # user_id = models.AutoField(primary_key=True)  # Vous pouvez définir une valeur par défaut ici, par exemple 1.
    email = models.EmailField(
        unique=True,
	    null=True,
	    default=None,
        validators=[
            is_mail_esprit
        ]
    )
    username = models.CharField(max_length=50, unique=True ,default="username_Default")
    nom=models.CharField(max_length=120)
    prenom=models.CharField(max_length=120)
    grade=models.CharField(max_length=120)
    roles = models.ManyToManyField(Role, related_name='enseignants')
    password = models.CharField(max_length=128, default='')
    is_staff = models.BooleanField(
        default=True,
        help_text="Designates whether the user can log into the admin site.",
    )



    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    objects = AppUserManager()

    def __str__(self):
        return self.username

