// Given 10 student objects (name, marks, subject): use array methods ONLY (no loops) to filter pass/fail, compute average, find topper, group by subject. Push to GitHub.

const students = [
  { name: "Aman", marks: 85, subject: "Math" },
  { name: "Riya", marks: 42, subject: "Science" },
  { name: "Kabir", marks: 67, subject: "Math" },
  { name: "Sneha", marks: 91, subject: "English" },
  { name: "Arjun", marks: 38, subject: "Science" },
  { name: "Meera", marks: 74, subject: "Math" },
  { name: "Rohan", marks: 59, subject: "English" },
  { name: "Diya", marks: 88, subject: "Science" },
  { name: "Kunal", marks: 46, subject: "Math" },
  { name: "Isha", marks: 95, subject: "English" }
];

let n = students.length;
let sum = 0;
let topmark = Number.MIN_VALUE;
let topper = "";
// filter pass fail

students.forEach(student =>{
  
  if(student.marks > 50) console.log(student.name + " : passed");
  else console.log(student.name+ " failed");
  
  sum+=student.marks;

  if(student.marks > topmark){
    topmark = student.marks;
    topper = student.name;
  }
})

//compute average
console.log("Average is: "+ sum/n);
// find topper
console.log("topper is "+ topper+ " with "+ topmark+" marks");
// group by subject
// ??
