const fs = require('fs');
const inquirer = require('inquirer')




inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'What text would you like?',
      validate: function (input) { 
        return input.length > 3
      }
    },
    {
      type: 'input',
      message: 'What colow would you like? Hex accepted',
      name: 'color',
      validate: function (input) { 
        return input.length > 3
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