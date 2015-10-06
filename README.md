# enb-esnext

Available technologies:

- esnext

## Usage

Install the package:

~~~
$ npm instal --save-dev enb-esnext
~~~

Add the tech to your project's `make.js`

~~~js
var esnext = require('enb-esnext/techs/esnext');

module.exports = function(config) {
    config.node('bundle', function(node) {
        node.addTechs([
            [esnext, {
                source: '?.pre.js',
                target: '?.js'
            }]
        ]);

        node.addTarget('?.js');
    });
};
~~~
