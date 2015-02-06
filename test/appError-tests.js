'use strict';

jest.dontMock( '../appError' );

describe( 'my test', function() {

	var React, TestUtils;

	beforeEach( function() {
		React = require( 'react/addons' );
		TestUtils = React.addons.TestUtils;
	} );

	it( 'has the error message', function() {

		var AppError = require('../appError');
		var appError = TestUtils.renderIntoDocument(
			<AppError>test error message</AppError>
		);

		expect( appError.getDOMNode().textContent ).toBe( 'test error message' );

	} );

	it( 'has the app-error css class', function() {

		var AppError = require('../appError');
		var appError = TestUtils.renderIntoDocument(
			<AppError />
		);

		expect( appError.getDOMNode().className ).toBe( 'app-error' );

	} );

} );
