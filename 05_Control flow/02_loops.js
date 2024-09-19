// Loops
// for loop structure 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for (let index = 0; index < 10; index++) {
    if (index==6) {
        console.log("6 is best number");
    }
    console.log(index);
    
}
// to print the table 
for (let index = 0; index <=10; index++) {
    console.log(`outer value is ${index}`);
    for (let j = 0; j <=10; j++) {
        console.log(index+'*'+j+'= '+index*j);
        
    }
    
}
 const arr=[1,2,3,4,5,6];


 // break and continue
 for (let i = 0; i <=20; i++) {
    if(i==12){
        continue;
    }
    if(i==17){
        break;
    }
    console.log(i);

 }


 //  while  do while loop 
//  while (condition) {
//     // code 
//  }


//'for' and 'while' loops are what we call 'entry control loops' because they check the condition before entering the loop. On the other hand, 
//'do-while' loops are known as 'exit control loops' since they ensure that the loop body is executed at least once before checking the condition.