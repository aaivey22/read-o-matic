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
    message: "What is the project title?",
    name: "title"
  },
  {
    type: "input",
    message: "Give a brief description of this project.",
    name: "description"
  },
  {
    type: "input",
    message: "What is the link to the screenshot?",
    name: "imageSource"
  },
  {
    type: "input",
    message: "What is the command for installation?",
    name: "installation"
  },
  // {
  //   type: "list",
  //   message: "How is this project licensed?",
  //   name: "license"
  //   choices: ["MIT", "none"]

  // },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },
  {
    type: "input",
    message: "What tools were used on this project?",
    name: "tools"
  },
  {
    type: "input",
    message: "Is the code functioning as expected?",
    name: "badge"
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