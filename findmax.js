// const findmax=(arr)=>{
//     let ans=arr.sort((a,b)=>b-a);
//     return ans[0];
// }
const findmax=(arr)=>{
    console.log(...arr);
    
    return Math.max(...arr);
}
console.log(findmax([4,6,2,9,10,3]));
console.log(findmax([6]));
