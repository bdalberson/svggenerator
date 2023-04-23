const fs = require('fs/promises');
const inquirer = require('inquirer')
const Circle = require("./lib/Circle.js")
const Triangle = require("./lib/Triangle.js")
const Square = require("./lib/Square.js")
const data =  ["brian", "red", "triangle"]

async function writeSVGfile(filename = "", data) {
    try {
        const result = await data;
        await fs.writeFile(filename, result);
        console.log("File saved successfully!");
    } catch (err) {
        console.log(err);
    }
}

// writeSVGfile("testing.svg", data)

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
                        writeSVGfile("circle.svg", circle.render());
                        console.log("hit cirlce")
                        break;
                    case 'square':
                        const square = new Square(data.color, data.text)
                        writeSVGfile("square.svg", square.render())
                        console.log("hit square")
                        break;
                    case 'triangle':
                        const triangle = new Triangle(data.color, data.text)
                        writeSVGfile("triangle.svg", triangle.render())
                        console.log("hit triangle")

                        break;
                    default:
                        
                        return console.log("hit")
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