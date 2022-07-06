const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
//const axios = require("axios");

//Prompt user for github username
inquirer
  .prompt([
    {
      name: "username",
      message: "Enter your GiHub username",
      default: "Rotimi-28",
    },
    {
      name: "emaill",
      message: "what is your email address?",
      default: "matanmearoja@yahoo.com",
    },
    {
      name: "title",
      message: "Pleasea, enter your project Title",
      default: "Readme-Generator",
    },
    {
      name: "description",
      message: "Please, briefly descrioption of your project",
      default:
        "An automated template that produces and orgnized and formatted readme.md file",
    },
    {
      name: "installation",
      message: "what are the steps for the installation?",
      default: "Run 'npm install' from terminal to add the dependencies.",
    },
    {
      name: "usage",
      message: "How should to your project be used?",
      default:
        "The CLI application should be used from the terminal, once dependencies are have already been installed. Open the terminal and run 'node index.js' then follow with the prompts.",
    },
    {
      name: "license",
      message: "Indicate project licence(s):",
      default: "None",
    },
    {
      name: "contributors",
      message: "List of contributor on this project",
      default: "None",
    },
    {
      name: "tests",
      message: "Explain how to run testing :",
      default: "Currently there are no tests available.",
    },
    {
      name: "Questions",
      message: "Remaining questions",
      default: "None",
    },
  ])
  .then(function (answers) {
    console.log(answers);
    var strReadme = generateMarkdown(answers);
    writeFile(answers, strReadme);
  });





//function to write Readme
 function writeFile(answers, myReadMe) {
   fs.writeFile(`generateReadMe.md`, myReadMe, () => {
     console.log("done!");
   });
 }

//function to initialize program
// function init() {
//   askQs();
// }

//function to call
//init();


