const countchar=(words,char)=>{
    words=words.toLowerCase();
    char=char.toLowerCase();

    totalcount=words.split("").reduce((accum,currchar)=>{
        if(currchar==char){
            accum++;
        }
        return accum;
    },0);
    console.log(totalcount)
    return totalcount;
}

console.log(countchar("misssIpi","I"));
