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

		event.preventDefault();
		$('.menu-button').toggleClass('open');
		const circle = $('.radial-menu-circle');
		const that = this;
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

	createItems = (items, sizeCenter) => {
        const {
            radius,
            distance
        } = this.props
		const length = items.length;
		const result =  [];
		let top, left;
		const currentRadius = (radius / 2).toFixed(5);
		let currentDistance;

		if (distance < 0) {
            currentDistance = ((100 * currentRadius * 0.4) / currentRadius).toFixed(5);
        }

		for (let i = 0; i < length; i++) {
			const item = items[i];
			left = (50 - currentDistance * Math.cos(-0.5 * Math.PI - (2 * Math.PI * i) / length)).toFixed(8) + "%"
			top = (50 + currentDistance * Math.sin(-0.5 * Math.PI - (2 * Math.PI * i) / length)).toFixed(8) + "%";
			result.push(<RadialItem
                key={i}
                radius={currentRadius}
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
			{
			 	scale:1.25
			},
			{duration: 200});
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
        const { radius, items } = this.props
      	const sizeCenter = (radius /2.6).toFixed(5);
      	const _items = this.createItems(items, sizeCenter);
      	const sizeNav = radius * 2;

      	const navStyle = {
      		"width": sizeNav,
      		"height": sizeNav
      	};

      	return <Fragment>
      		<nav className="radial-menu-nav" style={navStyle}>

      		<div className="radial-menu-circle">
      		{_items.map(function(item) {
      			return item;
      		})}

      		</div>

      		<RadialItem
                href="#"
                className="radial-menu-button"
                radius={sizeCenter}
                handleClick={this.handleMenuClick}
                image={this.props.center.image}
            />
      		</nav>
        </Fragment>;
    }
}

RadialMenu.propTypes = {
    animation: PropTypes.string,
    duration: PropTypes.number,
    stagger: PropTypes.number,
    radius: PropTypes.number,
    easing: PropTypes.array,
    distance: PropTypes.number
}

RadialMenu.defaultProps = {
    animation: "transition.swoopIn",
    duration: 600,
    stagger: 100,
    radius: 200,
    easing: [0.175, 0.885, 0.32, 1.275],
    distance: -1
}

export default RadialMenu
