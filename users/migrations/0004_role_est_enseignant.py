# Generated by Django 4.1 on 2023-07-13 09:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_enseignant_roles'),
    ]

    operations = [
        migrations.AddField(
            model_name='role',
            name='est_enseignant',
            field=models.BooleanField(default=False),
        ),
    ]
