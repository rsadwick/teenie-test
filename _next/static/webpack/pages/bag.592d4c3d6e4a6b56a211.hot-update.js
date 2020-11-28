webpackHotUpdate_N_E("pages/bag",{

/***/ "./pages/bag.js":
/*!**********************!*\
  !*** ./pages/bag.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bag; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_BagProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BagProvider */ "./components/BagProvider.js");
/* harmony import */ var _components_CheckoutBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CheckoutBtn */ "./components/CheckoutBtn.js");
/* harmony import */ var _components_OrderSummary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/OrderSummary */ "./components/OrderSummary.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "C:\\Users\\drewe\\Documents\\GitHub\\CraftyBeeSupplies\\pages\\bag.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject13() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  padding: 1%;\n  background-color: #2ec4b6;\n  background: repeating-linear-gradient(\n    -55deg,\n    #ea638c,\n    #ea638c 10px,\n    #ea638c 10px,\n    #ea638c 90px\n  );\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: 100%;\n  flex: 1;\n  position: relative;\n\n  @media only screen and (max-width: 768px) {\n    position: fixed;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: 100%;\n  flex: 2;\n\n  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n    flex: 1;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  border: 1px solid #ccc;\n  background: #ccc;\n  border-radius: 5px;\n  margin: 2% 0 4% 0;\n  opacity: 0.9;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  font-size: 1.3rem;\n  font-weight: 500;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 0.8rem;\n  }\n\n  \n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  margin: 15px;\n  @media only screen and (max-width: 768px) {\n    margin: 0;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  flex: 1;\n  line-height: 0.7rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  flex: 0 0 13%;\n\n  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n    margin: 0px 6px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  flex: 0 0 14%;\n\n  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n    flex: 0 0 30%;\n  }\n\n  @media (min-width: 320px) and (max-width: 768px) {\n  flex: 0 0 32%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  padding: 15px;\n  -webkit-box-shadow: 0 8px 6px -6px #6f6f6f;\n  box-shadow: 0 8px 6px -6px #6f6f6f;\n  border: 1px solid #ccc;\n  margin: 3% 1%;\n  background-color: #fff;\n\n  @media only screen and (max-width: 768px) {\n    margin: 26px 0;\n    padding: 1px 0 9px 10px;\n    \n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  list-style-type: none;\n  margin: 0;\n  padding: 5px;\n\n  @media only screen and (max-width: 768px) {\n    margin: 28% 0 0 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var BagUnorderedList = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].ul(_templateObject());
_c = BagUnorderedList;
var BagListItem = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].li(_templateObject2());
_c2 = BagListItem;
var FlexRow = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject3());
_c3 = FlexRow;
var FlexSmallColumn = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject4());
_c4 = FlexSmallColumn;
var FlexMediumColumn = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject5());
_c5 = FlexMediumColumn;
var FlexLargeColumn = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject6());
_c6 = FlexLargeColumn;
var BagContainer = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject7());
_c7 = BagContainer;
var Row = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject8());
_c8 = Row;
var ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].p(_templateObject9());
_c9 = ProductInfo;
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].hr(_templateObject10());
_c10 = Divider;
var LeftColumn = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject11());
_c11 = LeftColumn;
var RightColumn = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject12());
_c12 = RightColumn;
var HeroBanner = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject13());
_c13 = HeroBanner;

