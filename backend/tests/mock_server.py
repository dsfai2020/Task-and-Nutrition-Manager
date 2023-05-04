# This will be the flask app for the backend of the site

from flask import Flask
from flask_cors import CORS

from flask_sqlalchemy import SQLAlchemy

# for receiving payloads
from flask import request

# import asyncio


from pymongo import MongoClient
import os

# Import ObjectId from bson package (Part of PyMongo Distribution) to enable querying by ObjectId 
from bson.objectid import ObjectId

from dotenv import load_dotenv

# Extras testing
from flask import Response

import pandas


# Create the app
app=Flask(__name__)

# You can configure it locally too for testing.
# app.config['SQLALCHEMY_DATABASE_URI']='sqlite///flask_backend.db'

    
# Don't forget that the : after /profile is key.  route is the key followed by dictionary of origins and the source your wanting to allow access to.

# CORS(app, resources={r"/profile": {"origins": "https://prod.d2ex35j7wbbaej.amplifyapp.com"}, r"/dbPost": {"origins": "https://prod.d2ex35j7wbbaej.amplifyapp.com"}, r"/signIn": {"origins": "*"}, })
CORS(app, resources={r"/profile": {"origins": "http://localhost:3000"}, r"/dbPost": {"origins": 'http://localhost:3000'}, r"/signIn": {"origins": "*"}, r"/accessArgsWithMiddleWare": {"origins": "*"}})


# ----middleWare----

def set_reducer(weight):
    reduction_percent=.10
    reduction=weight*reduction_percent
    body={
        'previous': weight,
        'reduced set': weight-reduction,
        'reduction amount': f'{reduction_percent*100}%'
    }
    return body


@app.route('/')
def index():
    response_body={
        "Hello": "Full Stack Developer!"
        }
    return response_body 

@app.route('/projections', methods=['GET', 'POST'])
def projections():
    payload=request.args
    print(payload)
    response_body={
        'name': 'blue'
    }
    return response_body

@app.route('/setReducer', methods=['GET', 'POST'])
def set_reducer_api():
    
    posted_data_received=request.args
    print('Working so far so good')
    
    # middleWare
    set_reducer(300)

    response_body={'name': 'blue'}
    return set_reducer(300)

# Great Example
@app.route('/accessArgs', methods=['POST'])
def access_posted_args():
    # Success
    posted_data_received=request.get_json()
    print('Testing display of args')
    print(posted_data_received)
    
    response_body={'name': 'blue'}
    return response_body


@app.route('/accessArgsWithMiddleWare', methods=['POST'])
def access_posted_args_then_run_middleware():

    #This is how you access args from json sent here.  Handle it as a dictionary.
    posted_data_received=request.get_json()
    
    print('Testing display of args')
    print(posted_data_received)
    print(posted_data_received['weight'])

    # middleWare using a specific key from the data we received in the POST.
    response_body=set_reducer(posted_data_received['weight'])
    
    print(response_body)
    return response_body