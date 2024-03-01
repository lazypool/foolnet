"use strict";
exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 50530:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ docker_tmLanguage),
/* harmony export */   information_for_contributors: () => (/* binding */ information_for_contributors),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   patterns: () => (/* binding */ patterns),
/* harmony export */   scopeName: () => (/* binding */ scopeName),
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
const information_for_contributors = [
	"This file has been converted from https://github.com/moby/moby/blob/master/contrib/syntax/textmate/Docker.tmbundle/Syntaxes/Dockerfile.tmLanguage",
	"If you want to provide a fix or improvement, please create a pull request against the original repository.",
	"Once accepted there, we are happy to receive an update request."
];
const version = "https://github.com/moby/moby/commit/abd39744c6f3ed854500e423f5fabf952165161f";
const name = "docker";
const scopeName = "source.dockerfile";
const patterns = [
	{
		captures: {
			"1": {
				name: "keyword.other.special-method.dockerfile"
			},
			"2": {
				name: "keyword.other.special-method.dockerfile"
			}
		},
		match: "^\\s*\\b(?i:(FROM))\\b.*?\\b(?i:(AS))\\b"
	},
	{
		captures: {
			"1": {
				name: "keyword.control.dockerfile"
			},
			"2": {
				name: "keyword.other.special-method.dockerfile"
			}
		},
		match: "^\\s*(?i:(ONBUILD)\\s+)?(?i:(ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR))\\s"
	},
	{
		captures: {
			"1": {
				name: "keyword.operator.dockerfile"
			},
			"2": {
				name: "keyword.other.special-method.dockerfile"
			}
		},
		match: "^\\s*(?i:(ONBUILD)\\s+)?(?i:(CMD|ENTRYPOINT))\\s"
	},
	{
		begin: "\"",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.string.begin.dockerfile"
			}
		},
		end: "\"",
		endCaptures: {
			"1": {
				name: "punctuation.definition.string.end.dockerfile"
			}
		},
		name: "string.quoted.double.dockerfile",
		patterns: [
			{
				match: "\\\\.",
				name: "constant.character.escaped.dockerfile"
			}
		]
	},
	{
		begin: "'",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.string.begin.dockerfile"
			}
		},
		end: "'",
		endCaptures: {
			"1": {
				name: "punctuation.definition.string.end.dockerfile"
			}
		},
		name: "string.quoted.single.dockerfile",
		patterns: [
			{
				match: "\\\\.",
				name: "constant.character.escaped.dockerfile"
			}
		]
	},
	{
		captures: {
			"1": {
				name: "punctuation.whitespace.comment.leading.dockerfile"
			},
			"2": {
				name: "comment.line.number-sign.dockerfile"
			},
			"3": {
				name: "punctuation.definition.comment.dockerfile"
			}
		},
		comment: "comment.line",
		match: "^(\\s*)((#).*$\\n?)"
	}
];
const docker_tmLanguage = {
	information_for_contributors: information_for_contributors,
	version: version,
	name: name,
	scopeName: scopeName,
	patterns: patterns
};




/***/ })

};
;