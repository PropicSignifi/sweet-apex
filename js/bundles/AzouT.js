var pageComponent =
webpackJsonppageComponent([40],{

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(0);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(1);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _apexdocSoy = __webpack_require__(289);

var _apexdocSoy2 = _interopRequireDefault(_apexdocSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AzouT = function (_Component) {
  _inherits(AzouT, _Component);

  function AzouT() {
    _classCallCheck(this, AzouT);

    return _possibleConstructorReturn(this, (AzouT.__proto__ || Object.getPrototypeOf(AzouT)).apply(this, arguments));
  }

  return AzouT;
}(_metalComponent2.default);

;

_metalSoy2.default.register(AzouT, _apexdocSoy2.default);

exports.default = AzouT;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.AzouT = undefined;

var _metalComponent = __webpack_require__(0);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(1);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from apexdoc.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace AzouT.
   * @public
   */

  goog.module('AzouT.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param515 = function param515() {
      ie_open('h6');
      var dyn37 = opt_data.page.description;
      if (typeof dyn37 == 'function') dyn37();else if (dyn37 != null) itext(dyn37);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature generates the JSON structure of Sweet Apex files with comments.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Prerequisite');
      ie_close('h2');
      ie_open('p');
      itext('You need to turn on by setting ');
      ie_open('code');
      itext('generateDoc');
      ie_close('code');
      itext(' to ');
      ie_open('code');
      itext('sync/async');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Sweet Apex Example');
      ie_close('h2');
      $templateAlias2({ code: '/**\n * Sample class for ApexDoc\n *\n * @author Wilson\n * @version 1.0.0\n * */\npublic class ApexDoc {\n    // The name\n    private String name;\n\n    /**\n     * The id\n     *\n     * @deprecated\n     * */\n    public String id;\n\n    /**\n     * Run\n     *\n     * @example\n     * new ApexDoc().run(0);\n     *\n     * @param i The seed\n     * */\n    @future(callout=true)\n    public void run(Integer i) {\n    }\n\n    /**\n     * My interface\n     *\n     * @author Adam\n     * */\n    public interface MyInterface {\n    }\n\n    /**\n     * My enum\n     *\n     * @author Henry\n     * */\n    public enum MyEnum {\n        One, Two, Three;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Generated JSON');
      ie_close('h2');
      $templateAlias2({ code: '{\n    "type": "Class",\n    "name": "ApexDoc",\n    "modifiers": [\n        "public"\n    ],\n    "annotations": [],\n    "comments": {\n        "value": "Sample class for ApexDoc",\n        "properties": {\n            "author": "Wilson",\n            "version": "1.0.0"\n        }\n    },\n    "superclassType": null,\n    "superInterfaceTypes": [],\n    "typeParameters": [],\n    "classDeclarations": [],\n    "interfaceDeclarations": [\n        {\n            "type": "Interface",\n            "name": "MyInterface",\n            "modifiers": [\n                "public"\n            ],\n            "annotations": [],\n            "comments": {\n                "value": "My interface",\n                "properties": {\n                    "author": "Adam"\n                }\n            },\n            "superclassType": null,\n            "classDeclarations": [],\n            "interfaceDeclarations": [],\n            "enumDeclarations": [],\n            "fieldDeclarations": [],\n            "methodDeclarations": []\n        }\n    ],\n    "enumDeclarations": [\n        {\n            "type": "Enum",\n            "name": "MyEnum",\n            "modifiers": [\n                "public"\n            ],\n            "annotations": [],\n            "comments": {\n                "value": "My enum",\n                "properties": {\n                    "author": "Henry"\n                }\n            },\n            "superInterfaceTypes": [],\n            "classDeclarations": [],\n            "interfaceDeclarations": [],\n            "enumDeclarations": [],\n            "fieldDeclarations": [],\n            "methodDeclarations": []\n        }\n    ],\n    "fieldDeclarations": [\n        [\n            {\n                "name": "name",\n                "type": "String",\n                "modifiers": [\n                    "private"\n                ],\n                "annotations": [],\n                "comments": {}\n            }\n        ],\n        [\n            {\n                "name": "id",\n                "type": "String",\n                "modifiers": [\n                    "public"\n                ],\n                "annotations": [],\n                "comments": {\n                    "value": "The id",\n                    "properties": {\n                        "deprecated": ""\n                    }\n                }\n            }\n        ]\n    ],\n    "methodDeclarations": [\n        {\n            "name": "run",\n            "modifiers": [\n                "public"\n            ],\n            "annotations": [\n                {\n                    "typeName": "future",\n                    "values": [\n                        {\n                            "name": "callout",\n                            "value": "true"\n                        }\n                    ]\n                }\n            ],\n            "constructor": false,\n            "parameters": [\n                {\n                    "name": "i",\n                    "type": "Integer"\n                }\n            ],\n            "returnType": "void",\n            "comments": {\n                "value": "Run",\n                "properties": {\n                    "example": "new ApexDoc().run(0);",\n                    "param": "i The seed"\n                }\n            }\n        }\n    ]\n}', mode: 'JSON' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      itext('This feature is enabled only when \'generateDoc\' is turned to \'sync/async\' and \'docDir\' is set.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param515 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'AzouT.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var AzouT = function (_Component) {
  _inherits(AzouT, _Component);

  function AzouT() {
    _classCallCheck(this, AzouT);

    return _possibleConstructorReturn(this, (AzouT.__proto__ || Object.getPrototypeOf(AzouT)).apply(this, arguments));
  }

  return AzouT;
}(_metalComponent2.default);

_metalSoy2.default.register(AzouT, templates);
exports.AzouT = AzouT;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[288]);