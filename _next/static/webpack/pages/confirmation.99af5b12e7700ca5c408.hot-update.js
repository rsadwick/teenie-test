webpackHotUpdate_N_E("pages/confirmation",{

/***/ "./pages/confirmation.js":
/*!*******************************!*\
  !*** ./pages/confirmation.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Confirmation; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_BagProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BagProvider */ "./components/BagProvider.js");
/* harmony import */ var _components_OrderSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/OrderSummary */ "./components/OrderSummary.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "C:\\Users\\drewe\\Documents\\GitHub\\CraftyBeeSupplies\\pages\\confirmation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject14() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  padding: 1% 14% 0 1%;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  padding: 1%;\n  background-color: #ccc;\n  background: repeating-linear-gradient(\n  -55deg,\n  #E71D36,\n  #E71D36 10px,\n  #FF9F1C 10px,\n  #FF9F1C 90px\n);\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    border: 1px solid #ccc;\n    background: #ccc;\n    border-radius: 5px;\n    margin: 2% 0;\n    opacity: 0.9;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n      line-height: 16px;\n    font-size: 0.9rem;\n\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  font-size: 1.3rem;\n  font-weight: 500;\n  line-height: 22px;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 0.9rem;\n    line-height: 7px;\n    \n  }\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    line-height: 0.2rem;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  flex: 1;\n  line-height: 0.2rem;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  flex: 0 0 16%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  flex: 0 0 26%%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  flex: 0 0 14%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  padding: 6px;\n  -webkit-box-shadow: 0 8px 6px -6px #6f6f6f;\n  box-shadow: 0 8px 6px -6px #6f6f6f;\n  border: 1px solid #ccc;\n  margin: 0 0 2% 0;\n  background-color: #fff;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  padding: 15px;\n  -webkit-box-shadow: 0 8px 6px -6px #6f6f6f;\n  box-shadow: 0 8px 6px -6px #6f6f6f;\n  border: 1px solid #ccc;\n  margin: 3% 1%;\n  background-color: #fff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  list-style-type: none;\n  margin: 0;\n  padding: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var BagUnorderedList = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].ul(_templateObject());
_c = BagUnorderedList;
var BagListItem = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].li(_templateObject2());
_c2 = BagListItem;
var BagListItemMobile = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].li(_templateObject3());
_c3 = BagListItemMobile;
var FlexRow = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject4());
_c4 = FlexRow;
var FlexSmallColumn = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject5());
_c5 = FlexSmallColumn;
var FlexSmallColumnMobile = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject6());
_c6 = FlexSmallColumnMobile;
var FlexMediumColumn = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject7());
var FlexLargeColumn = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject8());
_c7 = FlexLargeColumn;
var FlexLargeColumnMobile = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject9());
_c8 = FlexLargeColumnMobile;
var ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p(_templateObject10());
_c9 = ProductInfo;
var ProductTitleMobile = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p(_templateObject11());
_c10 = ProductTitleMobile;
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].hr(_templateObject12());
_c11 = Divider;
var HeroBanner = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject13());
_c12 = HeroBanner;
var MobileConfirmImage = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].img(_templateObject14());
_c13 = MobileConfirmImage;

