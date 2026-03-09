const isPowerOf2=(num)=>{
    let op=false;
    for(let i=1;i<=num;i++){
     if(2**i===num){
        op=true;
     }   
    }
    return op;
}
console.log(isPowerOf2(8));
console.log(isPowerOf2(7));
