var pageComponent =
webpackJsonppageComponent([31],{

/***/ 292:
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

var _aspectSoy = __webpack_require__(293);

var _aspectSoy2 = _interopRequireDefault(_aspectSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var yGbcm = function (_Component) {
  _inherits(yGbcm, _Component);

  function yGbcm() {
    _classCallCheck(this, yGbcm);

    return _possibleConstructorReturn(this, (yGbcm.__proto__ || Object.getPrototypeOf(yGbcm)).apply(this, arguments));
  }

  return yGbcm;
}(_metalComponent2.default);

;

_metalSoy2.default.register(yGbcm, _aspectSoy2.default);

exports.default = yGbcm;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.yGbcm = undefined;

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

  // This file was automatically generated from aspect.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace yGbcm.
   * @public
   */

  goog.module('yGbcm.incrementaldom');

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
    var param557 = function param557() {
      ie_open('h6');
      var dyn39 = opt_data.page.description;
      if (typeof dyn39 == 'function') dyn39();else if (dyn39 != null) itext(dyn39);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature applies aspects onto methods.');
      ie_close('p');
      ie_open('p');
      itext('Aspects represent cross-cutting concerns like logging, validation and so on. Using AOP(Aspect Oriented Programming), our code will look clean and the core business logic code is more condensed.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Prerequisite');
      ie_close('h2');
      ie_open('p');
      itext('You need to have some basic understanding of Aspect Oriented Programming.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Sweet Apex Example');
      ie_close('h2');
      $templateAlias2({ code: 'public class AspectDemo {\n    @afterMethod(\'AspectDemo.version\')\n    public static Integer afterVersion(Sweet.MethodInfo method, List<Object> args, Object result) {\n        return (Integer)result + 1;\n    }\n\n    public static Integer version(Integer base) {\n        return base + 1;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class AspectDemo {\n    public static Integer afterVersion(Sweet.MethodInfo method, List<Object> args, Object result) {\n        return (Integer)result + 1;\n    }\n    public static Integer version(Integer base) {\n        Integer ret = aspect_version(base);\n        ret = (Integer)AspectDemo.afterVersion(new Sweet.MethodInfo(\'version\', AspectDemo.class, null, new List<Type>{ Integer.class }), new List<Object>{ base }, ret);\n        return ret;\n    }\n    private static Integer aspect_version(Integer base) {\n        return base + 1;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      itext('This feature includes two annotations, ');
      ie_open('code');
      itext('@beforeMethod');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('@afterMethod');
      ie_close('code');
      itext('. They can only be applied to public/global static methods that accept the following arguments.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('code');
      itext('@beforeMethod');
      ie_close('code');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Method name is not important but it should be expecting ');
      ie_open('code');
      itext('(Object, List<Object>)');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The first argument will be the method info for this aspect.');
      ie_close('p');
      ie_open('p');
      itext('The second argument will be the list of arguments passed to the target method.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('code');
      itext('@afterMethod');
      ie_close('code');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Method name is not important but it should be expecting ');
      ie_open('code');
      itext('(Object, List<Object>, Object)');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The first argument will be the method info for this aspect.');
      ie_close('p');
      ie_open('p');
      itext('The second argument will be the list of arguments passed to the target method.');
      ie_close('p');
      ie_open('p');
      itext('The third argument will be the result of the target method.');
      ie_close('p');
      ie_open('p');
      itext('An aspect here is any method marked with the annotation ');
      ie_open('code');
      itext('@beforeMethod');
      ie_close('code');
      itext(' or ');
      ie_open('code');
      itext('@afterMethod');
      ie_close('code');
      itext('. This feature will scan all the source files to find all the aspects before trying to apply them to the target methods. So you can make any method to be an aspect and expect it to be applied to other source files.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param557 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'yGbcm.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var yGbcm = function (_Component) {
  _inherits(yGbcm, _Component);

  function yGbcm() {
    _classCallCheck(this, yGbcm);

    return _possibleConstructorReturn(this, (yGbcm.__proto__ || Object.getPrototypeOf(yGbcm)).apply(this, arguments));
  }

  return yGbcm;
}(_metalComponent2.default);

_metalSoy2.default.register(yGbcm, templates);
exports.yGbcm = yGbcm;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[292]);