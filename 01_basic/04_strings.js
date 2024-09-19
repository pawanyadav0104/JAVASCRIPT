/*
denoted by single ' or "";
*/

const repo="pawan";
const repocCount=50;
console.log(repo+repocCount+"value");

// we can use string interpolation for that `` by using placeholder
console.log(`hello my name is ${repo} and my value is ${repocCount}`);

// we can also decalre the string by
const gameName=new String('pawan');
console.log(gameName);
// we can access each step word of string also 
console.log(gameName[0]);
// we can access also the proto type of these sting by "(stringname.__proto__)";

// .length gives the no of character;
console.log(gameName.length);

// ".toUppercase() gives the string in the upper case 
console.log(gameName.toUpperCase());

// to check the of character at th egiven position  in  the string .charAt()
console.log(gameName.charAt(3));

// to check the positon  of given character  in  the string .indexOf()
console.log(gameName.indexOf('a'));

// to divide the dtring in the substring we  have two argument and one is the start and other is the is end and end is not accepted
// we have use .substring(start,end)
const newString=gameName.substring(0,3);
console.log(newString);


// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
// we can also give the negative value in the slice 
const anotherString=gameName.substring(-8,3);
console.log(anotherString);

//The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
const triming="     pawan     ";
console.log(triming.trim());

//To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
console.log(triming.trimEnd());


/*
The replace() method of String values returns a new string
If pattern is a string, only the first occurrence will be replaced. 
To perform a global search and replace, use a regular expression with the g flag, or use replaceAll() instead.
*/
 const neww =gameName.replace("pawan","kumar");
 console.log(neww);

const para="i will be learing js in few more days :"
console.log(para.replaceAll('i','o'));

// includes() tell the substring is having or not 
//split divide the string and convert return int the form of arays 




