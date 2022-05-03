const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//const axios = require("axios");

//Prompt user for github username
inquirer.prompt([
    {
        name: "username",
        message: "Enter your GiHub username",
        default: "Rotimi-28"
    },
    {
        name: "title",
        message: "Pleasea, enter your project Title",
        default: "Readme-Generator"
    },
    {
        name: "description",
        message: "Please, briefly descrioption of your project",
        default: "An automated template that produces and orgnized and formatted readme.md file"
    },
    {
        name: "installation",
        message: "what are the steps for the installation?",
        default: "Run 'npm install' from terminal to add the dependencies.",
    },
    {
        name: "usesage",
        message: "How should to your project be used?",
        default: "The CLI application should be used from the terminal, once dependencies are have already been installed. Open therminal and run 'node index.js' then follow the prompts.",
    },
    {
        name: "license",
        message: "Indicate project licence(s):",
        default: "None"
    },
    {
        name: "contributors",
        message: "List of contributor on this project",
        default: "None"
    },
    {
        name: "tests",
        message: "Explain how to run testing :",
        default: "Currently there are no tests available."
    },
    {
        name: "Questions",
        message: "Remaining questions",
        default: "None"
    }
])