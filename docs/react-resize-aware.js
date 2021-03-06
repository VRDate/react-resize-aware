(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.ReactResizeAware = global.ReactResizeAware || {}),global.React));
}(this, (function (exports,react) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
// react-resize-aware component
//
// Triggers a `resize` event everytime the component changes its sizes
// MIT License
// Copyright 2016, Federico Zivolo
//

var style = {
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: -1
};

var ResizeAware = function (_Component) {
  _inherits(ResizeAware, _Component);

  function ResizeAware() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ResizeAware);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResizeAware.__proto__ || Object.getPrototypeOf(ResizeAware)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleObjectLoad = function (evt) {
      _this.setState({
        resizeTarget: evt.target.contentDocument.defaultView
      }, function () {
        _this.state.resizeTarget.addEventListener('resize', _this.handleResize);
        _this.handleResize();
      });
    }, _this.handleResize = function () {
      var sizes = {
        width: _this.container.offsetWidth,
        height: _this.container.offsetHeight
      };
      _this.setState(sizes);
      _this.props.onResize && _this.props.onResize(sizes);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ResizeAware, [{
    key: 'componentDidMount',


    // Init the resizeElement
    value: function componentDidMount() {
      this.resizeElement.data = 'about:blank';
    }

    // Called when the object is loaded

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.state.resizeTarget && this.state.resizeTarget.removeEventListener('resize', this.handleResize);
    }

    // Function called on component resize

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _extends2;

      var _props = this.props,
          children = _props.children,
          onResize = _props.onResize,
          onlyEvent = _props.onlyEvent,
          component = _props.component,
          props = _objectWithoutProperties(_props, ['children', 'onResize', 'onlyEvent', 'component']);

      var _state = this.state,
          width = _state.width,
          height = _state.height;


      var hasCustomComponent = typeof component !== 'string';

      return react.createElement(component, _extends((_extends2 = {}, _defineProperty(_extends2, hasCustomComponent ? 'getRef' : 'ref', function (el) {
        return _this2.container = el;
      }), _defineProperty(_extends2, 'width', hasCustomComponent ? width : undefined), _defineProperty(_extends2, 'height', hasCustomComponent ? height : undefined), _extends2), props), react.createElement('object', {
        type: 'text/html',
        style: style,
        ref: function ref(el) {
          return _this2.resizeElement = el;
        },
        onLoad: this.handleObjectLoad
      }), react.Children.map(children, function (child) {
        return react.cloneElement(child, !onlyEvent ? { width: width, height: height } : null);
      }));
    }
  }]);

  return ResizeAware;
}(react.Component);

ResizeAware.defaultProps = { component: 'div' };
function makeResizeAware(component) {
  return function (props) {
    return react.createElement(ResizeAware, _extends({ component: component }, props));
  };
}

exports['default'] = ResizeAware;
exports.makeResizeAware = makeResizeAware;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
