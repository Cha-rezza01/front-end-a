// //IIFE & Callback Function
// //1. IIFE (Immediately Invoked Function xpression)
// //a. No params & argm & return value
// (function () {
//     console.log("Hello World");
// })(); 
// //b. with params &a argms & return value
// let output = (function (fullname) {
//     return "Hello" + fullname;
// })("John Doe");

// console.log(output);

//2. Callback Function
//a. No with params &a argms & return value
// function sayHello(callback) {
//     callback();
// }

// sayHello(function () {
//     console.log ("Hello World");
// });

//b. with params &a argms & return value
function sayHello(callback) {
    let result = callback("John Doe");
    return result;
}

let output = sayHello(function (fullName) {
    return "Hello " + fullName;
});

console.log(output); 
