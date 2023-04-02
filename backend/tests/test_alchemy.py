import os
from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy.sql import func


app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgres://fvhwxnhcwioiqk:d18229033c89c272e1a5486b73f0b10ce8c0d80b388e608eb5fcdcd5fa18b85d@ec2-52-1-92-133.compute-1.amazonaws.com:5432/deu9dmibj8j24t'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)