var React = require('react');
var classNames = require('classnames');

var VoucherBox = React.createClass({

  getInitialState: function(){
    return {
    }
  },

  handleVoucherClick: function(){
    console.log("this handle click in voucher box called")
    var input = document.querySelector('#voucher-input');
    console.log("input value is", input.value)
    var voucher = null; 
    for (var item of this.props.discountVouchers){
      if(item.code === input.value){
        voucher = item;
        var element = document.querySelector('#error-message1');
        element.innerText = "Voucher accepted"
      }
    }
    if (!voucher){
      var element = document.querySelector('#error-message1');
      element.innerText = "Voucher code not recognised"
    }
    console.log("voucher is", voucher)
    // debugger;
    this.props.submitVoucher(voucher)
  },

  render: function(){

    console.log("voucherBox", this.props.discountVouchers)
    if (!this.props.discountVouchers){
      return <p></p>
    }

    return (
      <div id="voucher-box">
          <h4>Enter voucher code:</h4>
            <input id="voucher-input" type="text"></input>
            <button onClick={this.handleVoucherClick}>Submit</button>
            <h5 id="error-message1"></h5>
      </div>
  )
}

})

module.exports = VoucherBox