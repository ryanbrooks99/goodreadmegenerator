//Setting global variables

var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");

//Prompting user for inputs

inquirer.prompt([
{
    type: "input",
    message: "What is your Github user name?",
    name: "username"
},
{
    type: "input",
    message: "What is your email?",
    name: "email"
},

{    
    type: "input",
    message: "What is your project title?",
    name: "project"
},

{    
    type: "input",
    message: "What is your project description?",
    name: "description"
},

{    
    type: "input",
    message: "What are your installation instructions?",
    name: "installation"
},

{    
    type: "input",
    message: "What is your usage information?",
    name: "usage"
},

{    
    type: "input",
    message: "What are your contribution guidelines?",
    name: "contribution"
},

{    
    type: "input",
    message: "What are your test instructions?",
    name: "test"
},

{    
    type: "list",   
    message: "What license would you like to use?",
    name: "license",
    choices: ["MIT", "APACHE", "GPL", "BSD", "None"]
},

]).then(answers => {
    console.log(answers);

// Writing answers to ReadME
let readme = generateMarkdown(answers)

    fs.writeFile("README.md", readme, err => {

    })
})


// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
