const Shapes = require("./Shapes")


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

module.exports = Square
