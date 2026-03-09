const removeduplicate=(arr)=>{
    let newArr=[...new Set(arr)];
    console.log(newArr);
    return newArr;
}
console.log(removeduplicate([1,2,3,2,1,4]));
console.log(removeduplicate([5,6,7,7,8,8,9]));
