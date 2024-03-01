"use strict";
exports.id = 4618;
exports.ids = [4618];
exports.modules = {

/***/ 74618:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $schema: () => (/* binding */ $schema),
/* harmony export */   "default": () => (/* binding */ mdx_tmLanguage),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   patterns: () => (/* binding */ patterns),
/* harmony export */   repository: () => (/* binding */ repository),
/* harmony export */   scopeName: () => (/* binding */ scopeName)
/* harmony export */ });
const $schema = "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json";
const name = "mdx";
const patterns = [
	{
		include: "#jsx"
	},
	{
		include: "#markdown"
	}
];
const repository = {
	jsx: {
		patterns: [
			{
				include: "#jsx-module"
			},
			{
				include: "#jsx-tag"
			}
		],
		repository: {
			"jsx-module": {
				patterns: [
					{
						begin: "^(?=(import|export)\\b)",
						"while": "^(?!\\s*$)",
						contentName: "source.js.jsx",
						patterns: [
							{
								include: "source.js.jsx"
							}
						]
					}
				]
			},
			"jsx-tag": {
				patterns: [
					{
						begin: "^(?=<([a-z]|[A-Z]))",
						end: "(?<=>)",
						contentName: "source.js.jsx",
						patterns: [
							{
								include: "source.js.jsx"
							}
						]
					}
				]
			}
		}
	},
	markdown: {
		contentName: "text.html.markdown",
		patterns: [
			{
				include: "text.html.markdown"
			}
		]
	}
};
const scopeName = "text.html.markdown.jsx";
const mdx_tmLanguage = {
	$schema: $schema,
	name: name,
	patterns: patterns,
	repository: repository,
	scopeName: scopeName
};




/***/ })

};
;