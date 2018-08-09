var pageComponent =
webpackJsonppageComponent([46],{

/***/ 276:
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

var _transpilationSoy = __webpack_require__(277);

var _transpilationSoy2 = _interopRequireDefault(_transpilationSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RSSID = function (_Component) {
  _inherits(RSSID, _Component);

  function RSSID() {
    _classCallCheck(this, RSSID);

    return _possibleConstructorReturn(this, (RSSID.__proto__ || Object.getPrototypeOf(RSSID)).apply(this, arguments));
  }

  return RSSID;
}(_metalComponent2.default);

;

_metalSoy2.default.register(RSSID, _transpilationSoy2.default);

exports.default = RSSID;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.RSSID = undefined;

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

  // This file was automatically generated from transpilation.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace RSSID.
   * @public
   */

  goog.module('RSSID.incrementaldom');

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
    var param379 = function param379() {
      ie_open('h6');
      var dyn31 = opt_data.page.description;
      if (typeof dyn31 == 'function') dyn31();else if (dyn31 != null) itext(dyn31);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Transpilation');
      ie_close('h2');
      ie_open('p');
      itext('Transpilation is the process of compiling from one kind of source files to another kind.');
      ie_close('p');
      ie_open('p');
      itext('The actual process is much more sophisticated than this line. And it\'s helpful for you to have a basic understanding of what Sweet.apex is doing behind the scene.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Command');
      ie_close('h2');
      ie_open('p');
      itext('To run transpilation, simply type:');
      ie_close('p');
      $templateAlias2({ code: 'node transpile.js <srcDir> <destDir>', mode: 'bash' }, null, opt_ijData);
      ie_open('p');
      itext('For details on this command, please check on the commands part.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Features');
      ie_close('h2');
      ie_open('p');
      itext('Sweet.apex includes a lot of features, and they are delivered in a form of plugins. For now, you only need to get a basic idea of the features. To check more, see the features section.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Stages');
      ie_close('h2');
      ie_open('p');
      itext('There are several significant stages when you run this command.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Scanning');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('The first step of the whole process is to scan all the files in both source directory and destination directory, to generate the typing information of all the classes.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Setting Up');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('The next step is to run the setup for each feature. This will be run only once for each feature during one process.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Transpiling');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Then the most important step is to transpile the source Sweet Apex files. Each source file is processed by all available features before the next source file gets started.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Finalizing');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('After that is the finalizing step, which runs the finalization for each feature. This will also be run only once for each feature.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Building');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('In this step, Sweet.apex will start build files into static resources and copy necessary files.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Finishing');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Clean up the process and finish it.');
      ie_close('p');
      ie_open('p');
      itext('If you want to develop your own feature, please make sure that you have a deep understanding of the stages.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Transpilation Stage');
      ie_close('h2');
      ie_open('p');
      itext('Transpilation stage is actually the core of the whole process. It is further divided into four parts.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Normalizing');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Here the content of the source file is being cleaned up, and templates are being searched and replaced.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Parsing');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Then our Sweet Apex grammar comes and parses the content into AST(Abstract Syntax Tree) for further processing.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Rebuilding');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('In this part, most of the features start their jobs to rebuild the AST nodes to whatever they want.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Compiling');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Finally the AST nodes are compiled to the final string representation.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param379 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'RSSID.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var RSSID = function (_Component) {
  _inherits(RSSID, _Component);

  function RSSID() {
    _classCallCheck(this, RSSID);

    return _possibleConstructorReturn(this, (RSSID.__proto__ || Object.getPrototypeOf(RSSID)).apply(this, arguments));
  }

  return RSSID;
}(_metalComponent2.default);

_metalSoy2.default.register(RSSID, templates);
exports.RSSID = RSSID;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[276]);