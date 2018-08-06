var pageComponent =
webpackJsonppageComponent([28],{

/***/ 298:
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

var _enumSoy = __webpack_require__(299);

var _enumSoy2 = _interopRequireDefault(_enumSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GjsYg = function (_Component) {
  _inherits(GjsYg, _Component);

  function GjsYg() {
    _classCallCheck(this, GjsYg);

    return _possibleConstructorReturn(this, (GjsYg.__proto__ || Object.getPrototypeOf(GjsYg)).apply(this, arguments));
  }

  return GjsYg;
}(_metalComponent2.default);

;

_metalSoy2.default.register(GjsYg, _enumSoy2.default);

exports.default = GjsYg;

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.GjsYg = undefined;

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

  // This file was automatically generated from enum.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace GjsYg.
   * @public
   */

  goog.module('GjsYg.incrementaldom');

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
    var param620 = function param620() {
      ie_open('h6');
      var dyn42 = opt_data.page.description;
      if (typeof dyn42 == 'function') dyn42();else if (dyn42 != null) itext(dyn42);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature generates a full-fledged enum class.');
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
      $templateAlias2({ code: 'public enum EnumDemo {\n    One(\'1\'),\n    Two(\'2\'),\n    Three(\'3\');\n\n    private String id;\n\n    private EnumDemo(String id) {\n        this.id = id;\n    }\n\n    public String getId() {\n        return this.id;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class EnumDemo extends Sweet.BaseEnum {\n    public static final EnumDemo One = (EnumDemo)new EnumDemo(\'1\').setName(\'One\').setOrdinal(0);\n    public static final EnumDemo Two = (EnumDemo)new EnumDemo(\'2\').setName(\'Two\').setOrdinal(1);\n    public static final EnumDemo Three = (EnumDemo)new EnumDemo(\'3\').setName(\'Three\').setOrdinal(2);\n\n    private static final Map<String, EnumDemo> instances = new Map<String, EnumDemo>{ \'One\' => One, \'Two\' => Two, \'Three\' => Three };\n\n    public static List<EnumDemo> values() {\n        return instances.values();\n    }\n\n    public static EnumDemo valueOf(String name) {\n        return instances.get(name);\n    }\n\n    private String id;\n    private EnumDemo(String id) {\n        this.id = id;\n    }\n    public String getId() {\n        return this.id;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      itext('Generated enums are all subclasses of ');
      ie_open('code');
      itext('Sweet.BaseEnum');
      ie_close('code');
      itext(', and they share the same API.');
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
      itext('toString()');
      ie_close('td');
      ie_open('td');
      itext('Get the name of the enum');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ordinal()');
      ie_close('td');
      ie_open('td');
      itext('Get the ordinal of the enum');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('static BaseEnum valueOf(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the enum by name');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('static List<BaseEnum> values()');
      ie_close('td');
      ie_open('td');
      itext('Get all enum values');
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
    $templateAlias1(soy.$$assignDefaults({ content: param620 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'GjsYg.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var GjsYg = function (_Component) {
  _inherits(GjsYg, _Component);

  function GjsYg() {
    _classCallCheck(this, GjsYg);

    return _possibleConstructorReturn(this, (GjsYg.__proto__ || Object.getPrototypeOf(GjsYg)).apply(this, arguments));
  }

  return GjsYg;
}(_metalComponent2.default);

_metalSoy2.default.register(GjsYg, templates);
exports.GjsYg = GjsYg;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[298]);