let simpleAddition = (priceList, type, basket) =>
    basket
    .filter(item => item === type)
    .reduce((total) => total + priceList[type], 0)

let threeForTwoAddition = (priceList, type, basket) => {
  const threeForTwoItems = basket.filter(item => item === type)

  function recur(items, price) {
    if (items.length < 3) {
      return price + (priceList[type] * items.length)
    }

    price += priceList[type] * 2
    return recur(items.splice(3), price)
  }

  return recur(threeForTwoItems, 0)
}

module.exports = {
  simpleAddition: simpleAddition,
  threeForTwoAddition: threeForTwoAddition
}
