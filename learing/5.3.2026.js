// let n = 8;
// if (n == 0 || n == 1){
//   console.log("Yes");
// }
// let a = 0;
// let b = 1;
// let c = a+b;
// while(c < n){
// 	a = b;
//   b = c;
//   c = a+b;
// }
// if(c == n){
//   console.log("yes");
// }else{
//   console.log("no");
// }

// var i = 0;
// for (i=0; i < 3; i++) {
// //   setTimeout(() => console.log(i), 100);
//     console.log(i);
// }
// console.log("\n"+i);

// const user = { name: "Rahul" };
// user.name = "Aman";
// console.log(user);

// const user = { name: "Rahul" };
// user = { name: "Aman" };

// let name = "junaid";
// console.log(`my name is ${name}`);

// function multiplier(h,w){
//     if(h===w){
//         console.log(h*w);
//     }else{
//         console.log("Not square");
//     }
// }
// multiplier(2,6);



// 6-3 assignment
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

// 8. Write a function that prints numbers from 1 to 20:
// If number divisible by 3 → print "Fizz"
// If divisible by 5 → print "Buzz"
// If divisible by both → print "FizzBuzz"

function fizzBuzz() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

