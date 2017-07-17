const handlebars = require('handlebars'),
      fs = require('fs'),
      template = fs.readFileSync('./receipt-templates/base.html').toString(),
      prices = require('../lib/prices'),
      moment = require('moment')

let compiled = handlebars.compile(template);
let basket = require('../basket.json')

let data = {
  items: [],
  generatedOn: moment().format('MMMM DD, YYYY'),
  total: prices.basketAddition(basket)
}

if (basket.indexOf('apple') > -1) {
  data.items.push({
    item: 'Apples', price: prices.simpleAddition(basket, 'apple')
  })
}

if (basket.indexOf('banana') > -1) {
  data.items.push({
    item: 'Bananas', price: prices.simpleAddition(basket, 'banana')
  })
}

if (basket.indexOf('orange') > -1) {
  data.items.push({
    item: 'Oranges', price: prices.simpleAddition(basket, 'orange')
  })
}

if (basket.indexOf('papaya') > -1) {
  data.items.push({
    item: 'Papayas', price: prices.threeForTwoAddition(basket, 'papaya')
  })
}

fs.writeFile('./receipt.html', compiled(data), function(err) {
  if (err) {
    console.log('An error occurred while creating the receipt!')
    console.log(error)
  } else {
    console.log('done');
  }
})
