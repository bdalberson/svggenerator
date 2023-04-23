const Shapes = require("./Shapes.js")


class Circle extends Shapes {
    constructor(color,text) {
        super(color,text);
        this.color = color
        this.text = text
        super.type = "circle"
    
        }
        render(){
            console.log("rendering shape")
            return `<${this.type} fill="${this.color}" x="20" y="40" width="80" height="80" />`
        }
}    


module.exports = Circle