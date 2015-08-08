/*jshint unused:false*/
var dojoConfig = {
	async: true,
	baseUrl: '',
	tlmSiblingOfDojo: false,
	isDebug: true,
	packages: [
		'dojo',
		'dijit',
		'dojox',
		'put-selector',
		'xstyle',
		'dgrid',
		'sharexp'
	],
	deps: [ 'sharexp' ],
	callback: function (sharexp) {
		sharexp.init();
	}
};
