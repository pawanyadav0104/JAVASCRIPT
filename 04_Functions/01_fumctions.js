// to create functions and defination
function myName(){
    console.log("p");
    console.log("a");
    console.log("w");
    console.log("a");
    console.log("n");

};
// myName // this is the refence

// this is the execution
myName();

// to add two number

function addTwoNum(num1,num2){// here num1 num2 are called as parameter
    console.log(num1+num2);
};
 const results=addTwoNum(9,7);// 16 here 9 7 are called as argument
addTwoNum(9,"8");//98
// here if we print results then it will be undefined as the function is not returning something

function addTwoNums(num1,num2){
    return(num1+num2);
};
const results1=addTwoNums(2,3);// it will give 5

//after the return there no code will be executed 

function loginUser(username){

    return `${username} just logged in `;

};
console.log(loginUser("pawan"));

// when we dont pass the any value in the function call then it will give us undefined 
// we can also give the default value like username="sam" and if no username given then sam will be executed 



function calculateCartPrice(...num1){//  if we write ...num1 the it will give [200,300,400] this is called as rest 
    return num1;

}
console.log(calculateCartPrice(200,300,400));// will give 200

// to pass object in function
const userName={
    username:"pawan",
    price:999
};
 function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);

 };
 handleObject(userName);

 // to pass any array in function
 const arr=[2,3,4,5,6]
 function returningArray(anyAray){
    return anyAray;

 }
 console.log(returningArray(arr));
 