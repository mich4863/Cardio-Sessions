/*----------------------------------- Session 1 ----------------------------------------*/ 

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
/* 
  --Forklaring(challenge 1, session 1)--: Tager input fra brugeren og gemmer det i inputText.
  Så splitter jeg hver character fra hinanden, reverser dem og samler dem igen.
  Det smider jeg så tilbage til brugeren.
*/
function reverseString() 
{
  const inputText = document.getElementById("userInput").value;

  const reversed = inputText.split("").reverse().join("");

  document.getElementById("output").innerHTML = reversed;
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
/*
  --Forklaring(challenge 2, session 1)--: Tager input fra brugeren og gemmer det i input2Text.
  Så tager jeg input2Text og bruger en function magen til ovenstående function og gemmer det i en ny variable(reversed2).
  Derpå sammenligner jeg dem, og er de ens så sender jeg true tilbage til brugeren og ellers så false. 
*/
function isPalindrome() 
{
  const input2Text = document.getElementById("userInput2").value;

  const reversed2 = input2Text.split("").reverse().join("");

  if(input2Text == reversed2)
  {
    return document.getElementById("output2").innerHTML = "True";
  }
  document.getElementById("output2").innerHTML = "False";  
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125
/*
  --Forklaring(challenge 3, session 1)--: Tager input fra brugeren og gemmer det i input3Text.
  Bruger igen reverse functionen fra tidligere.
  Sender det tilbage til brugeren.
*/
function reverseInt() 
{
  const input3Text = document.getElementById("userInput3").value;

  const reversed = input3Text.split("").reverse().join(""); 

  document.getElementById("output3").innerHTML = reversed;
}

 // CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
/*
  --Forklaring(challenge 4, session 1)--: Jeg tager værdien fra brugeren og gemmer det i input4Text. 
  Så har jeg et regrex som leder efter alle ord, som ikke er mellemrum. 
  Det gør den n gange og finder så alle de match, som der måtte være og gemmer dem i et array. 
  Så kalder jeg en function med det som parameter,
  functionen tager første character og laver det til et stort bogstav og laver så resten lille, 
  det gør den med alle værdier i array'et og gemmer dem så i capitalizedFirstLetters.
  Herefter smider jeg det tilbage til brugeren.
*/
function capitalizeLetters() 
{
  const input4Text = document.getElementById("userInput4").value;

  const capitalizedFirstLetters = input4Text.replace(/\w\S*/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();   
  })
  document.getElementById("output4").innerHTML = capitalizedFirstLetters;
} 

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
/*
  --Forklaring(challenge 5, session 1)--: Tager input fra brugeren og gemmer det i userInput.
  Laver et tom array(userInputCounts), som skal gemme hver character og dens værdi(antal gange).
  Laver en variable(maxKey), til den character som opstår flest gange.
  Så laver jeg et for loop, som skal køre indtil der ikke er flere character i inputet.
  Så tager jeg første character og gemmer i key. Hvis array'et userInputCounts ikke indeholder den character, 
  så skal den have værdien 0 og ellers så skal den lægge en til, også gemmer den første key i maxKey.
  Derpå tester jeg at hvis den nye key er større end den forgående, så bliver den gemt i maxKey osv.
  Til sidst smider jeg resultatet tilbage til brugeren.  
*/

function maxCharacter() 
{
  const userInput = document.getElementById("userInput5").value;
  const userInputCounts = {};
  let maxKey = "";

  for(let i = 0; i < userInput.length; i++)
  {
    const key = userInput[i];

    if(!userInputCounts[key])
    {
      userInputCounts[key] = 0;
    }
    userInputCounts[key]++;

    if(maxKey == "" || userInputCounts[key] > userInputCounts[maxKey])
    {
      maxKey = key;
    }
  }
  return document.getElementById("output5").innerHTML = maxKey;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
/*
   --Forklaring(challenge 6, session 1)--: Laver en for loop, som kører indtil i er lig med 100.
   Laver en variable, som skal bruges til at output'e.
   Så bruger jeg modulus til at finder resten der er tilbage når i divideres med 3 og 5. 
   Og hvis resten er lig med 0, så output'er jeg det som skal output's.
   Og hvis output er lig med "", så output'er jeg i.
*/

function fizzBuzz() 
{
  for(let i = 1; i <= 100; i++)
  {
    let output = "";

    if(i % 3 === 0)
    {
      output = "Fizz";
    }

    if(i % 5 === 0)
    {
      output = "Buzz";
    }

    if(i % 3 === 0 && i % 5 === 0)
    {
      output = "FizzBuzz";
    }

    if(output === "")
    {
      output = i;
    }
    console.log(output);
  }
}

/*----------------------------------- Session 2 ----------------------------------------*/ 

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,
/*
  --Forklaring(challenge 1, session 2)--: Tager input fra brugeren og gemmer det i userInput.
  Så splitter jeg inputet op for hver gang der er et mellemrum, og gemmer det i words.
  Så laver jeg en variabel(Big_word), som skal gemme det længste ord. 
  Så laver jeg en foreach på words, hvor jeg kalder en function som tager et word som parameter.
  Hvis det enkelte ord er længere end Big_word, så skal det enkelte ord gemmes i Big_word.
  Også smider jeg Big_word ud til brugeren når loop'et er færdig.
*/

function longestWord() 
{
  const userInput = document.getElementById("userInput7").value;

  const words = userInput.split(" ");
  let big_word = "";

  words.forEach( word => {
    if (word.length > big_word.length)
    {
      big_word = word;
    }
  })
  return document.getElementById("output7").innerHTML = big_word;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
/*
  --Forklaring(challenge 2, session 2)--: 
*/

function chunkArray() 
{
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const size = 3;
  const chunked_arr = [];

  for (let i = 0; i < array.length; i++) 
  {
    const last = chunked_arr[chunked_arr.length - 1];

    if (!last || last.length === size) 
    {
      chunked_arr.push([array[i]]);
    } 
    else 
    {
      last.push(array[i]);
    }
  }
  console.log(chunked_arr);
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray() 
{
  const one = [[1, 2], [3, 4], [5, 6], [7]];
  const two = one.flat();

  console.log(two);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram() 
{
  const wordOne = document.getElementById("wordOne").value;
  const wordTwo = document.getElementById("wordTwo").value;

  const one = wordOne.replace(/[\s\W]/g, "").toLowerCase().split("").sort().join("");
  const two = wordTwo.replace(/[\s\W]/g, "").toLowerCase().split("").sort().join("");

  if(one === two)
  {
    return document.getElementById("output10").innerHTML = "Yes";
  }
  else
  {
    return document.getElementById("output10").innerHTML = "No";
  }
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges() 
{
  const word = document.getElementById("userInput11").value;

  const characters = word.split("");
  let result = "";
  
  characters.forEach(c => { 
    let testChar;
    
    if(c == "z" || c == "Z")
    {
      testChar = "A";
    }
    else
    {
      testChar = String.fromCharCode(c.charCodeAt(0) + 1);
    }

    if( testChar == "a" || testChar == "e" || testChar == "i" || testChar == "o" || testChar == "u" || testChar == "y")
    {
      testChar = testChar.toUpperCase();   
    }
    result += testChar;  
  })

  return document.getElementById("output11").innerHTML = result; 
}


/*----------------------------------- Session 3 ----------------------------------------*/ 

// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...args) 
{
  let result = 0;

  for(let arg of args)
  {
    result += arg;
  }
  return result;
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function isPrime(NumberToCheck)
{
  for(let i = 2; i < NumberToCheck; i++)
  {
    if(NumberToCheck % i === 0)
    {
      return false;
    }
  }
  return true;
}

function sumAllPrimes(loopNumber) 
{
  let result = 0;

  for (let i = 2; i <= loopNumber; i++)
  {
    if(isPrime(i))
    {
      result += i;
    }
  }
  console.log(result);
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(inputArray, seekArray) 
{
  for (let i = 0; i < inputArray.length; i++)
  {
    if(seekArray.includes(inputArray[i]))
    {
       inputArray.splice(i,1);
       i--;   
    }
  }
  return inputArray;
}
console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], [2, 6]));

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. 
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) 
{
  let treesIndex = [];

  for(let i = 0; i < a.length; i++)
  {
    if(a[i] === -1)
    {
      treesIndex.push(i);
      a.splice(i, 1);
      i--;
    }
  }
  a.sort();

  for(let i = treesIndex.length; i > 0; i--)
  {
    a.splice(treesIndex[i -1], 0, -1);
    console.log(a);
  }
  return(a);
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters() 
{

}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() 
{

}

// OBJECT CONSTRUCTOR
/*
function User(firstName, lastName)
{
  this.firstName = firstName;
  this.lastName = lastName;

  this.sayHi = function() {
    alert("My name is: " + this.firstName + " " + this.lastName);
  }
}

var user = new User("Jørgen", "Pedersen");
alert(String(user.firstName + " " + user.lastName));
*/
//user.sayHi();
