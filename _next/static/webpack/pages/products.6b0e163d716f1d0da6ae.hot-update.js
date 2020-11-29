webpackHotUpdate_N_E("pages/products",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_SearchProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SearchProvider */ "./components/SearchProvider.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _data_devices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/devices */ "./data/devices.js");






var _jsxFileName = "C:\\Users\\drewe\\Documents\\GitHub\\CraftyBeeSupplies\\components\\Search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  border-radius: 0px 4px 4px 0px !important;\n  padding: 2px 12px;\n  margin: 0px 0px;\n  font-size: 0.7rem;\n  vertical-align: middle;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  position: absolute;\n  left: 115px;\n  top: 7px;\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  border-radius: 0px 4px 4px 0px !important;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  color: rgb(1, 22, 39);\n  width: 65%;\n  border-radius: 0 0 0 4px !important;\n\n  @media only screen and (max-width: 768px) {\n    width: 49%;\n    font-size: 0.8rem;\n  }\n\n  @media only screen and (max-width: 320px) {\n    width: 36%;\n    font-size: 0.8rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: inline-block;\n  flex: 1 0 28%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
_c = SearchContainer;
var SearchBox = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].input(_templateObject2());
_c2 = SearchBox;
var SearchButton = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button(_templateObject3());
_c3 = SearchButton;
var SearchContainerMobile = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject4());
_c4 = SearchContainerMobile;
var SearchButtonMobile = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button(_templateObject5());
_c5 = SearchButtonMobile;

var SearchButtonIcon = __jsx("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "search",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  "class": "svg-inline--fa fa-search fa-w-16 fa-3x",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 26
  }
}, __jsx("path", {
  fill: "currentColor",
  d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
  "class": "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 220
  }
}));

