> Deprecated: use [BrightspaceUI/alerts](https://github.com/BrightspaceUI/alerts) web component instead.

# react-vui-alerts

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Dependency Status][dependencies-image]][dependencies-url]

React component for displaying alerts.

## Installation

Install from NPM:
```shell
npm install react-vui-alerts
```

Install from Bower:
```shell
bower install react-vui-alerts
```

## Usage

Import the style:

```javascript
@import "bower_components/react-vui-alerts/alerts"; // or...

@import "node_modules/react-vui-alerts/alerts";
```

Require the component:
```javascript
var Alerts = require('react-vui-alerts');
```

And then use the component as a container for your error message:

```javascript
var AppComponent = React.createClass({
     ...
     render: function() {
          if (this.state.isError) {
               return <Alerts.Error> some error content/view </Alerts.Error>;
          } else {
               return <SomeOtherView />;
          }
     },
     ...
});
```
## Contributing

### Code Style

This repository is configured with [EditorConfig](http://editorconfig.org) rules and contributions should make use of them. See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for more information.

[npm-url]: https://www.npmjs.org/package/react-vui-alerts
[npm-image]: https://img.shields.io/npm/v/react-vui-alerts.svg
[ci-url]: https://travis-ci.org/Brightspace/react-valence-ui-alerts
[ci-image]: https://img.shields.io/travis-ci/Brightspace/react-valence-ui-alerts.svg
[coverage-url]: https://coveralls.io/r/Brightspace/react-valence-ui-alerts?branch=master
[coverage-image]: https://img.shields.io/coveralls/Brightspace/react-valence-ui-alerts.svg
[dependencies-url]: https://david-dm.org/brightspace/react-valence-ui-alerts
[dependencies-image]: https://img.shields.io/david/Brightspace/react-valence-ui-alerts.svg
