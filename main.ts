#!/usr/bin/env

import inquirer from "inquirer";

// 1) computer will generate a random file.

// 2) User input for guessing a number.

// 3) Computer user input with computer generate number & show result.

const randomNumber = 13;
const answers = await inquirer.prompt([
    
    {
        name : "userGuessedNumber",
        type : "number",
        message : "Please guess a number between 1 - 6.",
    }
 ]);

 if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! You guessed right number")
  } else {
    console.log ("You guessed wrong number")
  }


  const random = Math.floor(Math.random()* 6 + 1);













