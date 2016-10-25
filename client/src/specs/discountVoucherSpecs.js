var DiscountVoucher = require('../models/discountVoucher');
var assert = require('assert');

describe('DiscountVoucher', function(){

  var fiveDiscount;
  var tenDiscount;
  var fifteenDiscount;

  beforeEach(function(){
    fiveDiscount = new DiscountVoucher({
      code: '5-OFF', 
      discountAmount: 5.00, 
      priceLimit: 0,
      itemRequirement: []
    });

    tenDiscount = new DiscountVoucher({
      code: '10-OFF', 
      discountAmount: 10.00, 
      priceLimit: 50.00,
      itemRequirement: []
    });
    fifteenDiscount = new DiscountVoucher({
      code: '15-OFF', 
      discountAmount: 15.00, 
      priceLimit: 75.00,
      itemRequirement: ["footwear"]
    });
  })

  it('has a vouchercode', function(){
    assert.equal(fiveDiscount.code, '5-OFF');
  })

  it('has a discount amount', function(){
    assert.equal(fifteenDiscount.discountAmount, 15.00);
  })

  it('has a minimum spend requirement', function(){
    assert.equal(tenDiscount.priceLimit, 50.00);
  })

  it('has requirements on items bought', function(){
    assert.equal(fifteenDiscount.itemRequirement[0], "footwear");
  })



})