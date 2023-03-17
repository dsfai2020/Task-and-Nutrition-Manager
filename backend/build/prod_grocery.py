# This will be the flask app for the backend of the site

from flask import Flask
from flask_cors import CORS

# for receiving payloads
from flask import request
import sqlite3

import asyncio
import pandas

app=Flask(__name__)
# Don't forget that the : after /profile is key.  route is the key followed by dictionary of origins and the source your wanting to allow access to.
CORS(app, resources={r"/profile": {"origins": "https://prod.d2ex35j7wbbaej.amplifyapp.com"}, r"/dbPost": {"origins": "https://prod.d2ex35j7wbbaej.amplifyapp.com"}, r"/signIn": {"origins": "https://prod.d2ex35j7wbbaej.amplifyapp.com"}})


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









@app.route('/signIn', methods=['POST'])
def final_function():

    posted_data_received=request.json

    # connects to the db
    # con=sqlite3.connect('flask_backend.db')
    # cur=con.cursor()
    # try:
    #     cur.execute("CREATE TABLE siteusers(name, exp, lvl)")
    # except:
    #     pass
    
    if posted_data_received['name']=='David':
        con=sqlite3.connect('flask_backend.db')
        cur=con.cursor()
        cur.execute("""UPDATE siteusers SET exp = exp+1, lvl = 1 WHERE name = 'David' 
        """)
        con.commit()

        # originally you ran SELECT name FROM siteusers WHERE name='David' and it only returned that name column.
        # So using a * means that you will select all column contents if the column name contains the row record 'David'
        # You can also run a SELECT * FROM siteusers WHERE name='David' AND lvl>0 if you wanted to use more filters. 
        # SPACING MATTERS with the equals sign
        res = cur.execute("SELECT * FROM siteusers WHERE name = 'David'")

        # Fetching pulls it into its own object.  Running another fetch directly after this one will display NOTHING.  So make sure that you place the res.fetchone() into an object like x.
        # print(f'Here is the sql res fetch from the DATABASE {res.fetchone()}')

        sql_fetch=res.fetchone()
        
        container_list=[]
        # Since the fetch is literally a TUPLE I cant display it as though it were a dicitonary.j
        for each in sql_fetch:
            # print(each)
            # print(sql_fetch)
            container_list.append(each)
        
        # print(container_list)
        

        # How to delete records based on a row within a column.
        # cur.execute("""DELETE FROM siteusers WHERE name ='David'""")
        
        # I need to select the data from the db and send it back in a response body
        response_body={
        "name": container_list[0],
        'exp': container_list[1],
        'lvl': container_list[2],
        }

        con.close()
        
        # print(f"heres the response body {response_body} NOT from the database but hardcoded...")
        return response_body      

    elif posted_data_received['name']=='Azer':
        con=sqlite3.connect('flask_backend.db')
        cur=con.cursor()
        cur.execute("""UPDATE siteusers SET exp = exp+1, lvl = 1 WHERE name = 'Azer' 
        """)
        con.commit()
        res = cur.execute("SELECT * FROM siteusers WHERE name = 'Azer'")
        sql_fetch=res.fetchone()
        
        container_list=[]

        for each in sql_fetch:
            print(each)
            print(sql_fetch)
            container_list.append(each)
        
        print(container_list)
        response_body={
        "name": container_list[0],
        'exp': container_list[1],
        'lvl': container_list[2],
        }

        con.close()
        
        print(f"heres the response body {response_body} NOT from the database but hardcoded...")
        return response_body     

    elif posted_data_received['name']=='Ace':
        con=sqlite3.connect('flask_backend.db')
        cur=con.cursor()
        cur.execute("""UPDATE siteusers SET exp = exp+1, lvl = 1 WHERE name = 'Ace' 
        """)
        con.commit()
        res = cur.execute("SELECT * FROM siteusers WHERE name = 'Ace'")
        sql_fetch=res.fetchone()
        
        container_list=[]

        for each in sql_fetch:
            print(each)
            print(sql_fetch)
            container_list.append(each)
        
        print(container_list)
        response_body={
        "name": container_list[0],
        'exp': container_list[1],
        'lvl': container_list[2],
        }

        con.close()
        
        print(f"heres the response body {response_body} NOT from the database but hardcoded...")
        return response_body     

    else:
        pass

 

    # Display Purposes below.
    # res = cur.execute("SELECT name FROM siteusers WHERE name='David'")
    # res.fetchone()

    # This will add a new row into the db EVERY time its ran so be careful.  I'm using it to just init for now then disabling it.
    # cur.execute("""INSERT INTO siteusers(name, exp, lvl)
    #      VALUES("Azer", 1, 1)
    #      """)
    # cur.execute("""INSERT INTO siteusers(name, exp, lvl)
    #      VALUES("David", 1, 1)
    #      """)    
    # cur.execute("""INSERT INTO siteusers(name, exp, lvl)
    #      VALUES("Ace", 1, 1)
    #      """)    

    # The lvl+1 means that you are going to automatically lvl up that field.  IN the future you may come back to lambdas for linear equations that plug in formulas similar to how jsx works.   
    # cur.execute("""UPDATE siteusers SET exp = 1, lvl = lvl+1 WHERE name = 'Azer' 
    #     """)

    # This deletes everything from the table by not specifying also known as Truncating.
    # cur.execute("""DELETE FROM siteusers""")

    # This is how you delete all records with a given criteria.  You can use > formulas too.  Just be aware of quotes inside the triple quotes. 
    # cur.execute("""DELETE FROM siteusers WHERE name = 'Azer' """)

    # cur.execute("""SELECT * FROM siteusers""")

    # con.commit()
    # con.close()         

    # response_body={
    # "result": 200
    # }
    # return response_body


