//const fs = require("fs");
//const { resolve } = require("path");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//reamde text file
// const writeFile = fileContent => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile("./dist/README.md", )
//   })
  //![](https://img.shields.io/badge/License-${licenseImg})
  // }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
/*function renderLicenseLink(license) {}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}*/

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //getLicense(data)

  return `# ${data.title}

  
  <br>

  ## Table Of Contents
  
  1. [Description](#descriotion)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Collaborating](#collaborating)
  5. [Contact](#contact)

  _______________________________________
 
  ### Description

  ${data.description}

 ________________________________________

  ### Instruction

  ${data.installation}

  ________________________________________


  ### Usage

  ${data.usage}
  _______________________________________

  ### Collaborating
  Got an idea? A bug report?

  _____________________________________

  ### Contact Me

  ##
  - [E-mail](mailto:${data.email})
  - [Github](${data.username}) (https://github.com/${data.username})

  ________________________________________

  #### License

  This application is [license] under ${data.license} license(s)

`;
}

module.exports = generateMarkdown;
