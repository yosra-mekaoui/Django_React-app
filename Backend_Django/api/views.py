from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from users.models import *
from Gestion.models import *
from .serializer import *
# from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .validations import custom_validation, validate_email, validate_password



class UserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	def post(self, request):
		clean_data = custom_validation(request.data)
		serializer = UserRegisterSerializer(data=clean_data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.create(clean_data)
			if user:
				return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    
    def post(self, request):
        data = request.data
        assert validate_email(data)
        assert validate_password(data)
        serializer = UserLoginSerializer(data=data)
        
        try:
            if serializer.is_valid(raise_exception=True):
                user = serializer.check_user(data)
                login(request, user)
            
                # Get additional user information (modify this part based on your user model)
                user_info = {
                    "username": user.username,
                    "email": user.email,
                    "password": user.password,
                     "roles": list(user.roles.values_list('nom', flat=True)),  # Convert roles to a list of role names
                    "nom":  user.nom,
                    "prenom": user.prenom,
                    "grade": user.grade,



                    # Add other fields you want to include in the response
                }
            
                # Merge the additional user information with the serializer's data
                response_data = {
                    **serializer.data,
                    "user_info": user_info,
                    # "token": token.key  # Include the token in the response if desired
                }
            
                return Response(response_data, status=status.HTTP_200_OK)
        except Enseignant.DoesNotExist:
            # Handle the exception when the user is not found
            error_message = {"error": "User not found."}
            return Response(error_message, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            # Handle other exceptions (e.g., serializer validation error, server error)
            error_message = {"error": str(e)}
            return Response(error_message, status=status.HTTP_400_BAD_REQUEST)


class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	##
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)

#------------------------api Enseignant------------------

@api_view(['GET'])
def getEnseignants(request):
    enseignants = Enseignant.objects.all()
    serializer = EnseignantSerializer(enseignants, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def addEnseignant(request):
    serializer = EnseignantSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def updateEnseignant(request, id=None):
    enseignant = Enseignant.objects.get(id=id)

    serializer = EnseignantSerializer(instance=enseignant, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def deleteEnseignant(request, id=None):
    enseignant = Enseignant.objects.get(id=id)

    enseignant.delete()
    return Response("Enseignant deleted")

@api_view(['GET'])
def getEnseignant(request, id=None):
    enseignant = Enseignant.objects.get(id=id)
    serializer = EnseignantSerializer(enseignant)
    return Response(serializer.data, status=status.HTTP_200_OK)


# ----------------api Role---------------------------
@api_view(['GET'])
def getRoles(request):
    roles = Role.objects.all()
    serializer = RoleSerializer(roles, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def addRole(request):
    serializer = RoleSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['PUT'])
def updateRole(request, id=None):
    role = Role.objects.get(id=id)

    serializer = RoleSerializer(instance=role, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['DELETE'])
def deleteRole(request, id=None):
    role = Role.objects.get(id=id)

    role.delete()
    return Response("Role deleted")


@api_view(['GET'])
def getRole(request, id=None):
    role = Role.objects.get(id=id)
    serializer = RoleSerializer(role)
    return Response(serializer.data, status=status.HTTP_200_OK)


# ----------------api Module---------------------------
@api_view(['GET'])
def getModules(request):
    modules = Module.objects.all()
    serializer = ModuleSerializer(modules, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def addModule(request):
    serializer = ModuleSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'PATCH']) # PATCH is used for partial updates
def updateModule(request, id=None):
    module = Module.objects.get(id=id)

    serializer = ModuleSerializer(instance=module, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def deleteModule(request, id=None):
    module = Module.objects.get(id=id)

    module.delete()
    return Response("Module deleted")

@api_view(['GET'])
def getModule(request, id=None):
    module = Module.objects.get(id=id)
    serializer = ModuleSerializer(module)
    return Response(serializer.data, status=status.HTTP_200_OK)


# ----------------api Niveau---------------------------
@api_view(['GET'])
def getNiveaux(request):
    niveaux = Niveau.objects.all()
    serializer = NiveauSerializer(niveaux, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def addNiveau(request):
    serializer = NiveauSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'PATCH']) # PATCH is used for partial updates
def updateNiveau(request, id=None):
    niveau = Niveau.objects.get(id=id)

    serializer = NiveauSerializer(instance=niveau, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['DELETE'])
def deleteNiveau(request, id=None):
    niveau = Niveau.objects.get(id=id)

    niveau.delete()
    return Response("Niveau deleted")


@api_view(['GET'])
def getNiveau(request, id=None):
    niveau = Niveau.objects.get(id=id)
    serializer = NiveauSerializer(niveau)
    return Response(serializer.data, status=status.HTTP_200_OK)


# ----------------api Classe---------------------------
@api_view(['GET'])
def getClasses(request):
    classes = Classe.objects.all()
    serializer = ClasseSerializer(classes, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def addClasse(request):
    serializer = ClasseSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['PUT', 'PATCH']) # PATCH is used for partial updates
def updateClasse(request, id=None):
    classe = Classe.objects.get(id=id)

    serializer = ClasseSerializer(instance=classe, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['DELETE'])
def deleteClasse(request, id=None):
    classe = Classe.objects.get(id=id)

    classe.delete()
    return Response("Classe deleted")


@api_view(['GET'])
def getClasse(request, id=None):
    classe = Classe.objects.get(id=id)
    serializer = ClasseSerializer(classe)
    return Response(serializer.data, status=status.HTTP_200_OK)


# ----------------api Option---------------------------
@api_view(['GET'])
def getOptions(request):
    options = Option.objects.all()
    serializer = OptionSerializer(options, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def addOption(request):
    serializer = OptionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['PUT', 'PATCH']) # PATCH is used for partial updates
def updateOption(request, id=None):
    option = Option.objects.get(id=id)

    serializer = OptionSerializer(instance=option, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def deleteOption(request, id=None):
    option = Option.objects.get(id=id)

    option.delete()
    return Response("Option deleted")


@api_view(['GET'])
def getOption(request, id=None):
    option = Option.objects.get(id=id)
    serializer = OptionSerializer(option)
    return Response(serializer.data, status=status.HTTP_200_OK)
#UP
@api_view(['GET'])
def getUPs(request):
    ups = UP.objects.all()
    serializer = UPSerializer(ups, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def addUP(request):
    serializer = UPSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['PUT', 'PATCH']) # PATCH is used for partial updates
def updateUP(request, id=None):
    up = UP.objects.get(id=id)

    serializer = UPSerializer(instance=up, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['DELETE'])
def deleteUP(request, id=None):
    up = UP.objects.get(id=id)

    up.delete()
    return Response("UP deleted")


@api_view(['GET'])
def getUP(request, id=None):
    up = UP.objects.get(id=id)
    serializer = UPSerializer(up)
    return Response(serializer.data, status=status.HTTP_200_OK)