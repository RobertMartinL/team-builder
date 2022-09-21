const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
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
            message: 'What is engineer name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is engineer employee ID (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is engineer employee email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true 
                } else {
                    console.log('Please enter employee email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is engineer GitHub Username (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true 
                } else {
                    console.log('Please enter employee GitHub Username!');
                    return false;
                }
            }
        },
    ]);
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is interns name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter intern name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is interns employee ID (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is interns employee email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true 
                } else {
                    console.log('Please enter intern employee email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is interns school (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true 
                } else {
                    console.log('Please enter school!');
                    return false;
                }
            }
        },
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
            .then(data => {
                const engineer = new Engineer(data.name, data.id, data.email, data.github)
                empArr.push(engineer)
            })
            .then(promptAdd)
            break;

            case 'Add intern' : promptIntern()
            .then(data => {
                const intern = new Intern(data.name, data.id, data.email, data.school)
                empArr.push(intern)
            })
            .then(promptAdd)
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
});

const assembleTeam = () => {
    console.log(empArr)
}









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






