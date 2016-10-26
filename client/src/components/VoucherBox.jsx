var React = require('react');
var classNames = require('classnames');

var VoucherBox = React.createClass({

  getInitialState: function(){
    return{
      errorMessage: ""
    }
  },

  checkIfVoucherAlreadyUsed: function(voucher){
    console.log("voucher", voucher)
    console.log("discounts already used", this.props.redeemedVouchers)
    for (var discount of this.props.redeemedVouchers){
      if (voucher.code === discount.code){
        return false
      }
    }
    return true
  },


  handleVoucherClick: function(){
    var input = document.querySelector('#voucher-input');
    var voucher = null; 
    for (var item of this.props.discountVouchers){
      if(item.code === input.value){
        voucher = item;
        var element = document.querySelector('#error-message1');
        element.innerText = " "
      }
    }
    if (!voucher){
      var element = document.querySelector('#error-message1');
      element.innerText = "Voucher code not recognised"
      return
    }
    if (!this.checkIfVoucherAlreadyUsed(voucher)){
      var element = document.querySelector('#error-message1');
      element.innerText = "Voucher already used on this shop"
      var element2 = document.querySelector('#error-message2');
      element2.innerText = "";
      return
    }
    // debugger;
    this.props.submitVoucher(voucher)
    
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({
      errorMessage: nextProps.errorMessage
    });
  },

  voucherSavingsRedeemed: function(vouchers){
    var total = 0;
    for (var voucher of this.props.redeemedVouchers){
      total += voucher.discountAmount;
    }
    return total;
  },

  render: function(){

    if (!this.props.discountVouchers){
      return <p></p>
    }

    console.log("voucher box error message is", this.props.errorMessage)


    return (
      <div id="voucher-box">
          <h3>Basket total: £{this.props.total}</h3>
          <h4>Voucher savings redeemed: £{this.voucherSavingsRedeemed(this.props.redeemedVouchers)}</h4>
          <h4>Enter voucher code:</h4>
          <input id="voucher-input" type="text"></input>
          <button id="voucher-submit-button" onClick={this.handleVoucherClick}>Submit</button>
          <h5 id="error-message1"></h5>
          <h5 id="error-message2">{this.state.errorMessage}</h5>
          <button>Proceed to payment</button>
          <button className="second-button" onClick={this.props.basketClick}>Back to basket</button>
      </div>
  )
}

})

module.exports = VoucherBox