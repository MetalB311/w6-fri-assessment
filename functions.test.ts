const {shuffleArray} = require('./utils')

const testArr1 = [1,2,3,4]
const testArr2 = []
const testArr3 = ['hello', 'name', 'chair']

describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array', () => {

        expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr2))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr3))).toBe(true)
        
    })
test('return array with same length', () => {
    expect(shuffleArray(testArr1).length).toBe(testArr1.length)
    expect(shuffleArray(testArr2).length).toBe(testArr2.length)
    expect(shuffleArray(testArr3).length).toBe(testArr3.length)
})

})