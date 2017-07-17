let simpleAddition = (priceList, type, basket) =>
    basket
    .filter(item => item === type)
    .reduce((total) => total + priceList[type], 0)

module.exports = {
  simpleAddition: simpleAddition
}
