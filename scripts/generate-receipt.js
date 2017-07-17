const handlebars = require('handlebars'),
      fs = require('fs'),
      template = fs.readFileSync('./receipt-templates/base.html').toString(),
      prices = require('../lib/prices'),
      moment = require('moment')

let compiled = handlebars.compile(template);
let basket = require('../basket.json')

let data = {
  items: [
    { item: 'Apples', price: prices.simpleAddition(basket, 'apple') },
    { item: 'Bananas', price: prices.simpleAddition(basket, 'banana') },
    { item: 'Oranges', price: prices.simpleAddition(basket, 'orange') },
    { item: 'Papayas', price: prices.simpleAddition(basket, 'papaya') }
  ],
  generatedOn: moment().format('MMMM DD, YYYY'),
  total: prices.basketAddition(basket)
}

fs.writeFile('./receipt.html', compiled(data), function(err) {
  if (err) {
    console.log('An error occurred while creating the receipt!')
    console.log(error)
  } else {
    console.log('done');
  }
})
