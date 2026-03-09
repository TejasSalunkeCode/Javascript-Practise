const startsWith=(str1,str2)=>{
    // let arr=str1.split(" ");
    // let arr2=str2.split(" ");
    // console.log(arr);
    // console.log(arr2);
    
    // if(arr[0]==arr2[0]){
    //     return true;
    // }
    // return false;

    // return str1.toLowerCase().startsWith(str2.toLowerCase());


    return str1.toLowerCase().slice(0,str2.length)===str2;
}
console.log(startsWith("hello world","hello"));
