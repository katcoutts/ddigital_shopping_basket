var React = require('react');

var BasketTotal = React.createClass({

  render: function(){

  console.log("BasketTotal total", this.props.total)

  if (!this.props.itemNumber){
    return <p></p>
  }

  return (
    <div>
      <h4>Total items in basket: {this.props.itemNumber}</h4>
      <h4>Total: £{this.props.total.toFixed(2)} </h4>   
    </div>
  )
}

})

module.exports = BasketTotal;