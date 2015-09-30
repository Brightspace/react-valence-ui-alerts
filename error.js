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
