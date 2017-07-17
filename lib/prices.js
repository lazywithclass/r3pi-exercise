let bananas = basket =>
    basket
    .filter(item => item === 'banana')
    .reduce((total) => total + 15, 0)

module.exports = {
  bananas: bananas
}
