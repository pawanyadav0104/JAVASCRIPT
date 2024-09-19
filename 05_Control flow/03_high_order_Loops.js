// for of loop

const { map } = require("jquery");

const arr=[1,2,3,4,5];
// for (const element of object) {
    // element is here the varibale and object is in which we want to apply the loop 

// }

for (const i of arr) {
    console.log(i);
}
const greeting="helloworld";
for (const greet  of greeting) {
    console.log(greet);// gives the each character 
}

// MAPS  map is object which holds the key oder pair and remeber the original insertion order of the keys
// it may be used as key value pair 
// unique value only 

const mapp=new Map();
mapp.set('in','india');
mapp.set('us','usa');
mapp.set('fr','france');

console.log(mapp);


// how to apply loop on map
for(const key of mapp) {// to print key vlaue [key ,value]
    console.log(key);
}


// to apply for of in object // object are iterable

// const obj={
//     name:'nfs',
//     size:8990
// };
// for (const i of obj) {
//     console.log(i);
// }

// for in loop used to apply in object 

const myobj={
    js:"javascript",
    cpp:"c++",
    j:"java",
    swift:"swift by apple"
};
for (const key in myobj) {
     console.log(key);
     console.log(myobj[key]);
     
}





// for each loop 
const code=["js","java","c++","python"];
code.forEach(i => {
    console.log(i);
    
});
