const inquirer = require('inquirer');

const fs = require('fs');
const Choice = require('inquirer/lib/objects/choice');
//const { write } = require('node:fs');

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

    {
      type: 'list',
      name: 'teamSelector',
      message: 'Next Team Member:',
      choices: ['Engineer', 'Intern', 'Finish Team']
    },

  ])
  .then((data) => {

    const {  managerName, managerID, managerEmail, managerOffice } = data;
    const { teamSelector } = data;

    const HTML = 
    `
    <!DOCTYPE html>

    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>My Team</title>
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
                <div class="employee">
                    <h2 class="name">${ managerName }</h2>
                        <p class="role">Manager</p>
                        <p class="moreinfo">ID: ${ managerID }</p>
                        <p class="moreinfo">Email: <a href="mailto:${ managerEmail }">${ managerEmail }</a></p>
                        <p class="moreinfo">Office #: ${ managerOffice }</p>
                </div>
    `

    const writeFile = () => {
      fs.writeFile('index.html', HTML, (err) =>
       err ? console.log(err) : console.log('Website Created!')
     );
    }
    writeFile();

    endHTML = `
        </main>
      </body>
    </html>
    `

    finishFile = () => {
      fs.appendFile('index.html', endHTML, (err) =>
            err ? console.error(err) : console.log('HTML Finished!')
      );
    };

    const createEngineer = () => {
        inquirer
         .prompt([
           {
             type: 'input',
             name: 'engineerName',
             message: 'Engineer Name:',
           },
           {
             type: 'input',
             name: 'engineerID',
             message: 'Engineer Employee ID:',
           },
           {
            type: 'input',
            name: 'engineerEmail',
            message: 'Engineers Email:',
          },
          {
            type: 'input',
            name: 'engineerGithub',
            message: 'Engineer GitHub Username:'
          },
           {
            type: 'list',
            name: 'teamSelector',
            message: 'Next Team Member:',
            choices: ['Engineer', 'Intern', 'Finish Team']
          },
         ])
         .then((data) => {
          const { teamSelector } = data;
          const { engineerName, engineerID, engineerEmail, engineerGithub } = data;

          engineerHTML = `
              <div class="employee">
                <h2 class="name">${ engineerName }</h2>
                    <p class="role">Engineer</p>
                    <p class="moreinfo">ID: ${ engineerID }</p>
                    <p class="moreinfo">Email: <a href="mailto:${ engineerEmail }">${ engineerEmail }</a></p>
                    <p class="moreinfo">Github: <a href="https://github.com/${ engineerGithub }">${ engineerGithub }</a></p>
              </div>  
          `
          
          fs.appendFile('index.html', engineerHTML, (err) =>
            err ? console.error(err) : console.log('Engineer Added!')
          );

          if (teamSelector == 'Engineer') {
            setTimeout(createEngineer, 200);
          }
          
          if (teamSelector == 'Intern') {
            setTimeout(createIntern, 200);
          }
      
          if (teamSelector == 'Finish Team') {
            setTimeout(finishFile, 200);
          }

         });
    }

    const createIntern = () => {
      inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: 'Interns Name:',
        },
        {
          type: 'input',
          name: 'internID',
          message: 'Interns Employee ID:',
        },
        {
          type: 'input',
          name: 'internEmail',
          message: 'Interns Email:',
        },
        {
          type: 'input',
          name: 'internSchool',
          message: 'Interns School:',
        },
        {
          type: 'list',
          name: 'teamSelector',
          message: 'Next Team Member:',
          choices: ['Engineer', 'Intern', 'Finish Team']
        },
      ])
      .then((data) => {
        const { teamSelector } = data;
        const {internName, internID, internEmail, internSchool } = data;
         
        internHTML = `
              <div class="employee">
                <h2 class="name">${ internName }</h2>
                    <p class="role">Intern</p>
                    <p class="moreinfo">ID: ${ internID }</p>
                    <p class="moreinfo">Email: <a href="mailto:${ internEmail }">${ internEmail }</a></p>
                    <p class="moreinfo">School: ${ internSchool }</p>
              </div>  
          `
          
          fs.appendFile('index.html', internHTML, (err) =>
            err ? console.error(err) : console.log('Intern Added!')
          );


        if(teamSelector == 'Engineer') {
          setTimeout(createEngineer, 200); 
        }
        
        if(teamSelector == 'Intern') {
          setTimeout(createIntern, 200);
        }
    
        if (teamSelector == 'Finish Team') {
          setTimeout(finishFile, 200);
        }

       });
    }
    
    if (teamSelector == 'Engineer') {
      setTimeout(createEngineer, 200); 
    } 

    if (teamSelector == 'Intern') {
      setTimeout(createIntern, 200);
    }

    if (teamSelector == 'Finish Team') {
      setTimeout(finishFile, 200);
    }
    
  });


