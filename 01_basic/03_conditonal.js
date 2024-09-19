console.log("2">1)//true bcs it automatically convert to number for "02>1"
// undefine se jo bhi comaprsion karte usme na hamesha false value aata hai 

/*
(null>0) flase
(null==0) flase
(null>=0)true;
tje reason is that an equality check == and comparsion ><=<= works differently
comparisons convert null to a number and treat it as 0
thats why in third case null>=0 is true and first is 0 is false
*/


/*
"==="  strict check ye na value ke sath sath uske data type ko bhi check karta hai 
("2"==2) true
("2"===2) false
*/



/* there are two types of memory managemnt in js 
stack  they store primitive data type , 
heap they store non primitive data type 

*/


let name="pawwan";
let repo=9;
console.log(name+repo);
// string interpolation can also be done to add two string 
// for this we can use the back slash for tbiss 


/* there are 7 types of primitive data types 
String
number
boolean
null is empty not zero
undefined
Symbol for making something unique eg const id =Symbol('123')
bigint
*/

// js is dynamically typed language  means  wee need to define the type the variable 
 
/* the another types of data types is reference type is also called non primitive there maily type give object and 
 aaray     const hero=["abs","bbs","hjss"]

 object  eg  let myobj={
 name="kaskjsl";
 age=67;
 }

 functions 
 function (){
 code
 }
 */







