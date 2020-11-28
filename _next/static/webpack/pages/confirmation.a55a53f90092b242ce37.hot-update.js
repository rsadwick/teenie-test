webpackHotUpdate_N_E("pages/confirmation",{

/***/ "./components/OrderSummary.js":
/*!************************************!*\
  !*** ./components/OrderSummary.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderSummary; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_BagProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BagProvider */ "./components/BagProvider.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _data_devices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/devices */ "./data/devices.js");






var _jsxFileName = "C:\\Users\\drewe\\Documents\\GitHub\\CraftyBeeSupplies\\components\\OrderSummary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  border-bottom: 1px solid #dfdfdf;\n  display: inline-block;\n  height: 1px;\n  width: 100%;\n  margin: 5px 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n\n@media only screen and (max-width: 768px) {\n  font-size: 0.9rem;\n  }\n  \n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  float: right;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: 4px;\n\n  @media only screen and (max-width: 768px) {\n   font-size: 0.9rem;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  float: left;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: 4px;\n\n  \n  @media only screen and (max-width: 768px) {\n   font-size: 0.9rem;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  clear: both;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n   box-shadow: 0 8px 6px -6px #6f6f6f;\n    border: 1px solid #ccc;\n    margin: 19px 0;\n    background-color: #fff;\n    position: 'fixed';\n    top: 57px;\n    left: 0;\n    z-index: 2;\n    width: 96%;\n    padding: 0 26px 43px 7px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  padding: 18px;\n  -webkit-box-shadow: 0 8px 6px -6px #6f6f6f;\n  box-shadow: 0 8px 6px -6px #6f6f6f;\n  border: 1px solid #ccc;\n  margin: 7% 1%;\n  background-color: #fff;\n  position: unset;\n\n  @media only screen and (max-width: 768px) {\n    box-shadow: 0 8px 6px -6px #6f6f6f;\n    border: 1px solid #ccc;\n    margin: 19px 0;\n    background-color: #fff;\n    position:  ", ";\n    top: 57px;\n    left: 0;\n    z-index: 2;\n    width: 96%;\n    padding: 0 26px 43px 7px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var OrderSummaryContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject(), function (props) {
  return props.position || "unset";
});
_c = OrderSummaryContainer;
var MobileBagSummaryContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject2());
_c2 = MobileBagSummaryContainer;
var SummaryInfo = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject3());
_c3 = SummaryInfo;
var LeftAligned = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject4(), function (props) {
  return props.fontSize || '1.0rem';
}, function (props) {
  return props.fontWeight || 'normal';
});
_c4 = LeftAligned;
var RightAligned = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject5(), function (props) {
  return props.fontSize || '1.0rem';
}, function (props) {
  return props.fontWeight || '600';
});
_c5 = RightAligned;
var OrderSummaryHeadline = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h2(_templateObject6());
_c6 = OrderSummaryHeadline;
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject7());
_c7 = Divider;

var OrderSummary = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(OrderSummary, _React$Component);

  var _super = _createSuper(OrderSummary);

  function OrderSummary(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OrderSummary);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OrderSummary, [{
    key: "renderBagMobile",
    value: function renderBagMobile() {
      var _this = this;

      return __jsx(_components_BagProvider__WEBPACK_IMPORTED_MODULE_7__["BagConsumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 7
        }
      }, function (_ref) {
        var displayBagTotals = _ref.displayBagTotals;
        return __jsx(MobileBagSummaryContainer, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }
        }, __jsx(OrderSummaryHeadline, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }
        }, "Order Summary"), __jsx(SummaryInfo, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }
        }, __jsx(LeftAligned, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }
        }, "Subtotal:"), __jsx(RightAligned, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 15
          }
        }, "$", displayBagTotals().subtotal)), __jsx(SummaryInfo, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }
        }, __jsx(LeftAligned, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }
        }, "Tax:"), __jsx(RightAligned, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }
        }, "$", displayBagTotals().tax)), __jsx(Divider, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }
        }), __jsx(SummaryInfo, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }
        }, __jsx(LeftAligned, {
          fontSize: "1.2rem",
          fontWeight: "600",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }
        }, "Order Total:"), __jsx(RightAligned, {
          fontSize: "1.2rem",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 15
          }
        }, "$", displayBagTotals().grandTotal)));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.isBag) {
        return this.renderBagMobile();
      }

      return __jsx(_components_BagProvider__WEBPACK_IMPORTED_MODULE_7__["BagConsumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 7
        }
      }, function (_ref2) {
        var displayBagTotals = _ref2.displayBagTotals;
        return __jsx(OrderSummaryContainer, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 11
          }
        }, __jsx(OrderSummaryHeadline, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }
        }, "Order Summary"), __jsx(SummaryInfo, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }
        }, __jsx(LeftAligned, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 15
          }
        }, "Subtotal:"), __jsx(RightAligned, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }
        }, "$", displayBagTotals().subtotal)), __jsx(SummaryInfo, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }
        }, __jsx(LeftAligned, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }
        }, "Tax:"), __jsx(RightAligned, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 15
          }
        }, "$", displayBagTotals().tax)), __jsx(Divider, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }
        }), __jsx(SummaryInfo, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }
        }, __jsx(LeftAligned, {
          fontSize: "1.2rem",
          fontWeight: "600",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 15
          }
        }, "Order Total:"), __jsx(RightAligned, {
          fontSize: "1.2rem",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }
        }, "$", displayBagTotals().grandTotal)));
      });
    }
  }]);

  return OrderSummary;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "OrderSummaryContainer");
