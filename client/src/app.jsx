var React = require('react');
var ReactDOM = require('react-dom');
var ShopBox = require('./components/ShopBox')

window.onload = function(){
  ReactDOM.render(
    <ShopBox />,
    document.getElementById('app')
  );
}
