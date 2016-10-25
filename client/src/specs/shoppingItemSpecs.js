var ShoppingItem = require('../models/shoppingItem');
var assert = require('assert');

describe('ShoppingItem', function(){

  var flipFlops;
  var shirt;


  beforeEach(function(){
    flipFlops = new ShoppingItem ({
       "id": 4,
       "name": "Flip Flops",
       "colour": "Red",
       "category": "Men's Footwear",
       "type": "footwear",
       "gender": "men",
       "price": 19.00,
       "salePrice": null,
       "stockQuantity": 6
    });
    shirt = new ShoppingItem ({
       "id": 9,
       "name": "Fine Stripe Short Sleeve Shirt",
       "colour": "Green",
       "category": "Men's Casualwear",
       "type": "casualwear",
       "gender": "men",
       "price": 49.99,
       "salePrice": 39.99,
       "stockQuantity": 3
    })

  })

  it('has a name', function(){
    assert.equal(shirt.name, "Fine Stripe Short Sleeve Shirt");
  })

  it('has a colour', function(){
    assert.equal(flipFlops.colour, "Red");
  })

  it('has a category', function(){
    assert.equal(shirt.category, "Men's Casualwear");
  })

  it('has a type', function(){
    assert.equal(shirt.type, "casualwear");
  })

  it('has a gender', function(){
    assert.equal(shirt.gender, "men");
  })

  it('has a price', function(){
    assert.equal(shirt.price, 49.99);
  })  

  it('has a salePrice', function(){
    assert.equal(shirt.salePrice, 39.99);
  })  

  it('has a stockQuantity', function(){
    assert.equal(shirt.stockQuantity, 3);
  })


})