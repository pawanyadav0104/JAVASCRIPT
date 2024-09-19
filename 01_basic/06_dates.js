// dates 
let mydate=new Date();
console.log(mydate);
console.log(mydate.toString());//gmt
console.log(mydate.toISOString());// gives iso per 
console.log(mydate.toJSON());

// type of date is object

// month start from o 
let myCreatedDated=new Date(2023,0,14);
console.log(myCreatedDated.toLocaleDateString());// gives days date 

// to get current time
console.log(Date.now()); // gives in millisecond
// to convert the time in second 
console.log(Math.floor(Date.now()/1000));


let newdate=new Date();
console.log(newdate.getMinutes());

