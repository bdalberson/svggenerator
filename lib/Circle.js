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
            return `<svg width="250" height="250"><${this.type}  fill="${this.color}" cx="125" cy="125" r="100"/> <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="100px" font-family="Arial" dy=".3em">${this.text}</text></svg>`
        }
}    


module.exports = Circle