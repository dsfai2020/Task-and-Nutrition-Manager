from pymongo import MongoClient
from dotenv import load_dotenv
import os

def get_database():
    load_dotenv()
    MONGOSECRET=os.getenv('MONGO_SECRET')
    MONGOCLUSTER=os.getenv('MONGO_CLUSTER')

    # Provide the mongodb atlas url to connect python to mongodb using pymongo
    CONNECTION_STRING = f"mongodb+srv://dave_the_developer:{MONGOSECRET}@cluster0.{MONGOCLUSTER}.mongodb.net/?retryWrites=true&w=majority"
 
    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
    client = MongoClient(CONNECTION_STRING)
 
    # This creates it but mongo doesn't create it until there are collections in it
    # Create the database for our example (we will use the same database throughout the tutorial
    return client['user_shopping_list']
  
# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":   
  
    # Get the database
    dbname = get_database()