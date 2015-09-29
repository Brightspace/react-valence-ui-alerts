'use strict';

jest.dontMock( '../error' );

describe( 'error', function() {

	var React, TestUtils, Alerts;

	beforeEach( function() {
		React = require( 'react/addons' );
		TestUtils = React.addons.TestUtils;
		Alerts = require('../index');
	} );

	it( 'has the error message', function() {

		var appError = TestUtils.renderIntoDocument(
			<Alerts.Error>test error message</Alerts.Error>
		);

		expect( appError.getDOMNode().textContent ).toBe( 'test error message' );

	} );

	it( 'has the app-error css class', function() {

		var appError = TestUtils.renderIntoDocument(
			<Alerts.Error />
		);

		expect( appError.getDOMNode().className ).toBe( 'app-error' );

	} );

	it( 'has the aria alert role', function() {

		var appError = TestUtils.renderIntoDocument(
			<Alerts.Error />
		);

		expect( appError.getDOMNode().getAttribute('role') ).toBe( 'alert' );

	} );

} );
