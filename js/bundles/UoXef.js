var pageComponent =
webpackJsonppageComponent([22],{

/***/ 310:
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

var _lambdaSoy = __webpack_require__(311);

var _lambdaSoy2 = _interopRequireDefault(_lambdaSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UoXef = function (_Component) {
  _inherits(UoXef, _Component);

  function UoXef() {
    _classCallCheck(this, UoXef);

    return _possibleConstructorReturn(this, (UoXef.__proto__ || Object.getPrototypeOf(UoXef)).apply(this, arguments));
  }

  return UoXef;
}(_metalComponent2.default);

;

_metalSoy2.default.register(UoXef, _lambdaSoy2.default);

exports.default = UoXef;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.UoXef = undefined;

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

  // This file was automatically generated from lambda.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace UoXef.
   * @public
   */

  goog.module('UoXef.incrementaldom');

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
    var param746 = function param746() {
      ie_open('h6');
      var dyn48 = opt_data.page.description;
      if (typeof dyn48 == 'function') dyn48();else if (dyn48 != null) itext(dyn48);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature converts a lambda expression to an anonymous Func.');
      ie_close('p');
      ie_open('p');
      itext('Check details on ');
      ie_open('a', null, null, 'href', 'https://github.com/Click-to-Cloud/R.apex');
      itext('R.apex');
      ie_close('a');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Prerequisite');
      ie_close('h2');
      ie_open('p');
      itext('You need to include ');
      ie_open('a', null, null, 'href', 'https://github.com/Click-to-Cloud/R.apex');
      itext('R.apex');
      ie_close('a');
      itext(' if you want to enable this feature.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Sweet Apex Example');
      ie_close('h2');
      $templateAlias2({ code: 'public class LambdaDemo {\n    public static Func f = (Integer a) -> {\n        return a + 1;\n    };\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class LambdaDemo {\n    public static Func f = new AnonymousFunc0(new Sweet.AnonymousContext(null, new Map<String, Object>{  }));\n\n    private class AnonymousFunc0 extends Func {\n        private Sweet.AnonymousContext anonymous_context;\n        public AnonymousFunc0(Sweet.AnonymousContext context) {\n            super(1);\n            this.anonymous_context = context;\n        }\n        public override Object execN(List<Object> args) {\n            Integer a = args.get(0) == null ? null : (Integer)args.get(0);\n            return a + 1;\n        }\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      itext('Lambda expression are like ');
      ie_open('code');
      itext('(Type1 name1, Type2 name2) -> &#123; ... &#125;');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('We convert lambda expression to anonymous functions.');
      ie_close('p');
      ie_open('p');
      itext('Here are the things we need to pay attention to:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Lambda expressions take ');
      ie_open('code');
      itext('this');
      ie_close('code');
      itext(' as reference to the enclosing object, not the functions.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Nested lambda expressions are supported.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('You can refer to variables from enclosing block by using ');
      ie_open('code');
      itext('outer.Xxx');
      ie_close('code');
      itext(', but this does NOT support nested lambda expressions.');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param746 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'UoXef.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var UoXef = function (_Component) {
  _inherits(UoXef, _Component);

  function UoXef() {
    _classCallCheck(this, UoXef);

    return _possibleConstructorReturn(this, (UoXef.__proto__ || Object.getPrototypeOf(UoXef)).apply(this, arguments));
  }

  return UoXef;
}(_metalComponent2.default);

_metalSoy2.default.register(UoXef, templates);
exports.UoXef = UoXef;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[310]);