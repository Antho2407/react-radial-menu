"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RadialItem = _interopRequireDefault(require("./RadialItem"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.jQuery = window.$ = require("jquery");

require("velocity-animate");

require("velocity-animate/velocity.ui");

var RadialMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(RadialMenu, _Component);

  function RadialMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RadialMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadialMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleMenuClick", function (event) {
      var _this$props = _this.props,
          stagger = _this$props.stagger,
          duration = _this$props.duration,
          animation = _this$props.animation,
          easing = _this$props.easing;
      var circle = $('.radial-menu-circle');

      var that = _assertThisInitialized(_this);

      event.preventDefault();
      $('.menu-button').toggleClass('open');

      if (circle.hasClass('open')) {
        circle.velocity('stop');
        $('.radial-menu-circle a').off('mouseenter mouseleave');
        circle.velocity('reverse').toggleClass('open');
      } else {
        $('.children').velocity('stop').velocity(animation, {
          stagger: stagger,
          duration: duration,
          complete: function complete() {
            $('.radial-menu-circle a').mouseenter(function (event) {
              that.handleEnter(event, $(this));
            }).mouseleave(function () {
              that.handleLeave(event, $(this));
            });
          }
        });
        circle.velocity('stop').velocity({
          opacity: 1,
          scale: [1, 0]
        }, {
          easing: easing,
          duration: duration
        }).toggleClass('open');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "createItems", function (items) {
      var _this$props2 = _this.props,
          distance = _this$props2.distance,
          itemsSize = _this$props2.itemsSize;
      var length = items.length;
      var result = [];
      var top, left;

      for (var i = 0; i < length; i++) {
        var item = items[i];
        left = "".concat((itemsSize + distance) * -1 * Math.cos(-0.5 * Math.PI - 2 * Math.PI * i / length), "px");
        top = "".concat((itemsSize + distance) * Math.sin(-0.5 * Math.PI - 2 * Math.PI * i / length), "px");
        result.push(_react.default.createElement(_RadialItem.default, {
          key: i,
          size: itemsSize,
          href: item.href,
          className: "children",
          left: left,
          top: top,
          image: item.image
        }, item.text));
      }

      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function (event, element) {
      element.toggleClass("hover");
      $(".hover").velocity("stop").velocity({
        scale: 1.25
      }, {
        duration: 200
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleLeave", function (event, element) {
      $(".hover").velocity("stop").velocity({
        scale: 1
      }, {
        duration: 200
      }).toggleClass("hover");
    });

    return _this;
  }

  _createClass(RadialMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var that = this;
      $(".radial-menu-button").mouseenter(function (event) {
        that.handleEnter(event, $(this));
      }).mouseleave(function () {
        that.handleLeave(event, $(this));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          radius = _this$props3.radius,
          items = _this$props3.items,
          itemsSize = _this$props3.itemsSize,
          center = _this$props3.center;
      var currentItems = this.createItems(items);
      var sizeNav = 200;
      var navStyle = {
        "width": sizeNav,
        "height": sizeNav
      };
      return _react.default.createElement("div", {
        className: "radial-menu-container"
      }, _react.default.createElement("div", {
        className: "radial-menu-circle"
      }, currentItems.map(function (item) {
        return item;
      })), _react.default.createElement(_RadialItem.default, {
        href: "#",
        className: "radial-menu-button",
        size: itemsSize,
        handleClick: this.handleMenuClick,
        image: center.image
      }));
    }
  }]);

  return RadialMenu;
}(_react.Component);

RadialMenu.propTypes = {
  animation: _propTypes.default.string,
  duration: _propTypes.default.number,
  stagger: _propTypes.default.number,
  itemsSize: _propTypes.default.number,
  easing: _propTypes.default.array,
  distance: _propTypes.default.number,
  center: _propTypes.default.object.isRequired,
  items: _propTypes.default.array.isRequired
};
RadialMenu.defaultProps = {
  animation: "transition.swoopIn",
  duration: 600,
  stagger: 100,
  itemsSize: 100,
  easing: [0.175, 0.885, 0.32, 1.275],
  distance: 30
};
var _default = RadialMenu;
exports.default = _default;