"use strict";
exports.id = 4322;
exports.ids = [4322];
exports.modules = {

/***/ 64322:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ erb_tmLanguage),
/* harmony export */   fileTypes: () => (/* binding */ fileTypes),
/* harmony export */   injections: () => (/* binding */ injections),
/* harmony export */   keyEquivalent: () => (/* binding */ keyEquivalent),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   patterns: () => (/* binding */ patterns),
/* harmony export */   repository: () => (/* binding */ repository),
/* harmony export */   scopeName: () => (/* binding */ scopeName),
/* harmony export */   uuid: () => (/* binding */ uuid)
/* harmony export */ });
const fileTypes = [
	"erb",
	"rhtml",
	"html.erb"
];
const injections = {
	"text.html.erb - (meta.embedded.block.erb | meta.embedded.line.erb | comment)": {
		patterns: [
			{
				begin: "(^\\s*)(?=<%+#(?![^%]*%>))",
				beginCaptures: {
					"0": {
						name: "punctuation.whitespace.comment.leading.erb"
					}
				},
				end: "(?!\\G)(\\s*$\\n)?",
				endCaptures: {
					"0": {
						name: "punctuation.whitespace.comment.trailing.erb"
					}
				},
				patterns: [
					{
						include: "#comment"
					}
				]
			},
			{
				begin: "(^\\s*)(?=<%(?![^%]*%>))",
				beginCaptures: {
					"0": {
						name: "punctuation.whitespace.embedded.leading.erb"
					}
				},
				end: "(?!\\G)(\\s*$\\n)?",
				endCaptures: {
					"0": {
						name: "punctuation.whitespace.embedded.trailing.erb"
					}
				},
				patterns: [
					{
						include: "#tags"
					}
				]
			},
			{
				include: "#comment"
			},
			{
				include: "#tags"
			}
		]
	}
};
const keyEquivalent = "^~H";
const name = "erb";
const patterns = [
	{
		include: "text.html.basic"
	}
];
const repository = {
	comment: {
		patterns: [
			{
				begin: "<%+#",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.comment.begin.erb"
					}
				},
				end: "%>",
				endCaptures: {
					"0": {
						name: "punctuation.definition.comment.end.erb"
					}
				},
				name: "comment.block.erb"
			}
		]
	},
	tags: {
		patterns: [
			{
				begin: "<%+(?!>)[-=]?(?![^%]*%>)",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.erb"
					}
				},
				contentName: "source.ruby",
				end: "(-?%)>",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.erb"
					},
					"1": {
						name: "source.ruby"
					}
				},
				name: "meta.embedded.block.erb",
				patterns: [
					{
						captures: {
							"1": {
								name: "punctuation.definition.comment.erb"
							}
						},
						match: "(#).*?(?=-?%>)",
						name: "comment.line.number-sign.erb"
					},
					{
						include: "source.ruby"
					}
				]
			},
			{
				begin: "<%+(?!>)[-=]?",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.erb"
					}
				},
				contentName: "source.ruby",
				end: "(-?%)>",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.erb"
					},
					"1": {
						name: "source.ruby"
					}
				},
				name: "meta.embedded.line.erb",
				patterns: [
					{
						captures: {
							"1": {
								name: "punctuation.definition.comment.erb"
							}
						},
						match: "(#).*?(?=-?%>)",
						name: "comment.line.number-sign.erb"
					},
					{
						include: "source.ruby"
					}
				]
			}
		]
	}
};
const scopeName = "text.html.erb";
const uuid = "13FF9439-15D0-4E74-9A8E-83ABF0BAA5E7";
const erb_tmLanguage = {
	fileTypes: fileTypes,
	injections: injections,
	keyEquivalent: keyEquivalent,
	name: name,
	patterns: patterns,
	repository: repository,
	scopeName: scopeName,
	uuid: uuid
};




/***/ })

};
;