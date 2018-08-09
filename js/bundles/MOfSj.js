var pageComponent =
webpackJsonppageComponent([41],{

/***/ 284:
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

var _actionSoy = __webpack_require__(285);

var _actionSoy2 = _interopRequireDefault(_actionSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MOfSj = function (_Component) {
  _inherits(MOfSj, _Component);

  function MOfSj() {
    _classCallCheck(this, MOfSj);

    return _possibleConstructorReturn(this, (MOfSj.__proto__ || Object.getPrototypeOf(MOfSj)).apply(this, arguments));
  }

  return MOfSj;
}(_metalComponent2.default);

;

_metalSoy2.default.register(MOfSj, _actionSoy2.default);

exports.default = MOfSj;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.MOfSj = undefined;

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

  // This file was automatically generated from action.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace MOfSj.
   * @public
   */

  goog.module('MOfSj.incrementaldom');

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
    var param453 = function param453() {
      ie_open('h6');
      var dyn35 = opt_data.page.description;
      if (typeof dyn35 == 'function') dyn35();else if (dyn35 != null) itext(dyn35);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature converts a static method into an Action.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Prerequisite');
      ie_close('h2');
      ie_open('p');
      itext('You need to include ');
      ie_open('a', null, null, 'href', 'https://github.com/Click-to-Cloud/Action.apex');
      itext('Action.apex');
      ie_close('a');
      itext(' if you want to enable this feature.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Sweet Apex Example');
      ie_close('h2');
      $templateAlias2({ code: 'public class ActionDemo {\n    /**\n     * Some descriptions\n     *\n     * @param a The first number\n     * @param b The second number\n     * */\n    @AuraEnabled\n    @action\n    public static Integer add(Integer a, Integer b) {\n        return a + b;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class ActionDemo {\n    private static Action.Registry registry = new Action.Registry();\n\n    static {\n        registry.action(new AddAction());\n    }\n\n    @AuraEnabled\n    public static Object invoke(String name, Map<String, Object> args) {\n        return registry.invoke(name, args);\n    }\n\n    @AuraEnabled\n    public static Map<String, Action> apiDescriptorForLightning() {\n        return registry.actions;\n    }\n\n    /**\n     * Some descriptions\n     *\n     * @param a The first number\n     * @param b The second number\n     * */\n    private class AddAction extends Action {\n        public AddAction() {\n            super(\'add\');\n            param(\'a\', Integer.class, \'The first number\');\n            param(\'b\', Integer.class, \'The second number\');\n\n        }\n        public override Object execAction(Object arg0, Object arg1) {\n            Integer a = (Integer)arg0;\n            Integer b = (Integer)arg1;\n\n            return a + b;\n        }\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      ie_open('code');
      itext('@action');
      ie_close('code');
      itext(' can only be used on public/global static methods with ');
      ie_open('code');
      itext('@AuraEnabled');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('Some variations are:');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Example');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('@action');
      ie_close('td');
      ie_open('td');
      itext('Convert this method to Action');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('@action(true)');
      ie_close('td');
      ie_open('td');
      itext('Convert this method to Action and set ');
      ie_open('code');
      itext('returnRaw(true)');
      ie_close('code');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('@action(returnRaw=true)');
      ie_close('td');
      ie_open('td');
      itext('Convert this method to Action and set ');
      ie_open('code');
      itext('returnRaw(true)');
      ie_close('code');
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
    $templateAlias1(soy.$$assignDefaults({ content: param453 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'MOfSj.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var MOfSj = function (_Component) {
  _inherits(MOfSj, _Component);

  function MOfSj() {
    _classCallCheck(this, MOfSj);

    return _possibleConstructorReturn(this, (MOfSj.__proto__ || Object.getPrototypeOf(MOfSj)).apply(this, arguments));
  }

  return MOfSj;
}(_metalComponent2.default);

_metalSoy2.default.register(MOfSj, templates);
exports.MOfSj = MOfSj;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[284]);