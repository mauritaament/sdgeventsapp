(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames"], factory);
	else if(typeof exports === 'object')
		exports["ReactAlerts"] = factory(require("react"), require("classnames"));
	else
		root["ReactAlerts"] = factory(root["React"], root["classNames"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Alert = __webpack_require__(1);

	var _Alert2 = _interopRequireDefault(_Alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Alert2.default.version = '0.3.0'; /**
	                                    * A React component for displaying pretty alert banners.
	                                    */


	exports.default = _Alert2.default;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Link = __webpack_require__(4);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Alert = _react2.default.createClass({
	  displayName: 'Alert',


	  statics: { Link: _Link2.default },

	  propTypes: {
	    /**
	     * Specify the type of alert style.
	     *
	     * defaults to "info"
	     */
	    alertStyle: _react2.default.PropTypes.oneOf(['info', 'success', 'warning', 'danger']),

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * When `true` allows the user to dismiss the alert. When a user dismisses
	     * an alert, the `onDismiss` function will be executed.
	     *
	     * defaults to `false`
	     */
	    dismissible: _react2.default.PropTypes.bool,

	    /**
	     * Fires when a user clicks on the dismiss button.
	     *
	     * @param {SyntheticEvent} event
	     */
	    onDismissClick: _react2.default.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      alertStyle: 'info',
	      className: '',
	      dismissible: false
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var alertStyle = _props.alertStyle;
	    var children = _props.children;
	    var className = _props.className;
	    var dismissible = _props.dismissible;
	    var onRequestDismiss = _props.onRequestDismiss;

	    var others = _objectWithoutProperties(_props, ['alertStyle', 'children', 'className', 'dismissible', 'onRequestDismiss']);

	    var classes = (0, _classnames2.default)(className, {
	      "Alert": true,
	      "Alert-dismissible": dismissible
	    }, 'Alert Alert-' + alertStyle);

	    return _react2.default.createElement(
	      'div',
	      _extends({}, others, { className: classes, role: 'alert' }),
	      dismissible && _react2.default.createElement(
	        'button',
	        {
	          'aria-label': 'Close',
	          className: 'close',
	          onClick: onRequestDismiss,
	          type: 'button'
	        },
	        _react2.default.createElement(
	          'span',
	          { 'aria-hidden': 'true' },
	          '×'
	        )
	      ),
	      children
	    );
	  }
	});

	exports.default = Alert;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Link = _react2.default.createClass({
	  displayName: 'Link',


	  propTypes: {
	    children: _react2.default.PropTypes.node,
	    className: _react2.default.PropTypes.string
	  },

	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var className = _props.className;

	    var others = _objectWithoutProperties(_props, ['children', 'className']);

	    return _react2.default.createElement(
	      'a',
	      _extends({}, others, { className: (0, _classnames2.default)(className, 'Alert-link') }),
	      children
	    );
	  }
	});

	exports.default = Link;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;