var pageComponent =
webpackJsonppageComponent([38],{

/***/ 296:
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

var _constructor_annotationSoy = __webpack_require__(297);

var _constructor_annotationSoy2 = _interopRequireDefault(_constructor_annotationSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TkZhI = function (_Component) {
  _inherits(TkZhI, _Component);

  function TkZhI() {
    _classCallCheck(this, TkZhI);

    return _possibleConstructorReturn(this, (TkZhI.__proto__ || Object.getPrototypeOf(TkZhI)).apply(this, arguments));
  }

  return TkZhI;
}(_metalComponent2.default);

;

_metalSoy2.default.register(TkZhI, _constructor_annotationSoy2.default);

exports.default = TkZhI;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.TkZhI = undefined;

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

  // This file was automatically generated from constructor_annotation.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace TkZhI.
   * @public
   */

  goog.module('TkZhI.incrementaldom');

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
    var param604 = function param604() {
      ie_open('h6');
      var dyn41 = opt_data.page.description;
      if (typeof dyn41 == 'function') dyn41();else if (dyn41 != null) itext(dyn41);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature generates constructors.');
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
      $templateAlias2({ code: '@constructor\npublic class ConstructorDemo {\n    private String name;\n    private Integer age;\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class ConstructorDemo {\n    private String name;\n    private Integer age;\n\n    public ConstructorDemo() {\n    }\n\n    public ConstructorDemo(String name, Integer age) {\n        this.name = name;\n        this.age = age;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      ie_open('code');
      itext('@constructor');
      ie_close('code');
      itext(' only includes non-static fields.');
      ie_close('p');
      ie_open('p');
      itext('Some variations are:');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Example');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('@constructor');
      ie_close('td');
      ie_open('td');
      itext('Generate all non-static fields');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('@constructor(&#123; \'name\', \'id\' &#125;)');
      ie_close('td');
      ie_open('td');
      itext('Generate the given fields');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('@constructor(fields=&#123; \'name\', \'id\' &#125;)');
      ie_close('td');
      ie_open('td');
      itext('Generate the given fields');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param604 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'TkZhI.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var TkZhI = function (_Component) {
  _inherits(TkZhI, _Component);

  function TkZhI() {
    _classCallCheck(this, TkZhI);

    return _possibleConstructorReturn(this, (TkZhI.__proto__ || Object.getPrototypeOf(TkZhI)).apply(this, arguments));
  }

  return TkZhI;
}(_metalComponent2.default);

_metalSoy2.default.register(TkZhI, templates);
exports.TkZhI = TkZhI;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[296]);