// if
// if(conditon){// contion should be true 
   // code 
// };

const balance=100;
if(balance>500){
    console.log("more than 500");
}
else{
    console.log("less than 500");
}


// switch 
const month=3;

switch (month) {
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
         console.log("march")
        break;// agr yaha par break nhi hota sara code yaha se execute ho jata h execpt defualt

    default:
        console.log("april may ...")
        break;
}


// string is considered as true value and empty string is considred as false we can use this as checking the condtion 
// false,0,-0,bigint,null,undefined and  NaN is considered as negative value 
// true value are 1 true any string "0""false",[],{},function(){}
// to check the object as the conditon
// if(Object.keys()){

// }

//Null coalescing opertor(??) works on only :null undefined  
let val1;
val1=5??10;
val2=null??10;
console.log(val1);//5
console.log(val2);//10
val2=null??10??20;//20

// terniary operator
condition?true:false;

