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


    var inStock = "Yes";
    if(!this.props.item.stockQuantity){
      inStock = "No";
    }

    return (
      <div id="clothingItem">
        <div id="itemDetails">
          <h4 id={this.props.item.id}>{this.props.item.name}</h4>
          <h5>Colour: {this.props.item.colour}</h5>
          <h5 className = {classes} >Price: £{this.props.item.price.toFixed(2)}</h5>
          <h5 id = "sale-price" className = {classes2}>Sale Price: £{saleInfo}</h5>
          <h5>In Stock: {inStock}</h5>
        </div>
        <img src="http://placehold.it/100x100" />
        <button className="item-button" value={this.props.item.id} onClick={this.props.buyItem}>Add to basket</button>
      </div>
  )
}

})

module.exports = ItemDetail;