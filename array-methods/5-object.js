// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
var student = {
  name: "naveen",
  sclass:"Altcampus",
  rollno : 15,
}
function studentList(student){
  for(let key of student){
    console.log(`${x}` `+`: `${student[x]}`)
  };
}
console.log(studentList(student));


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};
delete student.rollno;
console.log(student);



// 3. Write a function to get the length of an object.
let arr = 0;
function findLength(student){
  for(let key in student){
    arr = arr + 1;
  }
  console.log(arr);
};
findLength(student);