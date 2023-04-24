const Shapes = require("./Shapes.js")


class Circle extends Shapes {
    constructor(color,text) {
        super(color,text);
        this.color = color
        this.text = text
        super.type = "circle"
        }
        setcolor(color){
            this.color = color
        }
        settext(text){
            this.text = text
        }
        render(){
            console.log("Generated logo.svg")
            return `<svg width="300px" height="200px"><circle  fill="${this.color}" cx="140" cy="100" r="100"/><text x="50%" y="50%" text-anchor="middle" fill="white" font-size="50px" font-family="Arial">${this.text}</text></svg>`
        }
}    


module.exports = Circle