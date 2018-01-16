module.exports = {
	entry: {
		mainPage: './src/js/index.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: 'bundle-[hash].js'
	}
}
