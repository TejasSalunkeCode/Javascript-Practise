function findMode(arr){
let counts={};
let mode;
let maxsum=0;
for(let elements of arr){
    counts[elements]=(counts[elements] || 0)+1;
    if(counts[elements]>maxsum){
        maxsum=counts[elements];
        mode=elements;
    }
}
return mode;
}

console.log(findMode([1,1,2,3,4,2,1,3,6,5,4,1,3,2,2]));
