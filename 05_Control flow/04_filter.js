const coding=["js","ruby","java","python","cpp"];

const value=coding.forEach((item)=>{
    console.log(item);
});
console.log(value);//undefined 
// for each do not return anything



const mynums=[1,2,3,4,5,6,7,8];
//The filter() method creates a new array containing elements that satisfy a specified condition.
// filter  take call back function which should satisfy the condition 
const newnums=mynums.filter((num)=>num>4);
// if we open the scope then we have write return keyword
// filter retun the value
console.log(newnums);


// map
// almost evry thing similar to filter 
const mynumber=[1,2,3,4,5,6,7,8,9,10];
let newnumber=console.log(mynumber.map((num)=>num+10));

newnumber=console.log(mynumber.map((num)=>num*10).map((num)=>num+1));



 // reduce

const numbering=[1,2,3,4,5];

 const total=numbering.reduce(function(acc,cval){
    console.log(`acc:${acc}and cval:${cval}`);
    
    return acc+cval;

 },0);
 console.log(total);

 

