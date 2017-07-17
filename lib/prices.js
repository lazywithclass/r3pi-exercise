let price = (type) => {
  const priceList = {
    apple: 25,
    orange: 30,
    banana: 15,
    papaya: 50
  }

  return priceList[type] || 0
}

let simpleAddition = (basket, type) =>
    basket
    .filter(item => item === type)
    .reduce((total) => total + price(type), 0)

let threeForTwoAddition = (basket, type) => {
  const threeForTwoItems = basket.filter(item => item === type)

  function recur(items, totalPrice) {
    if (items.length < 3) {
      return totalPrice + (price(type) * items.length)
    }

    totalPrice += price(type) * 2
    return recur(items.splice(3), totalPrice)
  }

  return recur(threeForTwoItems, 0)
}

let basketAddition = basket => {
  let simpleAdditionFunx = simpleAddition.bind(null, basket)
  let total = [
    'apple',
    'orange',
    'banana'
  ].reduce((sum, type) => simpleAdditionFunx(type) + sum, 0)
  return total + threeForTwoAddition(basket, 'papaya')
}

module.exports = {
  simpleAddition: simpleAddition,
  threeForTwoAddition: threeForTwoAddition,
  basketAddition: basketAddition
}
