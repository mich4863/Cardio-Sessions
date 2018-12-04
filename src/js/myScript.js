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
  let inputText = document.getElementById("userInput").value;

  let reversed = inputText.split("").reverse().join(""); 
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
  input2Text = document.getElementById("userInput2").value;

  let reversed2 = input2Text.split("").reverse().join("");

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
  let input3Text = document.getElementById("userInput3").value;

  let reversed = input3Text.split("").reverse().join(""); 
  document.getElementById("output3").innerHTML = reversed;
}

 // CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
/*
  --Forklaring(challenge 4, session 1)--: Jeg tager værdien fra brugeren og gemmer det i input4Text. Så har jeg et regrex som leder efter alle ord, som ikke er mellemrum. 
  Det gør den n gange og finder så alle de match, som der måtte være og gemmer dem i et array. Så kalder jeg en function med det som parameter,
  functionen tager første character og laver det til et stort bogstav og laver så resten lille, 
  det gør den med alle værdier i array'et og gemmer dem så i capitalizedFirstLetters. Herefter smider jeg det tilbage til brugeren.
*/
function capitalizeLetters() 
{
  let input4Text = document.getElementById("userInput4").value;

  let capitalizedFirstLetters = input4Text.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();   
});
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
  let userInput = document.getElementById("userInput5").value;
  let userInputCounts = {};
  let maxKey = "";

  for(let i = 0; i < userInput.length; i++)
  {
    let key = userInput[i];

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
  let userInput = document.getElementById("userInput7").value;

  let words = userInput.split(" ")
  let big_word = ""

  words.forEach(function(word){
    if (word.length > big_word.length)
    {
      big_word = word
    };
  });
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
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let size = 3;

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




