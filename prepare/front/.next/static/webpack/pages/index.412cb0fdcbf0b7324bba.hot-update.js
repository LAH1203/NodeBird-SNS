webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\lah12\\OneDrive\\Documents\\GitHub\\NodeBird-SNS\\prepare\\front\\components\\ImagesZoom\\index.js",
    _templateObject,
    _templateObject2,
    _templateObject3,
    _templateObject4,
    _templateObject5,
    _this = undefined,
    _s = $RefreshSig$();






var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    z-index: 5000;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n"])));
_c = Overlay;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 44px;\n    background: white;\n    position: relative;\n    padding: 0;\n    text-align: center;\n\n    & h1 {\n        margin: 0;\n        font-size: 17px;\n        color: #333;\n        line-height: 44px;\n    }\n\n    & button {\n        position: absolute;\n        right: 0;\n        top: 0;\n        padding: 15px;\n        line-height: 14px;\n        cursor: pointer;\n    }\n"])));
_c2 = Header;
var SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: calc(100% - 44px);\n    background: #090909;\n"])));
_c3 = SlickWrapper;
var ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4 || (_templateObject4 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 32px;\n    text-align: center;\n\n    & img {\n        margin: 0 auto;\n        max-height: 750px;\n    }\n"])));
_c4 = ImgWrapper;
var indicator = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5 || (_templateObject5 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-align: center;\n\n    & > div {\n        width: 75px;\n        height: 30px;\n        line-height: 30px;\n        border-radius: 15px;\n        background: #313131;\n        display: inline-block;\n        text-align: center;\n        color: white;\n        font-size: 15px;\n    }\n"])));

var ImagesZoom = function ImagesZoom(_ref) {
  _s();

  var images = _ref.images,
      onClose = _ref.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentSlide = _useState[0],
      setCurrentSlide = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Overlay, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Header, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(SlickWrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, {
          initialSlide: 0,
          afterChange: function afterChange(slide) {
            return setCurrentSlide(slide);
          },
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(function (v) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ImgWrapper, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                src: v.src,
                alt: v.src
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 33
              }, _this)
            }, v.src, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }, _this);
};

_s(ImagesZoom, "VQw0KpRgltXDNPWBgmV3GhZXdQE=");

_c5 = ImagesZoom;
ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Overlay");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "SlickWrapper");
$RefreshReg$(_c4, "ImgWrapper");
$RefreshReg$(_c5, "ImagesZoom");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJTbGlja1dyYXBwZXIiLCJJbWdXcmFwcGVyIiwiaW5kaWNhdG9yIiwiSW1hZ2VzWm9vbSIsImltYWdlcyIsIm9uQ2xvc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlIiwibWFwIiwidiIsInNyYyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYscVBBQWI7S0FBTUYsTztBQVNOLElBQU1HLE1BQU0sR0FBR0YseURBQU0sQ0FBQ0csTUFBViw4aEJBQVo7TUFBTUQsTTtBQXdCTixJQUFNRSxZQUFZLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsNk1BQWxCO01BQU1HLFk7QUFLTixJQUFNQyxVQUFVLEdBQUdMLHlEQUFNLENBQUNDLEdBQVYsMlFBQWhCO01BQU1JLFU7QUFVTixJQUFNQyxTQUFTLEdBQUdOLHlEQUFNLENBQUNDLEdBQVYsdWJBQWY7O0FBZ0JBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFDeEMsa0JBQXdDQyxzREFBUSxDQUFDLENBQUQsQ0FBaEQ7QUFBQSxNQUFPQyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUVBLHNCQUNJLHFFQUFDLE9BQUQ7QUFBQSw0QkFDSSxxRUFBQyxNQUFEO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQVEsZUFBTyxFQUFFSCxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBS0kscUVBQUMsWUFBRDtBQUFBLDZCQUNJO0FBQUEsK0JBQ0kscUVBQUMsa0RBQUQ7QUFDSSxzQkFBWSxFQUFFLENBRGxCO0FBRUkscUJBQVcsRUFBRSxxQkFBQ0ksS0FBRDtBQUFBLG1CQUFXRCxlQUFlLENBQUNDLEtBQUQsQ0FBMUI7QUFBQSxXQUZqQjtBQUdJLGtCQUFRLE1BSFo7QUFJSSxnQkFBTSxFQUFFLEtBSlo7QUFLSSxzQkFBWSxFQUFFLENBTGxCO0FBTUksd0JBQWMsRUFBRSxDQU5wQjtBQUFBLG9CQVFLTCxNQUFNLENBQUNNLEdBQVAsQ0FBVyxVQUFDQyxDQUFEO0FBQUEsZ0NBQ1IscUVBQUMsVUFBRDtBQUFBLHFDQUNJO0FBQUssbUJBQUcsRUFBRUEsQ0FBQyxDQUFDQyxHQUFaO0FBQWlCLG1CQUFHLEVBQUVELENBQUMsQ0FBQ0M7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGVBQWlCRCxDQUFDLENBQUNDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFE7QUFBQSxXQUFYO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwQkgsQ0E3QkQ7O0dBQU1ULFU7O01BQUFBLFU7QUErQk5BLFVBQVUsQ0FBQ1UsU0FBWCxHQUF1QjtBQUNuQlQsUUFBTSxFQUFFVSxpREFBUyxDQUFDQyxPQUFWLENBQWtCRCxpREFBUyxDQUFDRSxNQUE1QixFQUFvQ0MsVUFEekI7QUFFbkJaLFNBQU8sRUFBRVMsaURBQVMsQ0FBQ0ksSUFBVixDQUFlRDtBQUZMLENBQXZCO0FBS2VkLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQxMmNiMGZkY2JmMGI3MzI0YmJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBTbGljayBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA1MDAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmIGgxIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYgYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2xpY2tXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDkwOTA5O1xyXG5gO1xyXG5cclxuY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICYgaW1nIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3NTBweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IGluZGljYXRvciA9IHN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzMxMzEzMTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZXNab29tID0gKHsgaW1hZ2VzLCBvbkNsb3NlIH0pID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxPdmVybGF5PlxyXG4gICAgICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGgxPuyDgeyEuCDsnbTrr7jsp4A8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5YPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8U2xpY2tXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWdXcmFwcGVyIGtleT17di5zcmN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2LnNyY30gYWx0PXt2LnNyY30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1nV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGljaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NsaWNrV3JhcHBlcj5cclxuICAgICAgICA8L092ZXJsYXk+XHJcbiAgICApO1xyXG59XHJcblxyXG5JbWFnZXNab29tLnByb3BUeXBlcyA9IHtcclxuICAgIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tOyJdLCJzb3VyY2VSb290IjoiIn0=