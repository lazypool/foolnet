"use strict";
exports.id = 3647;
exports.ids = [3647];
exports.modules = {

/***/ 33647:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comment: () => (/* binding */ comment),
/* harmony export */   "default": () => (/* binding */ jinjaHtml_tmLanguage),
/* harmony export */   firstLineMatch: () => (/* binding */ firstLineMatch),
/* harmony export */   foldingStartMarker: () => (/* binding */ foldingStartMarker),
/* harmony export */   foldingStopMarker: () => (/* binding */ foldingStopMarker),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   patterns: () => (/* binding */ patterns),
/* harmony export */   scopeName: () => (/* binding */ scopeName)
/* harmony export */ });
const name = "jinja-html";
const scopeName = "text.html.jinja";
const comment = "Jinja HTML Templates";
const firstLineMatch = "^{% extends [\"'][^\"']+[\"'] %}";
const foldingStartMarker = "(<(?i:(head|table|tr|div|style|script|ul|ol|form|dl))\\b.*?>|{%\\s*(block|filter|for|if|macro|raw))";
const foldingStopMarker = "(</(?i:(head|table|tr|div|style|script|ul|ol|form|dl))\\b.*?>|{%\\s*(endblock|endfilter|endfor|endif|endmacro|endraw)\\s*%})";
const patterns = [
	{
		include: "source.jinja"
	},
	{
		include: "text.html.basic"
	}
];
const jinjaHtml_tmLanguage = {
	name: name,
	scopeName: scopeName,
	comment: comment,
	firstLineMatch: firstLineMatch,
	foldingStartMarker: foldingStartMarker,
	foldingStopMarker: foldingStopMarker,
	patterns: patterns
};




/***/ })

};
;