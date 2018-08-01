var pageComponent =
webpackJsonppageComponent([5],{

/***/ 336:
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

var _step_1Soy = __webpack_require__(337);

var _step_1Soy2 = _interopRequireDefault(_step_1Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var okMFZ = function (_Component) {
  _inherits(okMFZ, _Component);

  function okMFZ() {
    _classCallCheck(this, okMFZ);

    return _possibleConstructorReturn(this, (okMFZ.__proto__ || Object.getPrototypeOf(okMFZ)).apply(this, arguments));
  }

  return okMFZ;
}(_metalComponent2.default);

;

_metalSoy2.default.register(okMFZ, _step_1Soy2.default);

exports.default = okMFZ;

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.okMFZ = undefined;

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

  // This file was automatically generated from step_1.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace okMFZ.
   * @public
   */

  goog.module('okMFZ.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param1008 = function param1008() {
      ie_open('h2');
      var dyn60 = opt_data.page.title;
      if (typeof dyn60 == 'function') dyn60();else if (dyn60 != null) itext(dyn60);
      ie_close('h2');
      ie_open('p');
      itext('Sweet.apex is a JavaScript project based on node.js. Make sure you have node.js and npm installed before you go on.');
      ie_close('p');
      ie_open('p');
      itext('Clone the project from the github repo, go to the root of the project and run the command.');
      ie_close('p');
      $templateAlias2({ code: 'npm install', mode: 'bash' }, null, opt_ijData);
      ie_open('p');
      itext('Wait until the installation is finished.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1008 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'okMFZ.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var okMFZ = function (_Component) {
  _inherits(okMFZ, _Component);

  function okMFZ() {
    _classCallCheck(this, okMFZ);

    return _possibleConstructorReturn(this, (okMFZ.__proto__ || Object.getPrototypeOf(okMFZ)).apply(this, arguments));
  }

  return okMFZ;
}(_metalComponent2.default);

_metalSoy2.default.register(okMFZ, templates);
exports.okMFZ = okMFZ;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[336]);