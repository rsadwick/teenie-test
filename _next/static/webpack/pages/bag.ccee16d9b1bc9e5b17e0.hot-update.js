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

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  border-radius: 0px 4px 4px 0px !important;\n  width: 25%;\n  padding: 0px 0px;\n    margin: 1px 0px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  position: fixed;\n  left: 115px;\n  top: 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    border-radius: 0px 4px 4px 0px !important;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n color: rgb(1, 22, 39);\n width: 65%;\n border-radius: 0 0 0 4px !important;\n\n @media only screen and (max-width: 768px) {\n     width: 74%;\n     font-size: 0.8rem;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n display: inline-block;\n flex: 1 0 28%;\n"]);

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
            lineNumber: 50,
            columnNumber: 11
          }
        }, function (_ref) {
          var handleSearchTermChange = _ref.handleSearchTermChange,
              findProductBasedOnSearch = _ref.findProductBasedOnSearch;
          return __jsx(SearchContainerMobile, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
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
              lineNumber: 53,
              columnNumber: 17
            }
          }), __jsx(SearchButtonMobile, {
            onClick: function onClick(e) {
              return findProductBasedOnSearch(e);
            },
            className: "button button-secondary",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }
          }, "Search"));
        });
      }

      return __jsx(_components_SearchProvider__WEBPACK_IMPORTED_MODULE_9__["SearchConsumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }
      }, function (_ref2) {
        var handleSearchTermChange = _ref2.handleSearchTermChange,
            findProductBasedOnSearch = _ref2.findProductBasedOnSearch;
        return __jsx(SearchContainer, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
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
            lineNumber: 73,
            columnNumber: 15
          }
        }), __jsx(SearchButton, {
          onClick: function onClick(e) {
            return findProductBasedOnSearch(e);
          },
          className: "button button-secondary",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU2VhcmNoQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU2VhcmNoQm94IiwiaW5wdXQiLCJTZWFyY2hCdXR0b24iLCJidXR0b24iLCJTZWFyY2hDb250YWluZXJNb2JpbGUiLCJTZWFyY2hCdXR0b25Nb2JpbGUiLCJTZWFyY2giLCJwcm9wcyIsImlzTW9iaWxlIiwiaGFuZGxlU2VhcmNoVGVybUNoYW5nZSIsImZpbmRQcm9kdWN0QmFzZWRPblNlYXJjaCIsImUiLCJyZW5kZXJDb250ZW50IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFyQjtLQUFNRixlO0FBS04sSUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDRyxLQUFWLG9CQUFmO01BQU1ELFM7QUFXTixJQUFNRSxZQUFZLEdBQUdKLHlEQUFNLENBQUNLLE1BQVYsb0JBQWxCO01BQU1ELFk7QUFLTixJQUFNRSxxQkFBcUIsR0FBR04seURBQU0sQ0FBQ0MsR0FBVixvQkFBM0I7TUFBTUsscUI7QUFNTixJQUFNQyxrQkFBa0IsR0FBR1AseURBQU0sQ0FBQ0ssTUFBVixvQkFBeEI7TUFBTUUsa0I7O0lBT0FDLE07Ozs7O0FBQ0Ysa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDWEEsS0FEVztBQUVsQjs7OztvQ0FFZTtBQUFBOztBQUNkLFVBQUlDLDZEQUFKLEVBQWM7QUFDWixlQUNFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNHO0FBQUEsY0FBR0Msc0JBQUgsUUFBR0Esc0JBQUg7QUFBQSxjQUEyQkMsd0JBQTNCLFFBQTJCQSx3QkFBM0I7QUFBQSxpQkFDQyxNQUFDLHFCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLFNBQUQ7QUFDRSxnQkFBSSxFQUFDLE1BRFA7QUFFRSxvQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEscUJBQU9GLHNCQUFzQixDQUFDRSxDQUFELENBQTdCO0FBQUEsYUFGWjtBQUdFLHVCQUFXLEVBQUMsMkJBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBTUUsTUFBQyxrQkFBRDtBQUNFLG1CQUFPLEVBQUUsaUJBQUNBLENBQUQ7QUFBQSxxQkFBT0Qsd0JBQXdCLENBQUNDLENBQUQsQ0FBL0I7QUFBQSxhQURYO0FBRUUscUJBQVMsRUFBQyx5QkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GLENBREQ7QUFBQSxTQURILENBREY7QUFtQkQ7O0FBQ0QsYUFDRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRztBQUFBLFlBQUdGLHNCQUFILFNBQUdBLHNCQUFIO0FBQUEsWUFBMkJDLHdCQUEzQixTQUEyQkEsd0JBQTNCO0FBQUEsZUFDQyxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsU0FBRDtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsa0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLG1CQUFPRixzQkFBc0IsQ0FBQ0UsQ0FBRCxDQUE3QjtBQUFBLFdBRlo7QUFHRSxxQkFBVyxFQUFDLDJCQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQU1FLE1BQUMsWUFBRDtBQUNFLGlCQUFPLEVBQUUsaUJBQUNBLENBQUQ7QUFBQSxtQkFBT0Qsd0JBQXdCLENBQUNDLENBQUQsQ0FBL0I7QUFBQSxXQURYO0FBRUUsbUJBQVMsRUFBQyx5QkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GLENBREQ7QUFBQSxPQURILENBREY7QUFtQkQ7Ozs2QkFFUTtBQUNMLGFBQU8sS0FBS0MsYUFBTCxFQUFQO0FBQ0g7Ozs7RUFsRGdCQyw0Q0FBSyxDQUFDQyxTOztBQXFEWlIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmFnLmNjZWUxNmQ5YjFiYzllNWIxN2UwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IFNlYXJjaENvbnN1bWVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hQcm92aWRlcidcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSAnLi4vZGF0YS9kZXZpY2VzJztcclxuXHJcbmNvbnN0IFNlYXJjaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiBmbGV4OiAxIDAgMjglO1xyXG5gXHJcblxyXG5jb25zdCBTZWFyY2hCb3ggPSBzdHlsZWQuaW5wdXRgXHJcbiBjb2xvcjogcmdiKDEsIDIyLCAzOSk7XHJcbiB3aWR0aDogNjUlO1xyXG4gYm9yZGVyLXJhZGl1czogMCAwIDAgNHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgIHdpZHRoOiA3NCU7XHJcbiAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IFNlYXJjaEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHggIWltcG9ydGFudDtcclxuYFxyXG5cclxuXHJcbmNvbnN0IFNlYXJjaENvbnRhaW5lck1vYmlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDExNXB4O1xyXG4gIHRvcDogNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoQnV0dG9uTW9iaWxlID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMjUlO1xyXG4gIHBhZGRpbmc6IDBweCAwcHg7XHJcbiAgICBtYXJnaW46IDFweCAwcHg7XHJcbmA7XHJcblxyXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyQ29udGVudCgpIHtcclxuICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxTZWFyY2hDb25zdW1lcj5cclxuICAgICAgICAgICAgeyh7IGhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UsIGZpbmRQcm9kdWN0QmFzZWRPblNlYXJjaCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFNlYXJjaENvbnRhaW5lck1vYmlsZT5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hCb3hcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhcmUgeW91IGxvb2tpbmcgZm9yP1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEJ1dHRvbk1vYmlsZVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZmluZFByb2R1Y3RCYXNlZE9uU2VhcmNoKGUpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgPC9TZWFyY2hCdXR0b25Nb2JpbGU+XHJcbiAgICAgICAgICAgICAgPC9TZWFyY2hDb250YWluZXJNb2JpbGU+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L1NlYXJjaENvbnN1bWVyPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U2VhcmNoQ29uc3VtZXI+XHJcbiAgICAgICAgICB7KHsgaGFuZGxlU2VhcmNoVGVybUNoYW5nZSwgZmluZFByb2R1Y3RCYXNlZE9uU2VhcmNoIH0pID0+IChcclxuICAgICAgICAgICAgPFNlYXJjaENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8U2VhcmNoQm94XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYXJlIHlvdSBsb29raW5nIGZvcj9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGZpbmRQcm9kdWN0QmFzZWRPblNlYXJjaChlKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICA8L1NlYXJjaEJ1dHRvbj5cclxuICAgICAgICAgICAgPC9TZWFyY2hDb250YWluZXI+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvU2VhcmNoQ29uc3VtZXI+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29udGVudCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdLCJzb3VyY2VSb290IjoiIn0=