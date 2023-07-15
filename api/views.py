from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from users.models import *
from Gestion.models import *
from .serializer import *

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

