// const nums = [15,20,30];

// function check(num){
//     return num<15;
// }
// // nums.every(check);
// const result = nums.every(n => n > 10);
// console.log(result)

/*****************************************/

// Check if all students passed (marks >= 40).

// const marks = [54,21,95,86,85];
// const yn = marks.every(n => n > 50);
// console.log(yn);

/*****************************************/

// const nums = [10,60,30,80];
// const big = nums.filter(n => n > 50);
// console.log(big);

/*****************************************/

// Get students who passed (marks ≥ 40)

// const marks = [54,21,95,86,85];
// const fltrd = marks.filter(n => n > 50);
// console.log(fltrd);

/*****************************************/

// const nums = [54,21,95,86,85];
// const found = nums.find(n => n > 25);
// console.log(found);

/*****************************************/

// Find first student with marks greater than 80.

// const marks = [54,21,95,86,85];
// const found = marks.find(n => n > 80);
// console.log(found);

/*****************************************/

// const arr = [1,2,[3,4]];
// console.log(arr.flat());

/*****************************************/

//Flatten one level: const arr2 = [10,[20,[30]]];

// const arr2 = [10,[20,[30]]];
// let i = 0; // = 0,1,2,3.... level of flattening
// console.log(arr2.flat(i));

/*****************************************/

// const nums = [54,21,95,86,85];
// nums.forEach(n => console.log(n));

/*****************************************/

// Question 5: Print all names.

// const names = ["Aman","Riya","Kabir"];
// names.forEach(s => {
//     console.log(s);
// });

/*****************************************/

// Question 6: Print double of each number.

// const nums = [20, 30, 80] 
// nums.forEach(n => {
//     console.log(n*2);
// });

/*****************************************/

// const nums = [20, 30, 80];
// const doubled = nums.map(n => n * 2);
// console.log(doubled);

/*****************************************/

// Question 7: Extract only names of the students from an array containing objects with details of students like name, age, class, batch, year

// const details = [
//     {
//         name:"abc",
//         age:63,
//         class:6,
//         batch:27,
//         year:2023
//     },
//     {
//         name:"lmn",
//         age:23,
//         class:4,
//         batch:26,
//         year:2022
//     }
// ]
// const names = details.map(nm => nm.name);
// console.log(names);

/*****************************************/
// const hasGreaterThan25 = nums.some(n => n > 25); | const nums = [10, 25, 45] | print and see what gets returned

// const nums = [10, 25, 45];
// const hasGreaterThan25 = nums.some(n => n > 25);
// console.log(hasGreaterThan25);

/*****************************************/

// if any number is negative or not in an array const arr = [12, -13, 7, 5]

// const arr = [12, -13, 7, 5];
// const yn = arr.some(n => n < 0);
// console.log(yn);

/*****************************************/

// Question 9:  Check if any student failed. (Marks < 40)

// const marks = [54,21,95,86,85];
// console.log(marks.some(m => m < 40));

/*****************************************/

// const nums = [40, 100, 1, 5, 25, 10];
// nums.sort((a,b) => a-b);
// console.log(nums);

let student = { 
    name: "Aman", 
    marks: 85, 
    subject: "Math" 
};
let nev = JSON.pass(student);
console.log(nev);

