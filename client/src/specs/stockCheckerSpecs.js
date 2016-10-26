var StockChecker = require('../models/stockChecker');
var assert = require( 'assert' );

describe( "StockChecker", function() {

  var stockChecker;

  beforeEach(function(){
    stockChecker = new StockChecker(
      [{
         "id": 4,
         "name": "Flip Flops",
         "colour": "Red",
         "category": "Men's Footwear",
         "type": "footwear",
         "gender": "men",
         "price": 19.00,
         "salePrice": null,
         "stockQuantity": 6
      },
      {
         "id": 9,
         "name": "Fine Stripe Short Sleeve Shirt",
         "colour": "Green",
         "category": "Men's Casualwear",
         "type": "casualwear",
         "gender": "men",
         "price": 49.99,
         "salePrice": 39.99,
         "stockQuantity": 3
      }])
  })

    it("should start with stock", function(){
      assert.equal(2, stockChecker.items.length);
    })

})