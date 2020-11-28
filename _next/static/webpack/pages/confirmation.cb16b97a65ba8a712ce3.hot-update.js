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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  padding: 18px;\n  -webkit-box-shadow: 0 8px 6px -6px #6f6f6f;\n  box-shadow: 0 8px 6px -6px #6f6f6f;\n  border: 1px solid #ccc;\n  margin: 7% 1%;\n  background-color: #fff;\n  position: unset;\n\n  @media only screen and (max-width: 768px) {\n    box-shadow: 0 8px 6px -6px #6f6f6f;\n    border: 1px solid #ccc;\n    margin: 15px 3px;\n    background-color: #fff;\n    position: unset;\n    top: 57px;\n    left: 0;\n    z-index: 2;\n    width: 91%;\n    padding: 0 26px 43px 7px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var OrderSummaryContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
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

  function OrderSummary(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OrderSummary);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OrderSummary, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx(_components_BagProvider__WEBPACK_IMPORTED_MODULE_7__["BagConsumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 7
        }
      }, function (_ref) {
        var displayBagTotals = _ref.displayBagTotals;
        return __jsx(OrderSummaryContainer, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 11
          }
        }, __jsx(OrderSummaryHeadline, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }
        }, "Order Summary"), __jsx(SummaryInfo, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }
        }, __jsx(LeftAligned, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }
        }, "Subtotal:"), __jsx(RightAligned, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 15
          }
        }, "$", displayBagTotals().subtotal)), __jsx(SummaryInfo, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }
        }, __jsx(LeftAligned, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }
        }, "Tax:"), __jsx(RightAligned, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }
        }, "$", displayBagTotals().tax)), __jsx(Divider, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }
        }), __jsx(SummaryInfo, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }
        }, __jsx(LeftAligned, {
          fontSize: "1.2rem",
          fontWeight: "600",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }
        }, "Order Total:"), __jsx(RightAligned, {
          fontSize: "1.2rem",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlclN1bW1hcnkuanMiXSwibmFtZXMiOlsiT3JkZXJTdW1tYXJ5Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU3VtbWFyeUluZm8iLCJMZWZ0QWxpZ25lZCIsInByb3BzIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiUmlnaHRBbGlnbmVkIiwiT3JkZXJTdW1tYXJ5SGVhZGxpbmUiLCJoMiIsIkRpdmlkZXIiLCJPcmRlclN1bW1hcnkiLCJkaXNwbGF5QmFnVG90YWxzIiwic3VidG90YWwiLCJ0YXgiLCJncmFuZFRvdGFsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQTNCO0tBQU1GLHFCO0FBdUJOLElBQU1HLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBakI7TUFBTUMsVztBQUlOLElBQU1DLFdBQVcsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVixxQkFFRixVQUFDRyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxRQUFOLElBQWtCLFFBQTdCO0FBQUEsQ0FGRSxFQUdBLFVBQUNELEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNFLFVBQU4sSUFBb0IsUUFBL0I7QUFBQSxDQUhBLENBQWpCO01BQU1ILFc7QUFZTixJQUFNSSxZQUFZLEdBQUdQLHlEQUFNLENBQUNDLEdBQVYscUJBRUgsVUFBQ0csS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsUUFBTixJQUFrQixRQUE3QjtBQUFBLENBRkcsRUFHRCxVQUFDRCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDRSxVQUFOLElBQW9CLEtBQS9CO0FBQUEsQ0FIQyxDQUFsQjtNQUFNQyxZO0FBV04sSUFBTUMsb0JBQW9CLEdBQUdSLHlEQUFNLENBQUNTLEVBQVYsb0JBQTFCO01BQU1ELG9CO0FBUU4sSUFBTUUsT0FBTyxHQUFHVix5REFBTSxDQUFDQyxHQUFWLG9CQUFiO01BQU1TLE87O0lBUWVDLFk7Ozs7O0FBQ25CLHdCQUFZUCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1hBLEtBRFc7QUFFcEI7Ozs7NkJBQ1U7QUFBQTs7QUFDUCxhQUNFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHO0FBQUEsWUFBR1EsZ0JBQUgsUUFBR0EsZ0JBQUg7QUFBQSxlQUNDLE1BQUMscUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0JBLGdCQUFnQixHQUFHQyxRQUFuQyxDQUZGLENBRkYsRUFPRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUUsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWdCRCxnQkFBZ0IsR0FBR0UsR0FBbkMsQ0FGRixDQVBGLEVBWUUsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFaRixFQWFFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxXQUFEO0FBQWEsa0JBQVEsRUFBQyxRQUF0QjtBQUErQixvQkFBVSxFQUFDLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsRUFJRSxNQUFDLFlBQUQ7QUFBYyxrQkFBUSxFQUFDLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ0lGLGdCQUFnQixHQUFHRyxVQUR2QixDQUpGLENBYkYsQ0FERDtBQUFBLE9BREgsQ0FERjtBQTRCRDs7OztFQWpDdUNDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29uZmlybWF0aW9uLmNiMTZiOTdhNjViYThhNzEyY2UzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYWdDb25zdW1lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQmFnUHJvdmlkZXInO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSAnLi4vZGF0YS9kZXZpY2VzJztcclxuXHJcbmNvbnN0IE9yZGVyU3VtbWFyeUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMThweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICM2ZjZmNmY7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggIzZmNmY2ZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbjogNyUgMSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogdW5zZXQ7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICM2ZjZmNmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWFyZ2luOiAxNXB4IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogdW5zZXQ7XHJcbiAgICB0b3A6IDU3cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiA5MSU7XHJcbiAgICBwYWRkaW5nOiAwIDI2cHggNDNweCA3cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3VtbWFyeUluZm8gPSBzdHlsZWQuZGl2YFxyXG4gIGNsZWFyOiBib3RoO1xyXG5gO1xyXG5cclxuY29uc3QgTGVmdEFsaWduZWQgPSBzdHlsZWQuZGl2YFxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLmZvbnRTaXplIHx8ICcxLjByZW0nfTtcclxuICBmb250LXdlaWdodDogJHsocHJvcHMpID0+IHByb3BzLmZvbnRXZWlnaHQgfHwgJ25vcm1hbCd9O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSaWdodEFsaWduZWQgPSBzdHlsZWQuZGl2YFxyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5mb250U2l6ZSB8fCAnMS4wcmVtJ307XHJcbiAgZm9udC13ZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5mb250V2VpZ2h0IHx8ICc2MDAnfTtcclxuICBwYWRkaW5nOiA0cHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgT3JkZXJTdW1tYXJ5SGVhZGxpbmUgPSBzdHlsZWQuaDJgXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIFxyXG5gO1xyXG5cclxuY29uc3QgRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmRmZGY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlclN1bW1hcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbn1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QmFnQ29uc3VtZXI+XHJcbiAgICAgICAgeyh7IGRpc3BsYXlCYWdUb3RhbHMgfSkgPT4gKFxyXG4gICAgICAgICAgPE9yZGVyU3VtbWFyeUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPE9yZGVyU3VtbWFyeUhlYWRsaW5lPk9yZGVyIFN1bW1hcnk8L09yZGVyU3VtbWFyeUhlYWRsaW5lPlxyXG4gICAgICAgICAgICA8U3VtbWFyeUluZm8+XHJcbiAgICAgICAgICAgICAgPExlZnRBbGlnbmVkPlN1YnRvdGFsOjwvTGVmdEFsaWduZWQ+XHJcbiAgICAgICAgICAgICAgPFJpZ2h0QWxpZ25lZD4ke2Rpc3BsYXlCYWdUb3RhbHMoKS5zdWJ0b3RhbH08L1JpZ2h0QWxpZ25lZD5cclxuICAgICAgICAgICAgPC9TdW1tYXJ5SW5mbz5cclxuXHJcbiAgICAgICAgICAgIDxTdW1tYXJ5SW5mbz5cclxuICAgICAgICAgICAgICA8TGVmdEFsaWduZWQ+VGF4OjwvTGVmdEFsaWduZWQ+XHJcbiAgICAgICAgICAgICAgPFJpZ2h0QWxpZ25lZD4ke2Rpc3BsYXlCYWdUb3RhbHMoKS50YXh9PC9SaWdodEFsaWduZWQ+XHJcbiAgICAgICAgICAgIDwvU3VtbWFyeUluZm8+XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8U3VtbWFyeUluZm8+XHJcbiAgICAgICAgICAgICAgPExlZnRBbGlnbmVkIGZvbnRTaXplPVwiMS4ycmVtXCIgZm9udFdlaWdodD1cIjYwMFwiPlxyXG4gICAgICAgICAgICAgICAgT3JkZXIgVG90YWw6XHJcbiAgICAgICAgICAgICAgPC9MZWZ0QWxpZ25lZD5cclxuICAgICAgICAgICAgICA8UmlnaHRBbGlnbmVkIGZvbnRTaXplPVwiMS4ycmVtXCI+XHJcbiAgICAgICAgICAgICAgICAke2Rpc3BsYXlCYWdUb3RhbHMoKS5ncmFuZFRvdGFsfVxyXG4gICAgICAgICAgICAgIDwvUmlnaHRBbGlnbmVkPlxyXG4gICAgICAgICAgICA8L1N1bW1hcnlJbmZvPlxyXG4gICAgICAgICAgPC9PcmRlclN1bW1hcnlDb250YWluZXI+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9CYWdDb25zdW1lcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=