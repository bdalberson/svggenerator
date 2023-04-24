const Triangle = require('./Triangle')

describe("Triangle test cases", ()=>{
    test("testing render with color of red", ()=>{
        const expectedTriangle = `<svg width="300px" height="200px"><polygon fill="red" stroke-width="1" points="30,4,4,60,60,60"/><text x="32" y="50" text-anchor="middle" fill="white" font-size="20">fry</text></svg>`
        const triangle = new Triangle()
        triangle.setcolor("red")
        triangle.settext("fry")
        const trianglesvg = triangle.render()
        expect (trianglesvg).toEqual(expectedTriangle)
        })
    }
) 