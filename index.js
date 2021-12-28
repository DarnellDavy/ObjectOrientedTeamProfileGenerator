const inquirer = require('inquirer');
let employeeType = 'Employee';
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const CreateFile = require('./src/create-file');

var groupMembers = [];

var baseQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'Please enter employee name.',
      validate: value => {
        if (value) {
            return true;
        } else {
            console.log('You must enter a name!')
            return false;
        }
    }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter employee ID.',
      validate: value => {
        if (value) {
            return true;
        } else {
            console.log('You must enter an ID!')
            return false;
        }
    }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter employee email.',
      validate: value => {
        if (value) {
            return true;
        } else {
            console.log('You must enter an email!')
            return false;
        }
    }
    }
];

var managerQuestions = [...baseQuestions];
managerQuestions.push({
        type: 'input',
        name: 'officeNumber', 
        message: 'Please enter employee office number.',
        validate: value => {
          if (value) {
              return true;
          } else {
              console.log('You must enter an office number!')
              return false;
          }
        }
    })

var engineerQuestions = [...baseQuestions];
engineerQuestions.push({
    type: 'input',
    name: 'github', 
    message: 'Please enter employee GitHub Repository.',
    validate: value => {
      if (value) {
          return true;
      } else {
          console.log('You must enter a github repository!')
          return false;
      }
    }
});

var internQuestions = [...baseQuestions];
internQuestions.push({
    type: 'input',
    name: 'school', 
    message: 'Please enter employee school.',
    validate: value => {
      if (value) {
          return true;
      } else {
          console.log('You must enter a school!')
          return false;
      }
    }
});

inquirer.prompt(
    managerQuestions
).then((answers) => {
    groupMembers.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
    promptForEmployee();
});
