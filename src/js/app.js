window.jQuery = window.$ = require("jquery");

var RadialMenu = require('./components/radial-menu.react');

var React = require('react');
window.React = React;

var items = [
	{ "href":"http://www.facebook.com", "image":"url(./images/social/facebook.png)"}, 
	{ "href":"http://www.reddit.com", "image":"url(./images/social/reddit.png)"}, 
	{ "href":"http://www.flickr.com", "image":"url(./images/social/flickr.png)"}, 
	{ "href":"http://www.google.com", "image":"url(./images/social/googleplus.png)"}, 
	{ "href":"http://www.linkedin.com", "image":"url(./images/social/linkedin.png)"}, 
	{ "href":"http://www.twitter.com", "image":"url(./images/social/twitter.png)"}
];

var center = {
	"image":"url(./images/social/share.png)"
};

var App = React.createClass({

	getInitialState: function() {
         return {
             animation: "transition.swoopIn",
             duration: 600,
             stagger: 100
         }
     },

	setAnimation: function(event){
		this.setState({animation: event.target.value});
	},

	setDuration: function(event){
		this.setState({duration: event.target.value});
	},

	setStagger: function(event){
		this.setState({stagger: event.target.value});
	},

	render: function() {

		return (
			<div id="container">
				<div id="panel-options">
					<h2>Animation</h2>
					<select id="selectAnimation" onChange={this.setAnimation}>
			            <option value="transition.swoopIn" selected="selected">Default</option>
			            <option value="transition.shrinkIn">shrinkIn</option>
			            <option value="transition.fadeIn">fadeIn</option>
			            <option value="transition.flipYIn">flipYIn</option>
			            <option value="transition.flipBounceXIn">flipBounceXIn</option>
			        </select>
			        <h2>Speed</h2>
			        <select id="selectDuration" onChange={this.setDuration}>
			            <option value="600" selected="selected">Default</option>
			            <option value="400">400</option>
			            <option value="600">600</option>
			            <option value="800">800</option>
			            <option value="1000">1000</option>
			        </select>
			        <h2>Stagger</h2>
			        <select id="selectStagger" onChange={this.setStagger}>
			            <option value="200" selected="selected">Default</option>
			            <option value="0">0</option>
			            <option value="50">50</option>
			            <option value="100">100</option>
			            <option value="150">150</option>
			            <option value="200">200</option>
			        </select>
		        </div>
    			<RadialMenu items={items} center={center} animation={this.state.animation} duration={this.state.duration} stagger={this.state.stagger} radius="200" />
    			<a href="https://github.com/Antho2407"><img className="fork-img" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"/></a>
    		</div>
    	);
   }
});

module.exports = App;

React.render(<App/>, document.body);