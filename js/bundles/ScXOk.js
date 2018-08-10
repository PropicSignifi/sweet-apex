var pageComponent =
webpackJsonppageComponent([35],{

/***/ 300:
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

var _destructureSoy = __webpack_require__(301);

var _destructureSoy2 = _interopRequireDefault(_destructureSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScXOk = function (_Component) {
  _inherits(ScXOk, _Component);

  function ScXOk() {
    _classCallCheck(this, ScXOk);

    return _possibleConstructorReturn(this, (ScXOk.__proto__ || Object.getPrototypeOf(ScXOk)).apply(this, arguments));
  }

  return ScXOk;
}(_metalComponent2.default);

;

_metalSoy2.default.register(ScXOk, _destructureSoy2.default);

exports.default = ScXOk;

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ScXOk = undefined;

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

  // This file was automatically generated from destructure.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ScXOk.
   * @public
   */

  goog.module('ScXOk.incrementaldom');

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
    var param646 = function param646() {
      ie_open('h6');
      var dyn43 = opt_data.page.description;
      if (typeof dyn43 == 'function') dyn43();else if (dyn43 != null) itext(dyn43);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature enables destructuring from list/map/sobject.');
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
      $templateAlias2({ code: 'public class DestructureDemo {\n    public static void main() {\n        List<String> names = new List<String>{ \'Wilson\', \'Adam\' };\n        String { p1, p2 } = names;\n\n        Map<String, Object> infos = new Map<String, Object>{ \'a\' => 1, \'b\' => \'2\' };\n        { a: Integer count, b: String id } = infos;\n\n        Account ac = new Account(Name=\'test acc\');\n        { Name: String name } = ac;\n\n        List<Integer> numbers = new List<Integer>{ 1, 2, 3, 4, 5 };\n        Integer { first, _ } = numbers;\n        Integer { _, last } = numbers;\n\n        List<String> signs = new List<String>{};\n        String { sign : String = \'stop\' } = signs;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class DestructureDemo {\n    public static void main() {\n        List<String> names = new List<String>{ \'Wilson\', \'Adam\' };\n        List<Object> destructure_1 = (List<Object>)names;\n        String p1 = (String)destructure_1.get(0);\n        String p2 = (String)destructure_1.get(1);\n\n        Map<String, Object> infos = new Map<String, Object>{ \'a\' => 1, \'b\' => \'2\' };\n        Map<String, Object> destructure_6 = (Map<String, Object>)infos;\n        Integer count = (Integer)destructure_6.get(\'a\');\n        String id = (String)destructure_6.get(\'b\');\n\n        Account ac = new Account(Name = \'test acc\');\n        SObject destructure_11 = (SObject)ac;\n        String name = (String)destructure_11.get(\'Name\');\n\n        List<Integer> numbers = new List<Integer>{ 1, 2, 3, 4, 5 };\n        List<Object> destructure_15 = (List<Object>)numbers;\n        Integer first = (Integer)destructure_15.get(0);\n        List<Object> destructure_17 = (List<Object>)numbers;\n        Integer last = (Integer)destructure_17.get(destructure_17.size() - 1);\n\n        List<String> signs = new List<String>{  };\n        List<Object> destructure_21 = (List<Object>)signs;\n        String sign = (String)Sweet.defaultIfNull(destructure_21.get(0), \'stop\');\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      itext('Destructuring is built on the base of type inference. Should the type inference go wrong, the generated destructuring code might fail.');
      ie_close('p');
      ie_open('p');
      itext('You can insert one ');
      ie_open('code');
      itext('_');
      ie_close('code');
      itext(' as a placeholder when destructuring a list.');
      ie_close('p');
      ie_open('p');
      itext('Also you can append default values during destructuring.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param646 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ScXOk.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var ScXOk = function (_Component) {
  _inherits(ScXOk, _Component);

  function ScXOk() {
    _classCallCheck(this, ScXOk);

    return _possibleConstructorReturn(this, (ScXOk.__proto__ || Object.getPrototypeOf(ScXOk)).apply(this, arguments));
  }

  return ScXOk;
}(_metalComponent2.default);

_metalSoy2.default.register(ScXOk, templates);
exports.ScXOk = ScXOk;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[300]);