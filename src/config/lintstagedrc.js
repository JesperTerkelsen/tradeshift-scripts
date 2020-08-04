const { resolveKcdScripts, resolveBin } = require('../utils');

const kcdScripts = resolveKcdScripts();
const doctoc = resolveBin('doctoc');

module.exports = {
	concurrent: false,
	linters: {
		'**/*.+(js|jsx|json|less|css|ts|tsx)': [
			`${kcdScripts} format`,
			`${kcdScripts} lint`,
			`${kcdScripts} test --findRelatedTests`,
			'git add',
		],
		'README.md': [`${doctoc} --maxlevel 2 --notitle`, 'git add'],
	},
};
