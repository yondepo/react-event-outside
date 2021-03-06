'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function () {
  var events = arguments.length <= 0 || arguments[0] === undefined ? ['click'] : arguments[0];
  return function (Target) {
    return function (_React$Component) {
      _inherits(ReactEventOutside, _React$Component);

      function ReactEventOutside(props) {
        _classCallCheck(this, ReactEventOutside);

        var _this = _possibleConstructorReturn(this, (ReactEventOutside.__proto__ || Object.getPrototypeOf(ReactEventOutside)).call(this, props));

        _this.handleEvent = _this.handleEvent.bind(_this);
        return _this;
      }

      _createClass(ReactEventOutside, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;

          events.forEach(function (event) {
            return document.addEventListener(event, _this2.handleEvent, true);
          });
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var _this3 = this;

          events.forEach(function (event) {
            return document.removeEventListener(event, _this3.handleEvent, true);
          });
        }
      }, {
        key: 'handleEvent',
        value: function handleEvent(e) {
          if ((!this.wrap || !this.wrap.contains(e.target)) && typeof this.target.handleEvent === 'function') {
            this.target.handleEvent(e);
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this4 = this;

          return _react2.default.createElement(
            'div',
            { ref: function ref(node) {
                return _this4.wrap = node;
              } },
            _react2.default.createElement(Target, _extends({}, this.props, { ref: function ref(node) {
                return _this4.target = node;
              } }))
          );
        }
      }]);

      return ReactEventOutside;
    }(_react2.default.Component);
  };
};
