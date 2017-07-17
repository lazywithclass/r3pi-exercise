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
      prices.simpleAddition(basket, 'apple').should.equal(25)
      prices.simpleAddition(basket, 'orange').should.equal(30)
      prices.simpleAddition(basket, 'banana').should.equal(30)
    })

    it('gives 0 if there are no items of the given type', () => {
      prices.simpleAddition(basket, 'mango').should.equal(0)
    })

  })

  describe('threeForTwoAddition', () => {

    it('adds items of the same type, applying a 3x2 discount', () => {
      prices.threeForTwoAddition(basket, 'papaya').should.equal(100)
      prices.threeForTwoAddition(
        ['papaya', 'papaya'], 'papaya'
      ).should.equal(100)
      prices.threeForTwoAddition(
        ['papaya', 'papaya', 'papaya', 'papaya'], 'papaya'
      ).should.equal(150)
    })

    it('gives 0 if there are no items of the given type', () => {
      prices.threeForTwoAddition(basket, 'mango').should.equal(0)
    })

  })

  describe('basketAddition', () => {

    it('calculates the price for all items in the basket', () => {
      prices.basketAddition(basket).should.equal(25 + 30 + 30 + 100)
      prices.basketAddition([]).should.equal(0)
    })

  })

});
