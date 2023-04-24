const Circle = require('./Circle')

describe("circle test cases", ()=>{
    test("testing render with color of red", ()=>{
        const expectedCirlce = `<svg width="300px" height="200px"><circle  fill="red" cx="140" cy="100" r="100"/><text x="50%" y="50%" text-anchor="middle" fill="white" font-size="50px" font-family="Arial">fry</text></svg>`
        const circle = new Circle()
        circle.setcolor("red")
        circle.settext("fry")
        const circlesvg = circle.render()
        expect (circlesvg).toEqual(expectedCirlce)
        })
    }
) 