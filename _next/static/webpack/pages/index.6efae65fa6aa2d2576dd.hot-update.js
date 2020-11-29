webpackHotUpdate_N_E("pages/index",{

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
          }, "Search"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU2VhcmNoQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU2VhcmNoQm94IiwiaW5wdXQiLCJTZWFyY2hCdXR0b24iLCJidXR0b24iLCJTZWFyY2hDb250YWluZXJNb2JpbGUiLCJTZWFyY2hCdXR0b25Nb2JpbGUiLCJTZWFyY2hCdXR0b25JY29uIiwiU2VhcmNoIiwicHJvcHMiLCJpc01vYmlsZSIsImhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UiLCJmaW5kUHJvZHVjdEJhc2VkT25TZWFyY2giLCJlIiwicmVuZGVyQ29udGVudCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBckI7S0FBTUYsZTtBQUtOLElBQU1HLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0csS0FBVixvQkFBZjtNQUFNRCxTO0FBZ0JOLElBQU1FLFlBQVksR0FBR0oseURBQU0sQ0FBQ0ssTUFBVixvQkFBbEI7TUFBTUQsWTtBQUlOLElBQU1FLHFCQUFxQixHQUFHTix5REFBTSxDQUFDQyxHQUFWLG9CQUEzQjtNQUFNSyxxQjtBQU9OLElBQU1DLGtCQUFrQixHQUFHUCx5REFBTSxDQUFDSyxNQUFWLG9CQUF4QjtNQUFNRSxrQjs7QUFRTixJQUFNQyxnQkFBZ0IsR0FBRztBQUFLLGlCQUFZLE1BQWpCO0FBQXdCLFdBQVMsRUFBQyxPQUFsQztBQUEwQyxpQkFBWSxLQUF0RDtBQUE0RCxlQUFVLFFBQXRFO0FBQStFLE1BQUksRUFBQyxLQUFwRjtBQUEwRixPQUFLLEVBQUMsNEJBQWhHO0FBQTZILFNBQU8sRUFBQyxhQUFySTtBQUFtSixXQUFNLHdDQUF6SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWtNO0FBQU0sTUFBSSxFQUFDLGNBQVg7QUFBMEIsR0FBQyxFQUFDLDJWQUE1QjtBQUF3WCxXQUFNLEVBQTlYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBbE0sQ0FBekI7O0lBRU1DLE07Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDWEEsS0FEVztBQUVsQjs7OztvQ0FFZTtBQUFBOztBQUNkLFVBQUlDLDZEQUFKLEVBQWM7QUFDWixlQUNFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHO0FBQUEsY0FBR0Msc0JBQUgsUUFBR0Esc0JBQUg7QUFBQSxjQUEyQkMsd0JBQTNCLFFBQTJCQSx3QkFBM0I7QUFBQSxpQkFDQyxNQUFDLHFCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLFNBQUQ7QUFDRSxnQkFBSSxFQUFDLE1BRFA7QUFFRSxvQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEscUJBQU9GLHNCQUFzQixDQUFDRSxDQUFELENBQTdCO0FBQUEsYUFGWjtBQUdFLHVCQUFXLEVBQUMsMkJBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBTUUsTUFBQyxrQkFBRDtBQUNFLG1CQUFPLEVBQUUsaUJBQUNBLENBQUQ7QUFBQSxxQkFBT0Qsd0JBQXdCLENBQUNDLENBQUQsQ0FBL0I7QUFBQSxhQURYO0FBRUUscUJBQVMsRUFBQyx5QkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GLENBREQ7QUFBQSxTQURILENBREY7QUFtQkQ7O0FBQ0QsYUFDRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRztBQUFBLFlBQUdGLHNCQUFILFNBQUdBLHNCQUFIO0FBQUEsWUFBMkJDLHdCQUEzQixTQUEyQkEsd0JBQTNCO0FBQUEsZUFDQyxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsU0FBRDtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsa0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLG1CQUFPRixzQkFBc0IsQ0FBQ0UsQ0FBRCxDQUE3QjtBQUFBLFdBRlo7QUFHRSxxQkFBVyxFQUFDLDJCQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQU1FLE1BQUMsWUFBRDtBQUNFLGlCQUFPLEVBQUUsaUJBQUNBLENBQUQ7QUFBQSxtQkFBT0Qsd0JBQXdCLENBQUNDLENBQUQsQ0FBL0I7QUFBQSxXQURYO0FBRUUsbUJBQVMsRUFBQyx5QkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GLENBREQ7QUFBQSxPQURILENBREY7QUFtQkQ7Ozs2QkFFUTtBQUNQLGFBQU8sS0FBS0MsYUFBTCxFQUFQO0FBQ0Q7Ozs7RUFsRGtCQyw0Q0FBSyxDQUFDQyxTOztBQXFEWlIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmVmYWU2NWZhNmFhMmQyNTc2ZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFNlYXJjaENvbnN1bWVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hQcm92aWRlcic7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XHJcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJy4uL2RhdGEvZGV2aWNlcyc7XHJcblxyXG5jb25zdCBTZWFyY2hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbGV4OiAxIDAgMjglO1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoQm94ID0gc3R5bGVkLmlucHV0YFxyXG4gIGNvbG9yOiByZ2IoMSwgMjIsIDM5KTtcclxuICB3aWR0aDogNjUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDRweCAhaW1wb3J0YW50O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogNDklO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICB3aWR0aDogMzYlO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHggIWltcG9ydGFudDtcclxuYDtcclxuXHJcbmNvbnN0IFNlYXJjaENvbnRhaW5lck1vYmlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDExNXB4O1xyXG4gIHRvcDogN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoQnV0dG9uTW9iaWxlID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAycHggMTJweDtcclxuICBtYXJnaW46IDBweCAwcHg7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuYDtcclxuXHJcbmNvbnN0IFNlYXJjaEJ1dHRvbkljb24gPSA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzZWFyY2hcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIGNsYXNzPVwic3ZnLWlubGluZS0tZmEgZmEtc2VhcmNoIGZhLXctMTYgZmEtM3hcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01MDUgNDQyLjdMNDA1LjMgMzQzYy00LjUtNC41LTEwLjYtNy0xNy03SDM3MmMyNy42LTM1LjMgNDQtNzkuNyA0NC0xMjhDNDE2IDkzLjEgMzIyLjkgMCAyMDggMFMwIDkzLjEgMCAyMDhzOTMuMSAyMDggMjA4IDIwOGM0OC4zIDAgOTIuNy0xNi40IDEyOC00NHYxNi4zYzAgNi40IDIuNSAxMi41IDcgMTdsOTkuNyA5OS43YzkuNCA5LjQgMjQuNiA5LjQgMzMuOSAwbDI4LjMtMjguM2M5LjQtOS40IDkuNC0yNC42LjEtMzR6TTIwOCAzMzZjLTcwLjcgMC0xMjgtNTcuMi0xMjgtMTI4IDAtNzAuNyA1Ny4yLTEyOCAxMjgtMTI4IDcwLjcgMCAxMjggNTcuMiAxMjggMTI4IDAgNzAuNy01Ny4yIDEyOC0xMjggMTI4elwiIGNsYXNzPVwiXCI+PC9wYXRoPjwvc3ZnPlxyXG5cclxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29udGVudCgpIHtcclxuICAgIGlmIChpc01vYmlsZSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTZWFyY2hDb25zdW1lcj5cclxuICAgICAgICAgIHsoeyBoYW5kbGVTZWFyY2hUZXJtQ2hhbmdlLCBmaW5kUHJvZHVjdEJhc2VkT25TZWFyY2ggfSkgPT4gKFxyXG4gICAgICAgICAgICA8U2VhcmNoQ29udGFpbmVyTW9iaWxlPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hCb3hcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlU2VhcmNoVGVybUNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhcmUgeW91IGxvb2tpbmcgZm9yP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8U2VhcmNoQnV0dG9uTW9iaWxlXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZmluZFByb2R1Y3RCYXNlZE9uU2VhcmNoKGUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgIDwvU2VhcmNoQnV0dG9uTW9iaWxlPlxyXG4gICAgICAgICAgICA8L1NlYXJjaENvbnRhaW5lck1vYmlsZT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9TZWFyY2hDb25zdW1lcj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTZWFyY2hDb25zdW1lcj5cclxuICAgICAgICB7KHsgaGFuZGxlU2VhcmNoVGVybUNoYW5nZSwgZmluZFByb2R1Y3RCYXNlZE9uU2VhcmNoIH0pID0+IChcclxuICAgICAgICAgIDxTZWFyY2hDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxTZWFyY2hCb3hcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVTZWFyY2hUZXJtQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhcmUgeW91IGxvb2tpbmcgZm9yP1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWFyY2hCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZmluZFByb2R1Y3RCYXNlZE9uU2VhcmNoKGUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICA8L1NlYXJjaEJ1dHRvbj5cclxuICAgICAgICAgIDwvU2VhcmNoQ29udGFpbmVyPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2VhcmNoQ29uc3VtZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyQ29udGVudCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9