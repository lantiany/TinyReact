/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/TinyReact/component.js":
/*!************************************!*\
  !*** ./src/TinyReact/component.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diff */ "./src/TinyReact/diff.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Component = /*#__PURE__*/function () {
  // ?????????????????? props ?????????????????? props ????????????????????????????????? this.props ??????
  // ???????????? super ??????????????????????????????????????? constructor
  // ??????????????? super ???????????????????????????????????????
  function Component(props) {
    _classCallCheck(this, Component);

    // ???????????? super ???????????? this ?????????
    this.props = props;
  }

  _createClass(Component, [{
    key: "setState",
    value: function setState(state) {
      this.state = Object.assign({}, this.state, state);
      var virtualDOM = this.render();
      var oldDOM = this.getDOM();
      var container = oldDOM.parentNode;
      Object(_diff__WEBPACK_IMPORTED_MODULE_0__["default"])(virtualDOM, container, oldDOM);
    }
  }, {
    key: "setDOM",
    value: function setDOM(dom) {
      this._dom = dom;
    }
  }, {
    key: "getDOM",
    value: function getDOM() {
      return this._dom;
    }
  }, {
    key: "updateProps",
    value: function updateProps(props) {
      this.props = props;
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps !== this.props && nextState !== this.state;
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }]);

  return Component;
}();



/***/ }),

/***/ "./src/TinyReact/createDOMElement.js":
/*!*******************************************!*\
  !*** ./src/TinyReact/createDOMElement.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createDOMElement; });
/* harmony import */ var _mountElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mountElement */ "./src/TinyReact/mountElement.js");
/* harmony import */ var _updateNodeElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateNodeElement */ "./src/TinyReact/updateNodeElement.js");


function createDOMElement(virtualDOM) {
  var newElement = null;

  if (virtualDOM.type === 'text') {
    // ????????????????????? createTextElement
    newElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    // ????????????????????? createElement
    newElement = document.createElement(virtualDOM.type);
    Object(_updateNodeElement__WEBPACK_IMPORTED_MODULE_1__["default"])(newElement, virtualDOM);
  } // ???????????? DOM ??????????????? _virtualDOM ??????????????? diff ??????


  newElement._virtualDOM = virtualDOM; // ?????????????????????

  virtualDOM.children.forEach(function (child) {
    Object(_mountElement__WEBPACK_IMPORTED_MODULE_0__["default"])(child, newElement);
  }); // ?????? nativeElement ??? ref

  if (virtualDOM.props && virtualDOM.props.ref) {
    virtualDOM.props.ref(newElement);
  }

  return newElement;
}

/***/ }),

/***/ "./src/TinyReact/createElement.js":
/*!****************************************!*\
  !*** ./src/TinyReact/createElement.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createElement; });
function createElement(type, props) {
  var _ref;

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var childElements = (_ref = []).concat.apply(_ref, children).reduce(function (result, child) {
    // true false null ???????????? react ????????????????????? html ???
    if (child !== true && child !== false && child !== null) {
      if (child instanceof Object) {
        // ???????????????????????? ???????????????????????? <span>aaa</span> ?????????babel??????????????? vDOM???
        result.push(child);
      } else {
        // ??????????????????????????????????????? vDOM ?????????
        result.push(createElement('text', {
          textContent: child
        }));
      }
    }

    return result;
  }, []);

  return {
    type: type,
    // ?????????????????????????????? children ????????? props ???
    props: Object.assign({
      children: childElements
    }, props),
    children: childElements
  };
}

/***/ }),

/***/ "./src/TinyReact/diff.js":
/*!*******************************!*\
  !*** ./src/TinyReact/diff.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diff; });
/* harmony import */ var _mountElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mountElement */ "./src/TinyReact/mountElement.js");
/* harmony import */ var _updateTextNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTextNode */ "./src/TinyReact/updateTextNode.js");
/* harmony import */ var _updateNodeElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateNodeElement */ "./src/TinyReact/updateNodeElement.js");
/* harmony import */ var _createDOMElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createDOMElement */ "./src/TinyReact/createDOMElement.js");
/* harmony import */ var _unmountNodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unmountNodes */ "./src/TinyReact/unmountNodes.js");
/* harmony import */ var _diffComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diffComponent */ "./src/TinyReact/diffComponent.js");
/* harmony import */ var _mountNativeElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mountNativeElement */ "./src/TinyReact/mountNativeElement.js");







/**
 * diff ????????????????????????
 * ???????????????????????????????????????????????????????????????????????????
 * diff ????????????????????????????????????
 * ??????????????????????????????????????????????????? diff ??????
 */

function diff(virtualDOM, container, oldDOM) {
  var oldVirtualDOM = oldDOM && oldDOM._virtualDOM; // component ????????? buildClassComponent ???????????????????????????????????? dom ?????????????????????????????????

  var oldComponent = oldVirtualDOM && oldVirtualDOM.component;

  if (!oldDOM) {
    Object(_mountElement__WEBPACK_IMPORTED_MODULE_0__["default"])(virtualDOM, container);
  } else if (virtualDOM.type !== oldVirtualDOM.type && typeof virtualDOM.type !== 'function') {
    // ????????????????????????????????????????????????????????????
    // ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    var newElement = Object(_createDOMElement__WEBPACK_IMPORTED_MODULE_3__["default"])(virtualDOM);
    oldDOM.parentNode.replaceChild(newElement, oldDOM);
  } else if (typeof virtualDOM.type === 'function') {
    // ??????????????????
    Object(_diffComponent__WEBPACK_IMPORTED_MODULE_5__["default"])(virtualDOM, oldComponent, oldDOM, container);
  } else if (oldVirtualDOM && oldVirtualDOM.type === virtualDOM.type) {
    // diff ??????????????????????????? type ??????????????????????????????
    if (virtualDOM.type === 'text') {
      // ???????????????????????????????????????
      Object(_updateTextNode__WEBPACK_IMPORTED_MODULE_1__["default"])(virtualDOM, oldVirtualDOM, oldDOM);
    } else {
      // ????????????????????????????????????????????????
      // ??????????????????????????????????????????????????? virtualDOM.props  oldVirtualDOM.props
      Object(_updateNodeElement__WEBPACK_IMPORTED_MODULE_2__["default"])(oldDOM, virtualDOM, oldVirtualDOM);
    }

    var keyedElements = {};

    for (var i = 0, len = oldDOM.childNodes.length; i < len; i++) {
      var domElement = oldDOM.childNodes[i];

      if (domElement.nodeType === 1) {
        var key = domElement.getAttribute('key');

        if (key) {
          keyedElements[key] = domElement;
        }
      }
    }

    var hasNoKey = Object.keys(keyedElements).length === 0; // ??? key ?????? key ??? diff, ?????? key ???????????? diff

    if (hasNoKey) {
      /**
       * index diff
       * ??????????????????????????????????????????????????????????????????????????? key???
       */
      virtualDOM.children.forEach(function (child, index) {
        diff(child, oldDOM, oldDOM.childNodes[index]);
      });
    } else {
      /**
       * key diff
       * 1????????????key?????????????????????????????? ?????? keyedElements ???
       * 2????????? virtualDOM ??????????????????????????????????????? key ??????
       */
      virtualDOM.children.forEach(function (child, i) {
        var key = child.props.key;

        if (key) {
          var _domElement = keyedElements[key];

          if (_domElement) {
            if (oldDOM.childNodes[i] && oldDOM.childNodes[i] !== _domElement) {
              oldDOM.insertBefore(_domElement, oldDOM.childNodes[i]);
            }
          } else {
            // ????????? keyedElements ??????????????????????????????????????????????????????
            // ??????????????????????????????????????????
            // ?????????????????????
            Object(_mountElement__WEBPACK_IMPORTED_MODULE_0__["default"])(child, oldDOM, oldDOM.childNodes[i]);
          }
        }
      });
    } // ????????????

    /**
     * ??????????????????????????????????????????????????????????????????????????????????????????????????????
     * ???????????? ????????????????????? ??? ????????????????????? ???
     * ???????????????????????????????????????????????????????????????????????????????????? -1??????????????????
     */


    var oldChildNodes = oldDOM.childNodes;

    if (oldChildNodes.length > virtualDOM.children.length) {
      // ??????????????????????????????????????????
      for (var _i = oldChildNodes.length - 1; _i > virtualDOM.children.length - 1; _i--) {
        Object(_unmountNodes__WEBPACK_IMPORTED_MODULE_4__["default"])(oldChildNodes[_i]);
      }
    }
  }
}

/***/ }),

/***/ "./src/TinyReact/diffComponent.js":
/*!****************************************!*\
  !*** ./src/TinyReact/diffComponent.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diffComponent; });
/* harmony import */ var _mountComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mountComponent */ "./src/TinyReact/mountComponent.js");
/* harmony import */ var _updateComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateComponent */ "./src/TinyReact/updateComponent.js");


function diffComponent(virtualDOM, oldComponent, oldDOM, container) {
  if (isSameComponent(virtualDOM, oldComponent)) {
    // ??????????????????????????????
    Object(_updateComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(virtualDOM, oldComponent, oldDOM, container);
  } else {
    // ?????????????????????????????????????????????????????????
    // ?????????????????????????????????????????????????????? oldDOM ???????????????
    Object(_mountComponent__WEBPACK_IMPORTED_MODULE_0__["default"])(virtualDOM, container, oldDOM);
  }
} // ??????????????????????????????

function isSameComponent(virtualDOM, oldComponent) {
  // virtualDOM.type ???????????????????????????????????????????????? ????????????????????????????????????????????????????????????
  return oldComponent && virtualDOM.type === oldComponent.constructor;
}

/***/ }),

