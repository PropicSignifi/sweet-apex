var pageComponent =
webpackJsonppageComponent([39],{

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(0);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

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

var _configSoy = __webpack_require__(271);

var _configSoy2 = _interopRequireDefault(_configSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var qeHno = function (_Component) {
  _inherits(qeHno, _Component);

  function qeHno() {
    _classCallCheck(this, qeHno);

    return _possibleConstructorReturn(this, (qeHno.__proto__ || Object.getPrototypeOf(qeHno)).apply(this, arguments));
  }

  return qeHno;
}(_metalComponent2.default);

;

_metalSoy2.default.register(qeHno, _configSoy2.default);

exports.default = qeHno;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.qeHno = undefined;

var _metalComponent = __webpack_require__(0);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from config.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace qeHno.
   * @public
   */

  goog.module('qeHno.incrementaldom');

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
    var param336 = function param336() {
      ie_open('h6');
      var dyn28 = opt_data.page.description;
      if (typeof dyn28 == 'function') dyn28();else if (dyn28 != null) itext(dyn28);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Configuration');
      ie_close('h2');
      ie_open('p');
      itext('The configuration in Sweet.apex exists in ');
      ie_open('code');
      itext('config.json');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('You can also specify some config items through command line options, which take a higher priority than configuration.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Configuration Items');
      ie_close('h2');
      ie_open('p');
      itext('| Config Item | Description | | apiVersion | The api version of the generated Apex classes | | isDebugEnabled | Whether debug is enabled, same as \'-v\' option | | isPerfEnabled | Whether performance logging is enabled, same as \'--perf\' option | | generateDoc | Whether to generate apexdoc, \'off\' turns it off, \'sync\' does the synchronous generating and \'async\' does the asynchronous | | srcDir | The source directory | | destDir | The destination directory | | docDir | Where the apexdoc is generated | | fileSrcDir | The source directory of the files | | fileDestDir | The destination directory of the files, compiled to static resources | | templateDir | The directory where the templates reside | | silent | Whether silent mode is enabled, same as \'-s\' option | | clean | Whether to clean all cache, same as \'-c\' option | | ignoreErrors | Wheter to continue in case of errors, same as \'-i\' option | | scanExcludePatterns | The pattern of files to be excluded in the scanning stage | | generatedClassComment | Set the generated class comment | | features | The list of features enabled, separated by comma |');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param336 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'qeHno.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var qeHno = function (_Component) {
  _inherits(qeHno, _Component);

  function qeHno() {
    _classCallCheck(this, qeHno);

    return _possibleConstructorReturn(this, (qeHno.__proto__ || Object.getPrototypeOf(qeHno)).apply(this, arguments));
  }

  return qeHno;
}(_metalComponent2.default);

_metalSoy2.default.register(qeHno, templates);
exports.qeHno = qeHno;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[270]);