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
    for ( var item of this.items ) {
      if ( item.id === id ) {
        var index = this.items.indexOf( item );
        this.items.splice( index, 1 );
        var price = item.salePrice;
        if (!item.salePrice){
          price = item.price
        }
        this.total -= price;
        if (this.total < 0){
          this.total = 0;
        }
        return
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
      return
    }
    else {
      this.checkItemRequirementMet(discount);
    }
  },


  checkItemRequirementMet: function(discount){
    var items = this.items
    for (var requirement of discount.itemRequirement){  
      for (var item of items) {
        if (requirement === item.type){
        this.checkSpendMet(discount)
        return 
        }
      }
    }
      return false
  },

  checkItemRequirementMet2: function(discount){
    var response = false;
    if (discount.itemRequirement.length === 0){
      response = true
    }
    var items = this.items;
    for (var requirement of discount.itemRequirement){  
      for (var item of items) {
        if (requirement === item.type){
        response = true;
        }
      }
    }
    return response
  },

  checkSpendMet: function(discount){
    if (this.total > discount.priceLimit) {
      this.applyDiscount(discount)
      return
    }
    return false
  }, 



  applyDiscount: function(discount){
    this.total -= discount.discountAmount;
  },



}


module.exports = ShoppingBasket;
