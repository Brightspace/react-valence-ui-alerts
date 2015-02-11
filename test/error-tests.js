'use strict';

jest.dontMock( '../lib/error' );

describe( 'error', function() {

	var React, TestUtils, AppError;

	beforeEach( function() {
		React = require( 'react/addons' );
		TestUtils = React.addons.TestUtils;
		AppError = require('../lib/error');
	} );

	it( 'has the error message', function() {

		var appError = TestUtils.renderIntoDocument(
			<AppError>test error message</AppError>
		);

		expect( appError.getDOMNode().textContent ).toBe( 'test error message' );

	} );

	it( 'has the app-error css class', function() {

		var appError = TestUtils.renderIntoDocument(
			<AppError />
		);

		expect( appError.getDOMNode().className ).toBe( 'app-error' );

	} );

} );