var Confirmation = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Confirmation, _React$Component);

  var _super = _createSuper(Confirmation);

  function Confirmation() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Confirmation);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Confirmation, [{
    key: "renderDesktop",
    value: function renderDesktop() {
      var _this = this;

      return (
        /* Then we use our context through render props */
        __jsx(_components_BagProvider__WEBPACK_IMPORTED_MODULE_7__["BagConsumer"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 7
          }
        }, function (_ref) {
          var bag = _ref.bag,
              logOrder = _ref.logOrder;
          return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 11
            }
          }, __jsx(HeroBanner, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 13
            }
          }, __jsx("div", {
            className: "container",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }
          }, __jsx("h1", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 17
            }
          }, "It's Yours!"), __jsx("h4", {
            className: "hero-heading",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }
          }, "Your package will arrive soon!"), __jsx("a", {
            className: "button button-primary",
            href: "/product/1231",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }
          }, "shop now"))), __jsx("hr", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 13
            }
          }), __jsx("div", {
            className: "row",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 13
            }
          }, __jsx("div", {
            className: "column _60",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }
          }, __jsx(BagUnorderedList, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 17
            }
          }, bag.map(function (product) {
            return __jsx(BagListItem, {
              key: product.sku,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 21
              }
            }, __jsx(FlexRow, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 23
              }
            }, __jsx(FlexSmallColumn, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 25
              }
            }, __jsx("img", {
              src: product.image,
              alt: product.name,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 27
              }
            })), __jsx(FlexLargeColumn, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 25
              }
            }, __jsx(ProductInfo, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 27
              }
            }, product.name), __jsx(ProductInfo, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 27
              }
            }, "$", product.price), __jsx("p", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 27
              }
            }, __jsx("strong", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 30
              }
            }, "Quantity:"), " ", product.quantity), _this.renderNotes(product), _this.renderMetaData(product))), __jsx(Divider, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 23
              }
            }));
          }))), __jsx("div", {
            className: "column _50",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }
          }, __jsx(_components_OrderSummary__WEBPACK_IMPORTED_MODULE_8__["default"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 17
            }
          }))), _this.logOrderTransaction(logOrder));
        })
      );
    }
  }, {
    key: "renderMobile",
    value: function renderMobile() {
      var _this2 = this;

      return (
        /* Then we use our context through render props */
        __jsx(_components_BagProvider__WEBPACK_IMPORTED_MODULE_7__["BagConsumer"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 7
          }
        }, function (_ref2) {
          var bag = _ref2.bag,
              logOrder = _ref2.logOrder;
          return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 11
            }
          }, __jsx(HeroBanner, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 13
            }
          }, __jsx("div", {
            className: "container",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }
          }, __jsx("h1", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 17
            }
          }, "It's Yours!"), __jsx("h4", {
            className: "hero-heading",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 17
            }
          }, "Your package will arrive soon!"), __jsx("a", {
            className: "button button-primary",
            href: "/product/1231",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 17
            }
          }, "shop now"))), __jsx("hr", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 13
            }
          }), __jsx(BagUnorderedList, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 17
            }
          }, bag.map(function (product) {
            return __jsx(BagListItemMobile, {
              key: product.sku,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 21
              }
            }, __jsx(FlexRow, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 23
              }
            }, __jsx(FlexSmallColumnMobile, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 25
              }
            }, __jsx(MobileConfirmImage, {
              src: product.image,
              alt: product.name,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 27
              }
            })), __jsx(FlexLargeColumnMobile, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 25
              }
            }, __jsx(ProductTitleMobile, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 27
              }
            }, product.name), __jsx(ProductInfo, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 27
              }
            }, "$", product.price), __jsx(ProductInfo, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 27
              }
            }, __jsx("strong", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 40
              }
            }, "Quantity:"), " ", product.quantity), _this2.renderNotes(product), _this2.renderMetaData(product))), __jsx(Divider, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 23
              }
            }));
          })), _this2.logOrderTransaction(logOrder), __jsx("hr", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 13
            }
          }), __jsx(HeroBanner, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 13
            }
          }, __jsx("div", {
            className: "container",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }
          }, __jsx(_components_OrderSummary__WEBPACK_IMPORTED_MODULE_8__["default"], {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 15
            }
          }))));
        })
      );
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
              lineNumber: 231,
              columnNumber: 9
            }
          }, __jsx(ProductInfo, {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 13
            }
          }, __jsx("strong", {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 26
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
            lineNumber: 240,
            columnNumber: 15
          }
        }, __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 28
          }
        }, "Notes:"), " ", product.noteContents);
      }
    }
  }, {
    key: "logOrderTransaction",
    value: function logOrderTransaction(callback) {// callback();
    }
  }, {
    key: "render",
    value: function render() {
      if (react_device_detect__WEBPACK_IMPORTED_MODULE_12__["isMobile"]) {
        return this.renderMobile();
      }

      return this.renderDesktop();
    }
  }]);

  return Confirmation;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;

