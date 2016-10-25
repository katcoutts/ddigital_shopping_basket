var React = require('react');

var BasketTotal = function( props ) {

  console.log("BasketTotal total", props.total)

  if (!props.itemNumber){
    return <p></p>
  }

  return (
    <div>
      <h4>Total items in basket: {props.itemNumber}</h4>
      <h4>Total before discounts: £{props.total.toFixed(2)} </h4>   
    </div>
  )

}

module.exports = BasketTotal;