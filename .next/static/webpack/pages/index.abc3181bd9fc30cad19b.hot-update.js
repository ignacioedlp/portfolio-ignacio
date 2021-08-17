"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Proyect.jsx":
/*!********************************!*\
  !*** ./components/Proyect.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Proyect; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Nacho\\Desktop\\ReactCursoFull\\02-React-Next-Portfolio\\components\\Proyect.jsx";
function Proyect(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "col-md-4 p-2",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card h-100",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "overflow",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: data.urlImage,
          alt: data.title,
          className: "card-img-top"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card-body",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          className: "card-title",
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: data.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: data.urlPage,
          children: "Know more"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mt-1",
          children: [data.techs.map((tech, index)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "class": "badge rounded-pill bg-primary",
            children: "Primary"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
_c = Proyect;

var _c;

$RefreshReg$(_c, "Proyect");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Skills": function() { return /* binding */ Skills; },
/* harmony export */   "Experiences": function() { return /* binding */ Experiences; },
/* harmony export */   "portfolios": function() { return /* binding */ portfolios; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var Skills = [{
  name: 'JavaScript',
  percents: '90%'
}, {
  name: 'HTML',
  percents: '80%'
}, {
  name: 'CSS',
  percents: '70%'
}, {
  name: 'Node.js',
  percents: '80%'
}, {
  name: 'React',
  percents: '70%'
}, {
  name: 'MongoDB',
  percents: '85%'
}, {
  name: 'next.js',
  percents: '50%'
}];
var Experiences = [{
  title: 'React Next Portfolio',
  description: 'A React Next Portfolio',
  company: 'React Next',
  startDate: '2017-01-01'
}, {
  title: 'React Next Portfolio',
  description: 'A React Next Portfolio',
  company: 'React Next',
  startDate: '2017-01-01'
}, {
  title: 'React Next Portfolio',
  description: 'A React Next Portfolio',
  company: 'React Next',
  startDate: '2017-01-01'
}];
var portfolios = [{
  title: 'Cryptocurrency',
  description: 'A portfolio for cryptocurrency',
  urlImage: 'crypto-info.png',
  urlPage: '#!',
  techs: ['JavaScript', 'Node.js ', 'Express']
}, {
  title: 'PokeDex',
  description: 'A portfolio for PokeDex',
  urlImage: 'pokedex.png',
  urlPage: '#!',
  techs: ['JavaScript', 'Node.js ', 'Express']
}];

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWJjMzE4MWJkOWZjMzBjYWQxOWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxPQUFULE9BQTJCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3hDLHNCQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRUEsSUFBSSxDQUFDQyxRQUFmO0FBQXlCLGFBQUcsRUFBRUQsSUFBSSxDQUFDRSxLQUFuQztBQUEwQyxtQkFBUyxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyxZQUFkO0FBQUEsb0JBQTRCRixJQUFJLENBQUNFO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLG9CQUFJRixJQUFJLENBQUNHO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQUcsY0FBSSxFQUFFSCxJQUFJLENBQUNJLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLHFCQUVJSixJQUFJLENBQUNLLEtBQUwsQ0FBV0MsR0FBWCxFQUFnQkMsSUFBSSxFQUFDQyxLQUFyQixFQUZKLGVBSUU7QUFBTSxxQkFBTSwrQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEO0tBckJ1QlQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWpCLElBQU1VLE1BQU0sR0FBRyxDQUNsQjtBQUNJQyxFQUFBQSxJQUFJLEVBQUUsWUFEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUU7QUFGZCxDQURrQixFQUtsQjtBQUNJRCxFQUFBQSxJQUFJLEVBQUUsTUFEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUU7QUFGZCxDQUxrQixFQVNsQjtBQUNJRCxFQUFBQSxJQUFJLEVBQUUsS0FEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUU7QUFGZCxDQVRrQixFQWFsQjtBQUNJRCxFQUFBQSxJQUFJLEVBQUUsU0FEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUU7QUFGZCxDQWJrQixFQWlCbEI7QUFDSUQsRUFBQUEsSUFBSSxFQUFFLE9BRFY7QUFFSUMsRUFBQUEsUUFBUSxFQUFFO0FBRmQsQ0FqQmtCLEVBcUJsQjtBQUNJRCxFQUFBQSxJQUFJLEVBQUUsU0FEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUU7QUFGZCxDQXJCa0IsRUF5QmxCO0FBQ0lELEVBQUFBLElBQUksRUFBRSxTQURWO0FBRUlDLEVBQUFBLFFBQVEsRUFBRTtBQUZkLENBekJrQixDQUFmO0FBK0JBLElBQU1DLFdBQVcsR0FBRyxDQUN2QjtBQUNJVixFQUFBQSxLQUFLLEVBQUUsc0JBRFg7QUFFSUMsRUFBQUEsV0FBVyxFQUFFLHdCQUZqQjtBQUdJVSxFQUFBQSxPQUFPLEVBQUUsWUFIYjtBQUlJQyxFQUFBQSxTQUFTLEVBQUU7QUFKZixDQUR1QixFQU92QjtBQUNJWixFQUFBQSxLQUFLLEVBQUUsc0JBRFg7QUFFSUMsRUFBQUEsV0FBVyxFQUFFLHdCQUZqQjtBQUdJVSxFQUFBQSxPQUFPLEVBQUUsWUFIYjtBQUlJQyxFQUFBQSxTQUFTLEVBQUU7QUFKZixDQVB1QixFQWF2QjtBQUNJWixFQUFBQSxLQUFLLEVBQUUsc0JBRFg7QUFFSUMsRUFBQUEsV0FBVyxFQUFFLHdCQUZqQjtBQUdJVSxFQUFBQSxPQUFPLEVBQUUsWUFIYjtBQUlJQyxFQUFBQSxTQUFTLEVBQUU7QUFKZixDQWJ1QixDQUFwQjtBQXFCQSxJQUFNQyxVQUFVLEdBQUcsQ0FDdEI7QUFDSWIsRUFBQUEsS0FBSyxFQUFFLGdCQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSxnQ0FGakI7QUFHSUYsRUFBQUEsUUFBUSxFQUFFLGlCQUhkO0FBSUlHLEVBQUFBLE9BQU8sRUFBRSxJQUpiO0FBS0lDLEVBQUFBLEtBQUssRUFBRSxDQUNILFlBREcsRUFDVyxVQURYLEVBQ3VCLFNBRHZCO0FBTFgsQ0FEc0IsRUFZdEI7QUFDSUgsRUFBQUEsS0FBSyxFQUFFLFNBRFg7QUFFSUMsRUFBQUEsV0FBVyxFQUFFLHlCQUZqQjtBQUdJRixFQUFBQSxRQUFRLEVBQUUsYUFIZDtBQUlJRyxFQUFBQSxPQUFPLEVBQUUsSUFKYjtBQUtJQyxFQUFBQSxLQUFLLEVBQUUsQ0FDSCxZQURHLEVBQ1csVUFEWCxFQUN1QixTQUR2QjtBQUxYLENBWnNCLENBQW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJveWVjdC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3Byb2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJveWVjdCh7IGRhdGEgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHAtMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC0xMDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17ZGF0YS51cmxJbWFnZX0gYWx0PXtkYXRhLnRpdGxlfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntkYXRhLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICA8cD57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICA8YSBocmVmPXtkYXRhLnVybFBhZ2V9Pktub3cgbW9yZTwvYT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZGF0YS50ZWNocy5tYXAoKHRlY2gsaW5kZXggKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIHJvdW5kZWQtcGlsbCBiZy1wcmltYXJ5XCI+UHJpbWFyeTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFNraWxscyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnSmF2YVNjcmlwdCcsXHJcbiAgICAgICAgcGVyY2VudHM6ICc5MCUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdIVE1MJyxcclxuICAgICAgICBwZXJjZW50czogJzgwJSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0NTUycsXHJcbiAgICAgICAgcGVyY2VudHM6ICc3MCUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdOb2RlLmpzJyxcclxuICAgICAgICBwZXJjZW50czogJzgwJSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1JlYWN0JyxcclxuICAgICAgICBwZXJjZW50czogJzcwJSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ01vbmdvREInLFxyXG4gICAgICAgIHBlcmNlbnRzOiAnODUlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnbmV4dC5qcycsXHJcbiAgICAgICAgcGVyY2VudHM6ICc1MCUnXHJcbiAgICB9LFxyXG5cclxuXVxyXG5leHBvcnQgY29uc3QgRXhwZXJpZW5jZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdSZWFjdCBOZXh0IFBvcnRmb2xpbycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIFJlYWN0IE5leHQgUG9ydGZvbGlvJyxcclxuICAgICAgICBjb21wYW55OiAnUmVhY3QgTmV4dCcsXHJcbiAgICAgICAgc3RhcnREYXRlOiAnMjAxNy0wMS0wMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUmVhY3QgTmV4dCBQb3J0Zm9saW8nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBSZWFjdCBOZXh0IFBvcnRmb2xpbycsXHJcbiAgICAgICAgY29tcGFueTogJ1JlYWN0IE5leHQnLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogJzIwMTctMDEtMDEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1JlYWN0IE5leHQgUG9ydGZvbGlvJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgUmVhY3QgTmV4dCBQb3J0Zm9saW8nLFxyXG4gICAgICAgIGNvbXBhbnk6ICdSZWFjdCBOZXh0JyxcclxuICAgICAgICBzdGFydERhdGU6ICcyMDE3LTAxLTAxJyxcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3J0Zm9saW9zID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ3J5cHRvY3VycmVuY3knLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBwb3J0Zm9saW8gZm9yIGNyeXB0b2N1cnJlbmN5JyxcclxuICAgICAgICB1cmxJbWFnZTogJ2NyeXB0by1pbmZvLnBuZycsXHJcbiAgICAgICAgdXJsUGFnZTogJyMhJyxcclxuICAgICAgICB0ZWNoczogW1xyXG4gICAgICAgICAgICAnSmF2YVNjcmlwdCcsICdOb2RlLmpzICcsICdFeHByZXNzJ1xyXG4gICAgICAgIF1cclxuXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1Bva2VEZXgnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBwb3J0Zm9saW8gZm9yIFBva2VEZXgnLFxyXG4gICAgICAgIHVybEltYWdlOiAncG9rZWRleC5wbmcnLFxyXG4gICAgICAgIHVybFBhZ2U6ICcjIScsXHJcbiAgICAgICAgdGVjaHM6IFtcclxuICAgICAgICAgICAgJ0phdmFTY3JpcHQnLCAnTm9kZS5qcyAnLCAnRXhwcmVzcydcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG5dIl0sIm5hbWVzIjpbIlByb3llY3QiLCJkYXRhIiwidXJsSW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXJsUGFnZSIsInRlY2hzIiwibWFwIiwidGVjaCIsImluZGV4IiwiU2tpbGxzIiwibmFtZSIsInBlcmNlbnRzIiwiRXhwZXJpZW5jZXMiLCJjb21wYW55Iiwic3RhcnREYXRlIiwicG9ydGZvbGlvcyJdLCJzb3VyY2VSb290IjoiIn0=