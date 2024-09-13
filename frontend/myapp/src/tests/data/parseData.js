const parseData = () => {
    // THE STRING QUOTES MATTER - double quotes inside and singles outside.
    const stringDictionary='{"example": "value 1", "example2": "value 2", "example3": "value 3"}'
    console.debug(stringDictionary);
    console.debug(typeof(stringDictionary));
    const dictionaryRebuilt=JSON.parse(stringDictionary);
    console.warn(dictionaryRebuilt);
    // success
    console.warn(dictionaryRebuilt['example2']);
    return dictionaryRebuilt
}

module.exports=parseData

// understand that a dictionary object that is stringified turns every thing in it to a string. INCLUDING the keys.  This is what happens when you serialize and deserialize the data.  Like something could be a JSON object but it is stringified into local storage.  Parsing UNDOES this.

// BIG TAKEAWAYS.  You need to remember that the type it sends back is Object.
// Also that you can access the object as usual when its formed through parse from stringify.
// Finally you should be able to pass this test.  You were in process at the library before paused.