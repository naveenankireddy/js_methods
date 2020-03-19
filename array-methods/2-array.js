var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
let arr = [];
function findLongestWord(words){
  words.filter((x){
    if(x.length > arr.length){
      arr = x;
    }
  })
}
console.log(arr);




var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
function sumArray(numbers1){
  let arr = numbers1.reduce((acc,cv) => {
   acc = acc + cv;
    return acc;
  },0);
  console.log(arr);
  console.log(arr/numbers1.length)
}
sumArray(numbers1);





var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
function averageNumbers(numbers2){
  let arr = numbers2.reduce((acc,cv) => {
   acc = acc + cv;
    return acc;
  },0);
console.log(arr);
console.log(arr / numbers2.length);
}
averageNumbers(numbers2);



var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let newarr = 0;
function averageWordLength(words2){
words2.forEach(x => {
  newarr = newarr + x.length;
})  
console.log(newarr / words2.length)
}
averageWordLength(words2);



