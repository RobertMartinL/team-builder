const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
//const generatePage = require('./src/page-template');
const generatePage = require('./src/page-template');
//const { writeFile, copyFile } = require('./utils/generate-site');
const empArr = [

]
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your employee email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true 
                } else {
                    console.log('Please enter your employee email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is your office number (Required)',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                }
            }
        }
    ]);
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your employee email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true 
                } else {
                    console.log('Please enter your employee email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true 
                } else {
                    console.log('Please enter your employee email!');
                    return false;
                }
            }
        }
    ]);
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your employee email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true 
                } else {
                    console.log('Please enter your employee email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true 
                } else {
                    console.log('Please enter your school!');
                    return false;
                }
            }
        },
        promptAdd()
    ]);
};

const promptAdd = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamadd',
            message: 'What would you like to do?',
            choices: ['Add engineer', 'Add intern', 'Finish team']
        }
    ])
    .then(data => {
        switch(data.teamadd) {
            case 'Add engineer': promptEngineer()
            break;

            case 'Add intern' : promptIntern()
            break;

            default: assembleTeam()
            break; // make function for 
        }
    })
};

promptManager()
.then(data => {
    const manager = new Manager(data.name, data.id, data.email, data.number)
    empArr.push(manager)
    promptAdd()
    console.log(empArr)
});









//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });






