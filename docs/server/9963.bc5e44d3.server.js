"use strict";
exports.id = 9963;
exports.ids = [9963];
exports.modules = {

/***/ 29963:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sparql_tmLanguage),
/* harmony export */   fileTypes: () => (/* binding */ fileTypes),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   patterns: () => (/* binding */ patterns),
/* harmony export */   repository: () => (/* binding */ repository),
/* harmony export */   scopeName: () => (/* binding */ scopeName)
/* harmony export */ });
const name = "sparql";
const scopeName = "source.sparql";
const fileTypes = [
	"rq",
	"sparql",
	"sq"
];
const patterns = [
	{
		include: "source.turtle"
	},
	{
		include: "#query-keyword-operators"
	},
	{
		include: "#functions"
	},
	{
		include: "#variables"
	},
	{
		include: "#expression-operators"
	}
];
const repository = {
	"query-keyword-operators": {
		name: "keyword.control.sparql",
		match: "\\b(?i:define|select|distinct|reduced|from|named|construct|ask|describe|where|graph|having|bind|as|filter|optional|union|order|by|group|limit|offset|values|insert data|delete data|with|delete|insert|clear|silent|default|all|create|drop|copy|move|add|to|using|service|not exists|exists|not in|in|minus|load)\\b"
	},
	functions: {
		name: "support.function.sparql",
		match: "\\b(?i:concat|regex|asc|desc|bound|isiri|isuri|isblank|isliteral|isnumeric|str|lang|datatype|sameterm|langmatches|avg|count|group_concat|separator|max|min|sample|sum|iri|uri|bnode|strdt|uuid|struuid|strlang|strlen|substr|ucase|lcase|strstarts|strends|contains|strbefore|strafter|encode_for_uri|replace|abs|round|ceil|floor|rand|now|year|month|day|hours|minutes|seconds|timezone|tz|md5|sha1|sha256|sha384|sha512|coalesce|if)\\b"
	},
	variables: {
		name: "constant.variable.sparql.turtle",
		match: "(?<!\\w)[?$]\\w+"
	},
	"expression-operators": {
		name: "support.class.sparql",
		match: "(?:\\|\\||&&|=|!=|<|>|<=|>=|\\*|/|\\+|-|\\||\\^|\\?|\\!)"
	}
};
const sparql_tmLanguage = {
	name: name,
	scopeName: scopeName,
	fileTypes: fileTypes,
	patterns: patterns,
	repository: repository
};




/***/ })

};
;