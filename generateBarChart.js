// const generateBarChart=(arr)=>{
//     const newar=arr.map((currEle,index)=>{
//         let star="";
//         let number=0;
//         while(number<currEle){
//             star+="*";
//             number++;
//         }
//         return `${index+1} : ${star}`;
//     });
//     return newar.join("\n");
// };



const generateBarChart=(arr)=>{
    return arr.map((currElem,index)=>{
        return `${index+1} : ${"*".repeat(currElem)}`;
    }).join("\n");
};


console.log(generateBarChart([5,3,9,7]));
