## R3pi exercise

Develop a simple program that calculates the price of a shopping basket.

I've committed my work as units so you could see where I was going at each step, hope that helps with your decision.

### Requirements

* Items are presented one at a time, in a list, identified by name - for example
"Apple" or "Banana".
- The basket can contain any item multiple times. Items are priced as follows:
- Apples are 25 ct each
- Oranges are 30 ct each
- Bananas are 15 ct each
- Papayas are 50 ct each, but are available as "three for the price of two"
* Given a shopping list with items, calculate the total cost of those items
* The output shall be displayed similar to what you would expect to see on a receipt


### Configuration

This has been tested with node v8.0.0, which is the current stable at the time I
am writing this.

```bash
# install dependencies
$ npm install
```

```bash
# check if tests pass
$ npm test
```

### Generating the receipt

A [sample basket](https://github.com/lazywithclass/r3pi-exercise/blob/master/basket.json) has been provided, running the following command 

```bash
$ npm run generate
```

will use that as input and create a file named "receipt.html" at the root of 
the project, open it with your preferred browser to see the receipt.
