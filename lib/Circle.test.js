const Circle = require('./Circle')

describe("circle test cases", ()=>{
    test("testing render with color of red", ()=>{
        const expectedCirlce = `<svg width="250" height="250"><circle  fill="red" cx="125" cy="125" r="100"/><text x="50%" y="50%" text-anchor="middle" fill="white" font-size="100px" font-family="Arial" dy=".3em">fry</text></svg>`
        const circle = new Circle()
        circle.setcolor("red")
        circle.settext("fry")
        const circlesvg = circle.render()
        expect (circlesvg).toEqual(expectedCirlce)
        })
    }
) 