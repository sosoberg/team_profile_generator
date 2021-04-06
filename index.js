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
      name: 'managerOffice',
      message: 'Managers Office Number:',
    },

  ])
  .then((data) => {

    const {  managerName, managerID, managerEmail, managerOffice } = data;
    


    const HTML = 
    `
    <!DOCTYPE html>

    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title></title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="./assets/reset.css">
            <link rel="stylesheet" href="./assets/style.css">
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main>
                <div>
                    <h2 class"name">${ managerName }</h2>
                        <p class="role">Manager</p>
                        <p class="moreinfo">${ managerID }</p>
                        <p class="moreinfo">${ managerEmail }</p>
                        <p class="moreinfo">${ managerOffice }</p>
                </div>
                <div class"engineer">
                    <h2 class"name"></h2>
                        <p class="role"></p>
                        <p class="moreinfo"></p>
                        <p class="moreinfo"></p>
                        <p class="moreinfo"></p>
                </div>
                <div class"intern">
                    <h2 class"name"></h2>
                        <p class="role"></p>
                        <p class="moreinfo"></p>
                        <p class="moreinfo"></p>
                        <p class="moreinfo"></p>
                </div>
            </main>
        </body>
    </html>
    `

     fs.writeFile('index.html', HTML, (err) =>
       err ? console.log(err) : console.log('Website Created!')
     );
  });

  // work on a append file to dynamically create this website

  inquirer
    .prompt([
        {
        type: 'checkbox',
        name: 'teamSelector',
        message: 'Manager Name:',
        choices: ['Engineer', 'Intern', 'Finish Team']
        },

        
    ])