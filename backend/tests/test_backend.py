from flask import Flask
import requests
import json


def test_ping():
    x='http://127.0.0.1:5000/sample'
    assert requests.get(x).json()['Test']=="Success", 'Should pass?'
    assert requests.get(x).json()=={"Test": "Success"}, 'Should pass?'

def test_db():
    route='http://127.0.0.1:5000/db'
    assert requests.get(route).json()['result']==200, "Should be 200"


# You will be posting (sending) data to the server so that you can get a response back from flask.
# There's at least 2 different ways to send data to the server.  Body or URL.

#post means we are sending data and in this case using a url with query args.  It is a dict by default.
# Anything sent to the db in the URL post (?somearg=something) parameter will be seen as request.arg on the server side.
def test_fitness_table():
    url='http://127.0.0.1:5000/db/fitness'
    response_to_make_post=requests.post(f'{url}?drink=starbucks')
    assert response_to_make_post.json()=={"status": "success"}, "Pass right?"
    
  
#Example of sending parameters through body
def test_db_post_data_send_to_server():
    url='http://127.0.0.1:5000/dbPost'
    myobject={'name': 'David'}
    x=requests.post(url, json=myobject)
    assert x.json()['name']=='David', 'Make sure to double check if the json objects are properly formatted on both the client and server sides'