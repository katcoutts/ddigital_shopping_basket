var React = require('react');
var classNames = require('classnames');

var ItemDetail = React.createClass({

  getInitialState: function(){
    return {
      stockCount: this.props.item.stockQuantity,
      numSelected: 0,
    }
  },

  render: function(){

    var saleInfo = " ";
    if (this.props.item.salePrice){
      saleInfo = this.props.item.salePrice;
      var classes = classNames("onSale")
    }

    return (
      <div id="clothingItem">
        <h4 id={this.props.item.id}>{this.props.item.name}</h4>
        <h5 className = {classes} >Price: £{this.props.item.price.toFixed(2)}</h5>
        <h5>Sale Price: £{saleInfo}</h5>
        <button value={this.props.item}>Add to basket</button>
      </div>
  )
}

})

module.exports = ItemDetail;