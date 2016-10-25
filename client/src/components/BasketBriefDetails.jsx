var React = require('react');

var BasketBriefDetails = function( props ) {


  return (
    <div id="basket-details">
      <p>Basket</p>
      <p>Items in basket: {props.items}</p>
      <p>Basket total: £{props.total.toFixed(2)} </p>    
    </div>
  )

}

module.exports = BasketBriefDetails;