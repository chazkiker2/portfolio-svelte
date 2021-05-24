const sveltePreprocess = require("svelte-preprocess");

function createPreprocessors(props) {
	return sveltePreprocess({
		defaults: {
            script: 'typescript',
        },
		sourceMap: !props.production
	})
}

module.exports = {
	preprocess: createPreprocessors({production: true}),
	createPreprocessors,
}
