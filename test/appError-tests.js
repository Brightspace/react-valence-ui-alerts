jest.dontMock( '../appError' );

describe( 'my test', function() {

	it( 'this test', function() {

		var React = require( 'react/addons' );
		var AppError = require('../appError');
		var TestUtils = React.addons.TestUtils;

		var appError = TestUtils.renderIntoDocument(
			<AppError />
		);

		expect( appError.getDOMNode().textContent ).toBe( 'this is an error' );
	} );

} );
