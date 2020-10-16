const inquirer = require("inquirer");

function askQuestions() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of your project?"

            },
            {
                type: "input",
                name: "motivation",
                message: "What was your motivation?"

            },
            {
                type: "input",
                name: "reason",
                message: "Why did you build this project?"

            },
            {
                type: "input",
                name: "problem",
                message: "What problem does it solve?"

            },
            {
                type: "input",
                name: "knowledge",
                message: "What did you learn?"

            },
            {
                type: "input",
                name: "unique",
                message: "What makes your project stand out?"

            }, 
            {
                type: "input",
                name: "steps",
                message: "What are the steps required to install your project?"

            }, 
            {
                type: "input",
                name: "collabs",
                message: "Are there any other collaborators?"

            }, 
            {
                type: "input",
                name: "screenshots",
                message: "Where are your screenshots?"

            },  
            {
                type: "input",
                name: "license",
                message: "Where is your license?"

            }, 
        ]); 
    }


module.exports = {
    askQuestions
}

askQuestions().then(response => console.log(response))