var Search = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Search, _React$Component);

  var _super = _createSuper(Search);

  function Search(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Search);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Search, [{
    key: "renderContent",
    value: function renderContent() {
      var _this = this;

      if (react_device_detect__WEBPACK_IMPORTED_MODULE_10__["isMobile"]) {
        return __jsx(_components_SearchProvider__WEBPACK_IMPORTED_MODULE_9__["SearchConsumer"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 9
          }
        }, function (_ref) {
          var handleSearchTermChange = _ref.handleSearchTermChange,
              findProductBasedOnSearch = _ref.findProductBasedOnSearch;
          return __jsx(SearchContainerMobile, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 13
            }
          }, __jsx(SearchBox, {
            type: "text",
            onChange: function onChange(e) {
              return handleSearchTermChange(e);
            },
            placeholder: "What are you looking for?",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }
          }), __jsx(SearchButtonMobile, {
            onClick: function onClick(e) {
              return findProductBasedOnSearch(e);
            },
            className: "button button-secondary",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }
          }, SearchButtonIcon));
        });
      }

      return __jsx(_components_SearchProvider__WEBPACK_IMPORTED_MODULE_9__["SearchConsumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 7
        }
      }, function (_ref2) {
        var handleSearchTermChange = _ref2.handleSearchTermChange,
            findProductBasedOnSearch = _ref2.findProductBasedOnSearch;
        return __jsx(SearchContainer, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 11
          }
        }, __jsx(SearchBox, {
          type: "text",
          onChange: function onChange(e) {
            return handleSearchTermChange(e);
          },
          placeholder: "What are you looking for?",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }
        }), __jsx(SearchButton, {
          onClick: function onClick(e) {
            return findProductBasedOnSearch(e);
          },
          className: "button button-secondary",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }
        }, "Search"));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderContent();
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "SearchContainer");
$RefreshReg$(_c2, "SearchBox");
$RefreshReg$(_c3, "SearchButton");
$RefreshReg$(_c4, "SearchContainerMobile");
$RefreshReg$(_c5, "SearchButtonMobile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU2VhcmNoQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU2VhcmNoQm94IiwiaW5wdXQiLCJTZWFyY2hCdXR0b24iLCJidXR0b24iLCJTZWFyY2hDb250YWluZXJNb2JpbGUiLCJTZWFyY2hCdXR0b25Nb2JpbGUiLCJTZWFyY2hCdXR0b25JY29uIiwiU2VhcmNoIiwicHJvcHMiLCJpc01vYmlsZSIsImhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UiLCJmaW5kUHJvZHVjdEJhc2VkT25TZWFyY2giLCJlIiwicmVuZGVyQ29udGVudCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBckI7S0FBTUYsZTtBQUtOLElBQU1HLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0csS0FBVixvQkFBZjtNQUFNRCxTO0FBZ0JOLElBQU1FLFlBQVksR0FBR0oseURBQU0sQ0FBQ0ssTUFBVixvQkFBbEI7TUFBTUQsWTtBQUlOLElBQU1FLHFCQUFxQixHQUFHTix5REFBTSxDQUFDQyxHQUFWLG9CQUEzQjtNQUFNSyxxQjtBQU9OLElBQU1DLGtCQUFrQixHQUFHUCx5REFBTSxDQUFDSyxNQUFWLG9CQUF4QjtNQUFNRSxrQjs7QUFRTixJQUFNQyxnQkFBZ0IsR0FBRztBQUFLLGlCQUFZLE1BQWpCO0FBQXdCLFdBQVMsRUFBQyxPQUFsQztBQUEwQyxpQkFBWSxLQUF0RDtBQUE0RCxlQUFVLFFBQXRFO0FBQStFLE1BQUksRUFBQyxLQUFwRjtBQUEwRixPQUFLLEVBQUMsNEJBQWhHO0FBQTZILFNBQU8sRUFBQyxhQUFySTtBQUFtSixXQUFNLHdDQUF6SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWtNO0FBQU0sTUFBSSxFQUFDLGNBQVg7QUFBMEIsR0FBQyxFQUFDLDJWQUE1QjtBQUF3WCxXQUFNLEVBQTlYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBbE0sQ0FBekI7O0lBRU1DLE07Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDWEEsS0FEVztBQUVsQjs7OztvQ0FFZTtBQUFBOztBQUNkLFVBQUlDLDZEQUFKLEVBQWM7QUFDWixlQUNFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHO0FBQUEsY0FBR0Msc0JBQUgsUUFBR0Esc0JBQUg7QUFBQSxjQUEyQkMsd0JBQTNCLFFBQTJCQSx3QkFBM0I7QUFBQSxpQkFDQyxNQUFDLHFCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLFNBQUQ7QUFDRSxnQkFBSSxFQUFDLE1BRFA7QUFFRSxvQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEscUJBQU9GLHNCQUFzQixDQUFDRSxDQUFELENBQTdCO0FBQUEsYUFGWjtBQUdFLHVCQUFXLEVBQUMsMkJBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBTUUsTUFBQyxrQkFBRDtBQUNFLG1CQUFPLEVBQUUsaUJBQUNBLENBQUQ7QUFBQSxxQkFBT0Qsd0JBQXdCLENBQUNDLENBQUQsQ0FBL0I7QUFBQSxhQURYO0FBRUUscUJBQVMsRUFBQyx5QkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSUdOLGdCQUpILENBTkYsQ0FERDtBQUFBLFNBREgsQ0FERjtBQW1CRDs7QUFDRCxhQUNFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHO0FBQUEsWUFBR0ksc0JBQUgsU0FBR0Esc0JBQUg7QUFBQSxZQUEyQkMsd0JBQTNCLFNBQTJCQSx3QkFBM0I7QUFBQSxlQUNDLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxTQUFEO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxrQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsbUJBQU9GLHNCQUFzQixDQUFDRSxDQUFELENBQTdCO0FBQUEsV0FGWjtBQUdFLHFCQUFXLEVBQUMsMkJBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLEVBTUUsTUFBQyxZQUFEO0FBQ0UsaUJBQU8sRUFBRSxpQkFBQ0EsQ0FBRDtBQUFBLG1CQUFPRCx3QkFBd0IsQ0FBQ0MsQ0FBRCxDQUEvQjtBQUFBLFdBRFg7QUFFRSxtQkFBUyxFQUFDLHlCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkYsQ0FERDtBQUFBLE9BREgsQ0FERjtBQW1CRDs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFLQyxhQUFMLEVBQVA7QUFDRDs7OztFQWxEa0JDLDRDQUFLLENBQUNDLFM7O0FBcURaUixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy42YjBlMTYzZDcxNmYxZDBkYTZhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgU2VhcmNoQ29uc3VtZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaFByb3ZpZGVyJztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSAnLi4vZGF0YS9kZXZpY2VzJztcclxuXHJcbmNvbnN0IFNlYXJjaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsZXg6IDEgMCAyOCU7XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hCb3ggPSBzdHlsZWQuaW5wdXRgXHJcbiAgY29sb3I6IHJnYigxLCAyMiwgMzkpO1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiA0OSU7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgIHdpZHRoOiAzNiU7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDBweCAhaW1wb3J0YW50O1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoQ29udGFpbmVyTW9iaWxlID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTE1cHg7XHJcbiAgdG9wOiA3cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hCdXR0b25Nb2JpbGUgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDJweCAxMnB4O1xyXG4gIG1hcmdpbjogMHB4IDBweDtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoQnV0dG9uSWNvbiA9IDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInNlYXJjaFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgY2xhc3M9XCJzdmctaW5saW5lLS1mYSBmYS1zZWFyY2ggZmEtdy0xNiBmYS0zeFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTUwNSA0NDIuN0w0MDUuMyAzNDNjLTQuNS00LjUtMTAuNi03LTE3LTdIMzcyYzI3LjYtMzUuMyA0NC03OS43IDQ0LTEyOEM0MTYgOTMuMSAzMjIuOSAwIDIwOCAwUzAgOTMuMSAwIDIwOHM5My4xIDIwOCAyMDggMjA4YzQ4LjMgMCA5Mi43LTE2LjQgMTI4LTQ0djE2LjNjMCA2LjQgMi41IDEyLjUgNyAxN2w5OS43IDk5LjdjOS40IDkuNCAyNC42IDkuNCAzMy45IDBsMjguMy0yOC4zYzkuNC05LjQgOS40LTI0LjYuMS0zNHpNMjA4IDMzNmMtNzAuNyAwLTEyOC01Ny4yLTEyOC0xMjggMC03MC43IDU3LjItMTI4IDEyOC0xMjggNzAuNyAwIDEyOCA1Ny4yIDEyOCAxMjggMCA3MC43LTU3LjIgMTI4LTEyOCAxMjh6XCIgY2xhc3M9XCJcIj48L3BhdGg+PC9zdmc+XHJcblxyXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDb250ZW50KCkge1xyXG4gICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlYXJjaENvbnN1bWVyPlxyXG4gICAgICAgICAgeyh7IGhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UsIGZpbmRQcm9kdWN0QmFzZWRPblNlYXJjaCB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxTZWFyY2hDb250YWluZXJNb2JpbGU+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEJveFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVTZWFyY2hUZXJtQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFyZSB5b3UgbG9va2luZyBmb3I/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hCdXR0b25Nb2JpbGVcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBmaW5kUHJvZHVjdEJhc2VkT25TZWFyY2goZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1NlYXJjaEJ1dHRvbkljb259XHJcbiAgICAgICAgICAgICAgPC9TZWFyY2hCdXR0b25Nb2JpbGU+XHJcbiAgICAgICAgICAgIDwvU2VhcmNoQ29udGFpbmVyTW9iaWxlPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1NlYXJjaENvbnN1bWVyPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlYXJjaENvbnN1bWVyPlxyXG4gICAgICAgIHsoeyBoYW5kbGVTZWFyY2hUZXJtQ2hhbmdlLCBmaW5kUHJvZHVjdEJhc2VkT25TZWFyY2ggfSkgPT4gKFxyXG4gICAgICAgICAgPFNlYXJjaENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFNlYXJjaEJveFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFyZSB5b3UgbG9va2luZyBmb3I/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlYXJjaEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBmaW5kUHJvZHVjdEJhc2VkT25TZWFyY2goZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgIDwvU2VhcmNoQnV0dG9uPlxyXG4gICAgICAgICAgPC9TZWFyY2hDb250YWluZXI+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TZWFyY2hDb25zdW1lcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJDb250ZW50KCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=