const Shapes = require("./Shapes")

class Triangle extends Shapes {
    constructor(color,text) {
    super(color,text);
    this.color = color
    this.text = text
    super.type = "triangle"

    }
    setcolor(color){
        this.color = color
    }
    settext(text){
        this.text = text
    }
    render(){
        console.log("rendering shape")
        return `<svg width="300px" height="200px"><polygon fill="${this.color}" stroke-width="1" points="30,4,4,60,60,60"/><text x="32" y="50" text-anchor="middle" fill="white" font-size="20">${this.text}</text></svg>`
    }
}

module.exports = Triangle

