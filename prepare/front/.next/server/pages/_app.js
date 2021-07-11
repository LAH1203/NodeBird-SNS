module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\lah12\\OneDrive\\Documents\\GitHub\\NodeBird-SNS\\prepare\\front\\pages\\_app.js";








const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
        children: "Node Bird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // (이전상태, 액션) => 다음상태

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 'lah1203',
      nickname: '아현'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAE+CAMAAACk8jItAAABoVBMVEVzmM/70rT///8AAACxYmVzu2X90Xr8//////3lPzH//v/29vb70rVzmM3x8fFzmND///r/2Lf507b90rH+0bP80bf507T//P8AAAT+0q//2LtymtT/0Ldyl9T+0bDnPjFmWVD/3sNeXl7Dw8P01brqt6R+mMr02satZGRtuV7mdGn67Mj/z3D404Nrks3/znpzmchwjbtbcJVKXHozQlwoNEpBUGhSZ4Nhe6UYHSsjLDsjJTILERg+SmNkfahyicQUCQArJB85MSw/Oz3YuaO3nImWgXNaSkBMSEWBa2XKsZorN0ekkYDZvqlbcJcfGBR2YlQwLCmUpMbawLByZ2KXg3m2sMJIOzXmxKSMcGBgU093ZFyskX21t8DNtJuDg4PPz8+goKBwcHDaxsKmr8fqzsLriH/1rJeRoc3pmorNlYm6fHblfnbncW7fpprvvKvu4NXa8Net1qaVx4rg5u/LjpLQn5nv4N15t2zI1ebm7+Ogt9bwwr+92LffHACzxtvcRkLz3Jzio6H78dVrnrRwt39zrpRzwFT125jiWU+2uaxkkP8nAAANE0lEQVR4nO2b+1vTZhvHm3JIaBNyTk3SFJihBYFQ9dU55+bQFgaDiVWYTtncSrE4p+WwISCgsvcd21/93s+TngK67QcS9sP9uXrBmrgr397Pffg+SYnFEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBkLARYqINOI4owg/HFgVBcM5aVBugKnbx0uX/XLl+5crVj69lBduxHeGsVTWxnWtXP+lo4/rVa3lbFM9aF0WwxY8/bdN2zv9147PPBVsQY2erUhTsm5dvUEFfTNwCJtqUfnrJsW3hTJdZzF/1Q3bbZRQft1CcnLpTD+JliO4ZqhMuXqfyzp3r6LcYQIWXasmWW5j8kq70J5dE+6wiaNvXzjXzrWNaZpqYqjXzZT0Zv7ro2Gck8FKgLGathjzNmptqCe+4dBYBhLT6msg613Hn8awfqRmL5xmG51Vrsk03nPgsH/0aC84l/+K3XNmaocG646qgT1GV/lab8X9dESJfYkHwg9OvyKomz1IZD2kKPrhVD91UsThRF3g9G3UZO59Tefdz3xWLM+7APBHy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'
    }, {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6Fj5NtHvFowdHwYG4tgCEm0mA1VlZwHXkA&usqp=CAU'
    }, {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vu3k01uJWS0MUDHPcMmS0YOrGvharYfAWA&usqp=CAU'
    }],
    Comments: [{
      User: {
        nickname: 'Aha'
      },
      content: '짱구 너무 귀여워!'
    }, {
      User: {
        nickname: 'zero'
      },
      content: 'ㅇㅈ'
    }]
  }],
  imagePaths: [],
  postAdded: false
};
const ADD_POST = 'ADD_POST';
const addPost = {
  type: ADD_POST
};
const dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: 'Aha'
  },
  Images: [],
  Comments: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {}
}; // action creator

const loginAction = data => {
  return {
    type: 'LOG_IN',
    data
  };
};
const logoutAction = () => {
  return {
    type: 'LOG_OUT'
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: true,
        me: action.data
      });

    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        me: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");





