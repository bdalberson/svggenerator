const fs = require('fs');
const inquirer = require('inquirer')

class Shapes {}

class Triannge {}     //should extend Shapes

class Circle {}       //should extend Shapes

class Square {}       //should extend Shapes



inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'What text would you like?',
      validate: function (input) { 
        return input.length > 1
      }
    },
    {
      type: 'input',
      message: 'What colow would you like? Hex accepted',
      name: 'color',
      validate: function (input) { 
        return input.length > 1
    }
    },
    {
      type: 'input',
      message: 'What shape would you like?',
      name: 'title',
      validate: function (input) { 
        return input.length > 3
      }
    }
]).then((data) => {
    console.log(data)
},(err) => {
    if (err) throw err;
    console.log('The file could not be saved!');
})