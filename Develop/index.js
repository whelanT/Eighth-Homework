const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title"
    },
    {
      type: "input",
      message: "What is this app for?",
      name: "app"
    },
    {
        type: "input",
        message: "How do you use your app?",
        name: "howTo"
      },
      {
        type: "input",
        message: "How do you install your app?",
        name: "installation"
      },
      {
        type: "input",
        message: "What would you like added to your project?",
        name: "contributions"
      },
      {
        type: "input",
        message: "Where should people contact you for questions?",
        name: "email"
      },
      
  ])
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });
// const questions = [
//     {
//         name: 'name',
//         type: 'input',
//         message: 'What is your name?'
//     }

// ];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
