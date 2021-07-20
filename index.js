// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// let newFile = 'hi how are you';
// console.log(newFile);

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the name of your project.');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please briefly describe your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a project description.')
                return false 
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process of your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please describe how to install your project.')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for use of project. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'contributors',
        message: "Would you like to add any Developers who have also contributed to your project?",
        // default: false
    },
    {
        type: 'input',
        name: 'test',
        message: 'How is your project tested? (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please provide details on how your project is tested');
                return false
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message:'Which license was used for your project? (Required)',
        choices: ['GNU', 'Apache 2.0', 'MIT', 'None'],
        validate: licenseCheckbox => {
            if (licenseCheckbox) {
                return true;
            } else {
                console.log('Please select a response')
                return false
            } 
        }
    },
    {
        type: 'input',
        name: 'gituser',
        message: 'Please provide your Github username (Required)',
        validate: gituserInput => {
            if (gituserInput) {
                return true
            } else {
                console.log('Please enter your Github Username')
                return false 
            } 
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true 
            } else {
                console.log('Please provide your email')
                return false
            }
        }
    }

    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else {
            console.log('Your README file has been created!')
        };
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile('./README.md', generateMarkdown(data))
    })
};  

// Function call to initialize app
init();
