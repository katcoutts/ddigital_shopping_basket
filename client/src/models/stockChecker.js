var StockChecker = function(items){
  this.items = items || [];
}

StockChecker.prototype = {

  addStockItems: function(items){
    for (var item of items){
      this.items.push(item);
    }
  },


  findStockCount: function(id){
    var chosenItem;
    for (var item of this.items){
      if (item.id === id){
        chosenItem = item;
        return chosenItem.stockQuantity;
      }
    }
  },

  reduceStockQuantity: function(id){
    for (var item of this.items){
      if (item.id === id){
        item.stockQuantity -= 1;
      }
    }
  },

  increaseStockQuantity: function(id){
    for (var item of this.items){
      if (item.id === id){
        item.stockQuantity +=1
      }
    }
  }

}

module.exports = StockChecker;