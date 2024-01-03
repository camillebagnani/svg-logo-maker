const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'Please enter up to three characters.',
        name: 'characters',
    },
    {
        type: 'input',
        message: 'Please enter a color or a hexadecimal number for the text.',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Please choose a shape.',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Please enter a color or a hexadecimal number for the shape.',
        name: 'shapeColor',
    },
];

inquirer.prompt(questions)