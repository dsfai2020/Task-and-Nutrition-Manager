const findData=require('./findData.js')

animals={lion: 'gold', tiger: 'orange', elephant: 'grey'}

test('Should ensure that a tiger is within the dictionary', ()=>{
    expect(findData(animals)).toEqual('tiger')
});