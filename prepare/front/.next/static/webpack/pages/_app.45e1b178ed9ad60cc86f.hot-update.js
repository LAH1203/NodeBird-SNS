webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
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
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: 'Aha'
  },
  Images: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        postAdded: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FBQztBQUNSQyxNQUFFLEVBQUUsQ0FESTtBQUVSQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLFNBREY7QUFFRkUsY0FBUSxFQUFFO0FBRlIsS0FGRTtBQU1SQyxXQUFPLEVBQUUsdUJBTkQ7QUFPUkMsVUFBTSxFQUFFLENBQUM7QUFDTEMsU0FBRyxFQUFFO0FBREEsS0FBRCxFQUVMO0FBQ0NBLFNBQUcsRUFBRTtBQUROLEtBRkssQ0FQQTtBQVlSQyxZQUFRLEVBQUUsQ0FBQztBQUNQTCxVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BREM7QUFJUEMsYUFBTyxFQUFFO0FBSkYsS0FBRCxFQUtQO0FBQ0NGLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEUDtBQUlDQyxhQUFPLEVBQUU7QUFKVixLQUxPO0FBWkYsR0FBRCxDQURhO0FBeUJ4QkksWUFBVSxFQUFFLEVBekJZO0FBMEJ4QkMsV0FBUyxFQUFFO0FBMUJhLENBQXJCO0FBNkJQLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNPLElBQU1DLE9BQU8sR0FBRztBQUNuQkMsTUFBSSxFQUFFRjtBQURhLENBQWhCO0FBR1AsSUFBTUcsU0FBUyxHQUFHO0FBQ2RaLElBQUUsRUFBRSxDQURVO0FBRWRHLFNBQU8sRUFBRSxPQUZLO0FBR2RGLE1BQUksRUFBRTtBQUNGRCxNQUFFLEVBQUUsQ0FERjtBQUVGRSxZQUFRLEVBQUU7QUFGUixHQUhRO0FBT2RFLFFBQU0sRUFBRSxFQVBNO0FBUWRFLFVBQVEsRUFBRTtBQVJJLENBQWxCOztBQVdBLElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QmhCLFlBQXlCO0FBQUEsTUFBWGlCLE1BQVc7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0osSUFBZjtBQUNJLFNBQUtGLFFBQUw7QUFDSSw2Q0FDT0ssS0FEUDtBQUVJZixpQkFBUyxHQUFHYSxTQUFILHNHQUFpQkUsS0FBSyxDQUFDZixTQUF2QixFQUZiO0FBR0lTLGlCQUFTLEVBQUU7QUFIZjs7QUFLSjtBQUNJLGFBQU9NLEtBQVA7QUFSUjtBQVVILENBWEQ7O0FBYWVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDVlMWIxNzhlZDlhZDYwY2M4NmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogJ2xhaDEyMDMnLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+yVhO2YhCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSjhBQUFFK0NBTUFBQUNrOGpJdEFBQUJvVkJNVkVWem1NLzcwclQvLy84QUFBQ3hZbVZ6dTJYOTBYcjgvLy8vLy8zbFB6SC8vdi8yOXZiNzByVnptTTN4OGZGem1ORC8vL3IvMkxmNTA3YjkwckgrMGJQODBiZjUwN1QvL1A4QUFBVCswcS8vMkx0eW10VC8wTGR5bDlUKzBiRG5QakZtV1ZELzNzTmVYbDdEdzhQMDFicnF0NlIrbU1yMDJzYXRaR1J0dVY3bWRHbjY3TWovejNENDA0TnJrczMvem5wem1jaHdqYnRiY0pWS1hIb3pRbHdvTkVwQlVHaFNaNE5oZTZVWUhTc2pMRHNqSlRJTEVSZytTbU5rZmFoeWljUVVDUUFySkI4NU1Tdy9PejNZdWFPM25JbVdnWE5hU2tCTVNFV0JhMlhLc1pvck4wZWtrWURadnFsYmNKY2ZHQlIyWWxRd0xDbVVwTWJhd0xCeVoyS1hnM20yc01KSU96WG14S1NNY0dCZ1UwOTNaRnlza1gyMXQ4RE50SnVEZzRQUHo4K2dvS0J3Y0hEYXhzS21yOGZxenNMcmlILzFySmVSb2MzcG1vck5sWW02ZkhibGZuYm5jVzdmcHBydnZLdnU0TlhhOE5ldDFxYVZ4NHJnNXUvTGpwTFFuNW52NE4xNXQyekkxZWJtNytPZ3Q5Ynd3cis5MkxmZkhBQ3p4dHZjUmtMejNKemlvNkg3OGRWcm5yUnd0Mzl6cnBSendGVDEyNWppV1UrMnVheGtrUDhuQUFBTkUwbEVRVlI0bk8yYisxdlRaaHZIbTNKSWFCTnlUazNTRkppaEJZRlE5ZFU1NStiUUZnYURpVldZVHRuY1NyRTRwK1d3SVNDZ3N2Y2QyMS85M3MrVG5nSzY3UWNTOXNQOXVYckJtcmdyMzk3UGZmZytTWW5GRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQmtMQVJZcUlOT0k0b3dnL0hGZ1ZCY001YVZCdWdLbmJ4MHVYL1hMbCs1Y3JWajY5bEJkdXhIZUdzVlRXeG5XdFhQK2xvNC9yVmEzbGJGTTlhRjBXd3hZOC9iZE4yenY5MTQ3UFBCVnNRWTJlclVoVHNtNWR2VUVGZlROd0NKdHFVZm5ySnNXM2hUSmRaekYvMVEzYmJaUlFmdDFDY25McFREK0psaU80WnFoTXVYcWZ5enAzcjZMY1lRSVdYYXNtV1c1ajhrcTcwSjVkRSs2d2lhTnZYempYenJXTmFacHFZcWpYelpUMFp2N3JvMkdjazhGS2dMR2F0aGp6Tm1wdHFDZSs0ZEJZQmhMVDZtc2c2MTNIbjhhd2ZxUm1MNXhtRzUxVnJzazAzblBnc0gvMGFDODRsLytLM1hObWFvY0c2NDZxZ1QxR1YvbGFiOFg5ZEVTSmZZa0h3ZzlPdnlLb216MUlaRDJrS1ByaFZEOTFVc1RoUkYzZzlHM1VaTzU5VGVmZHozeFdMTSs3QVBCSHlyUVgxeTB6NWNac3FESmp5dlVZUUlZTFJMckdZSnozdS91ejg0MEtoT0Q5WnVRdnZKa21GS0w2Z1dVczFORU11TnZMd3ExaTBFWFJLOTZidTNwK2ZzU3hWbGEzQ285bjd0eFlNUm9mNitJWUlMTWlXcGNNNXE3OGg4SEswS2VndHl0YTlSNUI4UEdCQXlSWmxXV2NNNk0vM3Z2bGl5bjB3T1Q4OVBUOWRWRjBhemg5aDduMU54bkZraUVzWmQ5NGwrYWFxcXFacE1nalVTSDh4ZUVzWmVMZ3daNUV4VW54VUtKTFZYaWlBU2tHTTBCTUtTeVp2YVVRZll5bHpoUUkvTUQxSHhodGpxSEtoZnc2MEtveWFrYTJGaFcraDg4ekowOUFHbzdTRTltSW1yWkYrWnhYNnFSdDRORGR2bVhTNEZSNE5NSVVIQTFETVBHL0t4ZW1aeDY1bWtRNzBlWVFwNkN3U2NZWi9ZZCtzek9sa2ZWVjVjb0VLbnA2VEdYZ3ZGMGxaeTJTWlA0MUZGMEJ4eVlSaTBNM3ZXcVBzanFGQy9hb1B2bWtjZ0l5RTkxYnhBZWliSWQzeVduUUI5Q0QvSUg0RFpGaDhuNHcvSVhicUllbC83cDM2ekNBVEdRYUtZc2p3RDdVNU9rWWlFaWZFSEtkTWtrMG1sLzBvRHZTQ2k1NVFWTjZhSmtLK1gvcUJPT2tKbDBTVW9sRFZGNlBwTVk2VHo3c21UUzY0NkhtaUwvNGpDRkFZdzRBRGR4UGt3RzA0VUpUVGRYMFdqZWxWTzRJeEFsc2VyMXJtTlo2bVZVdGZCK2hqQ2lSNjlNQjUwRGN0YTBaZEg5MlozSWc1b2VxRGpiZmo1WmZMRlZsVFFCN0RQNENMZmtuWEYycDJ3dURWbWFhK0oyUSt0L1I5U3dONFU4eDdZVG9GMjg0dXVhcEtHZ2QxeWpJcDFvK2VKSi9jSnY0QTZyWFFTTWo0RHhDL0JUbGQxeWMvb2hYemZhV3k3SVZZeFY2cG9wbXV5ZFRUM3REYis0dXJxNHBGak13UFNiSzhvS2ZReUQ5ZWZranFaVVkyVGJjVWtqNVJGSnhTeGVRVlVya3dhdzJBYnptb2lUbFpOeGlWdnI5eCt5NTFxRmFqZm5rWlBIKy9hK204cTUzM1l1RTBhakdXclpqMTllTGQ5SW94eU1pcVBEZmJmN2RqWW1wV3FTZmFaRnRBMWNhV2lXZUtIWk1EZEQ2bjNXd3NuRjI3NEpYVlRGMUdPdjE4OE9tcXNTb1RFNkR3aWlWbi9CTnFNNkw5YzFweng4bHJoY2VXYVZLN3c1ZUVVTzU2T0VKSk51cnlHT1BsVS9tQzluVEZBRzNnVk9DeWlsOHppaXE3eFlmems4V0NuT0Y1dnJrbE51UTBUMkxQRzlwU09IZGxSS0hjdGdjSG81ZG1uZzRxOVFRREM5ZzZKY3V5eFdqUXJCbkdZRTZnbHIxUXVyU1FkN1gyNnhoUUpJYWh2VWNmT1FuaWpEUzhUZ3BVSytIY3ZIU3FwaDY4a3FIcmRZdktuOUNuclZxckwrV25xekp6QWpjY2ZkN2lpU3NwdWdZRmtSNTg5bE5uWitmUXM3VGNYRkJEZXk3L3pGZ3JhZjdFLzhRbzJWQmNnck9rSHI4U0JNM1FYd3gxMWhsNnlUUTc5OHBUYllWbitQZklZOXhZU1ByTTQxY3pER3V3cVk0STFHWC9uL0R1b0dab211RytMLzljTDVRRkJrdXFCTVR4dk13LzZ3d3crSjUwSXg5RDRWVlQ5NE1wcDh1d2t3dWhCVG9sTlJDL3RDcnJQM1grQTMyOHJtVTBEZmFoOUkzSkxEcWVrUFZPZllTSVZUMndXTHFjQm5sRGY2L1BNRnczbDh2VmNpVDhtcGJMWnM5WDNQT25xdy8ycm1LK1lnYnlTQ2FMMjZadnFITW9iYlJDekRPR29wb3E0K2EyZXV2aytFekc3VjJxbUJsVFhqelZKcDExSE5GZURFUkhmaG1NSGJ4N3ByZnJVMDNUeU5Xb3VDUzEvSEV1V2F0SjhaeHA4b1lKWGZvVVEraDRXY0hMdWdGOXg1TVArb3ZHdFBSbEZEZFhvK0xZdUVUbHhWa0NaNm1HcXBqS0tmcEFSMXpPdWVWUzlaQlJXeVdzSDVmWCtjSWk5M2Q1aGVlMWpHcTROVjhkRmVicjQrREZzYTVoWkhnVmZPcHBMYkRvUU9wQmc5aVNjbTB0ZXZDNHZKLzgrbEV6bVl6V0NKMi9ybTF3bkFSYllrTTM5ZXFwYlVSRXA2UnJhVU9WV0M3WEt1RVh4K1hWZTdGQjFwVm1IWGRjSE5YSHVYb0ZDbm94ZG1yNUo5Z2xBejZ4eTNGeHFhWXdKaXdoaEdsdzZKZzg4S29xNDR2YjdPMU5VVG1KT0pjSXhKQ1ZrcVU4Zk9Tc0k1emFneEhRcDhoNnhtVkpRS1NjUWxxdG9saTBQb1lBOHVzWmJJNUFXcU5jRTl6YStzYkcrcHFVaUFlanlIS2JIc203VXgwZk5tdzhkSFdBNm1NNUtlZENIOHVvNmVad0cvcWxVdk9qQnRvNCtpazJoaWtiT3dsT09xN3ZOS1VSUkZGY3REVFQxeGRuRTZ3azFXcTVuRHRRK2ZXWFgrK1Z5L1grbTRSR3duSlVIcmN4M05YVjllclY4UEE2bDJvRkVFNnkzUGFwNnlNU2w4dmxjaUNUV0RhWjdLV3ZKUHhYWUEybHhCcVJSeG5lSVlvbGprTE9TYnRobUJmQmdVKzlHVmlwZWtoWWR1czF4N1lmU25EeHZaYStkYWdSNk1xazFVQnY0U0I4NFd6ZVJORTdlRi9EaUwvdTJhOEU5Y1hqNnkxOUd4QXlkak1yQ3RscWFYZDN0eHJhSTJIQnlTYmp5YzN0QTdoS3I5ODZwQVM3ZFdHL3AyODFvSTlMdGNXdnF5c09iVE12MGl3bWhDTXVSaDRaaWRsUzNnTmkzaTdKSkRKTFYzdjZlbnI2Vm9KTG51QjJob2ZiNDVjS295Uk82QlBBd3BDZGc1RDNEa2o4MkhqbFRSK1IxL2VjRFFya1dnczh2QWNOOFBSYnlnY1VDdjRxZVpzMGZwVWVJZzkrWFBEN0R0UUJ6SWNFcVNMYS83cGVEWGV0UXc2RTBQTCtXbWVNOUJPMmw2d3QwZGREOVNVU0xDc2RqaHlOSkdpajIzdlZOVHo4YWcvR1crVDZuQ3FOMTFaUUg2Z2JlZHM5T2pvbStUVWk3ZXpzU1BFVUxIYmsra28wWG16dDV6NVk0RDVTSHhDd1F5S3V1M3Q4ZElRbG12eG1UcnR5NVBwMi9YaEJDRmY2OW50SWYrSFlrZEhSOFc3QzZCRlVkckJlUWhscGY2SHZnTVl2QlFuSEp0KzkyZDkvQjhYeTFsY0g4WU1BSG12aDI5RittNjArU0ZpUysxQ3FyNTl2a2ZoMTF3VjJqeDlKZ1VIRGNnZlJ4aSsyZXl3K0xQRTBZOTFORHRtZ3Z0MkkrMHMrdUlEZ1JxRWFSa1liOGtiZkJ1Y2RtNC93eWJtVGp6bS83VFVIaFI4Z3NIVnhxUm0rMGU2QTBZSHlqZTdCcXVEa25meC9oemYyMXRiMk5sN3QxZmVQVk1iUjZQajRPT2t4WXlNQmZjbHNoRS9PeVRkTC8vZDdGNHhYR0dDL3J6ZDN1TURJR0VVK2xOaTIra2drZTZzUmxpKzRoTjlhNW02dnQySHR3VW0zUXc2QXIvYmZIRVQ0TFVWd2dUdGRUWUZycWQ0UFUydmVGNnBHOStCYzlMYTVOVi9nY05jZWJELzhVUGxCQytwNzN2ZWlmanpDK2VGVlU4blV6anJaTzRJNVNYNFk5aDBZNndyOUFDa3BvZ1lEeGV0dFN5bllmdStzcmExSnFWU0tUUkF0MGdsMVVtb0xmRVBmSC9XM3NDbUtRcUVnT2xWT1loT0pCRWdqNDFjYUdUa2tQajhGaDZpUWhQK0RUU1gvSU9aci94MUwxYkxWU0w0Zlp1ZWRiYjk1U0JKc0ZWbGlXcnFQM29MRTRIMHFtTXNydnJWK3c3SEV0NEtEaWFMSGdNRlB0Y1lDRjJlUC9IRnhOQ0t4YlMwWjdNSHJmU3F2cCs5bGdvU2JZeVA1NG9ZbzdBYWNTZDBUZ0tWNm0yZzdJYkZiYi9wOFo5MTNRU0pHbFl1SGJ4RmdYK1FJdTRISmRUanFDeHdiUDRxM25TQ3I2enQvb0VMTnFoUnlpNEh5cTVaZzk1c0YwMHp1MFpMMWxlSnZmY3NDUXhjOFBYdlF5OUc3YVN6c1RCcjBRWVVreUYyLzNuRDFDWTVRTVRXM3ZQZ0V0anlzcjQ5dE9aYnh3L2dtaU4rR2JRY0o0TXQ5R3JxK2ZTaVMxMzQ5YllZODRzVFlja1UxTTVxV3Ewbis3U0FwMFhSODQyUFM5azFIY0c3dUprbjg0cS9mOUx6NTQvbnF1MHFsQnQySFNBN2JvanA1MjZtV0xmTGdRdE56c0NsTGNKeDBWSGYwWTZOSEI1NHRpS0pBUXdoOUowa2VLdERIQ2JEZ1pBK1FLNGR1RVVRblZxcVl1bTRZbWR3MjNVSWVIbzNSUGR2NDZKK05oeTJpVjkyVXBHUDN1YmlheThpbHNCdU1HTE05WWNreVRkMnNrRGlSdVNHTkhJRWhIZjNUY1JydFY3Qmo1RlJMbXlTeE5UWERxS0hyYzhERndRS2UxOGxYZ0FRUFVnMHVIU2MzRGY1MHdMYUtqVThoZXJ0c1BZTGtlVXg4ZTFreEZjWE5oaXl2anUxVmwwc2sxMFZobSs0L09IWlhjQUxEeXhjb2tSVGx1T1N1dHl4cmhya1lsY1VTYlZ1d2lSN0JLMjFDL0Riempuak1INHRpZGhQS2gweG9tTHZPb2d3WmtZL000OE1jb1grUDRJaWVWNFdXYlR0QzhPSWkwVXR1c1NhM3ErUlJmdG5VNWVXSXY5L2UwdnFoTTU1SFhqRmJjQ3FtdXh6eERZUi9ncThkMm1JNXQveHYrbXZDSUtJZzVrLzFTZlNwUThMNDcvaGJRZ1JCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVQ1Ty80UCsxN3N5SlhQMnBvQUFBQUFTVVZPUks1Q1lJST0nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NRZTZGajVOdEh2Rm93ZEh3WUc0dGdDRW0wbUExVmxad0hYa0EmdXNxcD1DQVUnXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnQWhhJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+ynseq1rCDrhIjrrLQg6reA7Jes7JuMIScsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ3plcm8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn44WH44WIJyxcclxuICAgICAgICB9XVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIHBvc3RBZGRlZDogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xyXG4gICAgdHlwZTogQUREX1BPU1QsXHJcbn07XHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICAgIGlkOiAyLFxyXG4gICAgY29udGVudDogJ+uNlOuvuOuNsOydtO2EsCcsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICdBaGEnLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=