/***/ "./src/TinyReact/index.js":
/*!********************************!*\
  !*** ./src/TinyReact/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/TinyReact/createElement.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/TinyReact/render.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "./src/TinyReact/component.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  createElement: _createElement__WEBPACK_IMPORTED_MODULE_0__["default"],
  render: _render__WEBPACK_IMPORTED_MODULE_1__["default"],
  Component: _component__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/TinyReact/isFunction.js":
/*!*************************************!*\
  !*** ./src/TinyReact/isFunction.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFunction; });
function isFunction(virtualDOM) {
  return virtualDOM && typeof virtualDOM.type === 'function';
}

/***/ }),

/***/ "./src/TinyReact/isFunctionComponent.js":
/*!**********************************************!*\
  !*** ./src/TinyReact/isFunctionComponent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFunctionComponent; });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./src/TinyReact/isFunction.js");

function isFunctionComponent(virtualDOM) {
  var type = virtualDOM.type;
  return type && Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(virtualDOM) && !(type.prototype && type.prototype.render);
}

/***/ }),

/***/ "./src/TinyReact/mountComponent.js":
/*!*****************************************!*\
  !*** ./src/TinyReact/mountComponent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mountComponent; });
/* harmony import */ var _isFunctionComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunctionComponent */ "./src/TinyReact/isFunctionComponent.js");
/* harmony import */ var _mountNativeElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mountNativeElement */ "./src/TinyReact/mountNativeElement.js");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction */ "./src/TinyReact/isFunction.js");



function mountComponent(virtualDOM, container, oldDOM) {
  var nextVirtualDOM = null;
  var component = null; // ????????????????????????????????????

  if (Object(_isFunctionComponent__WEBPACK_IMPORTED_MODULE_0__["default"])(virtualDOM)) {
    // ????????????
    nextVirtualDOM = buildFunctionComponent(virtualDOM);
  } else {
    // ?????????
    nextVirtualDOM = buildClassComponent(virtualDOM);
    component = nextVirtualDOM.component;
  }

  if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(nextVirtualDOM)) {
    // ???????????????????????????????????? build ??????????????????????????????????????????????????????????????????????????????
    // ??????????????? ?????? mountNativeElement ????????????
    // mountNativeElement ???????????? nativeElement
    // ????????????????????? mountComponent ???????????????????????? nativeElement
    mountComponent(nextVirtualDOM, container, oldDOM);
  } else {
    // ??????????????????????????? nativeElement??? ????????????????????? mountNativeElement ??????
    Object(_mountNativeElement__WEBPACK_IMPORTED_MODULE_1__["default"])(nextVirtualDOM, container, oldDOM);
  } // ??????????????? ref ??????


  if (component) {
    // ??????????????? componentDidMount ??????????????????
    component.componentDidMount();

    if (component.props && component.props.ref) {
      component.props.ref(component);
    }
  }
}

function buildFunctionComponent(virtualDOM) {
  // ??????????????????????????????type????????????????????????
  // ?????????????????????????????? props ???
  return virtualDOM.type(virtualDOM.props || {});
}

function buildClassComponent(virtualDOM) {
  // ?????????????????? new ?????????
  // ???????????????????????????????????????????????? constructor ?????? props
  // new ?????????????????? ???????????? constructor??? ????????? super(props) ?????????????????? constructor
  // ?????? props ???????????? ????????????
  var component = new virtualDOM.type(virtualDOM.props || {}); // ?????????????????? render ??????

  var nextVirtualDOM = component.render(); // ??????????????? render ??????????????? ??????DOM ??????????????? component ??????
  // ????????? ???????????????????????? ??????????????????????????? vDOM?????????diff
  // ????????? vDOM ???????????? mountNativeElement ??????????????????

  nextVirtualDOM.component = component;
  return nextVirtualDOM;
}

/***/ }),

/***/ "./src/TinyReact/mountElement.js":
/*!***************************************!*\
  !*** ./src/TinyReact/mountElement.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mountElement; });
/* harmony import */ var _mountNativeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mountNativeElement */ "./src/TinyReact/mountNativeElement.js");
/* harmony import */ var _mountComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mountComponent */ "./src/TinyReact/mountComponent.js");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction */ "./src/TinyReact/isFunction.js");



function mountElement(virtualDOM, container, oldDOM) {
  // Component VS NativeElement
  if (Object(_isFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(virtualDOM)) {
    Object(_mountComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(virtualDOM, container, oldDOM);
  } else {
    Object(_mountNativeElement__WEBPACK_IMPORTED_MODULE_0__["default"])(virtualDOM, container, oldDOM);
  }
}

/***/ }),

/***/ "./src/TinyReact/mountNativeElement.js":
/*!*********************************************!*\
  !*** ./src/TinyReact/mountNativeElement.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mountNativeElement; });
/* harmony import */ var _createDOMElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDOMElement */ "./src/TinyReact/createDOMElement.js");
/* harmony import */ var _unmountNodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unmountNodes */ "./src/TinyReact/unmountNodes.js");


function mountNativeElement(virtualDOM, container, oldDOM) {
  var newElement = Object(_createDOMElement__WEBPACK_IMPORTED_MODULE_0__["default"])(virtualDOM); // ????????? dom ??????

  if (oldDOM) {
    container.insertBefore(newElement, oldDOM);
  } else {
    container.appendChild(newElement);
  } // ??????dom???????????????????????? dom ??????????????????


  if (oldDOM) {
    Object(_unmountNodes__WEBPACK_IMPORTED_MODULE_1__["default"])(oldDOM);
  }

  var component = virtualDOM.component; // ?????????????????? virtualDOM ?????? component

  if (component) {
    // ?????? Component ????????? setDOM ??????
    component.setDOM(newElement);
  }
}

/***/ }),

/***/ "./src/TinyReact/render.js":
/*!*********************************!*\
  !*** ./src/TinyReact/render.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diff */ "./src/TinyReact/diff.js");

function render(virtualDOM, container) {
  var oldDOM = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : container.firstChild;
  Object(_diff__WEBPACK_IMPORTED_MODULE_0__["default"])(virtualDOM, container, oldDOM);
}

/***/ }),

/***/ "./src/TinyReact/unmountNodes.js":
/*!***************************************!*\
  !*** ./src/TinyReact/unmountNodes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unmountNodes; });
function unmountNodes(node) {
  node.remove();
}

/***/ }),

/***/ "./src/TinyReact/updateComponent.js":
/*!******************************************!*\
  !*** ./src/TinyReact/updateComponent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateComponent; });
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diff */ "./src/TinyReact/diff.js");

function updateComponent(virtualDOM, oldComponent, oldDOM, container) {
  /**
   * oldComponent ??????????????????????????????
   * ??????????????????????????????????????????
   */
  // ????????????????????????????????????
  oldComponent.componentWillReceiveProps(virtualDOM.props); // ?????????????????? shouldComponentUpdate ?????????????????????

  if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
    // ????????????????????? props
    var prevProps = oldComponent.props;
    oldComponent.componentWillUpdate(virtualDOM.props); // ??????????????????
    // ??????????????? props

    oldComponent.updateProps(virtualDOM.props); // ???????????? virtualDOM

    var nextVirtualDOM = oldComponent.render(); // ??????????????? render?????????????????? virtualDOM
    // ??????????????? virtualDOM ?????? component ??????

    nextVirtualDOM.component = oldComponent; // diff ??????

    Object(_diff__WEBPACK_IMPORTED_MODULE_0__["default"])(nextVirtualDOM, container, oldDOM); // ???????????????????????? componentDidUpdate ??????

    oldComponent.componentDidUpdate(prevProps, virtualDOM.props);
  }
}

/***/ }),

/***/ "./src/TinyReact/updateNodeElement.js":
/*!********************************************!*\
  !*** ./src/TinyReact/updateNodeElement.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateNodeElement; });
function updateNodeElement(newElement, virtualDOM) {
  var oldVirtualDOM = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var newProps = virtualDOM.props || {};
  var oldProps = oldVirtualDOM.props || {};
  Object.keys(newProps).forEach(function (propName) {
    // ??????????????? props ???????????????
    var newPropsValue = newProps[propName];
    var oldPropsValue = oldProps[propName];

    if (newPropsValue !== oldPropsValue) {
      // ??????????????????????????? onClick => click
      if (propName.slice(0, 2) === 'on') {
        // ?????? ???????????? 'click'
        var eventName = propName.toLowerCase().slice(2); // ???????????????????????????

        newElement.addEventListener(eventName, newPropsValue); // addEventListener ????????????????????????
        // ???????????????????????????????????????????????????????????????????????????

        if (oldPropsValue) {
          newElement.removeEventListener(eventName, oldPropsValue);
        }
      } else if (propName === 'value' || propName === 'checked') {
        // ???????????????????????????????????? value ?????? checked
        // ?????? ele.value = xx ???????????????
        newElement[propName] = newPropsValue;
      } else if (propName !== 'children') {
        /**
         * children ?????? props ????????????children ???????????????????????????
         * ?????????????????? native ??????????????????????????????????????????
         */
        // ?????????????????? className ?????????????????? class
        if (propName === 'className') {
          newElement.setAttribute('class', newPropsValue);
        } else {
          // ????????????????????? setAttribute ????????????
          newElement.setAttribute(propName, newPropsValue);
        }
      }
    }
  });
  /**
   * ??????????????????????????????
   * ??????????????? virtualDOM???????????????????????????
   * ???????????????????????? newProps ????????????oldProps ?????????
   * ????????????????????????????????????????????????????????????
   * - ???????????????????????????????????? removeEventListener ?????????
   * - ???????????????????????????'??????'???removeAttribute ?????????
   */
  // ??????????????????????????????

  Object.keys(oldProps).forEach(function (propName) {
    var newPropsValue = newProps[propName];
    var oldPropsValue = oldProps[propName];

    if (!newPropsValue) {
      // ??????????????????
      if (propName.slice(0, 2) === 'on') {
        // ?????????????????????????????????????????????
        var eventName = propName.toLowerCase().slice(2);
        newElement.removeEventListener(eventName, oldPropsValue);
      } else if (propName !== 'children') {
        // ????????????????????? children ?????????
        newElement.removeAttribute(propName);
      }
    }
  });
}

