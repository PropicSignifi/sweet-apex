var pageComponent =
webpackJsonppageComponent([17],{

/***/ 336:
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

var _scriptSoy = __webpack_require__(337);

var _scriptSoy2 = _interopRequireDefault(_scriptSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pWuXV = function (_Component) {
  _inherits(pWuXV, _Component);

  function pWuXV() {
    _classCallCheck(this, pWuXV);

    return _possibleConstructorReturn(this, (pWuXV.__proto__ || Object.getPrototypeOf(pWuXV)).apply(this, arguments));
  }

  return pWuXV;
}(_metalComponent2.default);

;

_metalSoy2.default.register(pWuXV, _scriptSoy2.default);

exports.default = pWuXV;

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.pWuXV = undefined;

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

  // This file was automatically generated from script.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace pWuXV.
   * @public
   */

  goog.module('pWuXV.incrementaldom');

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
    var param1024 = function param1024() {
      ie_open('h6');
      var dyn61 = opt_data.page.description;
      if (typeof dyn61 == 'function') dyn61();else if (dyn61 != null) itext(dyn61);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature generates javascript functions for Apex methods.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Prerequisite');
      ie_close('h2');
      ie_open('p');
      itext('None');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Sweet Apex Example');
      ie_close('h2');
      $templateAlias2({ code: 'public class ScriptDemo {\n    /**\n     * Some comments\n     * */\n    @script\n    public static Integer add(Integer a, Integer b) {\n        return a + b;\n    }\n\n    @script\n    public static String env() {\n        /* @script\n          return \'script\';\n         */\n        return \'apex\';\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class ScriptDemo {\n    /**\n     * Some comments\n     * */\n    public static Integer add(Integer a, Integer b) {\n        return a + b;\n    }\n    public static String env() {\n        /* @script\n          return \'script\';\n         */\n        return \'apex\';\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Generated JavaScript');
      ie_close('h2');
      ie_open('p');
      itext('The script is generated by the name ');
      ie_open('code');
      itext('sweetApp.js');
      ie_close('code');
      itext(' in the script directory set in the config.');
      ie_close('p');
      $templateAlias2({ code: ';;\n(function() {\n    \n\n    const ScriptDemo = {};\n\n    /**\n     * Some comments\n     * */\n    const ScriptDemo_add = function add(a, b) {\n        return a + b;\n    }\n    const ScriptDemo_env = function env() {\n        return \'script\';\n    }\n\n    ScriptDemo.add = ScriptDemo_add;\n    ScriptDemo.env = ScriptDemo_env;\n\n    const $SweetApp = {};\n    $SweetApp.ScriptDemo = ScriptDemo;\n    window.$SweetApp = $SweetApp;\n})();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      ie_open('code');
      itext('@script');
      ie_close('code');
      itext(' can only be used on public/global static methods.');
      ie_close('p');
      ie_open('p');
      itext('The main purpose of this feature is to generate both JavaScript code and Apex code that produce the same result, so that the same business logic can be applied both front end and back end.');
      ie_close('p');
      ie_open('p');
      itext('A ');
      ie_open('code');
      itext('@script');
      ie_close('code');
      itext(' function can be in either form:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Native Script Form');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Besides the ');
      ie_open('code');
      itext('@script');
      ie_close('code');
      itext(', you need to add a comment including the javascript implementation of this method, like ');
      ie_open('code');
      itext('env()');
      ie_close('code');
      itext(' in the example, inside your Apex method. This way Sweet.apex will use the native javascript code to generate the javascript function.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Interpreted Form');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('You only need the ');
      ie_open('code');
      itext('@script');
      ie_close('code');
      itext(' and Sweet.apex will transpile your Apex code to javascript code.');
      ie_close('p');
      ie_open('p');
      itext('Note that Sweet.apex only transpiles the direct Apex method, not including any nested method calls. So if you call any other Apex methods, make sure that they are also ');
      ie_open('code');
      itext('@script');
      ie_close('code');
      itext(' methods.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1024 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'pWuXV.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var pWuXV = function (_Component) {
  _inherits(pWuXV, _Component);

  function pWuXV() {
    _classCallCheck(this, pWuXV);

    return _possibleConstructorReturn(this, (pWuXV.__proto__ || Object.getPrototypeOf(pWuXV)).apply(this, arguments));
  }

  return pWuXV;
}(_metalComponent2.default);

_metalSoy2.default.register(pWuXV, templates);
exports.pWuXV = pWuXV;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[336]);