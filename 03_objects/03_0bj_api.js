const course={
    name:"jsinHindi",
    price:999,
    teacher:"hitesh",
};

// one more way to access the key 
const {teacher}=course;//or const {teacher:a}=course
console.log(teacher);// now we have to write course.teacher like this by using
// these things are called as code destructure


// json
// these are similar like object but without name
// these are keys and vlaue in strings from 
// {
//     "name":"pawan",
//     "class","cse",
//     "clg":"trident",
// }