/***/ }),

/***/ "./src/TinyReact/updateTextNode.js":
/*!*****************************************!*\
  !*** ./src/TinyReact/updateTextNode.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateTextNode; });
function updateTextNode(virtualDOM, oldVirtualDOM, oldDOM) {
  if (virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
    oldDOM.textContent = virtualDOM.props.textContent;
    oldDOM._virtualDOM = virtualDOM;
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TinyReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TinyReact */ "./src/TinyReact/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var root = document.getElementById('app');
var virtualDOM = _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
  className: "container"
}, _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", null, "\u4F60\u597D Tiny React"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", null, "(\u7F16\u7801\u5FC5\u6740\u6280)\u2665"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, "\u5D4C\u59571 ", _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, "\u5D4C\u5957 1.1")), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
  "data-test": "test"
}, "(\u89C2\u5BDF: \u8FD9\u4E2A\u5C06\u4F1A\u88AB\u6539\u53D8)"),  false && false,  true && _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, "2"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, "\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
  onClick: function onClick() {
    return alert("??????");
  }
}, "\u70B9\u51FB\u6211"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", null, "\u8FD9\u4E2A\u5C06\u4F1A\u88AB\u5220\u9664"), "2, 3", _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
  type: "text"
}));
var modifyDOM = _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
  className: "container"
}, _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", null, "\u4F60\u597D Tiny React"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
  "data-test": "test111"
}, "(\u7F16\u7801\u5FC5\u6740\u6280)\u2665"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, "\u5D4C\u59571 ", _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, "\u5D4C\u5957 1.1")), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
  "data-test": "test"
}, "(\u89C2\u5BDF: \u8FD9\u4E2A\u5C06\u4F1A\u88AB\u6539\u53D8)"),  false && false,  true && _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, "2"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, "\u8FD9\u662F\u4E00\u6BB5\u88AB\u4FEE\u6539\u7684\u5185\u5BB9"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
  onClick: function onClick() {
    return alert("??????!!!");
  }
}, "\u70B9\u51FB\u6211"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
  type: "text",
  value: 111
}));

function Demo(props) {
  return _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, props.title, "\u2665");
}

var Header = function Header() {
  return _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Demo, {
    title: "Hello, React"
  });
};

var Alter = /*#__PURE__*/function (_TinyReact$Component) {
  _inherits(Alter, _TinyReact$Component);

  var _super = _createSuper(Alter);

  function Alter(props) {
    var _this;

    _classCallCheck(this, Alter);

    _this = _super.call(this, props);
    _this.state = {
      title: 'Title'
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Alter, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        title: 'Changed Title'
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('componentDidMount');
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      console.log('componentWillReceiveProps: ', props);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      console.log('componentWillUpdate');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log('componentDidUpdate');
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      return _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", null, "Hello, React"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", null, this.state.title), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", null, "name: ", this.props.name), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", null, "age: ", this.props.age), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
        onClick: this.handleClick
      }, "\u70B9\u6211\u6539\u53D8 Title"));
    }
  }]);

  return Alter;
}(_TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].Component); // TinyReact.render(<Alter name="Jack" age={20}/>, root)
// // TinyReact.render(<Header />, root)
// TinyReact.render(virtualDOM, root);
// setTimeout(() => {
//     // TinyReact.render(modifyDOM, root);
//     TinyReact.render(<Alter name="Rose" age={18}/>, root)
// }, 2000)
// console.log(virtualDOM)


var DemoRef = /*#__PURE__*/function (_TinyReact$Component2) {
  _inherits(DemoRef, _TinyReact$Component2);

  var _super2 = _createSuper(DemoRef);

  function DemoRef(props) {
    var _this2;

    _classCallCheck(this, DemoRef);

    _this2 = _super2.call(this, props);
    _this2.handleClick = _this2.handleClick.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(DemoRef, [{
    key: "handleClick",
    value: function handleClick() {
      console.log(this.input.value);
      console.log(this.alert);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('DemoRef componentDidMount');
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
        type: "text",
        ref: function ref(input) {
          _this3.input = input;
        }
      }), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
        onClick: this.handleClick
      }, "\u70B9\u6211"), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Alter, {
        ref: function ref(alert) {
          return _this3.alert = alert;
        },
        name: "Jack",
        age: 20
      }));
    }
  }]);

  return DemoRef;
}(_TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].Component);

var PersonDiffTest = /*#__PURE__*/function (_TinyReact$Component3) {
  _inherits(PersonDiffTest, _TinyReact$Component3);

  var _super3 = _createSuper(PersonDiffTest);

  function PersonDiffTest() {
    var _this4;

    _classCallCheck(this, PersonDiffTest);

    _this4 = _super3.call(this);
    _this4.state = {
      persons: [{
        id: 1,
        name: '??????'
      }, {
        id: 2,
        name: '??????'
      }, {
        id: 3,
        name: '??????'
      }, {
        id: 4,
        name: '??????'
      }]
    };
    _this4.handleClick = _this4.handleClick.bind(_assertThisInitialized(_this4));
    return _this4;
  }

  _createClass(PersonDiffTest, [{
    key: "handleClick",
    value: function handleClick() {
      var newState = JSON.parse(JSON.stringify(this.state));
      newState.persons.splice(1, 0, {
        id: 10,
        name: '??????'
      });
      this.setState(newState);
    }
  }, {
    key: "render",
    value: function render() {
      return _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("ul", null, this.state.persons.map(function (person) {
        return _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", {
          key: person.id
        }, person.name);
      })), _TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
        onClick: this.handleClick
      }, "\u70B9\u6211\u4EA4\u6362\u987A\u5E8F"));
    }
  }]);

  return PersonDiffTest;
}(_TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].Component);

_TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].render(_TinyReact__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(PersonDiffTest, null), root);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RpbnlSZWFjdC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RpbnlSZWFjdC9jcmVhdGVET01FbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9UaW55UmVhY3QvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGlueVJlYWN0L2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RpbnlSZWFjdC9kaWZmQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9UaW55UmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RpbnlSZWFjdC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9UaW55UmVhY3QvaXNGdW5jdGlvbkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGlueVJlYWN0L21vdW50Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9UaW55UmVhY3QvbW91bnRFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9UaW55UmVhY3QvbW91bnROYXRpdmVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9UaW55UmVhY3QvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9UaW55UmVhY3QvdW5tb3VudE5vZGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9UaW55UmVhY3QvdXBkYXRlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9UaW55UmVhY3QvdXBkYXRlTm9kZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RpbnlSZWFjdC91cGRhdGVUZXh0Tm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwicHJvcHMiLCJzdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsInZpcnR1YWxET00iLCJyZW5kZXIiLCJvbGRET00iLCJnZXRET00iLCJjb250YWluZXIiLCJwYXJlbnROb2RlIiwiZGlmZiIsImRvbSIsIl9kb20iLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJjcmVhdGVET01FbGVtZW50IiwibmV3RWxlbWVudCIsInR5cGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwidGV4dENvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwidXBkYXRlTm9kZUVsZW1lbnQiLCJfdmlydHVhbERPTSIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwibW91bnRFbGVtZW50IiwicmVmIiwiY2hpbGRFbGVtZW50cyIsImNvbmNhdCIsInJlZHVjZSIsInJlc3VsdCIsInB1c2giLCJvbGRWaXJ0dWFsRE9NIiwib2xkQ29tcG9uZW50IiwiY29tcG9uZW50IiwicmVwbGFjZUNoaWxkIiwiZGlmZkNvbXBvbmVudCIsInVwZGF0ZVRleHROb2RlIiwia2V5ZWRFbGVtZW50cyIsImkiLCJsZW4iLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwiZG9tRWxlbWVudCIsIm5vZGVUeXBlIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwiaGFzTm9LZXkiLCJrZXlzIiwiaW5kZXgiLCJpbnNlcnRCZWZvcmUiLCJvbGRDaGlsZE5vZGVzIiwidW5tb3VudE5vZGVzIiwiaXNTYW1lQ29tcG9uZW50IiwidXBkYXRlQ29tcG9uZW50IiwibW91bnRDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImlzRnVuY3Rpb24iLCJpc0Z1bmN0aW9uQ29tcG9uZW50IiwicHJvdG90eXBlIiwibmV4dFZpcnR1YWxET00iLCJidWlsZEZ1bmN0aW9uQ29tcG9uZW50IiwiYnVpbGRDbGFzc0NvbXBvbmVudCIsIm1vdW50TmF0aXZlRWxlbWVudCIsImNvbXBvbmVudERpZE1vdW50IiwiYXBwZW5kQ2hpbGQiLCJzZXRET00iLCJmaXJzdENoaWxkIiwibm9kZSIsInJlbW92ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJwcmV2UHJvcHMiLCJjb21wb25lbnRXaWxsVXBkYXRlIiwidXBkYXRlUHJvcHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJuZXdQcm9wcyIsIm9sZFByb3BzIiwicHJvcE5hbWUiLCJuZXdQcm9wc1ZhbHVlIiwib2xkUHJvcHNWYWx1ZSIsInNsaWNlIiwiZXZlbnROYW1lIiwidG9Mb3dlckNhc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInJvb3QiLCJnZXRFbGVtZW50QnlJZCIsImFsZXJ0IiwibW9kaWZ5RE9NIiwiRGVtbyIsInRpdGxlIiwiSGVhZGVyIiwiQWx0ZXIiLCJoYW5kbGVDbGljayIsImJpbmQiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYWdlIiwiVGlueVJlYWN0IiwiRGVtb1JlZiIsImlucHV0IiwidmFsdWUiLCJQZXJzb25EaWZmVGVzdCIsInBlcnNvbnMiLCJpZCIsIm5ld1N0YXRlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3BsaWNlIiwibWFwIiwicGVyc29uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFB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QUF1QixVQUFBQyxNQUFNLEVBQUk7QUFDN0IsZUFBTztBQUFNLGFBQUcsRUFBRUEsTUFBTSxDQUFDUDtBQUFsQixXQUF3Qk8sTUFBTSxDQUFDZixJQUEvQixDQUFQO0FBQ0gsT0FGRCxDQUZSLENBREosRUFRSTtBQUFRLGVBQU8sRUFBRSxLQUFLTDtBQUF0QixnREFSSixDQURKO0FBWUg7Ozs7RUFqQ3dCTyxrREFBUyxDQUFDMUcsUzs7QUFvQ3ZDMEcsa0RBQVMsQ0FBQ3BHLE1BQVYsQ0FBaUIsaUVBQUMsY0FBRCxPQUFqQixFQUFxQ3FGLElBQXJDLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgZGlmZiBmcm9tIFwiLi9kaWZmXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgLy8g57uZ57G757uE5Lu25Lyg6YCSIHByb3BzIOeahOaXtuWAme+8jOi/meS4qiBwcm9wcyDmgI7kuYjmoLfmiY3og73orqnlrZDnu4Tku7bpgJrov4cgdGhpcy5wcm9wcyDor7vlj5ZcbiAgICAvLyDlrZDnsbvosIPnlKggc3VwZXIg5pa55rOV77yM5a6e6ZmF5LiK5bCx5piv6LCD55So54i257G755qEIGNvbnN0cnVjdG9yXG4gICAgLy8g5a2Q57G76LCD55So5LqGIHN1cGVyIOS5i+WQju+8jOWwseWPr+S7peWcqOiHqui6q+S4iuaJvuWIsOOAglxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIC8vIOWtkOexu+iwg+eUqCBzdXBlciDvvIzmraTml7bnmoQgdGhpcyDmmK/lrZDnsbtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzXG4gICAgfVxuXG4gICAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHN0YXRlKVxuICAgICAgICBjb25zdCB2aXJ0dWFsRE9NID0gdGhpcy5yZW5kZXIoKVxuICAgICAgICBjb25zdCBvbGRET00gPSB0aGlzLmdldERPTSgpXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG9sZERPTS5wYXJlbnROb2RlXG4gICAgICAgIGRpZmYodmlydHVhbERPTSwgY29udGFpbmVyLCBvbGRET00pXG4gICAgfVxuXG4gICAgc2V0RE9NKGRvbSkge1xuICAgICAgICB0aGlzLl9kb20gPSBkb21cbiAgICB9XG5cbiAgICBnZXRET00oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kb21cbiAgICB9XG5cbiAgICB1cGRhdGVQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHNcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gbmV4dFByb3BzICE9PSB0aGlzLnByb3BzICYmIG5leHRTdGF0ZSAhPT0gdGhpcy5zdGF0ZVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIH1cbn1cbiIsImltcG9ydCBtb3VudEVsZW1lbnQgZnJvbSBcIi4vbW91bnRFbGVtZW50XCI7XG5pbXBvcnQgdXBkYXRlTm9kZUVsZW1lbnQgZnJvbSBcIi4vdXBkYXRlTm9kZUVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRE9NRWxlbWVudCh2aXJ0dWFsRE9NKXtcbiAgICBsZXQgbmV3RWxlbWVudCA9IG51bGxcbiAgICBpZiAodmlydHVhbERPTS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgLy8g5paH5pys6IqC54K577yM6LCD55SoIGNyZWF0ZVRleHRFbGVtZW50XG4gICAgICAgIG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2aXJ0dWFsRE9NLnByb3BzLnRleHRDb250ZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWFg+e0oOiKgueCue+8jOiwg+eUqCBjcmVhdGVFbGVtZW50XG4gICAgICAgIG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZpcnR1YWxET00udHlwZSlcbiAgICAgICAgdXBkYXRlTm9kZUVsZW1lbnQobmV3RWxlbWVudCwgdmlydHVhbERPTSlcbiAgICB9XG5cbiAgICAvLyDlsIbov5nkuKrmlrAgRE9NIOS4iuaMgui9veS4gOS4qiBfdmlydHVhbERPTSDlsZ7mgKfvvIznlKjkuo4gZGlmZiDmr5Tlr7lcbiAgICBuZXdFbGVtZW50Ll92aXJ0dWFsRE9NID0gdmlydHVhbERPTVxuXG4gICAgLy8g6YCS5b2S5Yib5bu65a2Q6IqC54K5XG4gICAgdmlydHVhbERPTS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgbW91bnRFbGVtZW50KGNoaWxkLCBuZXdFbGVtZW50KVxuICAgIH0pXG5cbiAgICAvLyDlpITnkIYgbmF0aXZlRWxlbWVudCDnmoQgcmVmXG4gICAgaWYgKHZpcnR1YWxET00ucHJvcHMgJiYgdmlydHVhbERPTS5wcm9wcy5yZWYpe1xuICAgICAgICB2aXJ0dWFsRE9NLnByb3BzLnJlZihuZXdFbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBuZXdFbGVtZW50XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBbXS5jb25jYXQoLi4uY2hpbGRyZW4pLnJlZHVjZSgocmVzdWx0LCBjaGlsZCkgPT4ge1xuICAgICAgICAvLyB0cnVlIGZhbHNlIG51bGwg6L+Z5Lqb5YC85ZyoIHJlYWN0IOS4reaYr+S4jeS8mua4suafk+WIsCBodG1sIOeahFxuICAgICAgICBpZiAoY2hpbGQgIT09IHRydWUgJiYgY2hpbGQgIT09IGZhbHNlICYmIGNoaWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/kuIDkuKrlr7nosaHvvIwg5YiZ6K+05piO5Y6f5p2l5piv5LiA5LiqIDxzcGFuPmFhYTwvc3Bhbj4g57uT5p6E77yMYmFiZWzlt7Lnu4/ovazmjaLkuLogdkRPTeS6hlxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/kuIDkuKrmlofmnKzvvIzpnIDopoHovazmjaLkuLogdkRPTSDnmoTnu5PmnoRcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjcmVhdGVFbGVtZW50KCd0ZXh0Jywge3RleHRDb250ZW50OiBjaGlsZH0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9LCBbXSlcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlLFxuICAgICAgICAvLyDlsIbniLbnuqflhYPntKDkvKDpgJLov4fmnaXnmoQgY2hpbGRyZW4g5ZCI5bm25YiwIHByb3BzIOS4ilxuICAgICAgICBwcm9wczogT2JqZWN0LmFzc2lnbih7Y2hpbGRyZW46IGNoaWxkRWxlbWVudHN9LCBwcm9wcyksXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZEVsZW1lbnRzXG4gICAgfVxufVxuIiwiaW1wb3J0IG1vdW50RWxlbWVudCBmcm9tICcuL21vdW50RWxlbWVudCdcbmltcG9ydCB1cGRhdGVUZXh0Tm9kZSBmcm9tIFwiLi91cGRhdGVUZXh0Tm9kZVwiO1xuaW1wb3J0IHVwZGF0ZU5vZGVFbGVtZW50IGZyb20gXCIuL3VwZGF0ZU5vZGVFbGVtZW50XCI7XG5pbXBvcnQgY3JlYXRlRE9NRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVET01FbGVtZW50XCI7XG5pbXBvcnQgdW5tb3VudE5vZGVzIGZyb20gXCIuL3VubW91bnROb2Rlc1wiO1xuaW1wb3J0IGRpZmZDb21wb25lbnQgZnJvbSBcIi4vZGlmZkNvbXBvbmVudFwiO1xuaW1wb3J0IG1vdW50TmF0aXZlRWxlbWVudCBmcm9tIFwiLi9tb3VudE5hdGl2ZUVsZW1lbnRcIjtcblxuLyoqXG4gKiBkaWZmIOaWueazleaYr+a3seW6puS8mOWFiOeahFxuICog5rex5YWl5Yiw6IqC54K555qE5Y+25a2Q6IqC54K577yM5byA5aeL5q+U5a+577yM5a6M5oiQ5LmL5ZCO5Zue5Yiw5LiK5LiA57qnXG4gKiBkaWZmIOi/h+eoi+S4reWPqui/m+ihjOWQjOe6p+WFg+e0oOavlOi+g1xuICog55u05Yiw5omA5pyJ55qE5a2Q6IqC54K55q+U5a+55a6M5q+V77yM57uT5p2f5pW05LiqIGRpZmYg6L+H56iLXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmYodmlydHVhbERPTSwgY29udGFpbmVyLCBvbGRET00pIHtcbiAgICBjb25zdCBvbGRWaXJ0dWFsRE9NID0gb2xkRE9NICYmIG9sZERPTS5fdmlydHVhbERPTVxuICAgIC8vIGNvbXBvbmVudCDlsZ7mgKflnKggYnVpbGRDbGFzc0NvbXBvbmVudCDnmoTml7blgJnlsIblhbbmjILovb3liLDkuobnlJ/miJDnmoQgZG9tIOS4iu+8jOaJgOS7peWcqOatpOWkhOWPr+S7peaLv+WIsFxuICAgIGNvbnN0IG9sZENvbXBvbmVudCA9IG9sZFZpcnR1YWxET00gJiYgb2xkVmlydHVhbERPTS5jb21wb25lbnRcbiAgICBpZiAoIW9sZERPTSkge1xuICAgICAgICBtb3VudEVsZW1lbnQodmlydHVhbERPTSwgY29udGFpbmVyKTtcbiAgICB9IGVsc2UgaWYgKHZpcnR1YWxET00udHlwZSAhPT0gb2xkVmlydHVhbERPTS50eXBlICYmIHR5cGVvZiB2aXJ0dWFsRE9NLnR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8g5ZCM5LiA57qn55qE6L+Z5Lik5Liq5paw5pen6IqC54K557G75Z6L5LiN5ZCM55qE5oOF5Ya15aSE55CGXG4gICAgICAgIC8vIOatpOWkhOimgeaOkumZpOaWsOeahOiKgueCueaYr+S4gOS4quWHveaVsOe7hOS7tuaIluiAheexu+e7hOS7tueahOaDheWGte+8jOi/meS4quaDheWGteS4jeiDveebtOaOpeabv+aNou+8jOaUvuWIsOWQjumdouWkhOeQhlxuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gY3JlYXRlRE9NRWxlbWVudCh2aXJ0dWFsRE9NKVxuICAgICAgICBvbGRET00ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkRE9NKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZpcnR1YWxET00udHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyDmmK/nu4Tku7bnmoTmg4XlhrVcbiAgICAgICAgZGlmZkNvbXBvbmVudCh2aXJ0dWFsRE9NLCBvbGRDb21wb25lbnQsIG9sZERPTSwgY29udGFpbmVyKVxuICAgIH0gZWxzZSBpZiAob2xkVmlydHVhbERPTSAmJiBvbGRWaXJ0dWFsRE9NLnR5cGUgPT09IHZpcnR1YWxET00udHlwZSkge1xuICAgICAgICAvLyBkaWZmIOexu+Wei+ebuOWQjOeahOaDheWGte+8jOWNsyB0eXBlIOS4jeWPmO+8jOWPmOWMluWxnuaAp+WSjOWGheWuuVxuICAgICAgICBpZiAodmlydHVhbERPTS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgIC8vIOaWh+acrOiKgueCueWPkeeUn+WPmOWMlu+8jOabtOaWsOWGheWuuVxuICAgICAgICAgICAgdXBkYXRlVGV4dE5vZGUodmlydHVhbERPTSwgb2xkVmlydHVhbERPTSwgb2xkRE9NKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5YWD57Sg6IqC54K55Y+R55Sf5Y+Y5YyW77yM5pu05paw5YWD57Sg55qE5bGe5oCnXG4gICAgICAgICAgICAvLyDmib7liLDmlrDml6foioLngrnnmoTlsZ7mgKfvvIzlr7nmr5Tlt67lvILvvIzmm7TmlrAgdmlydHVhbERPTS5wcm9wcyAgb2xkVmlydHVhbERPTS5wcm9wc1xuICAgICAgICAgICAgdXBkYXRlTm9kZUVsZW1lbnQob2xkRE9NLCB2aXJ0dWFsRE9NLCBvbGRWaXJ0dWFsRE9NKVxuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBrZXllZEVsZW1lbnRzID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBvbGRET00uY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZG9tRWxlbWVudCA9IG9sZERPTS5jaGlsZE5vZGVzW2ldXG4gICAgICAgICAgICBpZiAoZG9tRWxlbWVudC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdrZXknKVxuICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ZWRFbGVtZW50c1trZXldID0gZG9tRWxlbWVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYXNOb0tleSA9IE9iamVjdC5rZXlzKGtleWVkRWxlbWVudHMpLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICAvLyDmnIkga2V5IOS9v+eUqCBrZXkg5YGaIGRpZmYsIOayoeaciSBrZXkg55So57Si5byV5YGaIGRpZmZcbiAgICAgICAgaWYgKGhhc05vS2V5KSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGluZGV4IGRpZmZcbiAgICAgICAgICAgICAqIOWtkOiKgueCueWwhumAkOS4queahOmBjeWOhuS4i+WOu++8jO+8iOaaguaXtuWFiOeUqOe0ouW8le+8jOWQjumdouaUuemAoOaIkCBrZXnvvIlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmlydHVhbERPTS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBkaWZmKGNoaWxkLCBvbGRET00sIG9sZERPTS5jaGlsZE5vZGVzW2luZGV4XSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGtleSBkaWZmXG4gICAgICAgICAgICAgKiAx44CB5bCG5bim5pyJa2V55bGe5oCn55qE5a2Q5YWD57Sg5om+5Ye65p2l77yMIOaUvuWFpSBrZXllZEVsZW1lbnRzIOS4rVxuICAgICAgICAgICAgICogMuOAgemBjeWOhiB2aXJ0dWFsRE9NIOeahOWtkOWFg+e0oO+8jOiOt+WPluavj+S4quWtkOWFg+e0oOeahCBrZXkg5bGe5oCnXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZpcnR1YWxET00uY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gY2hpbGQucHJvcHMua2V5O1xuICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRvbUVsZW1lbnQgPSBrZXllZEVsZW1lbnRzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRET00uY2hpbGROb2Rlc1tpXSAmJiBvbGRET00uY2hpbGROb2Rlc1tpXSAhPT0gZG9tRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZERPTS5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgb2xkRE9NLmNoaWxkTm9kZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmsqHmnInlnKgga2V5ZWRFbGVtZW50cyDkuK3mib7liLDov5nkuKrlhYPntKDvvIzor7TmmI7mmK/kuIDkuKrmlrDlop7nmoTlhYPntKBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOebtOaOpeaMgui9vei/meS4quaWsOWinuWFg+e0oOWwseWPr+S7peS6hlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5L2G5piv6KaB5rOo5oSP5L2N572uXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VudEVsZW1lbnQoY2hpbGQsIG9sZERPTSwgb2xkRE9NLmNoaWxkTm9kZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Yig6Zmk6IqC54K5XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmlrDml6foioLngrnnmoTlr7nmr5TlrozmiJDku6XlkI7vvIzlpoLmnpzmnInlhYPntKDooqvliKDpmaTvvIjov5nph4zor7TnmoTmmK/liKDpmaTvvIzkuI3mmK/kv67mlLnvvIlcbiAgICAgICAgICog6YKj5LiA5a6a5pivIOaWsOiKgueCueeahOWtkOiKgueCuSDmr5Qg5pen6IqC54K555qE5a2Q6IqC54K5IOWwkVxuICAgICAgICAgKiDmiYDku6Xlj6/ku6XlvIDlkK/kuIDkuKrlgJLluo/nmoTlvqrnjq/vvIzlsIbntKLlvJXotoXlh7rvvIjmlrDoioLngrnlrZDoioLngrnkuKrmlbAgLTHvvInnmoToioLngrnnp7vpmaRcbiAgICAgICAgICovXG4gICAgICAgIGxldCBvbGRDaGlsZE5vZGVzID0gb2xkRE9NLmNoaWxkTm9kZXM7XG4gICAgICAgIGlmIChvbGRDaGlsZE5vZGVzLmxlbmd0aCA+IHZpcnR1YWxET00uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyDliKTmlq3miJDnq4vvvIzor7TmmI7mnInoioLngrnpnIDopoHliKDpmaRcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBvbGRDaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPiB2aXJ0dWFsRE9NLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGktLSkge1xuICAgICAgICAgICAgICAgIHVubW91bnROb2RlcyhvbGRDaGlsZE5vZGVzW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IG1vdW50Q29tcG9uZW50IGZyb20gXCIuL21vdW50Q29tcG9uZW50XCI7XG5pbXBvcnQgdXBkYXRlQ29tcG9uZW50IGZyb20gXCIuL3VwZGF0ZUNvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmQ29tcG9uZW50KHZpcnR1YWxET00sIG9sZENvbXBvbmVudCwgb2xkRE9NLCBjb250YWluZXIpIHtcbiAgICBpZiAoaXNTYW1lQ29tcG9uZW50KHZpcnR1YWxET00sIG9sZENvbXBvbmVudCkpIHtcbiAgICAgICAgLy8g5ZCM5LiA5Liq57uE5Lu277yM5pu05paw57uE5Lu2XG4gICAgICAgIHVwZGF0ZUNvbXBvbmVudCh2aXJ0dWFsRE9NLCBvbGRDb21wb25lbnQsIG9sZERPTSwgY29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOS4jeaYr+WQjOS4gOS4que7hOS7tu+8jOeUqOaWsOeahOe7hOS7tuabv+aNouaXp+eahOe7hOS7tlxuICAgICAgICAvLyDmm7/mjaLnmoTml7blgJnpnIDopoHnp7vpmaTljp/mnaXnmoTnu4Tku7bvvIzlm6DmraTmioogb2xkRE9NIOS5n+S8oOmAkui/h+WOu1xuICAgICAgICBtb3VudENvbXBvbmVudCh2aXJ0dWFsRE9NLCBjb250YWluZXIsIG9sZERPTSlcbiAgICB9XG59XG5cbi8vIOWIpOaWreaYr+WQpuaYr+WQjOS4gOS4que7hOS7tlxuZnVuY3Rpb24gaXNTYW1lQ29tcG9uZW50KHZpcnR1YWxET00sIG9sZENvbXBvbmVudCkge1xuICAgIC8vIHZpcnR1YWxET00udHlwZSDlrZjlgqjnmoTmmK/nu4Tku7bnmoTmnoTpgKDlh73mlbDvvIzlpoLmnpzlroPkuI4g5pen55qE57uE5Lu255qE5p6E6YCg5Ye95pWw55u4562J5YiZ6K+B5piO5piv5ZCM5LiA5Liq57uE5Lu2XG4gICAgcmV0dXJuIG9sZENvbXBvbmVudCAmJiB2aXJ0dWFsRE9NLnR5cGUgPT09IG9sZENvbXBvbmVudC5jb25zdHJ1Y3RvclxufVxuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlcidcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICByZW5kZXIsXG4gICAgQ29tcG9uZW50XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZpcnR1YWxET00pe1xuICAgIHJldHVybiB2aXJ0dWFsRE9NICYmIHR5cGVvZiB2aXJ0dWFsRE9NLnR5cGUgPT09ICdmdW5jdGlvbidcbn1cbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gXCIuL2lzRnVuY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGdW5jdGlvbkNvbXBvbmVudCh2aXJ0dWFsRE9NKSB7XG4gICAgY29uc3QgdHlwZSA9IHZpcnR1YWxET00udHlwZVxuICAgIHJldHVybiB0eXBlICYmIGlzRnVuY3Rpb24odmlydHVhbERPTSkgJiYgISh0eXBlLnByb3RvdHlwZSAmJiB0eXBlLnByb3RvdHlwZS5yZW5kZXIpXG59XG4iLCJpbXBvcnQgaXNGdW5jdGlvbkNvbXBvbmVudCBmcm9tIFwiLi9pc0Z1bmN0aW9uQ29tcG9uZW50XCI7XG5pbXBvcnQgbW91bnROYXRpdmVFbGVtZW50IGZyb20gXCIuL21vdW50TmF0aXZlRWxlbWVudFwiO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSBcIi4vaXNGdW5jdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb3VudENvbXBvbmVudCh2aXJ0dWFsRE9NLCBjb250YWluZXIsIG9sZERPTSl7XG4gICAgbGV0IG5leHRWaXJ0dWFsRE9NID0gbnVsbFxuICAgIGxldCBjb21wb25lbnQgPSBudWxsXG4gICAgLy8g5Yik5pat5piv5Ye95pWw57uE5Lu26L+Y5piv57G757uE5Lu2XG4gICAgaWYgKGlzRnVuY3Rpb25Db21wb25lbnQodmlydHVhbERPTSkpe1xuICAgICAgICAvLyDlh73mlbDnu4Tku7ZcbiAgICAgICAgbmV4dFZpcnR1YWxET00gPSBidWlsZEZ1bmN0aW9uQ29tcG9uZW50KHZpcnR1YWxET00pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOexu+e7hOS7tlxuICAgICAgICBuZXh0VmlydHVhbERPTSA9IGJ1aWxkQ2xhc3NDb21wb25lbnQodmlydHVhbERPTSlcbiAgICAgICAgY29tcG9uZW50ID0gbmV4dFZpcnR1YWxET00uY29tcG9uZW50XG4gICAgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24obmV4dFZpcnR1YWxET00pKXtcbiAgICAgICAgLy8g5LiN566h5piv5Ye95pWw57uE5Lu26L+Y5piv57G757uE5Lu2IGJ1aWxkIOS5i+WQju+8jOacieWPr+iDveWGhemDqOi/lOWbnueahOi/mOaYr+S4gOS4que7hOS7tu+8iOe7hOS7tuS4reS9v+eUqOe7hOS7tu+8iVxuICAgICAgICAvLyDov5nml7blgJnlpoLmnpwg6LCD55SoIG1vdW50TmF0aXZlRWxlbWVudCDmmK/plJnor6/nmoRcbiAgICAgICAgLy8gbW91bnROYXRpdmVFbGVtZW50IOWPquiDveaMgui9vSBuYXRpdmVFbGVtZW50XG4gICAgICAgIC8vIOaJgOS7peimgee7p+e7reiwg+eUqCBtb3VudENvbXBvbmVudCDlsIbnu4Tku7bmnIDnu4jovazmjaLkuLogbmF0aXZlRWxlbWVudFxuICAgICAgICBtb3VudENvbXBvbmVudChuZXh0VmlydHVhbERPTSwgY29udGFpbmVyLCBvbGRET00pXG4gICAgfWVsc2V7XG4gICAgICAgIC8vIOe7hOS7tuacgOe7iOi/lOWbnueahOmDveaYryBuYXRpdmVFbGVtZW5077yMIOaJgOS7peaOpeS4i+adpeS9v+eUqCBtb3VudE5hdGl2ZUVsZW1lbnQg5oyC6L29XG4gICAgICAgIG1vdW50TmF0aXZlRWxlbWVudChuZXh0VmlydHVhbERPTSwgY29udGFpbmVyLCBvbGRET00pXG4gICAgfVxuXG4gICAgLy8g5aSE55CG57uE5Lu255qEIHJlZiDlsZ7mgKdcbiAgICBpZiAoY29tcG9uZW50KXtcbiAgICAgICAgLy8g6LCD55So57uE5Lu255qEIGNvbXBvbmVudERpZE1vdW50IOeUn+WRveWRqOacn+mSqeWtkFxuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQoKVxuICAgICAgICBpZiAoY29tcG9uZW50LnByb3BzICYmIGNvbXBvbmVudC5wcm9wcy5yZWYpe1xuICAgICAgICAgICAgY29tcG9uZW50LnByb3BzLnJlZihjb21wb25lbnQpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRnVuY3Rpb25Db21wb25lbnQodmlydHVhbERPTSl7XG4gICAgLy8g5aaC5p6c5piv5LiA5Liq5Ye95pWw57uE5Lu277yMdHlwZeWImeWtmOWCqOS6hui/meS4quWHveaVsFxuICAgIC8vIOWHveaVsOe7hOS7tueahOWPguaVsOWtmOWCqOWcqCBwcm9wcyDkuK1cbiAgICByZXR1cm4gdmlydHVhbERPTS50eXBlKHZpcnR1YWxET00ucHJvcHMgfHwge30pXG59XG5cbmZ1bmN0aW9uIGJ1aWxkQ2xhc3NDb21wb25lbnQodmlydHVhbERPTSl7XG4gICAgLy8g57G757uE5Lu26ZyA6KaB55SoIG5ldyDlrp7kvovljJZcbiAgICAvLyDlrp7kvovljJbnmoTml7blgJnkuZ/lkIzmoLfkvKDpgJLnu5nnsbvnu4Tku7bnmoQgY29uc3RydWN0b3Ig5LiA5LiqIHByb3BzXG4gICAgLy8gbmV3IOeahOaXtuWAmeiwg+eUqOS6hiDlrZDnu4Tku7bnmoQgY29uc3RydWN0b3LvvIwg5YaF6YOo55qEIHN1cGVyKHByb3BzKSDosIPnlKjniLbnu4Tku7bnmoQgY29uc3RydWN0b3JcbiAgICAvLyDov5nmoLcgcHJvcHMg5bCx5a2Y5Zyo5LqOIOi/meS4quexu+S4ilxuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyB2aXJ0dWFsRE9NLnR5cGUodmlydHVhbERPTS5wcm9wcyB8fCB7fSlcbiAgICAvLyDov5Tlm57nsbvnu4Tku7bnmoQgcmVuZGVyIOe7k+aenFxuICAgIGNvbnN0IG5leHRWaXJ0dWFsRE9NID0gY29tcG9uZW50LnJlbmRlcigpXG4gICAgLy8g5bCG6L+Z5Liq57uE5Lu2IHJlbmRlciDlh73mlbDov5Tlm57nmoQg6Jma5oufRE9NIOS4iua3u+WKoOS4gOS4qiBjb21wb25lbnQg5bGe5oCnXG4gICAgLy8g55So5LqO5ZyoIOexu+e7hOS7tuabtOaWsOeahOaXtuWAmSDog73lpJ/mi7/liLDov5nkuKrnu4Tku7bnmoQgdkRPTe+8jOi/m+ihjGRpZmZcbiAgICAvLyDov5nph4znmoQgdkRPTSDkvJrov5Tlm57nu5kgbW91bnROYXRpdmVFbGVtZW50IOWBmuWFg+e0oOeahOaMgui9vVxuICAgIG5leHRWaXJ0dWFsRE9NLmNvbXBvbmVudCA9IGNvbXBvbmVudFxuICAgIHJldHVybiBuZXh0VmlydHVhbERPTVxufVxuXG5cbiIsImltcG9ydCBtb3VudE5hdGl2ZUVsZW1lbnQgZnJvbSBcIi4vbW91bnROYXRpdmVFbGVtZW50XCI7XG5pbXBvcnQgbW91bnRDb21wb25lbnQgZnJvbSBcIi4vbW91bnRDb21wb25lbnRcIjtcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gXCIuL2lzRnVuY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW91bnRFbGVtZW50KHZpcnR1YWxET00sIGNvbnRhaW5lciwgb2xkRE9NKSB7XG4gICAgLy8gQ29tcG9uZW50IFZTIE5hdGl2ZUVsZW1lbnRcbiAgICBpZiAoaXNGdW5jdGlvbih2aXJ0dWFsRE9NKSkge1xuICAgICAgICBtb3VudENvbXBvbmVudCh2aXJ0dWFsRE9NLCBjb250YWluZXIsIG9sZERPTSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBtb3VudE5hdGl2ZUVsZW1lbnQodmlydHVhbERPTSwgY29udGFpbmVyLCBvbGRET00pXG4gICAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZURPTUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRE9NRWxlbWVudFwiO1xuaW1wb3J0IHVubW91bnROb2RlcyBmcm9tIFwiLi91bm1vdW50Tm9kZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW91bnROYXRpdmVFbGVtZW50KHZpcnR1YWxET00sIGNvbnRhaW5lciwgb2xkRE9NKSB7XG4gICAgbGV0IG5ld0VsZW1lbnQgPSBjcmVhdGVET01FbGVtZW50KHZpcnR1YWxET00pXG5cbiAgICAvLyDlsIbmlrDnmoQgZG9tIOaMgui9vVxuICAgIGlmIChvbGRET00pIHtcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShuZXdFbGVtZW50LCBvbGRET00pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpXG4gICAgfVxuXG5cbiAgICAvLyDmjILovb1kb23kuYvliY3vvIzlpoLmnpzmnInml6fnmoQgZG9tIOmcgOimgeWcqOatpOenu+mZpFxuICAgIGlmIChvbGRET00pIHtcbiAgICAgICAgdW5tb3VudE5vZGVzKG9sZERPTSlcbiAgICB9XG5cblxuICAgIGxldCBjb21wb25lbnQgPSB2aXJ0dWFsRE9NLmNvbXBvbmVudDtcblxuICAgIC8vIOexu+e7hOS7tui/lOWbnueahCB2aXJ0dWFsRE9NIOaJjeaciSBjb21wb25lbnRcbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIC8vIOiwg+eUqCBDb21wb25lbnQg57G75LiK55qEIHNldERPTSDmlrnms5VcbiAgICAgICAgY29tcG9uZW50LnNldERPTShuZXdFbGVtZW50KVxuICAgIH1cbn1cbiIsImltcG9ydCBkaWZmIGZyb20gXCIuL2RpZmZcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcih2aXJ0dWFsRE9NLCBjb250YWluZXIsIG9sZERPTSA9IGNvbnRhaW5lci5maXJzdENoaWxkKXtcbiAgICBkaWZmKHZpcnR1YWxET00sIGNvbnRhaW5lciwgb2xkRE9NKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5tb3VudE5vZGVzKG5vZGUpe1xuICAgIG5vZGUucmVtb3ZlKClcbn1cbiIsImltcG9ydCBkaWZmIGZyb20gXCIuL2RpZmZcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50KHZpcnR1YWxET00sIG9sZENvbXBvbmVudCwgb2xkRE9NLCBjb250YWluZXIpIHtcbiAgICAvKipcbiAgICAgKiBvbGRDb21wb25lbnQg5Y+v5Lul5ou/5Yiw6L+Z5Liq57uE5Lu25a6e5L6LXG4gICAgICog6YCa6L+H5a6e5L6L6LCD55So5YW25YaF6YOo55qE5pu05paw5pa55rOVXG4gICAgICovXG5cbiAgICAvLyDlhYjosIPnlKjnu4Tku7bnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICBvbGRDb21wb25lbnQuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh2aXJ0dWFsRE9NLnByb3BzKVxuICAgIC8vIOWmguaenOWIpOaWree7hOS7tiBzaG91bGRDb21wb25lbnRVcGRhdGUg5omN6L+b6KGM5pu05paw5pON5L2cXG4gICAgaWYgKG9sZENvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGUodmlydHVhbERPTS5wcm9wcykpIHtcbiAgICAgICAgLy8g5ou/5Yiw57uE5Lu25Y6f5p2l55qEIHByb3BzXG4gICAgICAgIGNvbnN0IHByZXZQcm9wcyA9IG9sZENvbXBvbmVudC5wcm9wc1xuICAgICAgICBvbGRDb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZSh2aXJ0dWFsRE9NLnByb3BzKVxuXG4gICAgICAgIC8vIOabtOaWsOaTjeS9nOW8gOWni1xuICAgICAgICAvLyDmm7TmlrDnu4Tku7bnmoQgcHJvcHNcbiAgICAgICAgb2xkQ29tcG9uZW50LnVwZGF0ZVByb3BzKHZpcnR1YWxET00ucHJvcHMpXG4gICAgICAgIC8vIOmHjeaWsOeUn+aIkCB2aXJ0dWFsRE9NXG4gICAgICAgIGNvbnN0IG5leHRWaXJ0dWFsRE9NID0gb2xkQ29tcG9uZW50LnJlbmRlcigpXG4gICAgICAgIC8vIOmHjeaWsOiwg+eUqOS6hiByZW5kZXLvvIzlvpfliLDkuobmlrDnmoQgdmlydHVhbERPTVxuICAgICAgICAvLyDov5nph4zopoHkv53mjIEgdmlydHVhbERPTSDkuK3mnIkgY29tcG9uZW50IOWxnuaAp1xuICAgICAgICBuZXh0VmlydHVhbERPTS5jb21wb25lbnQgPSBvbGRDb21wb25lbnRcbiAgICAgICAgLy8gZGlmZiDmr5Tlr7lcbiAgICAgICAgZGlmZihuZXh0VmlydHVhbERPTSwgY29udGFpbmVyLCBvbGRET00pXG5cbiAgICAgICAgLy8g57uE5Lu25pu05paw5a6M5oiQ6LCD55SoIGNvbXBvbmVudERpZFVwZGF0ZSDpkqnlrZBcbiAgICAgICAgb2xkQ29tcG9uZW50LmNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHZpcnR1YWxET00ucHJvcHMpXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlTm9kZUVsZW1lbnQobmV3RWxlbWVudCwgdmlydHVhbERPTSwgb2xkVmlydHVhbERPTSA9IHt9KSB7XG4gICAgY29uc3QgbmV3UHJvcHMgPSB2aXJ0dWFsRE9NLnByb3BzIHx8IHt9O1xuICAgIGNvbnN0IG9sZFByb3BzID0gb2xkVmlydHVhbERPTS5wcm9wcyB8fCB7fTtcbiAgICBPYmplY3Qua2V5cyhuZXdQcm9wcykuZm9yRWFjaChwcm9wTmFtZSA9PiB7XG4gICAgICAgIC8vIOiOt+WPluWtmOWCqOWcqCBwcm9wcyDkuK3nmoTlsZ7mgKflgLxcbiAgICAgICAgY29uc3QgbmV3UHJvcHNWYWx1ZSA9IG5ld1Byb3BzW3Byb3BOYW1lXVxuICAgICAgICBjb25zdCBvbGRQcm9wc1ZhbHVlID0gb2xkUHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKG5ld1Byb3BzVmFsdWUgIT09IG9sZFByb3BzVmFsdWUpIHtcbiAgICAgICAgICAgIC8vIOWIpOaWreaYr+WQpuaYr+S6i+S7tuWxnuaApyBvbkNsaWNrID0+IGNsaWNrXG4gICAgICAgICAgICBpZiAocHJvcE5hbWUuc2xpY2UoMCwgMikgPT09ICdvbicpIHtcbiAgICAgICAgICAgICAgICAvLyDmi7/liLAg5LqL5Lu25ZCN56ewICdjbGljaydcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudE5hbWUgPSBwcm9wTmFtZS50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpO1xuICAgICAgICAgICAgICAgIC8vIOe7meWFg+e0oOa3u+WKoOS6i+S7tuebkeWQrFxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG5ld1Byb3BzVmFsdWUpXG4gICAgICAgICAgICAgICAgLy8gYWRkRXZlbnRMaXN0ZW5lciDlj6/ku6Xmt7vliqDlpJrkuKrnm5HlkKxcbiAgICAgICAgICAgICAgICAvLyDlnKjmraTlpITlpoLmnpzmm7TmlrDlhYPntKDnmoTkuovku7bvvIzopoHnp7vpmaTkuYvliY3nmoTkuovku7blpITnkIblh73mlbBcbiAgICAgICAgICAgICAgICBpZiAob2xkUHJvcHNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBvbGRQcm9wc1ZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICd2YWx1ZScgfHwgcHJvcE5hbWUgPT09ICdjaGVja2VkJykge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOWxnuaAp+WQjeensOaYr+ihqOWNleebuOWFs+eahCB2YWx1ZSDmiJbov5kgY2hlY2tlZFxuICAgICAgICAgICAgICAgIC8vIOmAmui/hyBlbGUudmFsdWUgPSB4eCDnmoTmlrnlvI/orr7nva5cbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50W3Byb3BOYW1lXSA9IG5ld1Byb3BzVmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgIT09ICdjaGlsZHJlbicpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBjaGlsZHJlbiDkuZ/lnKggcHJvcHMg5bGe5oCn5Lit77yMY2hpbGRyZW4g5Lya5Zyo5LiK5LiA5bGC5YGa5aSE55CG77yMXG4gICAgICAgICAgICAgICAgICog6L+Z6YeM5Y+q5a+55p+Q5LiqIG5hdGl2ZSDlhYPntKDlgZrlpITnkIbvvIzmt7vliqDkuovku7bjgIHlsZ7mgKfnrYlcbiAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgIC8vIOWmguaenOWxnuaAp+WQjeaYryBjbGFzc05hbWUg5YiZ57uZ5YWD57Sg6K6+572uIGNsYXNzXG4gICAgICAgICAgICAgICAgaWYgKHByb3BOYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBuZXdQcm9wc1ZhbHVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWFtuS7lueGn+aCieWImemAmui/hyBzZXRBdHRyaWJ1dGUg55u05o6l6K6+572uXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKHByb3BOYW1lLCBuZXdQcm9wc1ZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiDlpoLkvZXliKTmlq3lsZ7mgKfooqvliKDpmaTvvJ9cbiAgICAgKiDov5nph4zmnInkuKTkuKogdmlydHVhbERPTe+8jOS4gOS4quaWsOeahOS4gOS4quaXp+eahFxuICAgICAqIOiiq+WIoOmZpOeahOWxnuaAp++8jOWcqCBuZXdQcm9wcyDkuK3msqHmnInvvIxvbGRQcm9wcyDkuK3lrZjlnKhcbiAgICAgKiDlm6DmraTvvIzkuKTnm7jlr7nmr5Tlj6/ku6Xnm7TliLDmn5DkuKrlsZ7mgKfmmK/lkKbooqvliKDpmaRcbiAgICAgKiAtIOWmguaenOiiq+WIoOmZpOeahOWxnuaAp+aYr+S6i+S7tu+8jCByZW1vdmVFdmVudExpc3RlbmVyIOenu+mZpOS5i1xuICAgICAqIC0g5aaC5p6c6KKr5Yig6Zmk55qE5bGe5oCn5pivJ+WxnuaApyfvvIxyZW1vdmVBdHRyaWJ1dGUg56e76Zmk5LmLXG4gICAgICovXG4gICAgLy8g5aSE55CG5bGe5oCn6KKr5Yig6Zmk55qE5oOF5Ya1XG4gICAgT2JqZWN0LmtleXMob2xkUHJvcHMpLmZvckVhY2gocHJvcE5hbWUgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9wc1ZhbHVlID0gbmV3UHJvcHNbcHJvcE5hbWVdXG4gICAgICAgIGNvbnN0IG9sZFByb3BzVmFsdWUgPSBvbGRQcm9wc1twcm9wTmFtZV1cbiAgICAgICAgaWYgKCFuZXdQcm9wc1ZhbHVlKSB7XG4gICAgICAgICAgICAvLyDlsZ7mgKfooqvliKDpmaTkuoZcbiAgICAgICAgICAgIGlmIChwcm9wTmFtZS5zbGljZSgwLCAyKSA9PT0gJ29uJykge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+S6i+S7tu+8jOenu+mZpOWvueW6lOeahOS6i+S7tuebkeWQrFxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IHByb3BOYW1lLnRvTG93ZXJDYXNlKCkuc2xpY2UoMilcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBvbGRQcm9wc1ZhbHVlKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wTmFtZSAhPT0gJ2NoaWxkcmVuJykge1xuICAgICAgICAgICAgICAgIC8vIOi/memHjOS4gOagt+imgeaOkumZpCBjaGlsZHJlbiDnmoTmg4XlhrVcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShwcm9wTmFtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVUZXh0Tm9kZSh2aXJ0dWFsRE9NLCBvbGRWaXJ0dWFsRE9NLCBvbGRET00pIHtcbiAgICBpZiAodmlydHVhbERPTS5wcm9wcy50ZXh0Q29udGVudCAhPT0gb2xkVmlydHVhbERPTS5wcm9wcy50ZXh0Q29udGVudCkge1xuICAgICAgICBvbGRET00udGV4dENvbnRlbnQgPSB2aXJ0dWFsRE9NLnByb3BzLnRleHRDb250ZW50XG4gICAgICAgIG9sZERPTS5fdmlydHVhbERPTSA9IHZpcnR1YWxET01cbiAgICB9XG59XG4iLCJpbXBvcnQgVGlueVJlYWN0IGZyb20gXCIuL1RpbnlSZWFjdFwiO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG5cbmNvbnN0IHZpcnR1YWxET00gPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxPuS9oOWlvSBUaW55IFJlYWN0PC9oMT5cbiAgICAgICAgPGgyPijnvJbnoIHlv4XmnYDmioApJmhlYXJ0czs8L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAg5bWM5aWXMSA8ZGl2PuW1jOWllyAxLjE8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMyBkYXRhLXRlc3Q9XCJ0ZXN0XCI+KOinguWvnzog6L+Z5Liq5bCG5Lya6KKr5pS55Y+YKTwvaDM+XG4gICAgICAgIHsyID09IDEgJiYgPGRpdj7lpoLmnpwy5ZKMMeebuOetiea4suafk+W9k+WJjeWGheWuuTwvZGl2Pn1cbiAgICAgICAgezIgPT0gMiAmJiA8ZGl2PjI8L2Rpdj59XG4gICAgICAgIDxzcGFuPui/meaYr+S4gOauteWGheWuuTwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhbGVydChcIuS9oOWlvVwiKX0+54K55Ye75oiRPC9idXR0b24+XG4gICAgICAgIDxoMz7ov5nkuKrlsIbkvJrooqvliKDpmaQ8L2gzPlxuICAgICAgICAyLCAzXG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxuICAgIDwvZGl2PlxuKVxuXG5jb25zdCBtb2RpZnlET00gPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxPuS9oOWlvSBUaW55IFJlYWN0PC9oMT5cbiAgICAgICAgPGgyIGRhdGEtdGVzdD1cInRlc3QxMTFcIj4o57yW56CB5b+F5p2A5oqAKSZoZWFydHM7PC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIOW1jOWllzEgPGRpdj7ltYzlpZcgMS4xPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDMgZGF0YS10ZXN0PVwidGVzdFwiPijop4Llr586IOi/meS4quWwhuS8muiiq+aUueWPmCk8L2gzPlxuICAgICAgICB7MiA9PSAxICYmIDxkaXY+5aaC5p6cMuWSjDHnm7jnrYnmuLLmn5PlvZPliY3lhoXlrrk8L2Rpdj59XG4gICAgICAgIHsyID09IDIgJiYgPGRpdj4yPC9kaXY+fVxuICAgICAgICA8c3Bhbj7ov5nmmK/kuIDmrrXooqvkv67mlLnnmoTlhoXlrrk8L3NwYW4+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWxlcnQoXCLkvaDlpb0hISFcIil9PueCueWHu+aIkTwvYnV0dG9uPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17MTExfS8+XG4gICAgPC9kaXY+XG4pXG5cbmZ1bmN0aW9uIERlbW8ocHJvcHMpe1xuICAgIHJldHVybiA8ZGl2Pntwcm9wcy50aXRsZX0maGVhcnRzOzwvZGl2PlxufVxuXG5jb25zdCBIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIDxEZW1vIHRpdGxlPVwiSGVsbG8sIFJlYWN0XCIvPlxufVxuXG5jbGFzcyBBbHRlciBleHRlbmRzIFRpbnlSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdUaXRsZSdcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXG4gICAgfVxuICAgIGhhbmRsZUNsaWNrKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGl0bGU6ICdDaGFuZ2VkIFRpdGxlJ1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50RGlkTW91bnQnKVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6ICcsIHByb3BzKVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnRXaWxsVXBkYXRlJylcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnREaWRVcGRhdGUnKVxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8aDE+SGVsbG8sIFJlYWN0PC9oMT5cbiAgICAgICAgICAgIDxoMj57IHRoaXMuc3RhdGUudGl0bGUgfTwvaDI+XG4gICAgICAgICAgICA8aDM+bmFtZToge3RoaXMucHJvcHMubmFtZX08L2gzPlxuICAgICAgICAgICAgPGgzPmFnZToge3RoaXMucHJvcHMuYWdlfTwvaDM+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PueCueaIkeaUueWPmCBUaXRsZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5cbi8vIFRpbnlSZWFjdC5yZW5kZXIoPEFsdGVyIG5hbWU9XCJKYWNrXCIgYWdlPXsyMH0vPiwgcm9vdClcbi8vIC8vIFRpbnlSZWFjdC5yZW5kZXIoPEhlYWRlciAvPiwgcm9vdClcblxuLy8gVGlueVJlYWN0LnJlbmRlcih2aXJ0dWFsRE9NLCByb290KTtcbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgIC8vIFRpbnlSZWFjdC5yZW5kZXIobW9kaWZ5RE9NLCByb290KTtcbi8vICAgICBUaW55UmVhY3QucmVuZGVyKDxBbHRlciBuYW1lPVwiUm9zZVwiIGFnZT17MTh9Lz4sIHJvb3QpXG4vLyB9LCAyMDAwKVxuLy8gY29uc29sZS5sb2codmlydHVhbERPTSlcblxuXG5jbGFzcyBEZW1vUmVmIGV4dGVuZHMgVGlueVJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbnB1dC52YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hbGVydClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnRGVtb1JlZiBjb21wb25lbnREaWRNb3VudCcpXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj17aW5wdXQgPT4geyB0aGlzLmlucHV0ID0gaW5wdXQgfX0vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+54K55oiRPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPEFsdGVyIHJlZj17YWxlcnQgPT4gdGhpcy5hbGVydCA9IGFsZXJ0fSBuYW1lPVwiSmFja1wiIGFnZT17MjB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5jbGFzcyBQZXJzb25EaWZmVGVzdCBleHRlbmRzIFRpbnlSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwZXJzb25zOiBbXG4gICAgICAgICAgICAgICAge2lkOiAxLCBuYW1lOiAn5byg5LiJJ30sXG4gICAgICAgICAgICAgICAge2lkOiAyLCBuYW1lOiAn5p2O5ZubJ30sXG4gICAgICAgICAgICAgICAge2lkOiAzLCBuYW1lOiAn546L5LqUJ30sXG4gICAgICAgICAgICAgICAge2lkOiA0LCBuYW1lOiAn6LW15YWtJ30sXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKCl7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSlcbiAgICAgICAgbmV3U3RhdGUucGVyc29ucy5zcGxpY2UoMSwgMCwge2lkOiAxMCwgbmFtZTogJ+adjumAtSd9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGVyc29ucy5tYXAocGVyc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtwZXJzb24uaWR9PnsgcGVyc29uLm5hbWUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+54K55oiR5Lqk5o2i6aG65bqPPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuVGlueVJlYWN0LnJlbmRlcig8UGVyc29uRGlmZlRlc3QgLz4sIHJvb3QpXG4iXSwic291cmNlUm9vdCI6IiJ9