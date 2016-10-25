var React = require('react');
var ItemDetail = require('./ItemDetail');

var ShoppingItemList = React.createClass({

  render: function(){

    var clothing = this.props.items;

    var clothingList = clothing.map(function(clothing, index) {
      return (
       <li key={index}>
         <ItemDetail key={index} item={clothing} buyThisItem={this.props.buyItem}/>
        </li>
      )
    }.bind(this))

  return(
    <div className='clothing-list'>
      <ul>
        {clothingList}
      </ul>
    </div>
  )
  }

});

module.exports = ShoppingItemList;



