const myArrays=[0,1,2,3,4,5];// declaring array 
const myArrays1=[0,1,2,3,"pawan","kumar"];// valid
const myArrys=new Array(1,2,3,4);

// arrays in js can be resize

/*
in js if we perfrom the array copy operations then it create shalllow copies
shallow copy of an object share the same reference as same source if make change in arrays then original array will also changed

deep copy they do not share the same refrence point 
*/

// methods of arrays

myArrays.push(8)// adds at the end of arrays
console.log(myArrays);// it chnage the full array

myArrays.pop()// remove from  the end of arrays
console.log(myArrays);

myArrays.unshift(0)// adds at the start of aarys and shift all the element to the one place forward
console.log(myArrays);


myArrays.shift(0)// remove from the first position and shift one element to left 
console.log(myArrays);


// .includes(9) gives true if present 
// .indexOf(9) give the index if present or -1 if not present


const newArr=myArrays.join();
console.log(newArr);

// slice and splice
//  slice returns a copy of section of an arrays start and end and end is not included in this 

const myn1=myArrays.slice(1,3);
console.log(myn1);

const myn2=myArrays.splice(1,3);
console.log(myn2);

/*
the main difference between slice and splice is 
in slice end is not included and there is not change in the original aarays 
in splice end is included and main thing is that the original aarays is manipulated means element are removed from the 
original aarys which are the part of the splice 
*/

 




