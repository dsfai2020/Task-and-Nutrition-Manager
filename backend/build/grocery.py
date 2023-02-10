# This will be the flask app for the backend of the site

from flask import Flask
from flask_cors import CORS

# for receiving payloads
from flask import request

app=Flask(__name__)
# Don't forget that the : after /profile is key.  route is the key followed by dictionary of origins and the source your wanting to allow access to.
CORS(app, resources={r"/profile": {"origins": "https://prod.d2ex35j7wbbaej.amplifyapp.com"}, r"/dbPost": {"origins": "https://prod.d2ex35j7wbbaej.amplifyapp.com"}})


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