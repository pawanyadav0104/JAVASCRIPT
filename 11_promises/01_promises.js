//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// it is an object in js 
// it is a soln to the callback hell
// it make assure that weather the work will happen or not but it ensure the completion
// there are three states of promises
// pending// fullfilled //reject
// they take call back as function


// to create a promises
// there are two parts of promises resolve or rejection
const promises1=new Promise(function(resolve,reject){
    // do an async task like db calls,cryptography
    setTimeout(function(){
        console.log("Async task is completing");
        resolve();
    },1000)

});

// to consume the promises
// .then is directly connected to resolve
promises1.then(function(){
       console.log("promises is completed");
        
    }
)


// another way to make the promises 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("completing async task two ");
        resolve();

    },2000)
}).then(function(){
    console.log("completed the second task ");
})



// promise number three 
const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai aur code",email:"chai@exm.com"})// to pass the data in resolve
    },1000)
})

promise3.then(function(user){
    console.log(user);// jo bhi parameter pass karte h wo yaha pr aa jata h 
})



// promise four to
const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"chai ke sath code",email:"chaikesath@exm.com"});
        }
        else{
            reject("error occured something")
        }
    },2000)
})
promise4.then(function(user){
    console.log(user);
}).catch(function(user1){
    console.log("try once more:",user1)
})


// promise 5
const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"chai ke sath code",email:"chaikesath@exm.com"});
        }
        else{
            reject("error occured something")
        }
    },2000)
})
promise5.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(user1){
    console.log("try once more:",user1)
})



// then aur catch ke badd me ek finally rehta h jo hamesha execute hoga 
// ye bata tha h ki apka kaam ho gya h either wo resolve ho gya h ya phir reject ho par kaam ho gya h 
// promise 6


const promise6=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"chai ke sath code",email:"chaikesath@exm.com"});
        }
        else{
            reject("error occured something")
        }
    },2000)
})
promise6.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(user1){
    console.log("try once more:",user1)
}).finally(()=>{
    console.log("your work has been done:either resolved or rejected ");
})



// promise 7

const promise7=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;// flase hoga toh resolve wala print hoga 
        if(!error){
            resolve({username:"javascript",password:"1234"});
        }
        else{
            reject("js went wrong")
        }
    },1000)
})
//users


//async function me andar kuch value aayega 
async function cosnsumepromise7() {
    const res=await promise7
    //console.log(res);// yaha pr error aa rha kyuki isko lag rha ki yaha pr value aayega 

    
}
cosnsumepromise7();



// async function getallusers(){
//    try {
//     const response=await fetch("https://jsonplaceholder.typicode.com/");
//     //console.log(response);
    
//     const data= await response.json();
//     console.log(data);
//    } catch (error) {
//     console.log("error",error);
    
//    }
// }
//getallusers();


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})






