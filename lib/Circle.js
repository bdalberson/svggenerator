const Shapes = require("./Shapes")


class Circle extends Shapes {
    constuctor(color,text) {
        super(color,text,type);
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