# react-valence-ui-alerts

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

LESS mixins and CSS for styling alerts.

## Installation

Install from NPM:
```shell
npm install react-vui-alerts
```

## Usage

Require the component:
```javascript
var AppError = require('react-vui-alerts').AppError;
```

And then use the component as a container for your error message:

```javascript
var AppComponent = React.createClass({
     ...
     render: function() {
          if (this.state.isError) {
               return <AppError> some error content/view </AppError>;
          } else {
               return <SomeOtherView />;
          }
     },
     ...
});
```

[npm-url]: https://www.npmjs.org/package/react-vui-alerts
[npm-image]: https://img.shields.io/npm/v/react-vui-alerts.svg
[ci-url]: https://travis-ci.org/Brightspace/react-valence-ui-alerts
[ci-image]: https://img.shields.io/travis-ci/Brightspace/react-valence-ui-alerts.svg
[dependencies-url]: https://david-dm.org/brightspace/react-valence-ui-alerts
[dependencies-image]: https://img.shields.io/david/Brightspace/react-valence-ui-alerts.svg
