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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  font-size: 1.3rem;\n  font-weight: 500;\n  line-height: 22px;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 0.9rem;\n    line-height: 7px;\n    \n  }\n\n\n"]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  flex: 0 0 13%;\n"]);

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
var FlexMediumColumn = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject7());
var FlexLargeColumn = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject8());
_c6 = FlexLargeColumn;
var FlexLargeColumnMobile = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject9());
_c7 = FlexLargeColumnMobile;
var ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p(_templateObject10());
_c8 = ProductInfo;
var ProductTitleMobile = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p(_templateObject11());
_c9 = ProductTitleMobile;
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].hr(_templateObject12());
_c10 = Divider;
var HeroBanner = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject13());
_c11 = HeroBanner;
var MobileConfirmImage = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].img(_templateObject14());
_c12 = MobileConfirmImage;

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
            lineNumber: 115,
            columnNumber: 7
          }
        }, function (_ref) {
          var bag = _ref.bag,
              logOrder = _ref.logOrder;
          return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 11
            }
          }, __jsx(HeroBanner, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 13
            }
          }, __jsx("div", {
            className: "container",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }
          }, __jsx("h1", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }
          }, "It's Yours!"), __jsx("h4", {
            className: "hero-heading",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }
          }, "Your package will arrive soon!"), __jsx("a", {
            className: "button button-primary",
            href: "/product/1231",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }
          }, "shop now"))), __jsx("hr", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 13
            }
          }), __jsx("div", {
            className: "row",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 13
            }
          }, __jsx("div", {
            className: "column _60",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }
          }, __jsx(BagUnorderedList, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 17
            }
          }, bag.map(function (product) {
            return __jsx(BagListItem, {
              key: product.sku,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 21
              }
            }, __jsx(FlexRow, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 23
              }
            }, __jsx(FlexSmallColumn, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 25
              }
            }, __jsx("img", {
              src: product.image,
              alt: product.name,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 27
              }
            })), __jsx(FlexLargeColumn, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 25
              }
            }, __jsx(ProductInfo, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 27
              }
            }, product.name), __jsx(ProductInfo, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 27
              }
            }, "$", product.price), __jsx("p", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 27
              }
            }, __jsx("strong", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 30
              }
            }, "Quantity:"), " ", product.quantity), _this.renderNotes(product), _this.renderMetaData(product))), __jsx(Divider, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 23
              }
            }));
          }))), __jsx("div", {
            className: "column _50",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }
          }, __jsx(_components_OrderSummary__WEBPACK_IMPORTED_MODULE_8__["default"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160,
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
            lineNumber: 174,
            columnNumber: 7
          }
        }, function (_ref2) {
          var bag = _ref2.bag,
              logOrder = _ref2.logOrder;
          return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 11
            }
          }, __jsx(HeroBanner, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 13
            }
          }, __jsx("div", {
            className: "container",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 15
            }
          }, __jsx("h1", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 17
            }
          }, "It's Yours!"), __jsx("h4", {
            className: "hero-heading",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 17
            }
          }, "Your package will arrive soon!"), __jsx("a", {
            className: "button button-primary",
            href: "/product/1231",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 17
            }
          }, "shop now"))), __jsx("hr", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 13
            }
          }), __jsx(BagUnorderedList, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 17
            }
          }, bag.map(function (product) {
            return __jsx(BagListItemMobile, {
              key: product.sku,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 21
              }
            }, __jsx(FlexRow, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 23
              }
            }, __jsx(FlexSmallColumn, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 25
              }
            }, __jsx(MobileConfirmImage, {
              src: product.image,
              alt: product.name,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 27
              }
            })), __jsx(FlexLargeColumnMobile, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 25
              }
            }, __jsx(ProductTitleMobile, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 27
              }
            }, product.name), __jsx(ProductInfo, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 27
              }
            }, "$", product.price), __jsx(ProductInfo, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 27
              }
            }, __jsx("strong", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 40
              }
            }, "Quantity:"), " ", product.quantity), _this2.renderNotes(product), _this2.renderMetaData(product))), __jsx(Divider, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 23
              }
            }));
          })), _this2.logOrderTransaction(logOrder), __jsx("hr", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 13
            }
          }), __jsx(HeroBanner, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 13
            }
          }, __jsx("div", {
            className: "container",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 15
            }
          }, __jsx(_components_OrderSummary__WEBPACK_IMPORTED_MODULE_8__["default"], {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 218,
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
              lineNumber: 232,
              columnNumber: 9
            }
          }, __jsx(ProductInfo, {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 13
            }
          }, __jsx("strong", {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 233,
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
            lineNumber: 241,
            columnNumber: 15
          }
        }, __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241,
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



