describe('prices', () => {

  const prices = require('../lib/prices'),
        basket = [
          'banana',
          'orange',
          'banana',
          'apple',
          'papaya',
          'papaya'
        ]


  describe('simpleAddition', () => {

    const priceList = {
      apple: 25,
      orange: 30,
      banana: 15
    }

    it('adds items of the same type, given a price list', () => {
      prices.simpleAddition(priceList, 'apple', basket).should.equal(25)
      prices.simpleAddition(priceList, 'orange', basket).should.equal(30)
      prices.simpleAddition(priceList, 'banana', basket).should.equal(30)
    })

    it('gives 0 if there are no items of the given type', () => {
      prices.simpleAddition(priceList, 'mango', basket).should.equal(0)
    })

  })

});
