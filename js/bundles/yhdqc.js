var pageComponent =
webpackJsonppageComponent([28],{

/***/ 314:
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

var _injectSoy = __webpack_require__(315);

var _injectSoy2 = _interopRequireDefault(_injectSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var yhdqc = function (_Component) {
  _inherits(yhdqc, _Component);

  function yhdqc() {
    _classCallCheck(this, yhdqc);

    return _possibleConstructorReturn(this, (yhdqc.__proto__ || Object.getPrototypeOf(yhdqc)).apply(this, arguments));
  }

  return yhdqc;
}(_metalComponent2.default);

;

_metalSoy2.default.register(yhdqc, _injectSoy2.default);

exports.default = yhdqc;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.yhdqc = undefined;

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

  // This file was automatically generated from inject.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace yhdqc.
   * @public
   */

  goog.module('yhdqc.incrementaldom');

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
    var param783 = function param783() {
      ie_open('h6');
      var dyn50 = opt_data.page.description;
      if (typeof dyn50 == 'function') dyn50();else if (dyn50 != null) itext(dyn50);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature injects dependency. See DI(Dependency Injection) for more details.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Prerequisite');
      ie_close('h2');
      ie_open('p');
      itext('You need to configure the ');
      ie_open('code');
      itext('beans.json');
      ie_close('code');
      itext(' file should you want to use the named beans.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Sweet Apex Example');
      ie_close('h2');
      $templateAlias2({ code: 'public class InjectDemo {\n    @inject\n    private Case c1;\n\n    @inject(\'demo\')\n    private Case c2;\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class InjectDemo {\n    private Case c1 = (Case)Sweet.getBean(Case.class);\n    private Case c2 = (Case)Sweet.getBean(\'demo\');\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      ie_open('code');
      itext('@inject');
      ie_close('code');
      itext(' works for two scenarios.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Named Injections');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('To inject a named bean, you need to configure it in the ');
      ie_open('code');
      itext('beans.json');
      ie_close('code');
      itext(' like this:');
      ie_close('p');
      $templateAlias2({ code: '[\n    {\n        "name": "demo",\n        "type": "Case"\n    }\n]', mode: 'JSON' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Type Injections');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('To inject a typed bean, you need to bind the type first.');
      ie_close('p');
      $templateAlias2({ code: 'Sweet.bind(Case.class, Account.class); // Bind Case.class to be created by Account.class\nSweet.bindObject(Case.class, mockCase); // Bind Case.class to a created object', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('If no bindings are found, the original type will be used to create the instance.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param783 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'yhdqc.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var yhdqc = function (_Component) {
  _inherits(yhdqc, _Component);

  function yhdqc() {
    _classCallCheck(this, yhdqc);

    return _possibleConstructorReturn(this, (yhdqc.__proto__ || Object.getPrototypeOf(yhdqc)).apply(this, arguments));
  }

  return yhdqc;
}(_metalComponent2.default);

_metalSoy2.default.register(yhdqc, templates);
exports.yhdqc = yhdqc;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[314]);