var Bag = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Bag, _React$Component);

  var _super = _createSuper(Bag);

  function Bag(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Bag);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Bag, [{
    key: "renderDesktop",
    value: function renderDesktop() {
      var _this = this;

      return __jsx(_components_BagProvider__WEBPACK_IMPORTED_MODULE_7__["BagConsumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 7
        }
      }, function (_ref) {
        var bag = _ref.bag,
            handleDeleteItem = _ref.handleDeleteItem,
            handleQuantityChange = _ref.handleQuantityChange;
        return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 11
          }
        }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }
        }, __jsx("script", {
          src: "https://js.stripe.com/v3",
          key: "stripelib",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 15
          }
        })), __jsx(HeroBanner, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "container",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }
        }, __jsx("h1", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 17
          }
        }, "Bag"), __jsx("h4", {
          className: "hero-heading",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 17
          }
        }, "Latest Disney Theme products available now. Let users view sites from anywhere."), __jsx("a", {
          className: "button button-primary",
          href: "/product/1231",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 17
          }
        }, "shop now"))), __jsx("hr", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }
        }), __jsx(BagContainer, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }
        }, __jsx(Row, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 15
          }
        }, __jsx(LeftColumn, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 17
          }
        }, __jsx(BagUnorderedList, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 19
          }
        }, bag.map(function (product) {
          return __jsx(BagListItem, {
            key: product.sku,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 23
            }
          }, __jsx(FlexRow, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 25
            }
          }, __jsx(FlexSmallColumn, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 27
            }
          }, __jsx("img", {
            src: product.image,
            alt: product.name,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 29
            }
          })), __jsx(FlexLargeColumn, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 27
            }
          }, __jsx(ProductInfo, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 29
            }
          }, product.name), __jsx(ProductInfo, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 29
            }
          }, "$", product.price), __jsx(ProductInfo, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 29
            }
          }, __jsx("strong", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 42
            }
          }, "Quantity: "), product.quantity), _this.renderNotes(product), _this.renderMetaData(product))), __jsx(Divider, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 25
            }
          }), __jsx(FlexRow, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 25
            }
          }, __jsx(FlexMediumColumn, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 27
            }
          }, __jsx("input", {
            type: "number",
            min: "1",
            max: "100",
            value: product.quantity,
            onChange: function onChange(e) {
              return handleQuantityChange(e, product.sku);
            },
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 29
            }
          })), __jsx(FlexMediumColumn, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 27
            }
          }, __jsx("button", {
            className: "button button-secondary",
            onClick: function onClick() {
              return handleDeleteItem(product.sku);
            },
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 29
            }
          }, "Remove"))));
        }))), __jsx(RightColumn, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 17
          }
        }, __jsx(_components_OrderSummary__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 19
          }
        }), __jsx(_components_CheckoutBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          bag: bag,
          billingRequired: true,
          successUrl: "https://joyanthem.com/confirmation",
          cancelUrl: "https://joyanthem.com/cancel",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 19
          }
        })))));
      });
    }
  }, {
    key: "renderMobile",
    value: function renderMobile() {
      var _this2 = this;

      return __jsx(_components_BagProvider__WEBPACK_IMPORTED_MODULE_7__["BagConsumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 7
        }
      }, function (_ref2) {
        var bag = _ref2.bag,
            handleDeleteItem = _ref2.handleDeleteItem,
            handleQuantityChange = _ref2.handleQuantityChange;
        return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 11
          }
        }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 13
          }
        }, __jsx("script", {
          src: "https://js.stripe.com/v3",
          key: "stripelib",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 15
          }
        })), __jsx(HeroBanner, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "container",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 15
          }
        }, __jsx("h1", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 17
          }
        }, "Bag"), __jsx("h4", {
          className: "hero-heading",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 17
          }
        }, "Latest Disney Theme products available now. Let users view sites from anywhere."), __jsx("a", {
          className: "button button-primary",
          href: "/product/1231",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 17
          }
        }, "shop now"))), __jsx("hr", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }
        }), __jsx(BagContainer, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 13
          }
        }, __jsx(_components_OrderSummary__WEBPACK_IMPORTED_MODULE_9__["default"], {
          isBag: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 16
          }
        }), __jsx(Row, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 15
          }
        }, __jsx(LeftColumn, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 17
          }
        }, __jsx(BagUnorderedList, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 19
          }
        }, bag.map(function (product) {
          return __jsx(BagListItem, {
            key: product.sku,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 23
            }
          }, __jsx(FlexRow, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 25
            }
          }, __jsx(FlexSmallColumn, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 27
            }
          }, __jsx("img", {
            src: product.image,
            alt: product.name,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 29
            }
          })), __jsx(FlexLargeColumn, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 27
            }
          }, __jsx(ProductInfo, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 29
            }
          }, product.name), __jsx(ProductInfo, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 29
            }
          }, "$", product.price), __jsx(ProductInfo, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 29
            }
          }, __jsx("strong", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 42
            }
          }, "Quantity: "), product.quantity), _this2.renderNotes(product), _this2.renderMetaData(product))), __jsx(Divider, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 25
            }
          }), __jsx(FlexRow, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 25
            }
          }, __jsx(FlexMediumColumn, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 27
            }
          }, __jsx("input", {
            type: "number",
            min: "1",
            max: "100",
            value: product.quantity,
            onChange: function onChange(e) {
              return handleQuantityChange(e, product.sku);
            },
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 29
            }
          })), __jsx(FlexMediumColumn, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 27
            }
          }, __jsx("button", {
            className: "button button-secondary",
            onClick: function onClick() {
              return handleDeleteItem(product.sku);
            },
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 29
            }
          }, "Remove"))));
        }))), __jsx(_components_CheckoutBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          bag: bag,
          billingRequired: true,
          successUrl: "https://joyanthem.com/confirmation",
          cancelUrl: "https://joyanthem.com/cancel",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 19
          }
        }))));
      });
    }
  }, {
    key: "renderMetaData",
    value: function renderMetaData(product) {
      var _this3 = this;

      if (product.metadata && product.metadata.length > 0) {
        return product.metadata.map(function (data, index) {
          return __jsx("div", {
            key: index,
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 9
            }
          }, __jsx(ProductInfo, {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 11
            }
          }, __jsx("strong", {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 13
            }
          }, data.name), " : ", data.value));
        });
      }
    }
  }, {
    key: "renderNotes",
    value: function renderNotes(product) {
      if (product.noteContents) {
        return __jsx(ProductInfo, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 9
          }
        }, __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 11
          }
        }, "Notes:"), " ", product.noteContents);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (react_device_detect__WEBPACK_IMPORTED_MODULE_14__["isMobile"]) {
        return this.renderMobile();
      }

      return this.renderDesktop();
    }
  }]);

  return Bag;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;

