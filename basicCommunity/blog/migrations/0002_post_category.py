# Generated by Django 2.0.13 on 2021-06-07 05:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='category',
            field=models.CharField(default='animal', max_length=50),
            preserve_default=False,
        ),
    ]
