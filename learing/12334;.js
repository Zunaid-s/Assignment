
// 5-3 assignment
// Write a function calculateTotal(price, deliveryFee) , with delivery fees being "default parameter"that returns the total cost of an order by adding the price and the delivery fee.

// function calculateTotal(price, deliveryFee = 0) {
//     return price + deliveryFee;
// }

// Write a function greetUser(name, greeting) With greeting being "default parameter" that returns a greeting message using the provided name and greeting.

// function greetUser(name, greeting = "Hello") {
//     return `${greeting}, ${name}!`;
// }

// Write a nested for loop which would print:
// 1 1
// 1 2
// 2 1
// 2 2
// 3 1
// 3 2

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 2; j++) {
//         console.log(i + " " + j);
//     }
// }

// Write a function that prints numbers from 1 to 20:
// If number divisible by 3 → print "Fizz"
// If divisible by 5 → print "Buzz"
// If divisible by both → print "FizzBuzz"

// function fB() {
//     for (let i = 1; i <= 20; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// What would be the output and why? function greet(name = "Guest") {
//   return "Hello " + name;
// }

// console.log(greet(undefined));
// console.log(greet(null));
// console.log(greet(""));

// output = "Hello Guest"
// output = null
// output = "Hello  "

// What would be output of the : console.log(0 || "Hello");
// console.log("" || "World");
// console.log("JS" && 100);
// console.log(null && "Test"); and why?




// What would be the output and why: console.log(0 || 10);
// console.log(0 ?? 10);

// console.log(null || 20);
// console.log(null ?? 20);?

// output = 10
// output = 10
// output = 20
// output = 20



// Debug the code: function showMessage(message) {
//   const finalMessage = message || "No message provided";
//   return finalMessage;
// }

// console.log(showMessage(""));
