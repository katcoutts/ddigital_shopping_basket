var React = require('react');
var classNames = require('classnames');

var VoucherBox = React.createClass({

  getInitialState: function(){
    return{
      errorMessage: ""
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
        element.innerText = " "
      }
    }
    if (!voucher){
      var element = document.querySelector('#error-message1');
      element.innerText = "Voucher code not recognised"
      return
    }
    console.log("voucher is", voucher)
    // debugger;
    this.props.submitVoucher(voucher)
    
  },

  componentWillReceiveProps: function(nextProps){
    console.log("component will receive props called")
    this.setState({
      errorMessage: nextProps.errorMessage
    });
  },

  render: function(){

    console.log("voucherBox", this.props.discountVouchers)
    if (!this.props.discountVouchers){
      return <p></p>
    }

    console.log("voucher box error message is", this.props.errorMessage)
    // var errorMessage = this.state.errorMessage;
    // if (!this.state.errorMessage){
    //   errorMessage = "";
    // }

    return (
      <div id="voucher-box">
          <h4>Enter voucher code:</h4>
            <input id="voucher-input" type="text"></input>
            <button id="voucher-submit-button" onClick={this.handleVoucherClick}>Submit</button>
            <h5 id="error-message1"></h5>
            <h5>{this.state.errorMessage}</h5>
      </div>
  )
}

})

module.exports = VoucherBox