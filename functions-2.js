/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (7, 8) => {
    // ADD YOUR CODE HERE
    let maxOfTwoNumers = true;
    if
  };
  
  maxOfThree();

  // 1 is incomplete
  
  /*
  2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
  */
  maxOfThree = (num1, num2, num3) => {
    // ADD YOUR CODE HERE
if (num1 > (num2 && num3)) {
    return num1;
} else if (num2 > (num1 && num3)) {
    return num2;
} else {
    return num3;
}
  };
  console.log(maxOfThree(100, 22, 75))
  
  // 2 does not work

  /*
  3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  */
  isCharacterAVowel = (myLetter) => {
    // ADD YOUR CODE HERE
  if (myLetter === ('a'||'i'||'o'||'e'||'u')) {
      return true;
  } else {
      return false;
  }
};
  
  console.log(isCharacterAVowel('Y'));
  // 3 does not work
  
  /*
  4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
  */
  sumArray = (arr) => {
    let finalNum = 0;
    for (let i = 0; i < arr.length; i++) {
finalNum += arr[i];
    }
return finalNum;
};
muliplyArray = (multi) => {
    let final = 1;
    for (let i=0; i < multi.length; i++) {
final *= multi[i];
    }
    return final;
}
console.log(sumArray([1,2,3,4,5,6]))
console.log(multiplyArray([1,2,3,4,5,6]))

 // does not work
  
  /*
  5.Write a function that returns the number of arguments passed to the function when called.
  */
  function test(a, e, s, h){
    console.log(arguments.length);
 }
 test("4","5",8, 5);
  
  /*
  6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
  */
  
  reverseString = (str) => {
    // ADD YOUR CODE HERE
    let string = '';
    for(let i=str.length - 1; i >= 0; i--){
string += stri[i];
    }
    return string
  };

  console.log(reverseString('jag testar'));

  // 6 does not work
  
  /*
  7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
  */
  findLongestWord = (array) => {
    // ADD YOUR CODE HERE
    let wordLength = 0;
    for (let i=0; i<array.length; i++) {
        if (array[i].length > wordLength)
        wordLength = array[i].length
    }
    return wordLength;
  }
  console.log(findLongestWord(['House', 'red', 'Santa']));

  /*
  8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
  */
  filterLongWords = (array, x) => {
      let longArray = [];
for (let i=0; i<array.length;i++){
if (array[i].length > x)
longArray.push(array[i]);
}
return longArray
  };
console.log(filterLongWords(['Remember', 'The', 'Some'], 4))

  // all need work aside from  2 3 5 7 & 8 // dont work = 1, 4, 6
  