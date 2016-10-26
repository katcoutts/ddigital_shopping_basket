var StockChecker = function(items){
  this.items = items;
}

StockChecker.prototype = {

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
  }

}

module.exports = StockChecker;