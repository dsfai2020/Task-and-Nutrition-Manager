from pandas import DataFrame


ToDo={
    "task": "polish up on testing",
    "task2": "front end css testing"
    }

df=DataFrame([ToDo])

def test_pandas_dictionary():
    assert ToDo['task']=='polish up on testing', 'Failed'

def test_pandas_dataframe_dictionary():
    print(df)
    # Accessing the column with task and accessing the exact item by using the index row 0
    assert df['task'][0]=='polish up on testing', 'Failed'

def test_adding_to_a_dataframe():
    newdf=DataFrame(df)
    newdf['task3'][0]='blue'
    assert newdf['task3'][0]=='brush up on adding to frames', 'Failed'

def test_adding_a_record():
    df.task[1]="new record"
    print(f'Adding a record: {df.task[1]}')
    assert df.task[1]=='Green', 'Failed'

# Review combining of columns for better queries.
# This is to help with middleware Querying the Database of mongo from front->flask calls.
# It will lead to returns that the front end can eventually processes

# The purpose is to modify and return for the front end to display exp gains 

# Make sure that you check out the details on your discordbot


