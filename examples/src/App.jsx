import React, { Component } from "react"
import RadialMenu from "../../src/index"

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
    state = {
         animation: "transition.swoopIn",
         duration: 600,
         stagger: 100,
         distance: 30
     }

	setAnimation = event => {
		this.setState({animation: parseInt(event.target.value)});
	}

	setDuration = event => {
		this.setState({duration: parseInt(event.target.value)});
	}

	setStagger = event => {
		this.setState({stagger: parseInt(event.target.value)});
	}

    setDistance = event => {
		this.setState({distance: parseInt(event.target.value)});
	}

	render () {
        const {
            animation,
            duration,
            stagger,
            distance
        } = this.state

		return <div id="container">
			<div id="panel-options">
				<h2>Animation</h2>
				<select id="selectAnimation" onChange={this.setAnimation} defaultValue={animation}>
		            <option value="transition.swoopIn">Default</option>
		            <option value="transition.shrinkIn">shrinkIn</option>
		            <option value="transition.fadeIn">fadeIn</option>
		            <option value="transition.flipYIn">flipYIn</option>
		            <option value="transition.flipBounceXIn">flipBounceXIn</option>
		        </select>
		        <h2>Speed</h2>
		        <select id="selectDuration" onChange={this.setDuration} defaultValue={duration}>
		            <option value={600}>Default</option>
		            <option value={400}>400</option>
		            <option value={600}>600</option>
		            <option value={800}>800</option>
		            <option value={1000}>1000</option>
		        </select>
		        <h2>Stagger</h2>
		        <select id="selectStagger" onChange={this.setStagger} defaultValue={stagger}>
		            <option value={200}>Default</option>
		            <option value={0}>0</option>
		            <option value={50}>50</option>
		            <option value={100}>100</option>
		            <option value={150}>150</option>
		            <option value={200}>200</option>
		        </select>
                <h2>Distance</h2>
		        <select id="selectStagger" onChange={this.setDistance} defaultValue={distance}>
		            <option value={30}>Default</option>
		            <option value={50}>50</option>
		            <option value={100}>100</option>
		            <option value={150}>150</option>
		        </select>
	        </div>
            <div id="content">
                <RadialMenu
                    items={items}
                    center={center}
                    animation={animation}
                    duration={duration}
                    stagger={stagger}
                    itemsSize={100}
                    distance={distance}
                />
            </div>
			<a href="https://github.com/Antho2407">
                <img
                    className="fork-img"
                    src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
                    alt="Fork me on GitHub"
                    data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
                />
            </a>
		</div>;
   }
}
