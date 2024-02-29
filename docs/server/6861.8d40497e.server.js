"use strict";
exports.id = 6861;
exports.ids = [6861];
exports.modules = {

/***/ 66861:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comment: () => (/* binding */ comment),
/* harmony export */   "default": () => (/* binding */ perl_tmLanguage),
/* harmony export */   information_for_contributors: () => (/* binding */ information_for_contributors),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   patterns: () => (/* binding */ patterns),
/* harmony export */   repository: () => (/* binding */ repository),
/* harmony export */   scopeName: () => (/* binding */ scopeName),
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
const information_for_contributors = [
	"This file has been converted from https://github.com/textmate/perl.tmbundle/blob/master/Syntaxes/Perl.plist",
	"If you want to provide a fix or improvement, please create a pull request against the original repository.",
	"Once accepted there, we are happy to receive an update request."
];
const version = "https://github.com/textmate/perl.tmbundle/commit/a85927a902d6e5d7805f56a653f324d34dfad53a";
const name = "perl";
const scopeName = "source.perl";
const comment = "\n\tTODO:\tInclude RegExp syntax\n";
const patterns = [
	{
		include: "#line_comment"
	},
	{
		begin: "^(?==[a-zA-Z]+)",
		end: "^(=cut\\b.*$)",
		endCaptures: {
			"1": {
				patterns: [
					{
						include: "#pod"
					}
				]
			}
		},
		name: "comment.block.documentation.perl",
		patterns: [
			{
				include: "#pod"
			}
		]
	},
	{
		include: "#variable"
	},
	{
		applyEndPatternLast: 1,
		begin: "\\b(?=qr\\s*[^\\s\\w])",
		comment: "string.regexp.compile.perl",
		end: "((([egimosxradlupcn]*)))(?=(\\s+\\S|\\s*[;\\,\\#\\{\\}\\)]|\\s*$))",
		endCaptures: {
			"1": {
				name: "string.regexp.compile.perl"
			},
			"2": {
				name: "punctuation.definition.string.perl"
			},
			"3": {
				name: "keyword.control.regexp-option.perl"
			}
		},
		patterns: [
			{
				begin: "(qr)\\s*\\{",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "\\}",
				name: "string.regexp.compile.nested_braces.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					},
					{
						include: "#nested_braces_interpolated"
					}
				]
			},
			{
				begin: "(qr)\\s*\\[",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "\\]",
				name: "string.regexp.compile.nested_brackets.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					},
					{
						include: "#nested_brackets_interpolated"
					}
				]
			},
			{
				begin: "(qr)\\s*<",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: ">",
				name: "string.regexp.compile.nested_ltgt.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					},
					{
						include: "#nested_ltgt_interpolated"
					}
				]
			},
			{
				begin: "(qr)\\s*\\(",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "\\)",
				name: "string.regexp.compile.nested_parens.perl",
				patterns: [
					{
						comment: "This is to prevent thinks like qr/foo$/ to treat $/ as a variable",
						match: "\\$(?=[^\\s\\w\\\\'\\{\\[\\(\\<])"
					},
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					},
					{
						include: "#nested_parens_interpolated"
					}
				]
			},
			{
				begin: "(qr)\\s*'",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "'",
				name: "string.regexp.compile.single-quote.perl",
				patterns: [
					{
						include: "#escaped_char"
					}
				]
			},
			{
				begin: "(qr)\\s*([^\\s\\w'\\{\\[\\(\\<])",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "\\2",
				name: "string.regexp.compile.simple-delimiter.perl",
				patterns: [
					{
						comment: "This is to prevent thinks like qr/foo$/ to treat $/ as a variable",
						match: "\\$(?=[^\\s\\w'\\{\\[\\(\\<])",
						name: "keyword.control.anchor.perl"
					},
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					},
					{
						include: "#nested_parens_interpolated"
					}
				]
			}
		]
	},
	{
		applyEndPatternLast: 1,
		begin: "(?<!\\{|\\+|\\-)\\b(?=m\\s*[^\\sa-zA-Z0-9])",
		comment: "string.regexp.find-m.perl",
		end: "((([egimosxradlupcn]*)))(?=(\\s+\\S|\\s*[;\\,\\#\\{\\}\\)]|\\s*$))",
		endCaptures: {
			"1": {
				name: "string.regexp.find-m.perl"
			},
			"2": {
				name: "punctuation.definition.string.perl"
			},
			"3": {
				name: "keyword.control.regexp-option.perl"
			}
		},
		patterns: [
			{
				begin: "(m)\\s*\\{",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "\\}",
				name: "string.regexp.find-m.nested_braces.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					},
					{
						include: "#nested_braces_interpolated"
					}
				]
			},
			{
				begin: "(m)\\s*\\[",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "\\]",
				name: "string.regexp.find-m.nested_brackets.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					},
					{
						include: "#nested_brackets_interpolated"
					}
				]
			},
			{
				begin: "(m)\\s*<",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: ">",
				name: "string.regexp.find-m.nested_ltgt.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					},
					{
						include: "#nested_ltgt_interpolated"
					}
				]
			},
			{
				begin: "(m)\\s*\\(",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "\\)",
				name: "string.regexp.find-m.nested_parens.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					},
					{
						include: "#nested_parens_interpolated"
					}
				]
			},
			{
				begin: "(m)\\s*'",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "'",
				name: "string.regexp.find-m.single-quote.perl",
				patterns: [
					{
						include: "#escaped_char"
					}
				]
			},
			{
				begin: "\\G(?<!\\{|\\+|\\-)(m)(?!_)\\s*([^\\sa-zA-Z0-9'\\{\\[\\(\\<])",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "\\2",
				name: "string.regexp.find-m.simple-delimiter.perl",
				patterns: [
					{
						comment: "This is to prevent thinks like qr/foo$/ to treat $/ as a variable",
						match: "\\$(?=[^\\sa-zA-Z0-9'\\{\\[\\(\\<])",
						name: "keyword.control.anchor.perl"
					},
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					},
					{
						begin: "\\[",
						beginCaptures: {
							"1": {
								name: "punctuation.definition.character-class.begin.perl"
							}
						},
						end: "\\]",
						endCaptures: {
							"1": {
								name: "punctuation.definition.character-class.end.perl"
							}
						},
						name: "constant.other.character-class.set.perl",
						patterns: [
							{
								comment: "This is to prevent thinks like qr/foo$/ to treat $/ as a variable",
								match: "\\$(?=[^\\s\\w'\\{\\[\\(\\<])",
								name: "keyword.control.anchor.perl"
							},
							{
								include: "#escaped_char"
							}
						]
					},
					{
						include: "#nested_parens_interpolated"
					}
				]
			}
		]
	},
	{
		applyEndPatternLast: 1,
		begin: "\\b(?=(?<!\\&)(s)(\\s+\\S|\\s*[;\\,\\{\\}\\(\\)\\[<]|$))",
		comment: "string.regexp.replace.perl",
		end: "((([egimosxradlupcn]*)))(?=(\\s+\\S|\\s*[;\\,\\{\\}\\)\\]>]|\\s*$))",
		endCaptures: {
			"1": {
				name: "string.regexp.replace.perl"
			},
			"2": {
				name: "punctuation.definition.string.perl"
			},
			"3": {
				name: "keyword.control.regexp-option.perl"
			}
		},
		patterns: [
			{
				begin: "(s)\\s*\\{",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "\\}",
				name: "string.regexp.nested_braces.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#nested_braces"
					}
				]
			},
			{
				begin: "(s)\\s*\\[",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "\\]",
				name: "string.regexp.nested_brackets.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#nested_brackets"
					}
				]
			},
			{
				begin: "(s)\\s*<",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: ">",
				name: "string.regexp.nested_ltgt.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#nested_ltgt"
					}
				]
			},
			{
				begin: "(s)\\s*\\(",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "\\)",
				name: "string.regexp.nested_parens.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#nested_parens"
					}
				]
			},
			{
				begin: "\\{",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					}
				},
				end: "\\}",
				name: "string.regexp.format.nested_braces.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					},
					{
						include: "#nested_braces_interpolated"
					}
				]
			},
			{
				begin: "\\[",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					}
				},
				end: "\\]",
				name: "string.regexp.format.nested_brackets.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					},
					{
						include: "#nested_brackets_interpolated"
					}
				]
			},
			{
				begin: "<",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					}
				},
				end: ">",
				name: "string.regexp.format.nested_ltgt.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					},
					{
						include: "#nested_ltgt_interpolated"
					}
				]
			},
			{
				begin: "\\(",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					}
				},
				end: "\\)",
				name: "string.regexp.format.nested_parens.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					},
					{
						include: "#nested_parens_interpolated"
					}
				]
			},
			{
				begin: "'",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					}
				},
				end: "'",
				name: "string.regexp.format.single_quote.perl",
				patterns: [
					{
						match: "\\\\['\\\\]",
						name: "constant.character.escape.perl"
					}
				]
			},
			{
				begin: "([^\\s\\w\\[({<;])",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					}
				},
				end: "\\1",
				name: "string.regexp.format.simple_delimiter.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					}
				]
			},
			{
				match: "\\s+"
			}
		]
	},
	{
		begin: "\\b(?=s([^\\sa-zA-Z0-9\\[({<]).*\\1([egimosxradlupcn]*)([\\}\\)\\;\\,]|\\s+))",
		comment: "string.regexp.replaceXXX",
		end: "((([egimosxradlupcn]*)))(?=([\\}\\)\\;\\,]|\\s+|\\s*$))",
		endCaptures: {
			"1": {
				name: "string.regexp.replace.perl"
			},
			"2": {
				name: "punctuation.definition.string.perl"
			},
			"3": {
				name: "keyword.control.regexp-option.perl"
			}
		},
		patterns: [
			{
				begin: "(s\\s*)([^\\sa-zA-Z0-9\\[({<])",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "(?=\\2)",
				name: "string.regexp.replaceXXX.simple_delimiter.perl",
				patterns: [
					{
						include: "#escaped_char"
					}
				]
			},
			{
				begin: "'",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					}
				},
				end: "'",
				name: "string.regexp.replaceXXX.format.single_quote.perl",
				patterns: [
					{
						match: "\\\\['\\\\]",
						name: "constant.character.escape.perl.perl"
					}
				]
			},
			{
				begin: "([^\\sa-zA-Z0-9\\[({<])",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					}
				},
				end: "\\1",
				name: "string.regexp.replaceXXX.format.simple_delimiter.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					}
				]
			}
		]
	},
	{
		begin: "\\b(?=(?<!\\\\)s\\s*([^\\s\\w\\[({<>]))",
		comment: "string.regexp.replace.extended",
		end: "((([egimosradlupc]*x[egimosradlupc]*)))\\b",
		endCaptures: {
			"1": {
				name: "string.regexp.replace.perl"
			},
			"2": {
				name: "punctuation.definition.string.perl"
			},
			"3": {
				name: "keyword.control.regexp-option.perl"
			}
		},
		patterns: [
			{
				begin: "(s)\\s*(.)",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					},
					"1": {
						name: "support.function.perl"
					}
				},
				end: "(?=\\2)",
				name: "string.regexp.replace.extended.simple_delimiter.perl",
				patterns: [
					{
						include: "#escaped_char"
					}
				]
			},
			{
				begin: "'",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					}
				},
				end: "'(?=[egimosradlupc]*x[egimosradlupc]*)\\b",
				name: "string.regexp.replace.extended.simple_delimiter.perl",
				patterns: [
					{
						include: "#escaped_char"
					}
				]
			},
			{
				begin: "(.)",
				captures: {
					"0": {
						name: "punctuation.definition.string.perl"
					}
				},
				end: "\\1(?=[egimosradlupc]*x[egimosradlupc]*)\\b",
				name: "string.regexp.replace.extended.simple_delimiter.perl",
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					}
				]
			}
		]
	},
	{
		begin: "(?<=\\(|\\{|~|&|\\||if|unless|^)\\s*((\\/))",
		beginCaptures: {
			"1": {
				name: "string.regexp.find.perl"
			},
			"2": {
				name: "punctuation.definition.string.perl"
			}
		},
		contentName: "string.regexp.find.perl",
		end: "((\\1([egimosxradlupcn]*)))(?=(\\s+\\S|\\s*[;\\,\\#\\{\\}\\)]|\\s*$))",
		endCaptures: {
			"1": {
				name: "string.regexp.find.perl"
			},
			"2": {
				name: "punctuation.definition.string.perl"
			},
			"3": {
				name: "keyword.control.regexp-option.perl"
			}
		},
		patterns: [
			{
				comment: "This is to prevent thinks like /foo$/ to treat $/ as a variable",
				match: "\\$(?=\\/)",
				name: "keyword.control.anchor.perl"
			},
			{
				include: "#escaped_char"
			},
			{
				include: "#variable"
			}
		]
	},
	{
		captures: {
			"1": {
				name: "constant.other.key.perl"
			}
		},
		match: "\\b(\\w+)\\s*(?==>)"
	},
	{
		match: "(?<={)\\s*\\w+\\s*(?=})",
		name: "constant.other.bareword.perl"
	},
	{
		captures: {
			"1": {
				name: "keyword.control.perl"
			},
			"2": {
				name: "entity.name.type.class.perl"
			}
		},
		match: "^\\s*(package)\\s+([^\\s;]+)",
		name: "meta.class.perl"
	},
	{
		captures: {
			"1": {
				name: "storage.type.sub.perl"
			},
			"2": {
				name: "entity.name.function.perl"
			},
			"3": {
				name: "storage.type.method.perl"
			}
		},
		match: "\\b(sub)(?:\\s+([-a-zA-Z0-9_]+))?\\s*(?:\\([\\$\\@\\*;]*\\))?[^\\w\\{]",
		name: "meta.function.perl"
	},
	{
		captures: {
			"1": {
				name: "entity.name.function.perl"
			},
			"2": {
				name: "punctuation.definition.parameters.perl"
			},
			"3": {
				name: "variable.parameter.function.perl"
			}
		},
		match: "^\\s*(BEGIN|UNITCHECK|CHECK|INIT|END|DESTROY)\\b",
		name: "meta.function.perl"
	},
	{
		begin: "^(?=(\\t| {4}))",
		end: "(?=[^\\t\\s])",
		name: "meta.leading-tabs",
		patterns: [
			{
				captures: {
					"1": {
						name: "meta.odd-tab"
					},
					"2": {
						name: "meta.even-tab"
					}
				},
				match: "(\\t| {4})(\\t| {4})?"
			}
		]
	},
	{
		captures: {
			"1": {
				name: "support.function.perl"
			},
			"2": {
				name: "punctuation.definition.string.perl"
			},
			"5": {
				name: "punctuation.definition.string.perl"
			},
			"8": {
				name: "punctuation.definition.string.perl"
			}
		},
		match: "\\b(tr|y)\\s*([^A-Za-z0-9\\s])(.*?)(?<!\\\\)(\\\\{2})*(\\2)(.*?)(?<!\\\\)(\\\\{2})*(\\2)",
		name: "string.regexp.replace.perl"
	},
	{
		match: "\\b(__FILE__|__LINE__|__PACKAGE__|__SUB__)\\b",
		name: "constant.language.perl"
	},
	{
		begin: "\\b(__DATA__|__END__)\\n?",
		beginCaptures: {
			"1": {
				name: "constant.language.perl"
			}
		},
		contentName: "comment.block.documentation.perl",
		end: "\\z",
		patterns: [
			{
				include: "#pod"
			}
		]
	},
	{
		match: "(?<!->)\\b(continue|default|die|do|else|elsif|exit|for|foreach|given|goto|if|last|next|redo|return|select|unless|until|wait|when|while|switch|case|require|use|eval)\\b",
		name: "keyword.control.perl"
	},
	{
		match: "\\b(my|our|local)\\b",
		name: "storage.modifier.perl"
	},
	{
		match: "(?<!\\w)\\-[rwxoRWXOezsfdlpSbctugkTBMAC]\\b",
		name: "keyword.operator.filetest.perl"
	},
	{
		match: "\\b(and|or|xor|as|not)\\b",
		name: "keyword.operator.logical.perl"
	},
	{
		match: "(<=>|=>|->)",
		name: "keyword.operator.comparison.perl"
	},
	{
		include: "#heredoc"
	},
	{
		begin: "\\bqq\\s*([^\\(\\{\\[\\<\\w\\s])",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\1",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.quoted.other.qq.perl",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#variable"
			}
		]
	},
	{
		begin: "\\bqx\\s*([^'\\(\\{\\[\\<\\w\\s])",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\1",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.interpolated.qx.perl",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#variable"
			}
		]
	},
	{
		begin: "\\bqx\\s*'",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "'",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.interpolated.qx.single-quote.perl",
		patterns: [
			{
				include: "#escaped_char"
			}
		]
	},
	{
		begin: "\"",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\"",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.quoted.double.perl",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#variable"
			}
		]
	},
	{
		begin: "(?<!->)\\bqw?\\s*([^\\(\\{\\[\\<\\w\\s])",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\1",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.quoted.other.q.perl"
	},
	{
		begin: "'",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "'",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.quoted.single.perl",
		patterns: [
			{
				match: "\\\\['\\\\]",
				name: "constant.character.escape.perl"
			}
		]
	},
	{
		begin: "`",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "`",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.interpolated.perl",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#variable"
			}
		]
	},
	{
		begin: "(?<!->)\\bqq\\s*\\(",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\)",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.quoted.other.qq-paren.perl",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#nested_parens_interpolated"
			},
			{
				include: "#variable"
			}
		]
	},
	{
		begin: "\\bqq\\s*\\{",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.quoted.other.qq-brace.perl",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#nested_braces_interpolated"
			},
			{
				include: "#variable"
			}
		]
	},
	{
		begin: "\\bqq\\s*\\[",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\]",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.quoted.other.qq-bracket.perl",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#nested_brackets_interpolated"
			},
			{
				include: "#variable"
			}
		]
	},
	{
		begin: "\\bqq\\s*\\<",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\>",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.quoted.other.qq-ltgt.perl",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#nested_ltgt_interpolated"
			},
			{
				include: "#variable"
			}
		]
	},
	{
		begin: "(?<!->)\\bqx\\s*\\(",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\)",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.interpolated.qx-paren.perl",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#nested_parens_interpolated"
			},
			{
				include: "#variable"
			}
		]
	},
	{
		begin: "\\bqx\\s*\\{",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.interpolated.qx-brace.perl",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#nested_braces_interpolated"
			},
			{
				include: "#variable"
			}
		]
	},
	{
		begin: "\\bqx\\s*\\[",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\]",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.interpolated.qx-bracket.perl",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#nested_brackets_interpolated"
			},
			{
				include: "#variable"
			}
		]
	},
	{
		begin: "\\bqx\\s*\\<",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\>",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.interpolated.qx-ltgt.perl",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#nested_ltgt_interpolated"
			},
			{
				include: "#variable"
			}
		]
	},
	{
		begin: "(?<!->)\\bqw?\\s*\\(",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\)",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.quoted.other.q-paren.perl",
		patterns: [
			{
				include: "#nested_parens"
			}
		]
	},
	{
		begin: "\\bqw?\\s*\\{",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.quoted.other.q-brace.perl",
		patterns: [
			{
				include: "#nested_braces"
			}
		]
	},
	{
		begin: "\\bqw?\\s*\\[",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\]",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.quoted.other.q-bracket.perl",
		patterns: [
			{
				include: "#nested_brackets"
			}
		]
	},
	{
		begin: "\\bqw?\\s*\\<",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "\\>",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.quoted.other.q-ltgt.perl",
		patterns: [
			{
				include: "#nested_ltgt"
			}
		]
	},
	{
		begin: "^__\\w+__",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.perl"
			}
		},
		end: "$",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.perl"
			}
		},
		name: "string.unquoted.program-block.perl"
	},
	{
		begin: "\\b(format)\\s+(\\w+)\\s*=",
		beginCaptures: {
			"1": {
				name: "support.function.perl"
			},
			"2": {
				name: "entity.name.function.format.perl"
			}
		},
		end: "^\\.\\s*$",
		name: "meta.format.perl",
		patterns: [
			{
				include: "#line_comment"
			},
			{
				include: "#variable"
			}
		]
	},
	{
		captures: {
			"1": {
				name: "support.function.perl"
			},
			"2": {
				name: "entity.name.function.perl"
			}
		},
		match: "\\b(x)\\s*(\\d+)\\b"
	},
	{
		match: "\\b(ARGV|DATA|ENV|SIG|STDERR|STDIN|STDOUT|atan2|bind|binmode|bless|caller|chdir|chmod|chomp|chop|chown|chr|chroot|close|closedir|cmp|connect|cos|crypt|dbmclose|dbmopen|defined|delete|dump|each|endgrent|endhostent|endnetent|endprotoent|endpwent|endservent|eof|eq|eval|exec|exists|exp|fcntl|fileno|flock|fork|formline|ge|getc|getgrent|getgrgid|getgrnam|gethostbyaddr|gethostbyname|gethostent|getlogin|getnetbyaddr|getnetbyname|getnetent|getpeername|getpgrp|getppid|getpriority|getprotobyname|getprotobynumber|getprotoent|getpwent|getpwnam|getpwuid|getservbyname|getservbyport|getservent|getsockname|getsockopt|glob|gmtime|grep|gt|hex|import|index|int|ioctl|join|keys|kill|lc|lcfirst|le|length|link|listen|local|localtime|log|lstat|lt|m|map|mkdir|msgctl|msgget|msgrcv|msgsnd|ne|no|oct|open|opendir|ord|pack|pipe|pop|pos|print|printf|push|quotemeta|rand|read|readdir|readlink|recv|ref|rename|reset|reverse|rewinddir|rindex|rmdir|s|say|scalar|seek|seekdir|semctl|semget|semop|send|setgrent|sethostent|setnetent|setpgrp|setpriority|setprotoent|setpwent|setservent|setsockopt|shift|shmctl|shmget|shmread|shmwrite|shutdown|sin|sleep|socket|socketpair|sort|splice|split|sprintf|sqrt|srand|stat|study|substr|symlink|syscall|sysopen|sysread|system|syswrite|tell|telldir|tie|tied|time|times|tr|truncate|uc|ucfirst|umask|undef|unlink|unpack|unshift|untie|utime|values|vec|waitpid|wantarray|warn|write|y)\\b",
		name: "support.function.perl"
	},
	{
		captures: {
			"1": {
				name: "punctuation.section.scope.begin.perl"
			},
			"2": {
				name: "punctuation.section.scope.end.perl"
			}
		},
		comment: "Match empty brackets for ↩ snippet",
		match: "(\\{)(\\})"
	},
	{
		captures: {
			"1": {
				name: "punctuation.section.scope.begin.perl"
			},
			"2": {
				name: "punctuation.section.scope.end.perl"
			}
		},
		comment: "Match empty parenthesis for ↩ snippet",
		match: "(\\()(\\))"
	}
];
const repository = {
	escaped_char: {
		patterns: [
			{
				match: "\\\\\\d+",
				name: "constant.character.escape.perl"
			},
			{
				match: "\\\\c[^\\s\\\\]",
				name: "constant.character.escape.perl"
			},
			{
				match: "\\\\g(?:\\{(?:\\w*|-\\d+)\\}|\\d+)",
				name: "constant.character.escape.perl"
			},
			{
				match: "\\\\k(?:\\{\\w*\\}|<\\w*>|'\\w*')",
				name: "constant.character.escape.perl"
			},
			{
				match: "\\\\N\\{[^\\}]*\\}",
				name: "constant.character.escape.perl"
			},
			{
				match: "\\\\o\\{\\d*\\}",
				name: "constant.character.escape.perl"
			},
			{
				match: "\\\\(?:p|P)(?:\\{\\w*\\}|P)",
				name: "constant.character.escape.perl"
			},
			{
				match: "\\\\x(?:[0-9a-zA-Z]{2}|\\{\\w*\\})?",
				name: "constant.character.escape.perl"
			},
			{
				match: "\\\\.",
				name: "constant.character.escape.perl"
			}
		]
	},
	heredoc: {
		patterns: [
			{
				begin: "((((<<(~)?) *')(HTML)(')))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.raw.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.html",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "text.html.basic",
						patterns: [
							{
								include: "text.html.basic"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *')(XML)(')))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.raw.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.xml",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "text.xml",
						patterns: [
							{
								include: "text.xml"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *')(CSS)(')))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.raw.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.css",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "source.css",
						patterns: [
							{
								include: "source.css"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *')(JAVASCRIPT)(')))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.raw.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.js",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "source.js",
						patterns: [
							{
								include: "source.js"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *')(SQL)(')))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.raw.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.sql",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "source.sql",
						patterns: [
							{
								include: "source.sql"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *')(POSTSCRIPT)(')))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.raw.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.postscript",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "source.postscript",
						patterns: [
							{
								include: "source.postscript"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *')([^']*)(')))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.raw.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				}
			},
			{
				begin: "((((<<(~)?) *\\\\)((?![=\\d\\$\\( ])[^;,'\"`\\s\\)]*)()))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.raw.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.raw.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				}
			},
			{
				begin: "((((<<(~)?) *\")(HTML)(\")))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.interpolated.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.html",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "text.html.basic",
						patterns: [
							{
								include: "#escaped_char"
							},
							{
								include: "#variable"
							},
							{
								include: "text.html.basic"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *\")(XML)(\")))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.interpolated.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.xml",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "text.xml",
						patterns: [
							{
								include: "#escaped_char"
							},
							{
								include: "#variable"
							},
							{
								include: "text.xml"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *\")(CSS)(\")))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.interpolated.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.css",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "source.css",
						patterns: [
							{
								include: "#escaped_char"
							},
							{
								include: "#variable"
							},
							{
								include: "source.css"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *\")(JAVASCRIPT)(\")))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.interpolated.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.js",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "source.js",
						patterns: [
							{
								include: "#escaped_char"
							},
							{
								include: "#variable"
							},
							{
								include: "source.js"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *\")(SQL)(\")))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.interpolated.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.sql",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "source.sql",
						patterns: [
							{
								include: "#escaped_char"
							},
							{
								include: "#variable"
							},
							{
								include: "source.sql"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *\")(POSTSCRIPT)(\")))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.interpolated.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.postscript",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "source.postscript",
						patterns: [
							{
								include: "#escaped_char"
							},
							{
								include: "#variable"
							},
							{
								include: "source.postscript"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *\")([^\"]*)(\")))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.interpolated.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					}
				]
			},
			{
				begin: "((((<<(~)?) *)(HTML)()))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.interpolated.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.html",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "text.html.basic",
						patterns: [
							{
								include: "#escaped_char"
							},
							{
								include: "#variable"
							},
							{
								include: "text.html.basic"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *)(XML)()))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.interpolated.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.xml",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "text.xml",
						patterns: [
							{
								include: "#escaped_char"
							},
							{
								include: "#variable"
							},
							{
								include: "text.xml"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *)(CSS)()))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.interpolated.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.css",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "source.css",
						patterns: [
							{
								include: "#escaped_char"
							},
							{
								include: "#variable"
							},
							{
								include: "source.css"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *)(JAVASCRIPT)()))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.interpolated.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.js",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "source.js",
						patterns: [
							{
								include: "#escaped_char"
							},
							{
								include: "#variable"
							},
							{
								include: "source.js"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *)(SQL)()))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.interpolated.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.sql",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "source.sql",
						patterns: [
							{
								include: "#escaped_char"
							},
							{
								include: "#variable"
							},
							{
								include: "source.sql"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *)(POSTSCRIPT)()))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.interpolated.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				name: "meta.embedded.block.postscript",
				patterns: [
					{
						begin: "^",
						end: "\\n",
						name: "source.postscript",
						patterns: [
							{
								include: "#escaped_char"
							},
							{
								include: "#variable"
							},
							{
								include: "source.postscript"
							}
						]
					}
				]
			},
			{
				begin: "((((<<(~)?) *)((?![=\\d\\$\\( ])[^;,'\"`\\s\\)]*)()))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.interpolated.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					}
				]
			},
			{
				begin: "((((<<(~)?) *`)([^`]*)(`)))(.*)\\n?",
				beginCaptures: {
					"1": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"2": {
						name: "punctuation.definition.string.begin.perl"
					},
					"3": {
						name: "punctuation.definition.delimiter.begin.perl"
					},
					"7": {
						name: "punctuation.definition.delimiter.end.perl"
					},
					"8": {
						patterns: [
							{
								include: "$self"
							}
						]
					}
				},
				contentName: "string.unquoted.heredoc.shell.perl",
				end: "^((?!\\5)\\s+)?((\\6))$",
				endCaptures: {
					"2": {
						name: "string.unquoted.heredoc.interpolated.perl"
					},
					"3": {
						name: "punctuation.definition.string.end.perl"
					}
				},
				patterns: [
					{
						include: "#escaped_char"
					},
					{
						include: "#variable"
					}
				]
			}
		]
	},
	line_comment: {
		patterns: [
			{
				begin: "(^[ \\t]+)?(?=#)",
				beginCaptures: {
					"1": {
						name: "punctuation.whitespace.comment.leading.perl"
					}
				},
				end: "(?!\\G)",
				patterns: [
					{
						begin: "#",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.comment.perl"
							}
						},
						end: "\\n",
						name: "comment.line.number-sign.perl"
					}
				]
			}
		]
	},
	nested_braces: {
		begin: "\\{",
		captures: {
			"1": {
				name: "punctuation.section.scope.perl"
			}
		},
		end: "\\}",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#nested_braces"
			}
		]
	},
	nested_braces_interpolated: {
		begin: "\\{",
		captures: {
			"1": {
				name: "punctuation.section.scope.perl"
			}
		},
		end: "\\}",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#variable"
			},
			{
				include: "#nested_braces_interpolated"
			}
		]
	},
	nested_brackets: {
		begin: "\\[",
		captures: {
			"1": {
				name: "punctuation.section.scope.perl"
			}
		},
		end: "\\]",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#nested_brackets"
			}
		]
	},
	nested_brackets_interpolated: {
		begin: "\\[",
		captures: {
			"1": {
				name: "punctuation.section.scope.perl"
			}
		},
		end: "\\]",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#variable"
			},
			{
				include: "#nested_brackets_interpolated"
			}
		]
	},
	nested_ltgt: {
		begin: "<",
		captures: {
			"1": {
				name: "punctuation.section.scope.perl"
			}
		},
		end: ">",
		patterns: [
			{
				include: "#nested_ltgt"
			}
		]
	},
	nested_ltgt_interpolated: {
		begin: "<",
		captures: {
			"1": {
				name: "punctuation.section.scope.perl"
			}
		},
		end: ">",
		patterns: [
			{
				include: "#variable"
			},
			{
				include: "#nested_ltgt_interpolated"
			}
		]
	},
	nested_parens: {
		begin: "\\(",
		captures: {
			"1": {
				name: "punctuation.section.scope.perl"
			}
		},
		end: "\\)",
		patterns: [
			{
				include: "#escaped_char"
			},
			{
				include: "#nested_parens"
			}
		]
	},
	nested_parens_interpolated: {
		begin: "\\(",
		captures: {
			"1": {
				name: "punctuation.section.scope.perl"
			}
		},
		end: "\\)",
		patterns: [
			{
				comment: "This is to prevent thinks like qr/foo$/ to treat $/ as a variable",
				match: "\\$(?=[^\\s\\w'\\{\\[\\(\\<])",
				name: "keyword.control.anchor.perl"
			},
			{
				include: "#escaped_char"
			},
			{
				include: "#variable"
			},
			{
				include: "#nested_parens_interpolated"
			}
		]
	},
	pod: {
		patterns: [
			{
				match: "^=(pod|back|cut)\\b",
				name: "storage.type.class.pod.perl"
			},
			{
				begin: "^(=begin)\\s+(html)\\s*$",
				beginCaptures: {
					"1": {
						name: "storage.type.class.pod.perl"
					},
					"2": {
						name: "variable.other.pod.perl"
					}
				},
				contentName: "text.embedded.html.basic",
				end: "^(=end)\\s+(html)|^(?==cut)",
				endCaptures: {
					"1": {
						name: "storage.type.class.pod.perl"
					},
					"2": {
						name: "variable.other.pod.perl"
					}
				},
				name: "meta.embedded.pod.perl",
				patterns: [
					{
						include: "text.html.basic"
					}
				]
			},
			{
				captures: {
					"1": {
						name: "storage.type.class.pod.perl"
					},
					"2": {
						name: "variable.other.pod.perl",
						patterns: [
							{
								include: "#pod-formatting"
							}
						]
					}
				},
				match: "^(=(?:head[1-4]|item|over|encoding|begin|end|for))\\b\\s*(.*)"
			},
			{
				include: "#pod-formatting"
			}
		]
	},
	"pod-formatting": {
		patterns: [
			{
				captures: {
					"1": {
						name: "markup.italic.pod.perl"
					},
					"2": {
						name: "markup.italic.pod.perl"
					}
				},
				match: "I(?:<([^<>]+)>|<+(\\s+(?:(?<!\\s)>|[^>])+\\s+)>+)",
				name: "entity.name.type.instance.pod.perl"
			},
			{
				captures: {
					"1": {
						name: "markup.bold.pod.perl"
					},
					"2": {
						name: "markup.bold.pod.perl"
					}
				},
				match: "B(?:<([^<>]+)>|<+(\\s+(?:(?<!\\s)>|[^>])+\\s+)>+)",
				name: "entity.name.type.instance.pod.perl"
			},
			{
				captures: {
					"1": {
						name: "markup.raw.pod.perl"
					},
					"2": {
						name: "markup.raw.pod.perl"
					}
				},
				match: "C(?:<([^<>]+)>|<+(\\\\s+(?:(?<!\\\\s)>|[^>])+\\\\s+)>+)",
				name: "entity.name.type.instance.pod.perl"
			},
			{
				captures: {
					"1": {
						name: "markup.underline.link.hyperlink.pod.perl"
					}
				},
				match: "L<([^>]+)>",
				name: "entity.name.type.instance.pod.perl"
			},
			{
				match: "[EFSXZ]<[^>]*>",
				name: "entity.name.type.instance.pod.perl"
			}
		]
	},
	variable: {
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.variable.perl"
					}
				},
				match: "(\\$)&(?![A-Za-z0-9_])",
				name: "variable.other.regexp.match.perl"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.variable.perl"
					}
				},
				match: "(\\$)`(?![A-Za-z0-9_])",
				name: "variable.other.regexp.pre-match.perl"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.variable.perl"
					}
				},
				match: "(\\$)'(?![A-Za-z0-9_])",
				name: "variable.other.regexp.post-match.perl"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.variable.perl"
					}
				},
				match: "(\\$)\\+(?![A-Za-z0-9_])",
				name: "variable.other.regexp.last-paren-match.perl"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.variable.perl"
					}
				},
				match: "(\\$)\"(?![A-Za-z0-9_])",
				name: "variable.other.readwrite.list-separator.perl"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.variable.perl"
					}
				},
				match: "(\\$)0(?![A-Za-z0-9_])",
				name: "variable.other.predefined.program-name.perl"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.variable.perl"
					}
				},
				match: "(\\$)[_ab\\*\\.\\/\\|,\\\\;#%=\\-~^:?!\\$<>\\(\\)\\[\\]@](?![A-Za-z0-9_])",
				name: "variable.other.predefined.perl"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.variable.perl"
					}
				},
				match: "(\\$)[0-9]+(?![A-Za-z0-9_])",
				name: "variable.other.subpattern.perl"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.variable.perl"
					}
				},
				match: "([\\$\\@\\%](#)?)([a-zA-Zx7f-xff\\$]|::)([a-zA-Z0-9_x7f-xff\\$]|::)*\\b",
				name: "variable.other.readwrite.global.perl"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.variable.perl"
					},
					"2": {
						name: "punctuation.definition.variable.perl"
					}
				},
				match: "(\\$\\{)(?:[a-zA-Zx7f-xff\\$]|::)(?:[a-zA-Z0-9_x7f-xff\\$]|::)*(\\})",
				name: "variable.other.readwrite.global.perl"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.variable.perl"
					}
				},
				match: "([\\$\\@\\%](#)?)[0-9_]\\b",
				name: "variable.other.readwrite.global.special.perl"
			}
		]
	}
};
const perl_tmLanguage = {
	information_for_contributors: information_for_contributors,
	version: version,
	name: name,
	scopeName: scopeName,
	comment: comment,
	patterns: patterns,
	repository: repository
};




/***/ })

};
;