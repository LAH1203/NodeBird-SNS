webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\lah12\\OneDrive\\Documents\\GitHub\\NodeBird-SNS\\prepare\\front\\components\\LoginForm.js",
    _this = undefined,
    _s = $RefreshSig$();



 // import styled from 'styled-components';
// styled-components를 사용하여 ButtonWrapper를 만드는데,
// div 태그에 style에는 marginTop으로 10px를 준다는 의미
// (2021-07-09) 첫 렌더링 시 제대로 적용되지 않아 useMemo로 대체함

/*
const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;
*/



var LoginForm = function LoginForm(_ref) {
  _s();

  var setIsLoggedIn = _ref.setIsLoggedIn;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var buttonWrapStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      marginTop: '10px'
    };
  });
  var formWrapStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      padding: '10px'
    };
  });
  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setPassword(e.target.value);
  }, []); // onFinish는 자동으로 e.preventDefault가 적용됨

  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: formWrapStyle,
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        htmlForm: "user-id",
        children: "\uC544\uC774\uB514"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        name: "user-id",
        value: id,
        onChange: onChangeId,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        htmlForm: "user-password",
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        name: "user-password",
        type: "password",
        value: password,
        onChange: onChangePassword,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      style: buttonWrapStyle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        htmlType: "submit",
        loading: false,
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/signup",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 41
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 38
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, _this);
};

_s(LoginForm, "u9BBub0Vb1smOeD7jX4OQh1f0Vk=");

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
false,

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwic2V0SXNMb2dnZWRJbiIsInVzZVN0YXRlIiwiaWQiLCJzZXRJZCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJidXR0b25XcmFwU3R5bGUiLCJ1c2VNZW1vIiwibWFyZ2luVG9wIiwiZm9ybVdyYXBTdHlsZSIsInBhZGRpbmciLCJvbkNoYW5nZUlkIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25TdWJtaXRGb3JtIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7O0FBQ3JDLGtCQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQTVCO0FBQUEsTUFBT0MsRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0EsbUJBQWdDRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPRyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBLE1BQU1DLGVBQWUsR0FBR0MscURBQU8sQ0FBQztBQUFBLFdBQU87QUFDbkNDLGVBQVMsRUFBRTtBQUR3QixLQUFQO0FBQUEsR0FBRCxDQUEvQjtBQUdBLE1BQU1DLGFBQWEsR0FBR0YscURBQU8sQ0FBQztBQUFBLFdBQU87QUFDakNHLGFBQU8sRUFBRTtBQUR3QixLQUFQO0FBQUEsR0FBRCxDQUE3QjtBQUlBLE1BQU1DLFVBQVUsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87QUFDbENWLFNBQUssQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBTDtBQUNILEdBRjZCLEVBRTNCLEVBRjJCLENBQTlCO0FBR0EsTUFBTUMsZ0JBQWdCLEdBQUdKLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hDUixlQUFXLENBQUNRLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDSCxHQUZtQyxFQUVqQyxFQUZpQyxDQUFwQyxDQWRxQyxDQWtCckM7O0FBQ0EsTUFBTUUsWUFBWSxHQUFHTCx5REFBVyxDQUFDLFlBQU07QUFDbkNNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZakIsRUFBWixFQUFnQkUsUUFBaEI7QUFDQUosaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDSCxHQUgrQixFQUc3QixDQUFDRSxFQUFELEVBQUtFLFFBQUwsQ0FINkIsQ0FBaEM7QUFLQSxzQkFDSSxxRUFBQyx5Q0FBRDtBQUFNLFNBQUssRUFBRUssYUFBYjtBQUE0QixZQUFRLEVBQUVRLFlBQXRDO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSTtBQUFPLGdCQUFRLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJLHFFQUFDLDBDQUFEO0FBQ0ksWUFBSSxFQUFDLFNBRFQ7QUFFSSxhQUFLLEVBQUVmLEVBRlg7QUFHSSxnQkFBUSxFQUFFUyxVQUhkO0FBSUksZ0JBQVE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFXSTtBQUFBLDhCQUNBO0FBQU8sZ0JBQVEsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0kscUVBQUMsMENBQUQ7QUFDSSxZQUFJLEVBQUMsZUFEVDtBQUVJLFlBQUksRUFBQyxVQUZUO0FBR0ksYUFBSyxFQUFFUCxRQUhYO0FBSUksZ0JBQVEsRUFBRVksZ0JBSmQ7QUFLSSxnQkFBUTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSixlQXNCSTtBQUFLLFdBQUssRUFBRVYsZUFBWjtBQUFBLDhCQUNJLHFFQUFDLDJDQUFEO0FBQVEsWUFBSSxFQUFDLFNBQWI7QUFBdUIsZ0JBQVEsRUFBQyxRQUFoQztBQUF5QyxlQUFPLEVBQUUsS0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQSwrQkFBcUI7QUFBQSxpQ0FBRyxxRUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCSixlQTBCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0NILENBeEREOztHQUFNUCxTOztLQUFBQSxTO0FBMERTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MGU2YmUyMjM3MjM2MjRmOWM0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xyXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbi8vIHN0eWxlZC1jb21wb25lbnRz66W8IOyCrOyaqe2VmOyXrCBCdXR0b25XcmFwcGVy66W8IOunjOuTnOuKlOuNsCxcclxuLy8gZGl2IO2DnOq3uOyXkCBzdHlsZeyXkOuKlCBtYXJnaW5Ub3DsnLzroZwgMTBweOulvCDspIDri6TripQg7J2Y66+4XHJcbi8vICgyMDIxLTA3LTA5KSDssqsg66CM642U66eBIOyLnCDsoJzrjIDroZwg7KCB7Jqp65CY7KeAIOyViuyVhCB1c2VNZW1v66GcIOuMgOyytO2VqFxyXG4vKlxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZChGb3JtKWBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcbiovXHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoeyBzZXRJc0xvZ2dlZEluIH0pID0+IHtcclxuICAgIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uV3JhcFN0eWxlID0gdXNlTWVtbygoKSA9PiAoe1xyXG4gICAgICAgIG1hcmdpblRvcDogJzEwcHgnXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBmb3JtV3JhcFN0eWxlID0gdXNlTWVtbygoKSA9PiAoe1xyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4J1xyXG4gICAgfSkpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSWQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyBvbkZpbmlzaOuKlCDsnpDrj5nsnLzroZwgZS5wcmV2ZW50RGVmYXVsdOqwgCDsoIHsmqnrkKhcclxuICAgIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpZCwgcGFzc3dvcmQpO1xyXG4gICAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICB9LCBbaWQsIHBhc3N3b3JkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBzdHlsZT17Zm9ybVdyYXBTdHlsZX0gb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcm09XCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXItaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJZH1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9ybT1cInVzZXItcGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtidXR0b25XcmFwU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17ZmFsc2V9PuuhnOq3uOyduDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48YT48QnV0dG9uPu2ajOybkOqwgOyehTwvQnV0dG9uPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=