var pageComponent =
webpackJsonppageComponent([46],{

/***/ 270:
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

var _configSoy = __webpack_require__(271);

var _configSoy2 = _interopRequireDefault(_configSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TUIKi = function (_Component) {
  _inherits(TUIKi, _Component);

  function TUIKi() {
    _classCallCheck(this, TUIKi);

    return _possibleConstructorReturn(this, (TUIKi.__proto__ || Object.getPrototypeOf(TUIKi)).apply(this, arguments));
  }

  return TUIKi;
}(_metalComponent2.default);

;

_metalSoy2.default.register(TUIKi, _configSoy2.default);

exports.default = TUIKi;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.TUIKi = undefined;

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

  // This file was automatically generated from config.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace TUIKi.
   * @public
   */

  goog.module('TUIKi.incrementaldom');

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
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Config Item');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('apiVersion');
      ie_close('td');
      ie_open('td');
      itext('The api version of the generated Apex classes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('isDebugEnabled');
      ie_close('td');
      ie_open('td');
      itext('Whether debug is enabled, same as \'-v\' option');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('isPerfEnabled');
      ie_close('td');
      ie_open('td');
      itext('Whether performance logging is enabled, same as \'--perf\' option');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('generateDoc');
      ie_close('td');
      ie_open('td');
      itext('Whether to generate apexdoc, \'off\' turns it off, \'sync\' does the synchronous generating and \'async\' does the asynchronous');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('srcDir');
      ie_close('td');
      ie_open('td');
      itext('The source directory');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('destDir');
      ie_close('td');
      ie_open('td');
      itext('The destination directory');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('docDir');
      ie_close('td');
      ie_open('td');
      itext('Where the apexdoc is generated');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('fileSrcDir');
      ie_close('td');
      ie_open('td');
      itext('The source directory of the files');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('fileDestDir');
      ie_close('td');
      ie_open('td');
      itext('The destination directory of the files, compiled to static resources');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('templateDir');
      ie_close('td');
      ie_open('td');
      itext('The directory where the templates reside');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('scriptDir');
      ie_close('td');
      ie_open('td');
      itext('The directory for the generated javascript');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('scriptName');
      ie_close('td');
      ie_open('td');
      itext('The generated javascript file name');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('scriptAppName');
      ie_close('td');
      ie_open('td');
      itext('The main javascript object name exposed');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('silent');
      ie_close('td');
      ie_open('td');
      itext('Whether silent mode is enabled, same as \'-s\' option');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('clean');
      ie_close('td');
      ie_open('td');
      itext('Whether to clean all cache, same as \'-c\' option');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ignoreErrors');
      ie_close('td');
      ie_open('td');
      itext('Wheter to continue in case of errors, same as \'-i\' option');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('scanExcludePatterns');
      ie_close('td');
      ie_open('td');
      itext('The pattern of files to be excluded in the scanning stage');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('generatedClassComment');
      ie_close('td');
      ie_open('td');
      itext('Set the generated class comment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('generateJavaScript');
      ie_close('td');
      ie_open('td');
      itext('Compile Sweet Apex to JavaScript, for development purpose only');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('features');
      ie_close('td');
      ie_open('td');
      itext('The list of features enabled, separated by comma');
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
    $templateAlias1(soy.$$assignDefaults({ content: param336 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'TUIKi.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var TUIKi = function (_Component) {
  _inherits(TUIKi, _Component);

  function TUIKi() {
    _classCallCheck(this, TUIKi);

    return _possibleConstructorReturn(this, (TUIKi.__proto__ || Object.getPrototypeOf(TUIKi)).apply(this, arguments));
  }

  return TUIKi;
}(_metalComponent2.default);

_metalSoy2.default.register(TUIKi, templates);
exports.TUIKi = TUIKi;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[270]);