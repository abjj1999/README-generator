  
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./Develop/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username? (No @ needed)",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: "What is the name of your GitHub repo?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Write a description of your project.",
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
    },
    {
        type: 'input',
        name: 'tests',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    }
];

// TODO: Create a function to write README file
const promptProject = () => {
    return inquirer.prompt(questions)
    
}

promptProject()
    .then(Data => {
    console.log(Data);
    const Page = generate(Data);

    fs.writeFile('./README1.md', Page, err => {
    if (err) throw new Error(err);

    console.log('Page created!');
    })
})