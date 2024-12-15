# Generated by Django 5.1.1 on 2024-12-15 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lmsappv1', '0003_course_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='course_cover_image',
            field=models.ImageField(blank=True, null=True, upload_to='course/'),
        ),
        migrations.AlterField(
            model_name='module',
            name='activity',
            field=models.FileField(blank=True, null=True, upload_to='activity/'),
        ),
        migrations.AlterField(
            model_name='module',
            name='content',
            field=models.FileField(blank=True, null=True, upload_to='content/'),
        ),
        migrations.AlterField(
            model_name='module',
            name='intro',
            field=models.FileField(blank=True, null=True, upload_to='intro/'),
        ),
    ]