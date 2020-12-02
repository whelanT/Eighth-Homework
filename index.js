// array of questions for user

const fs = require('fs');
const inquirer = require('inquirer');


function init() {
  
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
    {
        type: "list",
        message: "what license would you like to use?",
        name: "license",
        choices: ["Apache 2.0", "GNU v3.0"]
    }])

    .then((answer)  => {
      if (answer.license == 'Apache 2.0') {
          var licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
          var licenseDescription = 'Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0';
      } else if (answer.license == 'GNU v3.0') {
          var licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
          var licenseDescription = 'This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program.If not, see https://www.gnu.org/licenses/.';
      } 
     answer ?  writeToFile(answer) : null; 
    },
    );
  
}

// function to write README file
function writeToFile(answer) {
  console.log("answers: ", answer)
  fs.writeFileSync('README.md', JSON.stringify(answer)) 
    
    // (err) =>{
    //   if (err){
    //     throw (err)
    //   }
    //   console.log("created README")
    // } );
}

//starts to code off
init();


