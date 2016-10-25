var shoppingItem = require( './shoppingItem' );
var discountVoucher = require('./discountVoucher');
var _ = require('lodash');

var ShoppingBasket = function(){
  this.items = [],
  this.total = 0
}


ShoppingBasket.prototype = {

// do we add to the total in the add function or call an add to total function?? Or put all items in basket and then calculate the total? Think best experience to do it as you go along - more realistic.

// also need to add a warning to the add if you can't have it because there are no things in stock
  add: function(item){
    var price = item.salePrice;
    if (item.stockQuantity > 0){
    this.items.push(item);
    }
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

  // checkDiscountEligible: function(discount){
  //   if (!discount.itemRequirement){
  //     this.checkDiscountValid(discount)
  //   }
  //   else {
  //     for (var requirement of discount.itemRequirement)  
  //       for (var item of this.items) {
  //       if (requirement === item.type){
  //         this.checkDiscountValid(discount)
  //       }
  //       else {
  //         return
  //       }
  //     }
  //   }
  // },

  checkDiscountValid: function(discount){
    if (this.total > discount.priceLimit) {
      this.applyDiscount(discount)
    }
    else {
      return
    }
  },

  applyDiscount: function(discount){
    this.total -= discount.discountAmount;
  },


  // finalPrice: function(){
  //   var price = 0;
  //   var bogofItems = [];
  //   for (var shoppingItem of this.items){
  //     // if an item is not in an array the indexOf method will return -1
  //     // below don't need to say === true because it's a boolean value and we can just say (shoppingItem.bogof) and it will be evaluated to see whether it's truthy or falsey.
  //     if ((shoppingItem.bogof === true) && (bogofItems.indexOf(shoppingItem) >= 0 )){
  //       var index = bogofItems.indexOf(shoppingItem);
  //       // need to check on splice method whether you need to give it a second argument to say how many to remove, so you're giving it a point at which to remove and a number of items to remove.
  //       bogofItems.splice(index);
  //     }
  //     else if (shoppingItem.bogof === true){
  //       bogofItems.push(shoppingItem);
  //       price += shoppingItem.price;
  //     }
  //     else {
  //       price += shoppingItem.price;
  //     }
  //   }
  //   if (price > 20){
  //     price = price - (price/10);
  //   }
  //   if (this.loyaltyCard === true){
  //     price = price - (price/20);
  //   }
  //   return price;
  // }


}


module.exports = ShoppingBasket;
