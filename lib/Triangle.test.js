const Triangle = require('./Triangle')

describe("Triangle test cases", ()=>{
    test("testing render with color of red", ()=>{
        const expectedTriangle = `<svg width="250" height="250"><triangle  fill="red" cx="125" cy="125" r="100"/> <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="100px" font-family="Arial" dy=".3em">fry</text></svg>`
        const triangle = new Triangle()
        triangle.setcolor("red")
        triangle.settext("fry")
        const trianglesvg = triangle.render()
        expect (trianglesvg).toEqual(expectedTriangle)
        })
    }
) 