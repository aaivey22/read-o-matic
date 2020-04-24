const inquirer = require("inquirer");
const fs = require('fs');
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is your github username?",
    name: "username"
  },
  {
    type: "input",
    message: "List the github usernames of all collaborators:",
    name: "collaborators"
  },
  {
    type: "input",
    message: "What is the project title?",
    name: "title"
  },
  {
    type: "input",
    message: "Give a brief 3-sentence description of this project:",
    name: "description"
  },
  // {
  //   type: 'list',
  //   message: "This is a bulleted list of features. List your application features and separate them with a single comma: ",
  //   initial: '',
  //   separator: ',',
  //   name: 'features'
  // },
  {
    type: "input",
    message: "What is the screenshot link?",
    name: "imageSource"
  },
  {
    type: "input",
    message: "What is the gif link ?",
    name: "gif"
  },
  {
    type: "input",
    message: "What is the command for installation?",
    name: "installation"
  },
  {
    type: "list",
    message: "Would you like a date-stamp badge?",
    choices: ["Yes", "No"],
    name: "badge"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },
  {
    type: "input",
    message: "What technologies or tools were used on this project?",
    name: "technologies"
  }
];

function writeToFile(fileName, dataCopy) {
  // writing the readme file
  return fs.writeFile(fileName, dataCopy, error => {
    if (error) {
      console.log(error)
    } else {
      console.log("readme generating");
    }
  })
}

function start() {
  inquirer
    //prompt is a method within inquirer. Passes questions as a paramter
    .prompt(questions)
    // inquirer automatically creates an obj with the response data
    .then(answers => {
      api
        .getUser(answers.username)
        .then(response => {
          console.log(response.data)
          // writeToFile to generate readMe
          //conditional (ternary) operator
          console.log(Date.now())
          answers.badge = answers.badge === "Yes" ? `![Relative date](https://img.shields.io/date/${Date.now()})` : null;
          // ... is a spread operator   
          writeToFile("README.md", generateMarkdown({ ...answers, ...response }))
        }).catch(error => {
          console.log(error)
        });
    })
    //catch not working properly
    .catch(error => {
      console.log(error)
    });
};



start();

//App ID: 60671

// Client ID: Iv1.3980dc00d16d5e37

// Client secret: 79cc94dd2bda074860854fc7b0e678f735e5b324