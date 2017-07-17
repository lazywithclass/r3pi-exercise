let price = (type) => {
  const priceList = {
    apple: 25,
    orange: 30,
    banana: 15,
    papaya: 50
  }

  return priceList[type] || 0
}


let simpleAddition = (type, basket) =>
    basket
    .filter(item => item === type)
    .reduce((total) => total + price(type), 0)

let threeForTwoAddition = (type, basket) => {
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

module.exports = {
  simpleAddition: simpleAddition,
  threeForTwoAddition: threeForTwoAddition
}
