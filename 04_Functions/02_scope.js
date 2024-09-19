let a=10
const b=20;
var c=30;
console.log(a);
console.log(b);
console.log(c);

if(true){
    let a=3;
    const b=770;;
    var c=90;
    console.log(a);//a=3
}
console.log(a);//a=10
console.log(b);
console.log(c);// c=90

function one(){
    const username="pawan";
    function two(){
        const website="youtube";
        console.log(username);// will print pawan bcz for this block username is global varibale
    }
    //console.log(website);//will be error bcz we cant acces the varibale outside the block
    two();

}
one();



// ++++++++++++++++++ hoisting ++++++++++++++++++++++
addOne(5);
function addOne(num){
    return num+1;

}
/*
addTwo(5);
const addtwo=function(num){
return num+1;
} this will be error and this is called as hoisting
 */



