const Calcmean=(arr)=>{
    if(arr.length==0){
        return 0;
    }
    let ans=0;
    console.log(arr.length/2);
    
    arr.reduce((accum,currVal)=>ans=Math.ceil(arr.length/2),0)
    return arr[ans-1];
}
console.log(Calcmean([1,2,3,4,5]));
console.log(Calcmean([1,2,3,4,5,7,9]));
console.log(Calcmean([]));
