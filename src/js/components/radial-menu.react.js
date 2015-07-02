"use strict";

var React = require('react');
var RadialItem = require('./radial-item.react');
require('velocity-animate');
require('velocity-animate/velocity.ui');


var ReactRadialMenu = React.createClass({

	loadCss:function(url) {
	    var link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = url;
	    document.getElementsByTagName("head")[0].appendChild(link);
	},

	getDefaultProps: function() {
		return {
			animation: "transition.swoopIn", 
			duration: 600,
			stagger: 100,
			radius: 200, 
			easing: [0.175, 0.885, 0.32, 1.275],
			distance: -1
		};
	},

	componentWillMount: function(){
		this.loadCss("css/app.css");
	},

	handleMenuClick: function(event) {
		event.preventDefault(); 
		$('.menu-button').toggleClass('open');
		var circle = $('.radial-menu-circle');
		var that = this;
		if(circle.hasClass('open')){
			circle.velocity('stop');
			$('.radial-menu-circle a').off('mouseenter mouseleave');
			circle.velocity('reverse').toggleClass('open');
		}else{
			$('.children').velocity('stop').velocity(this.props.animation, { 
				    stagger: this.props.stagger, 
				    duration:this.props.duration, 
				    complete: function() { 
					$('.radial-menu-circle a').mouseenter(function (event) {
							that.handleEnter(event, $(this));
						}).mouseleave(function () {
							that.handleLeave(event, $(this));
						});
					} });
			circle.velocity('stop').velocity({ 
				opacity: 1,
				scale:  [1,0]
			}, {
				easing: this.props.easing,
				duration: this.props.duration
			}).toggleClass('open');
		}
	},

	createItems: function(items, sizeCenter) {
		var length = items.length;
		var result =  [];
		var top = "";
		var left = "";
		var radius = (this.props.radius / 2).toFixed(5);
		var distance = this.props.distance;
		if(distance<0)
			distance = ((100*radius*0.6)/this.props.radius).toFixed(5);
		
		for(var i = 0; i < length; i++) {

			var item = items[i];
			left = (50 - distance * Math.cos(-0.5 * Math.PI - (2*Math.PI*i)/length)).toFixed(8) + "%;"
			top= (50 + distance * Math.sin(-0.5 * Math.PI - (2*Math.PI*i)/length)).toFixed(8) + "%;";
			result.push(<RadialItem key={i} radius = {radius} href = {item.href} 
				className="children" left={left} top={top} image={item.image}>{item.text}</RadialItem>);

		}
		return result;
	},

	handleEnter: function(event, element){
		element.toggleClass("hover");
		$(".hover").velocity("stop").velocity(
			{	
			 	scale:1.25
			},
			{duration: 200});
		},

		handleLeave: function(event, element){
			 $(".hover").velocity("stop").velocity(
			{	
			 	scale:1
			},
			{duration: 200}).toggleClass("hover");
		},

			componentDidMount:function(){

				var that = this;
				$('.radial-menu-button').mouseenter(function (event) {
					that.handleEnter(event, $(this));
				}).mouseleave(function () {
					that.handleLeave(event, $(this));
				});
			},

			render: function() {

  	var sizeCenter = (this.props.radius /2.6).toFixed(5);
  	var _items = this.createItems(this.props.items, sizeCenter);
  	var sizeNav = this.props.radius * 2;

  	var navStyle = {
  		"width": sizeNav,
  		"height": sizeNav
  	};

  	return (
  		<nav className="radial-menu-nav" style={navStyle}>

  		<div className="radial-menu-circle">
  		{_items.map(function(item) {
  			return item;
  		})}

  		</div>

  		<RadialItem href="#" className="radial-menu-button" radius = {sizeCenter} handleClick={this.handleMenuClick} image={this.props.center.image}></RadialItem>

  		</nav>
  		);
  }
});

			module.exports = ReactRadialMenu;