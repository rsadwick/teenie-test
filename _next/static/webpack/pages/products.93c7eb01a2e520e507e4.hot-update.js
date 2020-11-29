webpackHotUpdate_N_E("pages/products",{

/***/ "./components/ProductSorter.js":
/*!*************************************!*\
  !*** ./components/ProductSorter.js ***!
  \*************************************/
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
/* harmony import */ var _data_categories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/categories */ "./data/categories.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "C:\\Users\\drewe\\Documents\\GitHub\\CraftyBeeSupplies\\components\\ProductSorter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    display: inline-block;\n    border: none;\n    margin: 0 5px;\n    padding: 0;\n    text-decoration: none;\n    cursor: pointer;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    font-size: 0.9rem;\n    font-weight: 300;\n    color: #011627;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: inline-block;\n  border: none;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  font-size: 0.8rem;\n  font-weight: 300;\n  color: #fff;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    position: fixed;\n    top: 45px;\n    right: 0px;\n    z-index: 1;\n    width: 31%;\n    font-size: 0.6rem;\n    padding: 7px;\n    margin: 0px;\n    line-height: 26px;\n    vertical-align: middle;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  list-style-type: none;\n  padding: 12px;\n  margin: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '53%',
    height: '40px',
    right: '-10px',
    top: '42px',
    opacity: 0
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '44px',
    left: '-1px'
  },
  bmMenu: {
    background: '#373a47',
    padding: '0.9rem',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.3em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};
var CategoryList = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].ul(_templateObject());
_c = CategoryList;
var CategoryListMobile = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].ul(_templateObject2());
_c2 = CategoryListMobile;
var OpenCatetoriesButton = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].a(_templateObject3());
_c3 = OpenCatetoriesButton;
var CategoryButtonMobile = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button(_templateObject4());
_c4 = CategoryButtonMobile;
var CategoryButton = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button(_templateObject5());
_c5 = CategoryButton;

var ProductSorter = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ProductSorter, _React$Component);

  var _super = _createSuper(ProductSorter);

  function ProductSorter(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductSorter);

    _this = _super.call(this, props);
    console.log(props);
    _this.state = {
      product: {},
      selectedVariantImage: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductSorter, [{
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      if (this.props.isMobile) {
        return __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 18
          }
        }, __jsx(OpenCatetoriesButton, {
          className: 'button button-primary',
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 9
          }
        }, "Categories"), __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_10__["slide"], {
          id: 'categoryMenu',
          styles: styles,
          noOverlay: true,
          disableAutoFocus: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 9
          }
        }, __jsx(CategoryListMobile, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 11
          }
        }, __jsx("li", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }
        }, __jsx(CategoryButtonMobile, {
          onClick: this.props.getAllProducts,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }
        }, "all (", this.props.getAllProductsTotal(), ")")), _data_categories__WEBPACK_IMPORTED_MODULE_9__["default"].map(function (category) {
          return __jsx("li", {
            key: category.id,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }
          }, __jsx(CategoryButtonMobile, {
            className: 'button',
            onClick: function onClick() {
              return _this2.props.sortProductsByCategory(category.id);
            },
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 17
            }
          }, category.title, " (", _this2.props.getProductTotalInCategory(category.id), ")"));
        }))));
      } else return __jsx(CategoryList, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }
      }, __jsx(CategoryButton, {
        onClick: this.props.getAllProducts,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 17
        }
      }, "all (", this.props.getAllProductsTotal(), ")")), _data_categories__WEBPACK_IMPORTED_MODULE_9__["default"].map(function (category) {
        return __jsx("li", {
          key: category.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 21
          }
        }, __jsx(CategoryButton, {
          onClick: function onClick() {
            return _this2.props.sortProductsByCategory(category.id);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 25
          }
        }, category.title, " (", _this2.props.getProductTotalInCategory(category.id), ")"));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderContent();
    }
  }]);

  return ProductSorter;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductSorter);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "CategoryList");
