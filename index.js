const fs = require('fs/promises');
const inquirer = require('inquirer')
const Circle = require("./lib/Circle")
const Triangle = require("./lib/Triangle")
const Square = require("./lib/Square")

function writeSVGfile(filename = "", data) {
    fs.writeFile("shape.svg", data).then((result) => {
        console.log(result)
    }).catch((err) => console.log(err))

}

function startPrompt() {
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
                type: 'checkbox',
                message: 'What shape would you like?',
                name: 'shape',
                choices: ['circle', 'triangle', 'square']
            },
            ]).then((data) => {
                console.log(data)
                switch (data.shape) {
                    case "circle":
                        const circle = new Circle(data.color, data.text)
                        writeSVGfile("circle", circle.render())

                        break;
                    case "square":
                        const square = new Square(data.color, data.text)

                        break;
                    case "triangle":
                        const triange = new Triangle(data.color, data.text)

                        break;

                    default:
                        return null
                }
            }).catch((err) => {
                process.exitCode = 1
                if (err) throw err;
                console.log('The file could not be saved!');
                process.exit()
            })
}

startPrompt()