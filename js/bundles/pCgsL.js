var pageComponent =
webpackJsonppageComponent([37],{

/***/ 294:
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

var _castSoy = __webpack_require__(295);

var _castSoy2 = _interopRequireDefault(_castSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pCgsL = function (_Component) {
  _inherits(pCgsL, _Component);

  function pCgsL() {
    _classCallCheck(this, pCgsL);

    return _possibleConstructorReturn(this, (pCgsL.__proto__ || Object.getPrototypeOf(pCgsL)).apply(this, arguments));
  }

  return pCgsL;
}(_metalComponent2.default);

;

_metalSoy2.default.register(pCgsL, _castSoy2.default);

exports.default = pCgsL;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.pCgsL = undefined;

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

  // This file was automatically generated from cast.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace pCgsL.
   * @public
   */

  goog.module('pCgsL.incrementaldom');

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
    var param578 = function param578() {
      ie_open('h6');
      var dyn40 = opt_data.page.description;
      if (typeof dyn40 == 'function') dyn40();else if (dyn40 != null) itext(dyn40);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature casts between different collections of lists, sets and maps.');
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
      $templateAlias2({ code: 'public class CastDemo {\n    public static void main() {\n        List<String> list1 = (List<Object> => List<String>)new List<Object>();\n\n        Map<String, String> map1 = (Map<Object, Object> => Map<String, String>)new Map<Object, Object>();\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class CastDemo {\n    public static void main() {\n        List<String> list1 = cast_Utils.cast_List_Object_to_List_String(new List<Object>());\n\n        Map<String, String> map1 = cast_Utils.cast_Map_Object_Object_to_Map_String_String(new Map<Object, Object>());\n    }\n}\n\npublic class cast_Utils {\n    \n    public static List<String> cast_List_Object_to_List_String(Object other) {\n        List<Object> target = (List<Object>)other;\n        List<String> ret = new List<String>();\n        for(Object i : target) {\n            String r = (String)i;\n            ret.add(r);\n        }\n\n        return ret;\n    }\n\n    public static Map<String, String> cast_Map_Object_Object_to_Map_String_String(Object other) {\n        Map<Object, Object> target = (Map<Object, Object>)other;\n        Map<String, String> ret = new Map<String, String>();\n        for(Object key : target.keySet()) {\n            Object value = target.get(key);\n            String k = (String)key;\n            String v = (String)value;\n            ret.put(k, v);\n        }\n\n        return ret;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      itext('An extra ');
      ie_open('code');
      itext('cast_Utils.cls');
      ie_close('code');
      itext(' will be generated to contain all the casting methods should it be used by other files.');
      ie_close('p');
      ie_open('p');
      itext('Nested casting like ');
      ie_open('code');
      itext('(List<List<Object>> => List<List<String>>)');
      ie_close('code');
      itext(' is also supported.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param578 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'pCgsL.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var pCgsL = function (_Component) {
  _inherits(pCgsL, _Component);

  function pCgsL() {
    _classCallCheck(this, pCgsL);

    return _possibleConstructorReturn(this, (pCgsL.__proto__ || Object.getPrototypeOf(pCgsL)).apply(this, arguments));
  }

  return pCgsL;
}(_metalComponent2.default);

_metalSoy2.default.register(pCgsL, templates);
exports.pCgsL = pCgsL;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[294]);