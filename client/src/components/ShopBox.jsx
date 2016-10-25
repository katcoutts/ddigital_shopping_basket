var React = require('react');
var ShoppingBasket = require('../models/shoppingBasket');
var ShoppingItem = require('../models/shoppingItem');
var DiscountVoucher = require('../models/discountVoucher');
var ShoppingItemList = require('./ShoppingItemList');
var BasketBriefDetails = require('./BasketBriefDetails');
var _ = require('lodash');

var ShopBox = React.createClass({

  getInitialState: function(){
    return { 
      shoppingItems: [], 
      shoppingBasket: new ShoppingBasket(),
      shoppingTotal: 0,
      itemNumber: 0,
      discountVouchers: []
    }
  },

  componentDidMount: function() {
    this.sendItemsHTTPRequest();
    this.sendVoucherDetailHTTPRequest();
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


  componentDidUpdate: function(){
    console.log(this.state.shoppingBasket)
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


  render: function() {
    
    return (
      <div>
        <h1 id="heading">DD's Clothing</h1>
        <button id="basket-button" onClick={this.showShoppingBasket}>View Basket in Detail</button>
        <BasketBriefDetails items={this.state.itemNumber} total={this.state.shoppingTotal}/>
        <ShoppingItemList buyItem={this.buyItem} items = {this.state.shoppingItems}/>   
      </div>
      )
  }

})

module.exports = ShopBox;