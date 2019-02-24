import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import RadialItem from "./RadialItem"

window.jQuery = window.$ = require("jquery");

require("velocity-animate");
require("velocity-animate/velocity.ui");

class RadialMenu extends Component {
	handleMenuClick = event => {
        const {
            stagger,
            duration,
            animation,
            easing
        } = this.props
        const circle = $('.radial-menu-circle');
		const that = this;

		event.preventDefault();
		$('.menu-button').toggleClass('open');

		if(circle.hasClass('open')){
			circle.velocity('stop');
			$('.radial-menu-circle a').off('mouseenter mouseleave');
			circle.velocity('reverse').toggleClass('open');
		} else {
			$('.children').velocity('stop').velocity(animation, {
				    stagger: stagger,
				    duration: duration,
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
				easing: easing,
				duration: duration
			}).toggleClass('open');
		}
	}

	createItems = items => {
        const {
            distance,
            itemsSize
        } = this.props
		const length = items.length;
		const result = [];
		let top, left;

		for (let i = 0; i < length; i++) {
			const item = items[i];
			left = `${(itemsSize + distance) * (-1) * (Math.cos(-0.5 * Math.PI - (2 * Math.PI * i) / length))}px`;
			top = `${(itemsSize + distance) * (Math.sin(-0.5 * Math.PI - (2 * Math.PI * i) / length))}px`;

			result.push(<RadialItem
                key={i}
                size={itemsSize}
                href={item.href}
				className="children"
                left={left}
                top={top}
                image={item.image}
            >
                {item.text}
            </RadialItem>);

		}
		return result;
	}

	handleEnter = (event, element) => {
		element.toggleClass("hover");
		$(".hover").velocity("stop").velocity(
			{scale:1.25},
			{duration: 200}
        );
	}

	handleLeave = (event, element) => {
		 $(".hover").velocity("stop").velocity(
    		{scale:1},
    		{duration: 200}
        ).toggleClass("hover");
	}

	componentDidMount () {
		const that = this;
		$(".radial-menu-button").mouseenter(function (event) {
			that.handleEnter(event, $(this));
		}).mouseleave(function () {
			that.handleLeave(event, $(this));
		});
	}

    render () {
        const { radius, items, itemsSize, center } = this.props;
      	const currentItems = this.createItems(items);
      	const sizeNav = 200;
      	const navStyle = {
      		"width": sizeNav,
      		"height": sizeNav
      	};

      	return <div className="radial-menu-container">

      		<div className="radial-menu-circle">
                {currentItems.map(item => item)}
      		</div>

      		<RadialItem
                href="#"
                className="radial-menu-button"
                size={itemsSize}
                handleClick={this.handleMenuClick}
                image={center.image}
            />
        </div>;
    }
}

RadialMenu.propTypes = {
    animation: PropTypes.string,
    duration: PropTypes.number,
    stagger: PropTypes.number,
    itemsSize: PropTypes.number,
    easing: PropTypes.array,
    distance: PropTypes.number
}

RadialMenu.defaultProps = {
    animation: "transition.swoopIn",
    duration: 600,
    stagger: 100,
    itemsSize: 100,
    easing: [0.175, 0.885, 0.32, 1.275],
    distance: 30
}

export default RadialMenu
