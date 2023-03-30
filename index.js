// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "Please enter your full name:",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username ");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter the title of your project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter the description of your project",
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter the description of your project ");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation for this project?",
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter the installation of your project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter the usages of your project",
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter the usages of your project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter the contributing for  this project",
    validate: contributionInput => {
      if (contributionInput) {
        return true;
      } else {
        console.log("Please enter the contributing of your project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Please describe the tests for your application",
    validate: testsInput => {
      if (testsInput) {
        return true;
      } else {
        console.log("Please describe the tests for your application");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmLicenses",
    message: "Would you like to include a license?",
    default: false,
  },
  {
    type: "list",
    name: "licenses",
    message: "What license would you like to include?",
    choices: ["MIT", "GPL", "CC--0"],
    when: ({ confirmLicenses }) => {
      if (confirmLicenses) {
        return true;
      } else {
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(responses => {
    console.log("your Readme has been successfully generated");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}

// Function call to initialize app
init();
