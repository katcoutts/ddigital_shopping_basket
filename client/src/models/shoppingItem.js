var ShoppingItem = function(params){
  this.id = params['id'],
  this.name = params['name'],
  this.colour = params['colour'],
  this.category = params['category'],
  this.type = params['type'],
  this.gender = params['gender'],
  this.price = params['price'],
  this.salePrice = params['salePrice'],
  this.stockQuantity = params['stockQuantity']
}

module.exports = ShoppingItem;