$RefreshReg$(_c, "BagUnorderedList");
$RefreshReg$(_c2, "BagListItem");
$RefreshReg$(_c3, "BagListItemMobile");
$RefreshReg$(_c4, "FlexRow");
$RefreshReg$(_c5, "FlexSmallColumn");
$RefreshReg$(_c6, "FlexSmallColumnMobile");
$RefreshReg$(_c7, "FlexLargeColumn");
$RefreshReg$(_c8, "FlexLargeColumnMobile");
$RefreshReg$(_c9, "ProductInfo");
$RefreshReg$(_c10, "ProductTitleMobile");
$RefreshReg$(_c11, "Divider");
$RefreshReg$(_c12, "HeroBanner");
$RefreshReg$(_c13, "MobileConfirmImage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29uZmlybWF0aW9uLmpzIl0sIm5hbWVzIjpbIkJhZ1Vub3JkZXJlZExpc3QiLCJzdHlsZWQiLCJ1bCIsIkJhZ0xpc3RJdGVtIiwibGkiLCJCYWdMaXN0SXRlbU1vYmlsZSIsIkZsZXhSb3ciLCJkaXYiLCJGbGV4U21hbGxDb2x1bW4iLCJGbGV4U21hbGxDb2x1bW5Nb2JpbGUiLCJGbGV4TWVkaXVtQ29sdW1uIiwiRmxleExhcmdlQ29sdW1uIiwiRmxleExhcmdlQ29sdW1uTW9iaWxlIiwiUHJvZHVjdEluZm8iLCJwIiwiUHJvZHVjdFRpdGxlTW9iaWxlIiwiRGl2aWRlciIsImhyIiwiSGVyb0Jhbm5lciIsIk1vYmlsZUNvbmZpcm1JbWFnZSIsImltZyIsIkNvbmZpcm1hdGlvbiIsImJhZyIsImxvZ09yZGVyIiwibWFwIiwicHJvZHVjdCIsInNrdSIsImltYWdlIiwibmFtZSIsInByaWNlIiwicXVhbnRpdHkiLCJyZW5kZXJOb3RlcyIsInJlbmRlck1ldGFEYXRhIiwibG9nT3JkZXJUcmFuc2FjdGlvbiIsIm1ldGFkYXRhIiwibGVuZ3RoIiwiZGF0YSIsImluZGV4IiwidmFsdWUiLCJub3RlQ29udGVudHMiLCJjYWxsYmFjayIsImlzTW9iaWxlIiwicmVuZGVyTW9iaWxlIiwicmVuZGVyRGVza3RvcCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxnQkFBZ0IsR0FBR0MsMERBQU0sQ0FBQ0MsRUFB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QUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDSSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBU0QsSUFBSSxDQUFDUixJQUFkLENBQWIsU0FBNkNRLElBQUksQ0FBQ0UsS0FBbEQsQ0FESixDQUQwQjtBQUFBLFNBQXJCLENBQVA7QUFLRDtBQUNGOzs7Z0NBRVdiLE8sRUFBUTtBQUNsQixVQUFHQSxPQUFPLENBQUNjLFlBQVgsRUFBd0I7QUFDdEIsZUFBUSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWIsT0FBc0NkLE9BQU8sQ0FBQ2MsWUFBOUMsQ0FBUjtBQUNEO0FBQ0Y7Ozt3Q0FFbUJDLFEsRUFBUyxDQUM1QjtBQUNBOzs7NkJBRVE7QUFDUCxVQUFHQyw2REFBSCxFQUFZO0FBQ1YsZUFBTyxLQUFLQyxZQUFMLEVBQVA7QUFDRDs7QUFDRCxhQUFPLEtBQUtDLGFBQUwsRUFBUDtBQUNEOzs7O0VBaEp1Q0MsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb25maXJtYXRpb24uOTlhZjViMTJlNzcwMGNhNWM0MDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhZ0NvbnN1bWVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9CYWdQcm92aWRlcic7XHJcbmltcG9ydCBPcmRlclN1bW1hcnkgZnJvbSAnLi4vY29tcG9uZW50cy9PcmRlclN1bW1hcnknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnO1xyXG5cclxuXHJcbmNvbnN0IEJhZ1Vub3JkZXJlZExpc3QgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbmBcclxuXHJcbmNvbnN0IEJhZ0xpc3RJdGVtID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjNmY2ZjZmO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICM2ZjZmNmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtYXJnaW46IDMlIDElO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmBcclxuXHJcbmNvbnN0IEJhZ0xpc3RJdGVtTW9iaWxlID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmc6IDZweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICM2ZjZmNmY7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggIzZmNmY2ZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbjogMCAwIDIlIDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuYFxyXG5cclxuY29uc3QgRmxleFJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG5gXHJcblxyXG5jb25zdCBGbGV4U21hbGxDb2x1bW4gPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDAgMCAxNCU7XHJcbmBcclxuXHJcbmNvbnN0IEZsZXhTbWFsbENvbHVtbk1vYmlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMCAwIDI2JSU7XHJcbmBcclxuXHJcbmNvbnN0IEZsZXhNZWRpdW1Db2x1bW4gPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDAgMCAxNiU7XHJcbmBcclxuXHJcbmNvbnN0IEZsZXhMYXJnZUNvbHVtbiA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTtcclxuICBsaW5lLWhlaWdodDogMC4ycmVtO1xyXG5gXHJcblxyXG5jb25zdCBGbGV4TGFyZ2VDb2x1bW5Nb2JpbGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgbGluZS1oZWlnaHQ6IDAuMnJlbTtcclxuYDtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RJbmZvID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBsaW5lLWhlaWdodDogN3B4O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuYFxyXG5cclxuY29uc3QgUHJvZHVjdFRpdGxlTW9iaWxlID0gc3R5bGVkLnBgXHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcblxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IERpdmlkZXIgPSBzdHlsZWQuaHJgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMiUgMDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuYFxyXG5cclxuY29uc3QgSGVyb0Jhbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxyXG4gIC01NWRlZyxcclxuICAjRTcxRDM2LFxyXG4gICNFNzFEMzYgMTBweCxcclxuICAjRkY5RjFDIDEwcHgsXHJcbiAgI0ZGOUYxQyA5MHB4XHJcbik7XHJcbmBcclxuXHJcbmNvbnN0IE1vYmlsZUNvbmZpcm1JbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgcGFkZGluZzogMSUgMTQlIDAgMSU7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maXJtYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIFxyXG4gIHJlbmRlckRlc2t0b3AoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIC8qIFRoZW4gd2UgdXNlIG91ciBjb250ZXh0IHRocm91Z2ggcmVuZGVyIHByb3BzICovXHJcbiAgICAgIDxCYWdDb25zdW1lcj5cclxuICAgICAgICB7KHsgYmFnLCBsb2dPcmRlciB9KSA9PiAoXHJcbiAgICAgICAgICA8TGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPEhlcm9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5JdCdzIFlvdXJzITwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVyby1oZWFkaW5nXCI+WW91ciBwYWNrYWdlIHdpbGwgYXJyaXZlIHNvb24hPC9oND5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiIGhyZWY9XCIvcHJvZHVjdC8xMjMxXCI+c2hvcCBub3c8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvSGVyb0Jhbm5lcj5cclxuXHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gXzYwXCI+XHJcbiAgICAgICAgICAgICAgICA8QmFnVW5vcmRlcmVkTGlzdD5cclxuICAgICAgICAgICAgICAgICAge2JhZy5tYXAocHJvZHVjdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZ0xpc3RJdGVtIGtleT17cHJvZHVjdC5za3V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZsZXhSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4U21hbGxDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD17cHJvZHVjdC5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhTbWFsbENvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4TGFyZ2VDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJbmZvPntwcm9kdWN0Lm5hbWV9PC9Qcm9kdWN0SW5mbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEluZm8+JHtwcm9kdWN0LnByaWNlfTwvUHJvZHVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5RdWFudGl0eTo8L3N0cm9uZz4ge3Byb2R1Y3QucXVhbnRpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck5vdGVzKHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1ldGFEYXRhKHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4TGFyZ2VDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFnTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9CYWdVbm9yZGVyZWRMaXN0PlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gXzUwXCI+XHJcbiAgICAgICAgICAgICAgICA8T3JkZXJTdW1tYXJ5IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3RoaXMubG9nT3JkZXJUcmFuc2FjdGlvbihsb2dPcmRlcil9XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JhZ0NvbnN1bWVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlck1vYmlsZSgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLyogVGhlbiB3ZSB1c2Ugb3VyIGNvbnRleHQgdGhyb3VnaCByZW5kZXIgcHJvcHMgKi9cclxuICAgICAgPEJhZ0NvbnN1bWVyPlxyXG4gICAgICAgIHsoeyBiYWcsIGxvZ09yZGVyIH0pID0+IChcclxuICAgICAgICAgIDxMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8SGVyb0Jhbm5lcj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkl0J3MgWW91cnMhPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZXJvLWhlYWRpbmdcIj5Zb3VyIHBhY2thZ2Ugd2lsbCBhcnJpdmUgc29vbiE8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIgaHJlZj1cIi9wcm9kdWN0LzEyMzFcIj5zaG9wIG5vdzwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9IZXJvQmFubmVyPlxyXG5cclxuICAgICAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJhZ1Vub3JkZXJlZExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIHtiYWcubWFwKHByb2R1Y3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWdMaXN0SXRlbU1vYmlsZSBrZXk9e3Byb2R1Y3Quc2t1fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleFNtYWxsQ29sdW1uTW9iaWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2JpbGVDb25maXJtSW1hZ2Ugc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4U21hbGxDb2x1bW5Nb2JpbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleExhcmdlQ29sdW1uTW9iaWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0VGl0bGVNb2JpbGU+e3Byb2R1Y3QubmFtZX08L1Byb2R1Y3RUaXRsZU1vYmlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEluZm8+JHtwcm9kdWN0LnByaWNlfTwvUHJvZHVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJbmZvPjxzdHJvbmc+UXVhbnRpdHk6PC9zdHJvbmc+IHtwcm9kdWN0LnF1YW50aXR5fTwvUHJvZHVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTm90ZXMocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWV0YURhdGEocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhMYXJnZUNvbHVtbk1vYmlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWdMaXN0SXRlbU1vYmlsZT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0JhZ1Vub3JkZXJlZExpc3Q+XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5sb2dPcmRlclRyYW5zYWN0aW9uKGxvZ09yZGVyKX1cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxIZXJvQmFubmVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0hlcm9CYW5uZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JhZ0NvbnN1bWVyPlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyTWV0YURhdGEocHJvZHVjdCl7XHJcbiAgICBpZihwcm9kdWN0Lm1ldGFkYXRhICYmIHByb2R1Y3QubWV0YWRhdGEubGVuZ3RoID4gMCl7XHJcbiAgICAgIHJldHVybiBwcm9kdWN0Lm1ldGFkYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8UHJvZHVjdEluZm8+PHN0cm9uZz57ZGF0YS5uYW1lfTwvc3Ryb25nPiA6IHtkYXRhLnZhbHVlfTwvUHJvZHVjdEluZm8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJOb3Rlcyhwcm9kdWN0KXtcclxuICAgIGlmKHByb2R1Y3Qubm90ZUNvbnRlbnRzKXtcclxuICAgICAgcmV0dXJuICA8UHJvZHVjdEluZm8+PHN0cm9uZz5Ob3Rlczo8L3N0cm9uZz4ge3Byb2R1Y3Qubm90ZUNvbnRlbnRzfTwvUHJvZHVjdEluZm8+O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9nT3JkZXJUcmFuc2FjdGlvbihjYWxsYmFjayl7XHJcbiAgIC8vIGNhbGxiYWNrKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmKGlzTW9iaWxlKXtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTW9iaWxlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJEZXNrdG9wKCk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=