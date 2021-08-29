export default {
    "name": "JavaScript (with React support)",
    "scopeName": "source.js",
    "fileTypes": [
        ".js",
        ".jsx"
    ],
    "uuid": "805375ec-d614-41f5-8993-5843fe63ea82",
    "patterns": [
        {
            "include": "#directives"
        },
        {
            "include": "#statements"
        },
        {
            "name": "comment.line.shebang.ts",
            "match": "\\A(#!).*(?=$)",
            "captures": {
                "1": {
                    "name": "punctuation.definition.comment.ts"
                }
            }
        }
    ],
    "repository": {
        "statements": {
            "patterns": [
                {
                    "include": "#string"
                },
                {
                    "include": "#template"
                },
                {
                    "include": "#comment"
                },
                {
                    "include": "#literal"
                },
                {
                    "include": "#declaration"
                },
                {
                    "include": "#switch-statement"
                },
                {
                    "include": "#for-loop"
                },
                {
                    "include": "#after-operator-block"
                },
                {
                    "include": "#decl-block"
                },
                {
                    "include": "#control-statement"
                },
                {
                    "include": "#expression"
                },
                {
                    "include": "#punctuation-semicolon"
                }
            ]
        },
        "var-expr": {
            "name": "meta.var.expr.js",
            "begin": "(?<!\\.|\\$)(?:(\\bexport)\\s+)?\\b(var|let|const(?!\\s+enum\\b))\\b(?!\\$)",
            "beginCaptures": {
                "1": {
                    "name": "keyword.control.export.js"
                },
                "2": {
                    "name": "storage.type.js"
                }
            },
            "end": "(?=$|;|}|(\\s+(of|in)\\s+))",
            "patterns": [
                {
                    "include": "#destructuring-variable"
                },
                {
                    "include": "#var-single-variable"
                },
                {
                    "include": "#variable-initializer"
                },
                {
                    "include": "#comment"
                },
                {
                    "include": "#punctuation-comma"
                }
            ]
        },
        "var-single-variable": {
            "patterns": [
                {
                    "name": "meta.var-single-variable.expr.js",
                    "begin": "(?x)([_$[:alpha:]][_$[:alnum:]]*)(?=\\s* (=\\s*( (async\\s+) | (function\\s*[(<]) | (function\\s+) | ([_$[:alpha:]][_$[:alnum:]]*\\s*=>) | ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>)) ) | (:\\s*( (<) | ([(]\\s*( ([)]) | (\\.\\.\\.) | ([_$[:alnum:]]+\\s*( ([:,?=])| ([)]\\s*=>) )) ))) ))",
                    "beginCaptures": {
                        "1": {
                            "name": "entity.name.function.js"
                        }
                    },
                    "end": "(?=$|[;,=}]|(\\s+(of|in)\\s+))",
                    "patterns": [
                        {
                            "include": "#type-annotation"
                        },
                        {
                            "include": "#string"
                        },
                        {
                            "include": "#comment"
                        }
                    ]
                },
                {
                    "name": "meta.var-single-variable.expr.js",
                    "begin": "([_$[:alpha:]][_$[:alnum:]]*)",
                    "beginCaptures": {
                        "1": {
                            "name": "variable.other.readwrite.js"
                        }
                    },
                    "end": "(?=$|[;,=}]|(\\s+(of|in)\\s+))",
                    "patterns": [
                        {
                            "include": "#type-annotation"
                        },
                        {
                            "include": "#string"
                        },
                        {
                            "include": "#comment"
                        }
                    ]
                }
            ]
        },
        "destructuring-variable": {
            "patterns": [
                {
                    "name": "meta.object-binding-pattern-variable.js",
                    "begin": "(?<!=|:|of|in)\\s*(?=\\{)",
                    "end": "(?=$|[;,=}]|(\\s+(of|in)\\s+))",
                    "patterns": [
                        {
                            "include": "#object-binding-pattern"
                        },
                        {
                            "include": "#type-annotation"
                        },
                        {
                            "include": "#comment"
                        }
                    ]
                },
                {
                    "name": "meta.array-binding-pattern-variable.js",
                    "begin": "(?<!=|:|of|in)\\s*(?=\\[)",
                    "end": "(?=$|[;,=}]|(\\s+(of|in)\\s+))",
                    "patterns": [
                        {
                            "include": "#array-binding-pattern"
                        },
                        {
                            "include": "#type-annotation"
                        },
                        {
                            "include": "#comment"
                        }
                    ]
                }
            ]
        },
        "object-binding-element": {
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "begin": "(?=(([_$[:alpha:]][_$[:alnum:]]*)|(\\'[^']*\\')|(\\\"[^\"]*\\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]+\\])+\\]))\\s*(:))",
                    "end": "(?=,|\\})",
                    "patterns": [
                        {
                            "include": "#object-binding-element-propertyName"
                        },
                        {
                            "include": "#binding-element"
                        }
                    ]
                },
                {
                    "include": "#object-binding-pattern"
                },
                {
                    "include": "#destructuring-variable-rest"
                },
                {
                    "include": "#variable-initializer"
                },
                {
                    "include": "#punctuation-comma"
                }
            ]
        },
        "object-binding-element-propertyName": {
            "begin": "(?=(([_$[:alpha:]][_$[:alnum:]]*)|(\\'[^']*\\')|(\\\"[^\"]*\\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]+\\])+\\]))\\s*(:))",
            "end": "(:)",
            "endCaptures": {
                "0": {
                    "name": "punctuation.destructuring.js"
                }
            },
            "patterns": [
                {
                    "include": "#string"
                },
                {
                    "include": "#array-literal"
                },
                {
                    "name": "variable.object.property.js",
                    "match": "([_$[:alpha:]][_$[:alnum:]]*)"
                }
            ]
        },
        "binding-element": {
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "include": "#object-binding-pattern"
                },
                {
                    "include": "#array-binding-pattern"
                },
                {
                    "include": "#destructuring-variable-rest"
                },
                {
                    "include": "#variable-initializer"
                }
            ]
        },
        "destructuring-variable-rest": {
            "match": "(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)",
            "captures": {
                "1": {
                    "name": "keyword.operator.rest.js"
                },
                "2": {
                    "name": "variable.other.readwrite.js"
                }
            }
        },
        "object-binding-pattern": {
            "begin": "(?:(\\.\\.\\.)\\s*)?(\\{)",
            "beginCaptures": {
                "1": {
                    "name": "keyword.operator.rest.js"
                },
                "2": {
                    "name": "punctuation.definition.binding-pattern.object.js"
                }
            },
            "end": "\\}",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.binding-pattern.object.js"
                }
            },
            "patterns": [
                {
                    "include": "#object-binding-element"
                }
            ]
        },
        "array-binding-pattern": {
            "begin": "(?:(\\.\\.\\.)\\s*)?(\\[)",
            "beginCaptures": {
                "1": {
                    "name": "keyword.operator.rest.js"
                },
                "2": {
                    "name": "punctuation.definition.binding-pattern.array.js"
                }
            },
            "end": "\\]",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.binding-pattern.array.js"
                }
            },
            "patterns": [
                {
                    "include": "#binding-element"
                },
                {
                    "include": "#punctuation-comma"
                }
            ]
        },
        "ternary-expression": {
            "begin": "(?=\\?)",
            "end": "(?=$|[;,})\\]])",
            "patterns": [
                {
                    "include": "#ternary-operator"
                },
                {
                    "include": "#expression"
                }
            ]
        },
        "ternary-operator": {
            "begin": "(\\?)",
            "beginCaptures": {
                "0": {
                    "name": "keyword.operator.ternary.js"
                }
            },
            "end": "(:)",
            "endCaptures": {
                "0": {
                    "name": "keyword.operator.ternary.js"
                }
            },
            "patterns": [
                {
                    "include": "#expression"
                }
            ]
        },
        "expression": {
            "name": "meta.expression.js",
            "patterns": [
                {
                    "include": "#jsx"
                },
                {
                    "include": "#string"
                },
                {
                    "include": "#regex"
                },
                {
                    "include": "#template"
                },
                {
                    "include": "#comment"
                },
                {
                    "include": "#literal"
                },
                {
                    "include": "#function-declaration"
                },
                {
                    "include": "#class-or-interface-declaration"
                },
                {
                    "include": "#arrow-function"
                },
                {
                    "include": "#cast"
                },
                {
                    "include": "#ternary-expression"
                },
                {
                    "include": "#new-expr"
                },
                {
                    "include": "#object-literal"
                },
                {
                    "include": "#expression-operators"
                },
                {
                    "include": "#function-call"
                },
                {
                    "include": "#support-objects"
                },
                {
                    "include": "#identifiers"
                },
                {
                    "include": "#paren-expression"
                },
                {
                    "include": "#punctuation-comma"
                },
                {
                    "include": "#punctuation-accessor"
                }
            ]
        },
        "control-statement": {
            "patterns": [
                {
                    "name": "keyword.control.trycatch.js",
                    "match": "(?<!\\.|\\$)\\b(catch|finally|throw|try)\\b(?!\\$)"
                },
                {
                    "name": "keyword.control.loop.js",
                    "match": "(?<!\\.|\\$)\\b(break|continue|do|goto|while)\\b(?!\\$)"
                },
                {
                    "name": "keyword.control.flow.js",
                    "match": "(?<!\\.|\\$)\\b(return)\\b(?!\\$)"
                },
                {
                    "match": "(?<!\\.|\\$)\\b(yield)\\b(?!\\$)(?:\\s*(\\*))?",
                    "captures": {
                        "1": {
                            "name": "keyword.control.flow.js"
                        },
                        "2": {
                            "name": "keyword.generator.asterisk.js"
                        }
                    }
                },
                {
                    "name": "keyword.control.switch.js",
                    "match": "(?<!\\.|\\$)\\b(case|default|switch)\\b(?!\\$)"
                },
                {
                    "name": "keyword.control.conditional.js",
                    "match": "(?<!\\.|\\$)\\b(else|if)\\b(?!\\$)"
                },
                {
                    "name": "keyword.control.with.js",
                    "match": "(?<!\\.|\\$)\\b(with)\\b(?!\\$)"
                },
                {
                    "name": "keyword.other.debugger.js",
                    "match": "(?<!\\.|\\$)\\b(debugger)\\b(?!\\$)"
                },
                {
                    "name": "storage.modifier.js",
                    "match": "(?<!\\.|\\$)\\b(declare)\\b(?!\\$)"
                }
            ]
        },
        "declaration": {
            "name": "meta.declaration.js",
            "patterns": [
                {
                    "include": "#decorator"
                },
                {
                    "include": "#var-expr"
                },
                {
                    "include": "#function-declaration"
                },
                {
                    "include": "#class-or-interface-declaration"
                },
                {
                    "include": "#type-declaration"
                },
                {
                    "include": "#enum-declaration"
                },
                {
                    "include": "#namespace-declaration"
                },
                {
                    "include": "#import-equals-declaration"
                },
                {
                    "include": "#import-declaration"
                },
                {
                    "include": "#export-declaration"
                }
            ]
        },
        "decorator": {
            "name": "meta.decorator.js",
            "begin": "(?<!\\.|\\$)\\@",
            "beginCaptures": {
                "0": {
                    "name": "punctuation.decorator.js"
                }
            },
            "end": "(?=\\s)",
            "patterns": [
                {
                    "include": "#expression"
                }
            ]
        },
        "type-declaration": {
            "name": "meta.type.declaration.js",
            "begin": "(?<!\\.|\\$)(?:(\\bexport)\\s+)?\\b(type)\\b\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*",
            "beginCaptures": {
                "1": {
                    "name": "keyword.control.export.js"
                },
                "2": {
                    "name": "storage.type.type.js"
                },
                "3": {
                    "name": "entity.name.type.js"
                }
            },
            "end": "(?=[};]|\\bvar\\b|\\blet\\b|\\bconst\\b|\\btype\\b|\\bfunction\\b|\\bclass\\b|\\binterface\\b|\\bnamespace\\b|\\bmodule\\b|\\bimport\\b|\\benum\\b|\\bdeclare\\b|\\bexport\\b|\\babstract\\b|\\basync\\b)",
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "include": "#type-parameters"
                },
                {
                    "include": "#type"
                },
                {
                    "match": "(=)\\s*",
                    "captures": {
                        "1": {
                            "name": "keyword.operator.assignment.js"
                        }
                    }
                }
            ]
        },
        "enum-declaration": {
            "name": "meta.enum.declaration.js",
            "begin": "(?<!\\.|\\$)(?:(\\bexport)\\s+)?(?:\\b(const)\\s+)?\\b(enum)\\s+([_$[:alpha:]][_$[:alnum:]]*)",
            "beginCaptures": {
                "1": {
                    "name": "keyword.control.export.js"
                },
                "2": {
                    "name": "storage.modifier.js"
                },
                "3": {
                    "name": "storage.type.enum.js"
                },
                "4": {
                    "name": "entity.name.type.enum.js"
                }
            },
            "end": "(?<=\\})",
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "begin": "\\{",
                    "beginCaptures": {
                        "0": {
                            "name": "punctuation.definition.block.js"
                        }
                    },
                    "end": "\\}",
                    "endCaptures": {
                        "0": {
                            "name": "punctuation.definition.block.js"
                        }
                    },
                    "patterns": [
                        {
                            "include": "#comment"
                        },
                        {
                            "begin": "([_$[:alpha:]][_$[:alnum:]]*)",
                            "beginCaptures": {
                                "0": {
                                    "name": "variable.other.enummember.js"
                                }
                            },
                            "end": "(?=,|\\}|$)",
                            "patterns": [
                                {
                                    "include": "#comment"
                                },
                                {
                                    "include": "#variable-initializer"
                                }
                            ]
                        },
                        {
                            "begin": "(?=((\\'[^']*\\')|(\\\"[^\"]*\\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]+\\])+\\])))",
                            "end": "(?=,|\\}|$)",
                            "patterns": [
                                {
                                    "include": "#string"
                                },
                                {
                                    "include": "#array-literal"
                                },
                                {
                                    "include": "#comment"
                                },
                                {
                                    "include": "#variable-initializer"
                                }
                            ]
                        },
                        {
                            "include": "#punctuation-comma"
                        }
                    ]
                }
            ]
        },
        "namespace-declaration": {
            "name": "meta.namespace.declaration.js",
            "begin": "(?<!\\.|\\$)(?:(\\bexport)\\s+)?\\b(namespace|module)\\s+",
            "beginCaptures": {
                "1": {
                    "name": "keyword.control.export.js"
                },
                "2": {
                    "name": "storage.type.namespace.js"
                }
            },
            "end": "(?=$|\\{)",
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "include": "#string"
                },
                {
                    "name": "entity.name.type.module.js",
                    "match": "([_$[:alpha:]][_$[:alnum:]]*)"
                },
                {
                    "name": "punctuation.accessor.js",
                    "match": "\\."
                }
            ]
        },
        "import-equals-declaration": {
            "patterns": [
                {
                    "name": "meta.import-equals.external.js",
                    "begin": "(?<!\\.|\\$)(?:(\\bexport)\\s+)?\\b(import)\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)\\s*(require)\\s*(\\()",
                    "beginCaptures": {
                        "1": {
                            "name": "keyword.control.export.js"
                        },
                        "2": {
                            "name": "keyword.control.import.js"
                        },
                        "3": {
                            "name": "variable.other.readwrite.alias.js"
                        },
                        "4": {
                            "name": "keyword.operator.assignment.js"
                        },
                        "5": {
                            "name": "keyword.control.require.js"
                        },
                        "6": {
                            "name": "meta.brace.round.js"
                        }
                    },
                    "end": "\\)",
                    "endCaptures": {
                        "0": {
                            "name": "meta.brace.round.js"
                        }
                    },
                    "patterns": [
                        {
                            "include": "#comment"
                        },
                        {
                            "include": "#string"
                        }
                    ]
                },
                {
                    "name": "meta.import-equals.internal.js",
                    "begin": "(?<!\\.|\\$)(?:(\\bexport)\\s+)?\\b(import)\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)\\s*(?!require\\b)",
                    "beginCaptures": {
                        "1": {
                            "name": "keyword.control.export.js"
                        },
                        "2": {
                            "name": "keyword.control.import.js"
                        },
                        "3": {
                            "name": "variable.other.readwrite.alias.js"
                        },
                        "4": {
                            "name": "keyword.operator.assignment.js"
                        }
                    },
                    "end": "(?=;|$)",
                    "patterns": [
                        {
                            "include": "#comment"
                        },
                        {
                            "match": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\.)",
                            "captures": {
                                "1": {
                                    "name": "entity.name.type.module.js"
                                },
                                "2": {
                                    "name": "punctuation.accessor.js"
                                }
                            }
                        },
                        {
                            "name": "variable.other.readwrite.js",
                            "match": "([_$[:alpha:]][_$[:alnum:]]*)"
                        }
                    ]
                }
            ]
        },
        "import-declaration": {
            "name": "meta.import.js",
            "begin": "(?<!\\.|\\$)(?:(\\bexport)\\s+)?\\b(import)(?!(\\s*:)|(\\$))\\b",
            "beginCaptures": {
                "1": {
                    "name": "keyword.control.export.js"
                },
                "2": {
                    "name": "keyword.control.import.js"
                }
            },
            "end": "(?=;|$)",
            "patterns": [
                {
                    "include": "#import-export-declaration"
                }
            ]
        },
        "export-declaration": {
            "patterns": [
                {
                    "match": "(?<!\\.|\\$)\\b(export)\\s+(as)\\s+(namespace)\\s+([_$[:alpha:]][_$[:alnum:]]*)",
                    "captures": {
                        "1": {
                            "name": "keyword.control.export.js"
                        },
                        "2": {
                            "name": "keyword.control.as.js"
                        },
                        "3": {
                            "name": "storage.type.namespace.js"
                        },
                        "4": {
                            "name": "entity.name.type.module.js"
                        }
                    }
                },
                {
                    "name": "meta.export.default.js",
                    "begin": "(?<!\\.|\\$)\\b(export)(?:(?:\\s*(=))|(?:\\s+(default)(?=\\s+)))",
                    "beginCaptures": {
                        "1": {
                            "name": "keyword.control.export.js"
                        },
                        "2": {
                            "name": "keyword.operator.assignment.js"
                        },
                        "3": {
                            "name": "keyword.control.default.js"
                        }
                    },
                    "end": "(?=;|\\bexport\\b|\\bfunction\\b|\\bclass\\b|\\binterface\\b|\\blet\\b|\\bvar\\b|\\bconst\\b|\\bimport\\b|\\benum\\b|\\bnamespace\\b|\\bmodule\\b|\\btype\\b|\\babstract\\b|\\bdeclare\\b|\\basync\\b|$)",
                    "patterns": [
                        {
                            "include": "#expression"
                        }
                    ]
                },
                {
                    "name": "meta.export.js",
                    "begin": "(?<!\\.|\\$)\\b(export)(?!(\\s*:)|(\\$))\\b",
                    "beginCaptures": {
                        "0": {
                            "name": "keyword.control.export.js"
                        }
                    },
                    "end": "(?=;|\\bexport\\b|\\bfunction\\b|\\bclass\\b|\\binterface\\b|\\blet\\b|\\bvar\\b|\\bconst\\b|\\bimport\\b|\\benum\\b|\\bnamespace\\b|\\bmodule\\b|\\btype\\b|\\babstract\\b|\\bdeclare\\b|\\basync\\b|$)",
                    "patterns": [
                        {
                            "include": "#import-export-declaration"
                        }
                    ]
                }
            ]
        },
        "import-export-declaration": {
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "include": "#string"
                },
                {
                    "include": "#import-export-block"
                },
                {
                    "name": "keyword.control.from.js",
                    "match": "\\bfrom\\b"
                },
                {
                    "include": "#import-export-clause"
                }
            ]
        },
        "import-export-block": {
            "name": "meta.block.js",
            "begin": "\\{",
            "beginCaptures": {
                "0": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "end": "\\}",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "patterns": [
                {
                    "include": "#import-export-clause"
                }
            ]
        },
        "import-export-clause": {
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "comment": "(default|*|name) as alias",
                    "match": "(?x) (?: \\b(default)\\b | (\\*) | ([_$[:alpha:]][_$[:alnum:]]*)) \\s+  (as) \\s+ (?: (\\b default \\b | \\*) | ([_$[:alpha:]][_$[:alnum:]]*))",
                    "captures": {
                        "1": {
                            "name": "keyword.control.default.js"
                        },
                        "2": {
                            "name": "constant.language.import-export-all.js"
                        },
                        "3": {
                            "name": "variable.other.readwrite.js"
                        },
                        "4": {
                            "name": "keyword.control.as.js"
                        },
                        "5": {
                            "name": "invalid.illegal.js"
                        },
                        "6": {
                            "name": "variable.other.readwrite.alias.js"
                        }
                    }
                },
                {
                    "include": "#punctuation-comma"
                },
                {
                    "name": "constant.language.import-export-all.js",
                    "match": "\\*"
                },
                {
                    "name": "keyword.control.default.js",
                    "match": "\\b(default)\\b"
                },
                {
                    "name": "variable.other.readwrite.alias.js",
                    "match": "([_$[:alpha:]][_$[:alnum:]]*)"
                }
            ]
        },
        "class-or-interface-declaration": {
            "name": "meta.class.js",
            "begin": "(?<!\\.|\\$)\\b(?:(export)\\s+)?\\b(?:(abstract)\\s+)?\\b(?:(class)|(interface))\\b",
            "beginCaptures": {
                "1": {
                    "name": "keyword.control.export.js"
                },
                "2": {
                    "name": "storage.modifier.js"
                },
                "3": {
                    "name": "storage.type.class.js"
                },
                "4": {
                    "name": "storage.type.interface.js"
                }
            },
            "end": "(?<=\\})",
            "endCaptures": {
                "1": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "include": "#class-or-interface-heritage"
                },
                {
                    "match": "[_$[:alpha:]][_$[:alnum:]]*",
                    "captures": {
                        "0": {
                            "name": "entity.name.type.class.js"
                        }
                    }
                },
                {
                    "include": "#type-parameters"
                },
                {
                    "include": "#class-or-interface-body"
                }
            ]
        },
        "class-or-interface-heritage": {
            "begin": "(?<!\\.|\\$)(?:\\b(extends|implements)\\b)(?!\\$)",
            "beginCaptures": {
                "1": {
                    "name": "storage.modifier.js"
                }
            },
            "end": "(?=\\{)",
            "endCaptures": {
                "1": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "include": "#class-or-interface-heritage"
                },
                {
                    "include": "#type-parameters"
                },
                {
                    "match": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\.)(?=\\s*[_$[:alpha:]][_$[:alnum:]]*(\\s*\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)*\\s*([,<{]|extends|implements|//|/\\*))",
                    "captures": {
                        "1": {
                            "name": "entity.name.type.module.js"
                        },
                        "2": {
                            "name": "punctuation.accessor.js"
                        }
                    }
                },
                {
                    "match": "([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*([,<{]|extends|implements|//|/\\*))",
                    "captures": {
                        "1": {
                            "name": "entity.other.inherited-class.js"
                        }
                    }
                },
                {
                    "include": "#expression"
                }
            ]
        },
        "class-or-interface-body": {
            "begin": "\\{",
            "beginCaptures": {
                "0": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "end": "\\}",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "patterns": [
                {
                    "include": "#string"
                },
                {
                    "include": "#comment"
                },
                {
                    "include": "#decorator"
                },
                {
                    "include": "#method-declaration"
                },
                {
                    "include": "#indexer-declaration"
                },
                {
                    "include": "#field-declaration"
                },
                {
                    "include": "#type-annotation"
                },
                {
                    "include": "#variable-initializer"
                },
                {
                    "include": "#access-modifier"
                },
                {
                    "include": "#property-accessor"
                },
                {
                    "include": "#expression"
                },
                {
                    "include": "#punctuation-comma"
                },
                {
                    "include": "#punctuation-semicolon"
                }
            ]
        },
        "type-object": {
            "name": "meta.object.type.js",
            "begin": "\\{",
            "beginCaptures": {
                "0": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "end": "\\}",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "patterns": [
                {
                    "include": "#type-object-members"
                }
            ]
        },
        "type-object-members": {
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "include": "#method-declaration"
                },
                {
                    "include": "#indexer-declaration"
                },
                {
                    "include": "#indexer-mapped-type-declaration"
                },
                {
                    "include": "#field-declaration"
                },
                {
                    "include": "#type-annotation"
                },
                {
                    "begin": "\\.\\.\\.",
                    "beginCaptures": {
                        "0": {
                            "name": "keyword.operator.spread.js"
                        }
                    },
                    "end": "(?=\\}|;|,|$)|(?<=\\})",
                    "patterns": [
                        {
                            "include": "#type"
                        }
                    ]
                },
                {
                    "include": "#punctuation-comma"
                },
                {
                    "include": "#punctuation-semicolon"
                }
            ]
        },
        "field-declaration": {
            "name": "meta.field.declaration.js",
            "begin": "(?<!\\()(?:(?<!\\.|\\$)\\b(readonly)\\s+)?(?=(([_$[:alpha:]][_$[:alnum:]]*)|(\\'[^']*\\')|(\\\"[^\"]*\\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]+\\])+\\]))\\s*(\\?\\s*)?(=|:))",
            "beginCaptures": {
                "1": {
                    "name": "storage.modifier.js"
                }
            },
            "end": "(?=\\}|;|,|$)|(?<=\\})",
            "patterns": [
                {
                    "include": "#variable-initializer"
                },
                {
                    "begin": "(?=((?:[_$[:alpha:]][_$[:alnum:]]*)|(?:\\'[^']*\\')|(?:\\\"[^\"]*\\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]+\\])+\\]))\\s*(\\?\\s*)?(=|:))",
                    "end": "(?=[};,=]|$)|(?<=\\})",
                    "patterns": [
                        {
                            "include": "#type-annotation"
                        },
                        {
                            "include": "#string"
                        },
                        {
                            "include": "#array-literal"
                        },
                        {
                            "include": "#comment"
                        },
                        {
                            "name": "entity.name.function.js",
                            "match": "(?x)([_$[:alpha:]][_$[:alnum:]]*)(?=(\\?\\s*)?\\s* (=\\s*( (async\\s+) | (function\\s*[(<]) | (function\\s+) | ([_$[:alpha:]][_$[:alnum:]]*\\s*=>) | ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>)) ) | (:\\s*( (<) | ([(]\\s*( ([)]) | (\\.\\.\\.) | ([_$[:alnum:]]+\\s*( ([:,?=])| ([)]\\s*=>) )) ))) ))"
                        },
                        {
                            "name": "variable.object.property.js",
                            "match": "[_$[:alpha:]][_$[:alnum:]]*"
                        },
                        {
                            "name": "keyword.operator.optional.js",
                            "match": "\\?"
                        }
                    ]
                }
            ]
        },
        "method-declaration": {
            "name": "meta.method.declaration.js",
            "begin": "(?<!\\.|\\$)(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(?:\\b(?:(new)|(constructor))\\b(?!\\$|:))|(?:(\\*)\\s*)?(?=((([_$[:alpha:]][_$[:alnum:]]*)|(\\'[^']*\\')|(\\\"[^\"]*\\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]+\\])+\\]))\\s*(\\??))?\\s*[\\(\\<]))",
            "beginCaptures": {
                "1": {
                    "name": "storage.modifier.js"
                },
                "2": {
                    "name": "storage.modifier.js"
                },
                "3": {
                    "name": "storage.modifier.async.js"
                },
                "4": {
                    "name": "storage.type.property.js"
                },
                "5": {
                    "name": "keyword.operator.new.js"
                },
                "6": {
                    "name": "storage.type.js"
                },
                "7": {
                    "name": "keyword.generator.asterisk.js"
                }
            },
            "end": "(?=\\}|;|,)|(?<=\\})",
            "patterns": [
                {
                    "include": "#method-declaration-name"
                },
                {
                    "include": "#comment"
                },
                {
                    "include": "#type-parameters"
                },
                {
                    "include": "#function-parameters"
                },
                {
                    "include": "#return-type"
                },
                {
                    "include": "#method-overload-declaration"
                },
                {
                    "include": "#decl-block"
                }
            ]
        },
        "method-overload-declaration": {
            "begin": "(?<!\\.|\\$)(?:\\b(public|private|protected)\\s+)?(?:\\b(abstract)\\s+)?(?:\\b(async)\\s+)?(?:\\b(get|set)\\s+)?(?:(?:\\b(?:(new)|(constructor))\\b(?!\\$|:))|(?:(\\*)\\s*)?(?=((([_$[:alpha:]][_$[:alnum:]]*)|(\\'[^']*\\')|(\\\"[^\"]*\\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]+\\])+\\]))\\s*(\\??))?\\s*[\\(\\<]))",
            "beginCaptures": {
                "1": {
                    "name": "storage.modifier.js"
                },
                "2": {
                    "name": "storage.modifier.js"
                },
                "3": {
                    "name": "storage.modifier.async.js"
                },
                "4": {
                    "name": "storage.type.property.js"
                },
                "5": {
                    "name": "keyword.operator.new.js"
                },
                "6": {
                    "name": "storage.type.js"
                },
                "7": {
                    "name": "keyword.generator.asterisk.js"
                }
            },
            "end": "(?=\\(|\\<)",
            "patterns": [
                {
                    "include": "#method-declaration-name"
                }
            ]
        },
        "method-declaration-name": {
            "begin": "(?=(([_$[:alpha:]][_$[:alnum:]]*)|(\\'[^']*\\')|(\\\"[^\"]*\\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]+\\])+\\]))\\s*(\\??)\\s*[\\(\\<])",
            "end": "(?=\\(|\\<)",
            "patterns": [
                {
                    "include": "#string"
                },
                {
                    "include": "#array-literal"
                },
                {
                    "name": "entity.name.function.js",
                    "match": "[_$[:alpha:]][_$[:alnum:]]*"
                },
                {
                    "name": "keyword.operator.optional.js",
                    "match": "\\?"
                }
            ]
        },
        "indexer-declaration": {
            "name": "meta.indexer.declaration.js",
            "begin": "(?:(?<!\\.|\\$)\\b(readonly)\\s*)?(\\[)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=:)",
            "beginCaptures": {
                "1": {
                    "name": "storage.modifier.js"
                },
                "2": {
                    "name": "meta.brace.square.js"
                },
                "3": {
                    "name": "variable.parameter.js"
                }
            },
            "end": "(\\])\\s*(\\?\\s*)?|$",
            "endCaptures": {
                "1": {
                    "name": "meta.brace.square.js"
                },
                "2": {
                    "name": "keyword.operator.optional.js"
                }
            },
            "patterns": [
                {
                    "include": "#type-annotation"
                }
            ]
        },
        "indexer-mapped-type-declaration": {
            "name": "meta.indexer.mappedtype.declaration.js",
            "begin": "(?:(?<!\\.|\\$)\\b(readonly)\\s*)?(\\[)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s+(in)\\s+",
            "beginCaptures": {
                "1": {
                    "name": "storage.modifier.js"
                },
                "2": {
                    "name": "meta.brace.square.js"
                },
                "3": {
                    "name": "entity.name.type.js"
                },
                "4": {
                    "name": "keyword.operator.expression.in.js"
                }
            },
            "end": "(\\])\\s*(\\?\\s*)?|$",
            "endCaptures": {
                "1": {
                    "name": "meta.brace.square.js"
                },
                "2": {
                    "name": "keyword.operator.optional.js"
                }
            },
            "patterns": [
                {
                    "include": "#type"
                }
            ]
        },
        "function-declaration": {
            "name": "meta.function.js",
            "begin": "(?<!\\.|\\$)\\b(?:(export)\\s+)?(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*",
            "beginCaptures": {
                "1": {
                    "name": "keyword.control.export.js"
                },
                "2": {
                    "name": "storage.modifier.async.js"
                },
                "3": {
                    "name": "storage.type.function.js"
                },
                "4": {
                    "name": "keyword.generator.asterisk.js"
                },
                "5": {
                    "name": "entity.name.function.js"
                }
            },
            "end": "(?=;|\\})|(?<=\\})",
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "include": "#type-parameters"
                },
                {
                    "include": "#function-parameters"
                },
                {
                    "include": "#return-type"
                },
                {
                    "include": "#function-overload-declaration"
                },
                {
                    "include": "#decl-block"
                }
            ]
        },
        "function-overload-declaration": {
            "name": "meta.function.overload.js",
            "match": "(?<!\\.|\\$)\\b(?:(export)\\s+)?(?:(async)\\s+)?(function\\b)(?:\\s*(\\*))?(?:(?:\\s+|(?<=\\*))([_$[:alpha:]][_$[:alnum:]]*))?\\s*",
            "captures": {
                "1": {
                    "name": "keyword.control.export.js"
                },
                "2": {
                    "name": "storage.modifier.async.js"
                },
                "3": {
                    "name": "storage.type.function.js"
                },
                "4": {
                    "name": "keyword.generator.asterisk.js"
                },
                "5": {
                    "name": "entity.name.function.js"
                }
            }
        },
        "object-literal": {
            "name": "meta.objectliteral.js",
            "begin": "\\{",
            "beginCaptures": {
                "0": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "end": "\\}",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "patterns": [
                {
                    "include": "#object-member"
                }
            ]
        },
        "decl-block": {
            "name": "meta.block.js",
            "begin": "\\{",
            "beginCaptures": {
                "0": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "end": "\\}",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "patterns": [
                {
                    "include": "#statements"
                }
            ]
        },
        "after-operator-block": {
            "name": "meta.objectliteral.js",
            "begin": "(?<=[=(,\\[?+!]|await|return|yield|throw|in|of|typeof|&&|\\|\\||\\*)\\s*(\\{)",
            "beginCaptures": {
                "1": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "end": "\\}",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "patterns": [
                {
                    "include": "#object-member"
                }
            ]
        },
        "parameter-name": {
            "patterns": [
                {
                    "match": "(?x)(?:\\s*\\b(readonly)\\s+)?(?:\\s*\\b(public|private|protected)\\s+)?(\\.\\.\\.)?\\s*(?<!=|:)([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\??)(?=\\s* (=\\s*( (async\\s+) | (function\\s*[(<]) | (function\\s+) | ([_$[:alpha:]][_$[:alnum:]]*\\s*=>) | ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>)) ) | (:\\s*( (<) | ([(]\\s*( ([)]) | (\\.\\.\\.) | ([_$[:alnum:]]+\\s*( ([:,?=])| ([)]\\s*=>) )) ))) ))",
                    "captures": {
                        "1": {
                            "name": "storage.modifier.js"
                        },
                        "2": {
                            "name": "storage.modifier.js"
                        },
                        "3": {
                            "name": "keyword.operator.rest.js"
                        },
                        "4": {
                            "name": "entity.name.function.js"
                        },
                        "5": {
                            "name": "keyword.operator.optional.js"
                        }
                    }
                },
                {
                    "match": "(?:\\s*\\b(readonly)\\s+)?(?:\\s*\\b(public|private|protected)\\s+)?(\\.\\.\\.)?\\s*(?<!=|:)([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\??)",
                    "captures": {
                        "1": {
                            "name": "storage.modifier.js"
                        },
                        "2": {
                            "name": "storage.modifier.js"
                        },
                        "3": {
                            "name": "keyword.operator.rest.js"
                        },
                        "4": {
                            "name": "variable.parameter.js"
                        },
                        "5": {
                            "name": "keyword.operator.optional.js"
                        }
                    }
                }
            ]
        },
        "destructuring-parameter": {
            "patterns": [
                {
                    "name": "meta.parameter.object-binding-pattern.js",
                    "begin": "(?<!=|:)\\s*(\\{)",
                    "beginCaptures": {
                        "1": {
                            "name": "punctuation.definition.binding-pattern.object.js"
                        }
                    },
                    "end": "\\}",
                    "endCaptures": {
                        "0": {
                            "name": "punctuation.definition.binding-pattern.object.js"
                        }
                    },
                    "patterns": [
                        {
                            "include": "#parameter-object-binding-element"
                        }
                    ]
                },
                {
                    "name": "meta.paramter.array-binding-pattern.js",
                    "begin": "(?<!=|:)\\s*(\\[)",
                    "beginCaptures": {
                        "1": {
                            "name": "punctuation.definition.binding-pattern.array.js"
                        }
                    },
                    "end": "\\]",
                    "endCaptures": {
                        "0": {
                            "name": "punctuation.definition.binding-pattern.array.js"
                        }
                    },
                    "patterns": [
                        {
                            "include": "#parameter-binding-element"
                        },
                        {
                            "include": "#punctuation-comma"
                        }
                    ]
                }
            ]
        },
        "parameter-object-binding-element": {
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "begin": "(?=(([_$[:alpha:]][_$[:alnum:]]*)|(\\'[^']*\\')|(\\\"[^\"]*\\\")|(\\[([^\\[\\]]|\\[[^\\[\\]]+\\])+\\]))\\s*(:))",
                    "end": "(?=,|\\})",
                    "patterns": [
                        {
                            "include": "#object-binding-element-propertyName"
                        },
                        {
                            "include": "#parameter-binding-element"
                        }
                    ]
                },
                {
                    "include": "#parameter-object-binding-pattern"
                },
                {
                    "include": "#destructuring-parameter-rest"
                },
                {
                    "include": "#variable-initializer"
                },
                {
                    "include": "#punctuation-comma"
                }
            ]
        },
        "parameter-binding-element": {
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "include": "#parameter-object-binding-pattern"
                },
                {
                    "include": "#parameter-array-binding-pattern"
                },
                {
                    "include": "#destructuring-parameter-rest"
                },
                {
                    "include": "#variable-initializer"
                }
            ]
        },
        "destructuring-parameter-rest": {
            "match": "(?:(\\.\\.\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)",
            "captures": {
                "1": {
                    "name": "keyword.operator.rest.js"
                },
                "2": {
                    "name": "variable.parameter.js"
                }
            }
        },
        "parameter-object-binding-pattern": {
            "begin": "(?:(\\.\\.\\.)\\s*)?(\\{)",
            "beginCaptures": {
                "1": {
                    "name": "keyword.operator.rest.js"
                },
                "2": {
                    "name": "punctuation.definition.binding-pattern.object.js"
                }
            },
            "end": "\\}",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.binding-pattern.object.js"
                }
            },
            "patterns": [
                {
                    "include": "#parameter-object-binding-element"
                }
            ]
        },
        "parameter-array-binding-pattern": {
            "begin": "(?:(\\.\\.\\.)\\s*)?(\\[)",
            "beginCaptures": {
                "1": {
                    "name": "keyword.operator.rest.js"
                },
                "2": {
                    "name": "punctuation.definition.binding-pattern.array.js"
                }
            },
            "end": "\\]",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.binding-pattern.array.js"
                }
            },
            "patterns": [
                {
                    "include": "#parameter-binding-element"
                },
                {
                    "include": "#punctuation-comma"
                }
            ]
        },
        "return-type": {
            "name": "meta.return.type.js",
            "begin": "(?<=\\))\\s*(:)",
            "beginCaptures": {
                "1": {
                    "name": "keyword.operator.type.annotation.js"
                }
            },
            "end": "(?<!:)((?=$)|(?=\\{|;|//|\\}))",
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "name": "meta.object.type.js",
                    "begin": "(?<=:)\\s*(\\{)",
                    "beginCaptures": {
                        "1": {
                            "name": "punctuation.definition.block.js"
                        }
                    },
                    "end": "\\}",
                    "endCaptures": {
                        "0": {
                            "name": "punctuation.definition.block.js"
                        }
                    },
                    "patterns": [
                        {
                            "include": "#type-object-members"
                        }
                    ]
                },
                {
                    "include": "#type-predicate-operator"
                },
                {
                    "include": "#type"
                }
            ]
        },
        "type-predicate-operator": {
            "name": "keyword.operator.expression.is.js",
            "match": "(?<!\\.|\\$)\\bis\\b(?!\\$)"
        },
        "type-annotation": {
            "name": "meta.type.annotation.js",
            "begin": ":",
            "beginCaptures": {
                "0": {
                    "name": "keyword.operator.type.annotation.js"
                }
            },
            "end": "(?=$|[,);\\}\\]]|//)|(?==[^>])|(?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)",
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "include": "#type"
                }
            ]
        },
        "type": {
            "name": "meta.type.js",
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "include": "#string"
                },
                {
                    "include": "#numeric-literal"
                },
                {
                    "include": "#type-primitive"
                },
                {
                    "include": "#type-builtin-literals"
                },
                {
                    "include": "#type-parameters"
                },
                {
                    "include": "#type-tuple"
                },
                {
                    "include": "#type-object"
                },
                {
                    "include": "#type-operators"
                },
                {
                    "include": "#type-fn-type-parameters"
                },
                {
                    "include": "#type-paren-or-function-parameters"
                },
                {
                    "include": "#type-function-return-type"
                },
                {
                    "include": "#type-name"
                }
            ]
        },
        "function-parameters": {
            "name": "meta.parameters.js",
            "begin": "\\(",
            "beginCaptures": {
                "0": {
                    "name": "punctuation.definition.parameters.begin.js"
                }
            },
            "end": "\\)",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.parameters.end.js"
                }
            },
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "include": "#decorator"
                },
                {
                    "include": "#destructuring-parameter"
                },
                {
                    "include": "#parameter-name"
                },
                {
                    "include": "#type-annotation"
                },
                {
                    "include": "#variable-initializer"
                },
                {
                    "name": "punctuation.separator.parameter.js",
                    "match": ","
                }
            ]
        },
        "type-primitive": {
            "name": "support.type.primitive.js",
            "match": "(?<!\\.|\\$)\\b(string|number|boolean|symbol|any|void|never)\\b(?!\\$)"
        },
        "type-builtin-literals": {
            "name": "support.type.builtin.js",
            "match": "(?<!\\.|\\$)\\b(this|true|false|undefined|null)\\b(?!\\$)"
        },
        "type-paren-or-function-parameters": {
            "name": "meta.type.paren.cover.js",
            "begin": "\\(",
            "beginCaptures": {
                "0": {
                    "name": "meta.brace.round.js"
                }
            },
            "end": "\\)",
            "endCaptures": {
                "0": {
                    "name": "meta.brace.round.js"
                }
            },
            "patterns": [
                {
                    "include": "#type"
                },
                {
                    "include": "#function-parameters"
                }
            ]
        },
        "type-fn-type-parameters": {
            "patterns": [
                {
                    "name": "meta.type.constructor.js",
                    "match": "(?<!\\.|\\$)\\b(new)\\b(?=\\s*\\<)",
                    "captures": {
                        "1": {
                            "name": "keyword.control.new.js"
                        }
                    }
                },
                {
                    "name": "meta.type.constructor.js",
                    "begin": "(?<!\\.|\\$)\\b(new)\\b\\s*(?=\\()",
                    "beginCaptures": {
                        "1": {
                            "name": "keyword.control.new.js"
                        }
                    },
                    "end": "(?<=\\))",
                    "patterns": [
                        {
                            "include": "#function-parameters"
                        }
                    ]
                },
                {
                    "name": "meta.type.function.js",
                    "begin": "(?<=\\>)\\s*(?=\\()",
                    "end": "(?<=\\))",
                    "patterns": [
                        {
                            "include": "#function-parameters"
                        }
                    ]
                },
                {
                    "name": "meta.type.function.js",
                    "begin": "(?x)( (?= [(]\\s*( ([)]) |  (\\.\\.\\.) | ([_$[:alnum:]]+\\s*( ([:,?=])| ([)]\\s*=>) )) ) ) )",
                    "end": "(?<=\\))",
                    "patterns": [
                        {
                            "include": "#function-parameters"
                        }
                    ]
                }
            ]
        },
        "type-operators": {
            "patterns": [
                {
                    "include": "#typeof-operator"
                },
                {
                    "name": "keyword.operator.type.js",
                    "match": "[&|]"
                },
                {
                    "name": "keyword.operator.expression.keyof.js",
                    "match": "(?<!\\.|\\$)\\bkeyof\\b(?!\\$)"
                }
            ]
        },
        "type-function-return-type": {
            "name": "meta.type.function.return.js",
            "begin": "=>",
            "beginCaptures": {
                "0": {
                    "name": "storage.type.function.arrow.js"
                }
            },
            "end": "(?<!=>)(?=[,\\]\\)\\{\\}=;>]|//|$)",
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "name": "meta.object.type.js",
                    "begin": "(?<==>)\\s*(\\{)",
                    "beginCaptures": {
                        "1": {
                            "name": "punctuation.definition.block.js"
                        }
                    },
                    "end": "\\}",
                    "endCaptures": {
                        "0": {
                            "name": "punctuation.definition.block.js"
                        }
                    },
                    "patterns": [
                        {
                            "include": "#type-object-members"
                        }
                    ]
                },
                {
                    "include": "#type-predicate-operator"
                },
                {
                    "include": "#type"
                }
            ]
        },
        "type-tuple": {
            "name": "meta.type.tuple.js",
            "begin": "\\[",
            "beginCaptures": {
                "0": {
                    "name": "meta.brace.square.js"
                }
            },
            "end": "\\]",
            "endCaptures": {
                "0": {
                    "name": "meta.brace.square.js"
                }
            },
            "patterns": [
                {
                    "include": "#type"
                },
                {
                    "include": "#punctuation-comma"
                }
            ]
        },
        "type-name": {
            "patterns": [
                {
                    "match": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\.)",
                    "captures": {
                        "1": {
                            "name": "entity.name.type.module.js"
                        },
                        "2": {
                            "name": "punctuation.accessor.js"
                        }
                    }
                },
                {
                    "name": "entity.name.type.js",
                    "match": "[_$[:alpha:]][_$[:alnum:]]*"
                }
            ]
        },
        "type-parameters": {
            "name": "meta.type.parameters.js",
            "begin": "(<)",
            "beginCaptures": {
                "1": {
                    "name": "punctuation.definition.typeparameters.begin.js"
                }
            },
            "end": "(?=$)|(>)",
            "endCaptures": {
                "1": {
                    "name": "punctuation.definition.typeparameters.end.js"
                }
            },
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "name": "storage.modifier.js",
                    "match": "(?<!\\.|\\$)\\b(extends)\\b(?!\\$)"
                },
                {
                    "include": "#type"
                },
                {
                    "include": "#punctuation-comma"
                }
            ]
        },
        "variable-initializer": {
            "begin": "(?<!=|!)(=)(?!=)",
            "beginCaptures": {
                "1": {
                    "name": "keyword.operator.assignment.js"
                }
            },
            "end": "(?=$|[,);}\\]])",
            "patterns": [
                {
                    "include": "#expression"
                }
            ]
        },
        "for-loop": {
            "begin": "(?<!\\.|\\$)\\b(for)\\s*(\\()",
            "beginCaptures": {
                "1": {
                    "name": "keyword.control.loop.js"
                },
                "2": {
                    "name": "meta.brace.round.js"
                }
            },
            "end": "\\)",
            "endCaptures": {
                "0": {
                    "name": "meta.brace.round.js"
                }
            },
            "patterns": [
                {
                    "include": "#var-expr"
                },
                {
                    "include": "#expression"
                },
                {
                    "include": "#punctuation-semicolon"
                }
            ]
        },
        "switch-expression": {
            "name": "switch-expression.expr.js",
            "begin": "(?<!\\.|\\$)\\b(switch)\\s*(\\()",
            "beginCaptures": {
                "1": {
                    "name": "keyword.control.switch.js"
                },
                "2": {
                    "name": "meta.brace.round.js"
                }
            },
            "end": "\\)",
            "endCaptures": {
                "0": {
                    "name": "meta.brace.round.js"
                }
            },
            "patterns": [
                {
                    "include": "#expression"
                }
            ]
        },
        "switch-block": {
            "name": "switch-block.expr.js",
            "begin": "{",
            "beginCaptures": {
                "0": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "end": "(?=\\})",
            "patterns": [
                {
                    "include": "#case-clause"
                },
                {
                    "include": "#statements"
                }
            ]
        },
        "case-clause": {
            "name": "case-clause.expr.js",
            "begin": "(?<!\\.|\\$)\\b(case|default(?=:))\\b(?!\\$)",
            "beginCaptures": {
                "1": {
                    "name": "keyword.control.switch.js"
                }
            },
            "end": ":",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.section.case-statement.js"
                }
            },
            "patterns": [
                {
                    "include": "#expression"
                }
            ]
        },
        "switch-statement": {
            "name": "switch-statement.expr.js",
            "begin": "(?<!\\.|\\$)(?=\\bswitch\\s*\\()",
            "end": "}",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.block.js"
                }
            },
            "patterns": [
                {
                    "include": "#switch-expression"
                },
                {
                    "include": "#switch-block"
                }
            ]
        },
        "support-objects": {
            "patterns": [
                {
                    "name": "variable.language.arguments.js",
                    "match": "(?<!\\.|\\$)\\b(arguments)\\b(?!\\$)"
                },
                {
                    "name": "support.class.builtin.js",
                    "match": "(?x)(?<!\\.|\\$)\\b(Array|ArrayBuffer|Atomics|Boolean|DataView|Date|Float32Array|Float64Array|Function|Generator |GeneratorFunction|Int8Array|Int16Array|Int32Array|Intl|Map|Number|Object|Promise|Proxy |Reflect|RegExp|Set|SharedArrayBuffer|SIMD|String|Symbol|TypedArray |Uint8Array|Uint16Array|Uint32Array|Uint8ClampedArray|WeakMap|WeakSet)\\b(?!\\$)"
                },
                {
                    "name": "support.class.error.js",
                    "match": "(?<!\\.|\\$)\\b((Eval|Internal|Range|Reference|Syntax|Type|URI)?Error)\\b(?!\\$)"
                },
                {
                    "name": "support.function.js",
                    "match": "(?x)(?<!\\.|\\$)\\b(clear(Interval|Timeout)|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|eval| isFinite|isNaN|parseFloat|parseInt|require|set(Interval|Timeout)|super|unescape|uneval)(?=\\s*\\()"
                },
                {
                    "match": "(?x)(?<!\\.|\\$)\\b(Math)(?:\\s*(\\.)\\s*(?:\n  (abs|acos|acosh|asin|asinh|atan|atan2|atanh|cbrt|ceil|clz32|cos|cosh|exp|\n  expm1|floor|fround|hypot|imul|log|log10|log1p|log2|max|min|pow|random|\n  round|sign|sin|sinh|sqrt|tan|tanh|trunc)\n  |\n  (E|LN10|LN2|LOG10E|LOG2E|PI|SQRT1_2|SQRT2)))?\\b(?!\\$)",
                    "captures": {
                        "1": {
                            "name": "support.constant.math.js"
                        },
                        "2": {
                            "name": "punctuation.accessor.js"
                        },
                        "3": {
                            "name": "support.function.math.js"
                        },
                        "4": {
                            "name": "support.constant.property.math.js"
                        }
                    }
                },
                {
                    "match": "(?x)(?<!\\.|\\$)\\b(console)(?:\\s*(\\.)\\s*(\n  assert|clear|count|debug|dir|error|group|groupCollapsed|groupEnd|info|log\n  |profile|profileEnd|table|time|timeEnd|timeStamp|trace|warn))?\\b(?!\\$)",
                    "captures": {
                        "1": {
                            "name": "support.class.console.js"
                        },
                        "2": {
                            "name": "punctuation.accessor.js"
                        },
                        "3": {
                            "name": "support.function.console.js"
                        }
                    }
                },
                {
                    "match": "(?<!\\.|\\$)\\b(JSON)(?:\\s*(\\.)\\s*(parse|stringify))?\\b(?!\\$)",
                    "captures": {
                        "1": {
                            "name": "support.constant.json.js"
                        },
                        "2": {
                            "name": "punctuation.accessor.js"
                        },
                        "3": {
                            "name": "support.function.json.js"
                        }
                    }
                },
                {
                    "match": "(?x) (\\.) \\s* (?:\n  (constructor|length|prototype|__proto__) \n  |\n  (EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY))\\b(?!\\$)",
                    "captures": {
                        "1": {
                            "name": "punctuation.accessor.js"
                        },
                        "2": {
                            "name": "support.variable.property.js"
                        },
                        "3": {
                            "name": "support.constant.js"
                        }
                    }
                },
                {
                    "match": "(?x) (?<!\\.|\\$) \\b (?:\n  (document|event|navigator|performance|screen|window) \n  |\n  (AnalyserNode|ArrayBufferView|Attr|AudioBuffer|AudioBufferSourceNode|AudioContext|AudioDestinationNode|AudioListener\n  |AudioNode|AudioParam|BatteryManager|BeforeUnloadEvent|BiquadFilterNode|Blob|BufferSource|ByteString|CSS|CSSConditionRule\n  |CSSCounterStyleRule|CSSGroupingRule|CSSMatrix|CSSMediaRule|CSSPageRule|CSSPrimitiveValue|CSSRule|CSSRuleList|CSSStyleDeclaration\n  |CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSValue|CSSValueList|CanvasGradient|CanvasImageSource|CanvasPattern\n  |CanvasRenderingContext2D|ChannelMergerNode|ChannelSplitterNode|CharacterData|ChromeWorker|CloseEvent|Comment|CompositionEvent\n  |Console|ConvolverNode|Coordinates|Credential|CredentialsContainer|Crypto|CryptoKey|CustomEvent|DOMError|DOMException\n  |DOMHighResTimeStamp|DOMImplementation|DOMString|DOMStringList|DOMStringMap|DOMTimeStamp|DOMTokenList|DataTransfer\n  |DataTransferItem|DataTransferItemList|DedicatedWorkerGlobalScope|DelayNode|DeviceProximityEvent|DirectoryEntry\n  |DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|Document|DocumentFragment|DocumentTouch|DocumentType|DragEvent\n  |DynamicsCompressorNode|Element|Entry|EntrySync|ErrorEvent|Event|EventListener|EventSource|EventTarget|FederatedCredential\n  |FetchEvent|File|FileEntry|FileEntrySync|FileException|FileList|FileReader|FileReaderSync|FileSystem|FileSystemSync\n  |FontFace|FormData|GainNode|Gamepad|GamepadButton|GamepadEvent|Geolocation|GlobalEventHandlers|HTMLAnchorElement\n  |HTMLAreaElement|HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLCanvasElement\n  |HTMLCollection|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDialogElement|HTMLDivElement\n  |HTMLDocument|HTMLElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFormControlsCollection|HTMLFormElement\n  |HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement\n  |HTMLKeygenElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMediaElement\n  |HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement\n  |HTMLOptionsCollection|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPreElement|HTMLProgressElement\n  |HTMLQuoteElement|HTMLScriptElement|HTMLSelectElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement\n  |HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement\n  |HTMLTableRowElement|HTMLTableSectionElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement\n  |HTMLUListElement|HTMLUnknownElement|HTMLVideoElement|HashChangeEvent|History|IDBCursor|IDBCursorWithValue|IDBDatabase\n  |IDBEnvironment|IDBFactory|IDBIndex|IDBKeyRange|IDBMutableFile|IDBObjectStore|IDBOpenDBRequest|IDBRequest|IDBTransaction\n  |IDBVersionChangeEvent|IIRFilterNode|IdentityManager|ImageBitmap|ImageBitmapFactories|ImageData|Index|InputDeviceCapabilities\n  |InputEvent|InstallEvent|InstallTrigger|KeyboardEvent|LinkStyle|LocalFileSystem|LocalFileSystemSync|Location|MIDIAccess\n  |MIDIConnectionEvent|MIDIInput|MIDIInputMap|MIDIOutputMap|MediaElementAudioSourceNode|MediaError|MediaKeyMessageEvent\n  |MediaKeySession|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeySystemConfiguration|MediaKeys|MediaRecorder|MediaStream\n  |MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MessageChannel|MessageEvent|MessagePort|MouseEvent\n  |MutationObserver|MutationRecord|NamedNodeMap|Navigator|NavigatorConcurrentHardware|NavigatorGeolocation|NavigatorID\n  |NavigatorLanguage|NavigatorOnLine|Node|NodeFilter|NodeIterator|NodeList|NonDocumentTypeChildNode|Notification\n  |OfflineAudioCompletionEvent|OfflineAudioContext|OscillatorNode|PageTransitionEvent|PannerNode|ParentNode|PasswordCredential\n  |Path2D|PaymentAddress|PaymentRequest|PaymentResponse|Performance|PerformanceEntry|PerformanceFrameTiming|PerformanceMark\n  |PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList\n  |PerformanceResourceTiming|PerformanceTiming|PeriodicSyncEvent|PeriodicWave|Plugin|Point|PointerEvent|PopStateEvent\n  |PortCollection|Position|PositionError|PositionOptions|PresentationConnectionClosedEvent|PresentationConnectionList\n  |PresentationReceiver|ProcessingInstruction|ProgressEvent|PromiseRejectionEvent|PushEvent|PushRegistrationManager\n  |RTCCertificate|RTCConfiguration|RTCPeerConnection|RTCSessionDescriptionCallback|RTCStatsReport|RadioNodeList|RandomSource\n  |Range|ReadableByteStream|RenderingContext|SVGAElement|SVGAngle|SVGAnimateColorElement|SVGAnimateElement|SVGAnimateMotionElement\n  |SVGAnimateTransformElement|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength\n  |SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPoints|SVGAnimatedPreserveAspectRatio\n  |SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGAnimationElement|SVGCircleElement|SVGClipPathElement\n  |SVGCursorElement|SVGDefsElement|SVGDescElement|SVGElement|SVGEllipseElement|SVGEvent|SVGFilterElement|SVGFontElement\n  |SVGFontFaceElement|SVGFontFaceFormatElement|SVGFontFaceNameElement|SVGFontFaceSrcElement|SVGFontFaceUriElement\n  |SVGForeignObjectElement|SVGGElement|SVGGlyphElement|SVGGradientElement|SVGHKernElement|SVGImageElement|SVGLength\n  |SVGLengthList|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMaskElement|SVGMatrix|SVGMissingGlyphElement\n  |SVGNumber|SVGNumberList|SVGPathElement|SVGPatternElement|SVGPoint|SVGPolygonElement|SVGPolylineElement|SVGPreserveAspectRatio\n  |SVGRadialGradientElement|SVGRect|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStringList\n  |SVGStylable|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTRefElement|SVGTSpanElement|SVGTests|SVGTextElement\n  |SVGTextPositioningElement|SVGTitleElement|SVGTransform|SVGTransformList|SVGTransformable|SVGUseElement|SVGVKernElement\n  |SVGViewElement|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|ServiceWorkerState\n  |ShadowRoot|SharedWorker|SharedWorkerGlobalScope|SourceBufferList|StereoPannerNode|Storage|StorageEvent|StyleSheet\n  |StyleSheetList|SubtleCrypto|SyncEvent|Text|TextMetrics|TimeEvent|TimeRanges|Touch|TouchEvent|TouchList|Transferable\n  |TreeWalker|UIEvent|USVString|VRDisplayCapabilities|ValidityState|WaveShaperNode|WebGL|WebGLActiveInfo|WebGLBuffer\n  |WebGLContextEvent|WebGLFramebuffer|WebGLProgram|WebGLRenderbuffer|WebGLRenderingContext|WebGLShader|WebGLShaderPrecisionFormat\n  |WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES\n  |WebSocket|WebSockets|WebVTT|WheelEvent|Window|WindowBase64|WindowEventHandlers|WindowTimers|Worker|WorkerGlobalScope\n  |WorkerLocation|WorkerNavigator|XMLHttpRequest|XMLHttpRequestEventTarget|XMLSerializer|XPathExpression|XPathResult\n  |XSLTProcessor))\\b(?!\\$)",
                    "captures": {
                        "1": {
                            "name": "support.variable.dom.js"
                        },
                        "2": {
                            "name": "support.class.dom.js"
                        }
                    }
                },
                {
                    "match": "(?x) (\\.) \\s* (?:\n  (ATTRIBUTE_NODE|CDATA_SECTION_NODE|COMMENT_NODE|DOCUMENT_FRAGMENT_NODE|DOCUMENT_NODE|DOCUMENT_TYPE_NODE\n  |DOMSTRING_SIZE_ERR|ELEMENT_NODE|ENTITY_NODE|ENTITY_REFERENCE_NODE|HIERARCHY_REQUEST_ERR|INDEX_SIZE_ERR\n  |INUSE_ATTRIBUTE_ERR|INVALID_CHARACTER_ERR|NO_DATA_ALLOWED_ERR|NO_MODIFICATION_ALLOWED_ERR|NOT_FOUND_ERR\n  |NOT_SUPPORTED_ERR|NOTATION_NODE|PROCESSING_INSTRUCTION_NODE|TEXT_NODE|WRONG_DOCUMENT_ERR)\n  |\n  (_content|[xyz]|abbr|above|accept|acceptCharset|accessKey|action|align|[av]Link(?:color)?|all|alt|anchors|appCodeName\n  |appCore|applets|appMinorVersion|appName|appVersion|archive|areas|arguments|attributes|availHeight|availLeft|availTop\n  |availWidth|axis|background|backgroundColor|backgroundImage|below|bgColor|body|border|borderBottomWidth|borderColor\n  |borderLeftWidth|borderRightWidth|borderStyle|borderTopWidth|borderWidth|bottom|bufferDepth|callee|caller|caption\n  |cellPadding|cells|cellSpacing|ch|characterSet|charset|checked|childNodes|chOff|cite|classes|className|clear\n  |clientInformation|clip|clipBoardData|closed|code|codeBase|codeType|color|colorDepth|cols|colSpan|compact|complete\n  |components|content|controllers|cookie|cookieEnabled|cords|cpuClass|crypto|current|data|dateTime|declare|defaultCharset\n  |defaultChecked|defaultSelected|defaultStatus|defaultValue|defaultView|defer|description|dialogArguments|dialogHeight\n  |dialogLeft|dialogTop|dialogWidth|dir|directories|disabled|display|docmain|doctype|documentElement|elements|embeds\n  |enabledPlugin|encoding|enctype|entities|event|expando|external|face|fgColor|filename|firstChild|fontFamily|fontSize\n  |fontWeight|form|formName|forms|frame|frameBorder|frameElement|frames|hasFocus|hash|headers|height|history|host\n  |hostname|href|hreflang|hspace|htmlFor|httpEquiv|id|ids|ignoreCase|images|implementation|index|innerHeight|innerWidth\n  |input|isMap|label|lang|language|lastChild|lastIndex|lastMatch|lastModified|lastParen|layer[sXY]|left|leftContext\n  |lineHeight|link|linkColor|links|listStyleType|localName|location|locationbar|longDesc|lowsrc|lowSrc|marginBottom\n  |marginHeight|marginLeft|marginRight|marginTop|marginWidth|maxLength|media|menubar|method|mimeTypes|multiline|multiple\n  |name|nameProp|namespaces|namespaceURI|next|nextSibling|nodeName|nodeType|nodeValue|noHref|noResize|noShade|notationName\n  |notations|noWrap|object|offscreenBuffering|onLine|onreadystatechange|opener|opsProfile|options|oscpu|outerHeight\n  |outerWidth|ownerDocument|paddingBottom|paddingLeft|paddingRight|paddingTop|page[XY]|page[XY]Offset|parent|parentLayer\n  |parentNode|parentWindow|pathname|personalbar|pixelDepth|pkcs11|platform|plugins|port|prefix|previous|previousDibling\n  |product|productSub|profile|profileend|prompt|prompter|protocol|publicId|readOnly|readyState|referrer|rel|responseText\n  |responseXML|rev|right|rightContext|rowIndex|rows|rowSpan|rules|scheme|scope|screen[XY]|screenLeft|screenTop|scripts\n  |scrollbars|scrolling|sectionRowIndex|security|securityPolicy|selected|selectedIndex|selection|self|shape|siblingAbove\n  |siblingBelow|size|source|specified|standby|start|status|statusbar|statusText|style|styleSheets|suffixes|summary\n  |systemId|systemLanguage|tagName|tags|target|tBodies|text|textAlign|textDecoration|textIndent|textTransform|tFoot|tHead\n  |title|toolbar|top|type|undefined|uniqueID|updateInterval|URL|URLUnencoded|useMap|userAgent|userLanguage|userProfile\n  |vAlign|value|valueType|vendor|vendorSub|version|visibility|vspace|whiteSpace|width|X[MS]LDocument|zIndex))\\b(?!\\$|\\s*(<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\()",
                    "captures": {
                        "1": {
                            "name": "punctuation.accessor.js"
                        },
                        "2": {
                            "name": "support.constant.dom.js"
                        },
                        "3": {
                            "name": "support.variable.property.dom.js"
                        }
                    }
                },
                {
                    "name": "support.class.node.js",
                    "match": "(?x)(?<!\\.|\\$)\\b(Buffer|EventEmitter|Server|Pipe|Socket|REPLServer|ReadStream|WriteStream|Stream\n  |Inflate|Deflate|InflateRaw|DeflateRaw|GZip|GUnzip|Unzip|Zip)\\b(?!\\$)"
                },
                {
                    "name": "support.module.node.js",
                    "match": "(?x)(?<!\\.|\\$)\\b(assert|buffer|child_process|cluster|constants|crypto|dgram|dns|domain|events|fs|http|https|net\n  |os|path|punycode|querystring|readline|repl|stream|string_decoder|timers|tls|tty|url|util|vm|zlib)\\b(?!\\$)"
                },
                {
                    "match": "(?x)(?<!\\.|\\$)\\b(process)(?:(\\.)(?:\n  (arch|argv|config|connected|env|execArgv|execPath|exitCode|mainModule|pid|platform|release|stderr|stdin|stdout|title|version|versions)\n  |\n  (abort|chdir|cwd|disconnect|exit|[sg]ete?[gu]id|send|[sg]etgroups|initgroups|kill|memoryUsage|nextTick|umask|uptime|hrtime)\n))?\\b(?!\\$)",
                    "captures": {
                        "1": {
                            "name": "support.variable.object.process.js"
                        },
                        "2": {
                            "name": "punctuation.accessor.js"
                        },
                        "3": {
                            "name": "support.variable.property.process.js"
                        },
                        "4": {
                            "name": "support.function.process.js"
                        }
                    }
                },
                {
                    "match": "(?<!\\.|\\$)\\b(?:(exports)|(module)(?:(\\.)(exports|id|filename|loaded|parent|children))?)\\b(?!\\$)",
                    "captures": {
                        "1": {
                            "name": "support.type.object.module.js"
                        },
                        "2": {
                            "name": "support.type.object.module.js"
                        },
                        "3": {
                            "name": "punctuation.accessor.js"
                        },
                        "4": {
                            "name": "support.type.object.module.js"
                        }
                    }
                },
                {
                    "name": "support.variable.object.node.js",
                    "match": "(?<!\\.|\\$)\\b(global|GLOBAL|root|__dirname|__filename)\\b(?!\\$)"
                },
                {
                    "match": "(?x) (\\.) \\s* \n(?:\n (on(?:Rowsinserted|Rowsdelete|Rowenter|Rowexit|Resize|Resizestart|Resizeend|Reset|\n   Readystatechange|Mouseout|Mouseover|Mousedown|Mouseup|Mousemove|\n   Before(?:cut|deactivate|unload|update|paste|print|editfocus|activate)|\n   Blur|Scrolltop|Submit|Select|Selectstart|Selectionchange|Hover|Help|\n   Change|Contextmenu|Controlselect|Cut|Cellchange|Clock|Close|Deactivate|\n   Datasetchanged|Datasetcomplete|Dataavailable|Drop|Drag|Dragstart|Dragover|\n   Dragdrop|Dragenter|Dragend|Dragleave|Dblclick|Unload|Paste|Propertychange|Error|\n   Errorupdate|Keydown|Keyup|Keypress|Focus|Load|Activate|Afterupdate|Afterprint|Abort)\n ) |\n (shift|showModelessDialog|showModalDialog|showHelp|scroll|scrollX|scrollByPages|\n   scrollByLines|scrollY|scrollTo|stop|strike|sizeToContent|sidebar|signText|sort|\n   sup|sub|substr|substring|splice|split|send|set(?:Milliseconds|Seconds|Minutes|Hours|\n   Month|Year|FullYear|Date|UTC(?:Milliseconds|Seconds|Minutes|Hours|Month|FullYear|Date)|\n   Time|Hotkeys|Cursor|ZOptions|Active|Resizable|RequestHeader)|search|slice|\n   savePreferences|small|home|handleEvent|navigate|char|charCodeAt|charAt|concat|\n   contextual|confirm|compile|clear|captureEvents|call|createStyleSheet|createPopup|\n   createEventObject|to(?:GMTString|UTCString|String|Source|UpperCase|LowerCase|LocaleString)|\n   test|taint|taintEnabled|indexOf|italics|disableExternalCapture|dump|detachEvent|unshift|\n   untaint|unwatch|updateCommands|join|javaEnabled|pop|push|plugins.refresh|paddings|parse|\n   print|prompt|preference|enableExternalCapture|exec|execScript|valueOf|UTC|find|file|\n   fileModifiedDate|fileSize|fileCreatedDate|fileUpdatedDate|fixed|fontsize|fontcolor|\n   forward|fromCharCode|watch|link|load|lastIndexOf|anchor|attachEvent|atob|apply|alert|\n   abort|routeEvents|resize|resizeBy|resizeTo|recalc|returnValue|replace|reverse|reload|\n   releaseCapture|releaseEvents|go|get(?:Milliseconds|Seconds|Minutes|Hours|Month|Day|Year|FullYear|\n   Time|Date|TimezoneOffset|UTC(?:Milliseconds|Seconds|Minutes|Hours|Day|Month|FullYear|Date)|\n   Attention|Selection|ResponseHeader|AllResponseHeaders)|moveBy|moveBelow|moveTo|\n   moveToAbsolute|moveAbove|mergeAttributes|match|margins|btoa|big|bold|borderWidths|blink|back\n ) |\n (acceptNode|add|addEventListener|addTextTrack|adoptNode|after|animate|append|\n   appendChild|appendData|before|blur|canPlayType|captureStream|\n   caretPositionFromPoint|caretRangeFromPoint|checkValidity|clear|click|\n   cloneContents|cloneNode|cloneRange|close|closest|collapse|\n   compareBoundaryPoints|compareDocumentPosition|comparePoint|contains|\n   convertPointFromNode|convertQuadFromNode|convertRectFromNode|createAttribute|\n   createAttributeNS|createCaption|createCDATASection|createComment|\n   createContextualFragment|createDocument|createDocumentFragment|\n   createDocumentType|createElement|createElementNS|createEntityReference|\n   createEvent|createExpression|createHTMLDocument|createNodeIterator|\n   createNSResolver|createProcessingInstruction|createRange|createShadowRoot|\n   createTBody|createTextNode|createTFoot|createTHead|createTreeWalker|delete|\n   deleteCaption|deleteCell|deleteContents|deleteData|deleteRow|deleteTFoot|\n   deleteTHead|detach|disconnect|dispatchEvent|elementFromPoint|elementsFromPoint|\n   enableStyleSheetsForSet|entries|evaluate|execCommand|exitFullscreen|\n   exitPointerLock|expand|extractContents|fastSeek|firstChild|focus|forEach|get|\n   getAll|getAnimations|getAttribute|getAttributeNames|getAttributeNode|\n   getAttributeNodeNS|getAttributeNS|getBoundingClientRect|getBoxQuads|\n   getClientRects|getContext|getDestinationInsertionPoints|getElementById|\n   getElementsByClassName|getElementsByName|getElementsByTagName|\n   getElementsByTagNameNS|getItem|getNamedItem|getSelection|getStartDate|\n   getVideoPlaybackQuality|has|hasAttribute|hasAttributeNS|hasAttributes|\n   hasChildNodes|hasFeature|hasFocus|importNode|initEvent|insertAdjacentElement|\n   insertAdjacentHTML|insertAdjacentText|insertBefore|insertCell|insertData|\n   insertNode|insertRow|intersectsNode|isDefaultNamespace|isEqualNode|\n   isPointInRange|isSameNode|item|key|keys|lastChild|load|lookupNamespaceURI|\n   lookupPrefix|matches|move|moveAttribute|moveAttributeNode|moveChild|\n   moveNamedItem|namedItem|nextNode|nextSibling|normalize|observe|open|\n   parentNode|pause|play|postMessage|prepend|preventDefault|previousNode|\n   previousSibling|probablySupportsContext|queryCommandEnabled|\n   queryCommandIndeterm|queryCommandState|queryCommandSupported|queryCommandValue|\n   querySelector|querySelectorAll|registerContentHandler|registerElement|\n   registerProtocolHandler|releaseCapture|releaseEvents|remove|removeAttribute|\n   removeAttributeNode|removeAttributeNS|removeChild|removeEventListener|\n   removeItem|replace|replaceChild|replaceData|replaceWith|reportValidity|\n   requestFullscreen|requestPointerLock|reset|scroll|scrollBy|scrollIntoView|\n   scrollTo|seekToNextFrame|select|selectNode|selectNodeContents|set|setAttribute|\n   setAttributeNode|setAttributeNodeNS|setAttributeNS|setCapture|\n   setCustomValidity|setEnd|setEndAfter|setEndBefore|setItem|setNamedItem|\n   setRangeText|setSelectionRange|setSinkId|setStart|setStartAfter|setStartBefore|\n   slice|splitText|stepDown|stepUp|stopImmediatePropagation|stopPropagation|\n   submit|substringData|supports|surroundContents|takeRecords|terminate|toBlob|\n   toDataURL|toggle|toString|values|write|writeln\n )\n)(?=\\s*\\()",
                    "captures": {
                        "1": {
                            "name": "punctuation.accessor.js"
                        },
                        "2": {
                            "name": "support.function.event-handler.js"
                        },
                        "3": {
                            "name": "support.function.js"
                        },
                        "4": {
                            "name": "support.function.dom.js"
                        }
                    }
                }
            ]
        },
        "function-call": {
            "begin": "(?=(\\.\\s*)?([_$[:alpha:]][_$[:alnum:]]*)\\s*(<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\()",
            "end": "(?<=\\))(?!(\\.\\s*)?([_$[:alpha:]][_$[:alnum:]]*)\\s*(<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\()",
            "patterns": [
                {
                    "include": "#support-objects"
                },
                {
                    "name": "punctuation.accessor.js",
                    "match": "\\."
                },
                {
                    "name": "entity.name.function.js",
                    "match": "([_$[:alpha:]][_$[:alnum:]]*)"
                },
                {
                    "include": "#comment"
                },
                {
                    "name": "meta.type.parameters.js",
                    "begin": "\\<",
                    "beginCaptures": {
                        "0": {
                            "name": "punctuation.definition.typeparameters.begin.js"
                        }
                    },
                    "end": "\\>",
                    "endCaptures": {
                        "0": {
                            "name": "punctuation.definition.typeparameters.end.js"
                        }
                    },
                    "patterns": [
                        {
                            "include": "#type"
                        },
                        {
                            "include": "#punctuation-comma"
                        }
                    ]
                },
                {
                    "include": "#paren-expression"
                }
            ]
        },
        "identifiers": {
            "patterns": [
                {
                    "name": "support.class.js",
                    "match": "([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*\\.\\s*prototype\\b(?!\\$))"
                },
                {
                    "match": "(?x)(\\.)\\s*(?:\n  ([[:upper:]][_$[:digit:][:upper:]]*) |\n  ([_$[:alpha:]][_$[:alnum:]]*)\n)(?=\\s*\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)",
                    "captures": {
                        "1": {
                            "name": "punctuation.accessor.js"
                        },
                        "2": {
                            "name": "constant.other.object.property.js"
                        },
                        "3": {
                            "name": "variable.other.object.property.js"
                        }
                    }
                },
                {
                    "match": "(?x)(?:(\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*=\\s*( (async\\s+)|(function\\s*[(<])|(function\\s+)| ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)| ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>)))",
                    "captures": {
                        "1": {
                            "name": "punctuation.accessor.js"
                        },
                        "2": {
                            "name": "entity.name.function.js"
                        }
                    }
                },
                {
                    "match": "(\\.)\\s*([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])",
                    "captures": {
                        "1": {
                            "name": "punctuation.accessor.js"
                        },
                        "2": {
                            "name": "constant.other.property.js"
                        }
                    }
                },
                {
                    "match": "(\\.)\\s*([_$[:alpha:]][_$[:alnum:]]*)",
                    "captures": {
                        "1": {
                            "name": "punctuation.accessor.js"
                        },
                        "2": {
                            "name": "variable.other.property.js"
                        }
                    }
                },
                {
                    "match": "(?x)(?:\n  ([[:upper:]][_$[:digit:][:upper:]]*) |\n  ([_$[:alpha:]][_$[:alnum:]]*)\n)(?=\\s*\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)",
                    "captures": {
                        "1": {
                            "name": "constant.other.object.js"
                        },
                        "2": {
                            "name": "variable.other.object.js"
                        }
                    }
                },
                {
                    "name": "constant.other.js",
                    "match": "([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])"
                },
                {
                    "name": "variable.other.readwrite.js",
                    "match": "[_$[:alpha:]][_$[:alnum:]]*"
                }
            ]
        },
        "cast": {
            "patterns": [
                {
                    "include": "#jsx"
                }
            ]
        },
        "new-expr": {
            "name": "new.expr.js",
            "begin": "(?<!\\.|\\$)\\b(new)\\b(?!\\$)",
            "beginCaptures": {
                "1": {
                    "name": "keyword.operator.new.js"
                }
            },
            "end": "(?<=\\))|(?=[;),]|$|((?<!\\.|\\$)\\bnew\\b(?!\\$)))",
            "patterns": [
                {
                    "include": "#paren-expression"
                },
                {
                    "include": "#class-or-interface-declaration"
                },
                {
                    "include": "#type"
                }
            ]
        },
        "object-member": {
            "patterns": [
                {
                    "include": "#comment"
                },
                {
                    "include": "#method-declaration"
                },
                {
                    "name": "meta.object.member.js",
                    "begin": "(?=(?:(?:\\'[^']*\\')|(?:\\\"[^\"]*\\\")|(?:\\[([^\\[\\]]|\\[[^\\[\\]]+\\])+\\]))\\s*:)",
                    "end": "(?=,|\\})",
                    "patterns": [
                        {
                            "name": "meta.object-literal.key.js",
                            "begin": "(?=(?:(?:\\'[^']*\\')|(?:\\\"[^\"]*\\\")|(?:\\[([^\\[\\]]|\\[[^\\[\\]]+\\])+\\]))\\s*:)",
                            "end": ":",
                            "endCaptures": {
                                "0": {
                                    "name": "punctuation.separator.key-value.js"
                                }
                            },
                            "patterns": [
                                {
                                    "include": "#string"
                                },
                                {
                                    "include": "#array-literal"
                                }
                            ]
                        },
                        {
                            "include": "#expression"
                        }
                    ]
                },
                {
                    "name": "meta.object.member.js",
                    "begin": "(?x)(?:([_$[:alpha:]][_$[:alnum:]]*)\\s*(:)(?=\\s*( (async\\s+)|(function\\s*[(<])|(function\\s+)| ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)| ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>))))",
                    "beginCaptures": {
                        "0": {
                            "name": "meta.object-literal.key.js"
                        },
                        "1": {
                            "name": "entity.name.function.js"
                        },
                        "2": {
                            "name": "punctuation.separator.key-value.js"
                        }
                    },
                    "end": "(?=,|\\})",
                    "patterns": [
                        {
                            "include": "#expression"
                        }
                    ]
                },
                {
                    "name": "meta.object.member.js",
                    "begin": "(?:[_$[:alpha:]][_$[:alnum:]]*)\\s*(:)",
                    "beginCaptures": {
                        "0": {
                            "name": "meta.object-literal.key.js"
                        },
                        "1": {
                            "name": "punctuation.separator.key-value.js"
                        }
                    },
                    "end": "(?=,|\\})",
                    "patterns": [
                        {
                            "include": "#expression"
                        }
                    ]
                },
                {
                    "name": "meta.object.member.js",
                    "begin": "\\.\\.\\.",
                    "beginCaptures": {
                        "0": {
                            "name": "keyword.operator.spread.js"
                        }
                    },
                    "end": "(?=,|\\})",
                    "patterns": [
                        {
                            "include": "#expression"
                        }
                    ]
                },
                {
                    "name": "meta.object.member.js",
                    "match": "([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=,|\\}|$)",
                    "captures": {
                        "1": {
                            "name": "variable.other.readwrite.js"
                        }
                    }
                },
                {
                    "include": "#punctuation-comma"
                }
            ]
        },
        "expression-operators": {
            "patterns": [
                {
                    "name": "keyword.control.flow.js",
                    "match": "(?<!\\.|\\$)\\b(await)\\b(?!\\$)"
                },
                {
                    "name": "keyword.operator.expression.delete.js",
                    "match": "(?<!\\.|\\$)\\bdelete\\b(?!\\$)"
                },
                {
                    "name": "keyword.operator.expression.in.js",
                    "match": "(?<!\\.|\\$)\\bin\\b(?!\\$)"
                },
                {
                    "name": "keyword.operator.expression.of.js",
                    "match": "(?<!\\.|\\$)\\bof\\b(?!\\$)"
                },
                {
                    "name": "keyword.operator.expression.instanceof.js",
                    "match": "(?<!\\.|\\$)\\binstanceof\\b(?!\\$)"
                },
                {
                    "name": "keyword.operator.new.js",
                    "match": "(?<!\\.|\\$)\\bnew\\b(?!\\$)"
                },
                {
                    "include": "#typeof-operator"
                },
                {
                    "name": "keyword.operator.expression.void.js",
                    "match": "(?<!\\.|\\$)\\bvoid\\b(?!\\$)"
                },
                {
                    "begin": "(?<!\\.|\\$)\\bas\\b(?!\\$)",
                    "beginCaptures": {
                        "0": {
                            "name": "keyword.control.as.js"
                        }
                    },
                    "end": "(?=$|[;,:})\\]])",
                    "patterns": [
                        {
                            "include": "#type"
                        }
                    ]
                },
                {
                    "name": "keyword.operator.spread.js",
                    "match": "\\.\\.\\."
                },
                {
                    "name": "keyword.operator.assignment.compound.js",
                    "match": "\\*=|(?<!\\()/=|%=|\\+=|\\-="
                },
                {
                    "name": "keyword.operator.assignment.compound.bitwise.js",
                    "match": "\\&=|\\^=|<<=|>>=|>>>=|\\|="
                },
                {
                    "name": "keyword.operator.bitwise.shift.js",
                    "match": "<<|>>>|>>"
                },
                {
                    "name": "keyword.operator.comparison.js",
                    "match": "===|!==|==|!="
                },
                {
                    "name": "keyword.operator.relational.js",
                    "match": "<=|>=|<>|<|>"
                },
                {
                    "name": "keyword.operator.logical.js",
                    "match": "\\!|&&|\\|\\|"
                },
                {
                    "name": "keyword.operator.bitwise.js",
                    "match": "\\&|~|\\^|\\|"
                },
                {
                    "name": "keyword.operator.assignment.js",
                    "match": "\\="
                },
                {
                    "name": "keyword.operator.decrement.js",
                    "match": "--"
                },
                {
                    "name": "keyword.operator.increment.js",
                    "match": "\\+\\+"
                },
                {
                    "name": "keyword.operator.arithmetic.js",
                    "match": "%|\\*|/|-|\\+"
                },
                {
                    "match": "(?<=[_$[:alnum:]])\\s*(/)(?![/*])",
                    "captures": {
                        "1": {
                            "name": "keyword.operator.arithmetic.js"
                        }
                    }
                }
            ]
        },
        "typeof-operator": {
            "name": "keyword.operator.expression.typeof.js",
            "match": "(?<!\\.|\\$)\\btypeof\\b(?!\\$)"
        },
        "arrow-function": {
            "patterns": [
                {
                    "name": "meta.arrow.js",
                    "match": "(?<!\\.|\\$)(\\basync)(?=\\s*[<(])",
                    "captures": {
                        "1": {
                            "name": "storage.modifier.async.js"
                        }
                    }
                },
                {
                    "name": "meta.arrow.js",
                    "match": "(?:(?<!\\.|\\$)(\\basync)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)\\s*(?==>)",
                    "captures": {
                        "1": {
                            "name": "storage.modifier.async.js"
                        },
                        "2": {
                            "name": "variable.parameter.js"
                        }
                    }
                },
                {
                    "name": "meta.arrow.js",
                    "begin": "(?x)\\s*(?=(<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>)",
                    "end": "(?==>)",
                    "patterns": [
                        {
                            "include": "#comment"
                        },
                        {
                            "include": "#type-parameters"
                        },
                        {
                            "include": "#function-parameters"
                        },
                        {
                            "include": "#arrow-return-type"
                        }
                    ]
                },
                {
                    "name": "meta.arrow.js",
                    "begin": "=>",
                    "beginCaptures": {
                        "0": {
                            "name": "storage.type.function.arrow.js"
                        }
                    },
                    "end": "(?<=\\})|((?!\\{)(?=\\S))",
                    "patterns": [
                        {
                            "include": "#decl-block"
                        },
                        {
                            "include": "#expression"
                        }
                    ]
                }
            ]
        },
        "arrow-return-type": {
            "name": "meta.return.type.arrow.js",
            "begin": "(?<=\\))\\s*(:)",
            "beginCaptures": {
                "1": {
                    "name": "keyword.operator.type.annotation.js"
                }
            },
            "end": "(?<!:)((?=$)|(?==>|;|//))",
            "patterns": [
                {
                    "include": "#type-predicate-operator"
                },
                {
                    "include": "#type"
                }
            ]
        },
        "punctuation-comma": {
            "name": "punctuation.separator.comma.js",
            "match": ","
        },
        "punctuation-semicolon": {
            "name": "punctuation.terminator.statement.js",
            "match": ";"
        },
        "punctuation-accessor": {
            "name": "punctuation.accessor.js",
            "match": "\\."
        },
        "paren-expression": {
            "begin": "\\(",
            "beginCaptures": {
                "0": {
                    "name": "meta.brace.round.js"
                }
            },
            "end": "\\)",
            "endCaptures": {
                "0": {
                    "name": "meta.brace.round.js"
                }
            },
            "patterns": [
                {
                    "include": "#expression"
                },
                {
                    "include": "#punctuation-comma"
                }
            ]
        },
        "qstring-double": {
            "name": "string.quoted.double.js",
            "begin": "\"",
            "beginCaptures": {
                "0": {
                    "name": "punctuation.definition.string.begin.js"
                }
            },
            "end": "(\")|((?:[^\\\\\\n])$)",
            "endCaptures": {
                "1": {
                    "name": "punctuation.definition.string.end.js"
                },
                "2": {
                    "name": "invalid.illegal.newline.js"
                }
            },
            "patterns": [
                {
                    "include": "#string-character-escape"
                }
            ]
        },
        "qstring-single": {
            "name": "string.quoted.single.js",
            "begin": "'",
            "beginCaptures": {
                "0": {
                    "name": "punctuation.definition.string.begin.js"
                }
            },
            "end": "(\\')|((?:[^\\\\\\n])$)",
            "endCaptures": {
                "1": {
                    "name": "punctuation.definition.string.end.js"
                },
                "2": {
                    "name": "invalid.illegal.newline.js"
                }
            },
            "patterns": [
                {
                    "include": "#string-character-escape"
                }
            ]
        },
        "regex": {
            "patterns": [
                {
                    "name": "string.regex.js",
                    "begin": "(?<=[=(:,\\[?+!]|return|case|=>|&&|\\|\\||\\*\\/)\\s*(/)(?![/*])(?=(?:[^/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\])+/(?![/*])[gimy]*(?!\\s*[a-zA-Z0-9_$]))",
                    "beginCaptures": {
                        "1": {
                            "name": "punctuation.definition.string.begin.js"
                        }
                    },
                    "end": "(/)([gimuy]*)",
                    "endCaptures": {
                        "1": {
                            "name": "punctuation.definition.string.end.js"
                        },
                        "2": {
                            "name": "keyword.other.js"
                        }
                    },
                    "patterns": [
                        {
                            "include": "#regexp"
                        }
                    ]
                },
                {
                    "name": "string.regex.js",
                    "begin": "(?<![_$[:alnum:]])/(?![/*])(?=(?:[^/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)+\\])+/(?![/*])[gimy]*(?!\\s*[a-zA-Z0-9_$]))",
                    "beginCaptures": {
                        "0": {
                            "name": "punctuation.definition.string.begin.js"
                        }
                    },
                    "end": "(/)([gimuy]*)",
                    "endCaptures": {
                        "1": {
                            "name": "punctuation.definition.string.end.js"
                        },
                        "2": {
                            "name": "keyword.other.js"
                        }
                    },
                    "patterns": [
                        {
                            "include": "#regexp"
                        }
                    ]
                }
            ]
        },
        "regexp": {
            "patterns": [
                {
                    "name": "keyword.control.anchor.regexp",
                    "match": "\\\\[bB]|\\^|\\$"
                },
                {
                    "name": "keyword.other.back-reference.regexp",
                    "match": "\\\\[1-9]\\d*"
                },
                {
                    "name": "keyword.operator.quantifier.regexp",
                    "match": "[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??"
                },
                {
                    "name": "keyword.operator.or.regexp",
                    "match": "\\|"
                },
                {
                    "name": "meta.group.assertion.regexp",
                    "begin": "(\\()((\\?=)|(\\?!))",
                    "beginCaptures": {
                        "1": {
                            "name": "punctuation.definition.group.regexp"
                        },
                        "2": {
                            "name": "punctuation.definition.group.assertion.regexp"
                        },
                        "3": {
                            "name": "meta.assertion.look-ahead.regexp"
                        },
                        "4": {
                            "name": "meta.assertion.negative-look-ahead.regexp"
                        }
                    },
                    "end": "(\\))",
                    "endCaptures": {
                        "1": {
                            "name": "punctuation.definition.group.regexp"
                        }
                    },
                    "patterns": [
                        {
                            "include": "#regexp"
                        }
                    ]
                },
                {
                    "name": "meta.group.regexp",
                    "begin": "\\((\\?:)?",
                    "beginCaptures": {
                        "0": {
                            "name": "punctuation.definition.group.regexp"
                        },
                        "1": {
                            "name": "punctuation.definition.group.capture.regexp"
                        }
                    },
                    "end": "\\)",
                    "endCaptures": {
                        "0": {
                            "name": "punctuation.definition.group.regexp"
                        }
                    },
                    "patterns": [
                        {
                            "include": "#regexp"
                        }
                    ]
                },
                {
                    "name": "constant.other.character-class.set.regexp",
                    "begin": "(\\[)(\\^)?",
                    "beginCaptures": {
                        "1": {
                            "name": "punctuation.definition.character-class.regexp"
                        },
                        "2": {
                            "name": "keyword.operator.negation.regexp"
                        }
                    },
                    "end": "(\\])",
                    "endCaptures": {
                        "1": {
                            "name": "punctuation.definition.character-class.regexp"
                        }
                    },
                    "patterns": [
                        {
                            "name": "constant.other.character-class.range.regexp",
                            "match": "(?:.|(\\\\(?:[0-7]{3}|x\\h\\h|u\\h\\h\\h\\h))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x\\h\\h|u\\h\\h\\h\\h))|(\\\\c[A-Z])|(\\\\.))",
                            "captures": {
                                "1": {
                                    "name": "constant.character.numeric.regexp"
                                },
                                "2": {
                                    "name": "constant.character.control.regexp"
                                },
                                "3": {
                                    "name": "constant.character.escape.backslash.regexp"
                                },
                                "4": {
                                    "name": "constant.character.numeric.regexp"
                                },
                                "5": {
                                    "name": "constant.character.control.regexp"
                                },
                                "6": {
                                    "name": "constant.character.escape.backslash.regexp"
                                }
                            }
                        },
                        {
                            "include": "#regex-character-class"
                        }
                    ]
                },
                {
                    "include": "#regex-character-class"
                }
            ]
        },
        "regex-character-class": {
            "patterns": [
                {
                    "name": "constant.other.character-class.regexp",
                    "match": "\\\\[wWsSdDtrnvf]|\\."
                },
                {
                    "name": "constant.character.numeric.regexp",
                    "match": "\\\\([0-7]{3}|x\\h\\h|u\\h\\h\\h\\h)"
                },
                {
                    "name": "constant.character.control.regexp",
                    "match": "\\\\c[A-Z]"
                },
                {
                    "name": "constant.character.escape.backslash.regexp",
                    "match": "\\\\."
                }
            ]
        },
        "string": {
            "patterns": [
                {
                    "include": "#qstring-single"
                },
                {
                    "include": "#qstring-double"
                }
            ]
        },
        "template": {
            "name": "string.template.js",
            "begin": "([_$[:alpha:]][_$[:alnum:]]*)?(`)",
            "beginCaptures": {
                "1": {
                    "name": "entity.name.function.tagged-template.js"
                },
                "2": {
                    "name": "punctuation.definition.string.template.begin.js"
                }
            },
            "end": "`",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.string.template.end.js"
                }
            },
            "patterns": [
                {
                    "include": "#template-substitution-element"
                },
                {
                    "include": "#string-character-escape"
                }
            ]
        },
        "string-character-escape": {
            "name": "constant.character.escape.js",
            "match": "\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)"
        },
        "template-substitution-element": {
            "name": "meta.template.expression.js",
            "begin": "\\$\\{",
            "beginCaptures": {
                "0": {
                    "name": "punctuation.definition.template-expression.begin.js"
                }
            },
            "end": "\\}",
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.template-expression.end.js"
                }
            },
            "patterns": [
                {
                    "include": "#expression"
                }
            ]
        },
        "literal": {
            "name": "literal.js",
            "patterns": [
                {
                    "include": "#numeric-literal"
                },
                {
                    "include": "#boolean-literal"
                },
                {
                    "include": "#null-literal"
                },
                {
                    "include": "#undefined-literal"
                },
                {
                    "include": "#numericConstant-literal"
                },
                {
                    "include": "#array-literal"
                },
                {
                    "include": "#this-literal"
                },
                {
                    "include": "#super-literal"
                }
            ]
        },
        "array-literal": {
            "name": "meta.array.literal.js",
            "begin": "\\[",
            "beginCaptures": {
                "0": {
                    "name": "meta.brace.square.js"
                }
            },
            "end": "\\]",
            "endCaptures": {
                "0": {
                    "name": "meta.brace.square.js"
                }
            },
            "patterns": [
                {
                    "include": "#expression"
                },
                {
                    "include": "#punctuation-comma"
                }
            ]
        },
        "numeric-literal": {
            "patterns": [
                {
                    "name": "constant.numeric.hex.js",
                    "match": "\\b(?<!\\$)0(x|X)[0-9a-fA-F]+\\b(?!\\$)"
                },
                {
                    "name": "constant.numeric.binary.js",
                    "match": "\\b(?<!\\$)0(b|B)[01]+\\b(?!\\$)"
                },
                {
                    "name": "constant.numeric.octal.js",
                    "match": "\\b(?<!\\$)0(o|O)?[0-7]+\\b(?!\\$)"
                },
                {
                    "match": "(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+(\\.)[eE][+-]?[0-9]+\\b)|       # 1.E+3\n  (?:\\B(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|       # .1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+(\\.)\\B)|                      # 1.\n  (?:\\B(\\.)[0-9]+\\b)|                      # .1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)",
                    "captures": {
                        "0": {
                            "name": "constant.numeric.decimal.js"
                        },
                        "1": {
                            "name": "meta.delimiter.decimal.period.js"
                        },
                        "2": {
                            "name": "meta.delimiter.decimal.period.js"
                        },
                        "3": {
                            "name": "meta.delimiter.decimal.period.js"
                        },
                        "4": {
                            "name": "meta.delimiter.decimal.period.js"
                        },
                        "5": {
                            "name": "meta.delimiter.decimal.period.js"
                        },
                        "6": {
                            "name": "meta.delimiter.decimal.period.js"
                        }
                    }
                }
            ]
        },
        "boolean-literal": {
            "patterns": [
                {
                    "name": "constant.language.boolean.true.js",
                    "match": "(?<!\\.|\\$)\\btrue\\b(?!\\$)"
                },
                {
                    "name": "constant.language.boolean.false.js",
                    "match": "(?<!\\.|\\$)\\bfalse\\b(?!\\$)"
                }
            ]
        },
        "null-literal": {
            "name": "constant.language.null.js",
            "match": "(?<!\\.|\\$)\\bnull\\b(?!\\$)"
        },
        "this-literal": {
            "name": "variable.language.this.js",
            "match": "(?<!\\.|\\$)\\bthis\\b(?!\\$)"
        },
        "super-literal": {
            "name": "variable.language.super.js",
            "match": "(?<!\\.|\\$)\\bsuper\\b(?!\\$)"
        },
        "undefined-literal": {
            "name": "constant.language.undefined.js",
            "match": "(?<!\\.|\\$)\\bundefined\\b(?!\\$)"
        },
        "numericConstant-literal": {
            "patterns": [
                {
                    "name": "constant.language.nan.js",
                    "match": "(?<!\\.|\\$)\\bNaN\\b(?!\\$)"
                },
                {
                    "name": "constant.language.infinity.js",
                    "match": "(?<!\\.|\\$)\\bInfinity\\b(?!\\$)"
                }
            ]
        },
        "access-modifier": {
            "name": "storage.modifier.js",
            "match": "(?<!\\.|\\$)\\b(abstract|public|protected|private|readonly|static)\\b(?!\\$)"
        },
        "property-accessor": {
            "name": "storage.type.property.js",
            "match": "(?<!\\.|\\$)\\b(get|set)\\b(?!\\$)"
        },
        "comment": {
            "patterns": [
                {
                    "name": "comment.block.documentation.js",
                    "begin": "/\\*\\*(?!/)",
                    "beginCaptures": {
                        "0": {
                            "name": "punctuation.definition.comment.js"
                        }
                    },
                    "end": "\\*/",
                    "endCaptures": {
                        "0": {
                            "name": "punctuation.definition.comment.js"
                        }
                    },
                    "patterns": [
                        {
                            "include": "#docblock"
                        }
                    ]
                },
                {
                    "name": "comment.block.js",
                    "begin": "/\\*",
                    "beginCaptures": {
                        "0": {
                            "name": "punctuation.definition.comment.js"
                        }
                    },
                    "end": "\\*/",
                    "endCaptures": {
                        "0": {
                            "name": "punctuation.definition.comment.js"
                        }
                    }
                },
                {
                    "begin": "(^[ \\t]+)?(?=//)",
                    "beginCaptures": {
                        "1": {
                            "name": "punctuation.whitespace.comment.leading.js"
                        }
                    },
                    "end": "(?=$)",
                    "patterns": [
                        {
                            "name": "comment.line.double-slash.js",
                            "begin": "//",
                            "beginCaptures": {
                                "0": {
                                    "name": "punctuation.definition.comment.js"
                                }
                            },
                            "end": "(?=$)"
                        }
                    ]
                }
            ]
        },
        "directives": {
            "name": "comment.line.triple-slash.directive.js",
            "begin": "^(///)\\s*(?=<(reference|amd-dependency|amd-module)(\\s+(path|types|no-default-lib|name)\\s*=\\s*((\\'[^']*\\')|(\\\"[^\"]*\\\")))+\\s*/>\\s*$)",
            "beginCaptures": {
                "1": {
                    "name": "punctuation.definition.comment.js"
                }
            },
            "end": "(?=$)",
            "patterns": [
                {
                    "name": "meta.tag.js",
                    "begin": "(<)(reference|amd-dependency|amd-module)",
                    "beginCaptures": {
                        "1": {
                            "name": "punctuation.definition.tag.directive.js"
                        },
                        "2": {
                            "name": "entity.name.tag.directive.js"
                        }
                    },
                    "end": "/>",
                    "endCaptures": {
                        "0": {
                            "name": "punctuation.definition.tag.directive.js"
                        }
                    },
                    "patterns": [
                        {
                            "name": "entity.other.attribute-name.directive.js",
                            "match": "path|types|no-default-lib|name"
                        },
                        {
                            "name": "keyword.operator.assignment.js",
                            "match": "="
                        },
                        {
                            "include": "#string"
                        }
                    ]
                }
            ]
        },
        "docblock": {
            "patterns": [
                {
                    "name": "storage.type.class.jsdoc",
                    "match": "(?<!\\w)@(abstract|access|alias|arg|argument|async|attribute|augments|author|beta|borrows|bubbes|callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright|default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exports?|extends|extension|extension_for|extensionfor|external|file|fileoverview|final|fires|for|function|global|host|ignore|implements|inherit[Dd]oc|inner|instance|interface|kind|lends|license|listens|main|member|memberof|method|mixex|mixins?|module|name|namespace|nocollapse|nosideeffects|override|overview|package|param|preserve|private|prop|property|protected|public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation|version|virtual|writeOnce)\\b"
                },
                {
                    "match": "(?x)\n(?:(?<=@param)|(?<=@arg)|(?<=@argument)|(?<=@type))\n\\s+\n({(?:\n  \\* |                                        # {*} any type\n  \\? |                                        # {?} unknown type\n  (?:                                         # Check for a prefix\n    \\? |                                      # {?string} nullable type\n    !   |                                     # {!string} non-nullable type\n    \\.{3}                                     # {...string} variable number of parameters\n  )?\n  (?:\n    \\(                                        # Opening bracket of multiple types with parenthesis {(string|number)}\n      [a-zA-Z_$]+\n      (?:\n        (?:\n          [\\w$]*\n          (?:\\[\\])?                           # {(string[]|number)} type application, an array of strings or a number\n        ) |\n        \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>            # {Array<string>} or {Object<string, number>} type application (optional .)\n      )\n      (?:\n        [\\.|~]                                # {Foo.bar} namespaced, {string|number} multiple, {Foo~bar} class-specific callback\n        [a-zA-Z_$]+\n        (?:\n          (?:\n            [\\w$]*\n            (?:\\[\\])?                        # {(string|number[])} type application, a string or an array of numbers\n          ) |\n          \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>         # {Array<string>} or {Object<string, number>} type application (optional .)\n        )\n      )*\n    \\) |\n    [a-zA-Z_$]+\n    (?:\n      (?:\n        [\\w$]*\n        (?:\\[\\])?                            # {string[]|number} type application, an array of strings or a number\n      ) |\n      \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>             # {Array<string>} or {Object<string, number>} type application (optional .)\n    )\n    (?:\n      [\\.|~]                                 # {Foo.bar} namespaced, {string|number} multiple, {Foo~bar} class-specific callback\n      [a-zA-Z_$]+\n      (?:\n        [\\w$]* |\n        \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>           # {Array<string>} or {Object<string, number>} type application (optional .)\n      )\n    )*\n  )\n                                             # Check for suffix\n  (?:\\[\\])?                                  # {string[]} type application, an array of strings\n  =?                                         # {string=} optional parameter\n)})\n\\s+\n(\n  \\[                                         # [foo] optional parameter\n    \\s*\n    (?:\n      [a-zA-Z_$][\\w$]*\n      (?:\n        (?:\\[\\])?                            # Foo[].bar properties within an array\n        \\.                                   # Foo.Bar namespaced parameter\n        [a-zA-Z_$][\\w$]*\n      )*\n      (?:\n        \\s*\n        =                                    # [foo=bar] Default parameter value\n        \\s*\n        [\\w$\\s]*\n      )?\n    )\n    \\s*\n  \\] |\n  (?:\n    [a-zA-Z_$][\\w$]*\n    (?:\n      (?:\\[\\])?                              # Foo[].bar properties within an array\n      \\.                                     # Foo.Bar namespaced parameter\n      [a-zA-Z_$][\\w$]*\n    )*\n  )?\n)\n\\s+\n(?:-\\s+)?                                    # optional hyphen before the description\n((?:(?!\\*\\/).)*)                             # The type description",
                    "captures": {
                        "0": {
                            "name": "other.meta.jsdoc"
                        },
                        "1": {
                            "name": "entity.name.type.instance.jsdoc"
                        },
                        "2": {
                            "name": "variable.other.jsdoc"
                        },
                        "3": {
                            "name": "other.description.jsdoc"
                        }
                    }
                },
                {
                    "match": "(?x)\n({(?:\n  \\* |                                       # {*} any type\n  \\? |                                       # {?} unknown type\n\n  (?:                                        # Check for a prefix\n    \\? |                                     # {?string} nullable type\n    !   |                                    # {!string} non-nullable type\n    \\.{3}                                    # {...string} variable number of parameters\n  )?\n\n  (?:\n    \\(                                       # Opening bracket of multiple types with parenthesis {(string|number)}\n      [a-zA-Z_$]+\n      (?:\n        [\\w$]* |\n        \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>           # {Array<string>} or {Object<string, number>} type application (optional .)\n      )\n      (?:\n        [\\.|~]                               # {Foo.bar} namespaced, {string|number} multiple, {Foo~bar} class-specific callback\n        [a-zA-Z_$]+\n        (?:\n          [\\w$]* |\n          \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>         # {Array<string>} or {Object<string, number>} type application (optional .)\n        )\n      )*\n    \\) |\n    [a-zA-Z_$]+\n    (?:\n      [\\w$]* |\n      \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>             # {Array<string>} or {Object<string, number>} type application (optional .)\n    )\n    (?:\n      [\\.|~]                                 # {Foo.bar} namespaced, {string|number} multiple, {Foo~bar} class-specific callback\n      [a-zA-Z_$]+\n      (?:\n        [\\w$]* |\n        \\.?<[\\w$]+(?:,\\s+[\\w$]+)*>           # {Array<string>} or {Object<string, number>} type application (optional .)\n      )\n    )*\n  )\n                                             # Check for suffix\n  (?:\\[\\])?                                  # {string[]} type application, an array of strings\n  =?                                         # {string=} optional parameter\n)})\n\\s+\n(?:-\\s+)?                                    # optional hyphen before the description\n((?:(?!\\*\\/).)*)                             # The type description",
                    "captures": {
                        "0": {
                            "name": "other.meta.jsdoc"
                        },
                        "1": {
                            "name": "entity.name.type.instance.jsdoc"
                        },
                        "2": {
                            "name": "other.description.jsdoc"
                        }
                    }
                }
            ]
        },
        "jsx-tag-attributes": {
            "patterns": [
                {
                    "include": "#jsx-tag-attribute-name"
                },
                {
                    "include": "#jsx-tag-attribute-assignment"
                },
                {
                    "include": "#jsx-string-double-quoted"
                },
                {
                    "include": "#jsx-string-single-quoted"
                },
                {
                    "include": "#jsx-evaluated-code"
                }
            ]
        },
        "jsx-tag-attribute-name": {
            "match": "(?x)\n  \\s*\n  ([_$a-zA-Z][-$\\w]*)\n  (?=\\s|=|/?>|/\\*|//)",
            "captures": {
                "1": {
                    "name": "entity.other.attribute-name.js"
                }
            }
        },
        "jsx-tag-attribute-assignment": {
            "name": "keyword.operator.assignment.js",
            "match": "=(?=\\s*(?:'|\"|{|/\\*|//|\\n))"
        },
        "jsx-string-double-quoted": {
            "name": "string.quoted.double.js",
            "begin": "\"",
            "end": "\"",
            "beginCaptures": {
                "0": {
                    "name": "punctuation.definition.string.begin.js"
                }
            },
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.string.end.js"
                }
            },
            "patterns": [
                {
                    "include": "#jsx-entities"
                }
            ]
        },
        "jsx-string-single-quoted": {
            "name": "string.quoted.single.js",
            "begin": "'",
            "end": "'",
            "beginCaptures": {
                "0": {
                    "name": "punctuation.definition.string.begin.js"
                }
            },
            "endCaptures": {
                "0": {
                    "name": "punctuation.definition.string.end.js"
                }
            },
            "patterns": [
                {
                    "include": "#jsx-entities"
                }
            ]
        },
        "jsx-entities": {
            "patterns": [
                {
                    "name": "constant.character.entity.js",
                    "match": "(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)",
                    "captures": {
                        "1": {
                            "name": "punctuation.definition.entity.js"
                        },
                        "3": {
                            "name": "punctuation.definition.entity.js"
                        }
                    }
                },
                {
                    "name": "invalid.illegal.bad-ampersand.js",
                    "match": "&"
                }
            ]
        },
        "jsx-evaluated-code": {
            "name": "meta.embedded.expression.js",
            "begin": "{",
            "end": "}",
            "beginCaptures": {
                "0": {
                    "name": "punctuation.section.embedded.begin.js"
                }
            },
            "endCaptures": {
                "0": {
                    "name": "punctuation.section.embedded.end.js"
                }
            },
            "patterns": [
                {
                    "include": "#expression"
                }
            ]
        },
        "jsx-tag-attributes-illegal": {
            "name": "invalid.illegal.attribute.js",
            "match": "\\S+"
        },
        "jsx-tag-without-attributes": {
            "name": "meta.tag.without-attributes.js",
            "begin": "(<)\\s*([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\\s*(>)",
            "end": "(</)\\s*([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\\s*(>)",
            "beginCaptures": {
                "1": {
                    "name": "punctuation.definition.tag.begin.js"
                },
                "2": {
                    "name": "entity.name.tag.js"
                },
                "3": {
                    "name": "punctuation.definition.tag.end.js"
                }
            },
            "endCaptures": {
                "1": {
                    "name": "punctuation.definition.tag.begin.js"
                },
                "2": {
                    "name": "entity.name.tag.js"
                },
                "3": {
                    "name": "punctuation.definition.tag.end.js"
                }
            },
            "contentName": "meta.jsx.children.tsx",
            "patterns": [
                {
                    "include": "#jsx-children"
                }
            ]
        },
        "jsx-tag-in-expression": {
            "begin": "(?x)\n  (?<=[({\\[,?=>]|&&|\\|\\||\\?|\\Wreturn|^return|\\Wdefault|^)\\s*\n  (?!(<)\\s*([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\\s*(>)) #look ahead is not start of tag without attributes\n  (?!<\\s*[_$[:alpha:]][_$[:alnum:]]*((\\s+extends\\s+[^=>])|,)) # look ahead is not type parameter of arrow\n  (?=(<)\\s*\n  ([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\n  (?=\\s+(?!\\?)|/?>))",
            "end": "(/>)|(?:(</)\\s*([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\\s*(>))",
            "endCaptures": {
                "0": {
                    "name": "meta.tag.js"
                },
                "1": {
                    "name": "punctuation.definition.tag.end.js"
                },
                "2": {
                    "name": "punctuation.definition.tag.begin.js"
                },
                "3": {
                    "name": "entity.name.tag.js"
                },
                "4": {
                    "name": "punctuation.definition.tag.end.js"
                }
            },
            "patterns": [
                {
                    "include": "#jsx-tag"
                }
            ]
        },
        "jsx-child-tag": {
            "begin": "(?x)\n  (?=(<)\\s*\n  ([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\n  (?=\\s+(?!\\?)|/?>))",
            "end": "(/>)|(?:(</)\\s*([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\\s*(>))",
            "endCaptures": {
                "0": {
                    "name": "meta.tag.js"
                },
                "1": {
                    "name": "punctuation.definition.tag.end.js"
                },
                "2": {
                    "name": "punctuation.definition.tag.begin.js"
                },
                "3": {
                    "name": "entity.name.tag.js"
                },
                "4": {
                    "name": "punctuation.definition.tag.end.js"
                }
            },
            "patterns": [
                {
                    "include": "#jsx-tag"
                }
            ]
        },
        "jsx-tag": {
            "name": "meta.tag.js",
            "begin": "(?x)\n  (?=(<)\\s*\n  ([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\n  (?=\\s+(?!\\?)|/?>))",
            "end": "(?=(/>)|(?:(</)\\s*([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\\s*(>)))",
            "patterns": [
                {
                    "begin": "(?x)\n  (<)\\s*\n  ([_$a-zA-Z][-$\\w.]*(?<!\\.|-))\n  (?=\\s+(?!\\?)|/?>)",
                    "beginCaptures": {
                        "1": {
                            "name": "punctuation.definition.tag.begin.js"
                        },
                        "2": {
                            "name": "entity.name.tag.js"
                        }
                    },
                    "end": "(?=[/]?>)",
                    "patterns": [
                        {
                            "include": "#comment"
                        },
                        {
                            "include": "#jsx-tag-attributes"
                        },
                        {
                            "include": "#jsx-tag-attributes-illegal"
                        }
                    ]
                },
                {
                    "begin": "(>)",
                    "beginCaptures": {
                        "1": {
                            "name": "punctuation.definition.tag.end.js"
                        }
                    },
                    "end": "(?=</)",
                    "contentName": "meta.jsx.children.tsx",
                    "patterns": [
                        {
                            "include": "#jsx-children"
                        }
                    ]
                }
            ]
        },
        "jsx-tag-invalid": {
            "name": "invalid.illegal.tag.incomplete.js",
            "match": "<\\s*>"
        },
        "jsx-children": {
            "patterns": [
                {
                    "include": "#jsx-tag-without-attributes"
                },
                {
                    "include": "#jsx-child-tag"
                },
                {
                    "include": "#jsx-tag-invalid"
                },
                {
                    "include": "#jsx-evaluated-code"
                },
                {
                    "include": "#jsx-entities"
                }
            ]
        },
        "jsx": {
            "patterns": [
                {
                    "include": "#jsx-tag-without-attributes"
                },
                {
                    "include": "#jsx-tag-in-expression"
                },
                {
                    "include": "#jsx-tag-invalid"
                }
            ]
        }
    },
    "version": "https://github.com/Microsoft/TypeScript-TmLanguage/commit/b5ce6b5632711b9230a33213874b818d994acab9"
}