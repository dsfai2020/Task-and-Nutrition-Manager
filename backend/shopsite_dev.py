# This will be the flask app for the backend of the site

from flask import Flask
from flask_cors import CORS

from flask_sqlalchemy import SQLAlchemy

# for receiving payloads
from flask import request
# import sqlite3

# import asyncio
# import pandas

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
CORS(app, resources={r"/profile": {"origins": "https://prod.d2ex35j7wbbaej.amplifyapp.com"}, r"/dbPost": {"origins": "https://prod.d2ex35j7wbbaej.amplifyapp.com"}, r"/signIn": {"origins": "*"}, })


@app.route('/')
def index():
    return {"Hello": "Full Stack Developer!"}

@app.route('/profile')
def my_profile():
    response_body = {
        "name": "David",
        "about": "Happy Thanksgiving!"
        }
    return response_body

@app.route('/sample')
def sample():
    response_body={
    'Test': 'Success'}

    return response_body

@app.route('/db')
def database_portal():
    response_body={
    "result": 200
    }
    return response_body

# creating modular wire of access to specific table so that you can talk to it w url requests. 
@app.route('/db/fitness', methods=['POST'])
def database_table_fitness():
    # dictionary body received via post (post means SENDING data) other creds determine if you'll write.
    payload=request.args
    print(payload)
    response_body={
    "status": "success"
    }
    return response_body

# Perfect
@app.route('/dbPost', methods=['POST'])
def db_post():
    # json should be as is not callable.  Without the () is correct.
    posted_data_received=request.json
    if posted_data_received['name']=="David":
        print('Hello David!')
        print(f'Posted data received: {posted_data_received}')
        response_body={
        'name': 'David',
        'exp': '1',
        'lvl': '1',
        }
        print(f'Response data going out: {response_body}')
        return response_body
    else:
        pass


@app.route('/ez', methods=['GET', 'POST'])
def hope_it_works():
    posted_data_received=request.json
    if posted_data_received['name']=='Green':
        response_body={
        'name': 'David',
        'exp': '1',
        'lvl': '1',
        }
        return response_body

    else:
        response_body={
        "result": 200
        }
        return response_body







# Listens for post data from the front end then communicates middleware to MongoDB before sending data back to the front end.
@app.route('/signIn', methods=['POST'])
def final_function():

    posted_data_received=request.json

    # Make sure that something is always returned.
    if posted_data_received['name']=='test':
        print("HELLO TEST")
        return {"name": "test"}

    elif posted_data_received['name']=='Ace':
        print("Hello Ace")
        return {"name": "Ace"}

    elif posted_data_received['name']=='David':
        load_dotenv()
        MONGOSECRET=os.getenv('MONGO_SECRET')
        MONGOCLUSTER=os.getenv('MONGO_CLUSTER')

        MONGODB_URI = f"mongodb+srv://dave_the_developer:{MONGOSECRET}@cluster0.{MONGOCLUSTER}.mongodb.net/?retryWrites=true&w=majority"
        
        # Connect to MongoDb Cluster with a MongoClient
        client = MongoClient(MONGODB_URI)

        # Get a reference to the 'mongotoflask' database
        db = client.mongotoflask

        # Get a reference to the 'siteusers' collection
        siteusers_collection = db.siteusers
        
        # Create a filter
        document_to_update={"_id": ObjectId('6424b9f854d93a2229d8e2b3')}

        # increment $inc by integer
        add_to_exp={"$inc":{"exp": 1}}

        # Print original document
        print(siteusers_collection.find_one(document_to_update))

        # Write an expression that adds to the target exp by the specified amount.
        result=siteusers_collection.update_one(document_to_update, add_to_exp)

        print("Documents updated: " + str(result.modified_count))

        # Print original document
        print(siteusers_collection.find_one(document_to_update))

        client.close()

        
        # container_list=[]
        # Since the fetch is literally a TUPLE I cant display it as though it were a dicitonary.j
        # for each in sql_fetch:
            # print(each)
            # print(sql_fetch)
            # container_list.append(each)
        
        # print(container_list)
        

        # How to delete records based on a row within a column.
        # cur.execute("""DELETE FROM siteusers WHERE name ='David'""")
        
        # I need to select the data from the db and send it back in a response body
        
        """response_body={
        "name": container_list[0],
        'exp': container_list[1],
        'lvl': container_list[2],
        }"""

        response_body={
            'This': 'test'
        }

        
        # response_body=Flask.Response({"This": "test"})
        # response_body.headers['Access-Control-Allow-Origin']='*'

        # print(f"heres the response body {response_body} NOT from the database but hardcoded...")
        return response_body      

    else:
        print("Error")

 



