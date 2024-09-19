const user={
    userName:"pawan",
    age:19,
    price:999,
    email:"pawan@gmail.com",
    welcome:function(){
        console.log(`${this.userName} welcome to the website`);// this keyword refer the current context

        console.log(this);//  wil print everything inside the user 
    }
};
user.welcome();//pawan welcome to the website
user.userName="sam";
user.welcome();// sam welcome to the website 
console.log(this);// will print {} empty object or in broswer will give window this global object



//+++++++++++ ARROW FUNCTIONS+++++++++++++++


function chai(){
    console.log(this);// will give a lots of value

}
chai();


// to create arrow function  ()=>{}
const chai= ()=>{
    let usernamee="hitesh";
    console.log(this.usernamee);// undefined
    console.log(this);// {}
};

const adding= (num1,num2)=>{
    return num1+num2;

}
console.log(adding(6,6));

// for the single code we can also write the function as 
// const adding=(num1,num2)=>(num1+num2);// for object({user:"hits"});



//IIFE immediately invoked functions expressions
// the functions which are invoked immediately just after the defination to avoid the pollution of the global scope
// they can be done by wrap the function in () and then put ();just after that 
(function chau(){
    console.log("ckjasdkas");
})();


