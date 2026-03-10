const truncateString=(str,counts)=>{
return counts<=0 ? str : str.slice(0,counts).concat("...");
}
console.log(truncateString("A-ticket a-basket A genn and Yellow basket",0));
