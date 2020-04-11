const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
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
  {
    type: "input",
    message: "How is this project licensed?",
    name: "license"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {

    if (err) {
      return console.log(err);
    }else {

    console.log("Success!")}

  })
}

function start() {
  inquirer
    //prompt is a method within inquirer. Passes questions as a paramter
    .prompt(questions) 
    // inquirer automatically creates an obj with the response data
    .then(answers => { 
      api.getUser(answers.username)
        .then(data => {
          console.log(api)
          // writeToFile to generate readMe
          writeToFile("README.md", generateMarkdown(...answers, ...data));
        });
    })
    .catch(error => {
      console.log(err)
    });
};


start();
