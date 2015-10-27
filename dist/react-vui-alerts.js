(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.reactVuiAlerts = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports.Error = require('./src/error');

},{"./src/error":2}],2:[function(require,module,exports){
'use strict';

var React = require('react');

var AppError = React.createClass( {

	componentDidUpdate: function() {
		// this hack is necessary in order for alert to be announced in IE with Jaws
		var node = this.getDOMNode();
		node.style.visibility = 'hidden';
		node.style.visibility = 'visible';
	},

	render: function() {

		return React.createElement(
			'div',
			{
				className: 'app-error',
				role: 'alert'
			},
			this.props.children
		);

	}

} );

module.exports = AppError;

},{"react":"react"}]},{},[1])(1)
});
//# sourceMappingURL=react-vui-alerts.js.map
