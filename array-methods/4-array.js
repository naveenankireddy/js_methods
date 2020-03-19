var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

// your code goes here
let arr = 0;
function allDogAge(data){
  for(let x of data){
    if(x.type === "dog"){
      let newarr = x.age * 7;
      arr = arr + newarr;
    }
  }
  console.log(arr)
}
allDogAge(data);



// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year

function allDogAge(data){
  let arr = data.map(x => x.age * 7)
  console.log(arr);
}
// 3. reduce - to accumulate total age.
 function allDogAge(data){
   let arr = data.reduce((acc,cv) => (acc=acc+cv));
   console.log(arr);
 }
// Solution 105
