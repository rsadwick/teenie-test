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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  padding: 0% 2% 0% 3%;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  padding: 1%;\n  background-color: #ccc;\n  background: repeating-linear-gradient(\n    -55deg,\n    #e71d36,\n    #e71d36 10px,\n    #ff9f1c 10px,\n    #ff9f1c 90px\n  );\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  border: 1px solid #ccc;\n  background: #ccc;\n  border-radius: 5px;\n  margin: 2% 0;\n  opacity: 0.9;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  line-height: 16px;\n  font-size: 0.9rem;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  font-size: 1.3rem;\n  font-weight: 500;\n  line-height: 22px;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 0.9rem;\n    line-height: 7px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  line-height: 0.2rem;\n"]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  flex: 0 0 26%;\n"]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n"]);

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
            lineNumber: 104,
            columnNumber: 7
          }
        }, function (_ref) {
          var bag = _ref.bag,
              logOrder = _ref.logOrder;
          return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 11
            }
          }, __jsx(HeroBanner, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 13
            }
          }, __jsx("div", {
            className: "container",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }
          }, __jsx("h1", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }
          }, "It's Yours!"), __jsx("h4", {
            className: "hero-heading",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }
          }, "Your package will arrive soon!"), __jsx("a", {
            className: "button button-primary",
            href: "/product/1231",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }
          }, "shop now"))), __jsx("hr", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 13
            }
          }), __jsx("div", {
            className: "row",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 13
            }
          }, __jsx("div", {
            className: "column _60",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }
          }, __jsx(BagUnorderedList, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }
          }, bag.map(function (product) {
            return __jsx(BagListItem, {
              key: product.sku,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 21
              }
            }, __jsx(FlexRow, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 23
              }
            }, __jsx(FlexSmallColumn, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 25
              }
            }, __jsx("img", {
              src: product.image,
              alt: product.name,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 27
              }
            })), __jsx(FlexLargeColumn, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 25
              }
            }, __jsx(ProductInfo, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 27
              }
            }, product.name), __jsx(ProductInfo, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 27
              }
            }, "$", product.price), __jsx("p", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 27
              }
            }, __jsx("strong", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 29
              }
            }, "Quantity:"), " ", product.quantity), _this.renderNotes(product), _this.renderMetaData(product))), __jsx(Divider, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 23
              }
            }));
          }))), __jsx("div", {
            className: "column _50",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }
          }, __jsx(_components_OrderSummary__WEBPACK_IMPORTED_MODULE_8__["default"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147,
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
            lineNumber: 160,
            columnNumber: 7
          }
        }, function (_ref2) {
          var bag = _ref2.bag,
              logOrder = _ref2.logOrder;
          return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 11
            }
          }, __jsx(HeroBanner, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 13
            }
          }, __jsx("div", {
            className: "container",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }
          }, __jsx("h1", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 17
            }
          }, "It's Yours!"), __jsx("h4", {
            className: "hero-heading",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 17
            }
          }, "Your package will arrive soon!"), __jsx("a", {
            className: "button button-primary",
            href: "/product/1231",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 17
            }
          }, "shop now"))), __jsx("hr", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 13
            }
          }), __jsx(BagUnorderedList, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 13
            }
          }, bag.map(function (product) {
            return __jsx(BagListItemMobile, {
              key: product.sku,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 17
              }
            }, __jsx(FlexRow, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 19
              }
            }, __jsx(FlexSmallColumnMobile, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 21
              }
            }, __jsx(MobileConfirmImage, {
              src: product.image,
              alt: product.name,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 23
              }
            })), __jsx(FlexLargeColumnMobile, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 21
              }
            }, __jsx(ProductTitleMobile, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 23
              }
            }, product.name), __jsx(ProductInfo, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 23
              }
            }, "$", product.price), __jsx(ProductInfo, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 23
              }
            }, __jsx("strong", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 25
              }
            }, "Quantity:"), " ", product.quantity), _this2.renderNotes(product), _this2.renderMetaData(product))), __jsx(Divider, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 19
              }
            }));
          })), _this2.logOrderTransaction(logOrder), __jsx("hr", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 13
            }
          }), __jsx(HeroBanner, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 13
            }
          }, __jsx(_components_OrderSummary__WEBPACK_IMPORTED_MODULE_8__["default"], {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }
          })));
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
              lineNumber: 217,
              columnNumber: 9
            }
          }, __jsx(ProductInfo, {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 11
            }
          }, __jsx("strong", {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219,
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
            lineNumber: 229,
            columnNumber: 9
          }
        }, __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 11
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29uZmlybWF0aW9uLmpzIl0sIm5hbWVzIjpbIkJhZ1Vub3JkZXJlZExpc3QiLCJzdHlsZWQiLCJ1bCIsIkJhZ0xpc3RJdGVtIiwibGkiLCJCYWdMaXN0SXRlbU1vYmlsZSIsIkZsZXhSb3ciLCJkaXYiLCJGbGV4U21hbGxDb2x1bW4iLCJGbGV4U21hbGxDb2x1bW5Nb2JpbGUiLCJGbGV4TWVkaXVtQ29sdW1uIiwiRmxleExhcmdlQ29sdW1uIiwiRmxleExhcmdlQ29sdW1uTW9iaWxlIiwiUHJvZHVjdEluZm8iLCJwIiwiUHJvZHVjdFRpdGxlTW9iaWxlIiwiRGl2aWRlciIsImhyIiwiSGVyb0Jhbm5lciIsIk1vYmlsZUNvbmZpcm1JbWFnZSIsImltZyIsIkNvbmZpcm1hdGlvbiIsImJhZyIsImxvZ09yZGVyIiwibWFwIiwicHJvZHVjdCIsInNrdSIsImltYWdlIiwibmFtZSIsInByaWNlIiwicXVhbnRpdHkiLCJyZW5kZXJOb3RlcyIsInJlbmRlck1ldGFEYXRhIiwibG9nT3JkZXJUcmFuc2FjdGlvbiIsIm1ldGFkYXRhIiwibGVuZ3RoIiwiZGF0YSIsImluZGV4IiwidmFsdWUiLCJub3RlQ29udGVudHMiLCJjYWxsYmFjayIsImlzTW9iaWxlIiwicmVuZGVyTW9iaWxlIiwicmVuZGVyRGVza3RvcCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsMERBQU0sQ0FBQ0MsRUFB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QUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFTRCxJQUFJLENBQUNSLElBQWQsQ0FERixTQUNrQ1EsSUFBSSxDQUFDRSxLQUR2QyxDQURGLENBRDBCO0FBQUEsU0FBckIsQ0FBUDtBQU9EO0FBQ0Y7OztnQ0FFV2IsTyxFQUFTO0FBQ25CLFVBQUlBLE9BQU8sQ0FBQ2MsWUFBWixFQUEwQjtBQUN4QixlQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixPQUMyQmQsT0FBTyxDQUFDYyxZQURuQyxDQURGO0FBS0Q7QUFDRjs7O3dDQUVtQkMsUSxFQUFVLENBQzVCO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQUlDLDZEQUFKLEVBQWM7QUFDWixlQUFPLEtBQUtDLFlBQUwsRUFBUDtBQUNEOztBQUNELGFBQU8sS0FBS0MsYUFBTCxFQUFQO0FBQ0Q7Ozs7RUFqSnVDQyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbmZpcm1hdGlvbi5kNTFlNTk4NWM3Y2MwMDNlMDZiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFnQ29uc3VtZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0JhZ1Byb3ZpZGVyJztcclxuaW1wb3J0IE9yZGVyU3VtbWFyeSBmcm9tICcuLi9jb21wb25lbnRzL09yZGVyU3VtbWFyeSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnO1xyXG5cclxuY29uc3QgQmFnVW5vcmRlcmVkTGlzdCA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuYDtcclxuXHJcbmNvbnN0IEJhZ0xpc3RJdGVtID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjNmY2ZjZmO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICM2ZjZmNmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtYXJnaW46IDMlIDElO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmA7XHJcblxyXG5jb25zdCBCYWdMaXN0SXRlbU1vYmlsZSA9IHN0eWxlZC5saWBcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjNmY2ZjZmO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICM2ZjZmNmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtYXJnaW46IDAgMCAyJSAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmA7XHJcblxyXG5jb25zdCBGbGV4Um93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBGbGV4U21hbGxDb2x1bW4gPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDAgMCAxNCU7XHJcbmA7XHJcblxyXG5jb25zdCBGbGV4U21hbGxDb2x1bW5Nb2JpbGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDAgMCAyNiU7XHJcbmA7XHJcblxyXG5jb25zdCBGbGV4TWVkaXVtQ29sdW1uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAwIDAgMTYlO1xyXG5gO1xyXG5cclxuY29uc3QgRmxleExhcmdlQ29sdW1uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAxO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjJyZW07XHJcbmA7XHJcblxyXG5jb25zdCBGbGV4TGFyZ2VDb2x1bW5Nb2JpbGUgPSBzdHlsZWQuZGl2YFxyXG4gIGxpbmUtaGVpZ2h0OiAwLjJyZW07XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0SW5mbyA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDdweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0VGl0bGVNb2JpbGUgPSBzdHlsZWQucGBcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IERpdmlkZXIgPSBzdHlsZWQuaHJgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDIlIDA7XHJcbiAgb3BhY2l0eTogMC45O1xyXG5gO1xyXG5cclxuY29uc3QgSGVyb0Jhbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxyXG4gICAgLTU1ZGVnLFxyXG4gICAgI2U3MWQzNixcclxuICAgICNlNzFkMzYgMTBweCxcclxuICAgICNmZjlmMWMgMTBweCxcclxuICAgICNmZjlmMWMgOTBweFxyXG4gICk7XHJcbmA7XHJcblxyXG5jb25zdCBNb2JpbGVDb25maXJtSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIHBhZGRpbmc6IDAlIDIlIDAlIDMlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybWF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXJEZXNrdG9wKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLyogVGhlbiB3ZSB1c2Ugb3VyIGNvbnRleHQgdGhyb3VnaCByZW5kZXIgcHJvcHMgKi9cclxuICAgICAgPEJhZ0NvbnN1bWVyPlxyXG4gICAgICAgIHsoeyBiYWcsIGxvZ09yZGVyIH0pID0+IChcclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZXJvQmFubmVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+SXQncyBZb3VycyE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlcm8taGVhZGluZ1wiPllvdXIgcGFja2FnZSB3aWxsIGFycml2ZSBzb29uITwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiBocmVmPVwiL3Byb2R1Y3QvMTIzMVwiPlxyXG4gICAgICAgICAgICAgICAgICBzaG9wIG5vd1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0hlcm9CYW5uZXI+XHJcblxyXG4gICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gXzYwXCI+XHJcbiAgICAgICAgICAgICAgICA8QmFnVW5vcmRlcmVkTGlzdD5cclxuICAgICAgICAgICAgICAgICAge2JhZy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8QmFnTGlzdEl0ZW0ga2V5PXtwcm9kdWN0LnNrdX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmxleFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhTbWFsbENvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleFNtYWxsQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhMYXJnZUNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEluZm8+e3Byb2R1Y3QubmFtZX08L1Byb2R1Y3RJbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SW5mbz4ke3Byb2R1Y3QucHJpY2V9PC9Qcm9kdWN0SW5mbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UXVhbnRpdHk6PC9zdHJvbmc+IHtwcm9kdWN0LnF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJOb3Rlcyhwcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNZXRhRGF0YShwcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4TGFyZ2VDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JhZ0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvQmFnVW5vcmRlcmVkTGlzdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gXzUwXCI+XHJcbiAgICAgICAgICAgICAgICA8T3JkZXJTdW1tYXJ5IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dGhpcy5sb2dPcmRlclRyYW5zYWN0aW9uKGxvZ09yZGVyKX1cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQmFnQ29uc3VtZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTW9iaWxlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLyogVGhlbiB3ZSB1c2Ugb3VyIGNvbnRleHQgdGhyb3VnaCByZW5kZXIgcHJvcHMgKi9cclxuICAgICAgPEJhZ0NvbnN1bWVyPlxyXG4gICAgICAgIHsoeyBiYWcsIGxvZ09yZGVyIH0pID0+IChcclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZXJvQmFubmVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+SXQncyBZb3VycyE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlcm8taGVhZGluZ1wiPllvdXIgcGFja2FnZSB3aWxsIGFycml2ZSBzb29uITwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiBocmVmPVwiL3Byb2R1Y3QvMTIzMVwiPlxyXG4gICAgICAgICAgICAgICAgICBzaG9wIG5vd1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0hlcm9CYW5uZXI+XHJcblxyXG4gICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgIDxCYWdVbm9yZGVyZWRMaXN0PlxyXG4gICAgICAgICAgICAgIHtiYWcubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8QmFnTGlzdEl0ZW1Nb2JpbGUga2V5PXtwcm9kdWN0LnNrdX0+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4U21hbGxDb2x1bW5Nb2JpbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9iaWxlQ29uZmlybUltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleFNtYWxsQ29sdW1uTW9iaWxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleExhcmdlQ29sdW1uTW9iaWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUaXRsZU1vYmlsZT57cHJvZHVjdC5uYW1lfTwvUHJvZHVjdFRpdGxlTW9iaWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJbmZvPiR7cHJvZHVjdC5wcmljZX08L1Byb2R1Y3RJbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlF1YW50aXR5Ojwvc3Ryb25nPiB7cHJvZHVjdC5xdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUHJvZHVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJOb3Rlcyhwcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1ldGFEYXRhKHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleExhcmdlQ29sdW1uTW9iaWxlPlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9CYWdMaXN0SXRlbU1vYmlsZT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9CYWdVbm9yZGVyZWRMaXN0PlxyXG5cclxuICAgICAgICAgICAge3RoaXMubG9nT3JkZXJUcmFuc2FjdGlvbihsb2dPcmRlcil9XHJcbiAgICAgICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICAgICAgPEhlcm9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSAvPlxyXG4gICAgICAgICAgICA8L0hlcm9CYW5uZXI+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JhZ0NvbnN1bWVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlck1ldGFEYXRhKHByb2R1Y3QpIHtcclxuICAgIGlmIChwcm9kdWN0Lm1ldGFkYXRhICYmIHByb2R1Y3QubWV0YWRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gcHJvZHVjdC5tZXRhZGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxQcm9kdWN0SW5mbz5cclxuICAgICAgICAgICAgPHN0cm9uZz57ZGF0YS5uYW1lfTwvc3Ryb25nPiA6IHtkYXRhLnZhbHVlfVxyXG4gICAgICAgICAgPC9Qcm9kdWN0SW5mbz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJOb3Rlcyhwcm9kdWN0KSB7XHJcbiAgICBpZiAocHJvZHVjdC5ub3RlQ29udGVudHMpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvZHVjdEluZm8+XHJcbiAgICAgICAgICA8c3Ryb25nPk5vdGVzOjwvc3Ryb25nPiB7cHJvZHVjdC5ub3RlQ29udGVudHN9XHJcbiAgICAgICAgPC9Qcm9kdWN0SW5mbz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvZ09yZGVyVHJhbnNhY3Rpb24oY2FsbGJhY2spIHtcclxuICAgIC8vIGNhbGxiYWNrKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTW9iaWxlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJEZXNrdG9wKCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=