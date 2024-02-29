"use strict";
exports.id = 9670;
exports.ids = [9670];
exports.modules = {

/***/ 89670:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $schema: () => (/* binding */ $schema),
/* harmony export */   "default": () => (/* binding */ ada_tmLanguage),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   patterns: () => (/* binding */ patterns),
/* harmony export */   repository: () => (/* binding */ repository),
/* harmony export */   scopeName: () => (/* binding */ scopeName)
/* harmony export */ });
const $schema = "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json";
const name = "ada";
const patterns = [
	{
		include: "#library_unit"
	},
	{
		include: "#comment"
	},
	{
		include: "#use_clause"
	},
	{
		include: "#with_clause"
	},
	{
		include: "#pragma"
	},
	{
		include: "#keyword"
	}
];
const repository = {
	abort_statement: {
		name: "meta.statement.abort.ada",
		begin: "(?i)\\babort\\b",
		end: ";",
		beginCaptures: {
			"0": {
				name: "keyword.control.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				name: "punctuation.ada",
				match: ","
			},
			{
				name: "entity.name.task.ada",
				match: "\\b(\\w|\\d|\\.|_)+\\b"
			}
		]
	},
	accept_statement: {
		name: "meta.statement.accept.ada",
		begin: "(?i)\\b(accept)\\s+((?:\\w|\\d|\\.|_)+)\\b",
		end: "(?i)(?:\\b(end)\\s*(\\s\\2)?\\s*)?(;)",
		beginCaptures: {
			"1": {
				name: "keyword.control.ada"
			},
			"2": {
				name: "entity.name.accept.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.control.ada"
			},
			"2": {
				name: "entity.name.accept.ada"
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bdo\\b",
				end: "(?i)\\b(?=end)\\b",
				beginCaptures: {
					"0": {
						name: "keyword.control.ada"
					}
				},
				patterns: [
					{
						include: "#statement"
					}
				]
			},
			{
				include: "#parameter_profile"
			}
		]
	},
	access_definition: {
		name: "meta.declaration.access.definition.ada",
		match: "(?i)(not\\s+null\\s+)?(access)\\s+(constant\\s+)?((?:\\w|\\d|\\.|_)+)\\b",
		captures: {
			"1": {
				name: "storage.visibility.ada"
			},
			"2": {
				name: "storage.visibility.ada"
			},
			"3": {
				name: "storage.modifier.ada"
			},
			"4": {
				name: "entity.name.type.ada"
			}
		}
	},
	access_type_definition: {
		name: "meta.declaration.type.definition.access.ada",
		begin: "(?i)\\b(not\\s+null\\s+)?(access)\\b",
		end: "(?i)(?=(with|;))",
		beginCaptures: {
			"1": {
				name: "storage.visibility.ada"
			},
			"2": {
				name: "storage.visibility.ada"
			}
		},
		patterns: [
			{
				name: "storage.visibility.ada",
				match: "(?i)\\ball\\b"
			},
			{
				name: "storage.modifier.ada",
				match: "(?i)\\bconstant\\b"
			},
			{
				include: "#subtype_mark"
			}
		]
	},
	actual_parameter_part: {
		begin: "\\(",
		end: "\\)",
		captures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				name: "punctuation.ada",
				match: ","
			},
			{
				include: "#parameter_association"
			}
		]
	},
	adding_operator: {
		name: "keyword.operator.adding.ada",
		match: "(\\+|-|\\&)"
	},
	array_aggregate: {
		name: "meta.definition.array.aggregate.ada",
		begin: "\\(",
		end: "\\)",
		captures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				name: "punctuation.ada",
				match: ","
			},
			{
				include: "#positional_array_aggregate"
			},
			{
				include: "#array_component_association"
			}
		]
	},
	array_component_association: {
		name: "meta.definition.array.aggregate.component.ada",
		match: "(?i)\\b([^(=>)]*)\\s*(=>)\\s*([^,\\)]+)",
		captures: {
			"1": {
				name: "variable.name.ada"
			},
			"2": {
				name: "keyword.other.ada"
			},
			"3": {
				patterns: [
					{
						name: "keyword.modifier.unknown.ada",
						match: "<>"
					},
					{
						include: "#expression"
					}
				]
			}
		}
	},
	array_dimensions: {
		name: "meta.declaration.type.definition.array.dimensions.ada",
		begin: "\\(",
		end: "\\)",
		captures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				name: "punctuation.ada",
				match: ","
			},
			{
				name: "storage.modifier.ada",
				match: "(?i)\\brange\\b"
			},
			{
				name: "keyword.modifier.unknown.ada",
				match: "<>"
			},
			{
				name: "keyword.ada",
				match: "\\.\\."
			},
			{
				include: "#expression"
			},
			{
				patterns: [
					{
						include: "#subtype_mark"
					}
				]
			}
		]
	},
	array_type_definition: {
		name: "meta.declaration.type.definition.array.ada",
		begin: "(?i)\\barray\\b",
		end: "(?i)(?=(with|;))",
		beginCaptures: {
			"0": {
				name: "storage.modifier.ada"
			}
		},
		patterns: [
			{
				include: "#array_dimensions"
			},
			{
				name: "storage.modifier.ada",
				match: "(?i)\\bof\\b"
			},
			{
				name: "storage.visibility.ada",
				match: "(?i)\\baliased\\b"
			},
			{
				include: "#access_definition"
			},
			{
				include: "#subtype_mark"
			}
		]
	},
	aspect_clause: {
		name: "meta.aspect.clause.ada",
		begin: "(?i)\\b(for)\\b",
		end: ";",
		beginCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				patterns: [
					{
						include: "#subtype_mark"
					}
				]
			},
			"3": {
				name: "punctuation.ada"
			},
			"5": {
				name: "keyword.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\buse\\b",
				end: "(?=;)",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				endCaptures: {
					"0": {
						name: "punctuation.ada"
					}
				},
				patterns: [
					{
						include: "#record_representation_clause"
					},
					{
						include: "#array_aggregate"
					},
					{
						include: "#expression"
					}
				]
			},
			{
				begin: "(?i)(?<=for)",
				end: "(?i)(?=use)",
				captures: {
					"0": {
						name: "keyword.ada"
					}
				},
				patterns: [
					{
						match: "((?:\\w|\\d|_)+)('((?:\\w|\\d|_)+))?",
						captures: {
							"1": {
								patterns: [
									{
										include: "#subtype_mark"
									}
								]
							},
							"2": {
								patterns: [
									{
										include: "#attribute"
									}
								]
							}
						}
					}
				]
			}
		]
	},
	aspect_definition: {
		name: "meta.aspect.definition.ada",
		begin: "=>",
		end: "(?i)(?=(,|;|\\bis\\b))",
		beginCaptures: {
			"0": {
				name: "keyword.other.ada"
			}
		},
		patterns: [
			{
				include: "#expression"
			}
		]
	},
	aspect_mark: {
		name: "meta.aspect.mark.ada",
		match: "(?i)\\b((?:\\w|\\d|\\.|_)+)(?:(')(class))?\\b",
		captures: {
			"1": {
				name: "keyword.control.directive.ada"
			},
			"2": {
				name: "punctuation.ada"
			},
			"3": {
				name: "entity.other.attribute-name.ada"
			}
		}
	},
	aspect_specification: {
		name: "meta.aspect.specification.ada",
		begin: "(?i)\\bwith\\b",
		end: "(?i)(?=(;|\\bis\\b))",
		beginCaptures: {
			"0": {
				name: "keyword.ada"
			}
		},
		patterns: [
			{
				name: "punctuation.ada",
				match: ","
			},
			{
				match: "(?i)\\b(null)\\s+(record)\\b",
				captures: {
					"1": {
						name: "storage.modifier.ada"
					},
					"2": {
						name: "storage.modifier.ada"
					}
				}
			},
			{
				begin: "(?i)\\brecord\\b",
				end: "(?i)\\b(end)\\s+(record)\\b",
				beginCaptures: {
					"0": {
						name: "storage.modifier.ada"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.ada"
					},
					"2": {
						name: "storage.modifier.ada"
					}
				},
				patterns: [
					{
						include: "#component_item"
					}
				]
			},
			{
				match: "(?i)\\bprivate\\b",
				captures: {
					"0": {
						name: "storage.visibility.ada"
					}
				}
			},
			{
				include: "#aspect_definition"
			},
			{
				include: "#aspect_mark"
			},
			{
				include: "#comment"
			}
		]
	},
	assignment_statement: {
		name: "meta.statement.assignment.ada",
		begin: "\\b((?:\\w|\\d|\\.|_|\\(|\\)|\"|'|\\s)+)\\s*(:=)",
		end: ";",
		beginCaptures: {
			"1": {
				patterns: [
					{
						match: "((?:\\w|\\d|\\.|_)+)",
						name: "variable.name.ada"
					},
					{
						begin: "\\(",
						end: "\\)",
						captures: {
							"0": {
								name: "punctuation.ada"
							}
						},
						patterns: [
							{
								include: "#expression"
							}
						]
					}
				]
			},
			"2": {
				name: "keyword.operator.new.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				include: "#expression"
			},
			{
				include: "#comment"
			}
		]
	},
	attribute: {
		name: "meta.attribute.ada",
		match: "(')((?:\\w|\\d|_)+)\\b",
		captures: {
			"1": {
				name: "punctuation.ada"
			},
			"2": {
				name: "entity.other.attribute-name.ada"
			}
		}
	},
	based_literal: {
		name: "constant.numeric.ada",
		match: "(?i)(\\d(?:(_)?\\d)*#)[0-9a-f](?:(_)?[0-9a-f])*(?:(\\.)[0-9a-f](?:(_)?[0-9a-f])*)?(#)([eE](?:\\+|\\-)?\\d(?:_?\\d)*)?",
		captures: {
			"1": {
				name: "constant.numeric.base.ada"
			},
			"2": {
				name: "punctuation.ada"
			},
			"3": {
				name: "punctuation.ada"
			},
			"4": {
				name: "punctuation.radix-point.ada"
			},
			"5": {
				name: "punctuation.ada"
			},
			"6": {
				name: "constant.numeric.base.ada"
			},
			"7": {
				patterns: [
					{
						include: "#exponent_part"
					}
				]
			}
		}
	},
	basic_declarative_item: {
		patterns: [
			{
				include: "#basic_declaration"
			},
			{
				include: "#aspect_clause"
			},
			{
				include: "#use_clause"
			},
			{
				include: "#keyword"
			}
		]
	},
	basic_declaration: {
		patterns: [
			{
				include: "#type_declaration"
			},
			{
				include: "#subtype_declaration"
			},
			{
				include: "#exception_declaration"
			},
			{
				include: "#object_declaration"
			},
			{
				include: "#single_protected_declaration"
			},
			{
				include: "#single_task_declaration"
			},
			{
				include: "#subprogram_specification"
			},
			{
				include: "#package_declaration"
			},
			{
				include: "#pragma"
			},
			{
				include: "#comment"
			}
		]
	},
	block_statement: {
		name: "meta.statement.block.ada",
		begin: "(?i)\\bdeclare\\b",
		end: "(?i)\\b(end)(\\s+(?:\\w|\\d|_)+)?\\s*(;)",
		beginCaptures: {
			"0": {
				name: "keyword.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "entity.name.label.ada"
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)(?<=declare)",
				end: "(?i)\\bbegin\\b",
				endCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				patterns: [
					{
						include: "#body"
					},
					{
						include: "#basic_declarative_item"
					}
				]
			},
			{
				begin: "(?i)(?<=begin)",
				end: "(?i)(?=end)",
				patterns: [
					{
						include: "#statement"
					}
				]
			}
		]
	},
	body: {
		patterns: [
			{
				include: "#subprogram_body"
			},
			{
				include: "#package_body"
			},
			{
				include: "#task_body"
			},
			{
				include: "#protected_body"
			}
		]
	},
	case_statement: {
		name: "meta.statement.case.ada",
		begin: "(?i)\\bcase\\b",
		end: "(?i)\\b(end)\\s+(case)\\s*(;)",
		beginCaptures: {
			"0": {
				name: "keyword.control.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.control.ada"
			},
			"2": {
				name: "keyword.control.ada"
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)(?<=case)\\b",
				end: "(?i)\\bis\\b",
				endCaptures: {
					"0": {
						name: "keyword.control.ada"
					}
				},
				patterns: [
					{
						include: "#expression"
					}
				]
			},
			{
				name: "meta.statement.case.alternative.ada",
				begin: "(?i)\\bwhen\\b",
				end: "=>",
				beginCaptures: {
					"0": {
						name: "keyword.control.ada"
					}
				},
				endCaptures: {
					"0": {
						name: "punctuation.ada"
					}
				},
				patterns: [
					{
						name: "keyword.modifier.unknown.ada",
						match: "(?i)\\bothers\\b"
					},
					{
						name: "punctuation.ada",
						match: "\\|"
					},
					{
						include: "#expression"
					}
				]
			},
			{
				include: "#statement"
			}
		]
	},
	character_literal: {
		name: "string.quoted.single.ada",
		match: "'.'",
		captures: {
			"0": {
				patterns: [
					{
						name: "punctuation.definition.string.ada",
						match: "'"
					}
				]
			}
		}
	},
	comment: {
		patterns: [
			{
				include: "#preprocessor"
			},
			{
				include: "#comment-section"
			},
			{
				include: "#comment-doc"
			},
			{
				include: "#comment-line"
			}
		]
	},
	"comment-doc": {
		name: "comment.block.documentation.ada",
		match: "(--)\\s*(@)(\\w+)\\s+(.*)$",
		captures: {
			"1": {
				name: "comment.line.double-dash.ada"
			},
			"2": {
				name: "punctuation.definition.tag.ada"
			},
			"3": {
				name: "entity.name.tag.ada"
			},
			"4": {
				name: "comment.line.double-dash.ada"
			}
		}
	},
	"comment-line": {
		name: "comment.line.double-dash.ada",
		match: "--.*$"
	},
	"comment-section": {
		name: "comment.line.double-dash.ada",
		match: "--\\s*([^-].*?[^-])\\s*--\\s*$",
		captures: {
			"1": {
				name: "entity.name.section.ada"
			}
		}
	},
	component_clause: {
		name: "meta.aspect.clause.record.representation.component.ada",
		begin: "(?i)\\b((?:\\w|\\d|_)+)\\b",
		beginCaptures: {
			"0": {
				name: "variable.name.ada"
			}
		},
		end: ";",
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bat\\b",
				end: "(?i)\\b(?=range)\\b",
				beginCaptures: {
					"0": {
						name: "storage.modifier.ada"
					}
				},
				patterns: [
					{
						include: "#expression"
					}
				]
			},
			{
				include: "#range_constraint"
			}
		]
	},
	component_declaration: {
		name: "meta.declaration.type.definition.record.component.ada",
		begin: "(?i)\\b((?:\\w|\\d|_)+(?:\\s*,\\s*(?:\\w|\\d|_)+)?)\\s*(:)",
		end: ";",
		beginCaptures: {
			"1": {
				patterns: [
					{
						name: "punctuation.ada",
						match: ","
					},
					{
						name: "variable.name.ada",
						match: "\\b(\\w|\\d|_)+\\b"
					}
				]
			},
			"2": {
				name: "punctuation.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				patterns: [
					{
						name: "keyword.operator.new.ada",
						match: ":="
					},
					{
						include: "#expression"
					}
				]
			},
			{
				include: "#component_definition"
			}
		]
	},
	component_definition: {
		patterns: [
			{
				name: "storage.visibility.ada",
				match: "(?i)\\baliased\\b"
			},
			{
				name: "storage.modifier.ada",
				match: "(?i)\\brange\\b"
			},
			{
				name: "keyword.ada",
				match: "\\.\\."
			},
			{
				include: "#access_definition"
			},
			{
				include: "#subtype_mark"
			}
		]
	},
	component_item: {
		patterns: [
			{
				include: "#component_declaration"
			},
			{
				include: "#variant_part"
			},
			{
				include: "#comment"
			},
			{
				include: "#aspect_clause"
			},
			{
				match: "(?i)\\b(null)\\s*(;)",
				captures: {
					"1": {
						name: "keyword.ada"
					},
					"2": {
						name: "punctuation.ada"
					}
				}
			}
		]
	},
	composite_constraint: {
		name: "meta.declaration.constraint.composite.ada",
		begin: "\\(",
		end: "\\)",
		captures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				name: "punctuation.ada",
				match: ","
			},
			{
				name: "keyword.ada",
				match: "\\.\\."
			},
			{
				match: "(?i)\\b((?:\\w|\\d|_)+)\\s*(=>)\\s*([^,\\)])+\\b",
				captures: {
					"1": {
						name: "variable.name.ada"
					},
					"2": {
						name: "keyword.other.ada"
					},
					"3": {
						patterns: [
							{
								include: "#expression"
							}
						]
					}
				}
			},
			{
				include: "#expression"
			}
		]
	},
	decimal_literal: {
		name: "constant.numeric.ada",
		match: "\\d(?:(_)?\\d)*(?:(\\.)\\d(?:(_)?\\d)*)?([eE](?:\\+|\\-)?\\d(?:_?\\d)*)?",
		captures: {
			"1": {
				name: "punctuation.ada"
			},
			"2": {
				name: "punctuation.radix-point.ada"
			},
			"3": {
				name: "punctuation.ada"
			},
			"4": {
				patterns: [
					{
						include: "#exponent_part"
					}
				]
			}
		}
	},
	declarative_item: {
		patterns: [
			{
				include: "#body"
			},
			{
				include: "#basic_declarative_item"
			}
		]
	},
	delay_statement: {
		patterns: [
			{
				include: "#delay_until_statement"
			},
			{
				include: "#delay_relative_statement"
			}
		]
	},
	delay_until_statement: {
		name: "meta.statement.delay.until.ada",
		begin: "(?i)\\b(delay)\\s+(until)\\b",
		end: ";",
		beginCaptures: {
			"1": {
				name: "keyword.control.ada"
			},
			"2": {
				name: "keyword.control.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				include: "#expression"
			}
		]
	},
	delay_relative_statement: {
		begin: "(?i)\\b(delay)\\b",
		end: ";",
		beginCaptures: {
			"1": {
				name: "keyword.control.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				include: "#expression"
			}
		]
	},
	derived_type_definition: {
		name: "meta.declaration.type.definition.derived.ada",
		patterns: [
			{
				begin: "(?i)\\bnew\\b",
				beginCaptures: {
					"0": {
						name: "storage.modifier.ada"
					}
				},
				end: "(?i)(?=(\\bwith\\b|;))",
				patterns: [
					{
						name: "storage.modifier.ada",
						match: "(?i)\\band\\b"
					},
					{
						include: "#subtype_mark"
					}
				]
			},
			{
				name: "storage.modifier.ada",
				match: "(?i)\\b(abstract|and|limited|tagged)\\b"
			},
			{
				name: "storage.visibility.ada",
				match: "(?i)\\bprivate\\b"
			},
			{
				include: "#subtype_mark"
			}
		]
	},
	discriminant_specification: {
		begin: "(?i)\\b((?:\\w|\\d|_)+(?:\\s*,\\s*(?:\\w|\\d|_)+)?)\\s*(:)",
		end: "(?=(;|\\)))",
		beginCaptures: {
			"1": {
				patterns: [
					{
						name: "punctuation.ada",
						match: ","
					},
					{
						name: "variable.name.ada",
						match: "\\b(\\w|\\d|_)+\\b"
					}
				]
			},
			"2": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: ":=",
				end: "(?=(;|\\)))",
				beginCaptures: {
					"0": {
						name: "keyword.operator.new.ada"
					}
				},
				patterns: [
					{
						include: "#expression"
					}
				]
			},
			{
				match: "(?i)(not\\s+null\\s+)?((?:\\w|\\d|\\.|_)+)\\b",
				captures: {
					"1": {
						name: "storage.visibility.ada"
					},
					"2": {
						patterns: [
							{
								include: "#subtype_mark"
							}
						]
					}
				}
			},
			{
				include: "#access_definition"
			}
		]
	},
	entry_body: {
		begin: "(?i)\\b(entry)\\s+((?:\\w|\\d|_)+)\\b",
		end: "(?i)\\b(end)\\s*(\\s\\2)\\s*(;)",
		beginCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "entity.name.entry.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "entity.name.entry.ada"
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bis\\b",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				end: "(?i)\\b(?=begin)\\b",
				patterns: [
					{
						include: "#declarative_item"
					}
				]
			},
			{
				begin: "(?i)\\bbegin\\b",
				end: "(?i)\\b(?=end)\\b",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				patterns: [
					{
						include: "#statement"
					}
				]
			},
			{
				begin: "(?i)\\bwhen\\b",
				end: "(?i)\\b(?=is)\\b",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				patterns: [
					{
						include: "#expression"
					}
				]
			},
			{
				include: "#parameter_profile"
			}
		]
	},
	entry_declaration: {
		begin: "(?i)\\b(?:(not)?\\s+(overriding)\\s+)?(entry)\\s+((?:\\w|\\d|_)+)\\b",
		end: ";",
		beginCaptures: {
			"1": {
				name: "storage.modifier.ada"
			},
			"2": {
				name: "storage.modifier.ada"
			},
			"3": {
				name: "keyword.ada"
			},
			"4": {
				name: "entity.name.entry.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				include: "#parameter_profile"
			}
		]
	},
	enumeration_type_definition: {
		name: "meta.declaration.type.definition.enumeration.ada",
		begin: "\\(",
		end: "\\)",
		beginCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				name: "punctuation.ada",
				match: ","
			},
			{
				name: "variable.name.ada",
				match: "\\b(\\w|\\d|_)+\\b"
			},
			{
				include: "#comment"
			}
		]
	},
	exception_declaration: {
		name: "meta.declaration.exception.ada",
		begin: "(?i)\\b((?:\\w|\\d|_)+(?:\\s*,\\s*(?:\\w|\\d|_)+)?)\\s*(:)\\s*(exception)",
		beginCaptures: {
			"1": {
				patterns: [
					{
						name: "punctuation.ada",
						match: ","
					},
					{
						name: "entity.name.exception.ada",
						match: "\\b(\\w|\\d|_)+\\b"
					}
				]
			},
			"2": {
				name: "punctuation.ada"
			},
			"3": {
				name: "storage.type.ada"
			}
		},
		end: ";",
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				match: "(?i)\\b(renames)\\s+((\\w|\\d|_|\\.)+)",
				name: "entity.name.exception.ada"
			}
		]
	},
	exit_statement: {
		name: "meta.statement.exit.ada",
		begin: "(?i)\\bexit\\b",
		end: ";",
		beginCaptures: {
			"0": {
				name: "keyword.control.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bwhen\\b",
				end: "(?=;)",
				beginCaptures: {
					"0": {
						name: "keyword.control.ada"
					}
				},
				patterns: [
					{
						include: "#expression"
					}
				]
			},
			{
				match: "(?:\\w|\\d|_)+",
				name: "entity.name.label.ada"
			}
		]
	},
	exponent_part: {
		match: "([eE])(\\+|\\-)?\\d(?:(_)?\\d)*",
		captures: {
			"1": {
				name: "punctuation.exponent-mark.ada"
			},
			"2": {
				name: "keyword.operator.unary.ada"
			},
			"3": {
				name: "punctuation.ada"
			}
		}
	},
	expression: {
		name: "meta.expression.ada",
		patterns: [
			{
				match: "(?i)\\bnull\\b",
				name: "constant.language.ada"
			},
			{
				match: "=>(\\+)?",
				name: "keyword.other.ada"
			},
			{
				begin: "\\(",
				end: "\\)",
				captures: {
					"0": {
						name: "punctuation.ada"
					}
				},
				patterns: [
					{
						include: "#expression"
					}
				]
			},
			{
				match: ",",
				name: "punctuation.ada"
			},
			{
				match: "\\.\\.",
				name: "keyword.ada"
			},
			{
				include: "#value"
			},
			{
				include: "#attribute"
			},
			{
				include: "#comment"
			},
			{
				include: "#operator"
			},
			{
				match: "(?i)\\b(and|or|xor)\\b",
				name: "keyword.ada"
			},
			{
				match: "(?i)\\b(if|then|else|elsif|in|for|(?<!\\.)all|some|\\.\\.|delta|with)\\b",
				name: "keyword.ada"
			}
		]
	},
	for_loop_statement: {
		name: "meta.statement.loop.for.ada",
		begin: "(?i)\\bfor\\b",
		end: "(?i)\\b(end)\\s+(loop)(\\s+(?:\\w|\\d|_)+)?\\s*(;)",
		beginCaptures: {
			"0": {
				name: "keyword.control.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.control.ada"
			},
			"2": {
				name: "keyword.control.ada"
			},
			"3": {
				name: "entity.name.label.ada"
			},
			"4": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)(?<=for)",
				end: "(?i)\\bloop\\b",
				endCaptures: {
					"0": {
						name: "keyword.control.ada"
					}
				},
				patterns: [
					{
						match: "(?i)\\b((?:\\w|\\d|_)+)\\s+(in)(\\s+reverse)?\\b",
						captures: {
							"1": {
								name: "variable.name.ada"
							},
							"2": {
								name: "keyword.control.ada"
							},
							"3": {
								name: "keyword.control.ada"
							}
						}
					},
					{
						match: "(?i)\\b((?:\\w|\\d|_)+)(?:\\s*(:)\\s*((?:\\w|\\d|\\.|_)+))?\\s+(of)(\\s+reverse)?\\b",
						captures: {
							"1": {
								name: "variable.name.ada"
							},
							"2": {
								name: "punctuation.ada"
							},
							"3": {
								patterns: [
									{
										include: "#subtype_mark"
									}
								]
							},
							"4": {
								name: "keyword.control.ada"
							},
							"5": {
								name: "keyword.control.ada"
							}
						}
					},
					{
						include: "#expression"
					}
				]
			},
			{
				include: "#statement"
			}
		]
	},
	full_type_declaration: {
		patterns: [
			{
				include: "#task_type_declaration"
			},
			{
				include: "#regular_type_declaration"
			}
		]
	},
	function_body: {
		name: "meta.declaration.function.body.ada",
		begin: "(?i)\\b(overriding\\s+)?(function)\\s+(?:((?:\\w|\\d|\\.|_)+\\b)|(\".+\"))",
		end: "(?i)(?:\\b(end)\\s+(\\3|\\4)\\s*)?(;)",
		beginCaptures: {
			"1": {
				name: "storage.visibility.ada"
			},
			"2": {
				name: "keyword.ada"
			},
			"3": {
				name: "entity.name.function.ada"
			},
			"4": {
				patterns: [
					{
						include: "#string_literal"
					}
				]
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "entity.name.function.ada"
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bbegin\\b",
				end: "(?i)(?=end)",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				patterns: [
					{
						include: "#handled_sequence_of_statements"
					}
				]
			},
			{
				include: "#aspect_specification"
			},
			{
				include: "#result_profile"
			},
			{
				include: "#subprogram_renaming_declaration"
			},
			{
				include: "#parameter_profile"
			},
			{
				name: "meta.function.body.spec_part.ada",
				begin: "(?i)\\bis\\b",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				end: "(?i)(?=(with|begin|;))",
				patterns: [
					{
						name: "meta.declaration.package.generic.ada",
						begin: "(?i)\\bnew\\b",
						beginCaptures: {
							"0": {
								name: "keyword.operator.new.ada"
							}
						},
						end: "(?=;)",
						patterns: [
							{
								match: "((?:\\w|\\d|\\.|_)+)",
								name: "entity.name.function.ada"
							},
							{
								include: "#actual_parameter_part"
							}
						]
					},
					{
						name: "meta.declaration.function.abstract.ada",
						match: "(?i)\\babstract\\b",
						captures: {
							"0": {
								name: "storage.modifier.ada"
							}
						}
					},
					{
						include: "#declarative_item"
					},
					{
						include: "#subprogram_renaming_declaration"
					},
					{
						include: "#expression"
					}
				]
			}
		]
	},
	function_specification: {
		patterns: [
			{
				include: "#function_body"
			}
		]
	},
	goto_statement: {
		name: "meta.statement.goto.ada",
		begin: "(?i)\\bgoto\\b",
		end: ";",
		beginCaptures: {
			"0": {
				name: "keyword.control.goto.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
			}
		]
	},
	guard: {
		begin: "(?i)\\bwhen\\b",
		end: "=>",
		beginCaptures: {
			"0": {
				name: "keyword.control.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "keyword.other.ada"
			}
		},
		patterns: [
			{
				include: "#expression"
			}
		]
	},
	handled_sequence_of_statements: {
		patterns: [
			{
				name: "meta.handler.exception.ada",
				begin: "(?i)\\bexception\\b",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				end: "(?i)\\b(?=end)\\b",
				patterns: [
					{
						begin: "(?i)\\bwhen\\b",
						end: "=>",
						beginCaptures: {
							"0": {
								name: "keyword.ada"
							}
						},
						endCaptures: {
							"0": {
								name: "keyword.other.ada"
							}
						},
						patterns: [
							{
								match: "\\b((?:\\w|\\d|\\.|_)+)\\s*(:)",
								captures: {
									"1": {
										name: "variable.name.ada"
									},
									"2": {
										name: "punctuation.ada"
									}
								}
							},
							{
								match: "\\|",
								name: "punctuation.ada"
							},
							{
								match: "(?i)\\bothers\\b",
								name: "keyword.ada"
							},
							{
								match: "(?:\\w|\\d|\\.|_)+",
								name: "entity.name.exception.ada"
							}
						]
					},
					{
						include: "#statement"
					}
				]
			},
			{
				include: "#statement"
			}
		]
	},
	highest_precedence_operator: {
		name: "keyword.operator.highest-precedence.ada",
		match: "(?i)(\\*\\*|\\babs\\b|\\bnot\\b)"
	},
	if_statement: {
		name: "meta.statement.if.ada",
		begin: "(?i)\\bif\\b",
		end: "(?i)\\b(end)\\s+(if)\\s*(;)",
		beginCaptures: {
			"0": {
				name: "keyword.control.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.control.ada"
			},
			"2": {
				name: "keyword.control.ada"
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\belsif\\b",
				end: "(?i)(?:(?<!\\sand)\\s+(?=then))",
				beginCaptures: {
					"0": {
						name: "keyword.control.ada"
					}
				},
				patterns: [
					{
						include: "#expression"
					}
				]
			},
			{
				begin: "(?i)\\belse\\b",
				end: "(?i)(?=end)",
				beginCaptures: {
					"0": {
						name: "keyword.control.ada"
					}
				},
				patterns: [
					{
						include: "#statement"
					}
				]
			},
			{
				begin: "(?i)(?<=if)\\b",
				end: "(?i)(?:(?<!\\sand)\\s+(?=then))",
				endCaptures: {
					"0": {
						name: "keyword.control.ada"
					}
				},
				patterns: [
					{
						include: "#expression"
					}
				]
			},
			{
				begin: "(?i)\\bthen\\b",
				end: "(?i)(?=(elsif|else|end))",
				beginCaptures: {
					"0": {
						name: "keyword.control.ada"
					}
				},
				patterns: [
					{
						include: "#statement"
					}
				]
			}
		]
	},
	integer_type_definition: {
		name: "meta.declaration.type.definition.integer.ada",
		patterns: [
			{
				include: "#signed_integer_type_definition"
			},
			{
				include: "#modular_type_definition"
			}
		]
	},
	interface_type_definition: {
		name: "meta.declaration.type.definition.interface.ada",
		begin: "(?i)\\b(?:(limited|task|protected|synchronized)\\s+)?(interface)",
		end: "(?i)(?=(with|;))",
		beginCaptures: {
			"1": {
				name: "storage.modifier.ada"
			},
			"2": {
				name: "storage.modifier.ada"
			}
		},
		patterns: [
			{
				name: "storage.modifier.ada",
				match: "(?i)\\band\\b"
			},
			{
				include: "#subtype_mark"
			}
		]
	},
	keyword: {
		patterns: [
			{
				name: "keyword.ada",
				match: "(?i)\\b(abort|abs|accept|all|and|at|begin|body|declare|delay|end|entry|exception|function|generic|in|is|mod|new|not|null|of|or|others|out|package|pragma|procedure|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|then|type|use|when|with|xor)\\b"
			},
			{
				name: "keyword.control.ada",
				match: "(?i)\\b(case|do|else|elsif|exit|for|goto|if|loop|raise|return|terminate|until|while)\\b"
			},
			{
				name: "storage.modifier.ada",
				match: "(?i)\\b(abstract|access|aliased|array|constant|delta|digits|interface|limited|protected|synchronized|tagged|task)\\b"
			},
			{
				name: "storage.visibility.ada",
				match: "(?i)\\b(private|overriding)\\b"
			},
			{
				name: "keyword.modifier.unknown.ada",
				match: "<>"
			},
			{
				name: "keyword.operator.arithmetic.ada",
				match: "(\\+|-|\\*|/)"
			},
			{
				name: "keyword.operator.assignment.ada",
				match: ":="
			},
			{
				name: "keyword.operator.logic.ada",
				match: "(=|/=|<|>|<=|>=)"
			},
			{
				name: "keyword.operator.concatenation.ada",
				match: "\\&"
			}
		]
	},
	known_discriminant_part: {
		name: "meta.declaration.type.discriminant.ada",
		begin: "\\(",
		end: "\\)",
		captures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				name: "punctuation.ada",
				match: ";"
			},
			{
				include: "#discriminant_specification"
			}
		]
	},
	label: {
		name: "meta.label.ada",
		match: "(<<)?((?:\\w|\\d|_)+)\\s*(:[^=]|>>)",
		captures: {
			"1": {
				name: "punctuation.label.ada"
			},
			"2": {
				name: "entity.name.label.ada"
			},
			"3": {
				name: "punctuation.label.ada"
			}
		}
	},
	library_unit: {
		name: "meta.library.unit.ada",
		patterns: [
			{
				include: "#package_body"
			},
			{
				include: "#package_specification"
			},
			{
				include: "#subprogram_body"
			}
		]
	},
	loop_statement: {
		patterns: [
			{
				include: "#simple_loop_statement"
			},
			{
				include: "#while_loop_statement"
			},
			{
				include: "#for_loop_statement"
			}
		]
	},
	modular_type_definition: {
		begin: "(?i)\\b(mod)\\b",
		end: "(?i)(?=(with|;))",
		beginCaptures: {
			"1": {
				name: "storage.modifier.ada"
			}
		},
		patterns: [
			{
				name: "keyword.modifier.unknown.ada",
				match: "<>"
			},
			{
				include: "#expression"
			}
		]
	},
	multiplying_operator: {
		name: "keyword.operator.multiplying.ada",
		match: "(?i)(\\*|/|\\bmod\\b|\\brem\\b)"
	},
	null_statement: {
		name: "meta.statement.null.ada",
		match: "(?i)\\b(null)\\s*(;)",
		captures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "punctuation.ada"
			}
		}
	},
	object_declaration: {
		name: "meta.declaration.object.ada",
		begin: "(?i)\\b((?:\\w|\\d|_)+(?:\\s*,\\s*(?:\\w|\\d|_)+)*)\\s*(:)",
		end: "(;)",
		beginCaptures: {
			"1": {
				patterns: [
					{
						name: "punctuation.ada",
						match: ","
					},
					{
						name: "variable.name.ada",
						match: "\\b(\\w|\\d|_)+\\b"
					}
				]
			},
			"2": {
				name: "punctuation.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?<=:)",
				end: "(?:(?=;)|(:=)|(\\brenames\\b))",
				endCaptures: {
					"1": {
						name: "keyword.operator.new.ada"
					},
					"2": {
						name: "keyword.ada"
					}
				},
				patterns: [
					{
						name: "storage.modifier.ada",
						match: "(?i)\\bconstant\\b"
					},
					{
						name: "storage.visibility.ada",
						match: "(?i)\\baliased\\b"
					},
					{
						include: "#aspect_specification"
					},
					{
						include: "#subtype_mark"
					}
				]
			},
			{
				begin: "(?<=:=)",
				end: "(?=;)",
				patterns: [
					{
						include: "#aspect_specification"
					},
					{
						include: "#expression"
					}
				]
			},
			{
				begin: "(?<=renames)",
				end: "(?=;)",
				patterns: [
					{
						include: "#aspect_specification"
					}
				]
			}
		]
	},
	operator: {
		patterns: [
			{
				include: "#highest_precedence_operator"
			},
			{
				include: "#multiplying_operator"
			},
			{
				include: "#adding_operator"
			},
			{
				include: "#relational_operator"
			},
			{
				include: "#logical_operator"
			}
		]
	},
	package_body: {
		name: "meta.declaration.package.body.ada",
		begin: "(?i)\\b(package)\\s+(body)\\s+((?:\\w|\\d|\\.|_)+)\\b",
		end: "(?i)\\b(end)\\s+(\\3)\\s*(;)",
		beginCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "keyword.ada"
			},
			"3": {
				patterns: [
					{
						include: "#package_mark"
					}
				]
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				patterns: [
					{
						include: "#package_mark"
					}
				]
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bbegin\\b",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				end: "(?i)\\b(?=end)\\b",
				patterns: [
					{
						include: "#handled_sequence_of_statements"
					}
				]
			},
			{
				begin: "(?i)\\bis\\b",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				end: "(?i)(?=(\\bbegin\\b|\\bend\\b))",
				patterns: [
					{
						match: "(?i)\\bprivate\\b",
						name: "keyword.ada"
					},
					{
						include: "#declarative_item"
					},
					{
						include: "#comment"
					}
				]
			},
			{
				include: "#aspect_specification"
			}
		]
	},
	package_declaration: {
		patterns: [
			{
				include: "#package_specification"
			}
		]
	},
	package_mark: {
		name: "entity.name.package.ada",
		match: "\\b(\\w|\\d|\\.|_)+\\b"
	},
	package_specification: {
		name: "meta.declaration.package.specification.ada",
		begin: "(?i)\\b(package)\\s+((?:\\w|\\d|\\.|_)+)\\b",
		end: "(?i)(?:\\b(end)\\s+(\\2)\\s*)?(;)",
		beginCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				patterns: [
					{
						include: "#package_mark"
					}
				]
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				patterns: [
					{
						include: "#package_mark"
					}
				]
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bis\\b",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				end: "(?=(end|;))",
				patterns: [
					{
						name: "meta.declaration.package.generic.ada",
						begin: "(?i)\\bnew\\b",
						beginCaptures: {
							"0": {
								name: "keyword.operator.new.ada"
							}
						},
						end: "(?=;)",
						patterns: [
							{
								include: "#package_mark"
							},
							{
								include: "#actual_parameter_part"
							}
						]
					},
					{
						match: "(?i)\\bprivate\\b",
						name: "keyword.ada"
					},
					{
						include: "#basic_declarative_item"
					},
					{
						include: "#comment"
					}
				]
			},
			{
				include: "#aspect_specification"
			}
		]
	},
	parameter_association: {
		patterns: [
			{
				match: "((?:\\w|\\d|_)+)\\s*(=>)",
				captures: {
					"1": {
						name: "variable.parameter.ada"
					},
					"2": {
						name: "keyword.other.ada"
					}
				}
			},
			{
				include: "#expression"
			}
		]
	},
	parameter_profile: {
		begin: "\\(",
		end: "\\)",
		captures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				name: "punctuation.ada",
				match: ";"
			},
			{
				include: "#parameter_specification"
			}
		]
	},
	parameter_specification: {
		patterns: [
			{
				name: "meta.type.annotation.ada",
				begin: ":(?!=)",
				end: "(?=[:;)])",
				beginCaptures: {
					"0": {
						name: "punctuation.ada"
					}
				},
				patterns: [
					{
						name: "keyword.ada",
						match: "(?i)\\b(in|out)\\b"
					},
					{
						include: "#subtype_mark"
					}
				]
			},
			{
				begin: ":=",
				end: "(?=[:;)])",
				beginCaptures: {
					"0": {
						name: "keyword.operator.new.ada"
					}
				},
				patterns: [
					{
						include: "#expression"
					}
				]
			},
			{
				name: "punctuation.ada",
				match: ","
			},
			{
				name: "variable.parameter.ada",
				match: "\\b(?:\\w|\\d|\\.|_)+\\b"
			},
			{
				include: "#comment"
			}
		]
	},
	pragma: {
		name: "meta.pragma.ada",
		begin: "(?i)\\b(pragma)\\s+((?:\\w|\\d|_)+)\\b",
		end: "(;)",
		beginCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "keyword.control.directive.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				include: "#expression"
			}
		]
	},
	preprocessor: {
		name: "meta.preprocessor.ada",
		patterns: [
			{
				match: "^\\s*(#)(if|elsif)\\s+(.*)$",
				captures: {
					"1": {
						name: "punctuation.definition.directive.ada"
					},
					"2": {
						name: "keyword.control.directive.conditional.ada"
					},
					"3": {
						patterns: [
							{
								include: "#expression"
							}
						]
					}
				}
			},
			{
				match: "^\\s*(#)(end if)(;)",
				captures: {
					"1": {
						name: "punctuation.definition.directive.ada"
					},
					"2": {
						name: "keyword.control.directive.conditional"
					},
					"3": {
						name: "punctuation.ada"
					}
				}
			},
			{
				match: "^\\s*(#)(else)",
				captures: {
					"1": {
						name: "punctuation.definition.directive.ada"
					},
					"2": {
						name: "keyword.control.directive.conditional"
					}
				}
			}
		]
	},
	procedure_body: {
		name: "meta.declaration.procedure.body.ada",
		begin: "(?i)\\b(overriding\\s+)?(procedure)\\s+((?:\\w|\\d|\\.|_)+)\\b",
		end: "(?i)(?:\\b(end)\\s+(\\3)\\s*)?(;)",
		beginCaptures: {
			"1": {
				name: "storage.visibility.ada"
			},
			"2": {
				name: "keyword.ada"
			},
			"3": {
				name: "entity.name.function.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "entity.name.function.ada"
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bis\\b",
				end: "(?i)(?=(with|begin|;))",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				patterns: [
					{
						name: "meta.declaration.package.generic.ada",
						begin: "(?i)\\bnew\\b",
						beginCaptures: {
							"0": {
								name: "keyword.operator.new.ada"
							}
						},
						end: "(?=;)",
						patterns: [
							{
								match: "((?:\\w|\\d|\\.|_)+)",
								name: "entity.name.function.ada"
							},
							{
								include: "#actual_parameter_part"
							}
						]
					},
					{
						match: "(?i)\\b(null|abstract)\\b",
						name: "storage.modifier.ada"
					},
					{
						include: "#declarative_item"
					}
				]
			},
			{
				begin: "(?i)\\bbegin\\b",
				end: "(?i)(?=\\bend\\b)",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				patterns: [
					{
						include: "#handled_sequence_of_statements"
					}
				]
			},
			{
				include: "#subprogram_renaming_declaration"
			},
			{
				include: "#aspect_specification"
			},
			{
				include: "#parameter_profile"
			},
			{
				include: "#comment"
			}
		]
	},
	procedure_call_statement: {
		name: "meta.statement.call.ada",
		begin: "(?i)\\b((?:\\w|\\d|_|\\.)+)\\b",
		end: ";",
		beginCaptures: {
			"1": {
				name: "entity.name.function.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				include: "#attribute"
			},
			{
				include: "#actual_parameter_part"
			},
			{
				include: "#comment"
			}
		]
	},
	procedure_specification: {
		patterns: [
			{
				include: "#procedure_body"
			}
		]
	},
	protected_body: {
		name: "meta.declaration.procedure.body.ada",
		begin: "(?i)\\b(protected)\\s+(body)\\s+((?:\\w|\\d|\\.|_)+)\\b",
		end: "(?i)(?:\\b(end)\\s*(\\s\\3)\\s*)(;)",
		beginCaptures: {
			"1": {
				name: "storage.modifier.ada"
			},
			"2": {
				name: "keyword.ada"
			},
			"3": {
				name: "entity.name.body.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "entity.name.body.ada"
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bis\\b",
				end: "(?i)\\b(?=end)\\b",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				patterns: [
					{
						include: "#protected_operation_item"
					}
				]
			}
		]
	},
	protected_element_declaration: {
		patterns: [
			{
				include: "#subprogram_specification"
			},
			{
				include: "#aspect_clause"
			},
			{
				include: "#entry_declaration"
			},
			{
				include: "#component_declaration"
			},
			{
				include: "#pragma"
			}
		]
	},
	protected_operation_item: {
		patterns: [
			{
				include: "#subprogram_specification"
			},
			{
				include: "#subprogram_body"
			},
			{
				include: "#aspect_clause"
			},
			{
				include: "#entry_body"
			}
		]
	},
	positional_array_aggregate: {
		name: "meta.definition.array.aggregate.positional.ada",
		patterns: [
			{
				match: "(?i)\\b(others)\\s*(=>)\\s*([^,\\)]+)",
				captures: {
					"1": {
						name: "keyword.ada"
					},
					"2": {
						name: "keyword.other.ada"
					},
					"3": {
						patterns: [
							{
								name: "keyword.modifier.unknown.ada",
								match: "<>"
							},
							{
								include: "#expression"
							}
						]
					}
				}
			},
			{
				include: "#expression"
			}
		]
	},
	raise_statement: {
		name: "meta.statement.raise.ada",
		begin: "(?i)\\braise\\b",
		end: ";",
		beginCaptures: {
			"0": {
				name: "keyword.control.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bwith\\b",
				end: "(?=;)",
				beginCaptures: {
					"0": {
						name: "keyword.control.ada"
					}
				},
				patterns: [
					{
						include: "#expression"
					}
				]
			},
			{
				name: "entity.name.exception.ada",
				match: "\\b(\\w|\\d|\\.|_)+\\b"
			}
		]
	},
	raise_expression: {
		name: "meta.expression.raise.ada",
		begin: "(?i)\\braise\\b",
		end: "(?=;)",
		beginCaptures: {
			"0": {
				name: "keyword.control.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bwith\\b",
				end: "(?=(;|\\))",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				patterns: [
					{
						include: "#expression"
					}
				]
			},
			{
				name: "entity.name.exception.ada",
				match: "\\b(\\w|\\d|_)+\\b"
			}
		]
	},
	range_constraint: {
		begin: "(?i)\\brange\\b",
		end: "(?=(\\bwith\\b|;))",
		beginCaptures: {
			"0": {
				name: "storage.modifier.ada"
			}
		},
		patterns: [
			{
				name: "keyword.ada",
				match: "\\.\\."
			},
			{
				name: "keyword.modifier.unknown.ada",
				match: "<>"
			},
			{
				include: "#expression"
			}
		]
	},
	relational_operator: {
		name: "keyword.operator.relational.ada",
		match: "(=|/=|<|<=|>|>=)"
	},
	record_representation_clause: {
		name: "meta.aspect.clause.record.representation.ada",
		begin: "(?i)\\b(record)\\b",
		end: "(?i)\\b(end)\\s+(record)\\b",
		beginCaptures: {
			"1": {
				name: "storage.modifier.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "storage.modifier.ada"
			}
		},
		patterns: [
			{
				include: "#component_clause"
			},
			{
				include: "#comment"
			}
		]
	},
	real_type_definition: {
		name: "meta.declaration.type.definition.real-type.ada",
		patterns: [
			{
				include: "#scalar_constraint"
			}
		]
	},
	record_type_definition: {
		patterns: [
			{
				name: "meta.declaration.type.definition.record.null.ada",
				match: "(?i)\\b(?:(abstract)\\s+)?(?:(tagged)\\s+)?(?:(limited)\\s+)?(null)\\s+(record)\\b",
				captures: {
					"1": {
						name: "storage.modifier.ada"
					},
					"2": {
						name: "storage.modifier.ada"
					},
					"3": {
						name: "storage.modifier.ada"
					},
					"4": {
						name: "storage.modifier.ada"
					},
					"5": {
						name: "storage.modifier.ada"
					}
				},
				patterns: [
					{
						include: "#component_item"
					}
				]
			},
			{
				name: "meta.declaration.type.definition.record.ada",
				begin: "(?i)\\b(?:(abstract)\\s+)?(?:(tagged)\\s+)?(?:(limited)\\s+)?(record)\\b",
				end: "(?i)\\b(end)\\s+(record)\\b",
				beginCaptures: {
					"1": {
						name: "storage.modifier.ada"
					},
					"2": {
						name: "storage.modifier.ada"
					},
					"3": {
						name: "storage.modifier.ada"
					},
					"4": {
						name: "storage.modifier.ada"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.ada"
					},
					"2": {
						name: "storage.modifier.ada"
					}
				},
				patterns: [
					{
						include: "#component_item"
					}
				]
			}
		]
	},
	regular_type_declaration: {
		name: "meta.declaration.type.definition.regular.ada",
		begin: "(?i)\\b(type)\\b",
		end: ";",
		beginCaptures: {
			"1": {
				name: "keyword.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bis\\b",
				end: "(?i)(?=(with(?!\\s+(private))|;))",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				patterns: [
					{
						include: "#type_definition"
					}
				]
			},
			{
				begin: "(?i)\\b(?<=type)\\b",
				end: "(?i)(?=(is|;))",
				patterns: [
					{
						include: "#known_discriminant_part"
					},
					{
						include: "#subtype_mark"
					}
				]
			},
			{
				include: "#aspect_specification"
			}
		]
	},
	requeue_statement: {
		name: "meta.statement.requeue.ada",
		begin: "(?i)\\brequeue\\b",
		end: ";",
		beginCaptures: {
			"0": {
				name: "keyword.control.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				name: "keyword.control.ada",
				match: "(?i)\\b(with|abort)\\b"
			},
			{
				name: "entity.name.function.ada",
				match: "\\b(\\w|\\d|\\.|_)+\\b"
			}
		]
	},
	result_profile: {
		begin: "(?i)\\breturn\\b",
		end: "(?=(is|with|renames|;))",
		beginCaptures: {
			"0": {
				name: "keyword.ada"
			}
		},
		patterns: [
			{
				include: "#subtype_mark"
			}
		]
	},
	return_statement: {
		name: "meta.statement.return.ada",
		begin: "(?i)\\breturn\\b",
		end: ";",
		beginCaptures: {
			"0": {
				name: "keyword.control.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bdo\\b",
				end: "(?i)\\b(end)\\s+(return)\\s*(?=;)",
				beginCaptures: {
					"0": {
						name: "keyword.control.ada"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.control.ada"
					},
					"2": {
						name: "keyword.control.ada"
					}
				},
				patterns: [
					{
						include: "#label"
					},
					{
						include: "#statement"
					}
				]
			},
			{
				match: "\\b((?:\\w|\\d|_)+)\\s*(:)\\s*((?:\\w|\\d|\\.|_)+)\\b",
				captures: {
					"1": {
						name: "variable.name.ada"
					},
					"2": {
						name: "punctuation.ada"
					},
					"3": {
						name: "entity.name.type.ada"
					}
				}
			},
			{
				match: ":=",
				name: "keyword.operator.new.ada"
			},
			{
				include: "#expression"
			}
		]
	},
	scalar_constraint: {
		name: "meta.declaration.constraint.scalar.ada",
		patterns: [
			{
				begin: "(?i)\\b(digits|delta)\\b",
				end: "(?i)(?=\\brange\\b|\\bdigits\\b|\\bwith\\b|;)",
				beginCaptures: {
					"1": {
						name: "storage.modifier.ada"
					}
				},
				patterns: [
					{
						include: "#expression"
					}
				]
			},
			{
				include: "#range_constraint"
			},
			{
				include: "#expression"
			}
		]
	},
	select_alternative: {
		patterns: [
			{
				begin: "(?i)\\bterminate\\b",
				end: ";",
				beginCaptures: {
					"0": {
						name: "keyword.control.ada"
					}
				},
				endCaptures: {
					"0": {
						name: "punctuation.ada"
					}
				}
			},
			{
				include: "#statement"
			}
		]
	},
	select_statement: {
		name: "meta.statement.select.ada",
		begin: "(?i)\\bselect\\b",
		end: "(?i)\\b(end)\\s+(select)\\b",
		beginCaptures: {
			"0": {
				name: "keyword.control.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.control.ada"
			},
			"2": {
				name: "keyword.control.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\b(?:(or)|(?<=select))\\b",
				end: "(?i)\\b(?=(or|else|end))\\b",
				beginCaptures: {
					"1": {
						name: "keyword.control.ada"
					}
				},
				patterns: [
					{
						include: "#guard"
					},
					{
						include: "#select_alternative"
					}
				]
			},
			{
				begin: "(?i)\\belse\\b",
				end: "(?i)\\b(?=end)\\b",
				beginCaptures: {
					"0": {
						name: "keyword.control.ada"
					}
				},
				patterns: [
					{
						include: "#statement"
					}
				]
			}
		]
	},
	signed_integer_type_definition: {
		patterns: [
			{
				include: "#range_constraint"
			}
		]
	},
	simple_loop_statement: {
		name: "meta.statement.loop.ada",
		begin: "(?i)\\bloop\\b",
		end: "(?i)\\b(end)\\s+(loop)(\\s+(?:\\w|\\d|_)+)?\\s*(;)",
		beginCaptures: {
			"0": {
				name: "keyword.control.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.control.ada"
			},
			"2": {
				name: "keyword.control.ada"
			},
			"3": {
				name: "entity.name.label.ada"
			},
			"4": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				include: "#statement"
			}
		]
	},
	single_protected_declaration: {
		name: "meta.declaration.protected.ada",
		begin: "(?i)\\b(protected)\\s+((?:\\w|\\d|_)+)\\b",
		end: "(?i)(?:\\b(end)\\s*(\\s\\2)?\\s*)?(;)",
		beginCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "entity.name.protected.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "entity.name.protected.ada"
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bis\\b",
				end: "(?i)(?=(\\bend\\b|;))",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				patterns: [
					{
						begin: "(?i)\\bnew\\b",
						end: "(?i)\\bwith\\b",
						captures: {
							"0": {
								name: "keyword.ada"
							}
						},
						patterns: [
							{
								match: "(?i)\\band\\b",
								name: "keyword.ada"
							},
							{
								include: "#subtype_mark"
							},
							{
								include: "#comment"
							}
						]
					},
					{
						match: "(?i)\\bprivate\\b",
						name: "keyword.ada"
					},
					{
						include: "#protected_element_declaration"
					},
					{
						include: "#comment"
					}
				]
			},
			{
				include: "#comment"
			}
		]
	},
	single_task_declaration: {
		begin: "(?i)\\b(task)\\s+((?:\\w|\\d|_)+)\\b",
		end: "(?i)(?:\\b(end)\\s*(\\s\\2)?\\s*)?(;)",
		beginCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "entity.name.task.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "entity.name.task.ada"
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bis\\b",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				end: "(?i)\\b(?=end)\\b",
				patterns: [
					{
						begin: "(?i)\\bnew\\b",
						end: "(?i)\\bwith\\b",
						captures: {
							"0": {
								name: "keyword.ada"
							}
						},
						patterns: [
							{
								match: "(?i)\\band\\b",
								name: "keyword.ada"
							},
							{
								include: "#subtype_mark"
							},
							{
								include: "#comment"
							}
						]
					},
					{
						match: "(?i)\\bprivate\\b",
						name: "keyword.ada"
					},
					{
						include: "#task_item"
					},
					{
						include: "#comment"
					}
				]
			},
			{
				include: "#comment"
			}
		]
	},
	statement: {
		patterns: [
			{
				begin: "(?i)\\bbegin\\b",
				end: "(?i)\\b(end)\\s*(;)",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.ada"
					},
					"2": {
						name: "punctuation.ada"
					}
				},
				patterns: [
					{
						include: "#handled_sequence_of_statements"
					}
				]
			},
			{
				include: "#label"
			},
			{
				include: "#null_statement"
			},
			{
				include: "#return_statement"
			},
			{
				include: "#assignment_statement"
			},
			{
				include: "#exit_statement"
			},
			{
				include: "#goto_statement"
			},
			{
				include: "#requeue_statement"
			},
			{
				include: "#delay_statement"
			},
			{
				include: "#abort_statement"
			},
			{
				include: "#raise_statement"
			},
			{
				include: "#if_statement"
			},
			{
				include: "#case_statement"
			},
			{
				include: "#loop_statement"
			},
			{
				include: "#block_statement"
			},
			{
				include: "#select_statement"
			},
			{
				include: "#accept_statement"
			},
			{
				include: "#pragma"
			},
			{
				include: "#procedure_call_statement"
			},
			{
				include: "#comment"
			}
		]
	},
	string_literal: {
		name: "string.quoted.double.ada",
		match: "(\").*?(\")",
		captures: {
			"1": {
				name: "punctuation.definition.string.ada"
			},
			"2": {
				name: "punctuation.definition.string.ada"
			}
		}
	},
	subprogram_body: {
		name: "meta.declaration.subprogram.body.ada",
		patterns: [
			{
				include: "#procedure_body"
			},
			{
				include: "#function_body"
			}
		]
	},
	subprogram_renaming_declaration: {
		begin: "(?i)\\brenames\\b",
		end: "(?=(with|;))",
		beginCaptures: {
			"0": {
				name: "keyword.ada"
			}
		},
		patterns: [
			{
				match: "(?:\\w|\\d|_|\\.)+",
				name: "entity.name.function.ada"
			}
		]
	},
	subprogram_specification: {
		name: "meta.declaration.subprogram.specification.ada",
		patterns: [
			{
				include: "#procedure_specification"
			},
			{
				include: "#function_specification"
			}
		]
	},
	subtype_declaration: {
		name: "meta.declaration.subtype.ada",
		begin: "(?i)\\bsubtype\\b",
		end: ";",
		beginCaptures: {
			"0": {
				name: "keyword.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bis\\b",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				end: "(?=;)",
				patterns: [
					{
						name: "storage.modifier.ada",
						match: "(?i)\\b(not\\s+null)\\b"
					},
					{
						include: "#composite_constraint"
					},
					{
						include: "#aspect_specification"
					},
					{
						include: "#subtype_indication"
					}
				]
			},
			{
				begin: "(?i)(?<=subtype)",
				end: "(?i)\\b(?=is)\\b",
				patterns: [
					{
						include: "#subtype_mark"
					}
				]
			}
		]
	},
	subtype_indication: {
		name: "meta.declaration.indication.subtype.ada",
		patterns: [
			{
				include: "#scalar_constraint"
			},
			{
				include: "#subtype_mark"
			}
		]
	},
	subtype_mark: {
		patterns: [
			{
				name: "storage.visibility.ada",
				match: "(?i)\\b(access|aliased|not\\s+null|constant)\\b"
			},
			{
				include: "#attribute"
			},
			{
				include: "#actual_parameter_part"
			},
			{
				begin: "(?i)\\b(procedure|function)\\b",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				end: "(?=(;|\\)))",
				patterns: [
					{
						include: "#parameter_profile"
					},
					{
						begin: "(?i)\\breturn\\b",
						end: "(?=(;|\\)))",
						beginCaptures: {
							"0": {
								name: "keyword.ada"
							}
						},
						patterns: [
							{
								include: "#subtype_mark"
							}
						]
					}
				]
			},
			{
				name: "entity.name.type.ada",
				match: "\\b(?:\\w|\\d|\\.|_)+\\b",
				captures: {
					"0": {
						patterns: [
							{
								name: "punctuation.ada",
								match: "[_.]"
							}
						]
					}
				}
			},
			{
				include: "#comment"
			}
		]
	},
	task_body: {
		name: "meta.declaration.task.body.ada",
		begin: "(?i)\\b(task)\\s+(body)\\s+((\\w|\\d|\\.|_)+)\\b",
		end: "(?i)(?:\\b(end)\\s*(?:\\s(\\3))?\\s*)?(;)",
		beginCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "keyword.ada"
			},
			"3": {
				name: "entity.name.task.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "entity.name.task.ada"
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\bbegin\\b",
				end: "(?i)(?=end)",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				patterns: [
					{
						include: "#handled_sequence_of_statements"
					}
				]
			},
			{
				include: "#aspect_specification"
			},
			{
				begin: "(?i)\\bis\\b",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				end: "(?i)(?=(with|begin))",
				patterns: [
					{
						include: "#declarative_item"
					}
				]
			}
		]
	},
	task_item: {
		patterns: [
			{
				include: "#aspect_clause"
			},
			{
				include: "#entry_declaration"
			}
		]
	},
	task_type_declaration: {
		name: "meta.declaration.type.task.ada",
		begin: "(?i)\\b(task)\\s+(type)\\s+((\\w|\\d|\\.|_)+)\\b",
		end: "(?i)(?:\\b(end)\\s*(?:\\s(\\3))?\\s*)?(;)",
		beginCaptures: {
			"1": {
				name: "storage.modifier.ada"
			},
			"2": {
				name: "keyword.ada"
			},
			"3": {
				name: "entity.name.task.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "entity.name.task.ada"
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				include: "#known_discriminant_part"
			},
			{
				begin: "(?i)\\bis\\b",
				beginCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				end: "(?i)\\b(?=end)\\b",
				patterns: [
					{
						begin: "(?i)\\bnew\\b",
						end: "(?i)\\bwith\\b",
						captures: {
							"0": {
								name: "keyword.ada"
							}
						},
						patterns: [
							{
								match: "(?i)\\band\\b",
								name: "keyword.ada"
							},
							{
								include: "#subtype_mark"
							},
							{
								include: "#comment"
							}
						]
					},
					{
						match: "(?i)\\bprivate\\b",
						name: "keyword.ada"
					},
					{
						include: "#task_item"
					},
					{
						include: "#comment"
					}
				]
			},
			{
				include: "#comment"
			}
		]
	},
	type_declaration: {
		name: "meta.declaration.type.ada",
		patterns: [
			{
				include: "#full_type_declaration"
			}
		]
	},
	type_definition: {
		name: "meta.declaration.type.definition.ada",
		patterns: [
			{
				include: "#enumeration_type_definition"
			},
			{
				include: "#integer_type_definition"
			},
			{
				include: "#real_type_definition"
			},
			{
				include: "#array_type_definition"
			},
			{
				include: "#record_type_definition"
			},
			{
				include: "#access_type_definition"
			},
			{
				include: "#interface_type_definition"
			},
			{
				include: "#derived_type_definition"
			}
		]
	},
	use_clause: {
		name: "meta.context.use.ada",
		patterns: [
			{
				include: "#use_type_clause"
			},
			{
				include: "#use_package_clause"
			}
		]
	},
	use_package_clause: {
		name: "meta.context.use.package.ada",
		begin: "(?i)\\buse\\b",
		end: ";",
		beginCaptures: {
			"0": {
				name: "keyword.other.using.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				name: "punctuation.ada",
				match: ","
			},
			{
				include: "#package_mark"
			}
		]
	},
	use_type_clause: {
		name: "meta.context.use.type.ada",
		begin: "(?i)\\b(use)\\s+(?:(all)\\s+)?(type)\\b",
		end: ";",
		beginCaptures: {
			"1": {
				name: "keyword.other.using.ada"
			},
			"2": {
				name: "keyword.modifier.ada"
			},
			"3": {
				name: "keyword.modifier.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				name: "punctuation.ada",
				match: ","
			},
			{
				include: "#subtype_mark"
			}
		]
	},
	value: {
		patterns: [
			{
				include: "#based_literal"
			},
			{
				include: "#decimal_literal"
			},
			{
				include: "#character_literal"
			},
			{
				include: "#string_literal"
			}
		]
	},
	variant_part: {
		name: "meta.declaration.variant.ada",
		begin: "(?i)\\bcase\\b",
		end: "(?i)\\b(end)\\s+(case);",
		beginCaptures: {
			"0": {
				name: "keyword.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.ada"
			},
			"2": {
				name: "keyword.ada"
			},
			"3": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)\\b(?<=case)\\b",
				end: "(?i)\\bis\\b",
				endCaptures: {
					"0": {
						name: "keyword.ada"
					}
				},
				patterns: [
					{
						match: "(?:\\w|\\d|_)+",
						name: "variable.name.ada"
					},
					{
						include: "#comment"
					}
				]
			},
			{
				begin: "(?i)\\b(?<=is)\\b",
				end: "(?i)\\b(?=end)\\b",
				patterns: [
					{
						begin: "(?i)\\bwhen\\b",
						end: "=>",
						beginCaptures: {
							"0": {
								name: "keyword.ada"
							}
						},
						endCaptures: {
							"0": {
								name: "keyword.other.ada"
							}
						},
						patterns: [
							{
								match: "\\|",
								name: "punctuation.ada"
							},
							{
								match: "(?i)\\bothers\\b",
								name: "keyword.ada"
							},
							{
								include: "#expression"
							}
						]
					},
					{
						include: "#component_item"
					}
				]
			}
		]
	},
	while_loop_statement: {
		name: "meta.statement.loop.while.ada",
		begin: "(?i)\\bwhile\\b",
		end: "(?i)\\b(end)\\s+(loop)(\\s+(?:\\w|\\d|_)+)?\\s*(;)",
		beginCaptures: {
			"0": {
				name: "keyword.control.ada"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.control.ada"
			},
			"2": {
				name: "keyword.control.ada"
			},
			"3": {
				name: "entity.name.label.ada"
			},
			"4": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				begin: "(?i)(?<=while)\\b",
				end: "(?i)\\bloop\\b",
				endCaptures: {
					"0": {
						name: "keyword.control.ada"
					}
				},
				patterns: [
					{
						include: "#expression"
					}
				]
			},
			{
				include: "#statement"
			}
		]
	},
	with_clause: {
		name: "meta.context.with.ada",
		begin: "(?i)\\b(?:(limited)\\s+)?(?:(private)\\s+)?(with)\\b",
		end: ";",
		beginCaptures: {
			"1": {
				name: "keyword.modifier.ada"
			},
			"2": {
				name: "storage.visibility.ada"
			},
			"3": {
				name: "keyword.other.using.ada"
			}
		},
		endCaptures: {
			"0": {
				name: "punctuation.ada"
			}
		},
		patterns: [
			{
				name: "punctuation.ada",
				match: ","
			},
			{
				include: "#package_mark"
			}
		]
	}
};
const scopeName = "source.ada";
const ada_tmLanguage = {
	$schema: $schema,
	name: name,
	patterns: patterns,
	repository: repository,
	scopeName: scopeName
};




/***/ })

};
;