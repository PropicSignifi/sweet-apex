var pageComponent =
webpackJsonppageComponent([30],{

/***/ 304:
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

var _functionSoy = __webpack_require__(305);

var _functionSoy2 = _interopRequireDefault(_functionSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sneHx = function (_Component) {
  _inherits(sneHx, _Component);

  function sneHx() {
    _classCallCheck(this, sneHx);

    return _possibleConstructorReturn(this, (sneHx.__proto__ || Object.getPrototypeOf(sneHx)).apply(this, arguments));
  }

  return sneHx;
}(_metalComponent2.default);

;

_metalSoy2.default.register(sneHx, _functionSoy2.default);

exports.default = sneHx;

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.sneHx = undefined;

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

  // This file was automatically generated from function.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace sneHx.
   * @public
   */

  goog.module('sneHx.incrementaldom');

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
    var param683 = function param683() {
      ie_open('h6');
      var dyn45 = opt_data.page.description;
      if (typeof dyn45 == 'function') dyn45();else if (dyn45 != null) itext(dyn45);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature converts a static method to a Func.');
      ie_close('p');
      ie_open('p');
      itext('For more details on Funcs, please check ');
      ie_open('a', null, null, 'href', 'https://github.com/Click-to-Cloud/R.apex');
      itext('R.apex');
      ie_close('a');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Prerequisite');
      ie_close('h2');
      ie_open('p');
      itext('You need to include ');
      ie_open('a', null, null, 'href', 'https://github.com/Click-to-Cloud/R.apex');
      itext('R.apex');
      ie_close('a');
      itext(' if you want to enable this feature.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Sweet Apex Example');
      ie_close('h2');
      $templateAlias2({ code: 'public class FunctionDemo {\n    /**\n     * A sample add function\n     * */\n    @func\n    public static Integer add(Integer a, Integer b) {\n        return a + b;\n    }\n\n    public static void test() {\n        System.debug(FuctionDemo.F.add.run(1, 2));\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class FunctionDemo {\n    /**\n     * A sample add function\n     * */\n    public static Integer add(Integer a, Integer b) {\n        return (Integer)F.add.runN(new List<Object>{ a, b });\n    }\n    public static void test() {\n        System.debug(FuctionDemo.F.add.run(1, 2));\n    }\n\n    public static final Funcs F = new Funcs();\n\n    public class Funcs {\n        public Func add = new AddFunc();\n    }\n\n    private class AddFunc extends Func {\n        public AddFunc() {\n            super(2);\n        }\n        public override Object execN(List<Object> args) {\n            Integer a = args.get(0) == null ? null : (Integer)args.get(0);\n            Integer b = args.get(1) == null ? null : (Integer)args.get(1);\n\n            return a + b;\n        }\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      ie_open('code');
      itext('@func');
      ie_close('code');
      itext(' works only with static methods.');
      ie_close('p');
      ie_open('p');
      itext('To use the generated Funcs, you will have to refer to ');
      ie_open('code');
      itext('ClassName.F.funcName');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param683 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'sneHx.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var sneHx = function (_Component) {
  _inherits(sneHx, _Component);

  function sneHx() {
    _classCallCheck(this, sneHx);

    return _possibleConstructorReturn(this, (sneHx.__proto__ || Object.getPrototypeOf(sneHx)).apply(this, arguments));
  }

  return sneHx;
}(_metalComponent2.default);

_metalSoy2.default.register(sneHx, templates);
exports.sneHx = sneHx;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[304]);