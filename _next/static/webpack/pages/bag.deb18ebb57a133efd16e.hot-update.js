webpackHotUpdate_N_E("pages/bag",{

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

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  color: #ff9900;\n  width: 20px;\n  height: 37px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  border-radius: 0px 4px 4px 0px;\n  padding: 0px 2%;\n  margin: 0px 0px;\n  font-size: 0.7rem;\n  vertical-align: middle;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n      position: relative;\n    left: 30%;\n    top: 12%;\n    width: 86%;\n"]);

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  color: rgb(1, 22, 39);\n  width: 65%;\n  border-radius: 0 0 0 4px !important;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 0.8rem;\n  }\n\n  @media only screen and (max-width: 320px) {\n    font-size: 0.8rem;\n  }\n"]);

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
var SearchIconSvg = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].svg(_templateObject6());
_c6 = SearchIconSvg;

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
            lineNumber: 60,
            columnNumber: 9
          }
        }, function (_ref) {
          var handleSearchTermChange = _ref.handleSearchTermChange,
              findProductBasedOnSearch = _ref.findProductBasedOnSearch;
          return __jsx(SearchContainerMobile, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62,
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
              lineNumber: 63,
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
              lineNumber: 68,
              columnNumber: 15
            }
          }, __jsx(SearchIconSvg, {
            "aria-hidden": "true",
            focusable: "false",
            "data-prefix": "fas",
            "data-icon": "search",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            "class": "svg-inline--fa fa-search fa-w-16 fa-3x",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }
          }, __jsx("path", {
            fill: "currentColor",
            d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
            "class": "",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 19
            }
          }))));
        });
      }

      return __jsx(_components_SearchProvider__WEBPACK_IMPORTED_MODULE_9__["SearchConsumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 7
        }
      }, function (_ref2) {
        var handleSearchTermChange = _ref2.handleSearchTermChange,
            findProductBasedOnSearch = _ref2.findProductBasedOnSearch;
        return __jsx(SearchContainer, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
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
            lineNumber: 98,
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
            lineNumber: 103,
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

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "SearchContainer");
$RefreshReg$(_c2, "SearchBox");
$RefreshReg$(_c3, "SearchButton");
$RefreshReg$(_c4, "SearchContainerMobile");
$RefreshReg$(_c5, "SearchButtonMobile");
$RefreshReg$(_c6, "SearchIconSvg");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU2VhcmNoQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU2VhcmNoQm94IiwiaW5wdXQiLCJTZWFyY2hCdXR0b24iLCJidXR0b24iLCJTZWFyY2hDb250YWluZXJNb2JpbGUiLCJTZWFyY2hCdXR0b25Nb2JpbGUiLCJTZWFyY2hJY29uU3ZnIiwic3ZnIiwiU2VhcmNoIiwicHJvcHMiLCJpc01vYmlsZSIsImhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UiLCJmaW5kUHJvZHVjdEJhc2VkT25TZWFyY2giLCJlIiwicmVuZGVyQ29udGVudCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQXJCO0tBQU1GLGU7QUFLTixJQUFNRyxTQUFTLEdBQUdGLHlEQUFNLENBQUNHLEtBQVYsb0JBQWY7TUFBTUQsUztBQWNOLElBQU1FLFlBQVksR0FBR0oseURBQU0sQ0FBQ0ssTUFBVixvQkFBbEI7TUFBTUQsWTtBQUlOLElBQU1FLHFCQUFxQixHQUFHTix5REFBTSxDQUFDQyxHQUFWLG9CQUEzQjtNQUFNSyxxQjtBQU9OLElBQU1DLGtCQUFrQixHQUFHUCx5REFBTSxDQUFDSyxNQUFWLG9CQUF4QjtNQUFNRSxrQjtBQVFOLElBQU1DLGFBQWEsR0FBR1IseURBQU0sQ0FBQ1MsR0FBVixvQkFBbkI7TUFBTUQsYTs7SUFNQUUsTTs7Ozs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNYQSxLQURXO0FBRWxCOzs7O29DQUVlO0FBQUE7O0FBQ2QsVUFBSUMsNkRBQUosRUFBYztBQUNaLGVBQ0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0c7QUFBQSxjQUFHQyxzQkFBSCxRQUFHQSxzQkFBSDtBQUFBLGNBQTJCQyx3QkFBM0IsUUFBMkJBLHdCQUEzQjtBQUFBLGlCQUNDLE1BQUMscUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFLE1BQUMsU0FBRDtBQUNFLGdCQUFJLEVBQUMsTUFEUDtBQUVFLG9CQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxxQkFBT0Ysc0JBQXNCLENBQUNFLENBQUQsQ0FBN0I7QUFBQSxhQUZaO0FBR0UsdUJBQVcsRUFBQywyQkFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFNRSxNQUFDLGtCQUFEO0FBQ0UsbUJBQU8sRUFBRSxpQkFBQ0EsQ0FBRDtBQUFBLHFCQUFPRCx3QkFBd0IsQ0FBQ0MsQ0FBRCxDQUEvQjtBQUFBLGFBRFg7QUFFRSxxQkFBUyxFQUFDLHlCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFJRSxNQUFDLGFBQUQ7QUFDRSwyQkFBWSxNQURkO0FBRUUscUJBQVMsRUFBQyxPQUZaO0FBR0UsMkJBQVksS0FIZDtBQUlFLHlCQUFVLFFBSlo7QUFLRSxnQkFBSSxFQUFDLEtBTFA7QUFNRSxpQkFBSyxFQUFDLDRCQU5SO0FBT0UsbUJBQU8sRUFBQyxhQVBWO0FBUUUscUJBQU0sd0NBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVVFO0FBQ0UsZ0JBQUksRUFBQyxjQURQO0FBRUUsYUFBQyxFQUFDLDJWQUZKO0FBR0UscUJBQU0sRUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsQ0FKRixDQU5GLENBREQ7QUFBQSxTQURILENBREY7QUFrQ0Q7O0FBQ0QsYUFDRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRztBQUFBLFlBQUdGLHNCQUFILFNBQUdBLHNCQUFIO0FBQUEsWUFBMkJDLHdCQUEzQixTQUEyQkEsd0JBQTNCO0FBQUEsZUFDQyxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsU0FBRDtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsa0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLG1CQUFPRixzQkFBc0IsQ0FBQ0UsQ0FBRCxDQUE3QjtBQUFBLFdBRlo7QUFHRSxxQkFBVyxFQUFDLDJCQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQU1FLE1BQUMsWUFBRDtBQUNFLGlCQUFPLEVBQUUsaUJBQUNBLENBQUQ7QUFBQSxtQkFBT0Qsd0JBQXdCLENBQUNDLENBQUQsQ0FBL0I7QUFBQSxXQURYO0FBRUUsbUJBQVMsRUFBQyx5QkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GLENBREQ7QUFBQSxPQURILENBREY7QUFtQkQ7Ozs2QkFFUTtBQUNQLGFBQU8sS0FBS0MsYUFBTCxFQUFQO0FBQ0Q7Ozs7RUFqRWtCQyw0Q0FBSyxDQUFDQyxTOztBQW9FWlIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmFnLmRlYjE4ZWJiNTdhMTMzZWZkMTZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBTZWFyY2hDb25zdW1lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnO1xyXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICcuLi9kYXRhL2RldmljZXMnO1xyXG5cclxuY29uc3QgU2VhcmNoQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxleDogMSAwIDI4JTtcclxuYDtcclxuXHJcbmNvbnN0IFNlYXJjaEJveCA9IHN0eWxlZC5pbnB1dGBcclxuICBjb2xvcjogcmdiKDEsIDIyLCAzOSk7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMCA0cHggIWltcG9ydGFudDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDBweCAhaW1wb3J0YW50O1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoQ29udGFpbmVyTW9iaWxlID0gc3R5bGVkLmRpdmBcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzAlO1xyXG4gICAgdG9wOiAxMiU7XHJcbiAgICB3aWR0aDogODYlO1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoQnV0dG9uTW9iaWxlID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7XHJcbiAgcGFkZGluZzogMHB4IDIlO1xyXG4gIG1hcmdpbjogMHB4IDBweDtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoSWNvblN2ZyA9IHN0eWxlZC5zdmdgXHJcbiAgY29sb3I6ICNmZjk5MDA7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAzN3B4O1xyXG5gO1xyXG5cclxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29udGVudCgpIHtcclxuICAgIGlmIChpc01vYmlsZSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTZWFyY2hDb25zdW1lcj5cclxuICAgICAgICAgIHsoeyBoYW5kbGVTZWFyY2hUZXJtQ2hhbmdlLCBmaW5kUHJvZHVjdEJhc2VkT25TZWFyY2ggfSkgPT4gKFxyXG4gICAgICAgICAgICA8U2VhcmNoQ29udGFpbmVyTW9iaWxlPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hCb3hcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlU2VhcmNoVGVybUNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhcmUgeW91IGxvb2tpbmcgZm9yP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8U2VhcmNoQnV0dG9uTW9iaWxlXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZmluZFByb2R1Y3RCYXNlZE9uU2VhcmNoKGUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uU3ZnXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYXNcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWljb249XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3ZnLWlubGluZS0tZmEgZmEtc2VhcmNoIGZhLXctMTYgZmEtM3hcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNTA1IDQ0Mi43TDQwNS4zIDM0M2MtNC41LTQuNS0xMC42LTctMTctN0gzNzJjMjcuNi0zNS4zIDQ0LTc5LjcgNDQtMTI4QzQxNiA5My4xIDMyMi45IDAgMjA4IDBTMCA5My4xIDAgMjA4czkzLjEgMjA4IDIwOCAyMDhjNDguMyAwIDkyLjctMTYuNCAxMjgtNDR2MTYuM2MwIDYuNCAyLjUgMTIuNSA3IDE3bDk5LjcgOTkuN2M5LjQgOS40IDI0LjYgOS40IDMzLjkgMGwyOC4zLTI4LjNjOS40LTkuNCA5LjQtMjQuNi4xLTM0ek0yMDggMzM2Yy03MC43IDAtMTI4LTU3LjItMTI4LTEyOCAwLTcwLjcgNTcuMi0xMjggMTI4LTEyOCA3MC43IDAgMTI4IDU3LjIgMTI4IDEyOCAwIDcwLjctNTcuMiAxMjgtMTI4IDEyOHpcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXCJcclxuICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDwvU2VhcmNoSWNvblN2Zz5cclxuICAgICAgICAgICAgICA8L1NlYXJjaEJ1dHRvbk1vYmlsZT5cclxuICAgICAgICAgICAgPC9TZWFyY2hDb250YWluZXJNb2JpbGU+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvU2VhcmNoQ29uc3VtZXI+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2VhcmNoQ29uc3VtZXI+XHJcbiAgICAgICAgeyh7IGhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UsIGZpbmRQcm9kdWN0QmFzZWRPblNlYXJjaCB9KSA9PiAoXHJcbiAgICAgICAgICA8U2VhcmNoQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8U2VhcmNoQm94XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlU2VhcmNoVGVybUNoYW5nZShlKX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYXJlIHlvdSBsb29raW5nIGZvcj9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VhcmNoQnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGZpbmRQcm9kdWN0QmFzZWRPblNlYXJjaChlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgPC9TZWFyY2hCdXR0b24+XHJcbiAgICAgICAgICA8L1NlYXJjaENvbnRhaW5lcj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1NlYXJjaENvbnN1bWVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLnJlbmRlckNvbnRlbnQoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==