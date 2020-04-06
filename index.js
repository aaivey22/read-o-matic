var inquirer = require("inquirer");
var fs = require('fs');
const axios = require("axios");

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
      }
      // {
      //     type: "input",
      //     message: "Table of contents?",
      //     name: "contents"
      //   },
      //   {
      //     type: "input",
      //     message: "What is the installation?",
      //     name: "installation"
      //   },
      //   {
      //     type: "input",
      //     message: "How is this project licesned?",
      //     name: "license"
      //   },
      //   {
      //     type: "input",
      //     message: "What is the project title?",
      //     name: "title"
      //   },
      //   {
      //     type: "list",
      //     message: "List contributors to this project",
      //     name: "contributors"
      //   },
      //   {
      //     type: "input",
      //     message: "Tests?",
      //     name: "test"
      //   },
]

inquirer
  .prompt(questions)
  .then(function(response) {

//     if (response.confirm === response.password) {
//       console.log("Hello " + response.username);
//       console.log("Success!");
//     }
//     else {
//       console.log("You forgot your password already?!");
//     }
//   });

//   axios
//   .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy")
//   .then(function(res) {
    console.log(res.data);
  });