import requests
import pytest
import json

# flask --app mock_server run --debugger --host=0.0.0.0
# pytest test_formulas.py -rP -v

"""You took time developing middleware on notebooks.  You brought it over and now you want to test out the send receive endpoints of the api that your front end will eventually be using in production.  Your making sure that everything is formatted to a json dictionary type of return.  Your also making sure that the middleware functions are clean.  Your considering putting them directly into the actual server or including extra python script.py files and just importing them in on heroku.  Or even making it into an env package.  Also your using:

mock_server.py which is a basic flask server running listening for calls
test_formulas.py which is simulating a front end loosely.  You can play around with the middle ware on either side.
pandas_test_formulas.ipynb which is an exploratory notebook for getting faster feed back without having to resort to terminal each setup.

NOTE: The middleWare is hardcoded into this file for now.  It can and should probably be separated into its own file.  But for testing purposes I'll leave it in here for simplicity sake.

NOTE: You can test what gets sent and what gets received.  Mocking a frontend send and a backend reception"""

# ----API CALLS TO MOCK SETUP----

# Passed
def test_basic_ping_to_mock():
    url='http://127.0.0.1:5000/projections'
    print(url)
    myobject={'name': 'blue'}
    x=requests.post(url, json=myobject)
    assert x.json()['name']=='blue', 'failed'

# Passed
def test_basic_get_to_mock():
    url='http://127.0.0.1:5000'
    x=requests.get(url)
    assert x.json()['Hello']=='Full Stack Developer!', 'Failed'


def test_set_reducer_post():
    url='http://127.0.0.1:5000/setReducer'
    myobject={'name': 'blue'}
    x=requests.post(url, json=myobject)
    assert x.json()['previous']==300, 'failed'

def test_access_args():
    url='http://127.0.0.1:5000/accessArgs'
    myobject={'name': 'red'}
    x=requests.post(url, json=myobject)
    assert x.json()['name']=='blue'

def test_access_args():
    url='http://127.0.0.1:5000/accessArgsWithMiddleWare'
    myobject={'weight': 300}
    x=requests.post(url, json=myobject)
    assert x.json()['reduced set']==270.0