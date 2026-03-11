const validateCreditCard=(str)=>{
    let revNum="";
    str=str.replace(/\D/g,"");
    for(let i=str.length-1;i>=0;i--){
        revNum=revNum+str[i];
    }
    console.log(str);
    console.log(revNum);

    let doublenum=revNum.split("").map((currEle,index)=>{
        if(index%2!=0){
            currEle=currEle*2;
            if(currEle>9){
                currEle=currEle-9;
            }else{
                currEle=currEle;
            }
        }
        return currEle;
    }).reduce((accum,currVal)=>accum+=Number(currVal),0);

    console.log(doublenum);
    if(doublenum%10===0){
        return true;
    }

    return false;
}

console.log(validateCreditCard("4539 1488 0343 6467"));
