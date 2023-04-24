const Square = require('./Square')

describe("Square test cases", ()=>{
    test("testing render with color of red", ()=>{
        const expectedSquare = `<svg width="300px" height="200px"><rect x="50" y="20" width="150" height="150" style="fill:red;stroke:white;stroke-width:5" /><square  cx="125" cy="125" r="100"/> <text x="50%" y="50%" text-anchor="middle" font-size="50px" font-family="Arial" dy=".3em">fry</text></svg>`
        const square = new Square()
        square.setcolor("red")
        square.settext("fry")
        const squaresvg = square.render()
        expect (squaresvg).toEqual(expectedSquare)
        })
    }
) 