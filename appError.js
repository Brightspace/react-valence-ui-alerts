'use strict';

var React = require( 'react' );

var AppError = React.createClass( {

	render: function() {
		return (
			<div className="app-error">
				{this.props.children}
			</div>
		);
	}

} );

module.exports = AppError;
