const generateCards = () => {



    const generateManager = (manager) => {
        `<div class=card>
        Name: ${manager.name}
        Manager
        Employee ID: ${manager.id}
        Email: ${manager.email}
        Office Number: ${manager.number}
        </div>` 
    }

    const generateEngineer = (engineer) => {
        `<div class=card>
        Name: ${engineer.name}
        Engineer
        Employee ID: ${engineer.id}
        Email: ${engineer.email}
        GitHub: ${engineer.github}
        </div>`
    }

    const generateIntern = (intern) => {
        `<div class=card>
        Name: ${intern.name}
        Intern
        Employee ID: ${intern.id}
        Email: ${intern.email}
        GitHub: ${intern.school}
        </div>`
    }

}









module.exports = generateCards;



