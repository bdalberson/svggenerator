class Shapes {
    constructor (color,text){
        this.color = color;
        this.text = text;
        this.type = ""
    }
    

    render(){
        console.log("rendering shape")
        return `<${this.type} fill="${this.color}" x="20" y="40" width="80" height="80" />`
    }
}


module.exports = Shapes