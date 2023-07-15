from rest_framework import serializers
from users.models import *
from Gestion.models import *


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