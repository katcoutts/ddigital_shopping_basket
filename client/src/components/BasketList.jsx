var React = require('react');
var ShoppingBasket = require('../models/shoppingBasket');
var BasketItemDetail = require('./BasketItemDetail');
var BasketTotal = require('./BasketTotal');

var BasketList = React.createClass({

  render: function(){

  var boughtItems = this.props.shoppingBasket.items;
  console.log("BasketDetails", this.props.shoppingBasket)

  var boughtList = boughtItems.map(function(boughtItem, index) {
    return (
     <li key={index}>
       <BasketItemDetail item={boughtItem} removeItem={this.props.removeItem}/>
      </li>
    )
  }.bind(this))

    
  return(
    <div className='item-basket'>
      <h2>Shopping Basket</h2>
      <ul>
        {boughtList}
      </ul>
      <BasketTotal total={this.props.total} itemNumber = {this.props.items} discountVouchers={this.props.discountVouchers}/>
    </div>
  )
  }

});

module.exports = BasketList;