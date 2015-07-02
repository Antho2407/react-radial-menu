"use strict";

var React = require('react');
var ReactPropTypes = React.PropTypes;

var ReactRadialItem = React.createClass({

	getDefaultProps: function() {
    return {
      image: "none", 
      radius: "100", 
    };
  },

	propTypes: {
	    className: ReactPropTypes.string,
	    href: ReactPropTypes.string,
	    top: ReactPropTypes.string,
	    left: ReactPropTypes.string,
	    value: ReactPropTypes.string
	  },

	handleClick: function(event) {
		event.preventDefault(); 
	},

  render: function() {

  	var marginValue = (-1)*(this.props.radius/2) + "px";
  	var margin;
  	if(this.props.className !="children"){
  		margin= "auto";
  	}else{
  		margin = marginValue + " 0px 0px " + marginValue;
  	}

  	var itemStyle = {
  		"top": this.props.top,
  		"left": this.props.left, 
  		"width": this.props.radius + "px",
  		"height" : this.props.radius + "px",
  		"lineHeight": this.props.radius + "px",
  		"margin": margin,
  		"backgroundImage": this.props.image,
		  "backgroundRepeat":"no-repeat",
		  "backgroundSize": "cover"
  	};

    if(this.props.image != 'none'){
      itemStyle.border="none";
      itemStyle.boxShadow="none";
      if(this.props.className !="radial-menu-button")
        itemStyle.backgroundColor="transparent";
    }
  	
    return (
		    <a href={this.props.href} 
		       className={this.props.className}
		       style={itemStyle} onClick={this.props.handleClick}>{this.props.children}</a>
    );
  }
});

module.exports = ReactRadialItem;