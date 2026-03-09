const Calcavg=(arr)=>{
let total=arr.reduce((accum,currEle)=>accum+currEle,0);
console.log(total);
return total/arr.length;
}

console.log(Calcavg([5,10,2,8]));
