from pymongo_get_database import get_database
from pandas import DataFrame
import unittest

# Internet required
dbname = get_database()

collection_name = dbname["user_1_items"]

item_details = collection_name.find()

# It's more efficient to use pandas to query through the database.
items_df=DataFrame(item_details)
print(items_df)

# brushing up on dataframes with pandas.  You can put multiple columns into a list format within a key.
print(items_df[['item_name', 'ingredients']])

def test_something():
    assert items_df[['item_name', 'ingredients']].item_name[0]=='Egg', 'Failed'

def test_return_accuracy():
    assert items_df[['item_name', 'ingredients']].item_name[1]=='Blue', 'Failed'

#When building new features.  Make a test file for it.  Create functions.  That way it has its own testcase.




