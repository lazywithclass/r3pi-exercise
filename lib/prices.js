let bananas = basket =>
    basket
    .filter(item => item === 'banana')
    .reduce((total) => total + 15, 0)

let apples = basket =>
    basket
    .filter(item => item === 'apple')
    .reduce((total) => total + 25, 0)

module.exports = {
  bananas: bananas,
  apples: apples
}
