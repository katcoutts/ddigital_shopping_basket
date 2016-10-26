var React = require('react');
var ShoppingBasket = require('../models/shoppingBasket');
var ShoppingItem = require('../models/shoppingItem');
var DiscountVoucher = require('../models/discountVoucher');
var StockChecker = require('../models/stockChecker');
var ShoppingItemList = require('./ShoppingItemList');
var BasketBriefDetails = require('./BasketBriefDetails');
var BasketList = require('./BasketList');
var VoucherBox = require('./VoucherBox');
var _ = require('lodash');

var ShopBox = React.createClass({

  getInitialState: function(){
    return { 
      shoppingItems: [], 
      shoppingBasket: new ShoppingBasket(),
      shoppingTotal: 0,
      itemNumber: 0,
      discountVouchers: [],
      error: null,
      stockChecker: new StockChecker()
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
      console.log(request.responseText);
      var data = JSON.parse(request.responseText);
      this.setState({ shoppingItems: data});
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

  deleteItem: function(event){
    console.log("removeitem called");
    console.log("remove event", event.target.value);
    console.log("shopping basket", this.state.shoppingBasket);
    console.log("id to number", parseInt(event.target.value))
    var id = parseInt(event.target.value)
    this.state.shoppingBasket.removeItem(id);
    this.setState({shoppingTotal: this.state.shoppingBasket.total});
    this.setState({itemNumber: this.state.shoppingBasket.items.length});
    console.log("shoppingbasket", this.state.shoppingBasket)
  },

  buyItem: function(event){
    console.log("event", event)
    console.log("shopping items", this.state.shoppingItems)
    var item
    for (var shoppingItem of this.state.shoppingItems){
      if (shoppingItem.id.toString() === event.target.value){
        item = shoppingItem;
      }
    }
    console.log('item to buy, ', item)
    this.state.shoppingBasket.add(item);
    // debugger;
    console.log("buy item called in shop", this.state.shoppingBasket);
    this.setState({shoppingTotal: this.state.shoppingBasket.total});
    this.setState({itemNumber: this.state.shoppingBasket.items.length})
  },

  handleVoucher: function(voucher){
    console.log("this.state.total", this.state.total)
    console.log("voucher.priceLimit", voucher.priceLimit)
    if (this.state.shoppingTotal < voucher.priceLimit){
      this.setState({error: "You have not spent enough to redeem this voucher"});
      return
    }
    else if (!this.state.shoppingBasket.checkItemRequirementMet2(voucher)){
      this.setState({error: "You have not bought the appropriate items to use this voucher"});
      return
    }
    this.state.shoppingBasket.checkDiscountEligible(voucher);
    this.setState({shoppingTotal: this.state.shoppingBasket.total});
    this.setState({error: "Voucher accepted"});
    console.log("error message in shop box is", this.state.error)
  },


  render: function() {
    
    return (
      <div>
        <h1 id="heading">DD's Clothing</h1>
        <BasketBriefDetails items={this.state.itemNumber} total={this.state.shoppingTotal}/>
        <ShoppingItemList buyItem={this.buyItem} items = {this.state.shoppingItems}/>
        <BasketList shoppingBasket={this.state.shoppingBasket} items={this.state.itemNumber} total={this.state.shoppingTotal} discountVouchers={this.state.discountVouchers} removeItem={this.deleteItem}/>   
        <VoucherBox discountVouchers={this.state.discountVouchers} submitVoucher={this.handleVoucher} errorMessage={this.state.error}/> 
      </div>
      )
  }

})

module.exports = ShopBox;