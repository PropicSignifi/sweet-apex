var pageComponent =
webpackJsonppageComponent([34],{

/***/ 286:
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

var _annotationSoy = __webpack_require__(287);

var _annotationSoy2 = _interopRequireDefault(_annotationSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lEVWg = function (_Component) {
  _inherits(lEVWg, _Component);

  function lEVWg() {
    _classCallCheck(this, lEVWg);

    return _possibleConstructorReturn(this, (lEVWg.__proto__ || Object.getPrototypeOf(lEVWg)).apply(this, arguments));
  }

  return lEVWg;
}(_metalComponent2.default);

;

_metalSoy2.default.register(lEVWg, _annotationSoy2.default);

exports.default = lEVWg;

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.lEVWg = undefined;

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

  // This file was automatically generated from annotation.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace lEVWg.
   * @public
   */

  goog.module('lEVWg.incrementaldom');

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
    var param474 = function param474() {
      ie_open('h6');
      var dyn36 = opt_data.page.description;
      if (typeof dyn36 == 'function') dyn36();else if (dyn36 != null) itext(dyn36);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Feature Overview');
      ie_close('h2');
      ie_open('p');
      itext('This feature adds support for custom annotation on classes.');
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
      $templateAlias2({ code: '@MyAnnotation(name=\'Test\')\npublic class AnnotationDemo {\n    public @interface MyAnnotation {\n        public String name();\n\n        public Integer number() default 10;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Transpiled Apex');
      ie_close('h2');
      $templateAlias2({ code: 'public class AnnotationDemo {\n    public class MyAnnotation {\n        private String m_name;\n        private Integer m_number = 10;\n        public MyAnnotation name(String m_name) {\n            this.m_name = m_name;\n            return this;\n        }\n        public String name() {\n            return this.m_name;\n        }\n        public MyAnnotation number(Integer m_number) {\n            this.m_number = m_number;\n            return this;\n        }\n        public Integer number() {\n            return this.m_number;\n        }\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Sweet Annotations');
      ie_close('h2');
      $templateAlias2({ code: 'public class SweetAnnotations implements Sweet.Annotations {\n    private final Map<String, List<Object>> annotations = new Map<String, List<Object>>();\n\n    public List<Object> getAnnotations(String name) {\n        List<Object> aList = annotations.get(name);\n        return aList == null ? new List<Object>() : aList;\n    }\n\n    public Object getAnnotation(String name) {\n        List<Object> aList = getAnnotations(name);\n        return aList.isEmpty() ? null : aList.get(0);\n    }\n\n    private void registerAnnotation(String targetName, Object annotation) {\n        List<Object> aList = annotations.get(targetName);\n        if(aList == null) {\n            aList = new List<Object>();\n        }\n        aList.add(annotation);\n        annotations.put(targetName, aList);\n    }\n\n    {\n        registerAnnotation(\'AnnotationDemo\', new AnnotationDemo.MyAnnotation().name(\'Test\'));\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      itext('Define custom annotations.');
      ie_close('p');
      $templateAlias2({ code: 'public @interface MyAnnotation {\n    public String name();\n\n    public Integer number() default 10;\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Apply custom annotations on classes.');
      ie_close('p');
      $templateAlias2({ code: '@MyAnnotation(name=\'Test\')\npublic class AnnotationDemo {\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Retrieve annotation information from the instance of the class.');
      ie_close('p');
      $templateAlias2({ code: 'AnnotationDemo demo = new AnnotationDemo();\nAnnotationDemo.MyAnnotation myAnn = (AnnotationDemo.MyAnnotation)Sweet.getAnnotation(demo);\nSystem.debug(myAnn.name());', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param474 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'lEVWg.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var lEVWg = function (_Component) {
  _inherits(lEVWg, _Component);

  function lEVWg() {
    _classCallCheck(this, lEVWg);

    return _possibleConstructorReturn(this, (lEVWg.__proto__ || Object.getPrototypeOf(lEVWg)).apply(this, arguments));
  }

  return lEVWg;
}(_metalComponent2.default);

_metalSoy2.default.register(lEVWg, templates);
exports.lEVWg = lEVWg;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[286]);