var React = require('react');
var ItemDetail = require('./ItemDetail');
var ShoppingBasket = require('../models/shoppingBasket');

var ShoppingItemList = React.createClass({

  render: function(){
    var clothing = this.props.items;

    var clothingList = clothing.map(function(clothing, index) {
      return (
       <li key={index}>
         <ItemDetail item={clothing} buyItem={this.props.buyItem}/>
        </li>
      )
    }.bind(this))

  return(
    <div id='clothing-list'>
      <ul>
        {clothingList}
      </ul>
    </div>
  )
  }

});

module.exports = ShoppingItemList;



