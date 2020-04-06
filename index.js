var inquirer = require("inquirer");
var fs = require('fs');
const axios = require("axios");


inquirer
  .prompt([
    {
      type: "input",
      message: "What is your github username?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your favorite project?",
      name: "favorite"
    },
    {
      type: "input",
      message: "Why is it your favorite?",
      name: "information"
    }
  ])
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