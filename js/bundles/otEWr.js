var pageComponent =
webpackJsonppageComponent([39],{

/***/ 274:
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

var _indexSoy = __webpack_require__(275);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var otEWr = function (_Component) {
  _inherits(otEWr, _Component);

  function otEWr() {
    _classCallCheck(this, otEWr);

    return _possibleConstructorReturn(this, (otEWr.__proto__ || Object.getPrototypeOf(otEWr)).apply(this, arguments));
  }

  return otEWr;
}(_metalComponent2.default);

;

_metalSoy2.default.register(otEWr, _indexSoy2.default);

exports.default = otEWr;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.otEWr = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace otEWr.
   * @public
   */

  goog.module('otEWr.incrementaldom');

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
    var param358 = function param358() {
      ie_open('h6');
      var dyn30 = opt_data.page.description;
      if (typeof dyn30 == 'function') dyn30();else if (dyn30 != null) itext(dyn30);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What is Sweet.apex?');
      ie_close('h2');
      ie_open('p');
      itext('In essence, Sweet.apex is a developer tool that transpiles your Sweet Apex to Apex classes.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('What is Sweet Apex?');
      ie_close('h2');
      ie_open('p');
      itext('Sweet Apex is a feature-rich Apex-like code that can be transpiled to Apex classes.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('What is Transpilation?');
      ie_close('h2');
      ie_open('p');
      itext('Transpilation is the process of compiling one kind of source files to another kind.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Example');
      ie_close('h2');
      ie_open('p');
      itext('Well, these concepts are somehow confusing? Then watch the below example.');
      ie_close('p');
      ie_open('p');
      itext('Here is a very simple Sweet Apex file:');
      ie_close('p');
      $templateAlias2({ code: '// Sweet Apex\npublic class HelloSweetApex {\n    public static void main() {\n        Integer a = 5;\n        Integer b = 7;\n        System.debug(a % b);\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('At the first glance, you would probably think that it is just an Apex class. You are 90% percent right.');
      ie_close('p');
      ie_open('p');
      itext('Sweet Apex files adopt a very lenient grammar that largely resembles Apex grammar, so that normal Apex classes are actually compatible to Sweet Apex files.');
      ie_close('p');
      ie_open('p');
      itext('The example above is actually not a valid Apex class, because it does not compile due to the use of ');
      ie_open('code');
      itext('%');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('Here is the equivalent Apex version.');
      ie_close('p');
      $templateAlias2({ code: '// Apex Class\npublic class HelloSweetApex {\n    public static void main() {\n        Integer a = 5;\n        Integer b = 7;\n        System.debug(Math.mod(a, b));\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Transpilation is the process of converting the first version to the second.');
      ie_close('p');
      ie_open('p');
      itext('Sweet Apex -> Transpiled -> Apex Class');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Why?');
      ie_close('h2');
      ie_open('p');
      itext('Why all the efforts to invent the transpilation thing?');
      ie_close('p');
      ie_open('p');
      itext('Because we want to present you a new development process.');
      ie_close('p');
      ie_open('p');
      itext('This new process looks like this:');
      ie_close('p');
      ie_open('p');
      itext('Writing Sweet Apex -> Transpilation -> Deployment');
      ie_close('p');
      ie_open('p');
      itext('So now you write Sweet Apex files, instead of Apex classes. Then the transpilation process will convert them to Apex classes. Finally you run DX scripts to deploy your Apex classes.');
      ie_close('p');
      ie_open('p');
      itext('And the question now becomes:');
      ie_close('p');
      ie_open('p');
      itext('Why are we writing Sweet Apex instead of Apex classes?');
      ie_close('p');
      ie_open('p');
      itext('Then the answer is simple:');
      ie_close('p');
      ie_open('p');
      itext('Because we can provide rich features in Sweet Apex, that Apex classes cannot.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param358 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'otEWr.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var otEWr = function (_Component) {
  _inherits(otEWr, _Component);

  function otEWr() {
    _classCallCheck(this, otEWr);

    return _possibleConstructorReturn(this, (otEWr.__proto__ || Object.getPrototypeOf(otEWr)).apply(this, arguments));
  }

  return otEWr;
}(_metalComponent2.default);

_metalSoy2.default.register(otEWr, templates);
exports.otEWr = otEWr;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[274]);