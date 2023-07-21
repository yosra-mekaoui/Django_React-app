from rest_framework import serializers
from django.core.exceptions import ValidationError
from users.models import *
from Gestion.models import *
from django.contrib.auth import get_user_model, authenticate


UserModel = get_user_model()


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'

    def create(self, validated_data):
        user_obj = UserModel.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            username=validated_data['username']  # Ajoutez cette ligne pour passer le nom d'utilisateur
        )
        user_obj.nom = validated_data.get('nom', '')  # Ajoutez les autres champs si nécessaires
        user_obj.prenom = validated_data.get('prenom', '')
        user_obj.grade = validated_data.get('grade', '')
        user_obj.save()
        return user_obj


class UserLoginSerializer(serializers.Serializer):
	email = serializers.EmailField()
	password = serializers.CharField()
	##
	def check_user(self, clean_data):
		user = authenticate(username=clean_data['email'], password=clean_data['password'])
		if not user:
			raise ValidationError('user not found')
		return user

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = ('email', 'username')
                
class EnseignantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Enseignant
        fields = '__all__'

class RoleSerializer(serializers.ModelSerializer):
    
        class Meta:
            model = Role
            fields = '__all__'

class ModuleSerializer(serializers.ModelSerializer):
        
            class Meta:
                model = Module
                fields = '__all__'


class NiveauSerializer(serializers.ModelSerializer):
            
                class Meta:
                    model = Niveau
                    fields = '__all__'

class ClasseSerializer(serializers.ModelSerializer):
                
                    class Meta:
                        model = Classe
                        fields = '__all__'

class OptionSerializer(serializers.ModelSerializer):
                    
                        class Meta:
                            model = Option
                            fields = '__all__'