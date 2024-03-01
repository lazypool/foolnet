"use strict";
exports.id = 3916;
exports.ids = [3916];
exports.modules = {

/***/ 33916:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ blade_tmLanguage),
/* harmony export */   fileTypes: () => (/* binding */ fileTypes),
/* harmony export */   foldingStartMarker: () => (/* binding */ foldingStartMarker),
/* harmony export */   foldingStopMarker: () => (/* binding */ foldingStopMarker),
/* harmony export */   injections: () => (/* binding */ injections),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   patterns: () => (/* binding */ patterns),
/* harmony export */   repository: () => (/* binding */ repository),
/* harmony export */   scopeName: () => (/* binding */ scopeName)
/* harmony export */ });
const scopeName = "text.html.php.blade";
const name = "blade";
const fileTypes = [
	"blade.php"
];
const foldingStartMarker = "(/\\*|\\{\\s*$|<<<HTML)";
const foldingStopMarker = "(\\*/|^\\s*\\}|^HTML;)";
const injections = {
	"text.html.php.blade - (meta.embedded | meta.tag | comment.block.blade), L:(text.html.php.blade meta.tag - (comment.block.blade | meta.embedded.block.blade)), L:(source.js.embedded.html - (comment.block.blade | meta.embedded.block.blade))": {
		patterns: [
			{
				include: "#blade"
			},
			{
				begin: "(^\\s*)(?=<\\?(?![^?]*\\?>))",
				beginCaptures: {
					"0": {
						name: "punctuation.whitespace.embedded.leading.php"
					}
				},
				end: "(?!\\G)(\\s*$\\n)?",
				endCaptures: {
					"0": {
						name: "punctuation.whitespace.embedded.trailing.php"
					}
				},
				patterns: [
					{
						begin: "<\\?(?i:php|=)?",
						beginCaptures: {
							"0": {
								name: "punctuation.section.embedded.begin.php"
							}
						},
						contentName: "source.php",
						end: "(\\?)>",
						endCaptures: {
							"0": {
								name: "punctuation.section.embedded.end.php"
							},
							"1": {
								name: "source.php"
							}
						},
						name: "meta.embedded.block.php",
						patterns: [
							{
								include: "#language"
							}
						]
					}
				]
			},
			{
				begin: "<\\?(?i:php|=)?(?![^?]*\\?>)",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					}
				},
				contentName: "source.php",
				end: "(\\?)>",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "source.php"
					}
				},
				name: "meta.embedded.block.php",
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				begin: "<\\?(?i:php|=)?",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					}
				},
				end: ">",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					}
				},
				name: "meta.embedded.line.php",
				patterns: [
					{
						captures: {
							"1": {
								name: "source.php"
							},
							"2": {
								name: "punctuation.section.embedded.end.php"
							},
							"3": {
								name: "source.php"
							}
						},
						match: "\\G(\\s*)((\\?))(?=>)",
						name: "meta.special.empty-tag.php"
					},
					{
						begin: "\\G",
						contentName: "source.php",
						end: "(\\?)(?=>)",
						endCaptures: {
							"0": {
								name: "punctuation.section.embedded.end.php"
							},
							"1": {
								name: "source.php"
							}
						},
						patterns: [
							{
								include: "#language"
							}
						]
					}
				]
			}
		]
	}
};
const patterns = [
	{
		include: "text.html.basic"
	}
];
const repository = {
	blade: {
		patterns: [
			{
				begin: "{{--",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.comment.begin.blade"
					}
				},
				end: "--}}",
				endCaptures: {
					"0": {
						name: "punctuation.definition.comment.end.blade"
					}
				},
				name: "comment.block.blade",
				patterns: [
					{
						name: "invalid.illegal.php-code-in-comment.blade",
						begin: "(^\\s*)(?=<\\?(?![^?]*\\?>))",
						beginCaptures: {
							"0": {
								name: "punctuation.whitespace.embedded.leading.php"
							}
						},
						end: "(?!\\G)(\\s*$\\n)?",
						endCaptures: {
							"0": {
								name: "punctuation.whitespace.embedded.trailing.php"
							}
						},
						patterns: [
							{
								begin: "<\\?(?i:php|=)?",
								beginCaptures: {
									"0": {
										name: "punctuation.section.embedded.begin.php"
									}
								},
								contentName: "source.php",
								end: "(\\?)>",
								endCaptures: {
									"0": {
										name: "punctuation.section.embedded.end.php"
									},
									"1": {
										name: "source.php"
									}
								},
								name: "meta.embedded.block.php",
								patterns: [
									{
										include: "#language"
									}
								]
							}
						]
					},
					{
						begin: "<\\?(?i:php|=)?(?![^?]*\\?>)",
						beginCaptures: {
							"0": {
								name: "punctuation.section.embedded.begin.php"
							}
						},
						contentName: "source.php",
						end: "(\\?)>",
						endCaptures: {
							"0": {
								name: "punctuation.section.embedded.end.php"
							},
							"1": {
								name: "source.php"
							}
						},
						name: "invalid.illegal.php-code-in-comment.blade.meta.embedded.block.php",
						patterns: [
							{
								include: "#language"
							}
						]
					},
					{
						begin: "<\\?(?i:php|=)?",
						beginCaptures: {
							"0": {
								name: "punctuation.section.embedded.begin.php"
							}
						},
						end: ">",
						endCaptures: {
							"0": {
								name: "punctuation.section.embedded.end.php"
							}
						},
						name: "invalid.illegal.php-code-in-comment.blade.meta.embedded.line.php",
						patterns: [
							{
								captures: {
									"1": {
										name: "source.php"
									},
									"2": {
										name: "punctuation.section.embedded.end.php"
									},
									"3": {
										name: "source.php"
									}
								},
								match: "\\G(\\s*)((\\?))(?=>)",
								name: "meta.special.empty-tag.php"
							},
							{
								begin: "\\G",
								contentName: "source.php",
								end: "(\\?)(?=>)",
								endCaptures: {
									"0": {
										name: "punctuation.section.embedded.end.php"
									},
									"1": {
										name: "source.php"
									}
								},
								patterns: [
									{
										include: "#language"
									}
								]
							}
						]
					}
				]
			},
			{
				begin: "(?<!@){{{",
				beginCaptures: {
					"0": {
						name: "support.function.construct.begin.blade"
					}
				},
				contentName: "source.php",
				end: "}}}",
				endCaptures: {
					"0": {
						name: "support.function.construct.end.blade"
					},
					"1": {
						name: "source.php"
					}
				},
				name: "meta.function.echo.blade",
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				begin: "(?<![@{]){{",
				beginCaptures: {
					"0": {
						name: "support.function.construct.begin.blade"
					}
				},
				contentName: "source.php",
				end: "}}",
				endCaptures: {
					"0": {
						name: "support.function.construct.end.blade"
					},
					"1": {
						name: "source.php"
					}
				},
				name: "meta.function.echo.blade",
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				begin: "(?<!@){!!",
				beginCaptures: {
					"0": {
						name: "support.function.construct.begin.blade"
					}
				},
				contentName: "source.php",
				end: "!!}",
				endCaptures: {
					"0": {
						name: "support.function.construct.end.blade"
					},
					"1": {
						name: "source.php"
					}
				},
				name: "meta.function.echo.blade",
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				begin: "(@){{",
				beginCaptures: {
					"0": {
						name: "begin.bracket.round.blade"
					},
					"1": {
						name: "variable.other.index.php"
					}
				},
				contentName: "source.php",
				end: "}}",
				endCaptures: {
					"0": {
						name: "end.bracket.round.blade"
					},
					"1": {
						name: "source.php"
					}
				},
				name: "meta.function.echo.blade",
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				begin: "(?x)(?<![A-Za-z0-9_@]) (@  (?i:\n    auth\n    |break\n    |can\n    |cannot\n    |case\n    |choice\n    |component\n    |continue\n    |dd\n    |dump\n    |each\n    |elsecan\n    |elsecannot\n    |elseif\n    |empty\n    |error\n    |extends\n    |for\n    |foreach\n    |forelse\n    |guest\n    |hassection\n    |if\n    |include\n    |includefirst\n    |includeif\n    |includeunless\n    |includewhen\n    |inject\n    |isset\n    |json\n    |lang\n    |once\n    |prepend\n    |push\n    |section\n    |sectionMissing\n    |slot\n    |stack\n    |switch\n    |unless\n    |unset\n    |while\n    |yield\n    |servers\n    |task\n    |story\n    |finished\n    |production\n    |slack\n    |method\n    |props\n    |env\n    |livewire\n    |php\n  )[\\t ]*\n)(\\() # Followed by opening parentheses\n",
				beginCaptures: {
					"1": {
						name: "keyword.blade"
					},
					"2": {
						name: "begin.bracket.round.blade.php"
					}
				},
				contentName: "source.php",
				end: "\\)",
				endCaptures: {
					"0": {
						name: "end.bracket.round.blade.php"
					}
				},
				name: "meta.directive.blade",
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				begin: "(?x)(?<![A-Za-z0-9_@]) (@  (?i:\n    append\n    |default\n    |else\n    |endauth\n    |endcan\n    |endcannot\n    |endcomponent\n    |endempty\n    |enderror\n    |endfor\n    |endforeach\n    |endforelse\n    |endguest\n    |endif\n    |endisset\n    |endlang\n    |endonce\n    |endprepend\n    |endpush\n    |endsection\n    |endslot\n    |endswitch\n    |endunless\n    |endwhile\n    |overwrite\n    |parent\n    |show\n    |stop\n    |endtask\n    |endstory\n    |endfinished\n    |endproduction\n    |endenv\n  )[\\t ]*\n)(\\() # Followed by opening parentheses\n",
				beginCaptures: {
					"1": {
						name: "keyword.blade"
					},
					"2": {
						name: "begin.bracket.round.blade.php"
					}
				},
				contentName: "comment.blade",
				end: "\\)",
				endCaptures: {
					"0": {
						name: "end.bracket.round.blade.php"
					}
				},
				name: "meta.directive.blade",
				patterns: [
					{
						include: "#balance_brackets"
					}
				]
			},
			{
				match: "(?x)(?<![A-Za-z0-9_@]) @(?:  append\n  |break\n  |continue\n  |csrf\n  |default\n  |each\n  |else\n  |overwrite\n  |parent\n  |sectionMissing\n  |show\n  |stack\n  |stop\n  |livewireStyles\n  |livewireScripts\n)\\b\n",
				name: "keyword.blade"
			},
			{
				match: "(?x)(?<![A-Za-z0-9_@]) @(end)? (?i:  auth\n  |can\n  |cannot\n  |component\n  |empty\n  |error\n  |for\n  |foreach\n  |forelse\n  |guest\n  |if\n  |isset\n  |lang\n  |prepend\n  |push\n  |section\n  |slot\n  |switch\n  |unless\n  |verbatim\n  |while\n  |task\n  |story\n  |finished\n  |production\n  |env\n  |once\n)\\b\n",
				name: "keyword.blade"
			},
			{
				begin: "(?<![A-Za-z0-9_@])@(?i:php|setup)\\b",
				end: "(?<![A-Za-z0-9_@])(?=@(?i:endphp|endsetup)\\b)",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					}
				},
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					}
				},
				contentName: "source.php",
				name: "meta.embedded.block.blade",
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				begin: "(?x)(?<![A-Za-z0-9_@]) (@(?i:endphp|endsetup)[\\t ]*) (\\()",
				beginCaptures: {
					"1": {
						name: "punctuation.section.embedded.end.php"
					},
					"2": {
						name: "begin.bracket.round.blade.php"
					}
				},
				contentName: "comment.blade",
				end: "\\)",
				endCaptures: {
					"0": {
						name: "end.bracket.round.blade.php"
					}
				},
				name: "meta.directive.blade",
				patterns: [
					{
						include: "#balance_brackets"
					}
				]
			},
			{
				match: "(?x)(?<![A-Za-z0-9_@]) @(?:(?i)endphp|endsetup)\\b",
				name: "punctuation.section.embedded.end.php"
			},
			{
				begin: "(?x)(?<![A-Za-z0-9_@]) (@\\w+(?:::w+)?[\\t ]*) (\\() # Followed by opening parentheses",
				beginCaptures: {
					"1": {
						name: "entity.name.function.blade"
					},
					"2": {
						name: "begin.bracket.round.blade.php"
					}
				},
				contentName: "source.php",
				end: "\\)",
				endCaptures: {
					"0": {
						name: "end.bracket.round.blade.php"
					}
				},
				name: "meta.directive.custom.blade",
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				match: "(?x)(?<![A-Za-z0-9_@]) @\\w+(?:::w+)?\\b",
				name: "entity.name.function.blade"
			}
		]
	},
	balance_brackets: {
		patterns: [
			{
				begin: "\\(",
				end: "\\)",
				patterns: [
					{
						include: "#balance_brackets"
					}
				]
			},
			{
				match: "[^()]+"
			}
		]
	},
	"class-builtin": {
		patterns: [
			{
				match: "(?xi)\n(\\\\)?\\b\n((APC|Append)Iterator|Array(Access|Iterator|Object)\n|Bad(Function|Method)CallException\n|(Caching|CallbackFilter)Iterator|Collator|Collectable|Cond|Countable|CURLFile\n|Date(Interval|Period|Time(Interface|Immutable|Zone)?)?|Directory(Iterator)?|DomainException\n|DOM(Attr|CdataSection|CharacterData|Comment|Document(Fragment)?|Element|EntityReference\n    |Implementation|NamedNodeMap|Node(list)?|ProcessingInstruction|Text|XPath)\n|(Error)?Exception|EmptyIterator\n|finfo\n|Ev(Check|Child|Embed|Fork|Idle|Io|Loop|Periodic|Prepare|Signal|Stat|Timer|Watcher)?\n|Event(Base|Buffer(Event)?|SslContext|Http(Request|Connection)?|Config|DnsBase|Util|Listener)?\n|FANNConnection|(Filter|Filesystem)Iterator\n|Gender\\\\Gender|GlobIterator|Gmagick(Draw|Pixel)?\n|Haru(Annotation|Destination|Doc|Encoder|Font|Image|Outline|Page)\n|Http((Inflate|Deflate)?Stream|Message|Request(Pool)?|Response|QueryString)\n|HRTime\\\\(PerformanceCounter|StopWatch)\n|Intl(Calendar|((CodePoint|RuleBased)?Break|Parts)?Iterator|DateFormatter|TimeZone)\n|Imagick(Draw|Pixel(Iterator)?)?\n|InfiniteIterator|InvalidArgumentException|Iterator(Aggregate|Iterator)?\n|JsonSerializable\n|KTaglib_(MPEG_(File|AudioProperties)|Tag|ID3v2_(Tag|(AttachedPicture)?Frame))\n|Lapack|(Length|Locale|Logic)Exception|LimitIterator|Lua(Closure)?\n|Mongo(BinData|Client|Code|Collection|CommandCursor|Cursor(Exception)?|Date|DB(Ref)?|DeleteBatch\n      |Grid(FS(Cursor|File)?)|Id|InsertBatch|Int(32|64)|Log|Pool|Regex|ResultException|Timestamp\n      |UpdateBatch|Write(Batch|ConcernException))?\n|Memcache(d)?|MessageFormatter|MultipleIterator|Mutex\n|mysqli(_(driver|stmt|warning|result))?\n|MysqlndUh(Connection|PreparedStatement)\n|NoRewindIterator|Normalizer|NumberFormatter\n|OCI-(Collection|Lob)|OuterIterator|(OutOf(Bounds|Range)|Overflow)Exception\n|ParentIterator|PDO(Statement)?|Phar(Data|FileInfo)?|php_user_filter|Pool\n|QuickHash(Int(Set|StringHash)|StringIntHash)\n|Recursive(Array|Caching|Directory|Fallback|Filter|Iterator|Regex|Tree)?Iterator\n|Reflection(Class|Function(Abstract)?|Method|Object|Parameter|Property|(Zend)?Extension)?\n|RangeException|Reflector|RegexIterator|ResourceBundle|RuntimeException|RRD(Creator|Graph|Updater)\n|SAM(Connection|Message)|SCA(_(SoapProxy|LocalProxy))?\n|SDO_(DAS_(ChangeSummary|Data(Factory|Object)|Relational|Setting|XML(_Document)?)\n     |Data(Factory|Object)|Exception|List|Model_(Property|ReflectionDataObject|Type)|Sequence)\n|SeekableIterator|Serializable|SessionHandler(Interface)?|SimpleXML(Iterator|Element)|SNMP\n|Soap(Client|Fault|Header|Param|Server|Var)\n|SphinxClient|Spoofchecker\n|Spl(DoublyLinkedList|Enum|File(Info|Object)|FixedArray|(Max|Min)?Heap|Observer|ObjectStorage\n    |(Priority)?Queue|Stack|Subject|Type|TempFileObject)\n|SQLite(3(Result|Stmt)?|Database|Result|Unbuffered)\n|stdClass|streamWrapper|SVM(Model)?|Swish(Result(s)?|Search)?|Sync(Event|Mutex|ReaderWriter|Semaphore)\n|Thread(ed)?|tidy(Node)?|TokyoTyrant(Table|Iterator|Query)?|Transliterator|Traversable\n|UConverter|(Underflow|UnexpectedValue)Exception\n|V8Js(Exception)?|Varnish(Admin|Log|Stat)\n|Worker|Weak(Map|Ref)\n|XML(Diff\\\\(Base|DOM|File|Memory)|Reader|Writer)|XsltProcessor\n|Yaf_(Route_(Interface|Map|Regex|Rewrite|Simple|Supervar)\n     |Action_Abstract|Application|Config_(Simple|Ini|Abstract)|Controller_Abstract\n     |Dispatcher|Exception|Loader|Plugin_Abstract|Registry|Request_(Abstract|Simple|Http)\n     |Response_Abstract|Router|Session|View_(Simple|Interface))\n|Yar_(Client(_Exception)?|Concurrent_Client|Server(_Exception)?)\n|ZipArchive|ZMQ(Context|Device|Poll|Socket)?)\n\\b",
				name: "support.class.builtin.php",
				captures: {
					"1": {
						name: "punctuation.separator.inheritance.php"
					}
				}
			}
		]
	},
	"class-name": {
		patterns: [
			{
				begin: "(?i)(?=\\\\?[a-z_0-9]+\\\\)",
				end: "(?i)([a-z_][a-z_0-9]*)?(?=[^a-z0-9_\\\\])",
				endCaptures: {
					"1": {
						name: "support.class.php"
					}
				},
				patterns: [
					{
						include: "#namespace"
					}
				]
			},
			{
				include: "#class-builtin"
			},
			{
				begin: "(?=[\\\\a-zA-Z_])",
				end: "(?i)([a-z_][a-z_0-9]*)?(?=[^a-z0-9_\\\\])",
				endCaptures: {
					"1": {
						name: "support.class.php"
					}
				},
				patterns: [
					{
						include: "#namespace"
					}
				]
			}
		]
	},
	comments: {
		patterns: [
			{
				begin: "/\\*\\*(?=\\s)",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.comment.php"
					}
				},
				end: "\\*/",
				endCaptures: {
					"0": {
						name: "punctuation.definition.comment.php"
					}
				},
				name: "comment.block.documentation.phpdoc.php",
				patterns: [
					{
						include: "#php_doc"
					}
				]
			},
			{
				begin: "/\\*",
				captures: {
					"0": {
						name: "punctuation.definition.comment.php"
					}
				},
				end: "\\*/",
				name: "comment.block.php"
			},
			{
				begin: "(^\\s+)?(?=//)",
				beginCaptures: {
					"1": {
						name: "punctuation.whitespace.comment.leading.php"
					}
				},
				end: "(?!\\G)",
				patterns: [
					{
						begin: "//",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.comment.php"
							}
						},
						end: "\\n|(?=\\?>)",
						name: "comment.line.double-slash.php"
					}
				]
			},
			{
				begin: "(^\\s+)?(?=#)",
				beginCaptures: {
					"1": {
						name: "punctuation.whitespace.comment.leading.php"
					}
				},
				end: "(?!\\G)",
				patterns: [
					{
						begin: "#",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.comment.php"
							}
						},
						end: "\\n|(?=\\?>)",
						name: "comment.line.number-sign.php"
					}
				]
			}
		]
	},
	constants: {
		patterns: [
			{
				match: "(?i)\\b(TRUE|FALSE|NULL|__(FILE|DIR|FUNCTION|CLASS|METHOD|LINE|NAMESPACE)__|ON|OFF|YES|NO|NL|BR|TAB)\\b",
				name: "constant.language.php"
			},
			{
				match: "(?x)\n(\\\\)?\\b\n(DEFAULT_INCLUDE_PATH\n|EAR_(INSTALL|EXTENSION)_DIR\n|E_(ALL|COMPILE_(ERROR|WARNING)|CORE_(ERROR|WARNING)|DEPRECATED|ERROR|NOTICE\n   |PARSE|RECOVERABLE_ERROR|STRICT|USER_(DEPRECATED|ERROR|NOTICE|WARNING)|WARNING)\n|PHP_(ROUND_HALF_(DOWN|EVEN|ODD|UP)|(MAJOR|MINOR|RELEASE)_VERSION|MAXPATHLEN\n     |BINDIR|SHLIB_SUFFIX|SYSCONFDIR|SAPI|CONFIG_FILE_(PATH|SCAN_DIR)\n     |INT_(MAX|SIZE)|ZTS|OS|OUTPUT_HANDLER_(START|CONT|END)|DEBUG|DATADIR\n     |URL_(SCHEME|HOST|USER|PORT|PASS|PATH|QUERY|FRAGMENT)|PREFIX\n     |EXTRA_VERSION|EXTENSION_DIR|EOL|VERSION(_ID)?\n     |WINDOWS_(NT_(SERVER|DOMAIN_CONTROLLER|WORKSTATION)\n              |VERSION_(MAJOR|MINOR)|BUILD|SUITEMASK|SP_(MAJOR|MINOR)\n              |PRODUCTTYPE|PLATFORM)\n     |LIBDIR|LOCALSTATEDIR)\n|STD(ERR|IN|OUT)|ZEND_(DEBUG_BUILD|THREAD_SAFE))\n\\b",
				name: "support.constant.core.php",
				captures: {
					"1": {
						name: "punctuation.separator.inheritance.php"
					}
				}
			},
			{
				match: "(?x)\n(\\\\)?\\b\n(__COMPILER_HALT_OFFSET__|AB(MON_(1|2|3|4|5|6|7|8|9|10|11|12)|DAY[1-7])\n|AM_STR|ASSERT_(ACTIVE|BAIL|CALLBACK_QUIET_EVAL|WARNING)|ALT_DIGITS\n|CASE_(UPPER|LOWER)|CHAR_MAX|CONNECTION_(ABORTED|NORMAL|TIMEOUT)|CODESET|COUNT_(NORMAL|RECURSIVE)\n|CREDITS_(ALL|DOCS|FULLPAGE|GENERAL|GROUP|MODULES|QA|SAPI)\n|CRYPT_(BLOWFISH|EXT_DES|MD5|SHA(256|512)|SALT_LENGTH|STD_DES)|CURRENCY_SYMBOL\n|D_(T_)?FMT|DATE_(ATOM|COOKIE|ISO8601|RFC(822|850|1036|1123|2822|3339)|RSS|W3C)\n|DAY_[1-7]|DECIMAL_POINT|DIRECTORY_SEPARATOR\n|ENT_(COMPAT|IGNORE|(NO)?QUOTES)|EXTR_(IF_EXISTS|OVERWRITE|PREFIX_(ALL|IF_EXISTS|INVALID|SAME)|REFS|SKIP)\n|ERA(_(D_(T_)?FMT)|T_FMT|YEAR)?|FRAC_DIGITS|GROUPING|HASH_HMAC|HTML_(ENTITIES|SPECIALCHARS)\n|INF|INFO_(ALL|CREDITS|CONFIGURATION|ENVIRONMENT|GENERAL|LICENSEMODULES|VARIABLES)\n|INI_(ALL|CANNER_(NORMAL|RAW)|PERDIR|SYSTEM|USER)|INT_(CURR_SYMBOL|FRAC_DIGITS)\n|LC_(ALL|COLLATE|CTYPE|MESSAGES|MONETARY|NUMERIC|TIME)|LOCK_(EX|NB|SH|UN)\n|LOG_(ALERT|AUTH(PRIV)?|CRIT|CRON|CONS|DAEMON|DEBUG|EMERG|ERR|INFO|LOCAL[1-7]|LPR|KERN|MAIL\n     |NEWS|NODELAY|NOTICE|NOWAIT|ODELAY|PID|PERROR|WARNING|SYSLOG|UCP|USER)\n|M_(1_PI|SQRT(1_2|2|3|PI)|2_(SQRT)?PI|PI(_(2|4))?|E(ULER)?|LN(10|2|PI)|LOG(10|2)E)\n|MON_(1|2|3|4|5|6|7|8|9|10|11|12|DECIMAL_POINT|GROUPING|THOUSANDS_SEP)\n|N_(CS_PRECEDES|SEP_BY_SPACE|SIGN_POSN)|NAN|NEGATIVE_SIGN|NO(EXPR|STR)\n|P_(CS_PRECEDES|SEP_BY_SPACE|SIGN_POSN)|PM_STR|POSITIVE_SIGN\n|PATH(_SEPARATOR|INFO_(EXTENSION|(BASE|DIR|FILE)NAME))|RADIXCHAR\n|SEEK_(CUR|END|SET)|SORT_(ASC|DESC|LOCALE_STRING|REGULAR|STRING)|STR_PAD_(BOTH|LEFT|RIGHT)\n|T_FMT(_AMPM)?|THOUSEP|THOUSANDS_SEP\n|UPLOAD_ERR_(CANT_WRITE|EXTENSION|(FORM|INI)_SIZE|NO_(FILE|TMP_DIR)|OK|PARTIAL)\n|YES(EXPR|STR))\n\\b",
				name: "support.constant.std.php",
				captures: {
					"1": {
						name: "punctuation.separator.inheritance.php"
					}
				}
			},
			{
				match: "(?x)\n(\\\\)?\\b\n(GLOB_(MARK|BRACE|NO(SORT|CHECK|ESCAPE)|ONLYDIR|ERR|AVAILABLE_FLAGS)\n|XML_(SAX_IMPL|(DTD|DOCUMENT(_(FRAG|TYPE))?|HTML_DOCUMENT|NOTATION|NAMESPACE_DECL|PI|COMMENT|DATA_SECTION|TEXT)_NODE\n     |OPTION_(SKIP_(TAGSTART|WHITE)|CASE_FOLDING|TARGET_ENCODING)\n     |ERROR_((BAD_CHAR|(ATTRIBUTE_EXTERNAL|BINARY|PARAM|RECURSIVE)_ENTITY)_REF|MISPLACED_XML_PI|SYNTAX|NONE\n            |NO_(MEMORY|ELEMENTS)|TAG_MISMATCH|INCORRECT_ENCODING|INVALID_TOKEN|DUPLICATE_ATTRIBUTE\n            |UNCLOSED_(CDATA_SECTION|TOKEN)|UNDEFINED_ENTITY|UNKNOWN_ENCODING|JUNK_AFTER_DOC_ELEMENT\n            |PARTIAL_CHAR|EXTERNAL_ENTITY_HANDLING|ASYNC_ENTITY)\n     |ENTITY_(((REF|DECL)_)?NODE)|ELEMENT(_DECL)?_NODE|LOCAL_NAMESPACE|ATTRIBUTE_(NMTOKEN(S)?|NOTATION|NODE)\n     |CDATA|ID(REF(S)?)?|DECL_NODE|ENTITY|ENUMERATION)\n|MHASH_(RIPEMD(128|160|256|320)|GOST|MD(2|4|5)|SHA(1|224|256|384|512)|SNEFRU256|HAVAL(128|160|192|224|256)\n       |CRC23(B)?|TIGER(128|160)?|WHIRLPOOL|ADLER32)\n|MYSQL_(BOTH|NUM|CLIENT_(SSL|COMPRESS|IGNORE_SPACE|INTERACTIVE|ASSOC))\n|MYSQLI_(REPORT_(STRICT|INDEX|OFF|ERROR|ALL)|REFRESH_(GRANT|MASTER|BACKUP_LOG|STATUS|SLAVE|HOSTS|THREADS|TABLES|LOG)\n        |READ_DEFAULT_(FILE|GROUP)|(GROUP|MULTIPLE_KEY|BINARY|BLOB)_FLAG|BOTH\n        |STMT_ATTR_(CURSOR_TYPE|UPDATE_MAX_LENGTH|PREFETCH_ROWS)|STORE_RESULT\n        |SERVER_QUERY_(NO_((GOOD_)?INDEX_USED)|WAS_SLOW)|SET_(CHARSET_NAME|FLAG)\n        |NO_(DEFAULT_VALUE_FLAG|DATA)|NOT_NULL_FLAG|NUM(_FLAG)?\n        |CURSOR_TYPE_(READ_ONLY|SCROLLABLE|NO_CURSOR|FOR_UPDATE)\n        |CLIENT_(SSL|NO_SCHEMA|COMPRESS|IGNORE_SPACE|INTERACTIVE|FOUND_ROWS)\n        |TYPE_(GEOMETRY|((MEDIUM|LONG|TINY)_)?BLOB|BIT|SHORT|STRING|SET|YEAR|NULL|NEWDECIMAL|NEWDATE|CHAR\n              |TIME(STAMP)?|TINY|INT24|INTERVAL|DOUBLE|DECIMAL|DATE(TIME)?|ENUM|VAR_STRING|FLOAT|LONG(LONG)?)\n        |TIME_STAMP_FLAG|INIT_COMMAND|ZEROFILL_FLAG|ON_UPDATE_NOW_FLAG\n        |OPT_(NET_((CMD|READ)_BUFFER_SIZE)|CONNECT_TIMEOUT|INT_AND_FLOAT_NATIVE|LOCAL_INFILE)\n        |DEBUG_TRACE_ENABLED|DATA_TRUNCATED|USE_RESULT|(ENUM|(PART|PRI|UNIQUE)_KEY|UNSIGNED)_FLAG\n        |ASSOC|ASYNC|AUTO_INCREMENT_FLAG)\n|MCRYPT_(RC(2|6)|RIJNDAEL_(128|192|256)|RAND|GOST|XTEA|MODE_(STREAM|NOFB|CBC|CFB|OFB|ECB)|MARS\n        |BLOWFISH(_COMPAT)?|SERPENT|SKIPJACK|SAFER(64|128|PLUS)|CRYPT|CAST_(128|256)|TRIPLEDES|THREEWAY\n        |TWOFISH|IDEA|(3)?DES|DECRYPT|DEV_(U)?RANDOM|PANAMA|ENCRYPT|ENIGNA|WAKE|LOKI97|ARCFOUR(_IV)?)\n|STREAM_(REPORT_ERRORS|MUST_SEEK|MKDIR_RECURSIVE|BUFFER_(NONE|FULL|LINE)|SHUT_(RD)?WR\n        |SOCK_(RDM|RAW|STREAM|SEQPACKET|DGRAM)|SERVER_(BIND|LISTEN)\n        |NOTIFY_(REDIRECTED|RESOLVE|MIME_TYPE_IS|SEVERITY_(INFO|ERR|WARN)|COMPLETED|CONNECT|PROGRESS\n                |FILE_SIZE_IS|FAILURE|AUTH_(REQUIRED|RESULT))\n        |CRYPTO_METHOD_((SSLv2(3)?|SSLv3|TLS)_(CLIENT|SERVER))|CLIENT_((ASYNC_)?CONNECT|PERSISTENT)\n        |CAST_(AS_STREAM|FOR_SELECT)|(IGNORE|IS)_URL|IPPROTO_(RAW|TCP|ICMP|IP|UDP)|OOB\n        |OPTION_(READ_(BUFFER|TIMEOUT)|BLOCKING|WRITE_BUFFER)|URL_STAT_(LINK|QUIET)|USE_PATH\n        |PEEK|PF_(INET(6)?|UNIX)|ENFORCE_SAFE_MODE|FILTER_(ALL|READ|WRITE))\n|SUNFUNCS_RET_(DOUBLE|STRING|TIMESTAMP)\n|SQLITE_(READONLY|ROW|MISMATCH|MISUSE|BOTH|BUSY|SCHEMA|NOMEM|NOTFOUND|NOTADB|NOLFS|NUM|CORRUPT\n        |CONSTRAINT|CANTOPEN|TOOBIG|INTERRUPT|INTERNAL|IOERR|OK|DONE|PROTOCOL|PERM|ERROR|EMPTY\n        |FORMAT|FULL|LOCKED|ABORT|ASSOC|AUTH)\n|SQLITE3_(BOTH|BLOB|NUM|NULL|TEXT|INTEGER|OPEN_(READ(ONLY|WRITE)|CREATE)|FLOAT_ASSOC)\n|CURL(M_(BAD_((EASY)?HANDLE)|CALL_MULTI_PERFORM|INTERNAL_ERROR|OUT_OF_MEMORY|OK)\n     |MSG_DONE|SSH_AUTH_(HOST|NONE|DEFAULT|PUBLICKEY|PASSWORD|KEYBOARD)\n     |CLOSEPOLICY_(SLOWEST|CALLBACK|OLDEST|LEAST_(RECENTLY_USED|TRAFFIC)\n     |INFO_(REDIRECT_(COUNT|TIME)|REQUEST_SIZE|SSL_VERIFYRESULT|STARTTRANSFER_TIME\n           |(SIZE|SPEED)_(DOWNLOAD|UPLOAD)|HTTP_CODE|HEADER_(OUT|SIZE)|NAMELOOKUP_TIME\n           |CONNECT_TIME|CONTENT_(TYPE|LENGTH_(DOWNLOAD|UPLOAD))|CERTINFO|TOTAL_TIME\n           |PRIVATE|PRETRANSFER_TIME|EFFECTIVE_URL|FILETIME)\n     |OPT_(RESUME_FROM|RETURNTRANSFER|REDIR_PROTOCOLS|REFERER|READ(DATA|FUNCTION)|RANGE|RANDOM_FILE\n          |MAX(CONNECTS|REDIRS)|BINARYTRANSFER|BUFFERSIZE\n          |SSH_(HOST_PUBLIC_KEY_MD5|(PRIVATE|PUBLIC)_KEYFILE)|AUTH_TYPES)\n          |SSL(CERT(TYPE|PASSWD)?|ENGINE(_DEFAULT)?|VERSION|KEY(TYPE|PASSWD)?)\n          |SSL_(CIPHER_LIST|VERIFY(HOST|PEER))\n          |STDERR|HTTP(GET|HEADER|200ALIASES|_VERSION|PROXYTUNNEL|AUTH)\n          |HEADER(FUNCTION)?|NO(BODY|SIGNAL|PROGRESS)|NETRC|CRLF|CONNECTTIMEOUT(_MS)?\n          |COOKIE(SESSION|JAR|FILE)?|CUSTOMREQUEST|CERTINFO|CLOSEPOLICY|CA(INFO|PATH)|TRANSFERTEXT\n          |TCP_NODELAY|TIME(CONDITION|OUT(_MS)?|VALUE)|INTERFACE|INFILE(SIZE)?|IPRESOLVE\n          |DNS_(CACHE_TIMEOUT|USE_GLOBAL_CACHE)|URL|USER(AGENT|PWD)|UNRESTRICTED_AUTH|UPLOAD\n          |PRIVATE|PROGRESSFUNCTION|PROXY(TYPE|USERPWD|PORT|AUTH)?|PROTOCOLS|PORT\n          |POST(REDIR|QUOTE|FIELDS)?|PUT|EGDSOCKET|ENCODING|VERBOSE|KRB4LEVEL|KEYPASSWD|QUOTE|FRESH_CONNECT\n          |FTP(APPEND|LISTONLY|PORT|SSLAUTH)\n          |FTP_(SSL|SKIP_PASV_IP|CREATE_MISSING_DIRS|USE_EP(RT|SV)|FILEMETHOD)\n          |FILE(TIME)?|FORBID_REUSE|FOLLOWLOCATION|FAILONERROR|WRITE(FUNCTION|HEADER)|LOW_SPEED_(LIMIT|TIME)\n          |AUTOREFERER)\n     |PROXY_(HTTP|SOCKS(4|5))|PROTO_(SCP|SFTP|HTTP(S)?|TELNET|TFTP|DICT|FTP(S)?|FILE|LDAP(S)?|ALL)\n     |E_((RECV|READ)_ERROR|GOT_NOTHING|MALFORMAT_USER\n        |BAD_(CONTENT_ENCODING|CALLING_ORDER|PASSWORD_ENTERED|FUNCTION_ARGUMENT)\n        |SSH|SSL_(CIPHER|CONNECT_ERROR|CERTPROBLEM|CACERT|PEER_CERTIFICATE|ENGINE_(NOTFOUND|SETFAILED))\n        |SHARE_IN_USE|SEND_ERROR|HTTP_(RANGE_ERROR|NOT_FOUND|PORT_FAILED|POST_ERROR)\n        |COULDNT_(RESOLVE_(HOST|PROXY)|CONNECT)|TOO_MANY_REDIRECTS|TELNET_OPTION_SYNTAX|OBSOLETE\n        |OUT_OF_MEMORY|OPERATION|TIMEOUTED|OK|URL_MALFORMAT(_USER)?|UNSUPPORTED_PROTOCOL\n        |UNKNOWN_TELNET_OPTION|PARTIAL_FILE\n        |FTP_(BAD_DOWNLOAD_RESUME|SSL_FAILED|COULDNT_(RETR_FILE|GET_SIZE|STOR_FILE|SET_(BINARY|ASCII)|USE_REST)\n             |CANT_(GET_HOST|RECONNECT)|USER_PASSWORD_INCORRECT|PORT_FAILED|QUOTE_ERROR|WRITE_ERROR\n             |WEIRD_((PASS|PASV|SERVER|USER)_REPLY|227_FORMAT)|ACCESS_DENIED)\n        |FILESIZE_EXCEEDED|FILE_COULDNT_READ_FILE|FUNCTION_NOT_FOUND|FAILED_INIT|WRITE_ERROR|LIBRARY_NOT_FOUND\n        |LDAP_(SEARCH_FAILED|CANNOT_BIND|INVALID_URL)|ABORTED_BY_CALLBACK)\n     |VERSION_NOW\n     |FTP(METHOD_(MULTI|SINGLE|NO)CWD|SSL_(ALL|NONE|CONTROL|TRY)|AUTH_(DEFAULT|SSL|TLS))\n     |AUTH_(ANY(SAFE)?|BASIC|DIGEST|GSSNEGOTIATE|NTLM))\n|CURL_(HTTP_VERSION_(1_(0|1)|NONE)|NETRC_(REQUIRED|IGNORED|OPTIONAL)|TIMECOND_(IF(UN)?MODSINCE|LASTMOD)\n      |IPRESOLVE_(V(4|6)|WHATEVER)|VERSION_(SSL|IPV6|KERBEROS4|LIBZ))\n|IMAGETYPE_(GIF|XBM|BMP|SWF|COUNT|TIFF_(MM|II)|ICO|IFF|UNKNOWN|JB2|JPX|JP2|JPC|JPEG(2000)?|PSD|PNG|WBMP)\n|INPUT_(REQUEST|GET|SERVER|SESSION|COOKIE|POST|ENV)|ICONV_(MIME_DECODE_(STRICT|CONTINUE_ON_ERROR)|IMPL|VERSION)\n|DNS_(MX|SRV|SOA|HINFO|NS|NAPTR|CNAME|TXT|PTR|ANY|ALL|AAAA|A(6)?)\n|DOM(STRING_SIZE_ERR)\n|DOM_((SYNTAX|HIERARCHY_REQUEST|NO_(MODIFICATION_ALLOWED|DATA_ALLOWED)|NOT_(FOUND|SUPPORTED)|NAMESPACE\n     |INDEX_SIZE|USE_ATTRIBUTE|VALID_(MODIFICATION|STATE|CHARACTER|ACCESS)|PHP|VALIDATION|WRONG_DOCUMENT)_ERR)\n|JSON_(HEX_(TAG|QUOT|AMP|APOS)|NUMERIC_CHECK|ERROR_(SYNTAX|STATE_MISMATCH|NONE|CTRL_CHAR|DEPTH|UTF8)|FORCE_OBJECT)\n|PREG_((D_UTF8(_OFFSET)?|NO|INTERNAL|(BACKTRACK|RECURSION)_LIMIT)_ERROR|GREP_INVERT\n      |SPLIT_(NO_EMPTY|(DELIM|OFFSET)_CAPTURE)|SET_ORDER|OFFSET_CAPTURE|PATTERN_ORDER)\n|PSFS_(PASS_ON|ERR_FATAL|FEED_ME|FLAG_(NORMAL|FLUSH_(CLOSE|INC)))\n|PCRE_VERSION|POSIX_((F|R|W|X)_OK|S_IF(REG|BLK|SOCK|CHR|IFO))\n|FNM_(NOESCAPE|CASEFOLD|PERIOD|PATHNAME)\n|FILTER_(REQUIRE_(SCALAR|ARRAY)|NULL_ON_FAILURE|CALLBACK|DEFAULT|UNSAFE_RAW\n        |SANITIZE_(MAGIC_QUOTES|STRING|STRIPPED|SPECIAL_CHARS|NUMBER_(INT|FLOAT)|URL\n                  |EMAIL|ENCODED|FULL_SPCIAL_CHARS)\n        |VALIDATE_(REGEXP|BOOLEAN|INT|IP|URL|EMAIL|FLOAT)\n        |FORCE_ARRAY\n        |FLAG_(SCHEME_REQUIRED|STRIP_(BACKTICK|HIGH|LOW)|HOST_REQUIRED|NONE|NO_(RES|PRIV)_RANGE|ENCODE_QUOTES\n              |IPV(4|6)|PATH_REQUIRED|EMPTY_STRING_NULL|ENCODE_(HIGH|LOW|AMP)|QUERY_REQUIRED\n              |ALLOW_(SCIENTIFIC|HEX|THOUSAND|OCTAL|FRACTION)))\n|FILE_(BINARY|SKIP_EMPTY_LINES|NO_DEFAULT_CONTEXT|TEXT|IGNORE_NEW_LINES|USE_INCLUDE_PATH|APPEND)\n|FILEINFO_(RAW|MIME(_(ENCODING|TYPE))?|SYMLINK|NONE|CONTINUE|DEVICES|PRESERVE_ATIME)\n|FORCE_(DEFLATE|GZIP)\n|LIBXML_(XINCLUDE|NSCLEAN|NO(XMLDECL|BLANKS|NET|CDATA|ERROR|EMPTYTAG|ENT|WARNING)\n        |COMPACT|DTD(VALID|LOAD|ATTR)|((DOTTED|LOADED)_)?VERSION|PARSEHUGE|ERR_(NONE|ERROR|FATAL|WARNING)))\n\\b",
				name: "support.constant.ext.php",
				captures: {
					"1": {
						name: "punctuation.separator.inheritance.php"
					}
				}
			},
			{
				match: "(?x)\n(\\\\)?\\b\n(T_(RETURN|REQUIRE(_ONCE)?|GOTO|GLOBAL|(MINUS|MOD|MUL|XOR)_EQUAL|METHOD_C|ML_COMMENT|BREAK\n   |BOOL_CAST|BOOLEAN_(AND|OR)|BAD_CHARACTER|SR(_EQUAL)?|STRING(_CAST|VARNAME)?|START_HEREDOC|STATIC\n   |SWITCH|SL(_EQUAL)?|HALT_COMPILER|NS_(C|SEPARATOR)|NUM_STRING|NEW|NAMESPACE|CHARACTER|COMMENT\n   |CONSTANT(_ENCAPSED_STRING)?|CONCAT_EQUAL|CONTINUE|CURLY_OPEN|CLOSE_TAG|CLONE|CLASS(_C)?\n   |CASE|CATCH|TRY|THROW|IMPLEMENTS|ISSET|IS_((GREATER|SMALLER)_OR_EQUAL|(NOT_)?(IDENTICAL|EQUAL))\n   |INSTANCEOF|INCLUDE(_ONCE)?|INC|INT_CAST|INTERFACE|INLINE_HTML|IF|OR_EQUAL|OBJECT_(CAST|OPERATOR)\n   |OPEN_TAG(_WITH_ECHO)?|OLD_FUNCTION|DNUMBER|DIR|DIV_EQUAL|DOC_COMMENT|DOUBLE_(ARROW|CAST|COLON)\n   |DOLLAR_OPEN_CURLY_BRACES|DO|DEC|DECLARE|DEFAULT|USE|UNSET(_CAST)?|PRINT|PRIVATE|PROTECTED|PUBLIC\n   |PLUS_EQUAL|PAAMAYIM_NEKUDOTAYIM|EXTENDS|EXIT|EMPTY|ENCAPSED_AND_WHITESPACE\n   |END(SWITCH|IF|DECLARE|FOR(EACH)?|WHILE)|END_HEREDOC|ECHO|EVAL|ELSE(IF)?|VAR(IABLE)?|FINAL|FILE\n   |FOR(EACH)?|FUNC_C|FUNCTION|WHITESPACE|WHILE|LNUMBER|LIST|LINE|LOGICAL_(AND|OR|XOR)\n   |ARRAY_(CAST)?|ABSTRACT|AS|AND_EQUAL))\n\\b",
				name: "support.constant.parser-token.php",
				captures: {
					"1": {
						name: "punctuation.separator.inheritance.php"
					}
				}
			},
			{
				match: "(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",
				name: "constant.other.php"
			}
		]
	},
	"function-parameters": {
		patterns: [
			{
				include: "#comments"
			},
			{
				match: ",",
				name: "punctuation.separator.delimiter.php"
			},
			{
				begin: "(?xi)\n(array)                                                            # Typehint\n\\s+((&)?\\s*(\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*) # Variable name with possible reference\n\\s*(=)\\s*(array)\\s*(\\()                                        # Default value",
				beginCaptures: {
					"1": {
						name: "storage.type.php"
					},
					"2": {
						name: "variable.other.php"
					},
					"3": {
						name: "storage.modifier.reference.php"
					},
					"4": {
						name: "punctuation.definition.variable.php"
					},
					"5": {
						name: "keyword.operator.assignment.php"
					},
					"6": {
						name: "support.function.construct.php"
					},
					"7": {
						name: "punctuation.definition.array.begin.bracket.round.php"
					}
				},
				contentName: "meta.array.php",
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.array.end.bracket.round.php"
					}
				},
				name: "meta.function.parameter.array.php",
				patterns: [
					{
						include: "#comments"
					},
					{
						include: "#strings"
					},
					{
						include: "#numbers"
					}
				]
			},
			{
				match: "(?xi)\n(array|callable)                                                   # Typehint\n\\s+((&)?\\s*(\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*) # Variable name with possible reference\n(?:                                                                # Optional default value\n  \\s*(=)\\s*\n  (?:\n    (null)\n    |\n    (\\[)((?>[^\\[\\]]+|\\[\\g<8>\\])*)(\\])\n    |((?:\\S*?\\(\\))|(?:\\S*?))\n  )\n)?\n\\s*(?=,|\\)|/[/*]|\\#|$) # A closing parentheses (end of argument list) or a comma or a comment",
				name: "meta.function.parameter.array.php",
				captures: {
					"1": {
						name: "storage.type.php"
					},
					"2": {
						name: "variable.other.php"
					},
					"3": {
						name: "storage.modifier.reference.php"
					},
					"4": {
						name: "punctuation.definition.variable.php"
					},
					"5": {
						name: "keyword.operator.assignment.php"
					},
					"6": {
						name: "constant.language.php"
					},
					"7": {
						name: "punctuation.section.array.begin.php"
					},
					"8": {
						patterns: [
							{
								include: "#parameter-default-types"
							}
						]
					},
					"9": {
						name: "punctuation.section.array.end.php"
					},
					"10": {
						name: "invalid.illegal.non-null-typehinted.php"
					}
				}
			},
			{
				begin: "(?xi)\n(\\\\?(?:[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*\\\\)*)                 # Optional namespace\n([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)                               # Typehinted class name\n\\s+((&)?\\s*(\\.\\.\\.)?(\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*) # Variable name with possible reference",
				beginCaptures: {
					"1": {
						name: "support.other.namespace.php",
						patterns: [
							{
								match: "(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",
								name: "storage.type.php"
							},
							{
								match: "\\\\",
								name: "punctuation.separator.inheritance.php"
							}
						]
					},
					"2": {
						name: "storage.type.php"
					},
					"3": {
						name: "variable.other.php"
					},
					"4": {
						name: "storage.modifier.reference.php"
					},
					"5": {
						name: "keyword.operator.variadic.php"
					},
					"6": {
						name: "punctuation.definition.variable.php"
					}
				},
				end: "(?=,|\\)|/[/*]|\\#)",
				name: "meta.function.parameter.typehinted.php",
				patterns: [
					{
						begin: "=",
						beginCaptures: {
							"0": {
								name: "keyword.operator.assignment.php"
							}
						},
						end: "(?=,|\\)|/[/*]|\\#)",
						patterns: [
							{
								include: "#language"
							}
						]
					}
				]
			},
			{
				captures: {
					"1": {
						name: "variable.other.php"
					},
					"2": {
						name: "storage.modifier.reference.php"
					},
					"3": {
						name: "keyword.operator.variadic.php"
					},
					"4": {
						name: "punctuation.definition.variable.php"
					}
				},
				match: "(?xi)\n((&)?\\s*(\\.\\.\\.)?(\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*) # Variable name with possible reference\n\\s*(?=,|\\)|/[/*]|\\#|$) # A closing parentheses (end of argument list) or a comma or a comment",
				name: "meta.function.parameter.no-default.php"
			},
			{
				begin: "(?xi)\n((&)?\\s*(\\.\\.\\.)?(\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*) # Variable name with possible reference\n\\s*(=)\\s*\n(?:(\\[)((?>[^\\[\\]]+|\\[\\g<6>\\])*)(\\]))?                              # Optional default type",
				beginCaptures: {
					"1": {
						name: "variable.other.php"
					},
					"2": {
						name: "storage.modifier.reference.php"
					},
					"3": {
						name: "keyword.operator.variadic.php"
					},
					"4": {
						name: "punctuation.definition.variable.php"
					},
					"5": {
						name: "keyword.operator.assignment.php"
					},
					"6": {
						name: "punctuation.section.array.begin.php"
					},
					"7": {
						patterns: [
							{
								include: "#parameter-default-types"
							}
						]
					},
					"8": {
						name: "punctuation.section.array.end.php"
					}
				},
				end: "(?=,|\\)|/[/*]|\\#)",
				name: "meta.function.parameter.default.php",
				patterns: [
					{
						include: "#parameter-default-types"
					}
				]
			}
		]
	},
	"function-call": {
		patterns: [
			{
				begin: "(?xi)\n(\n  \\\\?\\b                                                # Optional root namespace\n  [a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*          # First namespace\n  (?:\\\\[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)+ # Additional namespaces\n)\\s*(\\()",
				beginCaptures: {
					"1": {
						patterns: [
							{
								include: "#namespace"
							},
							{
								match: "(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",
								name: "entity.name.function.php"
							}
						]
					},
					"2": {
						name: "punctuation.definition.arguments.begin.bracket.round.php"
					}
				},
				end: "\\)|(?=\\?>)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.arguments.end.bracket.round.php"
					}
				},
				name: "meta.function-call.php",
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				begin: "(?i)(\\\\)?\\b([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\\s*(\\()",
				beginCaptures: {
					"1": {
						patterns: [
							{
								include: "#namespace"
							}
						]
					},
					"2": {
						patterns: [
							{
								include: "#support"
							},
							{
								match: "(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",
								name: "entity.name.function.php"
							}
						]
					},
					"3": {
						name: "punctuation.definition.arguments.begin.bracket.round.php"
					}
				},
				end: "\\)|(?=\\?>)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.arguments.end.bracket.round.php"
					}
				},
				name: "meta.function-call.php",
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				match: "(?i)\\b(print|echo)\\b",
				name: "support.function.construct.output.php"
			}
		]
	},
	heredoc: {
		patterns: [
			{
				begin: "(?i)(?=<<<\\s*(\"?)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)(\\1)\\s*$)",
				end: "(?!\\G)",
				name: "string.unquoted.heredoc.php",
				patterns: [
					{
						include: "#heredoc_interior"
					}
				]
			},
			{
				begin: "(?=<<<\\s*'([a-zA-Z_]+[a-zA-Z0-9_]*)'\\s*$)",
				end: "(?!\\G)",
				name: "string.unquoted.nowdoc.php",
				patterns: [
					{
						include: "#nowdoc_interior"
					}
				]
			}
		]
	},
	heredoc_interior: {
		patterns: [
			{
				begin: "(<<<)\\s*(\"?)(HTML)(\\2)(\\s*)$",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					},
					"1": {
						name: "punctuation.definition.string.php"
					},
					"3": {
						name: "keyword.operator.heredoc.php"
					},
					"5": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				contentName: "text.html",
				end: "^(\\3)\\b",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "keyword.operator.heredoc.php"
					}
				},
				name: "meta.embedded.html",
				patterns: [
					{
						include: "#interpolation"
					},
					{
						include: "text.html.basic"
					}
				]
			},
			{
				begin: "(<<<)\\s*(\"?)(XML)(\\2)(\\s*)$",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					},
					"1": {
						name: "punctuation.definition.string.php"
					},
					"3": {
						name: "keyword.operator.heredoc.php"
					},
					"5": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				contentName: "text.xml",
				end: "^(\\3)\\b",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "keyword.operator.heredoc.php"
					}
				},
				name: "meta.embedded.xml",
				patterns: [
					{
						include: "#interpolation"
					},
					{
						include: "text.xml"
					}
				]
			},
			{
				begin: "(<<<)\\s*(\"?)(SQL)(\\2)(\\s*)$",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					},
					"1": {
						name: "punctuation.definition.string.php"
					},
					"3": {
						name: "keyword.operator.heredoc.php"
					},
					"5": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				contentName: "source.sql",
				end: "^(\\3)\\b",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "keyword.operator.heredoc.php"
					}
				},
				name: "meta.embedded.sql",
				patterns: [
					{
						include: "#interpolation"
					},
					{
						include: "source.sql"
					}
				]
			},
			{
				begin: "(<<<)\\s*(\"?)(JAVASCRIPT|JS)(\\2)(\\s*)$",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					},
					"1": {
						name: "punctuation.definition.string.php"
					},
					"3": {
						name: "keyword.operator.heredoc.php"
					},
					"5": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				contentName: "source.js",
				end: "^(\\3)\\b",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "keyword.operator.heredoc.php"
					}
				},
				name: "meta.embedded.js",
				patterns: [
					{
						include: "#interpolation"
					},
					{
						include: "source.js"
					}
				]
			},
			{
				begin: "(<<<)\\s*(\"?)(JSON)(\\2)(\\s*)$",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					},
					"1": {
						name: "punctuation.definition.string.php"
					},
					"3": {
						name: "keyword.operator.heredoc.php"
					},
					"5": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				contentName: "source.json",
				end: "^(\\3)\\b",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "keyword.operator.heredoc.php"
					}
				},
				name: "meta.embedded.json",
				patterns: [
					{
						include: "#interpolation"
					},
					{
						include: "source.json"
					}
				]
			},
			{
				begin: "(<<<)\\s*(\"?)(CSS)(\\2)(\\s*)$",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					},
					"1": {
						name: "punctuation.definition.string.php"
					},
					"3": {
						name: "keyword.operator.heredoc.php"
					},
					"5": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				contentName: "source.css",
				end: "^(\\3)\\b",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "keyword.operator.heredoc.php"
					}
				},
				name: "meta.embedded.css",
				patterns: [
					{
						include: "#interpolation"
					},
					{
						include: "source.css"
					}
				]
			},
			{
				begin: "(<<<)\\s*(\"?)(REGEXP?)(\\2)(\\s*)$",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					},
					"1": {
						name: "punctuation.definition.string.php"
					},
					"3": {
						name: "keyword.operator.heredoc.php"
					},
					"5": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				contentName: "string.regexp.heredoc.php",
				end: "^(\\3)\\b",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "keyword.operator.heredoc.php"
					}
				},
				patterns: [
					{
						include: "#interpolation"
					},
					{
						match: "(\\\\){1,2}[.$^\\[\\]{}]",
						name: "constant.character.escape.regex.php"
					},
					{
						captures: {
							"1": {
								name: "punctuation.definition.arbitrary-repitition.php"
							},
							"3": {
								name: "punctuation.definition.arbitrary-repitition.php"
							}
						},
						match: "({)\\d+(,\\d+)?(})",
						name: "string.regexp.arbitrary-repitition.php"
					},
					{
						begin: "\\[(?:\\^?\\])?",
						captures: {
							"0": {
								name: "punctuation.definition.character-class.php"
							}
						},
						end: "\\]",
						name: "string.regexp.character-class.php",
						patterns: [
							{
								match: "\\\\[\\\\'\\[\\]]",
								name: "constant.character.escape.php"
							}
						]
					},
					{
						match: "[$^+*]",
						name: "keyword.operator.regexp.php"
					},
					{
						begin: "(?i)(?<=^|\\s)(#)\\s(?=[[a-z0-9_\\x{7f}-\\x{ff},. \\t?!-][^\\x{00}-\\x{7f}]]*$)",
						beginCaptures: {
							"1": {
								name: "punctuation.definition.comment.php"
							}
						},
						end: "$",
						endCaptures: {
							"0": {
								name: "punctuation.definition.comment.php"
							}
						},
						name: "comment.line.number-sign.php"
					}
				]
			},
			{
				begin: "(?i)(<<<)\\s*(\"?)([a-z_\\x{7f}-\\x{ff}]+[a-z0-9_\\x{7f}-\\x{ff}]*)(\\2)(\\s*)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.string.php"
					},
					"3": {
						name: "keyword.operator.heredoc.php"
					},
					"5": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				end: "^(\\3)\\b",
				endCaptures: {
					"1": {
						name: "keyword.operator.heredoc.php"
					}
				},
				patterns: [
					{
						include: "#interpolation"
					}
				]
			}
		]
	},
	nowdoc_interior: {
		patterns: [
			{
				begin: "(<<<)\\s*'(HTML)'(\\s*)$",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					},
					"1": {
						name: "punctuation.definition.string.php"
					},
					"2": {
						name: "keyword.operator.nowdoc.php"
					},
					"3": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				contentName: "text.html",
				end: "^(\\2)\\b",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "keyword.operator.nowdoc.php"
					}
				},
				name: "meta.embedded.html",
				patterns: [
					{
						include: "text.html.basic"
					}
				]
			},
			{
				begin: "(<<<)\\s*'(XML)'(\\s*)$",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					},
					"1": {
						name: "punctuation.definition.string.php"
					},
					"2": {
						name: "keyword.operator.nowdoc.php"
					},
					"3": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				contentName: "text.xml",
				end: "^(\\2)\\b",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "keyword.operator.nowdoc.php"
					}
				},
				name: "meta.embedded.xml",
				patterns: [
					{
						include: "text.xml"
					}
				]
			},
			{
				begin: "(<<<)\\s*'(SQL)'(\\s*)$",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					},
					"1": {
						name: "punctuation.definition.string.php"
					},
					"2": {
						name: "keyword.operator.nowdoc.php"
					},
					"3": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				contentName: "source.sql",
				end: "^(\\2)\\b",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "keyword.operator.nowdoc.php"
					}
				},
				name: "meta.embedded.sql",
				patterns: [
					{
						include: "source.sql"
					}
				]
			},
			{
				begin: "(<<<)\\s*'(JAVASCRIPT|JS)'(\\s*)$",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					},
					"1": {
						name: "punctuation.definition.string.php"
					},
					"2": {
						name: "keyword.operator.nowdoc.php"
					},
					"3": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				contentName: "source.js",
				end: "^(\\2)\\b",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "keyword.operator.nowdoc.php"
					}
				},
				name: "meta.embedded.js",
				patterns: [
					{
						include: "source.js"
					}
				]
			},
			{
				begin: "(<<<)\\s*'(JSON)'(\\s*)$",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					},
					"1": {
						name: "punctuation.definition.string.php"
					},
					"2": {
						name: "keyword.operator.nowdoc.php"
					},
					"3": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				contentName: "source.json",
				end: "^(\\2)\\b",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "keyword.operator.nowdoc.php"
					}
				},
				name: "meta.embedded.json",
				patterns: [
					{
						include: "source.json"
					}
				]
			},
			{
				begin: "(<<<)\\s*'(CSS)'(\\s*)$",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					},
					"1": {
						name: "punctuation.definition.string.php"
					},
					"2": {
						name: "keyword.operator.nowdoc.php"
					},
					"3": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				contentName: "source.css",
				end: "^(\\2)\\b",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "keyword.operator.nowdoc.php"
					}
				},
				name: "meta.embedded.css",
				patterns: [
					{
						include: "source.css"
					}
				]
			},
			{
				begin: "(<<<)\\s*'(REGEXP?)'(\\s*)$",
				beginCaptures: {
					"0": {
						name: "punctuation.section.embedded.begin.php"
					},
					"1": {
						name: "punctuation.definition.string.php"
					},
					"2": {
						name: "keyword.operator.nowdoc.php"
					},
					"3": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				contentName: "string.regexp.nowdoc.php",
				end: "^(\\2)\\b",
				endCaptures: {
					"0": {
						name: "punctuation.section.embedded.end.php"
					},
					"1": {
						name: "keyword.operator.nowdoc.php"
					}
				},
				patterns: [
					{
						match: "(\\\\){1,2}[.$^\\[\\]{}]",
						name: "constant.character.escape.regex.php"
					},
					{
						captures: {
							"1": {
								name: "punctuation.definition.arbitrary-repitition.php"
							},
							"3": {
								name: "punctuation.definition.arbitrary-repitition.php"
							}
						},
						match: "({)\\d+(,\\d+)?(})",
						name: "string.regexp.arbitrary-repitition.php"
					},
					{
						begin: "\\[(?:\\^?\\])?",
						captures: {
							"0": {
								name: "punctuation.definition.character-class.php"
							}
						},
						end: "\\]",
						name: "string.regexp.character-class.php",
						patterns: [
							{
								match: "\\\\[\\\\'\\[\\]]",
								name: "constant.character.escape.php"
							}
						]
					},
					{
						match: "[$^+*]",
						name: "keyword.operator.regexp.php"
					},
					{
						begin: "(?i)(?<=^|\\s)(#)\\s(?=[[a-z0-9_\\x{7f}-\\x{ff},. \\t?!-][^\\x{00}-\\x{7f}]]*$)",
						beginCaptures: {
							"1": {
								name: "punctuation.definition.comment.php"
							}
						},
						end: "$",
						endCaptures: {
							"0": {
								name: "punctuation.definition.comment.php"
							}
						},
						name: "comment.line.number-sign.php"
					}
				]
			},
			{
				begin: "(?i)(<<<)\\s*'([a-z_\\x{7f}-\\x{ff}]+[a-z0-9_\\x{7f}-\\x{ff}]*)'(\\s*)",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.string.php"
					},
					"2": {
						name: "keyword.operator.nowdoc.php"
					},
					"3": {
						name: "invalid.illegal.trailing-whitespace.php"
					}
				},
				end: "^(\\2)\\b",
				endCaptures: {
					"1": {
						name: "keyword.operator.nowdoc.php"
					}
				}
			}
		]
	},
	instantiation: {
		begin: "(?i)(new)\\s+",
		beginCaptures: {
			"1": {
				name: "keyword.other.new.php"
			}
		},
		end: "(?i)(?=[^a-z0-9_\\x{7f}-\\x{ff}\\\\])",
		patterns: [
			{
				match: "(?i)(parent|static|self)(?![a-z0-9_\\x{7f}-\\x{ff}])",
				name: "storage.type.php"
			},
			{
				include: "#class-name"
			},
			{
				include: "#variable-name"
			}
		]
	},
	interpolation: {
		patterns: [
			{
				match: "\\\\[0-7]{1,3}",
				name: "constant.character.escape.octal.php"
			},
			{
				match: "\\\\x[0-9A-Fa-f]{1,2}",
				name: "constant.character.escape.hex.php"
			},
			{
				match: "\\\\u{[0-9A-Fa-f]+}",
				name: "constant.character.escape.unicode.php"
			},
			{
				match: "\\\\[nrtvef$\"\\\\]",
				name: "constant.character.escape.php"
			},
			{
				begin: "{(?=\\$.*?})",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.variable.php"
					}
				},
				end: "}",
				endCaptures: {
					"0": {
						name: "punctuation.definition.variable.php"
					}
				},
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				include: "#variable-name"
			}
		]
	},
	"invoke-call": {
		captures: {
			"1": {
				name: "punctuation.definition.variable.php"
			},
			"2": {
				name: "variable.other.php"
			}
		},
		match: "(?i)(\\$+)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)(?=\\s*\\()",
		name: "meta.function-call.invoke.php"
	},
	language: {
		patterns: [
			{
				include: "#comments"
			},
			{
				begin: "(?i)^\\s*(interface)\\s+([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\\s*(extends)?\\s*",
				beginCaptures: {
					"1": {
						name: "storage.type.interface.php"
					},
					"2": {
						name: "entity.name.type.interface.php"
					},
					"3": {
						name: "storage.modifier.extends.php"
					}
				},
				end: "(?i)((?:[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*\\s*,\\s*)*)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?\\s*(?:(?={)|$)",
				endCaptures: {
					"1": {
						patterns: [
							{
								match: "(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",
								name: "entity.other.inherited-class.php"
							},
							{
								match: ",",
								name: "punctuation.separator.classes.php"
							}
						]
					},
					"2": {
						name: "entity.other.inherited-class.php"
					}
				},
				name: "meta.interface.php",
				patterns: [
					{
						include: "#namespace"
					}
				]
			},
			{
				begin: "(?i)^\\s*(trait)\\s+([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)",
				beginCaptures: {
					"1": {
						name: "storage.type.trait.php"
					},
					"2": {
						name: "entity.name.type.trait.php"
					}
				},
				end: "(?={)",
				name: "meta.trait.php",
				patterns: [
					{
						include: "#comments"
					}
				]
			},
			{
				match: "(?i)(?:^|(?<=<\\?php))\\s*(namespace)\\s+([a-z0-9_\\x{7f}-\\x{ff}\\\\]+)(?=\\s*;)",
				name: "meta.namespace.php",
				captures: {
					"1": {
						name: "keyword.other.namespace.php"
					},
					"2": {
						name: "entity.name.type.namespace.php",
						patterns: [
							{
								match: "\\\\",
								name: "punctuation.separator.inheritance.php"
							}
						]
					}
				}
			},
			{
				begin: "(?i)(?:^|(?<=<\\?php))\\s*(namespace)\\s+",
				beginCaptures: {
					"1": {
						name: "keyword.other.namespace.php"
					}
				},
				end: "(?<=})|(?=\\?>)",
				name: "meta.namespace.php",
				patterns: [
					{
						include: "#comments"
					},
					{
						match: "(?i)[a-z0-9_\\x{7f}-\\x{ff}\\\\]+",
						name: "entity.name.type.namespace.php",
						captures: {
							"0": {
								patterns: [
									{
										match: "\\\\",
										name: "punctuation.separator.inheritance.php"
									}
								]
							}
						}
					},
					{
						begin: "{",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.namespace.begin.bracket.curly.php"
							}
						},
						end: "}|(?=\\?>)",
						endCaptures: {
							"0": {
								name: "punctuation.definition.namespace.end.bracket.curly.php"
							}
						},
						patterns: [
							{
								include: "#language"
							}
						]
					},
					{
						match: "[^\\s]+",
						name: "invalid.illegal.identifier.php"
					}
				]
			},
			{
				match: "\\s+(?=use\\b)"
			},
			{
				begin: "(?i)\\buse\\b",
				beginCaptures: {
					"0": {
						name: "keyword.other.use.php"
					}
				},
				end: "(?<=})|(?=;)",
				name: "meta.use.php",
				patterns: [
					{
						match: "\\b(const|function)\\b",
						name: "storage.type.${1:/downcase}.php"
					},
					{
						begin: "{",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.use.begin.bracket.curly.php"
							}
						},
						end: "}",
						endCaptures: {
							"0": {
								name: "punctuation.definition.use.end.bracket.curly.php"
							}
						},
						patterns: [
							{
								include: "#scope-resolution"
							},
							{
								match: "(?xi)\n\\b(as)\n\\s+(final|abstract|public|private|protected|static)\n\\s+([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\n\\b",
								captures: {
									"1": {
										name: "keyword.other.use-as.php"
									},
									"2": {
										name: "storage.modifier.php"
									},
									"3": {
										name: "entity.other.alias.php"
									}
								}
							},
							{
								match: "(?xi)\n\\b(as)\n\\s+([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\n\\b",
								captures: {
									"1": {
										name: "keyword.other.use-as.php"
									},
									"2": {
										patterns: [
											{
												match: "^(?:final|abstract|public|private|protected|static)$",
												name: "storage.modifier.php"
											},
											{
												match: ".+",
												name: "entity.other.alias.php"
											}
										]
									}
								}
							},
							{
								match: "(?i)\\b(insteadof)\\s+([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)",
								captures: {
									"1": {
										name: "keyword.other.use-insteadof.php"
									},
									"2": {
										name: "support.class.php"
									}
								}
							},
							{
								match: ";",
								name: "punctuation.terminator.expression.php"
							},
							{
								include: "#use-inner"
							}
						]
					},
					{
						include: "#use-inner"
					}
				]
			},
			{
				begin: "(?i)^\\s*(?:(abstract|final)\\s+)?(class)\\s+([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)",
				beginCaptures: {
					"1": {
						name: "storage.modifier.${1:/downcase}.php"
					},
					"2": {
						name: "storage.type.class.php"
					},
					"3": {
						name: "entity.name.type.class.php"
					}
				},
				end: "}|(?=\\?>)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.class.end.bracket.curly.php"
					}
				},
				name: "meta.class.php",
				patterns: [
					{
						include: "#comments"
					},
					{
						begin: "(?i)(extends)\\s+",
						beginCaptures: {
							"1": {
								name: "storage.modifier.extends.php"
							}
						},
						contentName: "meta.other.inherited-class.php",
						end: "(?i)(?=[^a-z0-9_\\x{7f}-\\x{ff}\\\\])",
						patterns: [
							{
								begin: "(?i)(?=\\\\?[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*\\\\)",
								end: "(?i)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?(?=[^a-z0-9_\\x{7f}-\\x{ff}\\\\])",
								endCaptures: {
									"1": {
										name: "entity.other.inherited-class.php"
									}
								},
								patterns: [
									{
										include: "#namespace"
									}
								]
							},
							{
								include: "#class-builtin"
							},
							{
								include: "#namespace"
							},
							{
								match: "(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",
								name: "entity.other.inherited-class.php"
							}
						]
					},
					{
						begin: "(?i)(implements)\\s+",
						beginCaptures: {
							"1": {
								name: "storage.modifier.implements.php"
							}
						},
						end: "(?i)(?=[;{])",
						patterns: [
							{
								include: "#comments"
							},
							{
								begin: "(?i)(?=[a-z0-9_\\x{7f}-\\x{ff}\\\\]+)",
								contentName: "meta.other.inherited-class.php",
								end: "(?i)(?:\\s*(?:,|(?=[^a-z0-9_\\x{7f}-\\x{ff}\\\\\\s]))\\s*)",
								patterns: [
									{
										begin: "(?i)(?=\\\\?[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*\\\\)",
										end: "(?i)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?(?=[^a-z0-9_\\x{7f}-\\x{ff}\\\\])",
										endCaptures: {
											"1": {
												name: "entity.other.inherited-class.php"
											}
										},
										patterns: [
											{
												include: "#namespace"
											}
										]
									},
									{
										include: "#class-builtin"
									},
									{
										include: "#namespace"
									},
									{
										match: "(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",
										name: "entity.other.inherited-class.php"
									}
								]
							}
						]
					},
					{
						begin: "{",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.class.begin.bracket.curly.php"
							}
						},
						end: "(?=}|\\?>)",
						contentName: "meta.class.body.php",
						patterns: [
							{
								include: "#language"
							}
						]
					}
				]
			},
			{
				include: "#switch_statement"
			},
			{
				match: "(?x)\n\\s*\n\\b(\n  break|case|continue|declare|default|die|do|\n  else(if)?|end(declare|for(each)?|if|switch|while)|exit|\n  for(each)?|if|return|switch|use|while|yield\n)\\b",
				captures: {
					"1": {
						name: "keyword.control.${1:/downcase}.php"
					}
				}
			},
			{
				begin: "(?i)\\b((?:require|include)(?:_once)?)\\s+",
				beginCaptures: {
					"1": {
						name: "keyword.control.import.include.php"
					}
				},
				end: "(?=\\s|;|$|\\?>)",
				name: "meta.include.php",
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				begin: "\\b(catch)\\s*(\\()",
				beginCaptures: {
					"1": {
						name: "keyword.control.exception.catch.php"
					},
					"2": {
						name: "punctuation.definition.parameters.begin.bracket.round.php"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.parameters.end.bracket.round.php"
					}
				},
				name: "meta.catch.php",
				patterns: [
					{
						include: "#namespace"
					},
					{
						match: "(?xi)\n([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)                 # Exception class\n((?:\\s*\\|\\s*[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)*) # Optional additional exception classes\n\\s*\n((\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)           # Variable",
						captures: {
							"1": {
								name: "support.class.exception.php"
							},
							"2": {
								patterns: [
									{
										match: "(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",
										name: "support.class.exception.php"
									},
									{
										match: "\\|",
										name: "punctuation.separator.delimiter.php"
									}
								]
							},
							"3": {
								name: "variable.other.php"
							},
							"4": {
								name: "punctuation.definition.variable.php"
							}
						}
					}
				]
			},
			{
				match: "\\b(catch|try|throw|exception|finally)\\b",
				name: "keyword.control.exception.php"
			},
			{
				begin: "(?i)\\b(function)\\s*(?=\\()",
				beginCaptures: {
					"1": {
						name: "storage.type.function.php"
					}
				},
				end: "(?={)",
				name: "meta.function.closure.php",
				patterns: [
					{
						begin: "\\(",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.parameters.begin.bracket.round.php"
							}
						},
						contentName: "meta.function.parameters.php",
						end: "\\)",
						endCaptures: {
							"0": {
								name: "punctuation.definition.parameters.end.bracket.round.php"
							}
						},
						patterns: [
							{
								include: "#function-parameters"
							}
						]
					},
					{
						begin: "(?i)(use)\\s*(\\()",
						beginCaptures: {
							"1": {
								name: "keyword.other.function.use.php"
							},
							"2": {
								name: "punctuation.definition.parameters.begin.bracket.round.php"
							}
						},
						end: "\\)",
						endCaptures: {
							"0": {
								name: "punctuation.definition.parameters.end.bracket.round.php"
							}
						},
						patterns: [
							{
								captures: {
									"1": {
										name: "variable.other.php"
									},
									"2": {
										name: "storage.modifier.reference.php"
									},
									"3": {
										name: "punctuation.definition.variable.php"
									}
								},
								match: "(?i)((&)?\\s*(\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\\s*(?=,|\\))",
								name: "meta.function.closure.use.php"
							}
						]
					}
				]
			},
			{
				begin: "(?x)\n((?:(?:final|abstract|public|private|protected|static)\\s+)*)\n(function)\\s+\n(?i:\n  (__(?:call|construct|debugInfo|destruct|get|set|isset|unset|tostring|\n        clone|set_state|sleep|wakeup|autoload|invoke|callStatic))\n  |([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*)\n)\n\\s*(\\()",
				beginCaptures: {
					"1": {
						patterns: [
							{
								match: "final|abstract|public|private|protected|static",
								name: "storage.modifier.php"
							}
						]
					},
					"2": {
						name: "storage.type.function.php"
					},
					"3": {
						name: "support.function.magic.php"
					},
					"4": {
						name: "entity.name.function.php"
					},
					"5": {
						name: "punctuation.definition.parameters.begin.bracket.round.php"
					}
				},
				contentName: "meta.function.parameters.php",
				end: "(\\))(?:\\s*(:)\\s*([a-zA-Z_\\x{7f}-\\x{ff}][a-zA-Z0-9_\\x{7f}-\\x{ff}]*))?",
				endCaptures: {
					"1": {
						name: "punctuation.definition.parameters.end.bracket.round.php"
					},
					"2": {
						name: "keyword.operator.return-value.php"
					},
					"3": {
						name: "storage.type.php"
					}
				},
				name: "meta.function.php",
				patterns: [
					{
						include: "#function-parameters"
					}
				]
			},
			{
				include: "#invoke-call"
			},
			{
				include: "#scope-resolution"
			},
			{
				include: "#variables"
			},
			{
				include: "#strings"
			},
			{
				captures: {
					"1": {
						name: "support.function.construct.php"
					},
					"2": {
						name: "punctuation.definition.array.begin.bracket.round.php"
					},
					"3": {
						name: "punctuation.definition.array.end.bracket.round.php"
					}
				},
				match: "(array)(\\()(\\))",
				name: "meta.array.empty.php"
			},
			{
				begin: "(array)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.construct.php"
					},
					"2": {
						name: "punctuation.definition.array.begin.bracket.round.php"
					}
				},
				end: "\\)|(?=\\?>)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.array.end.bracket.round.php"
					}
				},
				name: "meta.array.php",
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				match: "(?i)(\\()\\s*(array|real|double|float|int(?:eger)?|bool(?:ean)?|string|object|binary|unset)\\s*(\\))",
				captures: {
					"1": {
						name: "punctuation.definition.storage-type.begin.bracket.round.php"
					},
					"2": {
						name: "storage.type.php"
					},
					"3": {
						name: "punctuation.definition.storage-type.end.bracket.round.php"
					}
				}
			},
			{
				match: "(?i)\\b(array|real|double|float|int(eger)?|bool(ean)?|string|class|var|function|interface|trait|parent|self|object)\\b",
				name: "storage.type.php"
			},
			{
				match: "(?i)\\b(global|abstract|const|extends|implements|final|private|protected|public|static)\\b",
				name: "storage.modifier.php"
			},
			{
				include: "#object"
			},
			{
				match: ";",
				name: "punctuation.terminator.expression.php"
			},
			{
				match: ":",
				name: "punctuation.terminator.statement.php"
			},
			{
				include: "#heredoc"
			},
			{
				include: "#numbers"
			},
			{
				match: "(?i)\\bclone\\b",
				name: "keyword.other.clone.php"
			},
			{
				match: "\\.=?",
				name: "keyword.operator.string.php"
			},
			{
				match: "=>",
				name: "keyword.operator.key.php"
			},
			{
				captures: {
					"1": {
						name: "keyword.operator.assignment.php"
					},
					"2": {
						name: "storage.modifier.reference.php"
					},
					"3": {
						name: "storage.modifier.reference.php"
					}
				},
				match: "(?i)(\\=)(&)|(&)(?=[$a-z_])"
			},
			{
				match: "@",
				name: "keyword.operator.error-control.php"
			},
			{
				match: "===|==|!==|!=|<>",
				name: "keyword.operator.comparison.php"
			},
			{
				match: "=|\\+=|\\-=|\\*=|/=|%=|&=|\\|=|\\^=|<<=|>>=",
				name: "keyword.operator.assignment.php"
			},
			{
				match: "<=>|<=|>=|<|>",
				name: "keyword.operator.comparison.php"
			},
			{
				match: "\\-\\-|\\+\\+",
				name: "keyword.operator.increment-decrement.php"
			},
			{
				match: "\\-|\\+|\\*|/|%",
				name: "keyword.operator.arithmetic.php"
			},
			{
				match: "(?i)(!|&&|\\|\\|)|\\b(and|or|xor|as)\\b",
				name: "keyword.operator.logical.php"
			},
			{
				include: "#function-call"
			},
			{
				match: "<<|>>|~|\\^|&|\\|",
				name: "keyword.operator.bitwise.php"
			},
			{
				begin: "(?i)\\b(instanceof)\\s+(?=[\\\\$a-z_])",
				beginCaptures: {
					"1": {
						name: "keyword.operator.type.php"
					}
				},
				end: "(?=[^\\\\$a-z0-9_\\x{7f}-\\x{ff}])",
				patterns: [
					{
						include: "#class-name"
					},
					{
						include: "#variable-name"
					}
				]
			},
			{
				include: "#instantiation"
			},
			{
				captures: {
					"1": {
						name: "keyword.control.goto.php"
					},
					"2": {
						name: "support.other.php"
					}
				},
				match: "(?i)(goto)\\s+([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)"
			},
			{
				captures: {
					"1": {
						name: "entity.name.goto-label.php"
					}
				},
				match: "(?i)^\\s*([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\\s*:(?!:)"
			},
			{
				include: "#string-backtick"
			},
			{
				begin: "{",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.begin.bracket.curly.php"
					}
				},
				end: "}|(?=\\?>)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.end.bracket.curly.php"
					}
				},
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				begin: "\\[",
				beginCaptures: {
					"0": {
						name: "punctuation.section.array.begin.php"
					}
				},
				end: "\\]|(?=\\?>)",
				endCaptures: {
					"0": {
						name: "punctuation.section.array.end.php"
					}
				},
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				begin: "\\(",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.begin.bracket.round.php"
					}
				},
				end: "\\)|(?=\\?>)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.end.bracket.round.php"
					}
				},
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				include: "#constants"
			},
			{
				match: ",",
				name: "punctuation.separator.delimiter.php"
			}
		]
	},
	namespace: {
		begin: "(?i)(?:(namespace)|[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?(\\\\)(?=.*?[^a-z0-9_\\x{7f}-\\x{ff}\\\\])",
		beginCaptures: {
			"1": {
				name: "variable.language.namespace.php"
			},
			"2": {
				name: "punctuation.separator.inheritance.php"
			}
		},
		end: "(?i)(?=[a-z0-9_\\x{7f}-\\x{ff}]*[^a-z0-9_\\x{7f}-\\x{ff}\\\\])",
		name: "support.other.namespace.php",
		patterns: [
			{
				match: "\\\\",
				name: "punctuation.separator.inheritance.php"
			}
		]
	},
	numbers: {
		patterns: [
			{
				match: "0[xX][0-9a-fA-F]+",
				name: "constant.numeric.hex.php"
			},
			{
				match: "0[bB][01]+",
				name: "constant.numeric.binary.php"
			},
			{
				match: "0[0-7]+",
				name: "constant.numeric.octal.php"
			},
			{
				match: "(?x)\n(?:\n  [0-9]*(\\.)[0-9]+(?:[eE][+-]?[0-9]+)?|\n  [0-9]+(\\.)[0-9]*(?:[eE][+-]?[0-9]+)?|\n  [0-9]+[eE][+-]?[0-9]+\n)",
				name: "constant.numeric.decimal.php",
				captures: {
					"1": {
						name: "punctuation.separator.decimal.period.php"
					},
					"2": {
						name: "punctuation.separator.decimal.period.php"
					}
				}
			},
			{
				match: "0|[1-9][0-9]*",
				name: "constant.numeric.decimal.php"
			}
		]
	},
	object: {
		patterns: [
			{
				begin: "(->)(\\$?{)",
				beginCaptures: {
					"1": {
						name: "keyword.operator.class.php"
					},
					"2": {
						name: "punctuation.definition.variable.php"
					}
				},
				end: "}",
				endCaptures: {
					"0": {
						name: "punctuation.definition.variable.php"
					}
				},
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				begin: "(?i)(->)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\\s*(\\()",
				beginCaptures: {
					"1": {
						name: "keyword.operator.class.php"
					},
					"2": {
						name: "entity.name.function.php"
					},
					"3": {
						name: "punctuation.definition.arguments.begin.bracket.round.php"
					}
				},
				end: "\\)|(?=\\?>)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.arguments.end.bracket.round.php"
					}
				},
				name: "meta.method-call.php",
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				captures: {
					"1": {
						name: "keyword.operator.class.php"
					},
					"2": {
						name: "variable.other.property.php"
					},
					"3": {
						name: "punctuation.definition.variable.php"
					}
				},
				match: "(?i)(->)((\\$+)?[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?"
			}
		]
	},
	"parameter-default-types": {
		patterns: [
			{
				include: "#strings"
			},
			{
				include: "#numbers"
			},
			{
				include: "#string-backtick"
			},
			{
				include: "#variables"
			},
			{
				match: "=>",
				name: "keyword.operator.key.php"
			},
			{
				match: "=",
				name: "keyword.operator.assignment.php"
			},
			{
				match: "&(?=\\s*\\$)",
				name: "storage.modifier.reference.php"
			},
			{
				begin: "(array)\\s*(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.construct.php"
					},
					"2": {
						name: "punctuation.definition.array.begin.bracket.round.php"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.array.end.bracket.round.php"
					}
				},
				name: "meta.array.php",
				patterns: [
					{
						include: "#parameter-default-types"
					}
				]
			},
			{
				include: "#instantiation"
			},
			{
				begin: "(?xi)\n(?=[a-z0-9_\\x{7f}-\\x{ff}\\\\]+(::)\n  ([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?\n)",
				end: "(?i)(::)([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)?",
				endCaptures: {
					"1": {
						name: "keyword.operator.class.php"
					},
					"2": {
						name: "constant.other.class.php"
					}
				},
				patterns: [
					{
						include: "#class-name"
					}
				]
			},
			{
				include: "#constants"
			}
		]
	},
	php_doc: {
		patterns: [
			{
				match: "^(?!\\s*\\*).*?(?:(?=\\*\\/)|$\\n?)",
				name: "invalid.illegal.missing-asterisk.phpdoc.php"
			},
			{
				captures: {
					"1": {
						name: "keyword.other.phpdoc.php"
					},
					"3": {
						name: "storage.modifier.php"
					},
					"4": {
						name: "invalid.illegal.wrong-access-type.phpdoc.php"
					}
				},
				match: "^\\s*\\*\\s*(@access)\\s+((public|private|protected)|(.+))\\s*$"
			},
			{
				captures: {
					"1": {
						name: "keyword.other.phpdoc.php"
					},
					"2": {
						name: "markup.underline.link.php"
					}
				},
				match: "(@xlink)\\s+(.+)\\s*$"
			},
			{
				begin: "(@(?:global|param|property(-(read|write))?|return|throws|var))\\s+(?=[A-Za-z_\\x{7f}-\\x{ff}\\\\]|\\()",
				beginCaptures: {
					"1": {
						name: "keyword.other.phpdoc.php"
					}
				},
				end: "(?=\\s|\\*/)",
				contentName: "meta.other.type.phpdoc.php",
				patterns: [
					{
						include: "#php_doc_types_array_multiple"
					},
					{
						include: "#php_doc_types_array_single"
					},
					{
						include: "#php_doc_types"
					}
				]
			},
			{
				match: "(?x)\n@\n(\n  api|abstract|author|category|copyright|example|global|inherit[Dd]oc|internal|\n  license|link|method|property(-(read|write))?|package|param|return|see|since|source|\n  static|subpackage|throws|todo|var|version|uses|deprecated|final|ignore\n)\\b",
				name: "keyword.other.phpdoc.php"
			},
			{
				captures: {
					"1": {
						name: "keyword.other.phpdoc.php"
					}
				},
				match: "{(@(link|inherit[Dd]oc)).+?}",
				name: "meta.tag.inline.phpdoc.php"
			}
		]
	},
	php_doc_types: {
		match: "(?i)[a-z_\\x{7f}-\\x{ff}\\\\][a-z0-9_\\x{7f}-\\x{ff}\\\\]*(\\|[a-z_\\x{7f}-\\x{ff}\\\\][a-z0-9_\\x{7f}-\\x{ff}\\\\]*)*",
		captures: {
			"0": {
				patterns: [
					{
						match: "(?x)\\b\n(string|integer|int|boolean|bool|float|double|object|mixed\n|array|resource|void|null|callback|false|true|self)\\b",
						name: "keyword.other.type.php"
					},
					{
						include: "#class-name"
					},
					{
						match: "\\|",
						name: "punctuation.separator.delimiter.php"
					}
				]
			}
		}
	},
	php_doc_types_array_multiple: {
		begin: "\\(",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.type.begin.bracket.round.phpdoc.php"
			}
		},
		end: "(\\))(\\[\\])|(?=\\*/)",
		endCaptures: {
			"1": {
				name: "punctuation.definition.type.end.bracket.round.phpdoc.php"
			},
			"2": {
				name: "keyword.other.array.phpdoc.php"
			}
		},
		patterns: [
			{
				include: "#php_doc_types_array_multiple"
			},
			{
				include: "#php_doc_types_array_single"
			},
			{
				include: "#php_doc_types"
			},
			{
				match: "\\|",
				name: "punctuation.separator.delimiter.php"
			}
		]
	},
	php_doc_types_array_single: {
		match: "(?i)([a-z_\\x{7f}-\\x{ff}\\\\][a-z0-9_\\x{7f}-\\x{ff}\\\\]*)(\\[\\])",
		captures: {
			"1": {
				patterns: [
					{
						include: "#php_doc_types"
					}
				]
			},
			"2": {
				name: "keyword.other.array.phpdoc.php"
			}
		}
	},
	"regex-double-quoted": {
		begin: "\"/(?=(\\\\.|[^\"/])++/[imsxeADSUXu]*\")",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.php"
			}
		},
		end: "(/)([imsxeADSUXu]*)(\")",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.php"
			}
		},
		name: "string.regexp.double-quoted.php",
		patterns: [
			{
				match: "(\\\\){1,2}[.$^\\[\\]{}]",
				name: "constant.character.escape.regex.php"
			},
			{
				include: "#interpolation"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.arbitrary-repetition.php"
					},
					"3": {
						name: "punctuation.definition.arbitrary-repetition.php"
					}
				},
				match: "({)\\d+(,\\d+)?(})",
				name: "string.regexp.arbitrary-repetition.php"
			},
			{
				begin: "\\[(?:\\^?\\])?",
				captures: {
					"0": {
						name: "punctuation.definition.character-class.php"
					}
				},
				end: "\\]",
				name: "string.regexp.character-class.php",
				patterns: [
					{
						include: "#interpolation"
					}
				]
			},
			{
				match: "[$^+*]",
				name: "keyword.operator.regexp.php"
			}
		]
	},
	"regex-single-quoted": {
		begin: "'/(?=(\\\\(?:\\\\(?:\\\\[\\\\']?|[^'])|.)|[^'/])++/[imsxeADSUXu]*')",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.php"
			}
		},
		end: "(/)([imsxeADSUXu]*)(')",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.php"
			}
		},
		name: "string.regexp.single-quoted.php",
		patterns: [
			{
				include: "#single_quote_regex_escape"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.arbitrary-repetition.php"
					},
					"3": {
						name: "punctuation.definition.arbitrary-repetition.php"
					}
				},
				match: "({)\\d+(,\\d+)?(})",
				name: "string.regexp.arbitrary-repetition.php"
			},
			{
				begin: "\\[(?:\\^?\\])?",
				captures: {
					"0": {
						name: "punctuation.definition.character-class.php"
					}
				},
				end: "\\]",
				name: "string.regexp.character-class.php"
			},
			{
				match: "[$^+*]",
				name: "keyword.operator.regexp.php"
			}
		]
	},
	"scope-resolution": {
		patterns: [
			{
				match: "(?i)\\b([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)(?=\\s*::)",
				captures: {
					"1": {
						patterns: [
							{
								match: "\\b(self|static|parent)\\b",
								name: "storage.type.php"
							},
							{
								match: "\\w+",
								name: "entity.name.class.php"
							},
							{
								include: "#class-name"
							},
							{
								include: "#variable-name"
							}
						]
					}
				}
			},
			{
				begin: "(?i)(::)\\s*([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)\\s*(\\()",
				beginCaptures: {
					"1": {
						name: "keyword.operator.class.php"
					},
					"2": {
						name: "entity.name.function.php"
					},
					"3": {
						name: "punctuation.definition.arguments.begin.bracket.round.php"
					}
				},
				end: "\\)|(?=\\?>)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.arguments.end.bracket.round.php"
					}
				},
				name: "meta.method-call.static.php",
				patterns: [
					{
						include: "#language"
					}
				]
			},
			{
				match: "(?i)(::)\\s*(class)\\b",
				captures: {
					"1": {
						name: "keyword.operator.class.php"
					},
					"2": {
						name: "keyword.other.class.php"
					}
				}
			},
			{
				match: "(?xi)\n(::)\\s*\n(?:\n  ((\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*) # Variable\n  |\n  ([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)       # Constant\n)?",
				captures: {
					"1": {
						name: "keyword.operator.class.php"
					},
					"2": {
						name: "variable.other.class.php"
					},
					"3": {
						name: "punctuation.definition.variable.php"
					},
					"4": {
						name: "constant.other.class.php"
					}
				}
			}
		]
	},
	single_quote_regex_escape: {
		match: "\\\\(?:\\\\(?:\\\\[\\\\']?|[^'])|.)",
		name: "constant.character.escape.php"
	},
	"sql-string-double-quoted": {
		begin: "\"\\s*(?=(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER|AND)\\b)",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.php"
			}
		},
		contentName: "source.sql.embedded.php",
		end: "\"",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.php"
			}
		},
		name: "string.quoted.double.sql.php",
		patterns: [
			{
				match: "(#)(\\\\\"|[^\"])*(?=\"|$)",
				name: "comment.line.number-sign.sql",
				captures: {
					"1": {
						name: "punctuation.definition.comment.sql"
					}
				}
			},
			{
				match: "(--)(\\\\\"|[^\"])*(?=\"|$)",
				name: "comment.line.double-dash.sql",
				captures: {
					"1": {
						name: "punctuation.definition.comment.sql"
					}
				}
			},
			{
				match: "\\\\[\\\\\"`']",
				name: "constant.character.escape.php"
			},
			{
				match: "'(?=((\\\\')|[^'\"])*(\"|$))",
				name: "string.quoted.single.unclosed.sql"
			},
			{
				match: "`(?=((\\\\`)|[^`\"])*(\"|$))",
				name: "string.quoted.other.backtick.unclosed.sql"
			},
			{
				begin: "'",
				end: "'",
				name: "string.quoted.single.sql",
				patterns: [
					{
						include: "#interpolation"
					}
				]
			},
			{
				begin: "`",
				end: "`",
				name: "string.quoted.other.backtick.sql",
				patterns: [
					{
						include: "#interpolation"
					}
				]
			},
			{
				include: "#interpolation"
			},
			{
				include: "source.sql"
			}
		]
	},
	"sql-string-single-quoted": {
		begin: "'\\s*(?=(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER|AND)\\b)",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.php"
			}
		},
		contentName: "source.sql.embedded.php",
		end: "'",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.php"
			}
		},
		name: "string.quoted.single.sql.php",
		patterns: [
			{
				match: "(#)(\\\\'|[^'])*(?='|$)",
				name: "comment.line.number-sign.sql",
				captures: {
					"1": {
						name: "punctuation.definition.comment.sql"
					}
				}
			},
			{
				match: "(--)(\\\\'|[^'])*(?='|$)",
				name: "comment.line.double-dash.sql",
				captures: {
					"1": {
						name: "punctuation.definition.comment.sql"
					}
				}
			},
			{
				match: "\\\\[\\\\'`\"]",
				name: "constant.character.escape.php"
			},
			{
				match: "`(?=((\\\\`)|[^`'])*('|$))",
				name: "string.quoted.other.backtick.unclosed.sql"
			},
			{
				match: "\"(?=((\\\\\")|[^\"'])*('|$))",
				name: "string.quoted.double.unclosed.sql"
			},
			{
				include: "source.sql"
			}
		]
	},
	"string-backtick": {
		begin: "`",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.php"
			}
		},
		end: "`",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.php"
			}
		},
		name: "string.interpolated.php",
		patterns: [
			{
				match: "\\\\.",
				name: "constant.character.escape.php"
			},
			{
				include: "#interpolation"
			}
		]
	},
	"string-double-quoted": {
		begin: "\"",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.php"
			}
		},
		end: "\"",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.php"
			}
		},
		name: "string.quoted.double.php",
		patterns: [
			{
				include: "#interpolation"
			}
		]
	},
	"string-single-quoted": {
		begin: "'",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.string.begin.php"
			}
		},
		end: "'",
		endCaptures: {
			"0": {
				name: "punctuation.definition.string.end.php"
			}
		},
		name: "string.quoted.single.php",
		patterns: [
			{
				match: "\\\\[\\\\']",
				name: "constant.character.escape.php"
			}
		]
	},
	strings: {
		patterns: [
			{
				include: "#regex-double-quoted"
			},
			{
				include: "#sql-string-double-quoted"
			},
			{
				include: "#string-double-quoted"
			},
			{
				include: "#regex-single-quoted"
			},
			{
				include: "#sql-string-single-quoted"
			},
			{
				include: "#string-single-quoted"
			}
		]
	},
	support: {
		patterns: [
			{
				match: "(?xi)\n\\b\napc_(\n  store|sma_info|compile_file|clear_cache|cas|cache_info|inc|dec|define_constants|delete(_file)?|\n  exists|fetch|load_constants|add|bin_(dump|load)(file)?\n)\\b",
				name: "support.function.apc.php"
			},
			{
				match: "(?xi)\\b\n(\n  shuffle|sizeof|sort|next|nat(case)?sort|count|compact|current|in_array|usort|uksort|uasort|\n  pos|prev|end|each|extract|ksort|key(_exists)?|krsort|list|asort|arsort|rsort|reset|range|\n  array(_(shift|sum|splice|search|slice|chunk|change_key_case|count_values|column|combine|\n          (diff|intersect)(_(u)?(key|assoc))?|u(diff|intersect)(_(u)?assoc)?|unshift|unique|\n          pop|push|pad|product|values|keys|key_exists|filter|fill(_keys)?|flip|walk(_recursive)?|\n          reduce|replace(_recursive)?|reverse|rand|multisort|merge(_recursive)?|map)?)\n)\\b",
				name: "support.function.array.php"
			},
			{
				match: "(?xi)\\b\n(\n  show_source|sys_getloadavg|sleep|highlight_(file|string)|constant|connection_(aborted|status)|\n  time_(nanosleep|sleep_until)|ignore_user_abort|die|define(d)?|usleep|uniqid|unpack|__halt_compiler|\n  php_(check_syntax|strip_whitespace)|pack|eval|exit|get_browser\n)\\b",
				name: "support.function.basic_functions.php"
			},
			{
				match: "(?i)\\bbc(scale|sub|sqrt|comp|div|pow(mod)?|add|mod|mul)\\b",
				name: "support.function.bcmath.php"
			},
			{
				match: "(?i)\\bblenc_encrypt\\b",
				name: "support.function.blenc.php"
			},
			{
				match: "(?i)\\bbz(compress|close|open|decompress|errstr|errno|error|flush|write|read)\\b",
				name: "support.function.bz2.php"
			},
			{
				match: "(?xi)\\b\n(\n  (French|Gregorian|Jewish|Julian)ToJD|cal_(to_jd|info|days_in_month|from_jd)|unixtojd|\n  jdto(unix|jewish)|easter_(date|days)|JD(MonthName|To(Gregorian|Julian|French)|DayOfWeek)\n)\\b",
				name: "support.function.calendar.php"
			},
			{
				match: "(?xi)\\b\n(\n  class_alias|all_user_method(_array)?|is_(a|subclass_of)|__autoload|(class|interface|method|property|trait)_exists|\n  get_(class(_(vars|methods))?|(called|parent)_class|object_vars|declared_(classes|interfaces|traits))\n)\\b",
				name: "support.function.classobj.php"
			},
			{
				match: "(?xi)\\b\n(\n  com_(create_guid|print_typeinfo|event_sink|load_typelib|get_active_object|message_pump)|\n  variant_(sub|set(_type)?|not|neg|cast|cat|cmp|int|idiv|imp|or|div|date_(from|to)_timestamp|\n           pow|eqv|fix|and|add|abs|round|get_type|xor|mod|mul)\n)\\b",
				name: "support.function.com.php"
			},
			{
				begin: "(?i)\\b(isset|unset|eval|empty|list)\\b",
				name: "support.function.construct.php"
			},
			{
				match: "(?i)\\b(print|echo)\\b",
				name: "support.function.construct.output.php"
			},
			{
				match: "(?i)\\bctype_(space|cntrl|digit|upper|punct|print|lower|alnum|alpha|graph|xdigit)\\b",
				name: "support.function.ctype.php"
			},
			{
				match: "(?xi)\\b\ncurl_(\n  share_(close|init|setopt)|strerror|setopt(_array)?|copy_handle|close|init|unescape|pause|escape|\n  errno|error|exec|version|file_create|reset|getinfo|\n  multi_(strerror|setopt|select|close|init|info_read|(add|remove)_handle|getcontent|exec)\n)\\b",
				name: "support.function.curl.php"
			},
			{
				match: "(?xi)\\b\n(\n  strtotime|str[fp]time|checkdate|time|timezone_name_(from_abbr|get)|idate|\n  timezone_((location|offset|transitions|version)_get|(abbreviations|identifiers)_list|open)|\n  date(_(sun(rise|set)|sun_info|sub|create(_(immutable_)?from_format)?|timestamp_(get|set)|timezone_(get|set)|time_set|\n         isodate_set|interval_(create_from_date_string|format)|offset_get|diff|default_timezone_(get|set)|date_set|\n         parse(_from_format)?|format|add|get_last_errors|modify))?|\n  localtime|get(date|timeofday)|gm(strftime|date|mktime)|microtime|mktime\n)\\b",
				name: "support.function.datetime.php"
			},
			{
				match: "(?i)\\bdba_(sync|handlers|nextkey|close|insert|optimize|open|delete|popen|exists|key_split|firstkey|fetch|list|replace)\\b",
				name: "support.function.dba.php"
			},
			{
				match: "(?i)\\bdbx_(sort|connect|compare|close|escape_string|error|query|fetch_row)\\b",
				name: "support.function.dbx.php"
			},
			{
				match: "(?i)\\b(scandir|chdir|chroot|closedir|opendir|dir|rewinddir|readdir|getcwd)\\b",
				name: "support.function.dir.php"
			},
			{
				match: "(?xi)\\b\neio_(\n  sync(fs)?|sync_file_range|symlink|stat(vfs)?|sendfile|set_min_parallel|set_max_(idle|poll_(reqs|time)|parallel)|\n  seek|n(threads|op|pending|reqs|ready)|chown|chmod|custom|close|cancel|truncate|init|open|dup2|unlink|utime|poll|\n  event_loop|f(sync|stat(vfs)?|chown|chmod|truncate|datasync|utime|allocate)|write|lstat|link|rename|realpath|\n  read(ahead|dir|link)?|rmdir|get_(event_stream|last_error)|grp(_(add|cancel|limit))?|mknod|mkdir|busy\n)\\b",
				name: "support.function.eio.php"
			},
			{
				match: "(?xi)\\b\nenchant_(\n  dict_(store_replacement|suggest|check|is_in_session|describe|quick_check|add_to_(personal|session)|get_error)|\n  broker_(set_ordering|init|dict_exists|describe|free(_dict)?|list_dicts|request_(pwl_)?dict|get_error)\n)\\b",
				name: "support.function.enchant.php"
			},
			{
				match: "(?i)\\bsplit(i)?|sql_regcase|ereg(i)?(_replace)?\\b",
				name: "support.function.ereg.php"
			},
			{
				match: "(?i)\\b((restore|set)_(error_handler|exception_handler)|trigger_error|debug_(print_)?backtrace|user_error|error_(log|reporting|get_last))\\b",
				name: "support.function.errorfunc.php"
			},
			{
				match: "(?i)\\bshell_exec|system|passthru|proc_(nice|close|terminate|open|get_status)|escapeshell(arg|cmd)|exec\\b",
				name: "support.function.exec.php"
			},
			{
				match: "(?i)\\b(exif_(thumbnail|tagname|imagetype|read_data)|read_exif_data)\\b",
				name: "support.function.exif.php"
			},
			{
				match: "(?xi)\\b\nfann_(\n  (duplicate|length|merge|shuffle|subset)_train_data|scale_(train(_data)?|(input|output)(_train_data)?)|\n  set_(scaling_params|sarprop_(step_error_(shift|threshold_factor)|temperature|weight_decay_shift)|\n       cascade_(num_candidate_groups|candidate_(change_fraction|limit|stagnation_epochs)|\n                output_(change_fraction|stagnation_epochs)|weight_multiplier|activation_(functions|steepnesses)|\n                (max|min)_(cand|out)_epochs)|\n       callback|training_algorithm|train_(error|stop)_function|(input|output)_scaling_params|error_log|\n       quickprop_(decay|mu)|weight(_array)?|learning_(momentum|rate)|bit_fail_limit|\n       activation_(function|steepness)(_(hidden|layer|output))?|\n       rprop_((decrease|increase)_factor|delta_(max|min|zero)))|\n  save(_train)?|num_(input|output)_train_data|copy|clear_scaling_params|cascadetrain_on_(file|data)|\n  create_((sparse|shortcut|standard)(_array)?|train(_from_callback)?|from_file)|\n  test(_data)?|train(_(on_(file|data)|epoch))?|init_weights|descale_(input|output|train)|destroy(_train)?|\n  print_error|run|reset_(MSE|err(no|str))|read_train_from_file|randomize_weights|\n  get_(sarprop_(step_error_(shift|threshold_factor)|temperature|weight_decay_shift)|num_(input|output|layers)|\n       network_type|MSE|connection_(array|rate)|bias_array|bit_fail(_limit)?|\n       cascade_(num_(candidates|candidate_groups)|(candidate|output)_(change_fraction|limit|stagnation_epochs)|\n                weight_multiplier|activation_(functions|steepnesses)(_count)?|(max|min)_(cand|out)_epochs)|\n       total_(connections|neurons)|training_algorithm|train_(error|stop)_function|err(no|str)|\n       quickprop_(decay|mu)|learning_(momentum|rate)|layer_array|activation_(function|steepness)|\n       rprop_((decrease|increase)_factor|delta_(max|min|zero)))\n)\\b",
				name: "support.function.fann.php"
			},
			{
				match: "(?xi)\\b\n(\n  symlink|stat|set_file_buffer|chown|chgrp|chmod|copy|clearstatcache|touch|tempnam|tmpfile|\n  is_(dir|(uploaded_)?file|executable|link|readable|writ(e)?able)|disk_(free|total)_space|diskfreespace|\n  dirname|delete|unlink|umask|pclose|popen|pathinfo|parse_ini_(file|string)|fscanf|fstat|fseek|fnmatch|\n  fclose|ftell|ftruncate|file(size|[acm]time|type|inode|owner|perms|group)?|file_(exists|(get|put)_contents)|\n  f(open|puts|putcsv|passthru|eof|flush|write|lock|read|gets(s)?|getc(sv)?)|lstat|lchown|lchgrp|link(info)?|\n  rename|rewind|read(file|link)|realpath(_cache_(get|size))?|rmdir|glob|move_uploaded_file|mkdir|basename\n)\\b",
				name: "support.function.file.php"
			},
			{
				match: "(?i)\\b(finfo_(set_flags|close|open|file|buffer)|mime_content_type)\\b",
				name: "support.function.fileinfo.php"
			},
			{
				match: "(?i)\\bfilter_(has_var|input(_array)?|id|var(_array)?|list)\\b",
				name: "support.function.filter.php"
			},
			{
				match: "(?i)\\bfastcgi_finish_request\\b",
				name: "support.function.fpm.php"
			},
			{
				match: "(?i)\\b(call_user_(func|method)(_array)?|create_function|unregister_tick_function|forward_static_call(_array)?|function_exists|func_(num_args|get_arg(s)?)|register_(shutdown|tick)_function|get_defined_functions)\\b",
				name: "support.function.funchand.php"
			},
			{
				match: "(?i)\\b((n)?gettext|textdomain|d((n)?gettext|c(n)?gettext)|bind(textdomain|_textdomain_codeset))\\b",
				name: "support.function.gettext.php"
			},
			{
				match: "(?xi)\\b\ngmp_(\n  scan[01]|strval|sign|sub|setbit|sqrt(rem)?|hamdist|neg|nextprime|com|clrbit|cmp|testbit|\n  intval|init|invert|import|or|div(exact)?|div_(q|qr|r)|jacobi|popcount|pow(m)?|perfect_square|\n  prob_prime|export|fact|legendre|and|add|abs|root(rem)?|random(_(bits|range))?|gcd(ext)?|xor|mod|mul\n)\\b",
				name: "support.function.gmp.php"
			},
			{
				match: "(?i)\\bhash(_(hmac(_file)?|copy|init|update(_(file|stream))?|pbkdf2|equals|file|final|algos))?\\b",
				name: "support.function.hash.php"
			},
			{
				match: "(?xi)\\b\n(\n  http_(support|send_(status|stream|content_(disposition|type)|data|file|last_modified)|head|\n        negotiate_(charset|content_type|language)|chunked_decode|cache_(etag|last_modified)|throttle|\n        inflate|deflate|date|post_(data|fields)|put_(data|file|stream)|persistent_handles_(count|clean|ident)|\n        parse_(cookie|headers|message|params)|redirect|request(_(method_(exists|name|(un)?register)|body_encode))?|\n        get(_request_(headers|body(_stream)?))?|match_(etag|modified|request_header)|build_(cookie|str|url))|\n  ob_(etag|deflate|inflate)handler\n)\\b",
				name: "support.function.http.php"
			},
			{
				match: "(?i)\\b(iconv(_(str(pos|len|rpos)|substr|(get|set)_encoding|mime_(decode(_headers)?|encode)))?|ob_iconv_handler)\\b",
				name: "support.function.iconv.php"
			},
			{
				match: "(?i)\\biis_((start|stop)_(service|server)|set_(script_map|server_rights|dir_security|app_settings)|(add|remove)_server|get_(script_map|service_state|server_(rights|by_(comment|path))|dir_security))\\b",
				name: "support.function.iisfunc.php"
			},
			{
				match: "(?xi)\\b\n(\n  iptc(embed|parse)|(jpeg|png)2wbmp|gd_info|getimagesize(fromstring)?|\n  image(s[xy]|scale|(char|string)(up)?|set(style|thickness|tile|interpolation|pixel|brush)|savealpha|\n        convolution|copy(resampled|resized|merge(gray)?)?|colors(forindex|total)|\n        color(set|closest(alpha|hwb)?|transparent|deallocate|(allocate|exact|resolve)(alpha)?|at|match)|\n        crop(auto)?|create(truecolor|from(string|jpeg|png|wbmp|webp|gif|gd(2(part)?)?|xpm|xbm))?|\n        types|ttf(bbox|text)|truecolortopalette|istruecolor|interlace|2wbmp|destroy|dashedline|jpeg|\n        _type_to_(extension|mime_type)|ps(slantfont|text|(encode|extend|free|load)font|bbox)|png|polygon|\n        palette(copy|totruecolor)|ellipse|ft(text|bbox)|filter|fill|filltoborder|\n        filled(arc|ellipse|polygon|rectangle)|font(height|width)|flip|webp|wbmp|line|loadfont|layereffect|\n        antialias|affine(matrix(concat|get))?|alphablending|arc|rotate|rectangle|gif|gd(2)?|gammacorrect|\n        grab(screen|({}))|xbm)\n)\\b",
				name: "support.function.image.php"
			},
			{
				match: "(?xi)\\b\n(\n  sys_get_temp_dir|set_(time_limit|include_path|magic_quotes_runtime)|cli_(get|set)_process_title|\n  ini_(alter|get(_all)?|restore|set)|zend_(thread_id|version|logo_guid)|dl|php(credits|info|version)|\n  php_(sapi_name|ini_(scanned_files|loaded_file)|uname|logo_guid)|putenv|extension_loaded|version_compare|\n  assert(_options)?|restore_include_path|gc_(collect_cycles|disable|enable(d)?)|getopt|\n  get_(cfg_var|current_user|defined_constants|extension_funcs|include_path|included_files|loaded_extensions|\n       magic_quotes_(gpc|runtime)|required_files|resources)|\n  get(env|lastmod|rusage|my(inode|[gup]id))|\n  memory_get_(peak_)?usage|main|magic_quotes_runtime\n)\\b",
				name: "support.function.info.php"
			},
			{
				match: "(?xi)\\b\nibase_(\n  set_event_handler|service_(attach|detach)|server_info|num_(fields|params)|name_result|connect|\n  commit(_ret)?|close|trans|delete_user|drop_db|db_info|pconnect|param_info|prepare|err(code|msg)|\n  execute|query|field_info|fetch_(assoc|object|row)|free_(event_handler|query|result)|wait_event|\n  add_user|affected_rows|rollback(_ret)?|restore|gen_id|modify_user|maintain_db|backup|\n  blob_(cancel|close|create|import|info|open|echo|add|get)\n)\\b",
				name: "support.function.interbase.php"
			},
			{
				match: "(?xi)\\b\n(\n  normalizer_(normalize|is_normalized)|idn_to_(unicode|utf8|ascii)|\n  numfmt_(set_(symbol|(text_)?attribute|pattern)|create|(parse|format)(_currency)?|\n          get_(symbol|(text_)?attribute|pattern|error_(code|message)|locale))|\n  collator_(sort(_with_sort_keys)?|set_(attribute|strength)|compare|create|asort|\n            get_(strength|sort_key|error_(code|message)|locale|attribute))|\n  transliterator_(create(_(inverse|from_rules))?|transliterate|list_ids|get_error_(code|message))|\n  intl(cal|tz)_get_error_(code|message)|intl_(is_failure|error_name|get_error_(code|message))|\n  datefmt_(set_(calendar|lenient|pattern|timezone(_id)?)|create|is_lenient|parse|format(_object)?|localtime|\n           get_(calendar(_object)?|time(type|zone(_id)?)|datetype|pattern|error_(code|message)|locale))|\n  locale_(set_default|compose|canonicalize|parse|filter_matches|lookup|accept_from_http|\n          get_(script|display_(script|name|variant|language|region)|default|primary_language|keywords|all_variants|region))|\n  resourcebundle_(create|count|locales|get(_(error_(code|message)))?)|\n  grapheme_(str(i?str|r?i?pos|len)|substr|extract)|\n  msgfmt_(set_pattern|create|(format|parse)(_message)?|get_(pattern|error_(code|message)|locale))\n)\\b",
				name: "support.function.intl.php"
			},
			{
				match: "(?i)\\bjson_(decode|encode|last_error(_msg)?)\\b",
				name: "support.function.json.php"
			},
			{
				match: "(?xi)\\b\nldap_(\n  start|tls|sort|search|sasl_bind|set_(option|rebind_proc)|(first|next)_(attribute|entry|reference)|\n  connect|control_paged_result(_response)?|count_entries|compare|close|t61_to_8859|8859_to_t61|\n  dn2ufn|delete|unbind|parse_(reference|result)|escape|errno|err2str|error|explode_dn|bind|\n  free_result|list|add|rename|read|get_(option|dn|entries|values(_len)?|attributes)|modify(_batch)?|\n  mod_(add|del|replace)\n)\\b",
				name: "support.function.ldap.php"
			},
			{
				match: "(?i)\\blibxml_(set_(streams_context|external_entity_loader)|clear_errors|disable_entity_loader|use_internal_errors|get_(errors|last_error))\\b",
				name: "support.function.libxml.php"
			},
			{
				match: "(?i)\\b(ezmlm_hash|mail)\\b",
				name: "support.function.mail.php"
			},
			{
				match: "(?xi)\\b\n(\n  (a)?(cos|sin|tan)(h)?|sqrt|srand|hypot|hexdec|ceil|is_(nan|(in)?finite)|octdec|dec(hex|oct|bin)|deg2rad|\n  pi|pow|exp(m1)?|floor|fmod|lcg_value|log(1(p|0))?|atan2|abs|round|rand|rad2deg|getrandmax|\n  mt_(srand|rand|getrandmax)|max|min|bindec|base_convert\n)\\b",
				name: "support.function.math.php"
			},
			{
				match: "(?xi)\\b\nmb_(\n  str(cut|str|to(lower|upper)|istr|ipos|imwidth|pos|width|len|rchr|richr|ripos|rpos)|\n  substitute_character|substr(_count)?|split|send_mail|http_(input|output)|check_encoding|\n  convert_(case|encoding|kana|variables)|internal_encoding|output_handler|decode_(numericentity|mimeheader)|\n  detect_(encoding|order)|parse_str|preferred_mime_name|encoding_aliases|encode_(numericentity|mimeheader)|\n  ereg(i(_replace)?)?|ereg_(search(_(get(pos|regs)|init|regs|(set)?pos))?|replace(_callback)?|match)|\n  list_encodings|language|regex_(set_options|encoding)|get_info\n)\\b",
				name: "support.function.mbstring.php"
			},
			{
				match: "(?xi)\\b\n(\n  mcrypt_(\n    cfb|create_iv|cbc|ofb|decrypt|encrypt|ecb|list_(algorithms|modes)|generic(_((de)?init|end))?|\n    enc_(self_test|is_block_(algorithm|algorithm_mode|mode)|\n    get_(supported_key_sizes|(block|iv|key)_size|(algorithms|modes)_name))|\n    get_(cipher_name|(block|iv|key)_size)|\n    module_(close|self_test|is_block_(algorithm|algorithm_mode|mode)|open|\n            get_(supported_key_sizes|algo_(block|key)_size)))|\n  mdecrypt_generic\n)\\b",
				name: "support.function.mcrypt.php"
			},
			{
				match: "(?i)\\bmemcache_debug\\b",
				name: "support.function.memcache.php"
			},
			{
				match: "(?i)\\bmhash(_(count|keygen_s2k|get_(hash_name|block_size)))?\\b",
				name: "support.function.mhash.php"
			},
			{
				match: "(?i)\\b(log_(cmd_(insert|delete|update)|killcursor|write_batch|reply|getmore)|bson_(decode|encode))\\b",
				name: "support.function.mongo.php"
			},
			{
				match: "(?xi)\\b\nmysql_(\n  stat|set_charset|select_db|num_(fields|rows)|connect|client_encoding|close|create_db|escape_string|\n  thread_id|tablename|insert_id|info|data_seek|drop_db|db_(name|query)|unbuffered_query|pconnect|ping|\n  errno|error|query|field_(seek|name|type|table|flags|len)|fetch_(object|field|lengths|assoc|array|row)|\n  free_result|list_(tables|dbs|processes|fields)|affected_rows|result|real_escape_string|\n  get_(client|host|proto|server)_info\n)\\b",
				name: "support.function.mysql.php"
			},
			{
				match: "(?xi)\\b\nmysqli_(\n  ssl_set|store_result|stat|send_(query|long_data)|set_(charset|opt|local_infile_(default|handler))|\n  stmt_(store_result|send_long_data|next_result|close|init|data_seek|prepare|execute|fetch|free_result|\n        attr_(get|set)|result_metadata|reset|get_(result|warnings)|more_results|bind_(param|result))|\n  select_db|slave_query|savepoint|next_result|change_user|character_set_name|connect|commit|\n  client_encoding|close|thread_safe|init|options|(enable|disable)_(reads_from_master|rpl_parse)|\n  dump_debug_info|debug|data_seek|use_result|ping|poll|param_count|prepare|escape_string|execute|\n  embedded_server_(start|end)|kill|query|field_seek|free_result|autocommit|rollback|report|refresh|\n  fetch(_(object|fields|field(_direct)?|assoc|all|array|row))?|rpl_(parse_enabled|probe|query_type)|\n  release_savepoint|reap_async_query|real_(connect|escape_string|query)|more_results|multi_query|\n  get_(charset|connection_stats|client_(stats|info|version)|cache_stats|warnings|links_stats|metadata)|\n  master_query|bind_(param|result)|begin_transaction\n)\\b",
				name: "support.function.mysqli.php"
			},
			{
				match: "(?i)\\bmysqlnd_memcache_(set|get_config)\\b",
				name: "support.function.mysqlnd-memcache.php"
			},
			{
				match: "(?i)\\bmysqlnd_ms_(set_(user_pick_server|qos)|dump_servers|query_is_select|fabric_select_(shard|global)|get_(stats|last_(used_connection|gtid))|xa_(commit|rollback|gc|begin)|match_wild)\\b",
				name: "support.function.mysqlnd-ms.php"
			},
			{
				match: "(?i)\\bmysqlnd_qc_(set_(storage_handler|cache_condition|is_select|user_handlers)|clear_cache|get_(normalized_query_trace_log|core_stats|cache_info|query_trace_log|available_handlers))\\b",
				name: "support.function.mysqlnd-qc.php"
			},
			{
				match: "(?i)\\bmysqlnd_uh_(set_(statement|connection)_proxy|convert_to_mysqlnd)\\b",
				name: "support.function.mysqlnd-uh.php"
			},
			{
				match: "(?xi)\\b\n(\n  syslog|socket_(set_(blocking|timeout)|get_status)|set(raw)?cookie|http_response_code|openlog|\n  headers_(list|sent)|header(_(register_callback|remove))?|checkdnsrr|closelog|inet_(ntop|pton)|ip2long|\n  openlog|dns_(check_record|get_(record|mx))|define_syslog_variables|(p)?fsockopen|long2ip|\n  get(servby(name|port)|host(name|by(name(l)?|addr))|protoby(name|number)|mxrr)\n)\\b",
				name: "support.function.network.php"
			},
			{
				match: "(?i)\\bnsapi_(virtual|response_headers|request_headers)\\b",
				name: "support.function.nsapi.php"
			},
			{
				match: "(?xi)\\b\n(\n  oci(statementtype|setprefetch|serverversion|savelob(file)?|numcols|new(collection|cursor|descriptor)|nlogon|\n      column(scale|size|name|type(raw)?|isnull|precision)|coll(size|trim|assign(elem)?|append|getelem|max)|commit|\n      closelob|cancel|internaldebug|definebyname|plogon|parse|error|execute|fetch(statement|into)?|\n      free(statement|collection|cursor|desc)|write(temporarylob|lobtofile)|loadlob|log(on|off)|rowcount|rollback|\n      result|bindbyname)|\n  oci_(statement_type|set_(client_(info|identifier)|prefetch|edition|action|module_name)|server_version|\n       num_(fields|rows)|new_(connect|collection|cursor|descriptor)|connect|commit|client_version|close|cancel|\n       internal_debug|define_by_name|pconnect|password_change|parse|error|execute|bind_(array_)?by_name|\n       field_(scale|size|name|type(_raw)?|is_null|precision)|fetch(_(object|assoc|all|array|row))?|\n       free_(statement|descriptor)|lob_(copy|is_equal)|rollback|result|get_implicit_resultset)\n)\\b",
				name: "support.function.oci8.php"
			},
			{
				match: "(?i)\\bopcache_(compile_file|invalidate|reset|get_(status|configuration))\\b",
				name: "support.function.opcache.php"
			},
			{
				match: "(?xi)\\b\nopenssl_(\n  sign|spki_(new|export(_challenge)?|verify)|seal|csr_(sign|new|export(_to_file)?|get_(subject|public_key))|\n  cipher_iv_length|open|dh_compute_key|digest|decrypt|public_(decrypt|encrypt)|encrypt|error_string|\n  pkcs12_(export(_to_file)?|read)|pkcs7_(sign|decrypt|encrypt|verify)|verify|free_key|random_pseudo_bytes|\n  pkey_(new|export(_to_file)?|free|get_(details|public|private))|private_(decrypt|encrypt)|pbkdf2|\n  get_((cipher|md)_methods|cert_locations|(public|private)key)|\n  x509_(check_private_key|checkpurpose|parse|export(_to_file)?|fingerprint|free|read)\n)\\b",
				name: "support.function.openssl.php"
			},
			{
				match: "(?xi)\\b\n(\n  output_(add_rewrite_var|reset_rewrite_vars)|flush|\n  ob_(start|clean|implicit_flush|end_(clean|flush)|flush|list_handlers|gzhandler|\n      get_(status|contents|clean|flush|length|level))\n)\\b",
				name: "support.function.output.php"
			},
			{
				match: "(?i)\\bpassword_(hash|needs_rehash|verify|get_info)\\b",
				name: "support.function.password.php"
			},
			{
				match: "(?xi)\\b\npcntl_(\n  strerror|signal(_dispatch)?|sig(timedwait|procmask|waitinfo)|setpriority|errno|exec|fork|\n  w(stopsig|termsig|if(stopped|signaled|exited))|wait(pid)?|alarm|getpriority|get_last_error\n)\\b",
				name: "support.function.pcntl.php"
			},
			{
				match: "(?xi)\\b\npg_(\n  socket|send_(prepare|execute|query(_params)?)|set_(client_encoding|error_verbosity)|select|host|\n  num_(fields|rows)|consume_input|connection_(status|reset|busy)|connect(_poll)?|convert|copy_(from|to)|\n  client_encoding|close|cancel_query|tty|transaction_status|trace|insert|options|delete|dbname|untrace|\n  unescape_bytea|update|pconnect|ping|port|put_line|parameter_status|prepare|version|query(_params)?|\n  escape_(string|identifier|literal|bytea)|end_copy|execute|flush|free_result|last_(notice|error|oid)|\n  field_(size|num|name|type(_oid)?|table|is_null|prtlen)|affected_rows|result_(status|seek|error(_field)?)|\n  fetch_(object|assoc|all(_columns)?|array|row|result)|get_(notify|pid|result)|meta_data|\n  lo_(seek|close|create|tell|truncate|import|open|unlink|export|write|read(_all)?)|\n)\\b",
				name: "support.function.pgsql.php"
			},
			{
				match: "(?i)\\b(virtual|getallheaders|apache_((get|set)env|note|child_terminate|lookup_uri|response_headers|reset_timeout|request_headers|get_(version|modules)))\\b",
				name: "support.function.php_apache.php"
			},
			{
				match: "(?i)\\bdom_import_simplexml\\b",
				name: "support.function.php_dom.php"
			},
			{
				match: "(?xi)\\b\nftp_(\n  ssl_connect|systype|site|size|set_option|nlist|nb_(continue|f?(put|get))|ch(dir|mod)|connect|cdup|close|\n  delete|put|pwd|pasv|exec|quit|f(put|get)|login|alloc|rename|raw(list)?|rmdir|get(_option)?|mdtm|mkdir\n)\\b",
				name: "support.function.php_ftp.php"
			},
			{
				match: "(?xi)\\b\nimap_(\n  (create|delete|list|rename|scan)(mailbox)?|status|sort|subscribe|set_quota|set(flag_full|acl)|search|savebody|\n  num_(recent|msg)|check|close|clearflag_full|thread|timeout|open|header(info)?|headers|append|alerts|reopen|\n  8bit|unsubscribe|undelete|utf7_(decode|encode)|utf8|uid|ping|errors|expunge|qprint|gc|\n  fetch(structure|header|text|mime|body)|fetch_overview|lsub|list(scan|subscribed)|last_error|\n  rfc822_(parse_(headers|adrlist)|write_address)|get(subscribed|acl|mailboxes)|get_quota(root)?|\n  msgno|mime_header_decode|mail_(copy|compose|move)|mail|mailboxmsginfo|binary|body(struct)?|base64\n)\\b",
				name: "support.function.php_imap.php"
			},
			{
				match: "(?xi)\\b\nmssql_(\n  select_db|num_(fields|rows)|next_result|connect|close|init|data_seek|pconnect|execute|query|\n  field_(seek|name|type|length)|fetch_(object|field|assoc|array|row|batch)|free_(statement|result)|\n  rows_affected|result|guid_string|get_last_message|min_(error|message)_severity|bind\n)\\b",
				name: "support.function.php_mssql.php"
			},
			{
				match: "(?xi)\\b\nodbc_(\n  statistics|specialcolumns|setoption|num_(fields|rows)|next_result|connect|columns|columnprivileges|commit|\n  cursor|close(_all)?|tables|tableprivileges|do|data_source|pconnect|primarykeys|procedures|procedurecolumns|\n  prepare|error(msg)?|exec(ute)?|field_(scale|num|name|type|precision|len)|foreignkeys|free_result|\n  fetch_(into|object|array|row)|longreadlen|autocommit|rollback|result(_all)?|gettypeinfo|binmode\n)\\b",
				name: "support.function.php_odbc.php"
			},
			{
				match: "(?i)\\bpreg_(split|quote|filter|last_error|replace(_callback)?|grep|match(_all)?)\\b",
				name: "support.function.php_pcre.php"
			},
			{
				match: "(?i)\\b(spl_(classes|object_hash|autoload(_(call|unregister|extensions|functions|register))?)|class_(implements|uses|parents)|iterator_(count|to_array|apply))\\b",
				name: "support.function.php_spl.php"
			},
			{
				match: "(?i)\\bzip_(close|open|entry_(name|compressionmethod|compressedsize|close|open|filesize|read)|read)\\b",
				name: "support.function.php_zip.php"
			},
			{
				match: "(?xi)\\b\nposix_(\n  strerror|set(s|e?u|[ep]?g)id|ctermid|ttyname|times|isatty|initgroups|uname|errno|kill|access|\n  get(sid|cwd|uid|pid|ppid|pwnam|pwuid|pgid|pgrp|euid|egid|login|rlimit|gid|grnam|groups|grgid)|\n  get_last_error|mknod|mkfifo\n)\\b",
				name: "support.function.posix.php"
			},
			{
				match: "(?i)\\bset(thread|proc)title\\b",
				name: "support.function.proctitle.php"
			},
			{
				match: "(?xi)\\b\npspell_(\n  store_replacement|suggest|save_wordlist|new(_(config|personal))?|check|clear_session|\n  config_(save_repl|create|ignore|(data|dict)_dir|personal|runtogether|repl|mode)|add_to_(session|personal)\n)\\b",
				name: "support.function.pspell.php"
			},
			{
				match: "(?i)\\breadline(_(completion_function|clear_history|callback_(handler_(install|remove)|read_char)|info|on_new_line|write_history|list_history|add_history|redisplay|read_history))?\\b",
				name: "support.function.readline.php"
			},
			{
				match: "(?i)\\brecode(_(string|file))?\\b",
				name: "support.function.recode.php"
			},
			{
				match: "(?i)\\brrd(c_disconnect|_(create|tune|info|update|error|version|first|fetch|last(update)?|restore|graph|xport))\\b",
				name: "support.function.rrd.php"
			},
			{
				match: "(?xi)\\b\n(\n  shm_((get|has|remove|put)_var|detach|attach|remove)|sem_(acquire|release|remove|get)|ftok|\n  msg_((get|remove|set|stat)_queue|send|queue_exists|receive)\n)\\b",
				name: "support.function.sem.php"
			},
			{
				match: "(?xi)\\b\nsession_(\n  status|start|set_(save_handler|cookie_params)|save_path|name|commit|cache_(expire|limiter)|\n  is_registered|id|destroy|decode|unset|unregister|encode|write_close|abort|reset|register(_shutdown)?|\n  regenerate_id|get_cookie_params|module_name\n)\\b",
				name: "support.function.session.php"
			},
			{
				match: "(?i)\\bshmop_(size|close|open|delete|write|read)\\b",
				name: "support.function.shmop.php"
			},
			{
				match: "(?i)\\bsimplexml_(import_dom|load_(string|file))\\b",
				name: "support.function.simplexml.php"
			},
			{
				match: "(?xi)\\b\n(\n  snmp(walk(oid)?|realwalk|get(next)?|set)|\n  snmp_(set_(valueretrieval|quick_print|enum_print|oid_(numeric_print|output_format))|read_mib|\n        get_(valueretrieval|quick_print))|\n  snmp[23]_(set|walk|real_walk|get(next)?)\n)\\b",
				name: "support.function.snmp.php"
			},
			{
				match: "(?i)\\b(is_soap_fault|use_soap_error_handler)\\b",
				name: "support.function.soap.php"
			},
			{
				match: "(?xi)\\b\nsocket_(\n  shutdown|strerror|send(to|msg)?|set_((non)?block|option)|select|connect|close|clear_error|bind|\n  create(_(pair|listen))?|cmsg_space|import_stream|write|listen|last_error|accept|recv(from|msg)?|\n  read|get(peer|sock)name|get_option\n)\\b",
				name: "support.function.sockets.php"
			},
			{
				match: "(?xi)\\b\nsqlite_(\n  single_query|seek|has_(more|prev)|num_(fields|rows)|next|changes|column|current|close|\n  create_(aggregate|function)|open|unbuffered_query|udf_(decode|encode)_binary|popen|prev|\n  escape_string|error_string|exec|valid|key|query|field_name|factory|\n  fetch_(string|single|column_types|object|all|array)|lib(encoding|version)|\n  last_(insert_rowid|error)|array_query|rewind|busy_timeout\n)\\b",
				name: "support.function.sqlite.php"
			},
			{
				match: "(?xi)\\b\nsqlsrv_(\n  send_stream_data|server_info|has_rows|num_(fields|rows)|next_result|connect|configure|commit|\n  client_info|close|cancel|prepare|errors|execute|query|field_metadata|fetch(_(array|object))?|\n  free_stmt|rows_affected|rollback|get_(config|field)|begin_transaction\n)\\b",
				name: "support.function.sqlsrv.php"
			},
			{
				match: "(?xi)\\b\nstats_(\n  harmonic_mean|covariance|standard_deviation|skew|\n  cdf_(noncentral_(chisquare|f)|negative_binomial|chisquare|cauchy|t|uniform|poisson|exponential|f|weibull|\n       logistic|laplace|gamma|binomial|beta)|\n  stat_(noncentral_t|correlation|innerproduct|independent_t|powersum|percentile|paired_t|gennch|binomial_coef)|\n  dens_(normal|negative_binomial|chisquare|cauchy|t|pmf_(hypergeometric|poisson|binomial)|exponential|f|\n        weibull|logistic|laplace|gamma|beta)|\n  den_uniform|variance|kurtosis|absolute_deviation|\n  rand_(setall|phrase_to_seeds|ranf|get_seeds|\n        gen_(noncentral_[ft]|noncenral_chisquare|normal|chisquare|t|int|\n             i(uniform|poisson|binomial(_negative)?)|exponential|f(uniform)?|gamma|beta))\n)\\b",
				name: "support.function.stats.php"
			},
			{
				match: "(?xi)\\b\n(\n  set_socket_blocking|\n  stream_(socket_(shutdown|sendto|server|client|pair|enable_crypto|accept|recvfrom|get_name)|\n    set_(chunk_size|timeout|(read|write)_buffer|blocking)|select|notification_callback|supports_lock|\n    context_(set_(option|default|params)|create|get_(options|default|params))|copy_to_stream|is_local|\n    encoding|filter_(append|prepend|register|remove)|wrapper_((un)?register|restore)|\n    resolve_include_path|register_wrapper|get_(contents|transports|filters|wrappers|line|meta_data)|\n    bucket_(new|prepend|append|make_writeable)\n  )\n)\\b",
				name: "support.function.streamsfuncs.php"
			},
			{
				match: "(?xi)\\b\n(\n  money_format|md5(_file)?|metaphone|bin2hex|sscanf|sha1(_file)?|\n  str(str|c?spn|n(at)?(case)?cmp|chr|coll|(case)?cmp|to(upper|lower)|tok|tr|istr|pos|pbrk|len|rchr|ri?pos|rev)|\n  str_(getcsv|ireplace|pad|repeat|replace|rot13|shuffle|split|word_count)|\n  strip(c?slashes|os)|strip_tags|similar_text|soundex|substr(_(count|compare|replace))?|setlocale|\n  html(specialchars(_decode)?|entities)|html_entity_decode|hex2bin|hebrev(c)?|number_format|nl2br|nl_langinfo|\n  chop|chunk_split|chr|convert_(cyr_string|uu(decode|encode))|count_chars|crypt|crc32|trim|implode|ord|\n  uc(first|words)|join|parse_str|print(f)?|echo|explode|v?[fs]?printf|quoted_printable_(decode|encode)|\n  quotemeta|wordwrap|lcfirst|[lr]trim|localeconv|levenshtein|addc?slashes|get_html_translation_table\n)\\b",
				name: "support.function.string.php"
			},
			{
				match: "(?xi)\\b\nsybase_(\n  set_message_handler|select_db|num_(fields|rows)|connect|close|deadlock_retry_count|data_seek|\n  unbuffered_query|pconnect|query|field_seek|fetch_(object|field|assoc|array|row)|free_result|\n  affected_rows|result|get_last_message|min_(client|error|message|server)_severity\n)\\b",
				name: "support.function.sybase.php"
			},
			{
				match: "(?i)\\b(taint|is_tainted|untaint)\\b",
				name: "support.function.taint.php"
			},
			{
				match: "(?xi)\\b\n(\n  tidy_((get|set)opt|set_encoding|save_config|config_count|clean_repair|is_(xhtml|xml)|diagnose|\n        (access|error|warning)_count|load_config|reset_config|(parse|repair)_(string|file)|\n        get_(status|html(_ver)?|head|config|output|opt_doc|root|release|body))|\n  ob_tidyhandler\n)\\b",
				name: "support.function.tidy.php"
			},
			{
				match: "(?i)\\btoken_(name|get_all)\\b",
				name: "support.function.tokenizer.php"
			},
			{
				match: "(?xi)\\b\ntrader_(\n  stoch(f|r|rsi)?|stddev|sin(h)?|sum|sub|set_(compat|unstable_period)|sqrt|sar(ext)?|sma|\n  ht_(sine|trend(line|mode)|dc(period|phase)|phasor)|natr|cci|cos(h)?|correl|\n  cdl(shootingstar|shortline|sticksandwich|stalledpattern|spinningtop|separatinglines|\n      hikkake(mod)?|highwave|homingpigeon|hangingman|harami(cross)?|hammer|concealbabyswall|\n      counterattack|closingmarubozu|thrusting|tasukigap|takuri|tristar|inneck|invertedhammer|\n      identical3crows|2crows|onneck|doji(star)?|darkcloudcover|dragonflydoji|unique3river|\n      upsidegap2crows|3(starsinsouth|inside|outside|whitesoldiers|linestrike|blackcrows)|\n      piercing|engulfing|evening(doji)?star|kicking(bylength)?|longline|longleggeddoji|\n      ladderbottom|advanceblock|abandonedbaby|risefall3methods|rickshawman|gapsidesidewhite|\n      gravestonedoji|xsidegap3methods|morning(doji)?star|mathold|matchinglow|marubozu|\n      belthold|breakaway)|\n  ceil|cmo|tsf|typprice|t3|tema|tan(h)?|trix|trima|trange|obv|div|dema|dx|ultosc|ppo|\n  plus_d[im]|errno|exp|ema|var|kama|floor|wclprice|willr|wma|ln|log10|bop|beta|bbands|\n  linearreg(_(slope|intercept|angle))?|asin|acos|atan|atr|adosc|ad|add|adx(r)?|apo|avgprice|\n  aroon(osc)?|rsi|roc|rocp|rocr(100)?|get_(compat|unstable_period)|min(index)?|minus_d[im]|\n  minmax(index)?|mid(point|price)|mom|mult|medprice|mfi|macd(ext|fix)?|mavp|max(index)?|ma(ma)?\n)\\b",
				name: "support.function.trader.php"
			},
			{
				match: "(?i)\\buopz_(copy|compose|implement|overload|delete|undefine|extend|function|flags|restore|rename|redefine|backup)\\b",
				name: "support.function.uopz.php"
			},
			{
				match: "(?i)\\b(http_build_query|(raw)?url(decode|encode)|parse_url|get_(headers|meta_tags)|base64_(decode|encode))\\b",
				name: "support.function.url.php"
			},
			{
				match: "(?xi)\\b\n(\n  strval|settype|serialize|(bool|double|float)val|debug_zval_dump|intval|import_request_variables|isset|\n  is_(scalar|string|null|numeric|callable|int(eger)?|object|double|float|long|array|resource|real|bool)|\n  unset|unserialize|print_r|empty|var_(dump|export)|gettype|get_(defined_vars|resource_type)\n)\\b",
				name: "support.function.var.php"
			},
			{
				match: "(?i)\\bwddx_(serialize_(value|vars)|deserialize|packet_(start|end)|add_vars)\\b",
				name: "support.function.wddx.php"
			},
			{
				match: "(?i)\\bxhprof_(sample_)?(disable|enable)\\b",
				name: "support.function.xhprof.php"
			},
			{
				match: "(?xi)\n\\b\n(\n  utf8_(decode|encode)|\n  xml_(set_((notation|(end|start)_namespace|unparsed_entity)_decl_handler|\n            (character_data|default|element|external_entity_ref|processing_instruction)_handler|object)|\n       parse(_into_struct)?|parser_((get|set)_option|create(_ns)?|free)|error_string|\n       get_(current_((column|line)_number|byte_index)|error_code))\n)\\b",
				name: "support.function.xml.php"
			},
			{
				match: "(?xi)\\b\nxmlrpc_(\n  server_(call_method|create|destroy|add_introspection_data|register_(introspection_callback|method))|\n  is_fault|decode(_request)?|parse_method_descriptions|encode(_request)?|(get|set)_type\n)\\b",
				name: "support.function.xmlrpc.php"
			},
			{
				match: "(?xi)\\b\nxmlwriter_(\n  (end|start|write)_(comment|cdata|dtd(_(attlist|entity|element))?|document|pi|attribute|element)|\n  (start|write)_(attribute|element)_ns|write_raw|set_indent(_string)?|text|output_memory|open_(memory|uri)|\n  full_end_element|flush|\n)\\b",
				name: "support.function.xmlwriter.php"
			},
			{
				match: "(?xi)\\b\n(\n  zlib_(decode|encode|get_coding_type)|readgzfile|\n  gz(seek|compress|close|tell|inflate|open|decode|deflate|uncompress|puts|passthru|encode|eof|file|\n     write|rewind|read|getc|getss?)\n)\\b",
				name: "support.function.zlib.php"
			},
			{
				match: "(?i)\\bis_int(eger)?\\b",
				name: "support.function.alias.php"
			}
		]
	},
	switch_statement: {
		patterns: [
			{
				match: "\\s+(?=switch\\b)"
			},
			{
				begin: "\\bswitch\\b(?!\\s*\\(.*\\)\\s*:)",
				beginCaptures: {
					"0": {
						name: "keyword.control.switch.php"
					}
				},
				end: "}|(?=\\?>)",
				endCaptures: {
					"0": {
						name: "punctuation.definition.section.switch-block.end.bracket.curly.php"
					}
				},
				name: "meta.switch-statement.php",
				patterns: [
					{
						begin: "\\(",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.switch-expression.begin.bracket.round.php"
							}
						},
						end: "\\)|(?=\\?>)",
						endCaptures: {
							"0": {
								name: "punctuation.definition.switch-expression.end.bracket.round.php"
							}
						},
						patterns: [
							{
								include: "#language"
							}
						]
					},
					{
						begin: "{",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.section.switch-block.begin.bracket.curly.php"
							}
						},
						end: "(?=}|\\?>)",
						patterns: [
							{
								include: "#language"
							}
						]
					}
				]
			}
		]
	},
	"use-inner": {
		patterns: [
			{
				include: "#comments"
			},
			{
				begin: "(?i)\\b(as)\\s+",
				beginCaptures: {
					"1": {
						name: "keyword.other.use-as.php"
					}
				},
				end: "(?i)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*",
				endCaptures: {
					"0": {
						name: "entity.other.alias.php"
					}
				}
			},
			{
				include: "#class-name"
			},
			{
				match: ",",
				name: "punctuation.separator.delimiter.php"
			}
		]
	},
	var_basic: {
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.variable.php"
					}
				},
				match: "(?i)(\\$+)[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*\\b",
				name: "variable.other.php"
			}
		]
	},
	var_global: {
		captures: {
			"1": {
				name: "punctuation.definition.variable.php"
			}
		},
		match: "(\\$)((_(COOKIE|FILES|GET|POST|REQUEST))|arg(v|c))\\b",
		name: "variable.other.global.php"
	},
	var_global_safer: {
		captures: {
			"1": {
				name: "punctuation.definition.variable.php"
			}
		},
		match: "(\\$)((GLOBALS|_(ENV|SERVER|SESSION)))",
		name: "variable.other.global.safer.php"
	},
	var_language: {
		match: "(\\$)this\\b",
		name: "variable.language.this.php",
		captures: {
			"1": {
				name: "punctuation.definition.variable.php"
			}
		}
	},
	"variable-name": {
		patterns: [
			{
				include: "#var_global"
			},
			{
				include: "#var_global_safer"
			},
			{
				captures: {
					"1": {
						name: "variable.other.php"
					},
					"2": {
						name: "punctuation.definition.variable.php"
					},
					"4": {
						name: "keyword.operator.class.php"
					},
					"5": {
						name: "variable.other.property.php"
					},
					"6": {
						name: "punctuation.section.array.begin.php"
					},
					"7": {
						name: "constant.numeric.index.php"
					},
					"8": {
						name: "variable.other.index.php"
					},
					"9": {
						name: "punctuation.definition.variable.php"
					},
					"10": {
						name: "string.unquoted.index.php"
					},
					"11": {
						name: "punctuation.section.array.end.php"
					}
				},
				match: "(?xi)\n((\\$)(?<name>[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*))\n(?:\n  (->)(\\g<name>)\n  |\n  (\\[)(?:(\\d+)|((\\$)\\g<name>)|([a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*))(\\])\n)?"
			},
			{
				captures: {
					"1": {
						name: "variable.other.php"
					},
					"2": {
						name: "punctuation.definition.variable.php"
					},
					"4": {
						name: "punctuation.definition.variable.php"
					}
				},
				match: "(?i)((\\${)(?<name>[a-z_\\x{7f}-\\x{ff}][a-z0-9_\\x{7f}-\\x{ff}]*)(}))"
			}
		]
	},
	variables: {
		patterns: [
			{
				include: "#var_language"
			},
			{
				include: "#var_global"
			},
			{
				include: "#var_global_safer"
			},
			{
				include: "#var_basic"
			},
			{
				begin: "\\${(?=.*?})",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.variable.php"
					}
				},
				end: "}",
				endCaptures: {
					"0": {
						name: "punctuation.definition.variable.php"
					}
				},
				patterns: [
					{
						include: "#language"
					}
				]
			}
		]
	}
};
const blade_tmLanguage = {
	scopeName: scopeName,
	name: name,
	fileTypes: fileTypes,
	foldingStartMarker: foldingStartMarker,
	foldingStopMarker: foldingStopMarker,
	injections: injections,
	patterns: patterns,
	repository: repository
};




/***/ })

};
;