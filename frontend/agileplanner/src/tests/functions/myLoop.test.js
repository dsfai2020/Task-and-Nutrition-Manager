const myLoop=require('./myLoop.js');

const myList=['red', 'green', 'blue'];

test("Should return a loop of all the items", ()=>{
    expect(myLoop(myList)).toEqual(['red', 'green', 'blue', 'a', 'b', 'c'])
    }
);

// Don't forget that the module must be exported on the js file - not the test itself.