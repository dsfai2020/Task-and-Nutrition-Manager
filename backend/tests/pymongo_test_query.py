from pandas import DataFrame

# Get the database using the method we defined in pymongo_test_insert file
from pymongo_get_database import get_database
dbname = get_database()
 
# Create a new collection
collection_name = dbname["user_1_items"]
 
item_details = collection_name.find()

# This shows that we can loop through the dictionary object of the db.
# for item in item_details:
    # This does not give a very readable output
    # print(item)

    # So let's replace it with this line. But notice that it doesn't handle missing values well.
    # print(item['item_name'], item['category'])

# It's more efficient to use pandas to query through the database.
items_df=DataFrame(item_details)
print(items_df)

# brushing up on dataframes with pandas.  You can put multiple columns into a list format within a key.
print(items_df[['item_name', 'ingredients']])

