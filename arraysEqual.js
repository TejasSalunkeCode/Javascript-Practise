const arraysAreEqual=(arr1,arr2)=>{
if(arr1.length!=arr2.length){
    return  false;
}
return arr1.every((currval,index)=>currval===arr2[index]);
}
console.log(arraysAreEqual([1,2,3],[1,2,3]));
