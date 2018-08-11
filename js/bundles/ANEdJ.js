var pageComponent =
webpackJsonppageComponent([11],{

/***/ 354:
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

var _varSoy = __webpack_require__(355);

var _varSoy2 = _interopRequireDefault(_varSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ANEdJ = function (_Component) {
  _inherits(ANEdJ, _Component);

  function ANEdJ() {
    _classCallCheck(this, ANEdJ);

    return _possibleConstructorReturn(this, (ANEdJ.__proto__ || Object.getPrototypeOf(ANEdJ)).apply(this, arguments));
  }

  return ANEdJ;
}(_metalComponent2.default);

;

_metalSoy2.default.register(ANEdJ, _varSoy2.default);

exports.default = ANEdJ;

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ANEdJ = undefined;

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

  // This file was automatically generated from var.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ANEdJ.
   * @public
   */

  goog.module('ANEdJ.incrementaldom');

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
    var param1238 = function param1238() {
      ie_open('h6');
      var dyn70 = opt_data.page.description;
      if (typeof dyn70 == 'function') dyn70();else if (dyn70 != null) itext(dyn70);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature infers variable types according to the context.');
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
      $templateAlias2({ code: 'public class VarDemo {\n    public static void main() {\n        var t = \'String\';\n        var size = t.length();\n        var str = t.toString();\n\n        var acc = new Account();\n\n        String [] slist = { \'a\' };\n        var ref = slist;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class VarDemo {\n    public static void main() {\n        String t = \'String\';\n        Integer size = t.length();\n        String str = t.toString();\n\n        Account acc = new Account();\n\n        List<String> slist = { \'a\' };\n        List<String> ref = slist;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      itext('This feature uses the typing information to infer the variable type.');
      ie_close('p');
      ie_open('p');
      itext('Currently, classes under namespace ');
      ie_open('code');
      itext('System');
      ie_close('code');
      itext(' have typings imported by default.');
      ie_close('p');
      ie_open('p');
      itext('Typing information in source directory will be scanned by default.');
      ie_close('p');
      ie_open('p');
      itext('Configure ');
      ie_open('code');
      itext('scanDestDir');
      ie_close('code');
      itext(' to scan the destination directory to collect the typing information.');
      ie_close('p');
      ie_open('p');
      itext('If you want to add any extra directory to scan, add it in ');
      ie_open('code');
      itext('classpath');
      ie_close('code');
      itext(', separated by ');
      ie_open('code');
      itext(':');
      ie_close('code');
      itext(' if there are multiple values.');
      ie_close('p');
      ie_open('p');
      itext('Exceptions will be thrown if it fails to infer the correct type.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1238 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ANEdJ.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var ANEdJ = function (_Component) {
  _inherits(ANEdJ, _Component);

  function ANEdJ() {
    _classCallCheck(this, ANEdJ);

    return _possibleConstructorReturn(this, (ANEdJ.__proto__ || Object.getPrototypeOf(ANEdJ)).apply(this, arguments));
  }

  return ANEdJ;
}(_metalComponent2.default);

_metalSoy2.default.register(ANEdJ, templates);
exports.ANEdJ = ANEdJ;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[354]);