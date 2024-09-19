// object can  be decalreed in two types one literals and another can be the constructor

// object literals


//Object.create;// also used to create obect by constructor

// to create object 

const jusers={
 name:"pawan", // here key value  pair is used
age:20,
loaction:"bbsr",
email:"pawan@google.com",
isLoggedIn:false,
};

// we can access object either by the . or by the []
console.log(jusers.email);
console.log(jusers["email"]);


// define a symbol and add to object as key and print it 
const mysymbol=Symbol("key1");
// to use it as key it the object we have write [mysymbol] in place of mysymbol
const sys={
    name:"pawan",
    [mysymbol]:"key2",
};
console.log(sys[mysymbol]);


// to change the value of object
jusers.email="pawan8359@microsoft.com";
console.log(jusers["email"]);

// to lock the the content means to make no change
 //Object.freeze(jusers);


// to add function in object
jusers.greeting=function(){
    console.log("keep on learning");
};

console.log(jusers.greeting());// write greeting() not greeting just

