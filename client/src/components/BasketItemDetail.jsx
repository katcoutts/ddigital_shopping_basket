var React = require('react');
var classNames = require('classnames');
var ShoppingBasket = require('../models/shoppingBasket')

var BasketItemDetail = React.createClass({

  getInitialState: function(){
    return {
    }
  },


  render: function(){

    var cost = this.props.item.price;
    if (this.props.item.salePrice){
      cost = this.props.item.salePrice;
    }

    return (
      <div id="basketItemDetail">
        <div id="basket-item-text">
          <h4 id={this.props.item.id}>{this.props.item.name}</h4>
          <h5>Colour: {this.props.item.colour}</h5>
          <h5>Price: £{cost}</h5>
        </div>
          <button id="basket-remove-button" value={this.props.item.id} onClick={this.props.removeItem}>Remove</button>
      </div>
  )
}

})

module.exports = BasketItemDetail