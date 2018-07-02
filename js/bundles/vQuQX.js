var pageComponent =
webpackJsonppageComponent([15],{

/***/ 332:
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

var _reflectSoy = __webpack_require__(333);

var _reflectSoy2 = _interopRequireDefault(_reflectSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vQuQX = function (_Component) {
  _inherits(vQuQX, _Component);

  function vQuQX() {
    _classCallCheck(this, vQuQX);

    return _possibleConstructorReturn(this, (vQuQX.__proto__ || Object.getPrototypeOf(vQuQX)).apply(this, arguments));
  }

  return vQuQX;
}(_metalComponent2.default);

;

_metalSoy2.default.register(vQuQX, _reflectSoy2.default);

exports.default = vQuQX;

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.vQuQX = undefined;

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

  // This file was automatically generated from reflect.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace vQuQX.
   * @public
   */

  goog.module('vQuQX.incrementaldom');

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
    var param831 = function param831() {
      ie_open('h6');
      var dyn53 = opt_data.page.description;
      if (typeof dyn53 == 'function') dyn53();else if (dyn53 != null) itext(dyn53);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature generates reflection code for a class.');
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
      $templateAlias2({ code: '@reflect\npublic class ReflectDemo {\n    private static String version = \'1.0\';\n    private String name;\n    private Integer count;\n\n    public ReflectDemo() {\n\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public Integer getCount() {\n        return this.count;\n    }\n\n    public void setCount(Integer count) {\n        this.count = count;\n    }\n\n    public static void test() {\n        ReflectDemo demo = new ReflectDemo();\n        Sweet.Reflection reflection = Sweet.reflect(demo);\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class ReflectDemo implements Sweet.Reflectable {\n    private static String version = \'1.0\';\n    private String name;\n    private Integer count;\n    public ReflectDemo() {\n\n    }\n    public String getName() {\n        return this.name;\n    }\n    public Integer getCount() {\n        return this.count;\n    }\n    public void setCount(Integer count) {\n        this.count = count;\n    }\n    public static void test() {\n        ReflectDemo demo = new ReflectDemo();\n        Sweet.Reflection reflection = Sweet.reflect(demo);\n    }\n\n    public List<String> reflect_getFieldNames() {\n        return new List<String>{ \'name\', \'count\' };\n    }\n\n    public Object reflect_getFieldValue(String name) {\n        if(name == \'name\') {\n            return this.name;\n        } else {\n            if(name == \'count\') {\n                return this.count;\n            } else {\n                throw new Sweet.SweetException(\'Field \' + name + \' does not exist\');\n            }\n        }\n    }\n\n    public void reflect_setFieldValue(String name, Object value) {\n        if(name == \'name\') {\n            this.name = (String)value;\n        } else {\n            if(name == \'count\') {\n                this.count = (Integer)value;\n            } else {\n                throw new Sweet.SweetException(\'Field \' + name + \' does not exist\');\n            }\n        }\n    }\n\n    public List<String> reflect_getMethodNames() {\n        return new List<String>{ \'getName\', \'getCount\', \'setCount\' };\n    }\n\n    public Object reflect_invokeMethod(String name, List<Object> args) {\n        if(name == \'getName\') {\n            return this.getName();\n        } else {\n            if(name == \'getCount\') {\n                return this.getCount();\n            } else {\n                if(name == \'setCount\') {\n                    this.setCount((Integer)args.get(0));\n                } else {\n                    throw new Sweet.SweetException(\'Method \' + name + \' does not exist\');\n                }\n            }\n        }\n        return null;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      ie_open('code');
      itext('@reflect');
      ie_close('code');
      itext(' can only generate reflection methods on non-static fields and methods(excluding constructors).');
      ie_close('p');
      ie_open('p');
      itext('Here is how you can use the reflection.');
      ie_close('p');
      $templateAlias2({ code: 'Sweet.Reflection r = Sweet.reflect(target);\nObject value = r.getFieldValue(\'name\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param831 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'vQuQX.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var vQuQX = function (_Component) {
  _inherits(vQuQX, _Component);

  function vQuQX() {
    _classCallCheck(this, vQuQX);

    return _possibleConstructorReturn(this, (vQuQX.__proto__ || Object.getPrototypeOf(vQuQX)).apply(this, arguments));
  }

  return vQuQX;
}(_metalComponent2.default);

_metalSoy2.default.register(vQuQX, templates);
exports.vQuQX = vQuQX;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[332]);