$RefreshReg$(_c2, "CategoryListMobile");
$RefreshReg$(_c3, "OpenCatetoriesButton");
$RefreshReg$(_c4, "CategoryButtonMobile");
$RefreshReg$(_c5, "CategoryButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0U29ydGVyLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsImJtQnVyZ2VyQnV0dG9uIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInJpZ2h0IiwidG9wIiwib3BhY2l0eSIsImJtQnVyZ2VyQmFycyIsImJhY2tncm91bmQiLCJibUJ1cmdlckJhcnNIb3ZlciIsImJtQ3Jvc3NCdXR0b24iLCJibUNyb3NzIiwiYm1NZW51V3JhcCIsImxlZnQiLCJibU1lbnUiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJibU1vcnBoU2hhcGUiLCJmaWxsIiwiYm1JdGVtTGlzdCIsImNvbG9yIiwiYm1JdGVtIiwiZGlzcGxheSIsImJtT3ZlcmxheSIsIkNhdGVnb3J5TGlzdCIsInN0eWxlZCIsInVsIiwiQ2F0ZWdvcnlMaXN0TW9iaWxlIiwiT3BlbkNhdGV0b3JpZXNCdXR0b24iLCJhIiwiQ2F0ZWdvcnlCdXR0b25Nb2JpbGUiLCJidXR0b24iLCJDYXRlZ29yeUJ1dHRvbiIsIlByb2R1Y3RTb3J0ZXIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInByb2R1Y3QiLCJzZWxlY3RlZFZhcmlhbnRJbWFnZSIsImlzTW9iaWxlIiwiZ2V0QWxsUHJvZHVjdHMiLCJnZXRBbGxQcm9kdWN0c1RvdGFsIiwiY2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3J5IiwiaWQiLCJzb3J0UHJvZHVjdHNCeUNhdGVnb3J5IiwidGl0bGUiLCJnZXRQcm9kdWN0VG90YWxJbkNhdGVnb3J5IiwicmVuZGVyQ29udGVudCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBRztBQUNYQyxn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QUFxQ0osUUFBUSxDQUFDQyxFQUE5QyxDQUZ2QixNQURKLENBRG9CO0FBQUEsT0FBdkIsQ0FQRyxDQUFUO0FBZ0JSOzs7NkJBRVE7QUFDUCxhQUNJLEtBQUtJLGFBQUwsRUFESjtBQUdEOzs7O0VBMUR5QkMsNENBQUssQ0FBQ0MsUzs7QUE2RG5CbkIsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuOTNjN2ViMDFhMmU1MjBlNTA3ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gJy4uL2RhdGEvY2F0ZWdvcmllcyc7XHJcbmltcG9ydCB7IHNsaWRlIGFzIENhdGVnb3J5TWVudSB9IGZyb20gJ3JlYWN0LWJ1cmdlci1tZW51JztcclxuXHJcbnZhciBzdHlsZXMgPSB7XHJcbiAgYm1CdXJnZXJCdXR0b246IHtcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgd2lkdGg6ICc1MyUnLFxyXG4gICAgaGVpZ2h0OiAnNDBweCcsXHJcbiAgICByaWdodDogJy0xMHB4JyxcclxuICAgIHRvcDogJzQycHgnLFxyXG4gICAgb3BhY2l0eTogMCxcclxuICB9LFxyXG4gIGJtQnVyZ2VyQmFyczoge1xyXG4gICAgYmFja2dyb3VuZDogJyMzNzNhNDcnLFxyXG4gIH0sXHJcbiAgYm1CdXJnZXJCYXJzSG92ZXI6IHtcclxuICAgIGJhY2tncm91bmQ6ICcjYTkwMDAwJyxcclxuICB9LFxyXG4gIGJtQ3Jvc3NCdXR0b246IHtcclxuICAgIGhlaWdodDogJzI0cHgnLFxyXG4gICAgd2lkdGg6ICcyNHB4JyxcclxuICB9LFxyXG4gIGJtQ3Jvc3M6IHtcclxuICAgIGJhY2tncm91bmQ6ICcjYmRjM2M3JyxcclxuICB9LFxyXG4gIGJtTWVudVdyYXA6IHtcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB0b3A6ICc0NHB4JyxcclxuICAgIGxlZnQ6ICctMXB4JyxcclxuICB9LFxyXG4gIGJtTWVudToge1xyXG4gICAgYmFja2dyb3VuZDogJyMzNzNhNDcnLFxyXG4gICAgcGFkZGluZzogJzAuOXJlbScsXHJcbiAgICBmb250U2l6ZTogJzEuMTVlbScsXHJcbiAgfSxcclxuICBibU1vcnBoU2hhcGU6IHtcclxuICAgIGZpbGw6ICcjMzczYTQ3JyxcclxuICB9LFxyXG4gIGJtSXRlbUxpc3Q6IHtcclxuICAgIGNvbG9yOiAnI2I4YjdhZCcsXHJcbiAgICBwYWRkaW5nOiAnMC4zZW0nLFxyXG4gIH0sXHJcbiAgYm1JdGVtOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICB9LFxyXG4gIGJtT3ZlcmxheToge1xyXG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4zKScsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IENhdGVnb3J5TGlzdCA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBtYXJnaW46IDA7XHJcbmA7XHJcblxyXG5jb25zdCBDYXRlZ29yeUxpc3RNb2JpbGUgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG5gO1xyXG5cclxuY29uc3QgT3BlbkNhdGV0b3JpZXNCdXR0b24gPSBzdHlsZWQuYWBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNDVweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDMxJTtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbmA7XHJcblxyXG5jb25zdCBDYXRlZ29yeUJ1dHRvbk1vYmlsZSA9IHN0eWxlZC5idXR0b25gXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuYDtcclxuXHJcbmNvbnN0IENhdGVnb3J5QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICMwMTE2Mjc7XHJcbmBcclxuXHJcbmNsYXNzIFByb2R1Y3RTb3J0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHByb2R1Y3Q6IHt9LFxyXG4gICAgICBzZWxlY3RlZFZhcmlhbnRJbWFnZTogJycsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29udGVudCgpe1xyXG4gICAgICBpZih0aGlzLnByb3BzLmlzTW9iaWxlKXtcclxuICAgICAgICAgIHJldHVybiA8c3Bhbj5cclxuICAgICAgICA8T3BlbkNhdGV0b3JpZXNCdXR0b24gY2xhc3NOYW1lPXsnYnV0dG9uIGJ1dHRvbi1wcmltYXJ5J30+Q2F0ZWdvcmllczwvT3BlbkNhdGV0b3JpZXNCdXR0b24+XHJcbiAgICAgICAgPENhdGVnb3J5TWVudSBpZD17J2NhdGVnb3J5TWVudSd9IHN0eWxlcz17c3R5bGVzfSBub092ZXJsYXkgZGlzYWJsZUF1dG9Gb2N1cyAgPlxyXG4gICAgICAgICAgPENhdGVnb3J5TGlzdE1vYmlsZT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxDYXRlZ29yeUJ1dHRvbk1vYmlsZSBvbkNsaWNrPXt0aGlzLnByb3BzLmdldEFsbFByb2R1Y3RzfT5cclxuICAgICAgICAgICAgICAgIGFsbCAoe3RoaXMucHJvcHMuZ2V0QWxsUHJvZHVjdHNUb3RhbCgpfSlcclxuICAgICAgICAgICAgICA8L0NhdGVnb3J5QnV0dG9uTW9iaWxlPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxyXG4gICAgICAgICAgICAgICAgPENhdGVnb3J5QnV0dG9uTW9iaWxlXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2J1dHRvbid9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc29ydFByb2R1Y3RzQnlDYXRlZ29yeShjYXRlZ29yeS5pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS50aXRsZX0gKFxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5nZXRQcm9kdWN0VG90YWxJbkNhdGVnb3J5KGNhdGVnb3J5LmlkKX0pXHJcbiAgICAgICAgICAgICAgICA8L0NhdGVnb3J5QnV0dG9uTW9iaWxlPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9DYXRlZ29yeUxpc3RNb2JpbGU+XHJcbiAgICAgICAgPC9DYXRlZ29yeU1lbnU+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgcmV0dXJuICAgPENhdGVnb3J5TGlzdD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeUJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmdldEFsbFByb2R1Y3RzfT5cclxuICAgICAgICAgICAgICAgICAgICBhbGwgKHt0aGlzLnByb3BzLmdldEFsbFByb2R1Y3RzVG90YWwoKX0pXHJcbiAgICAgICAgICAgICAgICA8L0NhdGVnb3J5QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNvcnRQcm9kdWN0c0J5Q2F0ZWdvcnkoY2F0ZWdvcnkuaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS50aXRsZX0gKHt0aGlzLnByb3BzLmdldFByb2R1Y3RUb3RhbEluQ2F0ZWdvcnkoY2F0ZWdvcnkuaWQpfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXRlZ29yeUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQ2F0ZWdvcnlMaXN0PlxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTb3J0ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=