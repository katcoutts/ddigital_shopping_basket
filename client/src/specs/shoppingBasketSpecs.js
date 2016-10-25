var ShoppingBasket = require( '../models/shoppingBasket' );
var ShoppingItem = require( '../models/shoppingItem' );
var DiscountVoucher = require('../models/discountVoucher')
var assert = require( 'assert' );

describe( "ShoppingBasket", function() {

  var shoppingBasket;
  var fifteenDiscount;
  var fiveDiscount;
  var shirt;
  var flipFlops;

  beforeEach(function(){
    shoppingBasket = new ShoppingBasket();
    fifteenDiscount = new DiscountVoucher({
      code: '15-OFF', 
      discountAmount: 15.00, 
      priceLimit: 75.00,
      itemRequirement: ["footwear"]
    });
    fiveDiscount = new DiscountVoucher({
      code: '5-OFF', 
      discountAmount: 5.00, 
      priceLimit: 0,
      itemRequirement: []
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
    });
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
  })

  it("should start empty", function(){
    assert.equal(0, shoppingBasket.items.length);
  })

  it("should start with a total value of 0", function(){
    assert.equal(0, shoppingBasket.total);
  })

  it("can add an item to the basket", function(){
    shoppingBasket.add(flipFlops);
    assert.equal(1, shoppingBasket.items.length);
  })


})