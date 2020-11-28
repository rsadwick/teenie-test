webpackHotUpdate_N_E("pages/bag",{

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

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  border-bottom: 1px solid #dfdfdf;\n  display: inline-block;\n  height: 1px;\n  width: 100%;\n  margin: 5px 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n\n@media only screen and (max-width: 768px) {\n  font-size: 0.9rem;\n  }\n  \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  float: right;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: 4px;\n\n  @media only screen and (max-width: 768px) {\n   font-size: 0.9rem;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  float: left;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: 4px;\n\n  \n  @media only screen and (max-width: 768px) {\n   font-size: 0.9rem;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  clear: both;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  padding: 18px;\n  -webkit-box-shadow: 0 8px 6px -6px #6f6f6f;\n  box-shadow: 0 8px 6px -6px #6f6f6f;\n  border: 1px solid #ccc;\n  margin: 7% 1%;\n  background-color: #fff;\n  position: unset;\n\n  @media only screen and (max-width: 768px) {\n    box-shadow: 0 8px 6px -6px #6f6f6f;\n    border: 1px solid #ccc;\n    margin: 19px 0;\n    background-color: #fff;\n    position:  ", ";\n    top: 57px;\n    left: 0;\n    z-index: 2;\n    width: 96%;\n    padding: 0 3px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var OrderSummaryContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject(), function (props) {
  return props.position || "unset";
});
_c = OrderSummaryContainer;
var SummaryInfo = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject2());
_c2 = SummaryInfo;
var LeftAligned = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject3(), function (props) {
  return props.fontSize || '1.0rem';
}, function (props) {
  return props.fontWeight || 'normal';
});
_c3 = LeftAligned;
var RightAligned = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject4(), function (props) {
  return props.fontSize || '1.0rem';
}, function (props) {
  return props.fontWeight || '600';
});
_c4 = RightAligned;
var OrderSummaryHeadline = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h2(_templateObject5());
_c5 = OrderSummaryHeadline;
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject6());
_c6 = Divider;

var OrderSummary = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(OrderSummary, _React$Component);

  var _super = _createSuper(OrderSummary);

  function OrderSummary() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OrderSummary);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OrderSummary, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx(_components_BagProvider__WEBPACK_IMPORTED_MODULE_7__["BagConsumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 7
        }
      }, function (_ref) {
        var displayBagTotals = _ref.displayBagTotals;
        return __jsx(OrderSummaryContainer, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 11
          }
        }, __jsx(OrderSummaryHeadline, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }
        }, "Order Summary"), __jsx(SummaryInfo, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }
        }, __jsx(LeftAligned, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }
        }, "Subtotal:"), __jsx(RightAligned, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }
        }, "$", displayBagTotals().subtotal)), __jsx(SummaryInfo, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }
        }, __jsx(LeftAligned, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }
        }, "Tax:"), __jsx(RightAligned, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }
        }, "$", displayBagTotals().tax)), __jsx(Divider, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }
        }), __jsx(SummaryInfo, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }
        }, __jsx(LeftAligned, {
          fontSize: "1.2rem",
          fontWeight: "600",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }
        }, "Order Total:"), __jsx(RightAligned, {
          fontSize: "1.2rem",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }
        }, "$", displayBagTotals().grandTotal)));
      });
    }
  }]);

  return OrderSummary;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "OrderSummaryContainer");
