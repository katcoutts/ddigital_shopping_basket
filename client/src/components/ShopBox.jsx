var React = require('react');
var ShoppingBasket = require('../models/shoppingBasket');
var ShoppingItem = require('../models/shoppingItem');
var DiscountVoucher = require('../models/discountVoucher');
var StockChecker = require('../models/stockChecker');
var ShoppingItemList = require('./ShoppingItemList');
var BasketBriefDetails = require('./BasketBriefDetails');
var BasketList = require('./BasketList');
var VoucherBox = require('./VoucherBox');


var ShopBox = React.createClass({

  getInitialState: function(){
    return { 
      shoppingItems: [], 
      shoppingBasket: new ShoppingBasket(),
      shoppingTotal: 0,
      itemNumber: 0,
      discountVouchers: [],
      error: null,
      stockChecker: new StockChecker(),
      redeemedVouchers: []
    }
  },

  componentDidMount: function() {
    if (!this.state.shoppingTotal){
    this.sendItemsHTTPRequest();
    this.sendVoucherDetailHTTPRequest();
    }
  },

  sendItemsHTTPRequest: function(){
    var url = "api/shoppingItems";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState({ shoppingItems: data});
      this.state.stockChecker.addStockItems(data);
    }.bind(this);
    request.send();
  },

  sendVoucherDetailHTTPRequest: function(){
    var url = "api/discounts";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      console.log(request.responseText);
      var discounts = JSON.parse(request.responseText);
      this.setState({ discountVouchers: discounts});
    }.bind(this);
    request.send();
  },

  changeElementDisplay: function(element, display){
    var element = document.querySelector(element);
    element.style.display = display;
  },

  handleBasketClick: function(){
    this.changeElementDisplay("#item-basket", "inline-block");
    this.changeElementDisplay('#clothing-list', "none");
    this.changeElementDisplay('#voucher-box', 'none');
    this.changeElementDisplay('#bottom-button', 'none')
  },

  handleShopClick: function(){
    this.changeElementDisplay("#item-basket", "none");
    this.changeElementDisplay('#clothing-list', "inline")
    this.changeElementDisplay('#bottom-button', 'block')
  },

  handleVoucherClick: function(){
    this.changeElementDisplay('#item-basket', 'none');
    this.changeElementDisplay('#voucher-box', 'inline-block')
    this.changeElementDisplay('#bottom-button', 'none')
  },

  deleteItem: function(event){
    var id = parseInt(event.target.value)
    this.state.shoppingBasket.removeItem(id);
    this.state.stockChecker.increaseStockQuantity(id);
    this.setState({shoppingTotal: this.state.shoppingBasket.total});
    this.setState({itemNumber: this.state.shoppingBasket.items.length});
  },

  buyItem: function(event){
    var id = parseInt(event.target.value);
    if (!this.state.stockChecker.findStockCount(id)){
      return 
    }
    var item
    for (var shoppingItem of this.state.shoppingItems){
      if (shoppingItem.id.toString() === event.target.value){
        item = shoppingItem;
      }
    }
    this.state.shoppingBasket.add(item);
    this.state.stockChecker.reduceStockQuantity(id);
    this.setState({shoppingTotal: this.state.shoppingBasket.total});
    this.setState({itemNumber: this.state.shoppingBasket.items.length})
  },

  handleVoucher: function(voucher){
    if (this.state.shoppingTotal < voucher.priceLimit){
      this.setState({error: "You have not spent enough to redeem this voucher"});
      return
    }
    else if (!this.state.shoppingBasket.checkItemRequirementMet2(voucher)){
      this.setState({error: "You have not bought the appropriate items to use this voucher"});
      return
    }
    this.state.shoppingBasket.checkDiscountEligible(voucher);
    this.state.redeemedVouchers.push(voucher);
    this.setState({shoppingTotal: this.state.shoppingBasket.total});
    this.setState({error: "Voucher accepted"});
  },


  render: function() {
    return (
      <div>
        <div id="header">
        <h1 id="heading">D's Threads<span id="dot">.</span></h1>
        <BasketBriefDetails id="brief-details" items={this.state.itemNumber} total={this.state.shoppingTotal}/>
        <button className="view-basket-button" onClick={this.handleBasketClick}>View shopping basket</button>
        </div>
        <ShoppingItemList buyItem={this.buyItem} items = {this.state.shoppingItems}/>
        <BasketList  shoppingBasket={this.state.shoppingBasket} items={this.state.itemNumber} total={this.state.shoppingTotal} discountVouchers={this.state.discountVouchers} removeItem={this.deleteItem} clickForShop={this.handleShopClick} clickForVouchers={this.handleVoucherClick}/>   
        <VoucherBox discountVouchers={this.state.discountVouchers} submitVoucher={this.handleVoucher} errorMessage={this.state.error} total={this.state.shoppingTotal} basketClick={this.handleBasketClick} redeemedVouchers={this.state.redeemedVouchers}/> 
        <button id="bottom-button" className="view-basket-button" onClick={this.handleBasketClick}>View shopping basket</button>
      </div>
      )
  }

})

module.exports = ShopBox;