var pageComponent =
webpackJsonppageComponent([41],{

/***/ 268:
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

var _commandSoy = __webpack_require__(269);

var _commandSoy2 = _interopRequireDefault(_commandSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SbfMv = function (_Component) {
  _inherits(SbfMv, _Component);

  function SbfMv() {
    _classCallCheck(this, SbfMv);

    return _possibleConstructorReturn(this, (SbfMv.__proto__ || Object.getPrototypeOf(SbfMv)).apply(this, arguments));
  }

  return SbfMv;
}(_metalComponent2.default);

;

_metalSoy2.default.register(SbfMv, _commandSoy2.default);

exports.default = SbfMv;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.SbfMv = undefined;

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

  // This file was automatically generated from command.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace SbfMv.
   * @public
   */

  goog.module('SbfMv.incrementaldom');

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
    var param373 = function param373() {
      ie_open('h6');
      var dyn30 = opt_data.page.description;
      if (typeof dyn30 == 'function') dyn30();else if (dyn30 != null) itext(dyn30);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Command');
      ie_close('h2');
      ie_open('p');
      itext('The main entry of Sweet.apex is a node.js command line tool. And you run it like this:');
      ie_close('p');
      $templateAlias2({ code: 'node transpile.js <srcDir> <destDir>', mode: 'bash' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Command Arguments');
      ie_close('h2');
      ie_open('p');
      itext('The ');
      ie_open('code');
      itext('transpile.js');
      ie_close('code');
      itext(' expects three optional arguments.');
      ie_close('p');
      $templateAlias2({ code: 'node transpile.js [srcDir] [destDir] [features]', mode: 'bash' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Argument Name');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('srcDir');
      ie_close('td');
      ie_open('td');
      itext('The source directory or the single file name, using \'./resources\' by default');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('destDir');
      ie_close('td');
      ie_open('td');
      itext('The destination directory, using \'./build\' by default');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('features');
      ie_close('td');
      ie_open('td');
      itext('The list of features enabled, separated by comma, using all features by default');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Command Options');
      ie_close('h2');
      ie_open('p');
      itext('You can specify command options.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Option Name');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('-v');
      ie_close('td');
      ie_open('td');
      itext('Show debug information');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('--perf');
      ie_close('td');
      ie_open('td');
      itext('Show performance information');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('-s');
      ie_close('td');
      ie_open('td');
      itext('Silent mode, disabling all prints');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('-c');
      ie_close('td');
      ie_open('td');
      itext('Clean mode, removing all cache');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('-i');
      ie_close('td');
      ie_open('td');
      itext('Ignore errors, continuing even if a file fails');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('-h');
      ie_close('td');
      ie_open('td');
      itext('Show command line help');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('-e');
      ie_close('td');
      ie_open('td');
      itext('Empty the generated class comment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('-j');
      ie_close('td');
      ie_open('td');
      itext('Generate JavaScript instead of Apex classes, for development purpose only');
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
    $templateAlias1(soy.$$assignDefaults({ content: param373 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'SbfMv.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var SbfMv = function (_Component) {
  _inherits(SbfMv, _Component);

  function SbfMv() {
    _classCallCheck(this, SbfMv);

    return _possibleConstructorReturn(this, (SbfMv.__proto__ || Object.getPrototypeOf(SbfMv)).apply(this, arguments));
  }

  return SbfMv;
}(_metalComponent2.default);

_metalSoy2.default.register(SbfMv, templates);
exports.SbfMv = SbfMv;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[268]);