var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "BagUnorderedList");
$RefreshReg$(_c2, "BagListItem");
$RefreshReg$(_c3, "BagListItemMobile");
$RefreshReg$(_c4, "FlexRow");
$RefreshReg$(_c5, "FlexSmallColumn");
$RefreshReg$(_c6, "FlexLargeColumn");
$RefreshReg$(_c7, "FlexLargeColumnMobile");
$RefreshReg$(_c8, "ProductInfo");
$RefreshReg$(_c9, "ProductTitleMobile");
$RefreshReg$(_c10, "Divider");
$RefreshReg$(_c11, "HeroBanner");
$RefreshReg$(_c12, "MobileConfirmImage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29uZmlybWF0aW9uLmpzIl0sIm5hbWVzIjpbIkJhZ1Vub3JkZXJlZExpc3QiLCJzdHlsZWQiLCJ1bCIsIkJhZ0xpc3RJdGVtIiwibGkiLCJCYWdMaXN0SXRlbU1vYmlsZSIsIkZsZXhSb3ciLCJkaXYiLCJGbGV4U21hbGxDb2x1bW4iLCJGbGV4U21hbGxDb2x1bW5Nb2JpbGUiLCJGbGV4TWVkaXVtQ29sdW1uIiwiRmxleExhcmdlQ29sdW1uIiwiRmxleExhcmdlQ29sdW1uTW9iaWxlIiwiUHJvZHVjdEluZm8iLCJwIiwiUHJvZHVjdFRpdGxlTW9iaWxlIiwiRGl2aWRlciIsImhyIiwiSGVyb0Jhbm5lciIsIk1vYmlsZUNvbmZpcm1JbWFnZSIsImltZyIsIkNvbmZpcm1hdGlvbiIsImJhZyIsImxvZ09yZGVyIiwibWFwIiwicHJvZHVjdCIsInNrdSIsImltYWdlIiwibmFtZSIsInByaWNlIiwicXVhbnRpdHkiLCJyZW5kZXJOb3RlcyIsInJlbmRlck1ldGFEYXRhIiwibG9nT3JkZXJUcmFuc2FjdGlvbiIsIm1ldGFkYXRhIiwibGVuZ3RoIiwiZGF0YSIsImluZGV4IiwidmFsdWUiLCJub3RlQ29udGVudHMiLCJjYWxsYmFjayIsImlzTW9iaWxlIiwicmVuZGVyTW9iaWxlIiwicmVuZGVyRGVza3RvcCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxnQkFBZ0IsR0FBR0MsMERBQU0sQ0FBQ0MsRUFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNJLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFTRCxJQUFJLENBQUNSLElBQWQsQ0FBYixTQUE2Q1EsSUFBSSxDQUFDRSxLQUFsRCxDQURKLENBRDBCO0FBQUEsU0FBckIsQ0FBUDtBQUtEO0FBQ0Y7OztnQ0FFV2IsTyxFQUFRO0FBQ2xCLFVBQUdBLE9BQU8sQ0FBQ2MsWUFBWCxFQUF3QjtBQUN0QixlQUFRLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBYixPQUFzQ2QsT0FBTyxDQUFDYyxZQUE5QyxDQUFSO0FBQ0Q7QUFDRjs7O3dDQUVtQkMsUSxFQUFTLENBQzVCO0FBQ0E7Ozs2QkFFUTtBQUNQLFVBQUdDLDZEQUFILEVBQVk7QUFDVixlQUFPLEtBQUtDLFlBQUwsRUFBUDtBQUNEOztBQUNELGFBQU8sS0FBS0MsYUFBTCxFQUFQO0FBQ0Q7Ozs7RUFoSnVDQyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbmZpcm1hdGlvbi4wNDdhZDBkNGRjZmRlNDRmNjk0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFnQ29uc3VtZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0JhZ1Byb3ZpZGVyJztcclxuaW1wb3J0IE9yZGVyU3VtbWFyeSBmcm9tICcuLi9jb21wb25lbnRzL09yZGVyU3VtbWFyeSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XHJcblxyXG5cclxuY29uc3QgQmFnVW5vcmRlcmVkTGlzdCA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuYFxyXG5cclxuY29uc3QgQmFnTGlzdEl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgcGFkZGluZzogMTVweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICM2ZjZmNmY7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggIzZmNmY2ZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbjogMyUgMSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuYFxyXG5cclxuY29uc3QgQmFnTGlzdEl0ZW1Nb2JpbGUgPSBzdHlsZWQubGlgXHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggIzZmNmY2ZjtcclxuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjNmY2ZjZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luOiAwIDAgMiUgMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5gXHJcblxyXG5jb25zdCBGbGV4Um93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbmBcclxuXHJcbmNvbnN0IEZsZXhTbWFsbENvbHVtbiA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMCAwIDE0JTtcclxuYFxyXG5cclxuY29uc3QgRmxleFNtYWxsQ29sdW1uTW9iaWxlID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAwIDAgMTMlO1xyXG5gXHJcblxyXG5jb25zdCBGbGV4TWVkaXVtQ29sdW1uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAwIDAgMTYlO1xyXG5gXHJcblxyXG5jb25zdCBGbGV4TGFyZ2VDb2x1bW4gPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDE7XHJcbiAgbGluZS1oZWlnaHQ6IDAuMnJlbTtcclxuYFxyXG5cclxuY29uc3QgRmxleExhcmdlQ29sdW1uTW9iaWxlID0gc3R5bGVkLmRpdmBcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjJyZW07XHJcbmA7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBQcm9kdWN0SW5mbyA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDdweDtcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG5gXHJcblxyXG5jb25zdCBQcm9kdWN0VGl0bGVNb2JpbGUgPSBzdHlsZWQucGBcclxuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuXHJcbmA7XHJcblxyXG5cclxuY29uc3QgRGl2aWRlciA9IHN0eWxlZC5ocmBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAyJSAwO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG5gXHJcblxyXG5jb25zdCBIZXJvQmFubmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXHJcbiAgLTU1ZGVnLFxyXG4gICNFNzFEMzYsXHJcbiAgI0U3MUQzNiAxMHB4LFxyXG4gICNGRjlGMUMgMTBweCxcclxuICAjRkY5RjFDIDkwcHhcclxuKTtcclxuYFxyXG5cclxuY29uc3QgTW9iaWxlQ29uZmlybUltYWdlID0gc3R5bGVkLmltZ2BcclxuICBwYWRkaW5nOiAxJSAxNCUgMCAxJTtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpcm1hdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgXHJcbiAgcmVuZGVyRGVza3RvcCgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLyogVGhlbiB3ZSB1c2Ugb3VyIGNvbnRleHQgdGhyb3VnaCByZW5kZXIgcHJvcHMgKi9cclxuICAgICAgPEJhZ0NvbnN1bWVyPlxyXG4gICAgICAgIHsoeyBiYWcsIGxvZ09yZGVyIH0pID0+IChcclxuICAgICAgICAgIDxMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8SGVyb0Jhbm5lcj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkl0J3MgWW91cnMhPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZXJvLWhlYWRpbmdcIj5Zb3VyIHBhY2thZ2Ugd2lsbCBhcnJpdmUgc29vbiE8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIgaHJlZj1cIi9wcm9kdWN0LzEyMzFcIj5zaG9wIG5vdzwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9IZXJvQmFubmVyPlxyXG5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBfNjBcIj5cclxuICAgICAgICAgICAgICAgIDxCYWdVbm9yZGVyZWRMaXN0PlxyXG4gICAgICAgICAgICAgICAgICB7YmFnLm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8QmFnTGlzdEl0ZW0ga2V5PXtwcm9kdWN0LnNrdX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmxleFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhTbWFsbENvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleFNtYWxsQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhMYXJnZUNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEluZm8+e3Byb2R1Y3QubmFtZX08L1Byb2R1Y3RJbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SW5mbz4ke3Byb2R1Y3QucHJpY2V9PC9Qcm9kdWN0SW5mbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlF1YW50aXR5Ojwvc3Ryb25nPiB7cHJvZHVjdC5xdWFudGl0eX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTm90ZXMocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWV0YURhdGEocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhMYXJnZUNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWdMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0JhZ1Vub3JkZXJlZExpc3Q+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBfNTBcIj5cclxuICAgICAgICAgICAgICAgIDxPcmRlclN1bW1hcnkgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dGhpcy5sb2dPcmRlclRyYW5zYWN0aW9uKGxvZ09yZGVyKX1cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQmFnQ29uc3VtZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTW9iaWxlKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAvKiBUaGVuIHdlIHVzZSBvdXIgY29udGV4dCB0aHJvdWdoIHJlbmRlciBwcm9wcyAqL1xyXG4gICAgICA8QmFnQ29uc3VtZXI+XHJcbiAgICAgICAgeyh7IGJhZywgbG9nT3JkZXIgfSkgPT4gKFxyXG4gICAgICAgICAgPExheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxIZXJvQmFubmVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+SXQncyBZb3VycyE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlcm8taGVhZGluZ1wiPllvdXIgcGFja2FnZSB3aWxsIGFycml2ZSBzb29uITwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiBocmVmPVwiL3Byb2R1Y3QvMTIzMVwiPnNob3Agbm93PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0hlcm9CYW5uZXI+XHJcblxyXG4gICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QmFnVW5vcmRlcmVkTGlzdD5cclxuICAgICAgICAgICAgICAgICAge2JhZy5tYXAocHJvZHVjdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZ0xpc3RJdGVtTW9iaWxlIGtleT17cHJvZHVjdC5za3V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZsZXhSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4U21hbGxDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vYmlsZUNvbmZpcm1JbWFnZSBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD17cHJvZHVjdC5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhTbWFsbENvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4TGFyZ2VDb2x1bW5Nb2JpbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RUaXRsZU1vYmlsZT57cHJvZHVjdC5uYW1lfTwvUHJvZHVjdFRpdGxlTW9iaWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SW5mbz4ke3Byb2R1Y3QucHJpY2V9PC9Qcm9kdWN0SW5mbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEluZm8+PHN0cm9uZz5RdWFudGl0eTo8L3N0cm9uZz4ge3Byb2R1Y3QucXVhbnRpdHl9PC9Qcm9kdWN0SW5mbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJOb3Rlcyhwcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNZXRhRGF0YShwcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleExhcmdlQ29sdW1uTW9iaWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Um93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0JhZ0xpc3RJdGVtTW9iaWxlPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvQmFnVW5vcmRlcmVkTGlzdD5cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLmxvZ09yZGVyVHJhbnNhY3Rpb24obG9nT3JkZXIpfVxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPEhlcm9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8T3JkZXJTdW1tYXJ5IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvSGVyb0Jhbm5lcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQmFnQ29uc3VtZXI+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICByZW5kZXJNZXRhRGF0YShwcm9kdWN0KXtcclxuICAgIGlmKHByb2R1Y3QubWV0YWRhdGEgJiYgcHJvZHVjdC5tZXRhZGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgcmV0dXJuIHByb2R1Y3QubWV0YWRhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxQcm9kdWN0SW5mbz48c3Ryb25nPntkYXRhLm5hbWV9PC9zdHJvbmc+IDoge2RhdGEudmFsdWV9PC9Qcm9kdWN0SW5mbz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlck5vdGVzKHByb2R1Y3Qpe1xyXG4gICAgaWYocHJvZHVjdC5ub3RlQ29udGVudHMpe1xyXG4gICAgICByZXR1cm4gIDxQcm9kdWN0SW5mbz48c3Ryb25nPk5vdGVzOjwvc3Ryb25nPiB7cHJvZHVjdC5ub3RlQ29udGVudHN9PC9Qcm9kdWN0SW5mbz47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2dPcmRlclRyYW5zYWN0aW9uKGNhbGxiYWNrKXtcclxuICAgLy8gY2FsbGJhY2soKTtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYoaXNNb2JpbGUpe1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJNb2JpbGUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlbmRlckRlc2t0b3AoKTtcclxuICB9XHJcbiAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==