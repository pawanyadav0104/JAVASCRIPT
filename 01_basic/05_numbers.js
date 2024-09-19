const score =400;// automatically detect it is number
console.log(score)

const balance=new Number(100);// explicitly we define this as the number 
console.log(balance);


console.log(balance.toString());// it is converted to string 
console.log(balance.toFixed(2));// gives n number of decimal places

// toPrecision() return string of rounded into significant number ;
const num=123.456
const a=console.log(num.toPrecision(3))// will rounded of 3 places before the decimal and is 124
console.log(num.toPrecision(2))//will rounded 2 digit and gives rest value in exponential
console.log(num.toPrecision(4))// will rounded of till 4 didgit 1 didgit after that decimal 
console.log(typeof a);


// toLocalString convert the number into according to the american standard 
const hundreds=1000000;
console.log(hundreds.toLocaleString(hundreds));



// *************** MATHS ****************//


console.log(Math);// M should be capital and it gives the object 
console.log(Math.abs(-4));// gives the number in positive
console.log(Math.round(4.4)); // round off the number and is 4
console.log(Math.ceil(4.2));// gives the upper value that is 5
console.log(Math.floor(4.2));// gives the lower value that is 4
console.log(Math.min(4,2,5,6,7));// gives the minimum value of array and max gives highest value 

console.log(Math.random());// always gives the vlaue from 0 to 1 in 16 decimal digits
console.log(Math.random()*10);// it will give from to 0 to 9;
console.log(Math.random()*10+1);// from 1 to 9;


// to get the random number from from specific region we have to do 
const max=20;
const min=10;
console.log(Math.floor(Math.random()*(max-min+1))+min);