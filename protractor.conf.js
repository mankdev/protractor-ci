var path = require('path');

// An example configuration file.
exports.config = {
	specs: ['test/*.e2e.js'],

	capabilities: {
		'browserName': 'phantomjs',

		/*
		 * Can be used to specify the phantomjs binary path.
		 * This can generally be ommitted if you installed phantomjs globally.
		 */
		'phantomjs.binary.path':'./node_modules/phantomjs/bin/phantomjs'
	},


	// Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		showColors: true // Use colors in the command line report.
	}
};