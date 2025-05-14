const parseData=require('./parseData');

test('A dictionary in the form of a string should be properly parsed back into a dictionary object', ()=>{;
    expect(typeof(parseData())).toBe('object')
})