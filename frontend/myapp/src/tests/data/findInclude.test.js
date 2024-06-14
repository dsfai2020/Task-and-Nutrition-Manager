const findInclude=require("./findInclude.js");

test('The dictionary should be received and the include should return a new dict containing keys with keyword second - and associated values with them', 
    ()=>{
        const testingDictionary={first: 'phase1', second: 'phase2', third: 'phase3', second2: 'phase2.1'}
        expect(findInclude(testingDictionary)).toEqual({second: 'phase2', second2: 'phase2.1'})
    }
);