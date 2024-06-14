const myLoop = (item) => {
    const x=['a','b','c']
    // Remember that when mapping, it will run the function for each iteration through the item being mapped
    x.map((something)=>{
        // something refers to the iterable.  
        item.push(something)
    });
    console.log(item);
    return item
};

module.exports = myLoop;