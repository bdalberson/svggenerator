const fs = require('fs/promises');
const inquirer = require('inquirer')
const Circle = require("./lib/Circle.js")
const Triangle = require("./lib/Triangle.js")
const Square = require("./lib/Square.js")

async function writeSVGfile(filename = "", data) {
    try {
        const result = await data;
        await fs.writeFile(`examples/${filename}`, result);
        console.log("File saved successfully!");
    } catch (err) {
        console.log(err);
    }
}


function startPrompt() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter 3 or less characters',
                validate: function (input) {
                    return input.length < 4
                }
            },
            {
                type: 'input',
                message: 'What color would you like? Hex accepted',
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
            }
            ]).then((data) => {
                const selectedShapes = data.shape;
                selectedShapes.forEach((shape) => {
                switch (shape) {
                    case 'circle':
                        const circle = new Circle(data.color, data.text)
                        writeSVGfile("logo.svg", circle.render());
                        break;
                    case 'square':
                        const square = new Square(data.color, data.text)
                        writeSVGfile("logo.svg", square.render())
                        break;
                    case 'triangle':
                        const triangle = new Triangle(data.color, data.text)
                        writeSVGfile("logo.svg", triangle.render())

                        break;
                    default:
                        
                        return null
                }
            });
            })
            .catch((err) => {
                process.exitCode = 1
                if (err) throw err;
                console.log('The file could not be saved!');
                process.exit()
            })
    }

startPrompt()