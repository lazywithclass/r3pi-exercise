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

  describe('for bananas', () => {

    it('are calculated by adding all bananas in the basket', () => {
      prices.bananas(basket).should.equal(30)
    })

    it('gives 0 if there are no bananas', () => {
      prices.bananas([]).should.equal(0)
    })

  });

  describe('for apples', () => {

    it('are calculated by adding all apples in the basket', () => {
      prices.apples(basket).should.equal(25)
    })

    it('gives 0 if there are no apples', () => {
      prices.apples([]).should.equal(0)
    })

  });

});