$RefreshReg$(_c2, "MobileBagSummaryContainer");
$RefreshReg$(_c3, "SummaryInfo");
$RefreshReg$(_c4, "LeftAligned");
$RefreshReg$(_c5, "RightAligned");
$RefreshReg$(_c6, "OrderSummaryHeadline");
$RefreshReg$(_c7, "Divider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlclN1bW1hcnkuanMiXSwibmFtZXMiOlsiT3JkZXJTdW1tYXJ5Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJwb3NpdGlvbiIsIk1vYmlsZUJhZ1N1bW1hcnlDb250YWluZXIiLCJTdW1tYXJ5SW5mbyIsIkxlZnRBbGlnbmVkIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiUmlnaHRBbGlnbmVkIiwiT3JkZXJTdW1tYXJ5SGVhZGxpbmUiLCJoMiIsIkRpdmlkZXIiLCJPcmRlclN1bW1hcnkiLCJkaXNwbGF5QmFnVG90YWxzIiwic3VidG90YWwiLCJ0YXgiLCJncmFuZFRvdGFsIiwiaXNCYWciLCJyZW5kZXJCYWdNb2JpbGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsb0JBY1YsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsUUFBTixJQUFrQixPQUF0QjtBQUFBLENBZEssQ0FBM0I7S0FBTUoscUI7QUF1Qk4sSUFBTUsseUJBQXlCLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQS9CO01BQU1HLHlCO0FBYU4sSUFBTUMsV0FBVyxHQUFHTCx5REFBTSxDQUFDQyxHQUFWLG9CQUFqQjtNQUFNSSxXO0FBSU4sSUFBTUMsV0FBVyxHQUFHTix5REFBTSxDQUFDQyxHQUFWLHFCQUVGLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLFFBQU4sSUFBa0IsUUFBN0I7QUFBQSxDQUZFLEVBR0EsVUFBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ00sVUFBTixJQUFvQixRQUEvQjtBQUFBLENBSEEsQ0FBakI7TUFBTUYsVztBQVlOLElBQU1HLFlBQVksR0FBR1QseURBQU0sQ0FBQ0MsR0FBVixxQkFFSCxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSyxRQUFOLElBQWtCLFFBQTdCO0FBQUEsQ0FGRyxFQUdELFVBQUNMLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNNLFVBQU4sSUFBb0IsS0FBL0I7QUFBQSxDQUhDLENBQWxCO01BQU1DLFk7QUFXTixJQUFNQyxvQkFBb0IsR0FBR1YseURBQU0sQ0FBQ1csRUFBVixvQkFBMUI7TUFBTUQsb0I7QUFRTixJQUFNRSxPQUFPLEdBQUdaLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7TUFBTVcsTzs7SUFTZUMsWTs7Ozs7QUFFbkIsd0JBQVlYLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDWEEsS0FEVztBQUVsQjs7OztzQ0FDZ0I7QUFBQTs7QUFDZixhQUNFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHO0FBQUEsWUFBR1ksZ0JBQUgsUUFBR0EsZ0JBQUg7QUFBQSxlQUNDLE1BQUMseUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0JBLGdCQUFnQixHQUFHQyxRQUFuQyxDQUZGLENBRkYsRUFPRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUUsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWdCRCxnQkFBZ0IsR0FBR0UsR0FBbkMsQ0FGRixDQVBGLEVBWUUsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFaRixFQWFFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxXQUFEO0FBQWEsa0JBQVEsRUFBQyxRQUF0QjtBQUErQixvQkFBVSxFQUFDLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsRUFJRSxNQUFDLFlBQUQ7QUFBYyxrQkFBUSxFQUFDLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ0lGLGdCQUFnQixHQUFHRyxVQUR2QixDQUpGLENBYkYsQ0FERDtBQUFBLE9BREgsQ0FERjtBQTRCRDs7OzZCQUdRO0FBQUE7O0FBQ1AsVUFBRyxLQUFLZixLQUFMLENBQVdnQixLQUFkLEVBQW9CO0FBQ2xCLGVBQU8sS0FBS0MsZUFBTCxFQUFQO0FBQ0Q7O0FBRUQsYUFDRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRztBQUFBLFlBQUdMLGdCQUFILFNBQUdBLGdCQUFIO0FBQUEsZUFDQyxNQUFDLHFCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsRUFFRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUUsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWdCQSxnQkFBZ0IsR0FBR0MsUUFBbkMsQ0FGRixDQUZGLEVBT0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFnQkQsZ0JBQWdCLEdBQUdFLEdBQW5DLENBRkYsQ0FQRixFQVlFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBWkYsRUFhRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsV0FBRDtBQUFhLGtCQUFRLEVBQUMsUUFBdEI7QUFBK0Isb0JBQVUsRUFBQyxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLEVBSUUsTUFBQyxZQUFEO0FBQWMsa0JBQVEsRUFBQyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNJRixnQkFBZ0IsR0FBR0csVUFEdkIsQ0FKRixDQWJGLENBREQ7QUFBQSxPQURILENBREY7QUE0QkQ7Ozs7RUF0RXVDRyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbmZpcm1hdGlvbi5hNTVhNTNmOTAwOTJiMjQyY2UzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFnQ29uc3VtZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0JhZ1Byb3ZpZGVyJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJy4uL2RhdGEvZGV2aWNlcyc7XHJcblxyXG5jb25zdCBPcmRlclN1bW1hcnlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjNmY2ZjZmO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICM2ZjZmNmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtYXJnaW46IDclIDElO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IHVuc2V0O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjNmY2ZjZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbjogMTlweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiAgJHtwcm9wcyA9PiBwcm9wcy5wb3NpdGlvbiB8fCBcInVuc2V0XCJ9O1xyXG4gICAgdG9wOiA1N3B4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgcGFkZGluZzogMCAyNnB4IDQzcHggN3B4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE1vYmlsZUJhZ1N1bW1hcnlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjNmY2ZjZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbjogMTlweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnO1xyXG4gICAgdG9wOiA1N3B4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgcGFkZGluZzogMCAyNnB4IDQzcHggN3B4O1xyXG5gO1xyXG5cclxuY29uc3QgU3VtbWFyeUluZm8gPSBzdHlsZWQuZGl2YFxyXG4gIGNsZWFyOiBib3RoO1xyXG5gO1xyXG5cclxuY29uc3QgTGVmdEFsaWduZWQgPSBzdHlsZWQuZGl2YFxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLmZvbnRTaXplIHx8ICcxLjByZW0nfTtcclxuICBmb250LXdlaWdodDogJHsocHJvcHMpID0+IHByb3BzLmZvbnRXZWlnaHQgfHwgJ25vcm1hbCd9O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSaWdodEFsaWduZWQgPSBzdHlsZWQuZGl2YFxyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5mb250U2l6ZSB8fCAnMS4wcmVtJ307XHJcbiAgZm9udC13ZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5mb250V2VpZ2h0IHx8ICc2MDAnfTtcclxuICBwYWRkaW5nOiA0cHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgT3JkZXJTdW1tYXJ5SGVhZGxpbmUgPSBzdHlsZWQuaDJgXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIFxyXG5gO1xyXG5cclxuY29uc3QgRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJTdW1tYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXJCYWdNb2JpbGUoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCYWdDb25zdW1lcj5cclxuICAgICAgICB7KHsgZGlzcGxheUJhZ1RvdGFscyB9KSA9PiAoXHJcbiAgICAgICAgICA8TW9iaWxlQmFnU3VtbWFyeUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPE9yZGVyU3VtbWFyeUhlYWRsaW5lPk9yZGVyIFN1bW1hcnk8L09yZGVyU3VtbWFyeUhlYWRsaW5lPlxyXG4gICAgICAgICAgICA8U3VtbWFyeUluZm8+XHJcbiAgICAgICAgICAgICAgPExlZnRBbGlnbmVkPlN1YnRvdGFsOjwvTGVmdEFsaWduZWQ+XHJcbiAgICAgICAgICAgICAgPFJpZ2h0QWxpZ25lZD4ke2Rpc3BsYXlCYWdUb3RhbHMoKS5zdWJ0b3RhbH08L1JpZ2h0QWxpZ25lZD5cclxuICAgICAgICAgICAgPC9TdW1tYXJ5SW5mbz5cclxuICBcclxuICAgICAgICAgICAgPFN1bW1hcnlJbmZvPlxyXG4gICAgICAgICAgICAgIDxMZWZ0QWxpZ25lZD5UYXg6PC9MZWZ0QWxpZ25lZD5cclxuICAgICAgICAgICAgICA8UmlnaHRBbGlnbmVkPiR7ZGlzcGxheUJhZ1RvdGFscygpLnRheH08L1JpZ2h0QWxpZ25lZD5cclxuICAgICAgICAgICAgPC9TdW1tYXJ5SW5mbz5cclxuICBcclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPFN1bW1hcnlJbmZvPlxyXG4gICAgICAgICAgICAgIDxMZWZ0QWxpZ25lZCBmb250U2l6ZT1cIjEuMnJlbVwiIGZvbnRXZWlnaHQ9XCI2MDBcIj5cclxuICAgICAgICAgICAgICAgIE9yZGVyIFRvdGFsOlxyXG4gICAgICAgICAgICAgIDwvTGVmdEFsaWduZWQ+XHJcbiAgICAgICAgICAgICAgPFJpZ2h0QWxpZ25lZCBmb250U2l6ZT1cIjEuMnJlbVwiPlxyXG4gICAgICAgICAgICAgICAgJHtkaXNwbGF5QmFnVG90YWxzKCkuZ3JhbmRUb3RhbH1cclxuICAgICAgICAgICAgICA8L1JpZ2h0QWxpZ25lZD5cclxuICAgICAgICAgICAgPC9TdW1tYXJ5SW5mbz5cclxuICAgICAgICAgIDwvTW9iaWxlQmFnU3VtbWFyeUNvbnRhaW5lcj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JhZ0NvbnN1bWVyPlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYodGhpcy5wcm9wcy5pc0JhZyl7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckJhZ01vYmlsZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJhZ0NvbnN1bWVyPlxyXG4gICAgICAgIHsoeyBkaXNwbGF5QmFnVG90YWxzIH0pID0+IChcclxuICAgICAgICAgIDxPcmRlclN1bW1hcnlDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxPcmRlclN1bW1hcnlIZWFkbGluZT5PcmRlciBTdW1tYXJ5PC9PcmRlclN1bW1hcnlIZWFkbGluZT5cclxuICAgICAgICAgICAgPFN1bW1hcnlJbmZvPlxyXG4gICAgICAgICAgICAgIDxMZWZ0QWxpZ25lZD5TdWJ0b3RhbDo8L0xlZnRBbGlnbmVkPlxyXG4gICAgICAgICAgICAgIDxSaWdodEFsaWduZWQ+JHtkaXNwbGF5QmFnVG90YWxzKCkuc3VidG90YWx9PC9SaWdodEFsaWduZWQ+XHJcbiAgICAgICAgICAgIDwvU3VtbWFyeUluZm8+XHJcblxyXG4gICAgICAgICAgICA8U3VtbWFyeUluZm8+XHJcbiAgICAgICAgICAgICAgPExlZnRBbGlnbmVkPlRheDo8L0xlZnRBbGlnbmVkPlxyXG4gICAgICAgICAgICAgIDxSaWdodEFsaWduZWQ+JHtkaXNwbGF5QmFnVG90YWxzKCkudGF4fTwvUmlnaHRBbGlnbmVkPlxyXG4gICAgICAgICAgICA8L1N1bW1hcnlJbmZvPlxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPFN1bW1hcnlJbmZvPlxyXG4gICAgICAgICAgICAgIDxMZWZ0QWxpZ25lZCBmb250U2l6ZT1cIjEuMnJlbVwiIGZvbnRXZWlnaHQ9XCI2MDBcIj5cclxuICAgICAgICAgICAgICAgIE9yZGVyIFRvdGFsOlxyXG4gICAgICAgICAgICAgIDwvTGVmdEFsaWduZWQ+XHJcbiAgICAgICAgICAgICAgPFJpZ2h0QWxpZ25lZCBmb250U2l6ZT1cIjEuMnJlbVwiPlxyXG4gICAgICAgICAgICAgICAgJHtkaXNwbGF5QmFnVG90YWxzKCkuZ3JhbmRUb3RhbH1cclxuICAgICAgICAgICAgICA8L1JpZ2h0QWxpZ25lZD5cclxuICAgICAgICAgICAgPC9TdW1tYXJ5SW5mbz5cclxuICAgICAgICAgIDwvT3JkZXJTdW1tYXJ5Q29udGFpbmVyPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQmFnQ29uc3VtZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9