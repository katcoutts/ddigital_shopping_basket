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
    flipFlopsBlue = new ShoppingItem ({
      "id": 5,
      "name": "Flip Flops",
      "colour": "Blue",
      "category": "Men's Footwear",
      "type": "footwear",
      "gender": "men",
      "price": 19.00,
      "salePrice": null,
      "stockQuantity": 0
    });
    courtShoes = new ShoppingItem ({
    "id": 1,
    "name": "Almond Toe Court Shoes",
    "colour": "Patent Black",
    "category": "Women's Footwear",
    "type": "footwear",
    "gender": "women",
    "price": 99.00,
    "salePrice": null,
    "stockQuantity": 5
    })   
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

  it("can empty basket", function(){
    shoppingBasket.add(flipFlops);
    assert.equal(1, shoppingBasket.items.length);
    shoppingBasket.empty();
    assert.equal(0, shoppingBasket.items.length);
  })

  it("can calculate shopping basket value", function(){
    shoppingBasket.add(flipFlops);
    assert.equal(19.00, shoppingBasket.calculateCost())
  })

  it("can calculate basket cost with sale prices if available", function(){
    shoppingBasket.add(flipFlops);
    shoppingBasket.add(shirt);
    assert.equal(58.99, shoppingBasket.calculateCost());
  })

  it("can remove an item by given id", function(){
    shoppingBasket.add(flipFlops);
    shoppingBasket.add(shirt);
    shoppingBasket.removeItem(9);
    assert.equal(1, shoppingBasket.items.length);
    assert.equal("Flip Flops", shoppingBasket.items[0].name)
  })

  it("can't add an item if stock quantity is zero", function(){
    shoppingBasket.add(flipFlopsBlue);
    assert.equal(0, shoppingBasket.items.length)
  })

  it("can apply basic discount with no item requirements", function(){
    shoppingBasket.add(flipFlopsBlue);
    assert.equal(19.00, shoppingBasket.total);
    shoppingBasket.checkDiscountEligible(fiveDiscount);
    assert.equal(14.00, shoppingBasket.total);
  })

  it("will not apply discount if basket total requirement not met", function(){
    shoppingBasket.add(flipFlopsBlue);
    assert.equal(19.00, shoppingBasket.total);
    shoppingBasket.checkSpendMet(fifteenDiscount);
    assert.equal(19.00, shoppingBasket.total);
  })

  it("will apply discount if item requirements met", function(){
    shoppingBasket.add(flipFlopsBlue);
    shoppingBasket.add(flipFlops);
    shoppingBasket.add(shirt);
    assert.equal(77.99, shoppingBasket.total.toFixed(2));
    shoppingBasket.checkDiscountEligible(fifteenDiscount);
    assert.equal(62.99, shoppingBasket.total.toFixed(2));
  })

  it("won't apply discount if spend met but item requirements not met", function(){
    shoppingBasket.add(shirt);
    shoppingBasket.add(courtShoes);
    assert.equal(138.99, shoppingBasket.total.toFixed(2));
    shoppingBasket.checkDiscountEligible(fifteenDiscount);
    assert.equal(138.99, shoppingBasket.total.toFixed(2));
  })

  it("will not apply discount if item requirement met but spend not met", function(){
    shoppingBasket.add(flipFlops);
    assert.equal(19.00, shoppingBasket.total.toFixed(2));
    shoppingBasket.checkDiscountEligible(fifteenDiscount);
    assert.equal(19.00, shoppingBasket.total.toFixed(2));
  })




})