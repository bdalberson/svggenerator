const Shapes = require("./Shapes")


class Square extends Shapes {
    constructor(color,text) {
        super(color,text,type);
        this.color = color
        this.text = text
        super.type = "square"
    
    }
    
}

module.exports = Square
