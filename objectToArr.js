let obj={
    name:"tejas",
    age:20,
    collage:"pccoe",
}

//object to array
let entries=Object.entries(obj);
console.log(entries);
console.log(entries.flat());

// array to object
let newobj=Object.fromEntries(entries);
console.log(newobj);

