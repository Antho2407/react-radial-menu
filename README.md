react-radial-menu
=====

A ReactJS circular menu

## Demo

Live demo: [http://www.adamota.com/react-radial-menu/](www.adamota.com/react-radial-menu/)

Build the example

```
npm install
gulp production

And open the file dist/index.html
```

## Installation

Just npm install the component, and include it to your project ! 
Of course, you also can git clone the repository and copy the sources to your project.

```
npm install react-radial-menu --save
```

## Quick start

``` javascript
window.jQuery = window.$ = require("jquery");

var RadialMenu = require('radial-menu.react');

var React = require('react');
window.React = React;

// Examples of images
// If you don't want images, juste put the image option. 
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

	render: function() {

		return (
			<div id="container">
    			<RadialMenu items={items} center={center} radius="200" />
    		</div>
    	);
   }
});

module.exports = App;

React.render(<App/>, document.body);
```

## Properties
When you construct your items list, you can pass some options to customize it. 

RadialMenu options : 

- center : central item of your menu
- items : the items of your menu
- duration : duration of the opening animation (ms)
- stagger : duration of the stagger animation (time between each item to begin the animation) (ms)
- radius : size of your circular menu. react-radial-menu will calculate the size and the position of each item depending of their number.
- easing : easing of the opening animation 
- distance : distance between the center and the items - optional if you want to let react-radial-menu do it for you !

Item options : 

- href : link pointed by your item
- image : image displayed by your item. If you don't use it, react-radial-menu will display a circular div instead.


## Help me to improve it !

Contact me if you want to signal some bugs. 
Many improvements and customization options are coming in the future !