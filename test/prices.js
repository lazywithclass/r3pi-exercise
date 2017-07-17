describe('prices', () => {

  const prices = require('../lib/prices'),
        basket = [
          'banana',
          'orange',
          'banana',
          'apple',
          'papaya',
          'papaya',
          'papaya'
        ]

  describe('simpleAddition', () => {

    it('adds items of the same type, given a price list', () => {
      prices.simpleAddition('apple', basket).should.equal(25)
      prices.simpleAddition('orange', basket).should.equal(30)
      prices.simpleAddition('banana', basket).should.equal(30)
    })

    it('gives 0 if there are no items of the given type', () => {
      prices.simpleAddition('mango', basket).should.equal(0)
    })

  })

  describe('threeForTwoAddition', () => {

    it('adds items of the same type, applying a 3x2 discount', () => {
      prices.threeForTwoAddition('papaya', basket).should.equal(100)
      
    })

    it('gives 0 if there are no items of the given type', () => {
      prices.threeForTwoAddition('mango', basket).should.equal(0)
    })

  })

});
