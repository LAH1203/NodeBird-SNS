webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\lah12\\OneDrive\\Documents\\GitHub\\NodeBird-SNS\\prepare\\front\\components\\PostCardContent.js",
    _this = undefined;



 // 여기서 해시태그면 링크로, 텍스트면 그냥 텍스트로 구분하여 출력
// 정규표현식 사용



var PostCardContent = function PostCardContent(_ref) {
  var postData = _ref.postData;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: postData.split(/(#[^\s#]+)/g).map(function (v, i) {
      if (v.match(/(#[^\s#]+)/g)) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/hashtag/".concat(v.slice(1)),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
            children: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 70
          }, _this)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 24
        }, _this);
      }

      return v;
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = PostCardContent;
PostCardContent.propTypes = {
  postData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

var _c;

$RefreshReg$(_c, "PostCardContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZENvbnRlbnQuanMiXSwibmFtZXMiOlsiUG9zdENhcmRDb250ZW50IiwicG9zdERhdGEiLCJzcGxpdCIsIm1hcCIsInYiLCJpIiwibWF0Y2giLCJzbGljZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7QUFDQTs7OztBQUNBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxzQkFDcEI7QUFBQSxjQUNLQSxRQUFRLENBQUNDLEtBQVQsQ0FBZSxhQUFmLEVBQThCQyxHQUE5QixDQUFrQyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN6QyxVQUFJRCxDQUFDLENBQUNFLEtBQUYsQ0FBUSxhQUFSLENBQUosRUFBNEI7QUFDeEIsNEJBQU8scUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLHFCQUFjRixDQUFDLENBQUNHLEtBQUYsQ0FBUSxDQUFSLENBQWQsQ0FBVjtBQUFBLGlDQUE4QztBQUFBLHNCQUFJSDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOUMsV0FBMkNDLENBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDSDs7QUFDRCxhQUFPRCxDQUFQO0FBQ0gsS0FMQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEb0I7QUFBQSxDQUF4Qjs7S0FBTUosZTtBQVdOQSxlQUFlLENBQUNRLFNBQWhCLEdBQTRCO0FBQ3hCUCxVQUFRLEVBQUVRLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREgsQ0FBNUI7QUFJZVgsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGJjYjcwZDk3ZWE0YWYzZjY5MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG4vLyDsl6zquLDshJwg7ZW07Iuc7YOc6re466m0IOunge2BrOuhnCwg7YWN7Iqk7Yq466m0IOq3uOuDpSDthY3siqTtirjroZwg6rWs67aE7ZWY7JesIOy2nOugpVxyXG4vLyDsoJXqt5ztkZztmITsi50g7IKs7JqpXHJcbmNvbnN0IFBvc3RDYXJkQ29udGVudCA9ICh7IHBvc3REYXRhIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAge3Bvc3REYXRhLnNwbGl0KC8oI1teXFxzI10rKS9nKS5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHYubWF0Y2goLygjW15cXHMjXSspL2cpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExpbmsgaHJlZj17YC9oYXNodGFnLyR7di5zbGljZSgxKX1gfSBrZXk9e2l9PjxhPnt2fTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcblBvc3RDYXJkQ29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgICBwb3N0RGF0YTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmRDb250ZW50OyJdLCJzb3VyY2VSb290IjoiIn0=