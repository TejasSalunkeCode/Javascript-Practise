const toCamelCase = (str) => {
  let str_arr = str.trim().split(" ");
  console.log(str_arr);
str_arr=str_arr.map((currele,index)=>{
    if(index===0){
        return currele.toLowerCase();
    }else{
        return currele.charAt(0).toUpperCase()+currele.slice(1).toLowerCase();
    }
    
});
console.log(str_arr);
return str_arr.join("");
};
console.log(toCamelCase("hello world from teJaS"));
