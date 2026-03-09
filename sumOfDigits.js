const sumOfDigits=(num)=>{
    let arr=Array.from(String(num),Number);
    console.log(arr);
    return arr.reduce((accum,curEle)=>accum+=curEle,0);
}
console.log(sumOfDigits(1234));