const configureStore = () => {
  const middlewares = [];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], enhancer);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsImxvZ291dEFjdGlvbiIsImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW1CO0FBQ2hDLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFLSSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQSxrQkFESjtBQVNILENBVkQ7O0FBWUFELFFBQVEsQ0FBQ0UsU0FBVCxHQUFxQjtBQUNqQkQsV0FBUyxFQUFFRSxpREFBUyxDQUFDQyxXQUFWLENBQXNCQztBQURoQixDQUFyQjtBQUllQyw0SEFBTyxDQUFDQyxTQUFSLENBQWtCUCxRQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUVBO0NBR0E7O0FBQ0EsTUFBTVEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2hDQyxPQUFLLEVBQUUsQ0FBQ0MsS0FBSyxHQUFHLEVBQVQsRUFBYUMsTUFBYixLQUF3QjtBQUMzQixZQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxXQUFLQywwREFBTDtBQUNJQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixNQUF2QjtBQUNBLCtDQUFZRCxLQUFaLEdBQXNCQyxNQUFNLENBQUNLLE9BQTdCOztBQUVKO0FBQ0ksZUFBT04sS0FBUDtBQU5SO0FBUUgsR0FWK0I7QUFXaENPLHFEQVhnQztBQVloQ0MscURBQUlBO0FBWjRCLENBQUQsQ0FBbkM7QUFlZVgsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJPLE1BQU1ZLFlBQVksR0FBRztBQUN4QkMsV0FBUyxFQUFFLENBQUM7QUFDUkMsTUFBRSxFQUFFLENBREk7QUFFUkMsUUFBSSxFQUFFO0FBQ0ZELFFBQUUsRUFBRSxTQURGO0FBRUZFLGNBQVEsRUFBRTtBQUZSLEtBRkU7QUFNUkMsV0FBTyxFQUFFLHVCQU5EO0FBT1JDLFVBQU0sRUFBRSxDQUFDO0FBQ0xDLFNBQUcsRUFBRTtBQURBLEtBQUQsRUFFTDtBQUNDQSxTQUFHLEVBQUU7QUFETixLQUZLLEVBSUw7QUFDQ0EsU0FBRyxFQUFFO0FBRE4sS0FKSyxDQVBBO0FBY1JDLFlBQVEsRUFBRSxDQUFDO0FBQ1BMLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEQztBQUlQQyxhQUFPLEVBQUU7QUFKRixLQUFELEVBS1A7QUFDQ0YsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURQO0FBSUNDLGFBQU8sRUFBRTtBQUpWLEtBTE87QUFkRixHQUFELENBRGE7QUEyQnhCSSxZQUFVLEVBQUUsRUEzQlk7QUE0QnhCQyxXQUFTLEVBQUU7QUE1QmEsQ0FBckI7QUErQlAsTUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ08sTUFBTUMsT0FBTyxHQUFHO0FBQ25CbkIsTUFBSSxFQUFFa0I7QUFEYSxDQUFoQjtBQUdQLE1BQU1FLFNBQVMsR0FBRztBQUNkWCxJQUFFLEVBQUUsQ0FEVTtBQUVkRyxTQUFPLEVBQUUsT0FGSztBQUdkRixNQUFJLEVBQUU7QUFDRkQsTUFBRSxFQUFFLENBREY7QUFFRkUsWUFBUSxFQUFFO0FBRlIsR0FIUTtBQU9kRSxRQUFNLEVBQUUsRUFQTTtBQVFkRSxVQUFRLEVBQUU7QUFSSSxDQUFsQjs7QUFXQSxNQUFNTSxPQUFPLEdBQUcsQ0FBQ3ZCLEtBQUssR0FBR1MsWUFBVCxFQUF1QlIsTUFBdkIsS0FBa0M7QUFDOUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS2tCLFFBQUw7QUFDSSw2Q0FDT3BCLEtBRFA7QUFFSVUsaUJBQVMsRUFBRSxDQUFDWSxTQUFELEVBQVksR0FBR3RCLEtBQUssQ0FBQ1UsU0FBckIsQ0FGZjtBQUdJUyxpQkFBUyxFQUFFO0FBSGY7O0FBS0o7QUFDSSxhQUFPbkIsS0FBUDtBQVJSO0FBVUgsQ0FYRDs7QUFhZXVCLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRE8sTUFBTWQsWUFBWSxHQUFHO0FBQ3hCZSxZQUFVLEVBQUUsS0FEWTtBQUV4QkMsSUFBRSxFQUFFLElBRm9CO0FBR3hCQyxZQUFVLEVBQUUsRUFIWTtBQUl4QkMsV0FBUyxFQUFFO0FBSmEsQ0FBckIsQyxDQU9QOztBQUNPLE1BQU1DLFdBQVcsR0FBSUMsSUFBRCxJQUFVO0FBQ2pDLFNBQU87QUFDSDNCLFFBQUksRUFBRSxRQURIO0FBRUgyQjtBQUZHLEdBQVA7QUFJSCxDQUxNO0FBT0EsTUFBTUMsWUFBWSxHQUFHLE1BQU07QUFDOUIsU0FBTztBQUNINUIsUUFBSSxFQUFFO0FBREgsR0FBUDtBQUdILENBSk07O0FBTVAsTUFBTXFCLE9BQU8sR0FBRyxDQUFDdkIsS0FBSyxHQUFHUyxZQUFULEVBQXVCUixNQUF2QixLQUFrQztBQUM5QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLLFFBQUw7QUFDSSw2Q0FDT0YsS0FEUDtBQUVJd0Isa0JBQVUsRUFBRSxJQUZoQjtBQUdJQyxVQUFFLEVBQUV4QixNQUFNLENBQUM0QjtBQUhmOztBQUtKLFNBQUssU0FBTDtBQUNJLDZDQUNPN0IsS0FEUDtBQUVJd0Isa0JBQVUsRUFBRSxLQUZoQjtBQUdJQyxVQUFFLEVBQUU7QUFIUjs7QUFLSjtBQUNJLGFBQU96QixLQUFQO0FBZFI7QUFnQkgsQ0FqQkQ7O0FBbUJldUIsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDeENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNUSxjQUFjLEdBQUcsTUFBTTtBQUN6QixRQUFNQyxXQUFXLEdBQUcsRUFBcEI7QUFDQSxRQUFNQyxRQUFRLEdBQUcsUUFDWEMsU0FEVyxHQUVYQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBRnpCO0FBR0EsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDZixpREFBRCxFQUFVVSxRQUFWLENBQXpCO0FBQ0EsU0FBT0ksS0FBUDtBQUNILENBUEQ7O0FBU0EsTUFBTTFDLE9BQU8sR0FBRzRDLHdFQUFhLENBQUNSLGNBQUQsRUFBaUI7QUFBRVMsT0FBSztBQUFQLENBQWpCLENBQTdCO0FBRWU3QyxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCI+PC9tZXRhPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk5vZGUgQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbk5vZGVCaXJkLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQmlyZCk7IiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgcG9zdCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6ICdsYWgxMjAzJyxcclxuICAgICAgICAgICAgbmlja25hbWU6ICfslYTtmIQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgICAgSW1hZ2VzOiBbe1xyXG4gICAgICAgICAgICBzcmM6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUo4QUFBRStDQU1BQUFDazhqSXRBQUFCb1ZCTVZFVnptTS83MHJULy8vOEFBQUN4WW1WenUyWDkwWHI4Ly8vLy8vM2xQekgvL3YvMjl2YjcwclZ6bU0zeDhmRnptTkQvLy9yLzJMZjUwN2I5MHJIKzBiUDgwYmY1MDdULy9QOEFBQVQrMHEvLzJMdHltdFQvMExkeWw5VCswYkRuUGpGbVdWRC8zc05lWGw3RHc4UDAxYnJxdDZSK21NcjAyc2F0WkdSdHVWN21kR242N01qL3ozRDQwNE5ya3MzL3pucHptY2h3amJ0YmNKVktYSG96UWx3b05FcEJVR2hTWjROaGU2VVlIU3NqTERzakpUSUxFUmcrU21Oa2ZhaHlpY1FVQ1FBckpCODVNU3cvT3ozWXVhTzNuSW1XZ1hOYVNrQk1TRVdCYTJYS3Nab3JOMGVra1lEWnZxbGJjSmNmR0JSMllsUXdMQ21VcE1iYXdMQnlaMktYZzNtMnNNSklPelhteEtTTWNHQmdVMDkzWkZ5c2tYMjF0OEROdEp1RGc0UFB6OCtnb0tCd2NIRGF4c0ttcjhmcXpzTHJpSC8xckplUm9jM3Btb3JObFltNmZIYmxmbmJuY1c3ZnBwcnZ2S3Z1NE5YYThOZXQxcWFWeDRyZzV1L0xqcExRbjVudjROMTV0MnpJMWVibTcrT2d0OWJ3d3IrOTJMZmZIQUN6eHR2Y1JrTHozSnppbzZINzhkVnJuclJ3dDM5enJwUnp3RlQxMjVqaVdVKzJ1YXhra1A4bkFBQU5FMGxFUVZSNG5PMmIrMXZUWmh2SG0zSklhQk55VGszU0ZKaWhCWUZROWRVNTUrYlFGZ2FEaVZXWVR0bmNTckU0cCtXd0lTQ2dzdmNkMjEvOTNzK1RuZ0s2N1FjUzlzUDl1WHJCbXJncjM5N1BmZmcrU1luRkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJrTEFSWXFJTk9JNG93Zy9IRmdWQmNNNWFWQnVnS25ieDB1WC9YTGwrNWNyVmo2OWxCZHV4SGVHc1ZUV3huV3RYUCtsbzQvclZhM2xiRk05YUYwV3d4WTgvYmROMnp2OTE0N1BQQlZzUVkyZXJVaFRzbTVkdlVFRmZUTndDSnRxVWZuckpzVzNoVEpkWnpGLzFRM2JiWlJRZnQxQ2NuTHBURCtKbGlPNFpxaE11WHFmeXpwM3I2TGNZUUlXWGFzbVdXNWo4a3E3MEo1ZEUrNndpYU52WHpqWHpyV05hWnBxWXFqWHpaVDBadjdybzJHY2s4RktnTEdhdGhqek5tcHRxQ2UrNGRCWUJoTFQ2bXNnNjEzSG44YXdmcVJtTDV4bUc1MVZyc2swM25QZ3NILzBhQzg0bC8rSzNYTm1hb2NHNjQ2cWdUMUdWL2xhYjhYOWRFU0pmWWtId2c5T3Z5S29tejFJWkQya0tQcmhWRDkxVXNUaFJGM2c5RzNVWk81OVRlZmR6M3hXTE0rN0FQQkh5clFYMXkwejVjWnNxREpqeXZVWVFJWUxSTHJHWUp6M3UvdXo4NDBLaE9EOVp1UXZ2SmttRktMNmdXVXMxTkVNdU52THdxMWkwRVhSSzk2YnUzcCtmc1N4VmxhM0NvOW43dHhZTVJvZjYrSVlJTE1pV3BjTTVxNzhoOEhLMEtlZ3R5dGE5UjVCOFBHQkF5UlpsV1djTTZNLzN2dmxpeW4wd09UODlQVDlkVkYwYXpoOWg3bjFOeG5Ga2lFc1pkOTRsK2FhcXFxWnBNZ2pVU0g4eGVFc1plTGd3WjVFeFVueFVLSkxWWGlpQVNrR00wQk1LU3ladmFVUWZZeWx6aFFJL01EMUh4aHRqcUhLaGZ3NjBLb3lha2EyRmhXK2g4OHpKMDlBR283U0U5bUltclpGK1p4WDZxUnQ0TkRkdm1YUzRGUjROTUlVSEExRE1QRy9LeGVtWng2NW1rUTcwZVlRcDZDd1NjWVovWWQrc3pPbGtmVlY1Y29FS25wNlRHWGd2RjBsWnkyU1pQNDFGRjBCeHlZUmkwTTN2V3FQc2pxRkMvYW9Qdm1rY2dJeUU5MWJ4QWVpYklkM3lXblFCOUNEL0lINERaRmg4bjR3L0lYYnFJZWwvN3AzNnpDQVRHUWFLWXNqd0Q3VTVPa1lpRWlmRUhLZE1razBtbC8wb0R2U0NpNTVRVk42YUprSytYL3FCT09rSmwwU1VvbERWRjZQcE1ZNlR6N3NtVFM2NDZIbWlMLzRqQ0ZBWXc0QURkeFBrd0cwNFVKVFRkWDBXamVsVk80SXhBbHNlcjFybU5aNm1WVXRmQitoakNpUjY5TUI1MERjdGEwWmRIOTJaM0lnNW9lcURqYmZqNVpmTEZWbFRRQjdEUDRDTGZrblhGMnAyd3VEVm1hYStKMlErdC9SOVN3TjRVOHg3WVRvRjI4NHV1YXBLR2dkMXlqSXAxbytlSkovY0p2NEE2clhRU01qNER4Qy9CVGxkMXljL29oWHpmYVd5N0lWWXhWNnBvcG11eWRUVDN0RGIrNHVycTRwRmpNd1BTYks4b0tmUXlEOWVma2pxWlVZMlRiY1VrajVSRkp4U3hlUVZVcmt3YXcyQWJ6bW9pVGxaTnhpVnZyOXgreTUxcUZhamZua1pQSCsvYSttOHE1MzNZdUUwYWpHV3JaajE5ZUxkOUlveHlNaXFQRGZiZjdkalltcFdxU2ZhWkZ0QTFjYVdpV2VLSFpNRGRENm4zV3dzbkYyNzRKWFZURjFHT3YxODhPbXFzU29URTZEd2lpVm4vQk5xTTZMOWMxcHp4OGxyaGNlV2FWSzd3NWVFVU81Nk9FSkpOdXJ5R09QbFUvbUM5blRGQUczZ1ZPQ3lpbDh6aWlxN3hZZnprOFdDbk9GNXZya2xOdVEwVDJMUEc5cFNPSGRsUktIY3RnY0hvNWRtbmc0cTlRUURDOWc2SmN1eXhXalFyQm5HWUU2Z2xyMVF1clNRZDdYMjZ4aFFKSWFodlVjZk9RbmlqRFM4VGdwVUsrSGN2SFNxcGg2OGtxSHJkWXZLbjlDbnJWcXJMK1ducXpKekFqY2NmZDdpaVNzcHVnWUZrUjU4OWxOblorZlFzN1RjWEZCRGV5Ny96RmdyYWY3RS84UW8yVkJjZ3JPa0hyOFNCTTNRWHd4MTFobDZ5VFE3OThwVGJZVm4rUGZJWTl4WVNQck00MWN6REd1d3FZNEkxR1gvbi9EdW9HWm9tdUcrTC85Y0w1UUZCa3VxQk1UeHZNdy82d3d3K0o1MEl4OUQ0VlZUOTRNcHA4dXdrd3VoQlRvbE5SQy90Q3JyUDNYK0EzMjhybVUwRGZhaDlJM0pMRHFla1BWT2ZZU0lWVDJ3V0xxY0JubERmNi9QTUZ3M2w4dlZjaVQ4bXBiTFpzOVgzUE9ucXcvMnJtSytZZ2J5U0NhTDI2WnZxSE1vYmJSQ3pET0dvcG9xNCthMmV1dmsrRXpHN1YycW1CbFRYanpWSnAxMUhORmVERVJIZmhtTUhieDdwcmZyVTAzVHlOV291Q1MxL0hFdVdhdEo4WnhwOG9ZSlhmb1VRK2g0V2NITHVnRjl4NU1QK292R3RQUmxGRGRYbytMWXVFVGx4VmtDWjZtR3FwaktLZnBBUjF6T3VlVlM5WkJSV3lXc0g1ZlgrY0lpOTNkNWhlZTFqR3E0TlY4ZEZlYnI0K0RGc2E1aFpIZ1ZmT3BwTGJEb1FPcEJnOWlTY20wdGV2QzR2Si84K2xFem1ZeldDSjIvcm0xd25BUmJZa00zOWVxcGJVUkVwNlJyYVVPVldDN1hLdUVYeCtYVmU3RkIxcFZtSFhkY0hOWEh1WG9GQ25veGRtcjVKOWdsQXo2eHkzRnhxYVl3Sml3aGhHbHc2Smc4OEtvcTQ0dmI3TzFOVVRtSk9KY0l4SkNWa3FVOGZPU3NJNXphZ3hIUXA4aDZ4bVZKUUtTY1FscXRvbGkwUG9ZQTh1c1piSTVBV3FOY0U5emErc2JHK3BxVWlBZWp5SEtiSHNtN1V4MGZObXc4ZEhXQTZtTTVLZWRDSDh1bzZlWndHL3FsVXZPakJ0bzQraWsyaGlrYk93bE9PcTd2TktVUlJGRmN0RFRUMXhkbkU2d2sxV3E1bkR0UStmV1hYKytWeS9YK200Ukd3bkpVSHJjeDNOWFY5ZXJWOFBBNmwyb0ZFRTZ5M1BhcDZ5TVNsOHZsY2lDVFdEYVo3S1d2SlB4WFlBMmx4QnFSUnhuZUlZb2xqa0xPU2J0aG1CZkJnVSs5R1ZpcGVraFlkdXMxeDdZZlNuRHh2WmErZGFnUjZNcWsxVUJ2NFNCODRXemVSTkU3ZUYvRGlML3UyYThFOWNYajZ5MTlHeEF5ZGpNckN0bHFhWGQzdHhyYUkySEJ5U2JqeWMzdEE3aEtyOTg2cEFTN2RXRy9wMjgxb0k5THRjV3ZxeXNPYlRNdjBpd21oQ011Umg0WmlkbFMzZ05pM2k3SkpESkxWM3Y2ZW5yNlZvSkxudUIyaG9mYjQ1Y0tveVJPNkJQQXdwQ2RnNUQzRGtqODJIamxUUitSMS9lY0RRcmtXZ3M4dkFjTjhQUmJ5Z2NVQ3Y0cWVaczBmcFVlSWc5K1hQRDdEdFFCekljRXFTTGEvN3BlRFhldFF3NkUwUEwrV21lTTlCTzJsNnd0MGRkRDlTVVNMQ3Nkamh5TkpHaWoyM3ZWTlR6OGFnL0dXK1Q2bkNxTjExWlFINmdiZWRzOU9qb20rVFVpN2V6c1NQRVVMSGJrK2tvMFhtenQ1ejVZNEQ1U0h4Q3dReUt1dTN0OGRJUWxtdnhtVHJ0eTVQcDIvWGhCQ0ZmNjludElmK0hZa2RIUjhXN0M2QkZVZHJCZVFobHBmNkh2Z01ZdkJRbkhKdCs5MmQ5L0I4WHkxbGNIOFlNQUhtdmgyOUYrbTYwK1NGaVMrMUNxcjU5dmtmaDExd1Yyang5SmdVSERjZ2ZSeGkrMmV5dytMUEUwWTkxTkR0bWd2dDJJKzBzK3VJRGdScUVhUmtZYjhrYmZCdWNkbTQvd3libVRqem0vN1RVSGhSOGdzSFZ4cVJtKzBlNkEwWUh5amU3QnF1RGtuZngvaHpmMjF0YjJObDd0MWZlUFZNYlI2UGo0T09reFl5TUJmY2xzaEUvT3lUZEwvL2Q3RjR4WEdHQy9yemQzdU1ESUdFVStsTmkyK2tna2U2c1JsaSs0aE45YTVtNnZ0Mkh0d1VtM1F3NkFyL2JmSEVUNExVVndnVHRkVFlGcnFkNFBVMnZlRjZwRzkrQmM5TGE1TlYvZ2NOY2ViRC84VVBsQkMrcDczdmVpZmp6QytlRlZVOG5VempyWk80STVTWDRZOWgwWTZ3cjlBQ2twb2dZRHhldHRTeW5ZZnUrc3JhMUpxVlNLVFJBdDBnbDFVbW9MZkVQZkgvVzNzQ21LUXFFZ09sVk9ZaE9KQkVnajQxY2FHVGtrUGo4Rmg2aVFoUCtEVFNYL0lPWnIveDFMMWJMVlNMNGZadWVkYmI5NVNCSnNGVmxpV3JxUDNvTEU0SDBxbU1zcnZyVit3N0hFdDRLRGlhTEhnTUZQdGNZQ0YyZVAvSEZ4TkNLeGJTMFo3TUhyZlNxdnArOWxnb1NiWXlQNTRvWW83QWFjU2QwVGdLVjZtMmc3SWJGYmIvcDhaOTEzUVNKR2xZdUhieEZnWCtRSXU0SEpkVGpxQ3h3YlA0cTNuU0NyNnp0L29FTE5xaFJ5aTRIeXE1Wmc5NXNGMDB6dTBaTDFsZUp2ZmNzQ1F4YzhQWHZReTlHN2FTenNUQnIwUVlVa3lGMi8zbkQxQ1k1UU1UVzN2UGdFdGp5c3I0OXRPWmJ4dy9nbWlOK0diUWNKNE10OUdycStmU2lTMTM0OWJZWTg0c1RZY2tVMU01cVdxMG4rN1NBcDBYUjg0MlBTOWsxSGNHN3VKa244NHEvZjlMejU0L25xdTBxbEJ0MkhTQTdib2pwNTI2bVdMZkxnUXROenNDbExjSngwVkhmMFk2TkhCNTR0aUtKQVF3aDlKMGtlS3RESENiRGdaQStRSzRkdUVVUW5WcXFZdW00WW1kdzIzVUllSG8zUlBkdjQ2SitOaHkyaVY5MlVwR1AzdWJpYXk4aWxzQnVNR0xNOVlja3lUZDJza0RpUnVTR05ISUVoSGYzVGNScnRWN0JqNUZSTG15U3hOVFhEcUtIcmM4REZ3UUtlMThsWGdBUVBVZzB1SFNjM0RmNTB3TGFLalU4aGVydHNQWUxrZVV4OGUxa3hGY1hOaGl5dmp1MVZsMHNrMTBWaG0rNC9PSFpYY0FMRHl4Y29rUlRsdU9TdXR5eHJocmtZbGNVU2JWdXdpUjdCSzIxQy9EYnpqbmpNSDR0aWRoUEtoMHhvbUx2T29nd1prWS9NNDhNY29YK1A0SWllVjRXV2JUdEM4T0lpMFV0dXNTYTNxK1JSZnRuVTVlV0l2OS9lMHZxaE01NUhYakZiY0NxbXV4enhEWVIvZ3E4ZDJtSTV0L3h2K212Q0lLSWc1ay8xU2ZTcFE4TDQ3L2hiUWdSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFUNU8vNFArMTdzeUpYUDJwb0FBQUFBU1VWT1JLNUNZSUk9J1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUWU2Rmo1TnRIdkZvd2RId1lHNHRnQ0VtMG1BMVZsWndIWGtBJnVzcXA9Q0FVJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUTF2dTNrMDF1SldTME1VREhQY01tUzBZT3JHdmhhcllmQVdBJnVzcXA9Q0FVJ1xyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ0FoYScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfsp7Hqtawg64SI66y0IOq3gOyXrOybjCEnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICd6ZXJvJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+OFh+OFiCcsXHJcbiAgICAgICAgfV1cclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBwb3N0QWRkZWQ6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnO1xyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcclxuICAgIHR5cGU6IEFERF9QT1NULFxyXG59O1xyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcbiAgICBpZDogMixcclxuICAgIGNvbnRlbnQ6ICfrjZTrr7jrjbDsnbTthLAnLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAnQWhhJyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFtdLFxyXG4gICAgQ29tbWVudHM6IFtdLFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbi8vIGFjdGlvbiBjcmVhdG9yXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdMT0dfSU4nLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnTE9HX09VVCcsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0xPR19JTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW107XHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7IGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==