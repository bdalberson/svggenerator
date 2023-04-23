const Square = require('./Square')

describe("Square test cases", ()=>{
    test("testing render with color of red", ()=>{
        const expectedSquare = `<svg width="250" height="250"><square  cx="125" cy="125" r="100"/> <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="50px" font-family="Arial" dy=".3em">fry</text><rect x="50" y="20" width="150" height="150" style="fill:red;stroke:white;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" /></svg>`
        const square = new Square()
        square.setcolor("red")
        square.settext("fry")
        const squaresvg = square.render()
        expect (squaresvg).toEqual(expectedSquare)
        })
    }
) 