from flask import Flask
import requests
import json
import asyncio
import pytest


#Example of sending parameters through body

# Needs async on both the server and the senders side.  SO here (client) AND on the flask app.
# def test_db():
#     route='http://127.0.0.1:5000/ez'
#     assert requests.get(route).json()['result']==200, "Should be 200"

def test_db_post_data_send_to_server():
    url='http://127.0.0.1:5000/ez'
    myobject={'name': 'Green'}
    x=requests.post(url, json=myobject)
    assert x.json()['name']=='David', 'Make sure to double check if the json objects are properly formatted on both the client and server sides'

def test_obtained_data_from_db():
    url='http://127.0.0.1:5000/signIn'
    myobject={'name': 'Ace'}
    x=requests.post(url, json=myobject)
    assert x.json()['name']=='Ace', 'Make sure to double check if the json objects are properly formatted on both the client and server sides'
