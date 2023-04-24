# svggenerator


| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     
| Node.JS| [https://developer.mozilla.org/en-US/docs/Glossary/Node.js?utm_source=wordpress%20blog&utm_medium=content%20link&utm_campaign=promote%20mdn](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)    
| Jest |:https://jestjs.io/docs/getting-started:| 
| Inquirer |:https://www.npmjs.com/package/inquirer:| 

## Description 
[Visit the Deployed Site](https://bdalberson.github.io/svggenerator/)

This is an SVG generator.  It will need to be run through the command line.  It will take in 0-3 characters, a color and a shape and will generate a beautiful svg logo automatically! 



## Code Refactor Example


Below is an inquirer checkbox from the command line.  This is needed to force the user select one of three shapes that can be generated.  

```node.js


function startPrompt() {
    inquirer
        .prompt([
  {
                type: 'checkbox',
                message: 'What shape would you like?',
                name: 'shape',
                choices: ['circle', 'triangle', 'square']
            }
])}


Below is the fucntion for extending the Shape parent oobject and rendering the SVG.  Lot of learning was involved to get to this point.
``` JavaScript

class Square extends Shapes {
    constructor(color,text) {
        super(color,text);
        this.color = color
        this.text = text
        super.type = "square"
    
    }
    setcolor(color){
        this.color = color
    }
    settext(text){
        this.text = text
    }
    render(){
        console.log("Generated logo.svg")
        return `<svg width="300px" height="200px"><rect x="50" y="20" width="150" height="150" style="fill:${this.color};stroke:white;stroke-width:5" /><square  cx="125" cy="125" r="100"/> <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="50px" font-family="Arial" dy=".3em">${this.text}</text></svg>`
    }
}

Blow is the code for the unit test of the Square Class. The syntax is quite tricky but it tests the constructor against fed in imputs and verifies that the constuctor is working expectedly. 

``` jest


class Square extends Shapes {
    constructor(color,text) {
        super(color,text);
        this.color = color
        this.text = text
        super.type = "square"
    
    }
    setcolor(color){
        this.color = color
    }
    settext(text){
        this.text = text
    }
    render(){
        console.log("Generated logo.svg")
        return `<svg width="300px" height="200px"><rect x="50" y="20" width="150" height="150" style="fill:${this.color};stroke:white;stroke-width:5" /><square  cx="125" cy="125" r="100"/> <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="50px" font-family="Arial" dy=".3em">${this.text}</text></svg>`
    }
}



## Usage 

You will need to clone down all the repro.  once done you will need to run the coomman "npm init -y".  After that you will to run "npm install inquirer jest" . After that you can run "npm index.js" to start the prompts.  You will be prompted to enter 0-3 characters, a color and a shape, after that a beautiful SVG file will be created in the examples directory with the filename logo.svg. 


## Learning Points 


Learning how to use NODE.JS, learning how to use template literals. Learning to write test cases using jest and how to make andd format SVGs.  SVGs are like CSS but seemly able to do more shapes and such.  Very hard learning the new syntax and drawing style.   


## Author Info

QA professional turning into coder 

* [Portfolio](https://bdalberson.github.io/Course2Biopage/)
* [LinkedIn](https://www.linkedin.com/in/brian-alberson-464b2271/)
* [Github](https://github.com/bdalberson)
```

## Credits

Study groups, TAs, and study groups were all useful and needed to get this done.  I hope its all up to expectations.    

---

## Tests
Unit tests are in the lib folder.  Run "npm test <filename>" to run the tests and see if the unit tests pass.  

