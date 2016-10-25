var React = require('react');

var ItemDetail = React.createClass({

  getInitialState: function(){
    return {
      stockCount: this.props.item.stockQuantity,
      numSelected: 0,
    }
  },

  render: function(){

    var saleInfo = this.props.item.salePrice;
    if (!this.props.item.salePrice){
      saleInfo = " "
    }

    return (
      <div>
        <h4 id={this.props.item.id}>{this.props.item.name}</h4>
        <h5>Price: {this.props.item.price}</h5>
        <h5>Sale Price: {saleInfo}</h5>
        <button value={this.props.item}>Add to basket</button>
      </div>
  )
}

})

module.exports = ItemDetail;