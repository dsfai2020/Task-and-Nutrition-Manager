
# This is just to create the db

# Just adding datetime for entry purposes
from datetime import datetime
import sqlite3

con=sqlite3.connect('flask_backend.db')

cur=con.cursor()

cur.execute("CREATE TABLE users(name, lvl, exp)")


#datetime.utcnow