$RefreshReg$(_c, "BagUnorderedList");
$RefreshReg$(_c2, "BagListItem");
$RefreshReg$(_c3, "FlexRow");
$RefreshReg$(_c4, "FlexSmallColumn");
$RefreshReg$(_c5, "FlexMediumColumn");
$RefreshReg$(_c6, "FlexLargeColumn");
$RefreshReg$(_c7, "BagContainer");
$RefreshReg$(_c8, "Row");
$RefreshReg$(_c9, "ProductInfo");
$RefreshReg$(_c10, "Divider");
$RefreshReg$(_c11, "LeftColumn");
$RefreshReg$(_c12, "RightColumn");
$RefreshReg$(_c13, "HeroBanner");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFnLmpzIl0sIm5hbWVzIjpbIkJhZ1Vub3JkZXJlZExpc3QiLCJzdHlsZWQiLCJ1bCIsIkJhZ0xpc3RJdGVtIiwibGkiLCJGbGV4Um93IiwiZGl2IiwiRmxleFNtYWxsQ29sdW1uIiwiRmxleE1lZGl1bUNvbHVtbiIsIkZsZXhMYXJnZUNvbHVtbiIsIkJhZ0NvbnRhaW5lciIsIlJvdyIsIlByb2R1Y3RJbmZvIiwicCIsIkRpdmlkZXIiLCJociIsIkxlZnRDb2x1bW4iLCJSaWdodENvbHVtbiIsIkhlcm9CYW5uZXIiLCJCYWciLCJwcm9wcyIsImJhZyIsImhhbmRsZURlbGV0ZUl0ZW0iLCJoYW5kbGVRdWFudGl0eUNoYW5nZSIsIm1hcCIsInByb2R1Y3QiLCJza3UiLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsInF1YW50aXR5IiwicmVuZGVyTm90ZXMiLCJyZW5kZXJNZXRhRGF0YSIsImUiLCJtZXRhZGF0YSIsImxlbmd0aCIsImRhdGEiLCJpbmRleCIsInZhbHVlIiwibm90ZUNvbnRlbnRzIiwiaXNNb2JpbGUiLCJyZW5kZXJNb2JpbGUiLCJyZW5kZXJEZXNrdG9wIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGdCQUFnQixHQUFHQywwREFBTSxDQUFDQyxFQUFWLG1CQUF0QjtLQUFNRixnQjtBQVVOLElBQU1HLFdBQVcsR0FBR0YsMERBQU0sQ0FBQ0csRUFBVixvQkFBakI7TUFBTUQsVztBQWVOLElBQU1FLE9BQU8sR0FBR0osMERBQU0sQ0FBQ0ssR0FBVixvQkFBYjtNQUFNRCxPO0FBTU4sSUFBTUUsZUFBZSxHQUFHTiwwREFBTSxDQUFDSyxHQUFWLG9CQUFyQjtNQUFNQyxlO0FBWU4sSUFBTUMsZ0JBQWdCLEdBQUdQLDBEQUFNLENBQUNLLEdBQVYsb0JBQXRCO01BQU1FLGdCO0FBUU4sSUFBTUMsZUFBZSxHQUFHUiwwREFBTSxDQUFDSyxHQUFWLG9CQUFyQjtNQUFNRyxlO0FBS04sSUFBTUMsWUFBWSxHQUFHVCwwREFBTSxDQUFDSyxHQUFWLG9CQUFsQjtNQUFNSSxZO0FBT04sSUFBTUMsR0FBRyxHQUFHViwwREFBTSxDQUFDSyxHQUFWLG9CQUFUO01BQU1LLEc7QUFPTixJQUFNQyxXQUFXLEdBQUdYLDBEQUFNLENBQUNZLENBQVYsb0JBQWpCO01BQU1ELFc7QUFXTixJQUFNRSxPQUFPLEdBQUdiLDBEQUFNLENBQUNjLEVBQVYscUJBQWI7T0FBTUQsTztBQVFOLElBQU1FLFVBQVUsR0FBR2YsMERBQU0sQ0FBQ0ssR0FBVixxQkFBaEI7T0FBTVUsVTtBQVdOLElBQU1DLFdBQVcsR0FBR2hCLDBEQUFNLENBQUNLLEdBQVYscUJBQWpCO09BQU1XLFc7QUFZTixJQUFNQyxVQUFVLEdBQUdqQiwwREFBTSxDQUFDSyxHQUFWLHFCQUFoQjtPQUFNWSxVOztJQWNlQyxHOzs7OztBQUNuQixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1hBLEtBRFc7QUFFbEI7Ozs7b0NBRWM7QUFBQTs7QUFDYixhQUNFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHO0FBQUEsWUFBR0MsR0FBSCxRQUFHQSxHQUFIO0FBQUEsWUFBUUMsZ0JBQVIsUUFBUUEsZ0JBQVI7QUFBQSxZQUEwQkMsb0JBQTFCLFFBQTBCQSxvQkFBMUI7QUFBQSxlQUNDLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQVEsYUFBRyxFQUFDLDBCQUFaO0FBQXVDLGFBQUcsRUFBQyxXQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FERixFQUtFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFJLG1CQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZGQUZGLEVBTUU7QUFBRyxtQkFBUyxFQUFDLHVCQUFiO0FBQXFDLGNBQUksRUFBQyxlQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GLENBREYsQ0FMRixFQWtCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBbEJGLEVBb0JFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHRixHQUFHLENBQUNHLEdBQUosQ0FBUSxVQUFDQyxPQUFEO0FBQUEsaUJBQ1AsTUFBQyxXQUFEO0FBQWEsZUFBRyxFQUFFQSxPQUFPLENBQUNDLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0U7QUFBSyxlQUFHLEVBQUVELE9BQU8sQ0FBQ0UsS0FBbEI7QUFBeUIsZUFBRyxFQUFFRixPQUFPLENBQUNHLElBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURGLEVBS0UsTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFjSCxPQUFPLENBQUNHLElBQXRCLENBREYsRUFFRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBZUgsT0FBTyxDQUFDSSxLQUF2QixDQUZGLEVBR0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFiLEVBQXlDSixPQUFPLENBQUNLLFFBQWpELENBSEYsRUFJRyxLQUFJLENBQUNDLFdBQUwsQ0FBaUJOLE9BQWpCLENBSkgsRUFLRyxLQUFJLENBQUNPLGNBQUwsQ0FBb0JQLE9BQXBCLENBTEgsQ0FMRixDQURGLEVBZUUsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRixFQWlCRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFO0FBQ0UsZ0JBQUksRUFBQyxRQURQO0FBRUUsZUFBRyxFQUFDLEdBRk47QUFHRSxlQUFHLEVBQUMsS0FITjtBQUlFLGlCQUFLLEVBQUVBLE9BQU8sQ0FBQ0ssUUFKakI7QUFLRSxvQkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEscUJBQ1JWLG9CQUFvQixDQUFDVSxDQUFELEVBQUlSLE9BQU8sQ0FBQ0MsR0FBWixDQURaO0FBQUEsYUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FERixFQWFFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFO0FBQ0UscUJBQVMsRUFBQyx5QkFEWjtBQUVFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUosZ0JBQWdCLENBQUNHLE9BQU8sQ0FBQ0MsR0FBVCxDQUF0QjtBQUFBLGFBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixDQWJGLENBakJGLENBRE87QUFBQSxTQUFSLENBREgsQ0FERixDQURGLEVBK0NFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBR0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSEYsRUFJRSxNQUFDLCtEQUFEO0FBQ0UsYUFBRyxFQUFFTCxHQURQO0FBRUUseUJBQWUsRUFBRSxJQUZuQjtBQUdFLG9CQUFVLEVBQUMsb0NBSGI7QUFJRSxtQkFBUyxFQUFDLDhCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFKRixDQS9DRixDQURGLENBcEJGLENBREQ7QUFBQSxPQURILENBREY7QUF3RkQ7OzttQ0FFYTtBQUFBOztBQUNaLGFBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0c7QUFBQSxZQUFHQSxHQUFILFNBQUdBLEdBQUg7QUFBQSxZQUFRQyxnQkFBUixTQUFRQSxnQkFBUjtBQUFBLFlBQTBCQyxvQkFBMUIsU0FBMEJBLG9CQUExQjtBQUFBLGVBQ0MsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBUSxhQUFHLEVBQUMsMEJBQVo7QUFBdUMsYUFBRyxFQUFDLFdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQURGLEVBS0UsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQUksbUJBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkZBRkYsRUFNRTtBQUFHLG1CQUFTLEVBQUMsdUJBQWI7QUFBcUMsY0FBSSxFQUFDLGVBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkYsQ0FERixDQUxGLEVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFsQkYsRUFvQkUsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRyxNQUFDLGdFQUFEO0FBQWMsZUFBSyxFQUFFLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESCxFQUVFLE1BQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDR0YsR0FBRyxDQUFDRyxHQUFKLENBQVEsVUFBQ0MsT0FBRDtBQUFBLGlCQUNQLE1BQUMsV0FBRDtBQUFhLGVBQUcsRUFBRUEsT0FBTyxDQUFDQyxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFO0FBQUssZUFBRyxFQUFFRCxPQUFPLENBQUNFLEtBQWxCO0FBQXlCLGVBQUcsRUFBRUYsT0FBTyxDQUFDRyxJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FERixFQUtFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBY0gsT0FBTyxDQUFDRyxJQUF0QixDQURGLEVBRUUsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWVILE9BQU8sQ0FBQ0ksS0FBdkIsQ0FGRixFQUdFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBYixFQUF5Q0osT0FBTyxDQUFDSyxRQUFqRCxDQUhGLEVBSUcsTUFBSSxDQUFDQyxXQUFMLENBQWlCTixPQUFqQixDQUpILEVBS0csTUFBSSxDQUFDTyxjQUFMLENBQW9CUCxPQUFwQixDQUxILENBTEYsQ0FERixFQWVFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsRUFpQkUsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLGVBQUcsRUFBQyxHQUZOO0FBR0UsZUFBRyxFQUFDLEtBSE47QUFJRSxpQkFBSyxFQUFFQSxPQUFPLENBQUNLLFFBSmpCO0FBS0Usb0JBQVEsRUFBRSxrQkFBQ0csQ0FBRDtBQUFBLHFCQUNSVixvQkFBb0IsQ0FBQ1UsQ0FBRCxFQUFJUixPQUFPLENBQUNDLEdBQVosQ0FEWjtBQUFBLGFBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBREYsRUFhRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRTtBQUNFLHFCQUFTLEVBQUMseUJBRFo7QUFFRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1KLGdCQUFnQixDQUFDRyxPQUFPLENBQUNDLEdBQVQsQ0FBdEI7QUFBQSxhQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FiRixDQWpCRixDQURPO0FBQUEsU0FBUixDQURILENBREYsQ0FERixFQWlESSxNQUFDLCtEQUFEO0FBQ0UsYUFBRyxFQUFFTCxHQURQO0FBRUUseUJBQWUsRUFBRSxJQUZuQjtBQUdFLG9CQUFVLEVBQUMsb0NBSGI7QUFJRSxtQkFBUyxFQUFDLDhCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFqREosQ0FGRixDQXBCRixDQUREO0FBQUEsT0FESCxDQURGO0FBd0ZEOzs7bUNBRWNJLE8sRUFBUztBQUFBOztBQUN0QixVQUFJQSxPQUFPLENBQUNTLFFBQVIsSUFBb0JULE9BQU8sQ0FBQ1MsUUFBUixDQUFpQkMsTUFBakIsR0FBMEIsQ0FBbEQsRUFBcUQ7QUFDbkQsZUFBT1YsT0FBTyxDQUFDUyxRQUFSLENBQWlCVixHQUFqQixDQUFxQixVQUFDWSxJQUFELEVBQU9DLEtBQVA7QUFBQSxpQkFDMUI7QUFBSyxlQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFTRCxJQUFJLENBQUNSLElBQWQsQ0FERixTQUNrQ1EsSUFBSSxDQUFDRSxLQUR2QyxDQURGLENBRDBCO0FBQUEsU0FBckIsQ0FBUDtBQU9EO0FBQ0Y7OztnQ0FFV2IsTyxFQUFTO0FBQ25CLFVBQUlBLE9BQU8sQ0FBQ2MsWUFBWixFQUEwQjtBQUN4QixlQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixPQUMyQmQsT0FBTyxDQUFDYyxZQURuQyxDQURGO0FBS0Q7QUFDRjs7OzZCQUVRO0FBQ1AsVUFBSUMsNkRBQUosRUFBYTtBQUNYLGVBQU8sS0FBS0MsWUFBTCxFQUFQO0FBQ0Q7O0FBRUQsYUFBTyxLQUFLQyxhQUFMLEVBQVA7QUFDRDs7OztFQXZOOEJDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmFnLjU5MmQ0YzNkNmU0YTZiNTZhMjExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYWdDb25zdW1lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQmFnUHJvdmlkZXInO1xyXG5pbXBvcnQgQ2hlY2tPdXRCdG4gZnJvbSAnLi4vY29tcG9uZW50cy9DaGVja291dEJ0bic7XHJcbmltcG9ydCBPcmRlclN1bW1hcnkgZnJvbSAnLi4vY29tcG9uZW50cy9PcmRlclN1bW1hcnknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuXHJcblxyXG5jb25zdCBCYWdVbm9yZGVyZWRMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogNXB4O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDI4JSAwIDAgMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCYWdMaXN0SXRlbSA9IHN0eWxlZC5saWBcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggIzZmNmY2ZjtcclxuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjNmY2ZjZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luOiAzJSAxJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDI2cHggMDtcclxuICAgIHBhZGRpbmc6IDFweCAwIDlweCAxMHB4O1xyXG4gICAgXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRmxleFJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgRmxleFNtYWxsQ29sdW1uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAwIDAgMTQlO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2NjdweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcclxuICAgIGZsZXg6IDAgMCAzMCU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGZsZXg6IDAgMCAzMiU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRmxleE1lZGl1bUNvbHVtbiA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMCAwIDEzJTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XHJcbiAgICBtYXJnaW46IDBweCA2cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRmxleExhcmdlQ29sdW1uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAxO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjdyZW07XHJcbmA7XHJcblxyXG5jb25zdCBCYWdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMTVweDtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdEluZm8gPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcblxyXG4gIFxyXG5gO1xyXG5cclxuY29uc3QgRGl2aWRlciA9IHN0eWxlZC5ocmBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMiUgMCA0JSAwO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuYDtcclxuXHJcbmNvbnN0IExlZnRDb2x1bW4gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gIGZsZXg6IDI7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDY2N3B4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSaWdodENvbHVtbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgZmxleDogMTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIZXJvQmFubmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjNGI2O1xyXG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXHJcbiAgICAtNTVkZWcsXHJcbiAgICAjZWE2MzhjLFxyXG4gICAgI2VhNjM4YyAxMHB4LFxyXG4gICAgI2VhNjM4YyAxMHB4LFxyXG4gICAgI2VhNjM4YyA5MHB4XHJcbiAgKTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRGVza3RvcCgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJhZ0NvbnN1bWVyPlxyXG4gICAgICAgIHsoeyBiYWcsIGhhbmRsZURlbGV0ZUl0ZW0sIGhhbmRsZVF1YW50aXR5Q2hhbmdlIH0pID0+IChcclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9qcy5zdHJpcGUuY29tL3YzXCIga2V5PVwic3RyaXBlbGliXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPEhlcm9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5CYWc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlcm8taGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICBMYXRlc3QgRGlzbmV5IFRoZW1lIHByb2R1Y3RzIGF2YWlsYWJsZSBub3cuIExldCB1c2VycyB2aWV3XHJcbiAgICAgICAgICAgICAgICAgIHNpdGVzIGZyb20gYW55d2hlcmUuXHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIgaHJlZj1cIi9wcm9kdWN0LzEyMzFcIj5cclxuICAgICAgICAgICAgICAgICAgc2hvcCBub3dcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9IZXJvQmFubmVyPlxyXG5cclxuICAgICAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgICAgICA8QmFnQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8TGVmdENvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgPEJhZ1Vub3JkZXJlZExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAge2JhZy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxCYWdMaXN0SXRlbSBrZXk9e3Byb2R1Y3Quc2t1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhTbWFsbENvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhTbWFsbENvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhMYXJnZUNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SW5mbz57cHJvZHVjdC5uYW1lfTwvUHJvZHVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEluZm8+JHtwcm9kdWN0LnByaWNlfTwvUHJvZHVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEluZm8+PHN0cm9uZz5RdWFudGl0eTogPC9zdHJvbmc+e3Byb2R1Y3QucXVhbnRpdHl9PC9Qcm9kdWN0SW5mbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck5vdGVzKHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWV0YURhdGEocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4TGFyZ2VDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleE1lZGl1bUNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0LnF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUXVhbnRpdHlDaGFuZ2UoZSwgcHJvZHVjdC5za3UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4TWVkaXVtQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleE1lZGl1bUNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVJdGVtKHByb2R1Y3Quc2t1KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhNZWRpdW1Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQmFnTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQmFnVW5vcmRlcmVkTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvTGVmdENvbHVtbj5cclxuICAgICAgICAgICAgICAgIDxSaWdodENvbHVtblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tPdXRCdG5cclxuICAgICAgICAgICAgICAgICAgICBiYWc9e2JhZ31cclxuICAgICAgICAgICAgICAgICAgICBiaWxsaW5nUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc1VybD1cImh0dHBzOi8vam95YW50aGVtLmNvbS9jb25maXJtYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFVybD1cImh0dHBzOi8vam95YW50aGVtLmNvbS9jYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9SaWdodENvbHVtbj5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9CYWdDb250YWluZXI+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JhZ0NvbnN1bWVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlck1vYmlsZSgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJhZ0NvbnN1bWVyPlxyXG4gICAgICAgIHsoeyBiYWcsIGhhbmRsZURlbGV0ZUl0ZW0sIGhhbmRsZVF1YW50aXR5Q2hhbmdlIH0pID0+IChcclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9qcy5zdHJpcGUuY29tL3YzXCIga2V5PVwic3RyaXBlbGliXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPEhlcm9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5CYWc8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlcm8taGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICBMYXRlc3QgRGlzbmV5IFRoZW1lIHByb2R1Y3RzIGF2YWlsYWJsZSBub3cuIExldCB1c2VycyB2aWV3XHJcbiAgICAgICAgICAgICAgICAgIHNpdGVzIGZyb20gYW55d2hlcmUuXHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIgaHJlZj1cIi9wcm9kdWN0LzEyMzFcIj5cclxuICAgICAgICAgICAgICAgICAgc2hvcCBub3dcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9IZXJvQmFubmVyPlxyXG5cclxuICAgICAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgICAgICA8QmFnQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICA8T3JkZXJTdW1tYXJ5IGlzQmFnPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8TGVmdENvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgPEJhZ1Vub3JkZXJlZExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAge2JhZy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxCYWdMaXN0SXRlbSBrZXk9e3Byb2R1Y3Quc2t1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhTbWFsbENvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhTbWFsbENvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhMYXJnZUNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SW5mbz57cHJvZHVjdC5uYW1lfTwvUHJvZHVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEluZm8+JHtwcm9kdWN0LnByaWNlfTwvUHJvZHVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEluZm8+PHN0cm9uZz5RdWFudGl0eTogPC9zdHJvbmc+e3Byb2R1Y3QucXVhbnRpdHl9PC9Qcm9kdWN0SW5mbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck5vdGVzKHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWV0YURhdGEocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4TGFyZ2VDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleE1lZGl1bUNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0LnF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUXVhbnRpdHlDaGFuZ2UoZSwgcHJvZHVjdC5za3UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4TWVkaXVtQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleE1lZGl1bUNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVJdGVtKHByb2R1Y3Quc2t1KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhNZWRpdW1Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQmFnTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQmFnVW5vcmRlcmVkTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvTGVmdENvbHVtbj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja091dEJ0blxyXG4gICAgICAgICAgICAgICAgICAgIGJhZz17YmFnfVxyXG4gICAgICAgICAgICAgICAgICAgIGJpbGxpbmdSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzVXJsPVwiaHR0cHM6Ly9qb3lhbnRoZW0uY29tL2NvbmZpcm1hdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVXJsPVwiaHR0cHM6Ly9qb3lhbnRoZW0uY29tL2NhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9CYWdDb250YWluZXI+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JhZ0NvbnN1bWVyPlxyXG4gICAgKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyTWV0YURhdGEocHJvZHVjdCkge1xyXG4gICAgaWYgKHByb2R1Y3QubWV0YWRhdGEgJiYgcHJvZHVjdC5tZXRhZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBwcm9kdWN0Lm1ldGFkYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPFByb2R1Y3RJbmZvPlxyXG4gICAgICAgICAgICA8c3Ryb25nPntkYXRhLm5hbWV9PC9zdHJvbmc+IDoge2RhdGEudmFsdWV9XHJcbiAgICAgICAgICA8L1Byb2R1Y3RJbmZvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlck5vdGVzKHByb2R1Y3QpIHtcclxuICAgIGlmIChwcm9kdWN0Lm5vdGVDb250ZW50cykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm9kdWN0SW5mbz5cclxuICAgICAgICAgIDxzdHJvbmc+Tm90ZXM6PC9zdHJvbmc+IHtwcm9kdWN0Lm5vdGVDb250ZW50c31cclxuICAgICAgICA8L1Byb2R1Y3RJbmZvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKGlzTW9iaWxlKXtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTW9iaWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyRGVza3RvcCgpO1xyXG4gIH1cclxuICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==