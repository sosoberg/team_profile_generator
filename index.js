const inquirer = require('inquirer');

const fs = require('fs');
const Choice = require('inquirer/lib/objects/choice');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Managers Name:',
    },
    {
      type: 'input',
      name: 'managerID',
      message: 'Managers Employee ID:',
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'Managers Work Email:',
    },
    {
      type: 'input',
      name: 'managerPhone',
      message: 'Managers Work Phone:',
    },
    {
      type: 'checkbox',
      name: 'manageName',
      message: 'Manager Name:',
      choices: ['Engineer', 'Intern', 'Finish Team']
    },

  ])
  .then((data) => {

    const {  } = data;
    


    const HTML = 
    `

    `

     fs.writeFile('index.html', HTML, (err) =>
       err ? console.log(err) : console.log('Website Created!')
     );
  });