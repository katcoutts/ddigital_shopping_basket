var shoppingItem = require( './shoppingItem' );
var discountVoucher = require('./discountVoucher');
var _ = require('lodash');

var ShoppingBasket = function(){
  this.items = [],
  this.total = 0
}


ShoppingBasket.prototype = {


  add: function(item){
    if (!item.stockQuantity){
      return 
    }
    var price = item.salePrice;
    this.items.push(item);
    if (!item.salePrice){
      price = item.price
    }
    this.total += price
  }, 



  removeItem: function( id ) {
    var items = this.items;
    for ( item of items ) {
      if ( item.id === id ) {
        var index = items.indexOf( item );
        items.splice( index, 1 );
      }
    }
  },

  empty: function(){
    this.items = [];
  },

  calculateCost: function(){
    var total = 0;
    for (var shoppingItem of this.items){
      if (!shoppingItem.salePrice){
        total += shoppingItem.price;
      }
      else {
        total += shoppingItem.salePrice;
      }
    }
    this.total = total;
    return total;
  },

  checkDiscountEligible: function(discount){
    if (discount.itemRequirement.length === 0){
      this.checkSpendMet(discount)
    }
    else {
      this.checkItemRequirementMet(discount);
    }
  },

  checkItemRequirementMet: function(discount){
    for (var requirement of discount.itemRequirement){  
      for (var item of this.items) {
        if (requirement === item.type){
        this.checkSpendMet(discount)
        return
        }
        else {
          return null
        }
      }
    }
  },

  checkSpendMet: function(discount){
    if (this.total > discount.priceLimit) {
      this.applyDiscount(discount)
      return true
    }
    else {
      return null
    }
  },

  applyDiscount: function(discount){
    this.total -= discount.discountAmount;
  },


}


module.exports = ShoppingBasket;
