var pageComponent =
webpackJsonppageComponent([35],{

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(0);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

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

var _featureSoy = __webpack_require__(279);

var _featureSoy2 = _interopRequireDefault(_featureSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var kEIty = function (_Component) {
  _inherits(kEIty, _Component);

  function kEIty() {
    _classCallCheck(this, kEIty);

    return _possibleConstructorReturn(this, (kEIty.__proto__ || Object.getPrototypeOf(kEIty)).apply(this, arguments));
  }

  return kEIty;
}(_metalComponent2.default);

;

_metalSoy2.default.register(kEIty, _featureSoy2.default);

exports.default = kEIty;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.kEIty = undefined;

var _metalComponent = __webpack_require__(0);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from feature.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace kEIty.
   * @public
   */

  goog.module('kEIty.incrementaldom');

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
    var param395 = function param395() {
      ie_open('h6');
      var dyn32 = opt_data.page.description;
      if (typeof dyn32 == 'function') dyn32();else if (dyn32 != null) itext(dyn32);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Callback Methods');
      ie_close('h2');
      ie_open('p');
      itext('To implement a feature, you can choose to provide below methods.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method Name');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('setUp(config)');
      ie_close('td');
      ie_open('td');
      itext('Do the setup');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('finalize(config)');
      ie_close('td');
      ie_open('td');
      itext('Do the finalization');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('accept(context)');
      ie_close('td');
      ie_open('td');
      itext('If the feature accepts this kind of AST node');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('run(context)');
      ie_close('td');
      ie_open('td');
      itext('Run the feature against the AST node');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('groupBy(context)');
      ie_close('td');
      ie_open('td');
      itext('Get the string to group the AST nodes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('runGroup(group)');
      ie_close('td');
      ie_open('td');
      itext('Run the feature against the AST node group');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('AST Node');
      ie_close('h2');
      ie_open('p');
      itext('Most of the job that a feature does is to handle the AST nodes.');
      ie_close('p');
      ie_open('p');
      itext('You have two ways to do it.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Direct Manipulation');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('You create AST nodes purely from javascript and set all the attributes, which is suitable for simple cases.');
      ie_close('p');
      ie_open('p');
      itext('Example:');
      ie_close('p');
      $templateAlias2({ code: 'const newNode = {\n    name: {\n        identifier: "mod",\n        node: "SimpleName",\n    },\n    expression: {\n        identifier: "Math",\n        node: "SimpleName",\n    },\n    node: "MethodInvocation",\n    arguments: [\n        current.leftOperand,\n        current.rightOperand,\n    ],\n    typeArguments: [],\n};', mode: 'javascript' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Parse From String');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('You construct the string and parse it to create the AST node, preferably to be used in complex cases.');
      ie_close('p');
      ie_open('p');
      itext('Example:');
      ie_close('p');
      $templateAlias2({ code: 'const newFuncTypeContent =\n    `private class ${funcClassName} extends Func {\n        public ${funcClassName}() {\n            super(${_.size(parameters)});\n        }\n\n        public override Object execN(List<Object> args) {\n            ${castStatements};\n            ${lines.join(\'\\n\')};\n        }\n    }`;\nconst newFuncType = AST.parseTypeDeclaration(newFuncTypeContent);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('AST Processing');
      ie_close('h2');
      ie_open('p');
      itext('You can choose either way to create new AST nodes, but when it comes to impacting the existing AST nodes, you have to use the AST utility library to do this.');
      ie_close('p');
      $templateAlias2({ code: 'AST.removeChild(methodDeclaration, \'modifiers\', annotation);\nAST.removeChildren(methodDeclaration.body, \'statements\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Batch Processing');
      ie_close('h2');
      ie_open('p');
      itext('If you want to process a group of AST nodes that have some similarities, you can implement ');
      ie_open('code');
      itext('groupBy');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('runGroup');
      ie_close('code');
      itext(', instead of ');
      ie_open('code');
      itext('run');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('Check ');
      ie_open('code');
      itext('src/features/not_null/index.js');
      ie_close('code');
      itext(' for details.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param395 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'kEIty.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var kEIty = function (_Component) {
  _inherits(kEIty, _Component);

  function kEIty() {
    _classCallCheck(this, kEIty);

    return _possibleConstructorReturn(this, (kEIty.__proto__ || Object.getPrototypeOf(kEIty)).apply(this, arguments));
  }

  return kEIty;
}(_metalComponent2.default);

_metalSoy2.default.register(kEIty, templates);
exports.kEIty = kEIty;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[278]);