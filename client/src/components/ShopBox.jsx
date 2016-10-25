var React = require('react');
var ShoppingBasket = require('../models/shoppingBasket');
var ShoppingItem = require('../models/shoppingItem');
var DiscountVoucher = require('../models/discountVoucher');
var ShoppingItemList = require('./shoppingItemList');
var _ = require('lodash');

var ShopBox = React.createClass({

  getInitialState: function(){
    return { 
      shoppingItems: [], 
      shoppingBasket: [],
      shoppingTotal: 0,
      itemNumber: 0,
      discountVoucher: []
    }
  },


  componentDidMount: function() {
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


  componentDidUpdate: function(){
  
  },

  handleClick: function(){

  },


  render: function() {
    
    return (
      <div>
        <h1>DD's Clothing</h1>
        <ShoppingItemList items = {this.state.shoppingItems}/>
           
      </div>
      )
  }

})

module.exports = ShopBox;