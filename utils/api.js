const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
//require("dotenv").config();
  //node.js process library

const api = {
  getUser(username) {

    const queryUrl = `https://api.github.com/users/${username}`;
    //?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
      //CLIENT_ID= needs to be in env file in utils
      //CLIENT_SECRET= needs to be in env file in utils

    return axios.get(queryUrl)
  }
};

  module.exports = api;

