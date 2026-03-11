const removeduplicates=(arr)=>{
    return [...new Set(arr)];
}

console.log(removeduplicates([1,2,3,3,4,5,5,4]));
console.log(removeduplicates(['a','a','b','c','f','b','t','j']));
