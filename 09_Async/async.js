
   // set timeout()


//    setTimeout(function(){
//     console.log("pawan");
//     },2000);

const name=function(){
    console.log("pawan");
}
setTimeout(name,2000);

const change=function(){
    document.querySelector('h1').innerHTML="best javascript series";

}
setTimeout(change,2000);
// to stop the set timeout event from happening
const changeMe=setTimeout(change,2000);
document.querySelector("#stop").addEventListener('click',function(){
    clearTimeout(changeMe);
    console.log("the event has been stopped from happeing ");

})

// setInterval ye na har intrval ke badd me execute hoga 
// setInterval(function(){
//    // console.log("hitesh",Date.now());
// })
