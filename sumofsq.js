const sumofsq=(arr)=>{
// let ans=arr.reduce((accum,currval)=>accum=accum+(currval*currval),1);
// return ans-1;
let sum=0;
for(let elem of arr){
    sum=sum+(elem*elem);
}
return sum;
}
console.log(sumofsq([1,2,3,4]));
