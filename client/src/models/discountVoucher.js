var DiscountVoucher = function(params){
  this.code = params['code'],
  this.discountAmount = params['discountAmount'],
  this.priceLimit = params['priceLimit'],
  this.itemRequirement = params['itemRequirement']
}


module.exports = DiscountVoucher;