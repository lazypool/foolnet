"use strict";
exports.id = 3976;
exports.ids = [3976];
exports.modules = {

/***/ 63976:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ imba_tmLanguage),
/* harmony export */   fileTypes: () => (/* binding */ fileTypes),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   patterns: () => (/* binding */ patterns),
/* harmony export */   repository: () => (/* binding */ repository),
/* harmony export */   scopeName: () => (/* binding */ scopeName),
/* harmony export */   uuid: () => (/* binding */ uuid)
/* harmony export */ });
const name = "imba";
const scopeName = "source.imba";
const fileTypes = [
	"imba",
	"imba2"
];
const uuid = "ef98eb90-bf9b-11e4-bb52-0800200c9a67";
const patterns = [
	{
		include: "#root"
	},
	{
		name: "comment.line.shebang.imba",
		match: "\\A(#!).*(?=$)",
		captures: {
			"1": {
				name: "punctuation.definition.comment.imba"
			}
		}
	}
];
const repository = {
	root: {
		patterns: [
			{
				include: "#block"
			}
		]
	},
	block: {
		patterns: [
			{
				include: "#style-declaration"
			},
			{
				include: "#object-keys"
			},
			{
				include: "#tag-literal"
			},
			{
				include: "#regex"
			},
			{
				include: "#keywords"
			},
			{
				include: "#comment"
			},
			{
				include: "#literal"
			},
			{
				include: "#plain-identifiers"
			},
			{
				include: "#plain-accessors"
			},
			{
				include: "#pairs"
			},
			{
				include: "#invalid-indentation"
			}
		]
	},
	expr: {
		patterns: [
			{
				include: "#style-declaration"
			},
			{
				include: "#object-keys"
			},
			{
				include: "#tag-literal"
			},
			{
				include: "#regex"
			},
			{
				include: "#keywords"
			},
			{
				include: "#comment"
			},
			{
				include: "#literal"
			},
			{
				include: "#plain-identifiers"
			},
			{
				include: "#plain-accessors"
			},
			{
				include: "#pairs"
			}
		]
	},
	literal: {
		patterns: [
			{
				include: "#number-with-unit-literal"
			},
			{
				include: "#numeric-literal"
			},
			{
				include: "#boolean-literal"
			},
			{
				include: "#null-literal"
			},
			{
				include: "#undefined-literal"
			},
			{
				include: "#numericConstant-literal"
			},
			{
				include: "#this-literal"
			},
			{
				include: "#global-literal"
			},
			{
				include: "#super-literal"
			},
			{
				include: "#type-literal"
			},
			{
				include: "#string"
			}
		]
	},
	pairs: {
		patterns: [
			{
				include: "#curly-braces"
			},
			{
				include: "#square-braces"
			},
			{
				include: "#round-braces"
			}
		]
	},
	"curly-braces": {
		begin: "\\s*(\\{)",
		beginCaptures: {
			"1": {
				name: "meta.brace.curly.imba"
			}
		},
		end: "\\}",
		endCaptures: {
			"0": {
				name: "meta.brace.curly.imba"
			}
		},
		patterns: [
			{
				include: "#expr"
			},
			{
				include: "#punctuation-comma"
			}
		]
	},
	"square-braces": {
		begin: "\\s*(\\[)",
		beginCaptures: {
			"1": {
				name: "meta.brace.square.imba"
			}
		},
		end: "\\]",
		endCaptures: {
			"0": {
				name: "meta.brace.square.imba"
			}
		},
		patterns: [
			{
				include: "#expr"
			},
			{
				include: "#punctuation-comma"
			}
		]
	},
	"round-braces": {
		begin: "\\s*(\\()",
		beginCaptures: {
			"1": {
				name: "meta.brace.round.imba"
			}
		},
		end: "\\)",
		endCaptures: {
			"0": {
				name: "meta.brace.round.imba"
			}
		},
		patterns: [
			{
				include: "#expr"
			},
			{
				include: "#punctuation-comma"
			}
		]
	},
	keywords: {
		patterns: [
			{
				name: "keyword.control.imba",
				match: "(if|elif|else|unless|switch|when|then|do|import|export|for own|for|while|until|return|try|catch|await|finally|throw|as|continue|break|extend|augment)(?![_\\-$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
			},
			{
				name: "keyword.control.imba",
				match: "(?<=export\\s+)(default)(?![_\\-$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
			},
			{
				name: "keyword.control.imba",
				match: "(?<=import\\s+)(type)(?=\\s+[\\w\\{\\$\\_])"
			},
			{
				name: "keyword.control.imba",
				match: "(extend)\\s+(?=class|tag)"
			},
			{
				name: "keyword.control.imba",
				match: "(?<=[\\*\\}\\w\\$]\\s+)(from)(?=\\s+[\\\"\\'])"
			},
			{
				name: "storage.type.function.imba",
				match: "(def|get|set)(?![_\\-$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
			},
			{
				name: "storage.type.class.imba",
				match: "(tag|class|struct)(?![_\\-$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
			},
			{
				name: "storage.type.imba",
				match: "(let|const|constructor)(?![_\\-$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
			},
			{
				name: "storage.type.imba",
				match: "(prop|attr)(?![_\\-$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
			},
			{
				name: "storage.modifier.imba",
				match: "(static)\\s+"
			},
			{
				include: "#ops"
			},
			{
				name: "keyword.operator.assignment.imba",
				match: "(=|\\|\\|=|\\?\\?=|\\&\\&=|\\+=|\\-=|\\*=|\\^=|\\%=)"
			},
			{
				name: "keyword.operator.imba",
				match: "(\\>\\=?|\\<\\=?)"
			},
			{
				name: "keyword.operator.imba",
				match: "(of|delete|\\!?isa|typeof|in|new)(?![_\\-$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
			}
		]
	},
	ops: {
		patterns: [
			{
				name: "keyword.operator.spread.imba",
				match: "\\.\\.\\."
			},
			{
				name: "keyword.operator.assignment.compound.imba",
				match: "\\*=|(?<!\\()/=|%=|\\+=|\\-=|\\?=|\\?\\?=|=\\?"
			},
			{
				name: "keyword.operator.assignment.compound.bitwise.imba",
				match: "\\^=\\?|\\|=\\?|\\~=\\?|\\&=|\\^=|<<=|>>=|>>>=|\\|="
			},
			{
				name: "keyword.operator.bitwise.shift.imba",
				match: "<<|>>>|>>"
			},
			{
				name: "keyword.operator.comparison.imba",
				match: "===|!==|==|!=|~="
			},
			{
				name: "keyword.operator.relational.imba",
				match: "<=|>=|<>|<|>"
			},
			{
				match: "(\\!)\\s*(/)(?![/*])",
				captures: {
					"1": {
						name: "keyword.operator.logical.imba"
					},
					"2": {
						name: "keyword.operator.arithmetic.imba"
					}
				}
			},
			{
				name: "keyword.operator.logical.imba",
				match: "\\!|&&|\\|\\||\\?\\?|or\\b(?=\\s|$)|and\\b(?=\\s|$)"
			},
			{
				name: "keyword.operator.bitwise.imba",
				match: "\\&|~|\\^|\\|"
			},
			{
				name: "keyword.operator.assignment.imba",
				match: "\\="
			},
			{
				name: "keyword.operator.decrement.imba",
				match: "--"
			},
			{
				name: "keyword.operator.increment.imba",
				match: "\\+\\+"
			},
			{
				name: "keyword.operator.arithmetic.imba",
				match: "%|\\*|/|-|\\+"
			}
		]
	},
	"object-keys": {
		patterns: [
			{
				match: "[_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?\\:",
				name: "meta.object-literal.key"
			}
		]
	},
	"invalid-indentation": {
		patterns: [
			{
				name: "invalid.whitespace",
				match: "^[\\ ]+"
			},
			{
				name: "invalid.whitespace",
				match: "^\\t+\\s+"
			}
		]
	},
	"style-property": {
		patterns: [
			{
				name: "meta.property-name.css",
				begin: "(?=(?:[\\@\\.]+[\\!\\<\\>]?)?[\\w\\-\\$]+(?:[\\@\\.]+[\\!\\<\\>]?[\\w\\-\\$]+)*(?:\\s*\\:))",
				beginCaptures: {
					"1": {
						name: "support.function.calc.css"
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css"
					}
				},
				end: "\\s*\\:",
				endCaptures: {
					"0": {
						name: "punctuation.separator.key-value.css"
					}
				},
				patterns: [
					{
						name: "support.type.property-name.variable.css",
						match: "(?:--|\\$)[\\w\\-\\$]+"
					},
					{
						name: "support.type.property-name.modifier.breakpoint.css",
						match: "\\@[\\!\\<\\>]?[0-9]+"
					},
					{
						name: "support.type.property-name.modifier.css",
						match: "\\@[\\w\\-\\$]+"
					},
					{
						name: "support.type.property-name.modifier.up.css",
						match: "\\.\\.[\\w\\-\\$]+"
					},
					{
						name: "support.type.property-name.modifier.is.css",
						match: "\\.[\\w\\-\\$]+"
					},
					{
						name: "support.type.property-name.css",
						match: "[\\w\\-\\$]+"
					}
				]
			}
		]
	},
	"style-expr": {
		patterns: [
			{
				match: "(\\b[0-9][0-9_]*)(\\w+|%)?",
				captures: {
					"1": {
						name: "constant.numeric.integer.decimal.css"
					},
					"2": {
						name: "keyword.other.unit.css"
					}
				}
			},
			{
				name: "support.constant.property-value.var.css",
				match: "--[_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?"
			},
			{
				name: "support.constant.property-value.size.css",
				match: "(x+s|sm-|md-|lg-|sm|md|lg|x+l|hg|x+h)(?![\\w-])"
			},
			{
				name: "support.constant.property-value.css",
				match: "[_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?"
			},
			{
				name: "meta.function.css",
				begin: "(\\()",
				beginCaptures: {
					"1": {
						name: "punctuation.section.function.begin.bracket.round.css"
					}
				},
				end: "\\)",
				patterns: [
					{
						include: "#style-expr"
					}
				]
			}
		]
	},
	"inline-styles": {
		patterns: [
			{
				include: "#style-property"
			},
			{
				include: "#css-property-values"
			},
			{
				include: "#style-expr"
			}
		]
	},
	"style-declaration": {
		name: "meta.style.imba",
		begin: "^(\\t*)(?:(global|local|export)\\s+)?(?:(scoped)\\s+)?(css)\\s",
		beginCaptures: {
			"2": {
				name: "keyword.control.export.imba"
			},
			"3": {
				name: "storage.modifier.imba"
			},
			"4": {
				name: "storage.type.style.imba"
			}
		},
		end: "^(?!(\\1\\t|\\s*$))",
		patterns: [
			{
				include: "#css-selector"
			},
			{
				include: "#css-comment"
			},
			{
				include: "#nested-css-selector"
			},
			{
				include: "#inline-styles"
			}
		]
	},
	"nested-style-declaration": {
		name: "meta.style.imba",
		begin: "^(\\t+)(?=[\\n^]*\\&)",
		end: "^(?!(\\1\\t|\\s*$))",
		patterns: [
			{
				include: "#nested-css-selector"
			},
			{
				include: "#inline-styles"
			}
		]
	},
	"css-size-keywords": [
		{
			name: "support.constant.size.property-value.css",
			match: "(x+s|sm-|md-|lg-|sm|md|lg|x+l|hg|x+h)(?![\\w-])"
		}
	],
	"css-color-keywords": {
		patterns: [
			{
				name: "support.constant.color.w3c-standard-color-name.css",
				match: "(?i)(?<![\\w-])(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)(?![\\w-])"
			},
			{
				name: "support.constant.color.w3c-extended-color-name.css",
				match: "(?xi) (?<![\\w-])\n(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood\n|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan\n|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange\n|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise\n|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen\n|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki\n|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow\n|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray\n|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue\n|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise\n|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered\n|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum\n|powderblue|rebeccapurple|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell\n|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato\n|transparent|turquoise|violet|wheat|whitesmoke|yellowgreen)\n(?![\\w-])"
			},
			{
				name: "support.constant.color.current.css",
				match: "(?i)(?<![\\w-])currentColor(?![\\w-])"
			}
		]
	},
	"css-functions": {
		patterns: [
			{
				name: "meta.function.calc.css",
				begin: "(?i)(?<![\\w-])(calc)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.calc.css"
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css"
					}
				},
				patterns: [
					{
						name: "keyword.operator.arithmetic.css",
						match: "[*/]|(?<=\\s|^)[-+](?=\\s|$)"
					},
					{
						include: "#css-property-values"
					}
				]
			},
			{
				name: "meta.function.color.css",
				begin: "(?i)(?<![\\w-])(rgba?|hsla?)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.misc.css"
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css"
					}
				},
				patterns: [
					{
						include: "#css-property-values"
					}
				]
			},
			{
				name: "meta.function.gradient.css",
				begin: "(?xi) (?<![\\w-])\n(\n  (?:-webkit-|-moz-|-o-)?    # Accept prefixed/historical variants\n  (?:repeating-)?            # \"Repeating\"-type gradient\n  (?:linear|radial|conic)    # Shape\n  -gradient\n)\n(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.gradient.css"
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css"
					}
				},
				patterns: [
					{
						name: "keyword.operator.gradient.css",
						match: "(?i)(?<![\\w-])(from|to|at)(?![\\w-])"
					},
					{
						include: "#css-property-values"
					}
				]
			},
			{
				name: "meta.function.gradient.invalid.deprecated.gradient.css",
				begin: "(?i)(?<![\\w-])(-webkit-gradient)(\\()",
				beginCaptures: {
					"1": {
						name: "invalid.deprecated.gradient.function.css"
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css"
					}
				},
				patterns: [
					{
						begin: "(?i)(?<![\\w-])(from|to|color-stop)(\\()",
						beginCaptures: {
							"1": {
								name: "invalid.deprecated.function.css"
							},
							"2": {
								name: "punctuation.section.function.begin.bracket.round.css"
							}
						},
						end: "\\)",
						endCaptures: {
							"0": {
								name: "punctuation.section.function.end.bracket.round.css"
							}
						},
						patterns: [
							{
								include: "#css-property-values"
							}
						]
					},
					{
						include: "#css-property-values"
					}
				]
			},
			{
				name: "meta.function.misc.css",
				begin: "(?xi) (?<![\\w-])\n(annotation|attr|blur|brightness|character-variant|contrast|counters?\n|cross-fade|drop-shadow|element|fit-content|format|grayscale|hue-rotate\n|image-set|invert|local|minmax|opacity|ornaments|repeat|saturate|sepia\n|styleset|stylistic|swash|symbols)\n(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.misc.css"
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css"
					}
				},
				patterns: [
					{
						name: "constant.numeric.other.density.css",
						match: "(?i)(?<=[,\\s\"]|\\*/|^)\\d+x(?=[\\s,\"')]|/\\*|$)"
					},
					{
						include: "#css-property-values"
					},
					{
						name: "variable.parameter.misc.css",
						match: "[^'\"),\\s]+"
					}
				]
			},
			{
				name: "meta.function.shape.css",
				begin: "(?i)(?<![\\w-])(circle|ellipse|inset|polygon|rect)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.shape.css"
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css"
					}
				},
				patterns: [
					{
						name: "keyword.operator.shape.css",
						match: "(?i)(?<=\\s|^|\\*/)(at|round)(?=\\s|/\\*|$)"
					},
					{
						include: "#css-property-values"
					}
				]
			},
			{
				name: "meta.function.timing-function.css",
				begin: "(?i)(?<![\\w-])(cubic-bezier|steps)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.timing-function.css"
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css"
					}
				},
				patterns: [
					{
						name: "support.constant.step-direction.css",
						match: "(?i)(?<![\\w-])(start|end)(?=\\s*\\)|$)"
					},
					{
						include: "#css-property-values"
					}
				]
			},
			{
				begin: "(?xi) (?<![\\w-])\n( (?:translate|scale|rotate)(?:[XYZ]|3D)?\n| matrix(?:3D)?\n| skew[XY]?\n| perspective\n)\n(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.transform.css"
					},
					"2": {
						name: "punctuation.section.function.begin.bracket.round.css"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.end.bracket.round.css"
					}
				},
				patterns: [
					{
						include: "#css-property-values"
					}
				]
			}
		]
	},
	"css-numeric-values": {
		patterns: [
			{
				name: "constant.other.color.rgb-value.hex.css",
				match: "(#)(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b",
				captures: {
					"1": {
						name: "punctuation.definition.constant.css"
					}
				}
			},
			{
				name: "constant.numeric.css",
				match: "(?xi) (?<![\\w-])\n[-+]?                               # Sign indicator\n\n(?:                                 # Numerals\n    [0-9]+ (?:\\.[0-9]+)?           # Integer/float with leading digits\n  | \\.[0-9]+                       # Float without leading digits\n)\n\n(?:                                 # Scientific notation\n  (?<=[0-9])                        # Exponent must follow a digit\n  E                                 # Exponent indicator\n  [-+]?                             # Possible sign indicator\n  [0-9]+                            # Exponent value\n)?\n\n(?:                                 # Possible unit for data-type:\n  (%)                               # - Percentage\n  | ( deg|grad|rad|turn             # - Angle\n    | Hz|kHz                        # - Frequency\n    | ch|cm|em|ex|fr|in|mm|mozmm|   # - Length\n      pc|pt|px|q|rem|vh|vmax|vmin|\n      vw\n    | dpi|dpcm|dppx                 # - Resolution\n    | s|ms                          # - Time\n    )\n  \\b                               # Boundary checking intentionally lax to\n)?                                  # facilitate embedding in CSS-like grammars",
				captures: {
					"1": {
						name: "keyword.other.unit.percentage.css"
					},
					"2": {
						name: "keyword.other.unit.${2:/downcase}.css"
					}
				}
			}
		]
	},
	"css-combinators": {
		patterns: [
			{
				name: "punctuation.separator.combinator.css",
				match: ">>>|>>|>|\\+|~"
			},
			{
				name: "keyword.other.parent-selector.css",
				match: "&"
			}
		]
	},
	"css-pseudo-classes": {
		name: "entity.other.attribute-name.pseudo-class.css",
		match: "(?xi)\n(:)(:*)\n(?: active|any-link|checked|default|defined|disabled|empty|enabled|first\n  | (?:first|last|only)-(?:child|of-type)|focus|focus-visible|focus-within\n  | fullscreen|host|hover|in-range|indeterminate|invalid|left|link\n  | optional|out-of-range|placeholder-shown|read-only|read-write\n  | required|right|root|scope|target|unresolved\n  | valid|visited\n)(?![\\w-]|\\s*[;}])",
		captures: {
			"1": {
				name: "punctuation.definition.entity.css"
			},
			"2": {
				name: "invalid.illegal.colon.css"
			}
		}
	},
	"css-pseudo-elements": {
		name: "entity.other.attribute-name.pseudo-element.css",
		match: "(?xi)\n(?:\n  (::?)                       # Elements using both : and :: notation\n  (?: after\n    | before\n    | first-letter\n    | first-line\n    | (?:-(?:ah|apple|atsc|epub|hp|khtml|moz\n            |ms|o|rim|ro|tc|wap|webkit|xv)\n        | (?:mso|prince))\n      -[a-z-]+\n  )\n  |\n  (::)                        # Double-colon only\n  (?: backdrop\n    | content\n    | grammar-error\n    | marker\n    | placeholder\n    | selection\n    | shadow\n    | spelling-error\n  )\n)\n(?![\\w-]|\\s*[;}])",
		captures: {
			"1": {
				name: "punctuation.definition.entity.css"
			},
			"2": {
				name: "punctuation.definition.entity.css"
			}
		}
	},
	"css-commas": {
		name: "punctuation.separator.list.comma.css",
		match: ","
	},
	"css-comment": {
		patterns: [
			{
				name: "comment.line.imba",
				match: "\\#(\\s.+)?(\\n|$)"
			},
			{
				name: "comment.line.imba",
				match: "(^\\t+)(\\#(\\s.+)?(\\n|$))"
			}
		]
	},
	"css-escapes": {
		patterns: [
			{
				name: "constant.character.escape.codepoint.css",
				match: "\\\\[0-9a-fA-F]{1,6}"
			},
			{
				name: "constant.character.escape.newline.css",
				begin: "\\\\$\\s*",
				end: "^(?<!\\G)"
			},
			{
				name: "constant.character.escape.css",
				match: "\\\\."
			}
		]
	},
	"css-selector": {
		name: "meta.selector.css",
		begin: "(?<=css\\s)(?!(?:[\\@\\.]+[\\!\\<\\>]?)?[\\w\\-\\$]+(?:[\\@\\.]+[\\!\\<\\>]?[\\w\\-\\$]+)*(?:\\s*\\:))",
		end: "(\\s*(?=(?:[\\@\\.]+[\\!\\<\\>]?)?[\\w\\-\\$]+(?:[\\@\\.]+[\\!\\<\\>]?[\\w\\-\\$]+)*(?:\\s*\\:))|\\s*$|(?=\\s+\\#\\s))",
		endCaptures: {
			"0": {
				name: "punctuation.separator.sel-properties.css"
			}
		},
		patterns: [
			{
				include: "#css-selector-innards"
			}
		]
	},
	"nested-css-selector": {
		name: "meta.selector.css",
		begin: "(^\\t+)(?!(?:[\\@\\.]+[\\!\\<\\>]?)?[\\w\\-\\$]+(?:[\\@\\.]+[\\!\\<\\>]?[\\w\\-\\$]+)*(?:\\s*\\:))",
		end: "(\\s*(?=(?:[\\@\\.]+[\\!\\<\\>]?)?[\\w\\-\\$]+(?:[\\@\\.]+[\\!\\<\\>]?[\\w\\-\\$]+)*(?:\\s*\\:))|\\s*$|(?=\\s+\\#\\s))",
		endCaptures: {
			"0": {
				name: "punctuation.separator.sel-properties.css"
			}
		},
		patterns: [
			{
				include: "#css-selector-innards"
			}
		]
	},
	"inline-css-selector": {
		name: "meta.selector.css",
		begin: "(^\\t+)(?!(?:[\\@\\.]+[\\!\\<\\>]?)?[\\w\\-\\$]+(?:[\\@\\.]+[\\!\\<\\>]?[\\w\\-\\$]+)*(?:\\s*\\:))",
		end: "(\\s*(?=(?:[\\@\\.]+[\\!\\<\\>]?)?[\\w\\-\\$]+(?:[\\@\\.]+[\\!\\<\\>]?[\\w\\-\\$]+)*(?:\\s*\\:)|\\)|\\])|\\s*$)",
		endCaptures: {
			"0": {
				name: "punctuation.separator.sel-properties.css"
			}
		},
		patterns: [
			{
				include: "#css-selector-innards"
			}
		]
	},
	"css-selector-innards": {
		patterns: [
			{
				include: "#css-commas"
			},
			{
				include: "#css-escapes"
			},
			{
				include: "#css-combinators"
			},
			{
				name: "entity.name.tag.wildcard.css",
				match: "\\*"
			},
			{
				name: "meta.attribute-selector.css",
				begin: "\\[",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.entity.begin.bracket.square.css"
					}
				},
				end: "\\]",
				endCaptures: {
					"0": {
						name: "punctuation.definition.entity.end.bracket.square.css"
					}
				},
				patterns: [
					{
						include: "#string"
					},
					{
						match: "(?<=[\"'\\s]|^|\\*/)\\s*([iI])\\s*(?=[\\s\\]]|/\\*|$)",
						captures: {
							"1": {
								name: "storage.modifier.ignore-case.css"
							}
						}
					},
					{
						match: "(?x)(?<==)\\s*((?!/\\*)(?:[^\\\\\"'\\s\\]]|\\\\.)+)",
						captures: {
							"1": {
								name: "string.unquoted.attribute-value.css"
							}
						}
					},
					{
						include: "#css-escapes"
					},
					{
						name: "keyword.operator.pattern.css",
						match: "[~|^$*]?="
					},
					{
						name: "punctuation.separator.css",
						match: "\\|"
					},
					{
						match: "(?x)\n# Qualified namespace prefix\n( -?(?!\\d)(?:[\\w-]|[^\\\\x00-\\\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+\n| \\*\n)\n# Lookahead to ensure there's a valid identifier ahead\n(?=\n  \\| (?!\\s|=|$|\\])\n  (?: -?(?!\\d)\n   |   [\\\\\\w-]\n   |   [^\\\\x00-\\\\x7F]\n   )\n)",
						captures: {
							"1": {
								name: "entity.other.namespace-prefix.css"
							}
						}
					},
					{
						match: "(?x)\n(-?(?!\\d)(?>[\\w-]|[^\\\\x00-\\\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)\n\\s*\n(?=[~|^\\]$*=]|/\\*)",
						captures: {
							"1": {
								name: "entity.other.attribute-name.css"
							}
						}
					}
				]
			},
			{
				include: "#css-pseudo-classes"
			},
			{
				include: "#css-pseudo-elements"
			}
		]
	},
	"css-property-values": {
		patterns: [
			{
				include: "#css-commas"
			},
			{
				include: "#css-escapes"
			},
			{
				include: "#css-functions"
			},
			{
				include: "#css-numeric-values"
			},
			{
				include: "#css-size-keywords"
			},
			{
				include: "#css-color-keywords"
			},
			{
				include: "#string"
			},
			{
				name: "keyword.other.important.css",
				match: "!\\s*important(?![\\w-])"
			}
		]
	},
	"tag-literal": {
		patterns: [
			{
				name: "meta.tag.imba",
				begin: "(<)(?=[\\w\\{\\[\\.\\#\\$\\@])",
				beginCaptures: {
					"1": {
						name: "punctuation.section.tag.open.imba"
					}
				},
				end: "(>)",
				endCaptures: {
					"1": {
						name: "punctuation.section.tag.close.imba"
					}
				},
				patterns: [
					{
						include: "#tag-content"
					}
				],
				contentName: "meta.tag.attributes.imba"
			}
		]
	},
	"tag-content": {
		patterns: [
			{
				include: "#tag-name"
			},
			{
				include: "#tag-expr-name"
			},
			{
				include: "#tag-interpolated-content"
			},
			{
				include: "#tag-interpolated-parens"
			},
			{
				include: "#tag-interpolated-brackets"
			},
			{
				include: "#tag-event-handler"
			},
			{
				include: "#tag-classname"
			},
			{
				include: "#tag-ref"
			},
			{
				include: "#tag-attr-value"
			},
			{
				include: "#tag-attr-name"
			},
			{
				include: "#comment"
			}
		]
	},
	"tag-name": {
		patterns: [
			{
				name: "entity.name.tag.special.imba",
				match: "(?<=<)(self|global|slot)(?=[\\.\\[\\>\\s\\(])"
			}
		]
	},
	"tag-expr-name": {
		begin: "(?<=<)(?=[\\w\\{])",
		contentName: "entity.name.tag.imba",
		end: "(?=[\\.\\[\\>\\s\\(])",
		patterns: [
			{
				include: "#tag-interpolated-content"
			}
		]
	},
	"tag-interpolated-content": {
		name: "meta.tag.expression.imba",
		begin: "\\{",
		beginCaptures: {
			"0": {
				name: "punctuation.section.tag.imba"
			}
		},
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.section.tag.imba"
			}
		},
		patterns: [
			{
				include: "#expression"
			}
		],
		contentName: "meta.embedded.line.imba"
	},
	"tag-interpolated-parens": {
		name: "meta.tag.expression.imba",
		begin: "\\(",
		beginCaptures: {
			"0": {
				name: "punctuation.section.tag.imba"
			}
		},
		end: "\\)",
		endCaptures: {
			"0": {
				name: "punctuation.section.tag.imba"
			}
		},
		patterns: [
			{
				include: "#expression"
			}
		],
		contentName: "meta.embedded.line.imba"
	},
	"tag-interpolated-brackets": {
		name: "meta.tag.expression.imba",
		begin: "\\[",
		beginCaptures: {
			"0": {
				name: "punctuation.section.tag.imba"
			}
		},
		end: "\\]",
		endCaptures: {
			"0": {
				name: "punctuation.section.tag.imba"
			}
		},
		patterns: [
			{
				include: "#inline-css-selector"
			},
			{
				include: "#inline-styles"
			}
		],
		contentName: "meta.embedded.line.imba"
	},
	"tag-classname": {
		begin: "\\.",
		patterns: [
			{
				include: "#tag-interpolated-content"
			}
		],
		end: "(?=[\\.\\[\\>\\s\\(\\=])",
		contentName: "entity.other.attribute-name.class.css"
	},
	"tag-ref": {
		match: "(\\$[_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?)",
		name: "entity.other.attribute-name.reference.css"
	},
	"tag-event-handler": {
		begin: "(\\@[\\w$_]+(?:\\-[\\w$_]+)*)",
		beginCaptures: {
			"0": {
				name: "entity.other.event-name.imba"
			}
		},
		patterns: [
			{
				include: "#tag-interpolated-content"
			},
			{
				include: "#tag-interpolated-parens"
			},
			{
				name: "entity.other.event-modifier.imba",
				begin: "\\.",
				beginCaptures: {
					"0": {
						name: "punctuation.section.tag"
					}
				},
				patterns: [
					{
						include: "#tag-interpolated-parens"
					},
					{
						include: "#tag-interpolated-content"
					}
				],
				end: "(?=[\\.\\[\\>\\s\\=]|$)"
			}
		],
		end: "(?=[\\[\\>\\s\\=])",
		contentName: "entity.other.tag.event"
	},
	"tag-attr-name": {
		begin: "([\\w$_]+(?:\\-[\\w$_]+)*)",
		beginCaptures: {
			"0": {
				name: "entity.other.attribute-name.imba"
			}
		},
		end: "(?=[\\s\\.\\[\\>\\=])",
		contentName: "entity.other.attribute-name.imba"
	},
	"tag-attr-value": {
		begin: "(\\=)",
		beginCaptures: {
			"0": {
				name: "keyword.operator.tag.assignment"
			}
		},
		end: "(?=>|\\s)",
		contentName: "meta.tag.attribute-value.imba",
		patterns: [
			{
				include: "#expr"
			}
		]
	},
	expression: {
		patterns: [
			{
				begin: "\\(",
				beginCaptures: {
					"0": {
						name: "meta.brace.round.imba"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "meta.brace.round.imba"
					}
				},
				patterns: [
					{
						include: "#expr"
					}
				]
			},
			{
				include: "#tag-literal"
			},
			{
				include: "#expressionWithoutIdentifiers"
			},
			{
				include: "#identifiers"
			},
			{
				include: "#expressionPunctuations"
			}
		]
	},
	expressionWithoutIdentifiers: {
		patterns: [
			{
				include: "#string"
			},
			{
				include: "#regex"
			},
			{
				include: "#comment"
			},
			{
				include: "#function-expression"
			},
			{
				include: "#class-expression"
			},
			{
				include: "#ternary-expression"
			},
			{
				include: "#new-expr"
			},
			{
				include: "#instanceof-expr"
			},
			{
				include: "#object-literal"
			},
			{
				include: "#expression-operators"
			},
			{
				include: "#literal"
			},
			{
				include: "#support-objects"
			}
		]
	},
	expressionPunctuations: {
		patterns: [
			{
				include: "#punctuation-comma"
			},
			{
				include: "#punctuation-accessor"
			}
		]
	},
	decorator: {
		name: "meta.decorator.imba",
		begin: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))\\@(?!\\@)",
		beginCaptures: {
			"0": {
				name: "punctuation.decorator.imba"
			}
		},
		end: "(?=\\s)",
		patterns: [
			{
				include: "#expr"
			}
		]
	},
	"array-literal": {
		name: "meta.array.literal.imba",
		begin: "\\s*(\\[)",
		beginCaptures: {
			"1": {
				name: "meta.brace.square.imba"
			}
		},
		end: "\\]",
		endCaptures: {
			"0": {
				name: "meta.brace.square.imba"
			}
		},
		patterns: [
			{
				include: "#expr"
			},
			{
				include: "#punctuation-comma"
			}
		]
	},
	"type-literal": {
		name: "meta.type.annotation.imba",
		begin: "(\\\\)",
		beginCaptures: {
			"1": {
				name: "meta.type.annotation.open.imba"
			}
		},
		end: "(?=[\\s\\]\\)\\,\\.\\=\\}]|$)",
		patterns: [
			{
				include: "#type-brackets"
			}
		]
	},
	"type-brackets": {
		patterns: [
			{
				begin: "{",
				end: "}",
				patterns: [
					{
						include: "#type-brackets"
					}
				]
			},
			{
				begin: "\\[",
				end: "\\]",
				patterns: [
					{
						include: "#type-brackets"
					}
				]
			},
			{
				begin: "\\<",
				end: "\\>",
				patterns: [
					{
						include: "#type-brackets"
					}
				]
			},
			{
				begin: "\\(",
				end: "\\)",
				patterns: [
					{
						include: "#type-brackets"
					}
				]
			}
		]
	},
	"numeric-literal": {
		patterns: [
			{
				name: "constant.numeric.hex.imba",
				match: "\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$)",
				captures: {
					"1": {
						name: "storage.type.numeric.bigint.imba"
					}
				}
			},
			{
				name: "constant.numeric.binary.imba",
				match: "\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$)",
				captures: {
					"1": {
						name: "storage.type.numeric.bigint.imba"
					}
				}
			},
			{
				name: "constant.numeric.octal.imba",
				match: "\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$)",
				captures: {
					"1": {
						name: "storage.type.numeric.bigint.imba"
					}
				}
			},
			{
				match: "(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)| # 1.1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # 1.E+3\n  (?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|             # .1E+3\n  (?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|                 # 1E+3\n  (?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|                      # 1.1\n  (?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|                                  # 1.\n  (?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|                                  # .1\n  (?:\\b[0-9][0-9_]*(n)?\\b)                                 # 1\n)(?!\\$)",
				captures: {
					"0": {
						name: "constant.numeric.decimal.imba"
					},
					"1": {
						name: "meta.delimiter.decimal.period.imba"
					},
					"2": {
						name: "storage.type.numeric.bigint.imba"
					},
					"3": {
						name: "meta.delimiter.decimal.period.imba"
					},
					"4": {
						name: "storage.type.numeric.bigint.imba"
					},
					"5": {
						name: "meta.delimiter.decimal.period.imba"
					},
					"6": {
						name: "storage.type.numeric.bigint.imba"
					},
					"7": {
						name: "storage.type.numeric.bigint.imba"
					},
					"8": {
						name: "meta.delimiter.decimal.period.imba"
					},
					"9": {
						name: "storage.type.numeric.bigint.imba"
					},
					"10": {
						name: "meta.delimiter.decimal.period.imba"
					},
					"11": {
						name: "storage.type.numeric.bigint.imba"
					},
					"12": {
						name: "meta.delimiter.decimal.period.imba"
					},
					"13": {
						name: "storage.type.numeric.bigint.imba"
					},
					"14": {
						name: "storage.type.numeric.bigint.imba"
					}
				}
			}
		]
	},
	"number-with-unit-literal": {
		patterns: [
			{
				match: "([0-9]+)([a-z]+|\\%)",
				captures: {
					"1": {
						name: "constant.numeric.imba"
					},
					"2": {
						name: "keyword.other.unit.imba"
					}
				}
			},
			{
				match: "([0-9]*\\.[0-9]+(?:[eE][\\-+]?[0-9]+)?)([a-z]+|\\%)",
				captures: {
					"1": {
						name: "constant.numeric.decimal.imba"
					},
					"2": {
						name: "keyword.other.unit.imba"
					}
				}
			}
		]
	},
	"boolean-literal": {
		patterns: [
			{
				name: "constant.language.boolean.true.imba",
				match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(true|yes)(?![_\\-$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
			},
			{
				name: "constant.language.boolean.false.imba",
				match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(false|no)(?![_\\-$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
			}
		]
	},
	"null-literal": {
		name: "constant.language.null.imba",
		match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))null(?![_\\-$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
	},
	"this-literal": {
		name: "variable.language.this.imba",
		match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(this|self)\\b(?!\\$)"
	},
	"global-literal": {
		name: "variable.language.global.imba",
		match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(global)\\b(?!\\$)"
	},
	"super-literal": {
		name: "variable.language.super.imba",
		match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))super\\b(?!\\$)"
	},
	"undefined-literal": {
		name: "constant.language.undefined.imba",
		match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))undefined(?![_\\-$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
	},
	"numericConstant-literal": {
		patterns: [
			{
				name: "constant.language.nan.imba",
				match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))NaN(?![_\\-$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
			},
			{
				name: "constant.language.infinity.imba",
				match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))Infinity(?![_\\-$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))"
			}
		]
	},
	"plain-identifiers": {
		patterns: [
			{
				name: "variable.other.constant.imba",
				match: "([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])"
			},
			{
				name: "variable.other.class.imba",
				match: "[[:upper:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\!]?"
			},
			{
				name: "variable.special.imba",
				match: "\\$\\d+"
			},
			{
				name: "variable.other.internal.imba",
				match: "\\$[_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?"
			},
			{
				name: "variable.other.symbol.imba",
				match: "\\@\\@+[_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?"
			},
			{
				name: "variable.other.readwrite.imba",
				match: "[_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?"
			},
			{
				name: "variable.other.instance.imba",
				match: "\\@[_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?"
			},
			{
				name: "variable.other.private.imba",
				match: "\\#+[_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?"
			},
			{
				name: "string.symbol.imba",
				match: "\\:[_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?"
			}
		]
	},
	"plain-accessors": {
		patterns: [
			{
				match: "(\\.\\.?)([_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?)",
				captures: {
					"1": {
						name: "punctuation.accessor.imba"
					},
					"2": {
						name: "variable.other.property.imba"
					}
				}
			}
		]
	},
	identifiers: {
		patterns: [
			{
				match: "(?x)(?:(?:(\\.)|(\\.\\.(?!\\s*[[:digit:]]|\\s+)))\\s*)?([_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?)(?=\\s*={{functionOrArrowLookup}})",
				captures: {
					"1": {
						name: "punctuation.accessor.imba"
					},
					"2": {
						name: "punctuation.accessor.optional.imba"
					},
					"3": {
						name: "entity.name.function.property.imba"
					}
				}
			},
			{
				match: "(?:(\\.)|(\\.\\.(?!\\s*[[:digit:]]|\\s+)))\\s*(\\#?[[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])",
				captures: {
					"1": {
						name: "punctuation.accessor.imba"
					},
					"2": {
						name: "punctuation.accessor.optional.imba"
					},
					"3": {
						name: "variable.other.constant.property.imba"
					}
				}
			},
			{
				match: "(?:(\\.)|(\\.\\.(?!\\s*[[:digit:]]|\\s+)))([[:upper:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\!]?)",
				captures: {
					"1": {
						name: "punctuation.accessor.imba"
					},
					"2": {
						name: "punctuation.accessor.optional.imba"
					},
					"3": {
						name: "variable.other.class.property.imba"
					}
				}
			},
			{
				match: "(?:(\\.)|(\\.\\.(?!\\s*[[:digit:]]|\\s+)))(\\#?[_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?)",
				captures: {
					"1": {
						name: "punctuation.accessor.imba"
					},
					"2": {
						name: "punctuation.accessor.optional.imba"
					},
					"3": {
						name: "variable.other.property.imba"
					}
				}
			},
			{
				name: "keyword.other",
				match: "(for own|for|if|unless|when)\\b"
			},
			{
				name: "support.function.require",
				match: "require"
			},
			{
				include: "#plain-identifiers"
			},
			{
				include: "#type-literal"
			}
		]
	},
	"type-annotation": {
		patterns: [
			{
				include: "#type-literal"
			}
		]
	},
	"punctuation-comma": {
		name: "punctuation.separator.comma.imba",
		match: ","
	},
	"punctuation-semicolon": {
		name: "punctuation.terminator.statement.imba",
		match: ";"
	},
	"punctuation-accessor": {
		match: "(?:(\\.)|(\\.\\.(?!\\s*[[:digit:]]|\\s+)))",
		captures: {
			"1": {
				name: "punctuation.accessor.imba"
			},
			"2": {
				name: "punctuation.accessor.optional.imba"
			}
		}
	},
	string: {
		patterns: [
			{
				include: "#qstring-single-multi"
			},
			{
				include: "#qstring-double-multi"
			},
			{
				include: "#qstring-single"
			},
			{
				include: "#qstring-double"
			},
			{
				include: "#template"
			}
		]
	},
	"qstring-double": {
		name: "string.quoted.double.imba",
		begin: "\"",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.imba"
			}
		},
		end: "\"",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.imba"
			}
		},
		patterns: [
			{
				include: "#template-substitution-element"
			},
			{
				include: "#string-character-escape"
			}
		]
	},
	"qstring-single": {
		name: "string.quoted.single.imba",
		begin: "'",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.imba"
			}
		},
		end: "(\\')|((?:[^\\\\\\n])$)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.string.end.imba"
			},
			"2": {
				name: "invalid.illegal.newline.imba"
			}
		},
		patterns: [
			{
				include: "#string-character-escape"
			}
		]
	},
	"qstring-single-multi": {
		name: "string.quoted.single.imba",
		begin: "'''",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.imba"
			}
		},
		end: "'''",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.imba"
			}
		},
		patterns: [
			{
				include: "#string-character-escape"
			}
		]
	},
	"string-character-escape": {
		name: "constant.character.escape.imba",
		match: "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|u\\{[0-9A-Fa-f]+\\}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)"
	},
	template: {
		patterns: [
			{
				name: "string.template.imba",
				begin: "(?=(([_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?)({{typeArguments}}\\s*)?`)",
				end: "(?=`)",
				patterns: [
					{
						begin: "(?=(([_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?\\s*\\??\\.\\s*)*|(\\??\\.\\s*)?)([_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?))",
						end: "(?=({{typeArguments}}\\s*)?`)",
						patterns: [
							{
								name: "entity.name.function.tagged-template.imba",
								match: "([_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?)"
							}
						]
					}
				]
			},
			{
				name: "string.template.imba",
				begin: "([_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?)\\s*(?=({{typeArguments}}\\s*)`)",
				beginCaptures: {
					"1": {
						name: "entity.name.function.tagged-template.imba"
					}
				},
				end: "(?=`)",
				patterns: [
					{
						include: "#type-arguments"
					}
				]
			},
			{
				name: "string.template.imba",
				begin: "([_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?)?(`)",
				beginCaptures: {
					"1": {
						name: "entity.name.function.tagged-template.imba"
					},
					"2": {
						name: "punctuation.definition.string.template.begin.imba"
					}
				},
				end: "`",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.template.end.imba"
					}
				},
				patterns: [
					{
						include: "#template-substitution-element"
					},
					{
						include: "#string-character-escape"
					}
				]
			}
		]
	},
	"template-substitution-element": {
		name: "meta.template.expression.imba",
		begin: "(?<!\\\\)\\{",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.template-expression.begin.imba"
			}
		},
		end: "\\}",
		endCaptures: {
			"0": {
				name: "punctuation.definition.template-expression.end.imba"
			}
		},
		patterns: [
			{
				include: "#expr"
			}
		],
		contentName: "meta.embedded.line.imba"
	},
	regex: {
		patterns: [
			{
				name: "string.regexp.imba",
				begin: "(?<!\\+\\+|--|})(?<=[=(:,\\[?+!]|^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case|=>|&&|\\|\\||\\*\\/)\\s*(\\/)(?![\\/*])(?=(?:[^\\/\\\\\\[\\()]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\]|\\(([^\\)\\\\]|\\\\.)+\\))+\\/([gimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.string.begin.imba"
					}
				},
				end: "(/)([gimsuy]*)",
				endCaptures: {
					"1": {
						name: "punctuation.definition.string.end.imba"
					},
					"2": {
						name: "keyword.other.imba"
					}
				},
				patterns: [
					{
						include: "#regexp"
					}
				]
			},
			{
				name: "string.regexp.imba",
				begin: "((?<![_$[:alnum:])\\]]|\\+\\+|--|}|\\*\\/)|((?<=^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case))\\s*)\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\])+\\/([gimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.begin.imba"
					}
				},
				end: "(/)([gimsuy]*)",
				endCaptures: {
					"1": {
						name: "punctuation.definition.string.end.imba"
					},
					"2": {
						name: "keyword.other.imba"
					}
				},
				patterns: [
					{
						include: "#regexp"
					}
				]
			}
		]
	},
	regexp: {
		patterns: [
			{
				name: "keyword.control.anchor.regexp",
				match: "\\\\[bB]|\\^|\\$"
			},
			{
				match: "\\\\[1-9]\\d*|\\\\k<([a-zA-Z_$][\\w$]*)>",
				captures: {
					"0": {
						name: "keyword.other.back-reference.regexp"
					},
					"1": {
						name: "variable.other.regexp"
					}
				}
			},
			{
				name: "keyword.operator.quantifier.regexp",
				match: "[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??"
			},
			{
				name: "keyword.operator.or.regexp",
				match: "\\|"
			},
			{
				name: "meta.group.assertion.regexp",
				begin: "(\\()((\\?=)|(\\?!)|(\\?<=)|(\\?<!))",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.group.regexp"
					},
					"2": {
						name: "punctuation.definition.group.assertion.regexp"
					},
					"3": {
						name: "meta.assertion.look-ahead.regexp"
					},
					"4": {
						name: "meta.assertion.negative-look-ahead.regexp"
					},
					"5": {
						name: "meta.assertion.look-behind.regexp"
					},
					"6": {
						name: "meta.assertion.negative-look-behind.regexp"
					}
				},
				end: "(\\))",
				endCaptures: {
					"1": {
						name: "punctuation.definition.group.regexp"
					}
				},
				patterns: [
					{
						include: "#regexp"
					}
				]
			},
			{
				name: "meta.group.regexp",
				begin: "\\((?:(\\?:)|(?:\\?<([a-zA-Z_$][\\w$]*)>))?",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.group.regexp"
					},
					"1": {
						name: "punctuation.definition.group.no-capture.regexp"
					},
					"2": {
						name: "variable.other.regexp"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.group.regexp"
					}
				},
				patterns: [
					{
						include: "#regexp"
					}
				]
			},
			{
				name: "constant.other.character-class.set.regexp",
				begin: "(\\[)(\\^)?",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.character-class.regexp"
					},
					"2": {
						name: "keyword.operator.negation.regexp"
					}
				},
				end: "(\\])",
				endCaptures: {
					"1": {
						name: "punctuation.definition.character-class.regexp"
					}
				},
				patterns: [
					{
						name: "constant.other.character-class.range.regexp",
						match: "(?:.|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))",
						captures: {
							"1": {
								name: "constant.character.numeric.regexp"
							},
							"2": {
								name: "constant.character.control.regexp"
							},
							"3": {
								name: "constant.character.escape.backslash.regexp"
							},
							"4": {
								name: "constant.character.numeric.regexp"
							},
							"5": {
								name: "constant.character.control.regexp"
							},
							"6": {
								name: "constant.character.escape.backslash.regexp"
							}
						}
					},
					{
						include: "#regex-character-class"
					}
				]
			},
			{
				include: "#regex-character-class"
			}
		]
	},
	"regex-character-class": {
		patterns: [
			{
				name: "constant.other.character-class.regexp",
				match: "\\\\[wWsSdDtrnvf]|\\."
			},
			{
				name: "constant.character.numeric.regexp",
				match: "\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})"
			},
			{
				name: "constant.character.control.regexp",
				match: "\\\\c[A-Z]"
			},
			{
				name: "constant.character.escape.backslash.regexp",
				match: "\\\\."
			}
		]
	},
	comment: {
		patterns: [
			{
				name: "comment.block.documentation.imba",
				begin: "/\\*\\*(?!/)",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.comment.imba"
					}
				},
				end: "\\*/",
				endCaptures: {
					"0": {
						name: "punctuation.definition.comment.imba"
					}
				},
				patterns: [
					{
						include: "#docblock"
					}
				]
			},
			{
				name: "comment.block.imba",
				begin: "(/\\*)(?:\\s*((@)internal)(?=\\s|(\\*/)))?",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.comment.imba"
					},
					"2": {
						name: "storage.type.internaldeclaration.imba"
					},
					"3": {
						name: "punctuation.decorator.internaldeclaration.imba"
					}
				},
				end: "\\*/",
				endCaptures: {
					"0": {
						name: "punctuation.definition.comment.imba"
					}
				}
			},
			{
				name: "comment.block.imba",
				begin: "(###)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.comment.imba"
					}
				},
				end: "###(?:[ \\t]*\\n)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.comment.imba"
					}
				}
			},
			{
				begin: "(^[ \\t]+)?((//|\\#\\s)(?:\\s*((@)internal)(?=\\s|$))?)",
				beginCaptures: {
					"1": {
						name: "punctuation.whitespace.comment.leading.imba"
					},
					"2": {
						name: "comment.line.double-slash.imba"
					},
					"3": {
						name: "punctuation.definition.comment.imba"
					},
					"4": {
						name: "storage.type.internaldeclaration.imba"
					},
					"5": {
						name: "punctuation.decorator.internaldeclaration.imba"
					}
				},
				end: "(?=$)",
				contentName: "comment.line.double-slash.imba"
			}
		]
	},
	"single-line-comment-consuming-line-ending": {
		begin: "(^[ \\t]+)?((//|\\#\\s)(?:\\s*((@)internal)(?=\\s|$))?)",
		beginCaptures: {
			"1": {
				name: "punctuation.whitespace.comment.leading.imba"
			},
			"2": {
				name: "comment.line.double-slash.imba"
			},
			"3": {
				name: "punctuation.definition.comment.imba"
			},
			"4": {
				name: "storage.type.internaldeclaration.imba"
			},
			"5": {
				name: "punctuation.decorator.internaldeclaration.imba"
			}
		},
		end: "(?=^)",
		contentName: "comment.line.double-slash.imba"
	},
	directives: {
		name: "comment.line.triple-slash.directive.imba",
		begin: "^(///)\\s*(?=<(reference|amd-dependency|amd-module)(\\s+(path|types|no-default-lib|lib|name)\\s*=\\s*((\\'([^\\'\\\\]|\\\\.)*\\')|(\\\"([^\\\"\\\\]|\\\\.)*\\\")|(\\`([^\\`\\\\]|\\\\.)*\\`)))+\\s*/>\\s*$)",
		beginCaptures: {
			"1": {
				name: "punctuation.definition.comment.imba"
			}
		},
		end: "(?=$)",
		patterns: [
			{
				name: "meta.tag.imba",
				begin: "(<)(reference|amd-dependency|amd-module)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.tag.directive.imba"
					},
					"2": {
						name: "entity.name.tag.directive.imba"
					}
				},
				end: "/>",
				endCaptures: {
					"0": {
						name: "punctuation.definition.tag.directive.imba"
					}
				},
				patterns: [
					{
						name: "entity.other.attribute-name.directive.imba",
						match: "path|types|no-default-lib|lib|name"
					},
					{
						name: "keyword.operator.assignment.imba",
						match: "="
					},
					{
						include: "#string"
					}
				]
			}
		]
	},
	docblock: {
		patterns: [
			{
				match: "(?x)\n((@)(?:access|api))\n\\s+\n(private|protected|public)\n\\b",
				captures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					},
					"3": {
						name: "constant.language.access-type.jsdoc"
					}
				}
			},
			{
				match: "(?x)\n((@)author)\n\\s+\n(\n  [^@\\s<>*/]\n  (?:[^@<>*/]|\\*[^/])*\n)\n(?:\n  \\s*\n  (<)\n  ([^>\\s]+)\n  (>)\n)?",
				captures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					},
					"3": {
						name: "entity.name.type.instance.jsdoc"
					},
					"4": {
						name: "punctuation.definition.bracket.angle.begin.jsdoc"
					},
					"5": {
						name: "constant.other.email.link.underline.jsdoc"
					},
					"6": {
						name: "punctuation.definition.bracket.angle.end.jsdoc"
					}
				}
			},
			{
				match: "(?x)\n((@)borrows) \\s+\n((?:[^@\\s*/]|\\*[^/])+)    # <that namepath>\n\\s+ (as) \\s+              # as\n((?:[^@\\s*/]|\\*[^/])+)    # <this namepath>",
				captures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					},
					"3": {
						name: "entity.name.type.instance.jsdoc"
					},
					"4": {
						name: "keyword.operator.control.jsdoc"
					},
					"5": {
						name: "entity.name.type.instance.jsdoc"
					}
				}
			},
			{
				name: "meta.example.jsdoc",
				begin: "((@)example)\\s+",
				end: "(?=@|\\*/)",
				beginCaptures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					}
				},
				patterns: [
					{
						match: "^\\s\\*\\s+"
					},
					{
						contentName: "constant.other.description.jsdoc",
						begin: "\\G(<)caption(>)",
						beginCaptures: {
							"0": {
								name: "entity.name.tag.inline.jsdoc"
							},
							"1": {
								name: "punctuation.definition.bracket.angle.begin.jsdoc"
							},
							"2": {
								name: "punctuation.definition.bracket.angle.end.jsdoc"
							}
						},
						end: "(</)caption(>)|(?=\\*/)",
						endCaptures: {
							"0": {
								name: "entity.name.tag.inline.jsdoc"
							},
							"1": {
								name: "punctuation.definition.bracket.angle.begin.jsdoc"
							},
							"2": {
								name: "punctuation.definition.bracket.angle.end.jsdoc"
							}
						}
					},
					{
						match: "[^\\s@*](?:[^*]|\\*[^/])*",
						captures: {
							"0": {
								name: "source.embedded.imba"
							}
						}
					}
				]
			},
			{
				match: "(?x) ((@)kind) \\s+ (class|constant|event|external|file|function|member|mixin|module|namespace|typedef) \\b",
				captures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					},
					"3": {
						name: "constant.language.symbol-type.jsdoc"
					}
				}
			},
			{
				match: "(?x)\n((@)see)\n\\s+\n(?:\n  # URL\n  (\n    (?=https?://)\n    (?:[^\\s*]|\\*[^/])+\n  )\n  |\n  # JSDoc namepath\n  (\n    (?!\n      # Avoid matching bare URIs (also acceptable as links)\n      https?://\n      |\n      # Avoid matching {@inline tags}; we match those below\n      (?:\\[[^\\[\\]]*\\])? # Possible description [preceding]{@tag}\n      {@(?:link|linkcode|linkplain|tutorial)\\b\n    )\n    # Matched namepath\n    (?:[^@\\s*/]|\\*[^/])+\n  )\n)",
				captures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					},
					"3": {
						name: "variable.other.link.underline.jsdoc"
					},
					"4": {
						name: "entity.name.type.instance.jsdoc"
					}
				}
			},
			{
				match: "(?x)\n((@)template)\n\\s+\n# One or more valid identifiers\n(\n  [A-Za-z_$]         # First character: non-numeric word character\n  [\\w$.\\[\\]]*        # Rest of identifier\n  (?:                # Possible list of additional identifiers\n    \\s* , \\s*\n    [A-Za-z_$]\n    [\\w$.\\[\\]]*\n  )*\n)",
				captures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					},
					"3": {
						name: "variable.other.jsdoc"
					}
				}
			},
			{
				match: "(?x)\n(\n  (@)\n  (?:arg|argument|const|constant|member|namespace|param|var)\n)\n\\s+\n(\n  [A-Za-z_$]\n  [\\w$.\\[\\]]*\n)",
				captures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					},
					"3": {
						name: "variable.other.jsdoc"
					}
				}
			},
			{
				begin: "((@)typedef)\\s+(?={)",
				beginCaptures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					}
				},
				end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
				patterns: [
					{
						include: "#jsdoctype"
					},
					{
						name: "entity.name.type.instance.jsdoc",
						match: "(?:[^@\\s*/]|\\*[^/])+"
					}
				]
			},
			{
				begin: "((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\s+(?={)",
				beginCaptures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					}
				},
				end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
				patterns: [
					{
						include: "#jsdoctype"
					},
					{
						name: "variable.other.jsdoc",
						match: "([A-Za-z_$][\\w$.\\[\\]]*)"
					},
					{
						name: "variable.other.jsdoc",
						match: "(?x)\n(\\[)\\s*\n[\\w$]+\n(?:\n  (?:\\[\\])?                                        # Foo[ ].bar properties within an array\n  \\.                                                # Foo.Bar namespaced parameter\n  [\\w$]+\n)*\n(?:\n  \\s*\n  (=)                                                # [foo=bar] Default parameter value\n  \\s*\n  (\n    # The inner regexes are to stop the match early at */ and to not stop at escaped quotes\n    (?>\n      \"(?:(?:\\*(?!/))|(?:\\\\(?!\"))|[^*\\\\])*?\" |                      # [foo=\"bar\"] Double-quoted\n      '(?:(?:\\*(?!/))|(?:\\\\(?!'))|[^*\\\\])*?' |                      # [foo='bar'] Single-quoted\n      \\[ (?:(?:\\*(?!/))|[^*])*? \\] |                                # [foo=[1,2]] Array literal\n      (?:(?:\\*(?!/))|\\s(?!\\s*\\])|\\[.*?(?:\\]|(?=\\*/))|[^*\\s\\[\\]])*   # Everything else\n    )*\n  )\n)?\n\\s*(?:(\\])((?:[^*\\s]|\\*[^\\s/])+)?|(?=\\*/))",
						captures: {
							"1": {
								name: "punctuation.definition.optional-value.begin.bracket.square.jsdoc"
							},
							"2": {
								name: "keyword.operator.assignment.jsdoc"
							},
							"3": {
								name: "source.embedded.imba"
							},
							"4": {
								name: "punctuation.definition.optional-value.end.bracket.square.jsdoc"
							},
							"5": {
								name: "invalid.illegal.syntax.jsdoc"
							}
						}
					}
				]
			},
			{
				begin: "(?x)\n(\n  (@)\n  (?:define|enum|exception|export|extends|lends|implements|modifies\n  |namespace|private|protected|returns?|suppress|this|throws|type\n  |yields?)\n)\n\\s+(?={)",
				beginCaptures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					}
				},
				end: "(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])",
				patterns: [
					{
						include: "#jsdoctype"
					}
				]
			},
			{
				match: "(?x)\n(\n  (@)\n  (?:alias|augments|callback|constructs|emits|event|fires|exports?\n  |extends|external|function|func|host|lends|listens|interface|memberof!?\n  |method|module|mixes|mixin|name|requires|see|this|typedef|uses)\n)\n\\s+\n(\n  (?:\n    [^{}@\\s*] | \\*[^/]\n  )+\n)",
				captures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					},
					"3": {
						name: "entity.name.type.instance.jsdoc"
					}
				}
			},
			{
				contentName: "variable.other.jsdoc",
				begin: "((@)(?:default(?:value)?|license|version))\\s+(([''\"]))",
				beginCaptures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					},
					"3": {
						name: "variable.other.jsdoc"
					},
					"4": {
						name: "punctuation.definition.string.begin.jsdoc"
					}
				},
				end: "(\\3)|(?=$|\\*/)",
				endCaptures: {
					"0": {
						name: "variable.other.jsdoc"
					},
					"1": {
						name: "punctuation.definition.string.end.jsdoc"
					}
				}
			},
			{
				match: "((@)(?:default(?:value)?|license|tutorial|variation|version))\\s+([^\\s*]+)",
				captures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					},
					"3": {
						name: "variable.other.jsdoc"
					}
				}
			},
			{
				name: "storage.type.class.jsdoc",
				match: "(?x) (@) (?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles |callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright |default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception |exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func |function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc |inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method |mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects |override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected |public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary |suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation |version|virtual|writeOnce|yields?) \\b",
				captures: {
					"1": {
						name: "punctuation.definition.block.tag.jsdoc"
					}
				}
			},
			{
				include: "#inline-tags"
			},
			{
				match: "((@)(?:[_$[:alpha:]][_$[:alnum:]]*(?:\\-[_$[:alnum:]]+)*[\\?\\!]?))(?=\\s+)",
				captures: {
					"1": {
						name: "storage.type.class.jsdoc"
					},
					"2": {
						name: "punctuation.definition.block.tag.jsdoc"
					}
				}
			}
		]
	},
	brackets: {
		patterns: [
			{
				begin: "{",
				end: "}|(?=\\*/)",
				patterns: [
					{
						include: "#brackets"
					}
				]
			},
			{
				begin: "\\[",
				end: "\\]|(?=\\*/)",
				patterns: [
					{
						include: "#brackets"
					}
				]
			}
		]
	},
	"inline-tags": {
		patterns: [
			{
				name: "constant.other.description.jsdoc",
				match: "(\\[)[^\\]]+(\\])(?={@(?:link|linkcode|linkplain|tutorial))",
				captures: {
					"1": {
						name: "punctuation.definition.bracket.square.begin.jsdoc"
					},
					"2": {
						name: "punctuation.definition.bracket.square.end.jsdoc"
					}
				}
			},
			{
				name: "entity.name.type.instance.jsdoc",
				begin: "({)((@)(?:link(?:code|plain)?|tutorial))\\s*",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.bracket.curly.begin.jsdoc"
					},
					"2": {
						name: "storage.type.class.jsdoc"
					},
					"3": {
						name: "punctuation.definition.inline.tag.jsdoc"
					}
				},
				end: "}|(?=\\*/)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.bracket.curly.end.jsdoc"
					}
				},
				patterns: [
					{
						match: "\\G((?=https?://)(?:[^|}\\s*]|\\*[/])+)(\\|)?",
						captures: {
							"1": {
								name: "variable.other.link.underline.jsdoc"
							},
							"2": {
								name: "punctuation.separator.pipe.jsdoc"
							}
						}
					},
					{
						match: "\\G((?:[^{}@\\s|*]|\\*[^/])+)(\\|)?",
						captures: {
							"1": {
								name: "variable.other.description.jsdoc"
							},
							"2": {
								name: "punctuation.separator.pipe.jsdoc"
							}
						}
					}
				]
			}
		]
	},
	jsdoctype: {
		patterns: [
			{
				name: "invalid.illegal.type.jsdoc",
				match: "\\G{(?:[^}*]|\\*[^/}])+$"
			},
			{
				contentName: "entity.name.type.instance.jsdoc",
				begin: "\\G({)",
				beginCaptures: {
					"0": {
						name: "entity.name.type.instance.jsdoc"
					},
					"1": {
						name: "punctuation.definition.bracket.curly.begin.jsdoc"
					}
				},
				end: "((}))\\s*|(?=\\*/)",
				endCaptures: {
					"1": {
						name: "entity.name.type.instance.jsdoc"
					},
					"2": {
						name: "punctuation.definition.bracket.curly.end.jsdoc"
					}
				},
				patterns: [
					{
						include: "#brackets"
					}
				]
			}
		]
	}
};
const imba_tmLanguage = {
	name: name,
	scopeName: scopeName,
	fileTypes: fileTypes,
	uuid: uuid,
	patterns: patterns,
	repository: repository
};




/***/ })

};
;