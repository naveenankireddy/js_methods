// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
var num = 0;
function largestNumber(numbers){
  numbers.array.forEach(element => {
    if(element > num){
      num = element;
    }
  });
  console.log(num);
}
largestNumber(numbers);
// Find longest string in strings
var str = "";
function largestString(strings){
  strings.forEach(element => {
    if(element.length > str.length){
      str = element;
    }
  });
  console.log(str)
}
largestString(strings);

// Find all the even numbers
function evenNumbers(numbers){
  numbers.filter(x => {
    if(x % 2 === 0){
      console.log(x);
    }
  })
}
evenNumbers(numbers);

// Find all the odd numbers

function oddNumbers(numbers){
  numbers.filter(x => {
    if(x % 2 == 1){
      console.log(x);
    }
  })
}
oddNumbers(numbers);

// Find all the words that contain 'is' use string method 'includes'
function wordsContainIs(strings){
  let newarr = strings.includes('is');
  return newarr;
}
wordsContainIs(strings);

// Find all the words that contain 'is' use string method 'indexOf'
function containIs(strings){
  strings.reduce((acc,cv) => {
    if(cv.indexOf('is') != -1){
      acc.push(cv);
      return acc;
    }
console.log(acc);
  },[])

}
containIs(strings);




// Check if all the numbers in numbers array are divisible by three use array method (every)
function divisibleBy3(numbers){
  let arr = numbers.every(cv => {
    if(cv % 3 == 0 ){
      return false;
    }
  })
console.log(arr)
}
divisibleBy3(numbers);
VM354:10 false

//  Sort Array from smallest to largest
function smallest(numbers){
  let arr = numbers.sort((a,b) => {
return a - b ;
  });
console.log(arr);
}
smallest(numbers);


// Remove the last word in strings
console.log(strings.pop());
console.log(strings);
// Add a new word in the array
console.log(strings.push('naveen'));
console.log(strings);


// Remove the first word in the array
console.log(strings.shift());
console.log(strings);

// Place a new word at the start of the array use (upshift)
console.log(strings.unshift("naveen"));
console.log(strings);

// Make a subset of numbers array [18,9,7,11]
console.log(numbers(strings.slice(3,7)));

// Make a subset of strings array ['a','collection']
console.log(strings.slice(2,4));
// Replace 12 & 18 with 1221 and 1881
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

function replace(numbers){
let arr = numbers.map( x => {
    switch(x){
      case 12:
        numbers.splice(1,1,1221)
        return numbers;
        break;
        case 18:
          numbers.splice(3,1,1881);
          return numbers;
    }
console.log(numbers);
})
                      }

 console.log(replace(numbers));

// Replace words with string in strings array
let str = strings.replace("words","strings");
console.log(str);

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
let arr = [];
function startsWithJ(customers){
  for(let x of customers){
    if(x.firstname.startsWith("j")){
      arr.push(x);
    }
  }
  console.log(arr);
} 
startsWithJ(customers);

// Create new array with firstname and lastname
 let newarr = [{firstname:naveen,lastname:reddy},
              {firstname:nani,lastname:chinnodu}]
// Sort the array created above alphabetically

