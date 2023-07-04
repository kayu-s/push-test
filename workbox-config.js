module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,js,json,lock}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};