$RefreshReg$(_c2, "SummaryInfo");
$RefreshReg$(_c3, "LeftAligned");
$RefreshReg$(_c4, "RightAligned");
$RefreshReg$(_c5, "OrderSummaryHeadline");
$RefreshReg$(_c6, "Divider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlclN1bW1hcnkuanMiXSwibmFtZXMiOlsiT3JkZXJTdW1tYXJ5Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJwb3NpdGlvbiIsIlN1bW1hcnlJbmZvIiwiTGVmdEFsaWduZWQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJSaWdodEFsaWduZWQiLCJPcmRlclN1bW1hcnlIZWFkbGluZSIsImgyIiwiRGl2aWRlciIsIk9yZGVyU3VtbWFyeSIsImRpc3BsYXlCYWdUb3RhbHMiLCJzdWJ0b3RhbCIsInRheCIsImdyYW5kVG90YWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxxQkFBcUIsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixvQkFjVixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxRQUFOLElBQWtCLE9BQXRCO0FBQUEsQ0FkSyxDQUEzQjtLQUFNSixxQjtBQXVCTixJQUFNSyxXQUFXLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQWpCO01BQU1HLFc7QUFJTixJQUFNQyxXQUFXLEdBQUdMLHlEQUFNLENBQUNDLEdBQVYscUJBRUYsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksUUFBTixJQUFrQixRQUE3QjtBQUFBLENBRkUsRUFHQSxVQUFDSixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSyxVQUFOLElBQW9CLFFBQS9CO0FBQUEsQ0FIQSxDQUFqQjtNQUFNRixXO0FBWU4sSUFBTUcsWUFBWSxHQUFHUix5REFBTSxDQUFDQyxHQUFWLHFCQUVILFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLFFBQU4sSUFBa0IsUUFBN0I7QUFBQSxDQUZHLEVBR0QsVUFBQ0osS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ssVUFBTixJQUFvQixLQUEvQjtBQUFBLENBSEMsQ0FBbEI7TUFBTUMsWTtBQVdOLElBQU1DLG9CQUFvQixHQUFHVCx5REFBTSxDQUFDVSxFQUFWLG9CQUExQjtNQUFNRCxvQjtBQVFOLElBQU1FLE9BQU8sR0FBR1gseURBQU0sQ0FBQ0MsR0FBVixvQkFBYjtNQUFNVSxPOztJQVFlQyxZOzs7Ozs7Ozs7Ozs7OzZCQUNWO0FBQUE7O0FBQ1AsYUFDRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRztBQUFBLFlBQUdDLGdCQUFILFFBQUdBLGdCQUFIO0FBQUEsZUFDQyxNQUFDLHFCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsRUFFRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUUsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWdCQSxnQkFBZ0IsR0FBR0MsUUFBbkMsQ0FGRixDQUZGLEVBT0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFnQkQsZ0JBQWdCLEdBQUdFLEdBQW5DLENBRkYsQ0FQRixFQVlFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBWkYsRUFhRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsV0FBRDtBQUFhLGtCQUFRLEVBQUMsUUFBdEI7QUFBK0Isb0JBQVUsRUFBQyxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLEVBSUUsTUFBQyxZQUFEO0FBQWMsa0JBQVEsRUFBQyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNJRixnQkFBZ0IsR0FBR0csVUFEdkIsQ0FKRixDQWJGLENBREQ7QUFBQSxPQURILENBREY7QUE0QkQ7Ozs7RUE5QnVDQyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JhZy45OWYwNDAxNWVhOTM4MDI0MGRjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFnQ29uc3VtZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0JhZ1Byb3ZpZGVyJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJy4uL2RhdGEvZGV2aWNlcyc7XHJcblxyXG5jb25zdCBPcmRlclN1bW1hcnlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjNmY2ZjZmO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICM2ZjZmNmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtYXJnaW46IDclIDElO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IHVuc2V0O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjNmY2ZjZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbjogMTlweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiAgJHtwcm9wcyA9PiBwcm9wcy5wb3NpdGlvbiB8fCBcInVuc2V0XCJ9O1xyXG4gICAgdG9wOiA1N3B4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgcGFkZGluZzogMCAzcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3VtbWFyeUluZm8gPSBzdHlsZWQuZGl2YFxyXG4gIGNsZWFyOiBib3RoO1xyXG5gO1xyXG5cclxuY29uc3QgTGVmdEFsaWduZWQgPSBzdHlsZWQuZGl2YFxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLmZvbnRTaXplIHx8ICcxLjByZW0nfTtcclxuICBmb250LXdlaWdodDogJHsocHJvcHMpID0+IHByb3BzLmZvbnRXZWlnaHQgfHwgJ25vcm1hbCd9O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSaWdodEFsaWduZWQgPSBzdHlsZWQuZGl2YFxyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5mb250U2l6ZSB8fCAnMS4wcmVtJ307XHJcbiAgZm9udC13ZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5mb250V2VpZ2h0IHx8ICc2MDAnfTtcclxuICBwYWRkaW5nOiA0cHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgT3JkZXJTdW1tYXJ5SGVhZGxpbmUgPSBzdHlsZWQuaDJgXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIFxyXG5gO1xyXG5cclxuY29uc3QgRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlclN1bW1hcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCYWdDb25zdW1lcj5cclxuICAgICAgICB7KHsgZGlzcGxheUJhZ1RvdGFscyB9KSA9PiAoXHJcbiAgICAgICAgICA8T3JkZXJTdW1tYXJ5Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8T3JkZXJTdW1tYXJ5SGVhZGxpbmU+T3JkZXIgU3VtbWFyeTwvT3JkZXJTdW1tYXJ5SGVhZGxpbmU+XHJcbiAgICAgICAgICAgIDxTdW1tYXJ5SW5mbz5cclxuICAgICAgICAgICAgICA8TGVmdEFsaWduZWQ+U3VidG90YWw6PC9MZWZ0QWxpZ25lZD5cclxuICAgICAgICAgICAgICA8UmlnaHRBbGlnbmVkPiR7ZGlzcGxheUJhZ1RvdGFscygpLnN1YnRvdGFsfTwvUmlnaHRBbGlnbmVkPlxyXG4gICAgICAgICAgICA8L1N1bW1hcnlJbmZvPlxyXG5cclxuICAgICAgICAgICAgPFN1bW1hcnlJbmZvPlxyXG4gICAgICAgICAgICAgIDxMZWZ0QWxpZ25lZD5UYXg6PC9MZWZ0QWxpZ25lZD5cclxuICAgICAgICAgICAgICA8UmlnaHRBbGlnbmVkPiR7ZGlzcGxheUJhZ1RvdGFscygpLnRheH08L1JpZ2h0QWxpZ25lZD5cclxuICAgICAgICAgICAgPC9TdW1tYXJ5SW5mbz5cclxuXHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDxTdW1tYXJ5SW5mbz5cclxuICAgICAgICAgICAgICA8TGVmdEFsaWduZWQgZm9udFNpemU9XCIxLjJyZW1cIiBmb250V2VpZ2h0PVwiNjAwXCI+XHJcbiAgICAgICAgICAgICAgICBPcmRlciBUb3RhbDpcclxuICAgICAgICAgICAgICA8L0xlZnRBbGlnbmVkPlxyXG4gICAgICAgICAgICAgIDxSaWdodEFsaWduZWQgZm9udFNpemU9XCIxLjJyZW1cIj5cclxuICAgICAgICAgICAgICAgICR7ZGlzcGxheUJhZ1RvdGFscygpLmdyYW5kVG90YWx9XHJcbiAgICAgICAgICAgICAgPC9SaWdodEFsaWduZWQ+XHJcbiAgICAgICAgICAgIDwvU3VtbWFyeUluZm8+XHJcbiAgICAgICAgICA8L09yZGVyU3VtbWFyeUNvbnRhaW5lcj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JhZ0NvbnN1bWVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==