import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"

class RadialItem extends Component {
	handleClick = event => {
		event.preventDefault();
	}

    render () {
        const {
            className,
            radius,
            top,
            left,
            image,
            handleClick,
            href,
            children
        } = this.props
        const marginValue = (-1) * (radius / 2) + "px";
      	let margin;

      	if (className !== "children") {
      		margin = "auto";
      	} else {
      		margin = marginValue + " 0px 0px " + marginValue;
      	}

      	const itemStyle = {
      		"top": top,
      		"left": left,
      		"width": `${radius}px`,
      		"height" : `${radius}px`,
      		"lineHeight": `${radius}px`,
      		"margin": margin,
      		"backgroundImage": image,
    		  "backgroundRepeat":"no-repeat",
    		  "backgroundSize": "cover"
      	};

        if (image !== "none") {
            itemStyle.border = "none";
            itemStyle.boxShadow = "none";

            if (className !== "radial-menu-button") {
                itemStyle.backgroundColor = "transparent";
            }
        }

        return <a
            href={href}
            className={className}
            style={itemStyle}
            onClick={handleClick}
        >
            {children}
        </a>
    }
}

RadialItem.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string,
    value: PropTypes.string
}

RadialItem.defaultProps = {
    image: "none",
    radius: 100
}

export default RadialItem
