module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"plugin:prettier/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"prettier"
	],
	"rules": {
		// "indent": [
		// 	"error",
		// 	"tab"
		// ],
		// "linebreak-style": [
		// 	"error",
		// 	"windows"
		// ],
		// "quotes": [
		// 	"error",
		// 	"double"
		// ],
		// "semi": [
		// 	"error",
		// 	"always"  
		// ],
		// "eol-last": [
		// 	"error",
		// 	"always"
		// ],
	"prettier/prettier": "error"
	}
};
