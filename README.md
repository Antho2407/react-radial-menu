react-radial-menu
=====

A ReactJS circular menu

## Demo

Live demo: https://antho2407.github.io/react-radial-menu/

Build the example

```
yarn
yarn build

And open the file examples/dist/index.html
```

## Installation

Just install the component, and include it to your project !
Of course, you also can clone the repository and copy the sources to your project.

```
npm install react-radial-menu --save
```
```
yarn add react-radial-menu
```

## Example

``` javascript
import React, { Component } from "react"
import RadialMenu from "react-radial-menu"

const items = [
	{"href":"http://www.facebook.com", "image":"url(examples/dist/images/social/facebook.png)"},
	{"href":"http://www.reddit.com", "image":"url(examples/dist/images/social/reddit.png)"},
	{"href":"http://www.flickr.com", "image":"url(examples/dist/images/social/flickr.png)"},
	{"href":"http://www.google.com", "image":"url(examples/dist/images/social/googleplus.png)"},
	{"href":"http://www.linkedin.com", "image":"url(examples/dist/images/social/linkedin.png)"},
	{"href":"http://www.twitter.com", "image":"url(examples/dist/images/social/twitter.png)"},
	{"href":"http://www.twitter.com", "image":"url(examples/dist/images/social/twitter.png)"}
];

const center = {
	"image": "url(examples/dist/images/social/share.png)"
};

export default class App extends Component {
    render() {
        const {items, center} = this.props
        return <RadialMenu
          items={items}
          center={center}
        />
    }
}

module.exports = App;

React.render(<App/>, document.body);
```

## Properties
When you construct your items list, you can pass some options to customize it.

RadialMenu options :

- center: central menu item
- items: circular menu items
- duration: duration of the opening animation (ms)
- stagger: duration of the staggering for your animation (ms)
- itemsSize : width/height of all your menu items
- easing : easing of the opening animation
- distance : distance between the central item and the circular menu items - optional if you want to let react-radial-menu sort it for you !

Item options :

- href : link for you menu item
- image : image displayed by your item. If you don't use it, react-radial-menu will display a circular div instead and use a label attribute (experimental).


## Help me to improve it !

Contact me if you want to report bugs, or suggest improvements. Contributions are also welcome !
