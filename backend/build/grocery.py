# This will be the flask app for the backend of the site

from flask import Flask
from flask_cors import CORS

app=Flask(__name__)
CORS(app, resources={r"/profile": {"origins": "https://prod.d2ex35j7wbbaej.amplifyapp.com"}})



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