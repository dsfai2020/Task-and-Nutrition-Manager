// warn, log, debug, error are all different console logs you can use for testing purposes.

// expectedDictionary comes in from the test.  The dictionary setup is there. Goal is to scan keynames containing 'second'
const findInclude = (expectedDictionary2) => {
    // forDelivery is a mockstate
    forDelivery={};
    console.debug('testing');
    console.log(expectedDictionary2)
    // cycle through the keys
    for (let each in expectedDictionary2) {
        console.warn(each);
        // Setting to = simply checks if the statement checks out as true.  Setting to == checks if it actually is the value.
        if (each.includes('second')) {
            console.debug("Viewing each key that includes second: " + each)
            // creating a key and setting it to the value of the expected.
            forDelivery[each]=expectedDictionary2[each]
        }
    };
    return forDelivery
    
}

module.exports=findInclude