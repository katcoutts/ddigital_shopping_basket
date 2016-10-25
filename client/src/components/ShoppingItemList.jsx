var React = require('react');
var ItemDetail = require('./ItemDetail');

var ShoppingItemList = function( props ) {
  
  var clothingNodes = props.items.map(function(clothing, index) {
    console.log("clothing ", clothing)
    return (
      <li key={index}>
        <ItemDetail item={clothing}/>
      </li>
    )
  })

  return(
    <div className='clothing-list'>
      <ul>
        {clothingNodes}
      </ul>
    </div>
  )

}

module.exports = ShoppingItemList;