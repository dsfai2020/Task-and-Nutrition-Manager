const findData = (expectedDictionary) => {
    const alist=[];
    for (key in expectedDictionary) {
        alist.push(key);
    } 
    return alist[1]
};

module.exports = findData;