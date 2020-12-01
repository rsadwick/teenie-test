webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/BagProvider.js":
/*!***********************************!*\
  !*** ./components/BagProvider.js ***!
  \***********************************/
/*! exports provided: default, BagConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BagConsumer", function() { return BagConsumer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "C:\\Users\\drewe\\Documents\\GitHub\\CraftyBeeSupplies\\components\\BagProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





/* First we will make a new context */

var BagContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createContext();
/* Then create a provider Component */

var BagProvider = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(BagProvider, _Component);

  var _super = _createSuper(BagProvider);

  function BagProvider(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BagProvider);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleBagUpdate", function (e) {
      e.preventDefault();
      var bag = sessionStorage.craftyBeeBag ? JSON.parse(sessionStorage.craftyBeeBag) : _this.state.bag;
      var selectedVariant = _this.state.selectedVariant;

      if (selectedVariant.useNotes && selectedVariant.noteContents === '') {
        selectedVariant.hasNotesError = true;

        _this.setState({
          selectedVariant: selectedVariant
        });

        return false;
      } else if (selectedVariant.hasNotesError === true && selectedVariant.useNotes && selectedVariant.noteContents !== '') {
        selectedVariant.hasNotesError = false;

        _this.setState({
          selectedVariant: selectedVariant
        });
      }

      var bagItem = lodash__WEBPACK_IMPORTED_MODULE_8__["find"](bag, {
        sku: selectedVariant.sku
      });

      var index = lodash__WEBPACK_IMPORTED_MODULE_8__["findIndex"](bag, {
        sku: selectedVariant.sku
      });

      if (bag.length > 0 && index != -1) {
        var newQuantity = bagItem.quantity + 1;
        bag.splice(index, 1, {
          sku: selectedVariant.sku,
          quantity: newQuantity,
          image: selectedVariant.imageTiny,
          name: selectedVariant.name,
          price: selectedVariant.price,
          noteContents: selectedVariant.noteContents,
          metadata: selectedVariant.metadata
        });
      } else {
        bag.push({
          sku: selectedVariant.sku,
          quantity: 1,
          image: selectedVariant.imageTiny,
          name: selectedVariant.name,
          price: selectedVariant.price,
          noteContents: selectedVariant.noteContents,
          metadata: selectedVariant.metadata
        });
      }

      _this.setState({
        bag: bag,
        playBagAnimation: true
      });

      setTimeout(function () {
        this.setState({
          playBagAnimation: false
        });
      }.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)), 3000);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleDeleteItem", function (sku) {
      var bag = _this.state.bag.filter(function (item) {
        return item.sku !== sku;
      });

      _this.setState({
        bag: bag
      });
    });

    _this.handleBagUpdate = _this.handleBagUpdate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleVariantChange = _this.handleVariantChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleDeleteItem = _this.handleDeleteItem.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleQuantityChange = _this.handleQuantityChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.clearBag = _this.clearBag.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.displayBagTotals = _this.displayBagTotals.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleNotesUpdate = _this.handleNotesUpdate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleHelpChange = _this.handleHelpChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleMetadataChange = _this.handleMetadataChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.logOrder = _this.logOrder.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.state = {
      bag: [],
      confirmationBag: [],
      selectedVariant: {
        id: 0,
        sku: '',
        price: '',
        quantity: 0,
        image: '',
        name: '',
        useNotes: false,
        notesTitle: '',
        noteContents: '',
        hasNotesError: false,
        metadata: []
      },
      playBagAnimation: false,
      showHelp: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BagProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var savedBag = sessionStorage.craftyBeeBag ? JSON.parse(sessionStorage.craftyBeeBag) : [];
      this.setState({
        bag: savedBag
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      sessionStorage.setItem('craftyBeeBag', JSON.stringify(this.state.bag));
    }
  }, {
    key: "handleVariantChange",
    value: function handleVariantChange(e) {
      var id = Number(e.currentTarget.value);
      var selectedOption = null;
      var metadata = null;

      for (var i = 0; i < this.props.products.length; i++) {
        selectedOption = lodash__WEBPACK_IMPORTED_MODULE_8__["find"](this.props.products[i].options, ['id', id]);
        metadata = this.props.products[i].metadata;

        if (selectedOption) {
          break;
        }
      }

      var selectedVariant = this.state.selectedVariant;
      selectedVariant.id = selectedOption.id;
      selectedVariant.sku = selectedOption.sku;
      selectedVariant.price = selectedOption.price;
      selectedVariant.imageTiny = selectedOption.imageTiny;
      selectedVariant.imageLarge = selectedOption.imageLarge;
      selectedVariant.name = selectedOption.name;
      selectedVariant.useNotes = selectedOption.useNotes;
      selectedVariant.notesTitle = selectedOption.notesTitle;
      selectedVariant.noteContents = ''; //product metadata gets attached to selected variant(makes things sort of messy)

      selectedVariant.metadata = [];

      if (metadata && metadata.length > 0) {
        selectedVariant.metadata.push({
          name: metadata[0].groupName,
          value: metadata[0].name
        });
      }

      this.setState({
        selectedVariant: selectedVariant,
        showHelp: false
      });
    }
  }, {
    key: "handleQuantityChange",
    value: function handleQuantityChange(e, sku) {
      e.preventDefault();
      var bag = this.state.bag;
      var quantity = Number(e.target.value);

      var bagItem = lodash__WEBPACK_IMPORTED_MODULE_8__["find"](bag, {
        sku: sku
      });

      var index = lodash__WEBPACK_IMPORTED_MODULE_8__["findIndex"](bag, {
        sku: sku
      });

      bag.splice(index, 1, {
        sku: bagItem.sku,
        quantity: quantity,
        image: bagItem.image,
        name: bagItem.name,
        price: bagItem.price,
        useNotes: bagItem.useNotes,
        notesTitle: bagItem.notesTitle,
        noteContents: bagItem.noteContents,
        metadata: bagItem.metadata
      });
      this.setState({
        bag: bag
      });
    }
  }, {
    key: "handleNotesUpdate",
    value: function handleNotesUpdate(e, id) {
      e.preventDefault();
      var noteText = e.target.value;
      var selectedVariant = this.state.selectedVariant;
      selectedVariant.noteContents = noteText;
      this.setState({
        selectedVariant: selectedVariant
      });
    }
  }, {
    key: "handleHelpChange",
    value: function handleHelpChange(e) {
      this.setState({
        showHelp: true
      });
    }
  }, {
    key: "handleMetadataChange",
    value: function handleMetadataChange(e) {
      var value = e.currentTarget.value;
      var name = e.target.item(e.target.selectedIndex).getAttribute('name');
      var selectedVariant = this.state.selectedVariant;

      for (var i = 0; i < selectedVariant.metadata.length; i++) {
        if (selectedVariant.metadata[i].name === name) {
          selectedVariant.metadata.splice(i, 1, {
            name: selectedVariant.metadata[i].name,
            value: value
          });
          this.setState({
            selectedVariant: selectedVariant
          });
          return;
        }
      }

      selectedVariant.metadata.push({
        name: name,
        value: value
      });
      this.setState({
        selectedVariant: selectedVariant
      });
    }
  }, {
    key: "formatDollarsToCents",
    value: function formatDollarsToCents(value) {
      value = (value + '').replace(/[^\d.-]/g, '');

      if (value && value.includes('.')) {
        value = value.substring(0, value.indexOf('.') + 3);
      }

      return value ? Math.round(parseFloat(value) * 100) : 0;
    }
  }, {
    key: "formatCentsToDollars",
    value: function formatCentsToDollars(value) {
      value = (value + '').replace(/[^\d.-]/g, '');
      value = parseFloat(value);
      return value ? value / 100 : 0;
    }
  }, {
    key: "clearBag",
    value: function clearBag() {
      this.setState({
        bag: []
      });
    }
  }, {
    key: "displayBagTotals",
    value: function displayBagTotals() {
      var totals = {
        subtotal: 0.00,
        shipping: 0.00,
        tax: 0.00,
        grandTotal: 0.00
      };
      var subtotal = 0;
      var bag = this.state.bag;

      for (var i = 0; i < bag.length; i++) {
        var subTotalCalculation;
        subTotalCalculation = this.formatDollarsToCents(bag[i].price);
        subTotalCalculation = subTotalCalculation * bag[i].quantity;
        subtotal += subTotalCalculation;
      }

      var tax = subtotal * 6.0;
      var shipping = 0;
      var grandTotal = subtotal + Math.round(tax / 100);
      totals.subtotal = this.formatCentsToDollars(subtotal);
      totals.tax = this.formatCentsToDollars(Math.round(tax / 100));
      totals.grandTotal = this.formatCentsToDollars(grandTotal);
      return totals;
    }
  }, {
    key: "logOrder",
    value: function logOrder() {
      var bag = this.state.bag;

      for (var i = 0; i < bag.length; i++) {
        var metaData = '';

        if (bag[i].metadata && bag[i].metadata.length > 0) {
          for (var j = 0; j < bag[i].metadata.length; j++) {
            metaData += bag[i].metadata[j].name + ' | ' + bag[i].metadata[j].value;
          }
        }

        console.log('order: ' + bag[i].name + ' ' + bag[i].price + ' - ' + 'sku: ' + bag[i].sku);
        isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default()('https://3ee.com/teeniebee/orders/', {
          method: 'post',
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: bag[i].name,
            sku: bag[i].sku,
            quantity: bag[i].quantity,
            price: bag[i].price,
            note: bag[i].noteContents,
            metadata: metaData,
            product_id: 0,
            order_number: 0
          })
        }).then(function (res) {
          console.log(res);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(BagContext.Provider, {
        value: {
          bag: this.state.bag,
          selectedVariant: this.state.selectedVariant,
          handleBagUpdate: this.handleBagUpdate,
          handleVariantChange: this.handleVariantChange,
          handleDeleteItem: this.handleDeleteItem,
          handleQuantityChange: this.handleQuantityChange,
          clearBag: this.clearBag,
          displayBagTotals: this.displayBagTotals,
          playBagAnimation: this.state.playBagAnimation,
          handleNotesUpdate: this.handleNotesUpdate,
          showHelp: this.state.showHelp,
          handleHelpChange: this.handleHelpChange,
          handleMetadataChange: this.handleMetadataChange,
          logOrder: this.logOrder,
          confirmationBag: this.state.confirmationBag
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 9
        }
      }, this.props.children);
    }
  }]);

  return BagProvider;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
