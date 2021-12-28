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
