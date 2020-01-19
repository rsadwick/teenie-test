webpackHotUpdate("static\\development\\pages\\bag.js",{

/***/ "./components/BagProvider.js":
/*!***********************************!*\
  !*** ./components/BagProvider.js ***!
  \***********************************/
/*! exports provided: default, BagConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BagConsumer", function() { return BagConsumer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "C:\\Users\\drewe\\Documents\\GitHub\\CraftyBeeSupplies\\components\\BagProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;




/* First we will make a new context */

var BagContext = react__WEBPACK_IMPORTED_MODULE_9___default.a.createContext();
/* Then create a provider Component */

var BagProvider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(BagProvider, _Component);

  function BagProvider(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BagProvider);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(BagProvider).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleBagUpdate", function (e) {
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

      var bagItem = lodash__WEBPACK_IMPORTED_MODULE_10__["find"](bag, {
        sku: selectedVariant.sku
      });

      var index = lodash__WEBPACK_IMPORTED_MODULE_10__["findIndex"](bag, {
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
      }.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)), 3000);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleDeleteItem", function (sku) {
      var bag = _this.state.bag.filter(function (item) {
        return item.sku !== sku;
      });

      _this.setState({
        bag: bag
      });
    });

    _this.handleBagUpdate = _this.handleBagUpdate.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleVariantChange = _this.handleVariantChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleDeleteItem = _this.handleDeleteItem.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleQuantityChange = _this.handleQuantityChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.clearBag = _this.clearBag.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.displayBagTotals = _this.displayBagTotals.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleNotesUpdate = _this.handleNotesUpdate.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleHelpChange = _this.handleHelpChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleMetadataChange = _this.handleMetadataChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.logOrder = _this.logOrder.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.state = {
      bag: [],
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(BagProvider, [{
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
      sessionStorage.setItem('craftyBeeBag', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(this.state.bag));
    }
  }, {
    key: "handleVariantChange",
    value: function handleVariantChange(e) {
      var id = Number(e.currentTarget.value);
      var selectedOption = null;
      var metadata = null;

      for (var i = 0; i < this.props.products.length; i++) {
        selectedOption = lodash__WEBPACK_IMPORTED_MODULE_10__["find"](this.props.products[i].options, ['id', id]);
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

      var bagItem = lodash__WEBPACK_IMPORTED_MODULE_10__["find"](bag, {
        sku: sku
      });

      var index = lodash__WEBPACK_IMPORTED_MODULE_10__["findIndex"](bag, {
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

      return value ? Math.round(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(value) * 100) : 0;
    }
  }, {
    key: "formatCentsToDollars",
    value: function formatCentsToDollars(value) {
      value = (value + '').replace(/[^\d.-]/g, '');
      value = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(value);
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

        console.log(metaData);
        var headers = new Headers({
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        });
        isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12___default()('https://3ee.com/teeniebee/orders/', {
          method: 'post',
          mode: 'cors',
          headers: headers,
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
            title: bag[i].name,
            sku: bag[i].sku,
            quantity: bag[i].quantity,
            price: bag[i].price,
            note: bag[i].noteContents,
            metadata: metaData
          })
        }).then(function (res) {
          console.log(res);
        });
      } //log items

      /* let header = new Headers({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'multipart/form-data'
      });  */

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
          logOrder: this.logOrder
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return BagProvider;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
/* then make a consumer which will surface it */


var BagConsumer = BagContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (BagProvider);


/***/ })

})
//# sourceMappingURL=bag.js.c0bdf04fe9897c479b54.hot-update.js.map