'use strict';

var React = require( 'react' );

var AppError = React.createClass( {

	render: function() {

		return React.createElement(
			'div',
			{ className: 'app-error' },
			this.props.children
		);

	}

} );

module.exports = AppError;
