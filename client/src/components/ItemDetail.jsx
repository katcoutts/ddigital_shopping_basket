var React = require('react');
var classNames = require('classnames');
var ShoppingBasket = require('../models/shoppingBasket')

var ItemDetail = React.createClass({

  getInitialState: function(){
    return {
    }
  },


  render: function(){

    var saleInfo = " ";
    if (this.props.item.salePrice){
      saleInfo = this.props.item.salePrice;
      var classes = classNames("onSale")
      var classes2 = classNames("salePrice")
    }

    return (
      <div id="clothingItem">
        <div id="itemDetails">
          <h4 id={this.props.item.id}>{this.props.item.name}</h4>
          <h5 className = {classes} >Price: £{this.props.item.price.toFixed(2)}</h5>
          <h5 className = {classes2}>Sale Price: £{saleInfo}</h5>
        </div>
        <button className="item-button" value={this.props.item.id} onClick={this.props.buyItem}>Add to basket</button>
      </div>
  )
}

})

module.exports = ItemDetail;