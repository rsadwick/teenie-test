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

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  padding: 1%;\n  background-color: #ccc;\n  background: repeating-linear-gradient(\n  -55deg,\n  #E71D36,\n  #E71D36 10px,\n  #FF9F1C 10px,\n  #FF9F1C 90px\n);\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    border: 1px solid #ccc;\n    background: #ccc;\n    border-radius: 5px;\n    margin: 2% 0;\n    opacity: 0.9;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  font-size: 1.3rem;\n  font-weight: 500;\n  line-height: 22px;\n"]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  flex: 0 0 16%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  flex: 0 0 14%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  \n"]);

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
var FlexRow = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject3());
_c3 = FlexRow;
var FlexSmallColumn = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject4());
_c4 = FlexSmallColumn;
var FlexMediumColumn = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject5());
var FlexLargeColumn = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject6());
_c5 = FlexLargeColumn;
var ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p(_templateObject7());
_c6 = ProductInfo;
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].hr(_templateObject8());
_c7 = Divider;
var HeroBanner = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject9());
_c8 = HeroBanner;

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
            lineNumber: 76,
            columnNumber: 7
          }
        }, function (_ref) {
          var bag = _ref.bag,
              logOrder = _ref.logOrder;
          return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 11
            }
          }, __jsx(HeroBanner, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 13
            }
          }, __jsx("div", {
            className: "container",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }
          }, __jsx("h1", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }
          }, "It's Yours!"), __jsx("h4", {
            className: "hero-heading",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }
          }, "Your package will arrive soon!"), __jsx("a", {
            className: "button button-primary",
            href: "/product/1231",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }
          }, "shop now"))), __jsx("hr", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 13
            }
          }), __jsx("div", {
            className: "row",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 13
            }
          }, __jsx("div", {
            className: "column _60",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }
          }, __jsx(BagUnorderedList, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }
          }, bag.map(function (product) {
            return __jsx(BagListItem, {
              key: product.sku,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 21
              }
            }, __jsx(FlexRow, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 23
              }
            }, __jsx(FlexSmallColumn, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 25
              }
            }, __jsx("img", {
              src: product.image,
              alt: product.name,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 27
              }
            })), __jsx(FlexLargeColumn, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 25
              }
            }, __jsx(ProductInfo, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 27
              }
            }, product.name), __jsx(ProductInfo, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 27
              }
            }, "$", product.price), __jsx("p", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 27
              }
            }, __jsx("strong", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 30
              }
            }, "Quantity:"), " ", product.quantity), _this.renderNotes(product), _this.renderMetaData(product))), __jsx(Divider, {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 23
              }
            }));
          }))), __jsx("div", {
            className: "column _50",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }
          }, __jsx(_components_OrderSummary__WEBPACK_IMPORTED_MODULE_8__["default"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121,
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
            lineNumber: 135,
            columnNumber: 7
          }
        }, function (_ref2) {
          var bag = _ref2.bag,
              logOrder = _ref2.logOrder;
          return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 11
            }
          }, __jsx(HeroBanner, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 13
            }
          }, __jsx("div", {
            className: "container",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }
          }, __jsx("h1", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 17
            }
          }, "It's Yours!"), __jsx("h4", {
            className: "hero-heading",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 17
            }
          }, "Your package will arrive soon!"), __jsx("a", {
            className: "button button-primary",
            href: "/product/1231",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 17
            }
          }, "shop now"))), __jsx("hr", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 13
            }
          }), __jsx(BagUnorderedList, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 17
            }
          }, bag.map(function (product) {
            return __jsx(BagListItem, {
              key: product.sku,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 21
              }
            }, __jsx(FlexRow, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 23
              }
            }, __jsx(FlexSmallColumn, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 25
              }
            }, __jsx("img", {
              src: product.image,
              alt: product.name,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 27
              }
            })), __jsx(FlexLargeColumn, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 25
              }
            }, __jsx(ProductInfo, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 27
              }
            }, product.name), __jsx(ProductInfo, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 27
              }
            }, "$", product.price), __jsx("p", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 27
              }
            }, __jsx("strong", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 30
              }
            }, "Quantity:"), " ", product.quantity), _this2.renderNotes(product), _this2.renderMetaData(product))), __jsx(Divider, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 23
              }
            }));
          })), _this2.logOrderTransaction(logOrder), __jsx("hr", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 13
            }
          }), __jsx(HeroBanner, {
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
          }, __jsx(_components_OrderSummary__WEBPACK_IMPORTED_MODULE_8__["default"], {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179,
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
              lineNumber: 193,
              columnNumber: 9
            }
          }, __jsx("p", {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 13
            }
          }, __jsx("strong", {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 16
            }
          }, data.name), " : ", data.value));
        });
      }
    }
  }, {
    key: "renderNotes",
    value: function renderNotes(product) {
      if (product.noteContents) {
        return __jsx("p", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 15
          }
        }, __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 18
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



var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "BagUnorderedList");
$RefreshReg$(_c2, "BagListItem");
$RefreshReg$(_c3, "FlexRow");
$RefreshReg$(_c4, "FlexSmallColumn");
$RefreshReg$(_c5, "FlexLargeColumn");
$RefreshReg$(_c6, "ProductInfo");
$RefreshReg$(_c7, "Divider");
$RefreshReg$(_c8, "HeroBanner");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29uZmlybWF0aW9uLmpzIl0sIm5hbWVzIjpbIkJhZ1Vub3JkZXJlZExpc3QiLCJzdHlsZWQiLCJ1bCIsIkJhZ0xpc3RJdGVtIiwibGkiLCJGbGV4Um93IiwiZGl2IiwiRmxleFNtYWxsQ29sdW1uIiwiRmxleE1lZGl1bUNvbHVtbiIsIkZsZXhMYXJnZUNvbHVtbiIsIlByb2R1Y3RJbmZvIiwicCIsIkRpdmlkZXIiLCJociIsIkhlcm9CYW5uZXIiLCJDb25maXJtYXRpb24iLCJiYWciLCJsb2dPcmRlciIsIm1hcCIsInByb2R1Y3QiLCJza3UiLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsInF1YW50aXR5IiwicmVuZGVyTm90ZXMiLCJyZW5kZXJNZXRhRGF0YSIsImxvZ09yZGVyVHJhbnNhY3Rpb24iLCJtZXRhZGF0YSIsImxlbmd0aCIsImRhdGEiLCJpbmRleCIsInZhbHVlIiwibm90ZUNvbnRlbnRzIiwiY2FsbGJhY2siLCJpc01vYmlsZSIsInJlbmRlck1vYmlsZSIsInJlbmRlckRlc2t0b3AiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGdCQUFnQixHQUFHQywwREFBTSxDQUFDQyxFQUFWLG1CQUF0QjtLQUFNRixnQjtBQU1OLElBQU1HLFdBQVcsR0FBR0YsMERBQU0sQ0FBQ0csRUFBVixvQkFBakI7TUFBTUQsVztBQVNOLElBQU1FLE9BQU8sR0FBR0osMERBQU0sQ0FBQ0ssR0FBVixvQkFBYjtNQUFNRCxPO0FBT04sSUFBTUUsZUFBZSxHQUFHTiwwREFBTSxDQUFDSyxHQUFWLG9C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YUFBTyxLQUFLQyxhQUFMLEVBQVA7QUFDRDs7OztFQWhKdUNDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29uZmlybWF0aW9uLjc1NTQ5ZWYwMzVhNTYzZmQxOWExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYWdDb25zdW1lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQmFnUHJvdmlkZXInO1xyXG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvT3JkZXJTdW1tYXJ5JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuXHJcblxyXG5jb25zdCBCYWdVbm9yZGVyZWRMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogNXB4O1xyXG5gXHJcblxyXG5jb25zdCBCYWdMaXN0SXRlbSA9IHN0eWxlZC5saWBcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggIzZmNmY2ZjtcclxuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjNmY2ZjZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luOiAzJSAxJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5gXHJcblxyXG5jb25zdCBGbGV4Um93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbmBcclxuXHJcbmNvbnN0IEZsZXhTbWFsbENvbHVtbiA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMCAwIDE0JTtcclxuYFxyXG5cclxuY29uc3QgRmxleE1lZGl1bUNvbHVtbiA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMCAwIDE2JTtcclxuYFxyXG5cclxuY29uc3QgRmxleExhcmdlQ29sdW1uID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAxO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjdyZW07XHJcbmBcclxuXHJcbmNvbnN0IFByb2R1Y3RJbmZvID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuYFxyXG5cclxuY29uc3QgRGl2aWRlciA9IHN0eWxlZC5ocmBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAyJSAwO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG5gXHJcblxyXG5jb25zdCBIZXJvQmFubmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXHJcbiAgLTU1ZGVnLFxyXG4gICNFNzFEMzYsXHJcbiAgI0U3MUQzNiAxMHB4LFxyXG4gICNGRjlGMUMgMTBweCxcclxuICAjRkY5RjFDIDkwcHhcclxuKTtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybWF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBcclxuICByZW5kZXJEZXNrdG9wKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAvKiBUaGVuIHdlIHVzZSBvdXIgY29udGV4dCB0aHJvdWdoIHJlbmRlciBwcm9wcyAqL1xyXG4gICAgICA8QmFnQ29uc3VtZXI+XHJcbiAgICAgICAgeyh7IGJhZywgbG9nT3JkZXIgfSkgPT4gKFxyXG4gICAgICAgICAgPExheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxIZXJvQmFubmVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+SXQncyBZb3VycyE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlcm8taGVhZGluZ1wiPllvdXIgcGFja2FnZSB3aWxsIGFycml2ZSBzb29uITwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiBocmVmPVwiL3Byb2R1Y3QvMTIzMVwiPnNob3Agbm93PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0hlcm9CYW5uZXI+XHJcblxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIF82MFwiPlxyXG4gICAgICAgICAgICAgICAgPEJhZ1Vub3JkZXJlZExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIHtiYWcubWFwKHByb2R1Y3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWdMaXN0SXRlbSBrZXk9e3Byb2R1Y3Quc2t1fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleFNtYWxsQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4U21hbGxDb2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleExhcmdlQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SW5mbz57cHJvZHVjdC5uYW1lfTwvUHJvZHVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJbmZvPiR7cHJvZHVjdC5wcmljZX08L1Byb2R1Y3RJbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+UXVhbnRpdHk6PC9zdHJvbmc+IHtwcm9kdWN0LnF1YW50aXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJOb3Rlcyhwcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNZXRhRGF0YShwcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleExhcmdlQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Um93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0JhZ0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvQmFnVW5vcmRlcmVkTGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIF81MFwiPlxyXG4gICAgICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt0aGlzLmxvZ09yZGVyVHJhbnNhY3Rpb24obG9nT3JkZXIpfVxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9CYWdDb25zdW1lcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJNb2JpbGUoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIC8qIFRoZW4gd2UgdXNlIG91ciBjb250ZXh0IHRocm91Z2ggcmVuZGVyIHByb3BzICovXHJcbiAgICAgIDxCYWdDb25zdW1lcj5cclxuICAgICAgICB7KHsgYmFnLCBsb2dPcmRlciB9KSA9PiAoXHJcbiAgICAgICAgICA8TGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPEhlcm9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5JdCdzIFlvdXJzITwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVyby1oZWFkaW5nXCI+WW91ciBwYWNrYWdlIHdpbGwgYXJyaXZlIHNvb24hPC9oND5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiIGhyZWY9XCIvcHJvZHVjdC8xMjMxXCI+c2hvcCBub3c8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvSGVyb0Jhbm5lcj5cclxuXHJcbiAgICAgICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCYWdVbm9yZGVyZWRMaXN0PlxyXG4gICAgICAgICAgICAgICAgICB7YmFnLm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8QmFnTGlzdEl0ZW0ga2V5PXtwcm9kdWN0LnNrdX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmxleFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhTbWFsbENvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleFNtYWxsQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhMYXJnZUNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEluZm8+e3Byb2R1Y3QubmFtZX08L1Byb2R1Y3RJbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SW5mbz4ke3Byb2R1Y3QucHJpY2V9PC9Qcm9kdWN0SW5mbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlF1YW50aXR5Ojwvc3Ryb25nPiB7cHJvZHVjdC5xdWFudGl0eX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTm90ZXMocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWV0YURhdGEocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhMYXJnZUNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWdMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0JhZ1Vub3JkZXJlZExpc3Q+XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5sb2dPcmRlclRyYW5zYWN0aW9uKGxvZ09yZGVyKX1cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxIZXJvQmFubmVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0hlcm9CYW5uZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JhZ0NvbnN1bWVyPlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyTWV0YURhdGEocHJvZHVjdCl7XHJcbiAgICBpZihwcm9kdWN0Lm1ldGFkYXRhICYmIHByb2R1Y3QubWV0YWRhdGEubGVuZ3RoID4gMCl7XHJcbiAgICAgIHJldHVybiBwcm9kdWN0Lm1ldGFkYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8cD48c3Ryb25nPntkYXRhLm5hbWV9PC9zdHJvbmc+IDoge2RhdGEudmFsdWV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyTm90ZXMocHJvZHVjdCl7XHJcbiAgICBpZihwcm9kdWN0Lm5vdGVDb250ZW50cyl7XHJcbiAgICAgIHJldHVybiAgPHA+PHN0cm9uZz5Ob3Rlczo8L3N0cm9uZz4ge3Byb2R1Y3Qubm90ZUNvbnRlbnRzfTwvcD47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2dPcmRlclRyYW5zYWN0aW9uKGNhbGxiYWNrKXtcclxuICAgLy8gY2FsbGJhY2soKTtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYoaXNNb2JpbGUpe1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJNb2JpbGUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlbmRlckRlc2t0b3AoKTtcclxuICB9XHJcbiAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==