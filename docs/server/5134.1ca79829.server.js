"use strict";
exports.id = 5134;
exports.ids = [5134];
exports.modules = {

/***/ 75134:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $schema: () => (/* binding */ $schema),
/* harmony export */   "default": () => (/* binding */ hc_light),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   tokenColors: () => (/* binding */ tokenColors)
/* harmony export */ });
const $schema = "vscode://schemas/color-theme";
const name = "hc_light";
const tokenColors = [
	{
		scope: [
			"meta.embedded",
			"source.groovy.embedded"
		],
		settings: {
			foreground: "#292929"
		}
	},
	{
		scope: "emphasis",
		settings: {
			fontStyle: "italic"
		}
	},
	{
		scope: "strong",
		settings: {
			fontStyle: "bold"
		}
	},
	{
		scope: "meta.diff.header",
		settings: {
			foreground: "#062F4A"
		}
	},
	{
		scope: "comment",
		settings: {
			foreground: "#515151"
		}
	},
	{
		scope: "constant.language",
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: [
			"constant.numeric",
			"variable.other.enummember",
			"keyword.operator.plus.exponent",
			"keyword.operator.minus.exponent"
		],
		settings: {
			foreground: "#096d48"
		}
	},
	{
		scope: "constant.regexp",
		settings: {
			foreground: "#811F3F"
		}
	},
	{
		scope: "entity.name.tag",
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: "entity.name.selector",
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: "entity.other.attribute-name",
		settings: {
			foreground: "#264F78"
		}
	},
	{
		scope: [
			"entity.other.attribute-name.class.css",
			"entity.other.attribute-name.class.mixin.css",
			"entity.other.attribute-name.id.css",
			"entity.other.attribute-name.parent-selector.css",
			"entity.other.attribute-name.pseudo-class.css",
			"entity.other.attribute-name.pseudo-element.css",
			"source.css.less entity.other.attribute-name.id",
			"entity.other.attribute-name.scss"
		],
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: "invalid",
		settings: {
			foreground: "#B5200D"
		}
	},
	{
		scope: "markup.underline",
		settings: {
			fontStyle: "underline"
		}
	},
	{
		scope: "markup.bold",
		settings: {
			foreground: "#000080",
			fontStyle: "bold"
		}
	},
	{
		scope: "markup.heading",
		settings: {
			foreground: "#0F4A85",
			fontStyle: "bold"
		}
	},
	{
		scope: "markup.italic",
		settings: {
			fontStyle: "italic"
		}
	},
	{
		scope: "markup.strikethrough",
		settings: {
			fontStyle: "strikethrough"
		}
	},
	{
		scope: "markup.inserted",
		settings: {
			foreground: "#096d48"
		}
	},
	{
		scope: "markup.deleted",
		settings: {
			foreground: "#5A5A5A"
		}
	},
	{
		scope: "markup.changed",
		settings: {
			foreground: "#0451A5"
		}
	},
	{
		scope: [
			"punctuation.definition.quote.begin.markdown",
			"punctuation.definition.list.begin.markdown"
		],
		settings: {
			foreground: "#0451A5"
		}
	},
	{
		scope: "markup.inline.raw",
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: "punctuation.definition.tag",
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: [
			"meta.preprocessor",
			"entity.name.function.preprocessor"
		],
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: "meta.preprocessor.string",
		settings: {
			foreground: "#b5200d"
		}
	},
	{
		scope: "meta.preprocessor.numeric",
		settings: {
			foreground: "#096d48"
		}
	},
	{
		scope: "meta.structure.dictionary.key.python",
		settings: {
			foreground: "#0451A5"
		}
	},
	{
		scope: "storage",
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: "storage.type",
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: [
			"storage.modifier",
			"keyword.operator.noexcept"
		],
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: [
			"string",
			"meta.embedded.assembly"
		],
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: [
			"string.comment.buffered.block.pug",
			"string.quoted.pug",
			"string.interpolated.pug",
			"string.unquoted.plain.in.yaml",
			"string.unquoted.plain.out.yaml",
			"string.unquoted.block.yaml",
			"string.quoted.single.yaml",
			"string.quoted.double.xml",
			"string.quoted.single.xml",
			"string.unquoted.cdata.xml",
			"string.quoted.double.html",
			"string.quoted.single.html",
			"string.unquoted.html",
			"string.quoted.single.handlebars",
			"string.quoted.double.handlebars"
		],
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: "string.regexp",
		settings: {
			foreground: "#811F3F"
		}
	},
	{
		scope: [
			"punctuation.definition.template-expression.begin",
			"punctuation.definition.template-expression.end",
			"punctuation.section.embedded"
		],
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: [
			"meta.template.expression"
		],
		settings: {
			foreground: "#000000"
		}
	},
	{
		scope: [
			"support.constant.property-value",
			"support.constant.font-name",
			"support.constant.media-type",
			"support.constant.media",
			"constant.other.color.rgb-value",
			"constant.other.rgb-value",
			"support.constant.color"
		],
		settings: {
			foreground: "#0451A5"
		}
	},
	{
		scope: [
			"support.type.vendored.property-name",
			"support.type.property-name",
			"variable.css",
			"variable.scss",
			"variable.other.less",
			"source.coffee.embedded"
		],
		settings: {
			foreground: "#264F78"
		}
	},
	{
		scope: [
			"support.type.property-name.json"
		],
		settings: {
			foreground: "#0451A5"
		}
	},
	{
		scope: "keyword",
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: "keyword.control",
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: "keyword.operator",
		settings: {
			foreground: "#000000"
		}
	},
	{
		scope: [
			"keyword.operator.new",
			"keyword.operator.expression",
			"keyword.operator.cast",
			"keyword.operator.sizeof",
			"keyword.operator.alignof",
			"keyword.operator.typeid",
			"keyword.operator.alignas",
			"keyword.operator.instanceof",
			"keyword.operator.logical.python",
			"keyword.operator.wordlike"
		],
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: "keyword.other.unit",
		settings: {
			foreground: "#096d48"
		}
	},
	{
		scope: [
			"punctuation.section.embedded.begin.php",
			"punctuation.section.embedded.end.php"
		],
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: "support.function.git-rebase",
		settings: {
			foreground: "#0451A5"
		}
	},
	{
		scope: "constant.sha.git-rebase",
		settings: {
			foreground: "#096d48"
		}
	},
	{
		scope: [
			"storage.modifier.import.java",
			"variable.language.wildcard.java",
			"storage.modifier.package.java"
		],
		settings: {
			foreground: "#000000"
		}
	},
	{
		scope: "variable.language",
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: [
			"entity.name.function",
			"support.function",
			"support.constant.handlebars",
			"source.powershell variable.other.member",
			"entity.name.operator.custom-literal"
		],
		settings: {
			foreground: "#5e2cbc"
		}
	},
	{
		scope: [
			"support.class",
			"support.type",
			"entity.name.type",
			"entity.name.namespace",
			"entity.other.attribute",
			"entity.name.scope-resolution",
			"entity.name.class",
			"storage.type.numeric.go",
			"storage.type.byte.go",
			"storage.type.boolean.go",
			"storage.type.string.go",
			"storage.type.uintptr.go",
			"storage.type.error.go",
			"storage.type.rune.go",
			"storage.type.cs",
			"storage.type.generic.cs",
			"storage.type.modifier.cs",
			"storage.type.variable.cs",
			"storage.type.annotation.java",
			"storage.type.generic.java",
			"storage.type.java",
			"storage.type.object.array.java",
			"storage.type.primitive.array.java",
			"storage.type.primitive.java",
			"storage.type.token.java",
			"storage.type.groovy",
			"storage.type.annotation.groovy",
			"storage.type.parameters.groovy",
			"storage.type.generic.groovy",
			"storage.type.object.array.groovy",
			"storage.type.primitive.array.groovy",
			"storage.type.primitive.groovy"
		],
		settings: {
			foreground: "#185E73"
		}
	},
	{
		scope: [
			"meta.type.cast.expr",
			"meta.type.new.expr",
			"support.constant.math",
			"support.constant.dom",
			"support.constant.json",
			"entity.other.inherited-class"
		],
		settings: {
			foreground: "#185E73"
		}
	},
	{
		scope: [
			"keyword.control",
			"source.cpp keyword.operator.new",
			"source.cpp keyword.operator.delete",
			"keyword.other.using",
			"keyword.other.operator",
			"entity.name.operator"
		],
		settings: {
			foreground: "#b5200d"
		}
	},
	{
		scope: [
			"variable",
			"meta.definition.variable.name",
			"support.variable",
			"entity.name.variable",
			"constant.other.placeholder"
		],
		settings: {
			foreground: "#001080"
		}
	},
	{
		scope: [
			"variable.other.constant",
			"variable.other.enummember"
		],
		settings: {
			foreground: "#02715D"
		}
	},
	{
		scope: [
			"meta.object-literal.key"
		],
		settings: {
			foreground: "#001080"
		}
	},
	{
		scope: [
			"support.constant.property-value",
			"support.constant.font-name",
			"support.constant.media-type",
			"support.constant.media",
			"constant.other.color.rgb-value",
			"constant.other.rgb-value",
			"support.constant.color"
		],
		settings: {
			foreground: "#0451A5"
		}
	},
	{
		scope: [
			"punctuation.definition.group.regexp",
			"punctuation.definition.group.assertion.regexp",
			"punctuation.definition.character-class.regexp",
			"punctuation.character.set.begin.regexp",
			"punctuation.character.set.end.regexp",
			"keyword.operator.negation.regexp",
			"support.other.parenthesis.regexp"
		],
		settings: {
			foreground: "#D16969"
		}
	},
	{
		scope: [
			"constant.character.character-class.regexp",
			"constant.other.character-class.set.regexp",
			"constant.other.character-class.regexp",
			"constant.character.set.regexp"
		],
		settings: {
			foreground: "#811F3F"
		}
	},
	{
		scope: "keyword.operator.quantifier.regexp",
		settings: {
			foreground: "#000000"
		}
	},
	{
		scope: [
			"keyword.operator.or.regexp",
			"keyword.control.anchor.regexp"
		],
		settings: {
			foreground: "#EE0000"
		}
	},
	{
		scope: "constant.character",
		settings: {
			foreground: "#0F4A85"
		}
	},
	{
		scope: "constant.character.escape",
		settings: {
			foreground: "#EE0000"
		}
	},
	{
		scope: "entity.name.label",
		settings: {
			foreground: "#000000"
		}
	},
	{
		scope: "token.info-token",
		settings: {
			foreground: "#316BCD"
		}
	},
	{
		scope: "token.warn-token",
		settings: {
			foreground: "#CD9731"
		}
	},
	{
		scope: "token.error-token",
		settings: {
			foreground: "#CD3131"
		}
	},
	{
		scope: "token.debug-token",
		settings: {
			foreground: "#800080"
		}
	}
];
const hc_light = {
	$schema: $schema,
	name: name,
	tokenColors: tokenColors
};




/***/ })

};
;