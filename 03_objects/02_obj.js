// to decalre the object using constructor

const tinderUser=new Object();// empty object is created 
 tinderUser.id="123abc";
 tinderUser.name="sammy";
 tinderUser.isLogged=false;

 console.log(tinderUser);
 const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            fname:"pawan",
            lname:"kumar"
        }
    }
 }
 console.log(regularuser);
 console.log(regularuser.fullname.userfullname.fname);

 // to combine two or more object 
 const obj1={
    name:"pawan",
    age:20,
    crush:"nikita"

 };

 const obj2={
    name:"pawan",
    age:21,
    love:"adeeba",
    address:"gomia"

 };

 //const obj3={obj1,obj2} // then it will give object uske anadr me obj1 obj2 
 
 // to add two object
 const obj3=Object.assign(obj1,obj2);//add these both object which are unique
 console.log(obj3);

 const obj4={...obj1,...obj2};// by using spread method
 console.log(obj4);

 const user=[
    {
    id:1,
    email:"h@gmail.com",
    },
    {
        id:2,
        email:"hi@gmail.com",
        }
]
// to access it user[1].email
// to get the array key 
console.log(Object.keys(tinderUser));// here all the keys are return in the array



 




