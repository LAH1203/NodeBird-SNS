webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\lah12\\OneDrive\\Documents\\GitHub\\NodeBird-SNS\\prepare\\front\\pages\\signup.js",
    _this = undefined,
    _s = $RefreshSig$();








var Signup = function Signup() {
  _s();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      nickname = _useInput6[0],
      onChangeNickname = _useInput6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      passwordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      passwordError = _useState2[0],
      setPasswordError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);
  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setTerm(e.target.checked);
    console.log(e.target.checked, term);
    setTermError(false);
  });
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }
  }, [password, passwordCheck, term]);
  var errorStyle = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      color: 'red'
    };
  });
  var buttonMarginStyle = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      marginTop: 10
    };
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
        children: "\uD68C\uC6D0\uAC00\uC785 | Node Bird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      onFinish: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
          htmlFor: "user-id",
          children: "\uC544\uC774\uB514"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
          name: "user-id",
          value: id,
          required: true,
          onChange: onChangeId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
          htmlFor: "user-nickname",
          children: "\uB2C9\uB124\uC784"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
          name: "user-nickname",
          value: nickname,
          required: true,
          onChange: onChangeNickname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
          htmlFor: "user-password",
          children: "\uBE44\uBC00\uBC88\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
          name: "user-password",
          type: "password",
          value: password,
          required: true,
          onChange: onChangePassword
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
          htmlFor: "user-password-check",
          children: "\uBE44\uBC00\uBC88\uD638 \uCCB4\uD06C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
          name: "user-password-check",
          type: "password",
          value: passwordCheck,
          required: true,
          onChange: onChangePasswordCheck
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, _this), passwordError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          style: errorStyle,
          children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 39
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          name: "user-term",
          checked: term,
          onChange: onChangeTerm,
          children: "\uBAA8\uB4E0 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this), termError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          style: errorStyle,
          children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 35
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: buttonMarginStyle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "primary",
          htmlType: "submit",
          children: "\uAC00\uC785\uD558\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, _this);
};

_s(Signup, "covKF81Pby5xpcRHuAC95iHGY68=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

$RefreshReg$(_c, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInVzZUlucHV0IiwiaWQiLCJvbkNoYW5nZUlkIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwidGVybSIsInNldFRlcm0iLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJlcnJvclN0eWxlIiwidXNlTWVtbyIsImNvbG9yIiwiYnV0dG9uTWFyZ2luU3R5bGUiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDakIsa0JBQXlCQywrREFBUSxDQUFDLEVBQUQsQ0FBakM7QUFBQTtBQUFBLE1BQU9DLEVBQVA7QUFBQSxNQUFXQyxVQUFYOztBQUNBLG1CQUFxQ0YsK0RBQVEsQ0FBQyxFQUFELENBQTdDO0FBQUE7QUFBQSxNQUFPRyxRQUFQO0FBQUEsTUFBaUJDLGdCQUFqQjs7QUFDQSxtQkFBcUNKLCtEQUFRLENBQUMsRUFBRCxDQUE3QztBQUFBO0FBQUEsTUFBT0ssUUFBUDtBQUFBLE1BQWlCQyxnQkFBakI7O0FBQ0Esa0JBQTBDQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQSxNQUFPQyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBMENGLHNEQUFRLENBQUMsS0FB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QTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMkNILENBOUVEOztHQUFNOUIsTTtVQUN1QkMsdUQsRUFDWUEsdUQsRUFDQUEsdUQ7OztLQUhuQ0QsTTtBQWdGU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjAwNWMzMWFjMzA5ODFjYzFkMzgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQ2hlY2tib3gsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Rlcm1FcnJvciwgc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldFBhc3N3b3JkRXJyb3IoZS50YXJnZXQudmFsdWUgIT09IHBhc3N3b3JkKTtcclxuICAgIH0sIFtwYXNzd29yZF0pO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VUZXJtID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRUZXJtKGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNoZWNrZWQsIHRlcm0pO1xyXG4gICAgICAgIHNldFRlcm1FcnJvcihmYWxzZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAocGFzc3dvcmQgIT09IHBhc3N3b3JkQ2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFBhc3N3b3JkRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGVybSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGVybUVycm9yKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwYXNzd29yZCwgcGFzc3dvcmRDaGVjaywgdGVybV0pO1xyXG5cclxuICAgIGNvbnN0IGVycm9yU3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7XHJcbiAgICAgICAgY29sb3I6ICdyZWQnXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBidXR0b25NYXJnaW5TdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgICAgICBtYXJnaW5Ub3A6IDEwXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT7tmozsm5DqsIDsnoUgfCBOb2RlIEJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLWlkXCIgdmFsdWU9e2lkfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VJZH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItbmlja25hbWVcIj7ri4nrhKTsnoQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1uaWNrbmFtZVwiIHZhbHVlPXtuaWNrbmFtZX0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZC1jaGVja1wiPuu5hOuwgOuyiO2YuCDssrTtgaw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZC1jaGVja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZENoZWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bhc3N3b3JkRXJyb3IgJiYgPGRpdiBzdHlsZT17ZXJyb3JTdHlsZX0+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBuYW1lPVwidXNlci10ZXJtXCIgY2hlY2tlZD17dGVybX0gb25DaGFuZ2U9e29uQ2hhbmdlVGVybX0+66qo65OgIOyVveq0gOyXkCDrj5nsnZjtlanri4jri6QuPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICB7dGVybUVycm9yICYmIDxkaXYgc3R5bGU9e2Vycm9yU3R5bGV9PuyVveq0gOyXkCDrj5nsnZjtlZjshZTslbwg7ZWp64uI64ukLjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YnV0dG9uTWFyZ2luU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPuqwgOyehe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiXSwic291cmNlUm9vdCI6IiJ9