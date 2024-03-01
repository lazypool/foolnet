"use strict";
exports.id = 1942;
exports.ids = [1942];
exports.modules = {

/***/ 21942:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dreamMaker_tmLanguage),
/* harmony export */   fileTypes: () => (/* binding */ fileTypes),
/* harmony export */   foldingStartMarker: () => (/* binding */ foldingStartMarker),
/* harmony export */   foldingStopMarker: () => (/* binding */ foldingStopMarker),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   patterns: () => (/* binding */ patterns),
/* harmony export */   repository: () => (/* binding */ repository),
/* harmony export */   scopeName: () => (/* binding */ scopeName)
/* harmony export */ });
const fileTypes = [
	"dm",
	"dme"
];
const foldingStartMarker = "(?x)\n/\\*\\*(?!\\*)\n|^(?![^{]*?//|[^{]*?/\\*(?!.*?\\*/.*?\\{)).*?\\{\\s*($|//|/\\*(?!.*?\\*/.*\\S))";
const foldingStopMarker = "(?<!\\*)\\*\\*/|^\\s*\\}";
const name = "dream-maker";
const patterns = [
	{
		include: "#preprocessor-rule-enabled"
	},
	{
		include: "#preprocessor-rule-disabled"
	},
	{
		include: "#preprocessor-rule-other"
	},
	{
		include: "#comments"
	},
	{
		match: "(?x)\n(var)[\\/ ]\n(?:(static|global|tmp|const)\\/)?\n(?:(datum|atom(?:\\/movable)?|obj|mob|turf|area|savefile|list|client|sound|image|database|matrix|regex|exception)\\/)?\n(?:\n\t([a-zA-Z0-9_\\-$]*)\\/\n)*\n\n([A-Za-z0-9_$]*)\\b",
		name: "meta.initialization.dm",
		captures: {
			"1": {
				name: "storage.type.dm"
			},
			"2": {
				name: "storage.modifier.dm"
			},
			"3": {
				name: "storage.type.dm"
			},
			"5": {
				name: "variable.other.dm"
			}
		}
	},
	{
		match: "\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b",
		name: "constant.numeric.dm"
	},
	{
		match: "\\b(sleep|spawn|break|continue|do|else|for|goto|if|return|switch|while)\\b",
		name: "keyword.control.dm"
	},
	{
		match: "\\b(del|new)\\b",
		name: "keyword.other.dm"
	},
	{
		match: "\\b(proc|verb|datum|atom(/movable)?|obj|mob|turf|area|savefile|list|client|sound|image|database|matrix|regex|exception)\\b",
		name: "storage.type.dm"
	},
	{
		match: "\\b(as|const|global|set|static|tmp)\\b",
		name: "storage.modifier.dm"
	},
	{
		match: "\\b(usr|world|src|args)\\b",
		name: "variable.language.dm"
	},
	{
		match: "(\\?|(>|<)(=)?|\\.|:|/(=)?|~|\\+(\\+|=)?|-(-|=)?|\\*(\\*|=)?|%|>>|<<|=(=)?|!(=)?|<>|&|&&|\\^|\\||\\|\\||\\bto\\b|\\bin\\b|\\bstep\\b)",
		name: "keyword.operator.dm"
	},
	{
		match: "\\b([A-Z_][A-Z_0-9]*)\\b",
		name: "constant.language.dm"
	},
	{
		match: "\\bnull\\b",
		name: "constant.language.dm"
	},
	{
		begin: "{\"",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.dm"
			}
		},
		end: "\"}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.dm"
			}
		},
		name: "string.quoted.triple.dm",
		patterns: [
			{
				include: "#string_escaped_char"
			},
			{
				include: "#string_embedded_expression"
			}
		]
	},
	{
		begin: "\"",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.dm"
			}
		},
		end: "\"",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.dm"
			}
		},
		name: "string.quoted.double.dm",
		patterns: [
			{
				include: "#string_escaped_char"
			},
			{
				include: "#string_embedded_expression"
			}
		]
	},
	{
		begin: "'",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.dm"
			}
		},
		end: "'",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.dm"
			}
		},
		name: "string.quoted.single.dm",
		patterns: [
			{
				include: "#string_escaped_char"
			}
		]
	},
	{
		begin: "(?x)\n^\\s* ((\\#)\\s*define) \\s+     # define\n((?<id>[a-zA-Z_][a-zA-Z0-9_]*))  # macro name\n(?:\n\t(\\()\n\t\t(\n\t\t\t\\s* \\g<id> \\s*         # first argument\n\t\t\t((,) \\s* \\g<id> \\s*)*  # additional arguments\n\t\t\t(?:\\.\\.\\.)?            # varargs ellipsis?\n\t\t)\n\t(\\))\n)",
		beginCaptures: {
			"1": {
				name: "keyword.control.directive.define.dm"
			},
			"2": {
				name: "punctuation.definition.directive.dm"
			},
			"3": {
				name: "entity.name.function.preprocessor.dm"
			},
			"5": {
				name: "punctuation.definition.parameters.begin.dm"
			},
			"6": {
				name: "variable.parameter.preprocessor.dm"
			},
			"8": {
				name: "punctuation.separator.parameters.dm"
			},
			"9": {
				name: "punctuation.definition.parameters.end.dm"
			}
		},
		end: "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
		name: "meta.preprocessor.macro.dm",
		patterns: [
			{
				include: "$base"
			}
		]
	},
	{
		begin: "(?x)\n^\\s* ((\\#)\\s*define) \\s+     # define\n((?<id>[a-zA-Z_][a-zA-Z0-9_]*))  # macro name",
		beginCaptures: {
			"1": {
				name: "keyword.control.directive.define.dm"
			},
			"2": {
				name: "punctuation.definition.directive.dm"
			},
			"3": {
				name: "variable.other.preprocessor.dm"
			}
		},
		end: "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
		name: "meta.preprocessor.macro.dm",
		patterns: [
			{
				include: "$base"
			}
		]
	},
	{
		begin: "^\\s*(#\\s*(error|warn))\\b",
		captures: {
			"1": {
				name: "keyword.control.import.error.dm"
			}
		},
		end: "$",
		name: "meta.preprocessor.diagnostic.dm",
		patterns: [
			{
				match: "(?>\\\\\\s*\\n)",
				name: "punctuation.separator.continuation.dm"
			}
		]
	},
	{
		begin: "^\\s*(?:((#)\\s*(?:elif|else|if|ifdef|ifndef))|((#)\\s*(undef|include)))\\b",
		beginCaptures: {
			"1": {
				name: "keyword.control.directive.conditional.dm"
			},
			"2": {
				name: "punctuation.definition.directive.dm"
			},
			"3": {
				name: "keyword.control.directive.$5.dm"
			},
			"4": {
				name: "punctuation.definition.directive.dm"
			}
		},
		end: "(?=(?://|/\\*))|(?<!\\\\)(?=\\n)",
		name: "meta.preprocessor.dm",
		patterns: [
			{
				match: "(?>\\\\\\s*\\n)",
				name: "punctuation.separator.continuation.dm"
			}
		]
	},
	{
		include: "#block"
	},
	{
		begin: "(?x)\n\t\t\t\t(?:  ^                                 # begin-of-line\n\t\t\t\t\t|\n\t\t\t\t\t\t (?: (?= \\s )           (?<!else|new|return) (?<=\\w)      #  or word + space before name\n\t\t\t\t\t\t\t | (?= \\s*[A-Za-z_] ) (?<!&&)       (?<=[*&>])   #  or type modifier before name\n\t\t\t\t\t\t )\n\t\t\t\t)\n\t\t\t\t(\\s*) (?!(while|for|do|if|else|switch|catch|enumerate|return|r?iterate)\\s*\\()\n\t\t\t\t(\n\t\t\t\t\t(?: [A-Za-z_][A-Za-z0-9_]*+ | :: )++ |                  # actual name\n\t\t\t\t\t(?: (?<=operator) (?: [-*&<>=+!]+ | \\(\\) | \\[\\] ) )  # if it is a C++ operator\n\t\t\t\t)\n\t\t\t\t \\s*(?=\\()",
		beginCaptures: {
			"1": {
				name: "punctuation.whitespace.function.leading.dm"
			},
			"3": {
				name: "entity.name.function.dm"
			},
			"4": {
				name: "punctuation.definition.parameters.dm"
			}
		},
		end: "(?<=\\})|(?=#)|(;)?",
		name: "meta.function.dm",
		patterns: [
			{
				include: "#comments"
			},
			{
				include: "#parens"
			},
			{
				match: "\\bconst\\b",
				name: "storage.modifier.dm"
			},
			{
				include: "#block"
			}
		]
	}
];
const repository = {
	access: {
		match: "\\.[a-zA-Z_][a-zA-Z_0-9]*\\b(?!\\s*\\()",
		name: "variable.other.dot-access.dm"
	},
	block: {
		begin: "\\{",
		end: "\\}",
		name: "meta.block.dm",
		patterns: [
			{
				include: "#block_innards"
			}
		]
	},
	block_innards: {
		patterns: [
			{
				include: "#preprocessor-rule-enabled-block"
			},
			{
				include: "#preprocessor-rule-disabled-block"
			},
			{
				include: "#preprocessor-rule-other-block"
			},
			{
				include: "#access"
			},
			{
				captures: {
					"1": {
						name: "punctuation.whitespace.function-call.leading.dm"
					},
					"2": {
						name: "support.function.any-method.dm"
					},
					"3": {
						name: "punctuation.definition.parameters.dm"
					}
				},
				match: "(?x) (?: (?= \\s )  (?:(?<=else|new|return) | (?<!\\w)) (\\s+))?\n\t\t\t(\\b\n\t\t\t\t(?!(while|for|do|if|else|switch|catch|enumerate|return|r?iterate)\\s*\\()(?:(?!NS)[A-Za-z_][A-Za-z0-9_]*+\\b | :: )++                  # actual name\n\t\t\t)\n\t\t\t \\s*(\\()",
				name: "meta.function-call.dm"
			},
			{
				include: "#block"
			},
			{
				include: "$base"
			}
		]
	},
	comments: {
		patterns: [
			{
				captures: {
					"1": {
						name: "meta.toc-list.banner.block.dm"
					}
				},
				match: "^/\\* =(\\s*.*?)\\s*= \\*/$\\n?",
				name: "comment.block.dm"
			},
			{
				begin: "/\\*",
				captures: {
					"0": {
						name: "punctuation.definition.comment.dm"
					}
				},
				end: "\\*/",
				name: "comment.block.dm",
				patterns: [
					{
						include: "#comments"
					}
				]
			},
			{
				match: "\\*/.*\\n",
				name: "invalid.illegal.stray-comment-end.dm"
			},
			{
				captures: {
					"1": {
						name: "meta.toc-list.banner.line.dm"
					}
				},
				match: "^// =(\\s*.*?)\\s*=\\s*$\\n?",
				name: "comment.line.banner.dm"
			},
			{
				begin: "//",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.comment.dm"
					}
				},
				end: "$\\n?",
				name: "comment.line.double-slash.dm",
				patterns: [
					{
						match: "(?>\\\\\\s*\\n)",
						name: "punctuation.separator.continuation.dm"
					}
				]
			}
		]
	},
	disabled: {
		begin: "^\\s*#\\s*if(n?def)?\\b.*$",
		comment: "eat nested preprocessor if(def)s",
		end: "^\\s*#\\s*endif\\b.*$",
		patterns: [
			{
				include: "#disabled"
			}
		]
	},
	parens: {
		begin: "\\(",
		end: "\\)",
		name: "meta.parens.dm",
		patterns: [
			{
				include: "$base"
			}
		]
	},
	"preprocessor-rule-disabled": {
		begin: "^\\s*(#(if)\\s+(0)\\b).*",
		captures: {
			"1": {
				name: "meta.preprocessor.dm"
			},
			"2": {
				name: "keyword.control.import.if.dm"
			},
			"3": {
				name: "constant.numeric.preprocessor.dm"
			}
		},
		end: "^\\s*(#\\s*(endif)\\b)",
		patterns: [
			{
				begin: "^\\s*(#\\s*(else)\\b)",
				captures: {
					"1": {
						name: "meta.preprocessor.dm"
					},
					"2": {
						name: "keyword.control.import.else.dm"
					}
				},
				end: "(?=^\\s*#\\s*endif\\b.*$)",
				patterns: [
					{
						include: "$base"
					}
				]
			},
			{
				begin: "",
				end: "(?=^\\s*#\\s*(else|endif)\\b.*$)",
				name: "comment.block.preprocessor.if-branch",
				patterns: [
					{
						include: "#disabled"
					}
				]
			}
		]
	},
	"preprocessor-rule-disabled-block": {
		begin: "^\\s*(#(if)\\s+(0)\\b).*",
		captures: {
			"1": {
				name: "meta.preprocessor.dm"
			},
			"2": {
				name: "keyword.control.import.if.dm"
			},
			"3": {
				name: "constant.numeric.preprocessor.dm"
			}
		},
		end: "^\\s*(#\\s*(endif)\\b)",
		patterns: [
			{
				begin: "^\\s*(#\\s*(else)\\b)",
				captures: {
					"1": {
						name: "meta.preprocessor.dm"
					},
					"2": {
						name: "keyword.control.import.else.dm"
					}
				},
				end: "(?=^\\s*#\\s*endif\\b.*$)",
				patterns: [
					{
						include: "#block_innards"
					}
				]
			},
			{
				begin: "",
				end: "(?=^\\s*#\\s*(else|endif)\\b.*$)",
				name: "comment.block.preprocessor.if-branch.in-block",
				patterns: [
					{
						include: "#disabled"
					}
				]
			}
		]
	},
	"preprocessor-rule-enabled": {
		begin: "^\\s*(#(if)\\s+(0*1)\\b)",
		captures: {
			"1": {
				name: "meta.preprocessor.dm"
			},
			"2": {
				name: "keyword.control.import.if.dm"
			},
			"3": {
				name: "constant.numeric.preprocessor.dm"
			}
		},
		end: "^\\s*(#\\s*(endif)\\b)",
		patterns: [
			{
				begin: "^\\s*(#\\s*(else)\\b).*",
				captures: {
					"1": {
						name: "meta.preprocessor.dm"
					},
					"2": {
						name: "keyword.control.import.else.dm"
					}
				},
				contentName: "comment.block.preprocessor.else-branch",
				end: "(?=^\\s*#\\s*endif\\b.*$)",
				patterns: [
					{
						include: "#disabled"
					}
				]
			},
			{
				begin: "",
				end: "(?=^\\s*#\\s*(else|endif)\\b.*$)",
				patterns: [
					{
						include: "$base"
					}
				]
			}
		]
	},
	"preprocessor-rule-enabled-block": {
		begin: "^\\s*(#(if)\\s+(0*1)\\b)",
		captures: {
			"1": {
				name: "meta.preprocessor.dm"
			},
			"2": {
				name: "keyword.control.import.if.dm"
			},
			"3": {
				name: "constant.numeric.preprocessor.dm"
			}
		},
		end: "^\\s*(#\\s*(endif)\\b)",
		patterns: [
			{
				begin: "^\\s*(#\\s*(else)\\b).*",
				captures: {
					"1": {
						name: "meta.preprocessor.dm"
					},
					"2": {
						name: "keyword.control.import.else.dm"
					}
				},
				contentName: "comment.block.preprocessor.else-branch.in-block",
				end: "(?=^\\s*#\\s*endif\\b.*$)",
				patterns: [
					{
						include: "#disabled"
					}
				]
			},
			{
				begin: "",
				end: "(?=^\\s*#\\s*(else|endif)\\b.*$)",
				patterns: [
					{
						include: "#block_innards"
					}
				]
			}
		]
	},
	"preprocessor-rule-other": {
		begin: "^\\s*((#\\s*(if(n?def)?))\\b.*?(?:(?=(?://|/\\*))|$))",
		captures: {
			"1": {
				name: "meta.preprocessor.dm"
			},
			"2": {
				name: "keyword.control.import.dm"
			}
		},
		end: "^\\s*((#\\s*(endif))\\b).*$",
		patterns: [
			{
				include: "$base"
			}
		]
	},
	"preprocessor-rule-other-block": {
		begin: "^\\s*(#\\s*(if(n?def)?)\\b.*?(?:(?=(?://|/\\*))|$))",
		captures: {
			"1": {
				name: "meta.preprocessor.dm"
			},
			"2": {
				name: "keyword.control.import.dm"
			}
		},
		end: "^\\s*(#\\s*(endif)\\b).*$",
		patterns: [
			{
				include: "#block_innards"
			}
		]
	},
	string_embedded_expression: {
		patterns: [
			{
				begin: "(?<!\\\\)\\[",
				end: "\\]",
				name: "string.interpolated.dm",
				patterns: [
					{
						include: "$self"
					}
				]
			}
		]
	},
	string_escaped_char: {
		patterns: [
			{
				match: "(?x)\n\\\\\n(\n\th(?:(?:er|im)self|ers|im)\n\t|([tTsS]?he) # Weird regex to match The, the, She, she and he at once.\n\t|He\n\t|[Hh]is\n\t|[aA]n?\n\t|(?:im)?proper\n\t|\\.\\.\\.\n\t|(?:icon|ref|[Rr]oman)(?=\\[) # Macros which need a [] after them.\n\t|[s<>\"n\\n \\[]\n)",
				name: "constant.character.escape.dm"
			},
			{
				match: "\\\\.",
				name: "invalid.illegal.unknown-escape.dm"
			}
		]
	}
};
const scopeName = "source.dm";
const dreamMaker_tmLanguage = {
	fileTypes: fileTypes,
	foldingStartMarker: foldingStartMarker,
	foldingStopMarker: foldingStopMarker,
	name: name,
	patterns: patterns,
	repository: repository,
	scopeName: scopeName
};




/***/ })

};
;