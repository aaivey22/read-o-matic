const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


const api = {
  getUser(username) {

    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function (res) {
      console.log("response", res.data.name)
      const ghName = res.data.name;

      // const repoNamesStr = repoNames.join("\n");

      //   console.log(`Saved ${repoNames.length} repos`);
      // });
      // // use axios to get ghub api data
      // // remember to catch for errors
      // console.log(data)
    });
  }
};

  module.exports = api;

// const fs = require("fs");
// const axios = require("axios");
// const inquirer = require("inquirer");

// inquirer
//   // .prompt({
//   //   message: "Enter your GitHub username:",
//   //   name: "username"
//   // })
//   .then(function({ username }) {
//     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//     axios.get(queryUrl).then(function(res) {
//       const repoNames = res.data.map(function(repo) {
//         return repo.name;
//       });

//       const repoNamesStr = repoNames.join("\n");

//       fs.writeFile("repos.txt", repoNamesStr, function(err) {
//         if (err) {
//           throw err;
//         }

//         console.log(`Saved ${repoNames.length} repos`);
//       });
//     });
//   });