/* then make a consumer which will surface it */


var BagConsumer = BagContext;
/* harmony default export */ __webpack_exports__["default"] = (BagProvider);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYWdQcm92aWRlci5qcyJdLCJuYW1lcyI6WyJCYWdDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQmFnUHJvdmlkZXIiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJhZyIsInNlc3Npb25TdG9yYWdlIiwiY3JhZnR5QmVlQmFnIiwiSlNPTiIsInBhcnNlIiwic3RhdGUiLCJzZWxlY3RlZFZhcmlhbnQiLCJ1c2VOb3RlcyIsIm5vdGVDb250ZW50cyIsImhhc05vdGVzRXJyb3IiLCJzZXRTdGF0ZSIsImJhZ0l0ZW0iLCJfIiwic2t1IiwiaW5kZXgiLCJsZW5ndGgiLCJuZXdRdWFudGl0eSIsInF1YW50aXR5Iiwic3BsaWNlIiwiaW1hZ2UiLCJpbWFnZVRpbnkiLCJuYW1lIiwicHJpY2UiLCJtZXRhZGF0YSIsInB1c2giLCJwbGF5QmFnQW5pbWF0aW9uIiwic2V0VGltZW91dCIsImJpbmQiLCJmaWx0ZXIiLCJpdGVtIiwiaGFuZGxlQmFnVXBkYXRlIiwiaGFuZGxlVmFyaWFudENoYW5nZSIsImhhbmRsZURlbGV0ZUl0ZW0iLCJoYW5kbGVRdWFudGl0eUNoYW5nZSIsImNsZWFyQmFnIiwiZGlzcGxheUJhZ1RvdGFscyIsImhhbmRsZU5vdGVzVXBkYXRlIiwiaGFuZGxlSGVscENoYW5nZSIsImhhbmRsZU1ldGFkYXRhQ2hhbmdlIiwibG9nT3JkZXIiLCJjb25maXJtYXRpb25CYWciLCJpZCIsIm5vdGVzVGl0bGUiLCJzaG93SGVscCIsInNhdmVkQmFnIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIk51bWJlciIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInNlbGVjdGVkT3B0aW9uIiwiaSIsInByb2R1Y3RzIiwib3B0aW9ucyIsImltYWdlTGFyZ2UiLCJncm91cE5hbWUiLCJ0YXJnZXQiLCJub3RlVGV4dCIsInNlbGVjdGVkSW5kZXgiLCJnZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiaW5jbHVkZXMiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiTWF0aCIsInJvdW5kIiwicGFyc2VGbG9hdCIsInRvdGFscyIsInN1YnRvdGFsIiwic2hpcHBpbmciLCJ0YXgiLCJncmFuZFRvdGFsIiwic3ViVG90YWxDYWxjdWxhdGlvbiIsImZvcm1hdERvbGxhcnNUb0NlbnRzIiwiZm9ybWF0Q2VudHNUb0RvbGxhcnMiLCJtZXRhRGF0YSIsImoiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsImJvZHkiLCJ0aXRsZSIsIm5vdGUiLCJwcm9kdWN0X2lkIiwib3JkZXJfbnVtYmVyIiwidGhlbiIsInJlcyIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiQmFnQ29uc3VtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxVQUFVLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLEVBQW5CO0FBRUE7O0lBQ01DLFc7Ozs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSwwTkE0Q0QsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3JCQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFJQyxHQUFHLEdBQUdDLGNBQWMsQ0FBQ0MsWUFBZixHQUE4QkMsSUFBSSxDQUFDQyxLQUFMLENBQVdILGNBQWMsQ0FBQ0MsWUFBMUIsQ0FBOUIsR0FBd0UsTUFBS0csS0FBTCxDQUFXTCxHQUE3RjtBQUNBLFVBQUlNLGVBQWUsR0FBRyxNQUFLRCxLQUFMLENBQVdDLGVBQWpDOztBQUNBLFVBQUdBLGVBQWUsQ0FBQ0MsUUFBaEIsSUFBNEJELGVBQWUsQ0FBQ0UsWUFBaEIsS0FBaUMsRUFBaEUsRUFBbUU7QUFDL0RGLHVCQUFlLENBQUNHLGFBQWhCLEdBQWdDLElBQWhDOztBQUNBLGNBQUtDLFFBQUwsQ0FBYztBQUFFSix5QkFBZSxFQUFFQTtB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QUFLQSxtQkFKdkI7QUFLSEMsMEJBQWdCLEVBQUUsS0FBS0EsZ0JBTHBCO0FBTUhDLDhCQUFvQixFQUFFLEtBQUtBLG9CQU54QjtBQU9IQyxrQkFBUSxFQUFFLEtBQUtBLFFBUFo7QUFRSEMsMEJBQWdCLEVBQUUsS0FBS0EsZ0JBUnBCO0FBU0hWLDBCQUFnQixFQUFFLEtBQUtwQixLQUFMLENBQVdvQixnQkFUMUI7QUFVSFcsMkJBQWlCLEVBQUUsS0FBS0EsaUJBVnJCO0FBV0hPLGtCQUFRLEVBQUUsS0FBS3RDLEtBQUwsQ0FBV3NDLFFBWGxCO0FBWUhOLDBCQUFnQixFQUFFLEtBQUtBLGdCQVpwQjtBQWFIQyw4QkFBb0IsRUFBRSxLQUFLQSxvQkFieEI7QUFjSEMsa0JBQVEsRUFBRSxLQUFLQSxRQWRaO0FBZUhDLHlCQUFlLEVBQUUsS0FBS25DLEtBQUwsQ0FBV21DO0FBZnpCLFNBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW1CSyxLQUFLM0MsS0FBTCxDQUFXNkYsUUFuQmhCLENBREE7QUF1Qkg7Ozs7RUE1UnFCQywrQztBQStSMUI7OztBQUNBLElBQU1DLFdBQVcsR0FBR25HLFVBQXBCO0FBRWVHLDBFQUFmO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iMTFhOTM0NmE3NjhlMWZjYTZkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAnZXM2LXByb21pc2UnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcblxyXG4vKiBGaXJzdCB3ZSB3aWxsIG1ha2UgYSBuZXcgY29udGV4dCAqL1xyXG5jb25zdCBCYWdDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG4vKiBUaGVuIGNyZWF0ZSBhIHByb3ZpZGVyIENvbXBvbmVudCAqL1xyXG5jbGFzcyBCYWdQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVCYWdVcGRhdGUgPSB0aGlzLmhhbmRsZUJhZ1VwZGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVmFyaWFudENoYW5nZSA9IHRoaXMuaGFuZGxlVmFyaWFudENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRGVsZXRlSXRlbSA9IHRoaXMuaGFuZGxlRGVsZXRlSXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUXVhbnRpdHlDaGFuZ2UgPSB0aGlzLmhhbmRsZVF1YW50aXR5Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbGVhckJhZyA9IHRoaXMuY2xlYXJCYWcuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlCYWdUb3RhbHMgPSB0aGlzLmRpc3BsYXlCYWdUb3RhbHMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZU5vdGVzVXBkYXRlID0gdGhpcy5oYW5kbGVOb3Rlc1VwZGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSGVscENoYW5nZSA9IHRoaXMuaGFuZGxlSGVscENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTWV0YWRhdGFDaGFuZ2UgPSB0aGlzLmhhbmRsZU1ldGFkYXRhQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5sb2dPcmRlciA9IHRoaXMubG9nT3JkZXIuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIGJhZzogW10sXHJcbiAgICAgICAgICBjb25maXJtYXRpb25CYWc6IFtdLFxyXG4gICAgICAgICAgc2VsZWN0ZWRWYXJpYW50OiB7XHJcbiAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICBza3U6ICcnLFxyXG4gICAgICAgICAgICBwcmljZTogJycsXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiAwLFxyXG4gICAgICAgICAgICBpbWFnZTonJyxcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIHVzZU5vdGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgbm90ZXNUaXRsZTogJycsXHJcbiAgICAgICAgICAgIG5vdGVDb250ZW50czogJycsXHJcbiAgICAgICAgICAgIGhhc05vdGVzRXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXRhZGF0YTogW11cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwbGF5QmFnQW5pbWF0aW9uOiBmYWxzZSxcclxuICAgICAgICAgIHNob3dIZWxwOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHZhciBzYXZlZEJhZyA9IHNlc3Npb25TdG9yYWdlLmNyYWZ0eUJlZUJhZyA/IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuY3JhZnR5QmVlQmFnKSA6IFtdO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWc6IHNhdmVkQmFnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjcmFmdHlCZWVCYWcnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmJhZykpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJhZ1VwZGF0ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBiYWcgPSBzZXNzaW9uU3RvcmFnZS5jcmFmdHlCZWVCYWcgPyBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmNyYWZ0eUJlZUJhZykgOiB0aGlzLnN0YXRlLmJhZztcclxuICAgICAgICB2YXIgc2VsZWN0ZWRWYXJpYW50ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFZhcmlhbnQ7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRWYXJpYW50LnVzZU5vdGVzICYmIHNlbGVjdGVkVmFyaWFudC5ub3RlQ29udGVudHMgPT09ICcnKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWRWYXJpYW50Lmhhc05vdGVzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRWYXJpYW50OiBzZWxlY3RlZFZhcmlhbnQgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoc2VsZWN0ZWRWYXJpYW50Lmhhc05vdGVzRXJyb3IgPT09IHRydWUgJiYgc2VsZWN0ZWRWYXJpYW50LnVzZU5vdGVzICYmIHNlbGVjdGVkVmFyaWFudC5ub3RlQ29udGVudHMgIT09ICcnKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWRWYXJpYW50Lmhhc05vdGVzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVmFyaWFudDogc2VsZWN0ZWRWYXJpYW50IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJhZ0l0ZW0gPSBfLmZpbmQoYmFnLCB7IHNrdTogc2VsZWN0ZWRWYXJpYW50LnNrdX0pO1xyXG4gICAgICAgIGxldCBpbmRleCA9IF8uZmluZEluZGV4KGJhZywge3NrdTogc2VsZWN0ZWRWYXJpYW50LnNrdX0pO1xyXG5cclxuICAgICAgICBpZihiYWcubGVuZ3RoID4gMCAmJiBpbmRleCAhPSAtMSl7XHJcbiAgICAgICAgICAgIHZhciBuZXdRdWFudGl0eSA9IGJhZ0l0ZW0ucXVhbnRpdHkgKyAxO1xyXG4gICAgICAgICAgICBiYWcuc3BsaWNlKGluZGV4LCAxLCB7c2t1OiBzZWxlY3RlZFZhcmlhbnQuc2t1LCBxdWFudGl0eTogbmV3UXVhbnRpdHksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHNlbGVjdGVkVmFyaWFudC5pbWFnZVRpbnksIG5hbWU6IHNlbGVjdGVkVmFyaWFudC5uYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBzZWxlY3RlZFZhcmlhbnQucHJpY2UsIG5vdGVDb250ZW50czogc2VsZWN0ZWRWYXJpYW50Lm5vdGVDb250ZW50cywgbWV0YWRhdGE6IHNlbGVjdGVkVmFyaWFudC5tZXRhZGF0YX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBiYWcucHVzaCh7c2t1OiBzZWxlY3RlZFZhcmlhbnQuc2t1LCBxdWFudGl0eTogMSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBzZWxlY3RlZFZhcmlhbnQuaW1hZ2VUaW55LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc2VsZWN0ZWRWYXJpYW50Lm5hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogc2VsZWN0ZWRWYXJpYW50LnByaWNlLCAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZUNvbnRlbnRzOiBzZWxlY3RlZFZhcmlhbnQubm90ZUNvbnRlbnRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YTogc2VsZWN0ZWRWYXJpYW50Lm1ldGFkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWc6IGJhZywgcGxheUJhZ0FuaW1hdGlvbjogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGxheUJhZ0FuaW1hdGlvbjogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIDMwMDBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVZhcmlhbnRDaGFuZ2UoZSl7XHJcbiAgICAgICAgdmFyIGlkID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gbnVsbDtcclxuICAgICAgICBsZXQgbWV0YWRhdGEgPSBudWxsO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnByb2R1Y3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24gPSBfLmZpbmQodGhpcy5wcm9wcy5wcm9kdWN0c1tpXS5vcHRpb25zLCBbJ2lkJywgaWRdKTtcclxuICAgICAgICAgICAgbWV0YWRhdGEgPSB0aGlzLnByb3BzLnByb2R1Y3RzW2ldLm1ldGFkYXRhO1xyXG4gICAgICAgICAgICBpZihzZWxlY3RlZE9wdGlvbil7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgc2VsZWN0ZWRWYXJpYW50ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFZhcmlhbnQ7XHJcbiAgICAgICAgc2VsZWN0ZWRWYXJpYW50LmlkID0gc2VsZWN0ZWRPcHRpb24uaWQ7XHJcbiAgICAgICAgc2VsZWN0ZWRWYXJpYW50LnNrdSA9IHNlbGVjdGVkT3B0aW9uLnNrdTtcclxuICAgICAgICBzZWxlY3RlZFZhcmlhbnQucHJpY2UgPSBzZWxlY3RlZE9wdGlvbi5wcmljZTtcclxuICAgICAgICBzZWxlY3RlZFZhcmlhbnQuaW1hZ2VUaW55ID0gc2VsZWN0ZWRPcHRpb24uaW1hZ2VUaW55O1xyXG4gICAgICAgIHNlbGVjdGVkVmFyaWFudC5pbWFnZUxhcmdlID0gc2VsZWN0ZWRPcHRpb24uaW1hZ2VMYXJnZTtcclxuICAgICAgICBzZWxlY3RlZFZhcmlhbnQubmFtZSA9IHNlbGVjdGVkT3B0aW9uLm5hbWU7XHJcbiAgICAgICAgc2VsZWN0ZWRWYXJpYW50LnVzZU5vdGVzID0gc2VsZWN0ZWRPcHRpb24udXNlTm90ZXM7XHJcbiAgICAgICAgc2VsZWN0ZWRWYXJpYW50Lm5vdGVzVGl0bGUgPSBzZWxlY3RlZE9wdGlvbi5ub3Rlc1RpdGxlO1xyXG4gICAgICAgIHNlbGVjdGVkVmFyaWFudC5ub3RlQ29udGVudHMgPSAnJztcclxuICAgICAgICBcclxuICAgICAgICAvL3Byb2R1Y3QgbWV0YWRhdGEgZ2V0cyBhdHRhY2hlZCB0byBzZWxlY3RlZCB2YXJpYW50KG1ha2VzIHRoaW5ncyBzb3J0IG9mIG1lc3N5KVxyXG4gICAgICAgIHNlbGVjdGVkVmFyaWFudC5tZXRhZGF0YSA9IFtdXHJcblxyXG4gICAgICAgIGlmKG1ldGFkYXRhICYmIG1ldGFkYXRhLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQubWV0YWRhdGEucHVzaCh7bmFtZTogbWV0YWRhdGFbMF0uZ3JvdXBOYW1lLCB2YWx1ZTptZXRhZGF0YVswXS5uYW1lfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVmFyaWFudDogc2VsZWN0ZWRWYXJpYW50LCBzaG93SGVscDogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRGVsZXRlSXRlbSA9IHNrdSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmFnID0gdGhpcy5zdGF0ZS5iYWcuZmlsdGVyKGl0ZW0gPT4gaXRlbS5za3UgIT09IHNrdSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhZzogYmFnIH0pO1xyXG4gICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVF1YW50aXR5Q2hhbmdlKGUsIHNrdSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgYmFnID0gdGhpcy5zdGF0ZS5iYWc7XHJcbiAgICAgICAgdmFyIHF1YW50aXR5ID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBsZXQgYmFnSXRlbSA9IF8uZmluZChiYWcsIHsgc2t1OiBza3V9KTtcclxuICAgICAgICBsZXQgaW5kZXggPSBfLmZpbmRJbmRleChiYWcsIHtza3U6IHNrdX0pO1xyXG5cclxuICAgICAgICBiYWcuc3BsaWNlKGluZGV4LCAxLCB7c2t1OiBiYWdJdGVtLnNrdSwgcXVhbnRpdHk6IHF1YW50aXR5LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGJhZ0l0ZW0uaW1hZ2UsIG5hbWU6IGJhZ0l0ZW0ubmFtZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBiYWdJdGVtLnByaWNlLCB1c2VOb3RlczogYmFnSXRlbS51c2VOb3RlcywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzVGl0bGU6IGJhZ0l0ZW0ubm90ZXNUaXRsZSwgbm90ZUNvbnRlbnRzOiBiYWdJdGVtLm5vdGVDb250ZW50cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IGJhZ0l0ZW0ubWV0YWRhdGF9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYmFnOiBiYWcgfSk7ICBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOb3Rlc1VwZGF0ZShlLCBpZCl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBub3RlVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHZhciBzZWxlY3RlZFZhcmlhbnQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVmFyaWFudDtcclxuICAgICAgICBzZWxlY3RlZFZhcmlhbnQubm90ZUNvbnRlbnRzID0gbm90ZVRleHQ7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVmFyaWFudDogc2VsZWN0ZWRWYXJpYW50IH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVIZWxwQ2hhbmdlKGUpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dIZWxwOiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTWV0YWRhdGFDaGFuZ2UoZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGxldCBuYW1lID0gZS50YXJnZXQuaXRlbShlLnRhcmdldC5zZWxlY3RlZEluZGV4KS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcclxuICAgICAgICB2YXIgc2VsZWN0ZWRWYXJpYW50ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFZhcmlhbnQ7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZFZhcmlhbnQubWV0YWRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihzZWxlY3RlZFZhcmlhbnQubWV0YWRhdGFbaV0ubmFtZSA9PT0gbmFtZSl7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQubWV0YWRhdGEuc3BsaWNlKGksIDEsIHtuYW1lOiBzZWxlY3RlZFZhcmlhbnQubWV0YWRhdGFbaV0ubmFtZSwgdmFsdWU6IHZhbHVlfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZFZhcmlhbnQ6IHNlbGVjdGVkVmFyaWFudH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3RlZFZhcmlhbnQubWV0YWRhdGEucHVzaCh7bmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRWYXJpYW50OiBzZWxlY3RlZFZhcmlhbnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXREb2xsYXJzVG9DZW50cyh2YWx1ZSl7XHJcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgKyAnJykucmVwbGFjZSgvW15cXGQuLV0vZywgJycpO1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5pbmNsdWRlcygnLicpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHZhbHVlLmluZGV4T2YoJy4nKSArIDMpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiB2YWx1ZSA/IE1hdGgucm91bmQocGFyc2VGbG9hdCh2YWx1ZSkgKiAxMDApIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRDZW50c1RvRG9sbGFycyh2YWx1ZSl7XHJcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgKyAnJykucmVwbGFjZSgvW15cXGQuLV0vZywgJycpO1xyXG4gICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gdmFsdWUgLyAxMDAgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQmFnKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhZzogW10gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUJhZ1RvdGFscygpe1xyXG4gICAgICAgIGxldCB0b3RhbHMgPSB7XHJcbiAgICAgICAgICAgIHN1YnRvdGFsOiAwLjAwLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogMC4wMCxcclxuICAgICAgICAgICAgdGF4OiAwLjAwLFxyXG4gICAgICAgICAgICBncmFuZFRvdGFsOiAwLjAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3VidG90YWwgPSAwO1xyXG4gICAgICAgIGxldCBiYWcgPSB0aGlzLnN0YXRlLmJhZztcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYmFnLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdmFyIHN1YlRvdGFsQ2FsY3VsYXRpb247XHJcbiAgICAgICAgICAgIHN1YlRvdGFsQ2FsY3VsYXRpb24gPSB0aGlzLmZvcm1hdERvbGxhcnNUb0NlbnRzKGJhZ1tpXS5wcmljZSk7XHJcbiAgICAgICAgICAgIHN1YlRvdGFsQ2FsY3VsYXRpb24gPSAoc3ViVG90YWxDYWxjdWxhdGlvbiAqIGJhZ1tpXS5xdWFudGl0eSk7XHJcbiAgICAgICAgICAgIHN1YnRvdGFsICs9IHN1YlRvdGFsQ2FsY3VsYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0YXggPSBzdWJ0b3RhbCAqIDYuMDtcclxuXHJcbiAgICAgICAgbGV0IHNoaXBwaW5nID0gMDtcclxuICAgICAgICBsZXQgZ3JhbmRUb3RhbCA9IHN1YnRvdGFsICsgTWF0aC5yb3VuZCh0YXggLyAxMDApO1xyXG5cclxuICAgICAgICB0b3RhbHMuc3VidG90YWwgPSB0aGlzLmZvcm1hdENlbnRzVG9Eb2xsYXJzKHN1YnRvdGFsKTtcclxuICAgICAgICB0b3RhbHMudGF4ID0gdGhpcy5mb3JtYXRDZW50c1RvRG9sbGFycyhNYXRoLnJvdW5kKHRheCAvIDEwMCkpO1xyXG4gICAgICAgIHRvdGFscy5ncmFuZFRvdGFsID0gdGhpcy5mb3JtYXRDZW50c1RvRG9sbGFycyhncmFuZFRvdGFsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvdGFscztcclxuICAgIH1cclxuXHJcbiAgICBsb2dPcmRlcigpe1xyXG5cclxuICAgICAgICBsZXQgYmFnID0gdGhpcy5zdGF0ZS5iYWc7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGJhZy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBtZXRhRGF0YSA9ICcnO1xyXG4gICAgICAgICAgICBpZihiYWdbaV0ubWV0YWRhdGEgJiYgYmFnW2ldLm1ldGFkYXRhLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGJhZ1tpXS5tZXRhZGF0YS5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YURhdGEgKz0gYmFnW2ldLm1ldGFkYXRhW2pdLm5hbWUgKyAnIHwgJyArIGJhZ1tpXS5tZXRhZGF0YVtqXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ29yZGVyOiAnICsgYmFnW2ldLm5hbWUgKyAnICcgKyBiYWdbaV0ucHJpY2UgKyAnIC0gJyArICdza3U6ICcgKyBiYWdbaV0uc2t1KVxyXG4gICAgICAgICAgICBmZXRjaCgnaHR0cHM6Ly8zZWUuY29tL3RlZW5pZWJlZS9vcmRlcnMvJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBiYWdbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBza3U6IGJhZ1tpXS5za3UsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IGJhZ1tpXS5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogYmFnW2ldLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGU6IGJhZ1tpXS5ub3RlQ29udGVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IG1ldGFEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfbnVtYmVyOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCYWdDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWc6IHRoaXMuc3RhdGUuYmFnLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRWYXJpYW50OiB0aGlzLnN0YXRlLnNlbGVjdGVkVmFyaWFudCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZUJhZ1VwZGF0ZTogdGhpcy5oYW5kbGVCYWdVcGRhdGUsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVWYXJpYW50Q2hhbmdlOiB0aGlzLmhhbmRsZVZhcmlhbnRDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGVJdGVtOiB0aGlzLmhhbmRsZURlbGV0ZUl0ZW0sXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVRdWFudGl0eUNoYW5nZTogdGhpcy5oYW5kbGVRdWFudGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgICAgIGNsZWFyQmFnOiB0aGlzLmNsZWFyQmFnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUJhZ1RvdGFsczogdGhpcy5kaXNwbGF5QmFnVG90YWxzLFxyXG4gICAgICAgICAgICAgICAgcGxheUJhZ0FuaW1hdGlvbjogdGhpcy5zdGF0ZS5wbGF5QmFnQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlTm90ZXNVcGRhdGU6IHRoaXMuaGFuZGxlTm90ZXNVcGRhdGUsXHJcbiAgICAgICAgICAgICAgICBzaG93SGVscDogdGhpcy5zdGF0ZS5zaG93SGVscCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZUhlbHBDaGFuZ2U6IHRoaXMuaGFuZGxlSGVscENoYW5nZSxcclxuICAgICAgICAgICAgICAgIGhhbmRsZU1ldGFkYXRhQ2hhbmdlOiB0aGlzLmhhbmRsZU1ldGFkYXRhQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3JkZXI6IHRoaXMubG9nT3JkZXIsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb25CYWc6IHRoaXMuc3RhdGUuY29uZmlybWF0aW9uQmFnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0JhZ0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiB0aGVuIG1ha2UgYSBjb25zdW1lciB3aGljaCB3aWxsIHN1cmZhY2UgaXQgKi9cclxuY29uc3QgQmFnQ29uc3VtZXIgPSBCYWdDb250ZXh0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFnUHJvdmlkZXJcclxuZXhwb3J0IHsgQmFnQ29uc3VtZXIgfSJdLCJzb3VyY2VSb290IjoiIn0=