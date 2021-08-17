"use strict";
self["webpackHotUpdate_N_E"]("pages/portafolios",{

/***/ "./pages/portafolios.js":
/*!******************************!*\
  !*** ./pages/portafolios.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_Portafolios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Portafolios */ "./components/Portafolios.jsx");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ "./profile.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Nacho\\Desktop\\ReactCursoFull\\02-React-Next-Portfolio\\pages\\portafolios.js",
    _this = undefined;





var portafolios = function portafolios() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Portafolios__WEBPACK_IMPORTED_MODULE_2__.default, {
      data: _profile__WEBPACK_IMPORTED_MODULE_3__.portfolios
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (portafolios);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ydGFmb2xpb3MuNTk1MmViYWU0YmM2MjY2MGFmMmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxzQkFDaEIsOERBQUMsdURBQUQ7QUFBQSwyQkFDSSw4REFBQyw0REFBRDtBQUFhLFVBQUksRUFBRUQsZ0RBQVVBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGdCO0FBQUEsQ0FBcEI7O0FBT0EsK0RBQWVDLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYTyxJQUFNQyxNQUFNLEdBQUcsQ0FDbEI7QUFDSUMsRUFBQUEsSUFBSSxFQUFFLFlBRFY7QUFFSUMsRUFBQUEsUUFBUSxFQUFFO0FBRmQsQ0FEa0IsRUFLbEI7QUFDSUQsRUFBQUEsSUFBSSxFQUFFLE1BRFY7QUFFSUMsRUFBQUEsUUFBUSxFQUFFO0FBRmQsQ0FMa0IsRUFTbEI7QUFDSUQsRUFBQUEsSUFBSSxFQUFFLEtBRFY7QUFFSUMsRUFBQUEsUUFBUSxFQUFFO0FBRmQsQ0FUa0IsRUFhbEI7QUFDSUQsRUFBQUEsSUFBSSxFQUFFLFNBRFY7QUFFSUMsRUFBQUEsUUFBUSxFQUFFO0FBRmQsQ0Fia0IsRUFpQmxCO0FBQ0lELEVBQUFBLElBQUksRUFBRSxPQURWO0FBRUlDLEVBQUFBLFFBQVEsRUFBRTtBQUZkLENBakJrQixFQXFCbEI7QUFDSUQsRUFBQUEsSUFBSSxFQUFFLFNBRFY7QUFFSUMsRUFBQUEsUUFBUSxFQUFFO0FBRmQsQ0FyQmtCLEVBeUJsQjtBQUNJRCxFQUFBQSxJQUFJLEVBQUUsU0FEVjtBQUVJQyxFQUFBQSxRQUFRLEVBQUU7QUFGZCxDQXpCa0IsQ0FBZjtBQStCQSxJQUFNQyxXQUFXLEdBQUcsQ0FDdkI7QUFDSUMsRUFBQUEsS0FBSyxFQUFFLHNCQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSx3QkFGakI7QUFHSUMsRUFBQUEsT0FBTyxFQUFFLFlBSGI7QUFJSUMsRUFBQUEsU0FBUyxFQUFFO0FBSmYsQ0FEdUIsRUFPdkI7QUFDSUgsRUFBQUEsS0FBSyxFQUFFLHNCQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSx3QkFGakI7QUFHSUMsRUFBQUEsT0FBTyxFQUFFLFlBSGI7QUFJSUMsRUFBQUEsU0FBUyxFQUFFO0FBSmYsQ0FQdUIsRUFhdkI7QUFDSUgsRUFBQUEsS0FBSyxFQUFFLHNCQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSx3QkFGakI7QUFHSUMsRUFBQUEsT0FBTyxFQUFFLFlBSGI7QUFJSUMsRUFBQUEsU0FBUyxFQUFFO0FBSmYsQ0FidUIsQ0FBcEI7QUFxQkEsSUFBTVQsVUFBVSxHQUFHLENBQ3RCO0FBQ0lNLEVBQUFBLEtBQUssRUFBRSxnQkFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUUsZ0NBRmpCO0FBR0lHLEVBQUFBLFFBQVEsRUFBRSxpQkFIZDtBQUlJQyxFQUFBQSxPQUFPLEVBQUUsSUFKYjtBQUtJQyxFQUFBQSxLQUFLLEVBQUUsQ0FDSCxZQURHLEVBQ1csVUFEWCxFQUN1QixTQUR2QjtBQUxYLENBRHNCLEVBWXRCO0FBQ0lOLEVBQUFBLEtBQUssRUFBRSxTQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSx5QkFGakI7QUFHSUcsRUFBQUEsUUFBUSxFQUFFLGFBSGQ7QUFJSUMsRUFBQUEsT0FBTyxFQUFFLElBSmI7QUFLSUMsRUFBQUEsS0FBSyxFQUFFLENBQ0gsWUFERyxFQUNXLFVBRFgsRUFDdUIsU0FEdkI7QUFMWCxDQVpzQixDQUFuQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3J0YWZvbGlvcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUG9ydGFmb2xpb3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9ydGFmb2xpb3NcIjtcclxuaW1wb3J0IHsgcG9ydGZvbGlvcyB9IGZyb20gXCIuLi9wcm9maWxlXCI7XHJcblxyXG5jb25zdCBwb3J0YWZvbGlvcyA9ICgpID0+IChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPFBvcnRhZm9saW9zIGRhdGE9e3BvcnRmb2xpb3N9Lz5cclxuICAgIDwvTGF5b3V0PlxyXG4pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9ydGFmb2xpb3M7XHJcbiIsImV4cG9ydCBjb25zdCBTa2lsbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0phdmFTY3JpcHQnLFxyXG4gICAgICAgIHBlcmNlbnRzOiAnOTAlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnSFRNTCcsXHJcbiAgICAgICAgcGVyY2VudHM6ICc4MCUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdDU1MnLFxyXG4gICAgICAgIHBlcmNlbnRzOiAnNzAlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnTm9kZS5qcycsXHJcbiAgICAgICAgcGVyY2VudHM6ICc4MCUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdSZWFjdCcsXHJcbiAgICAgICAgcGVyY2VudHM6ICc3MCUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdNb25nb0RCJyxcclxuICAgICAgICBwZXJjZW50czogJzg1JSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ25leHQuanMnLFxyXG4gICAgICAgIHBlcmNlbnRzOiAnNTAlJ1xyXG4gICAgfSxcclxuXHJcbl1cclxuZXhwb3J0IGNvbnN0IEV4cGVyaWVuY2VzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUmVhY3QgTmV4dCBQb3J0Zm9saW8nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBSZWFjdCBOZXh0IFBvcnRmb2xpbycsXHJcbiAgICAgICAgY29tcGFueTogJ1JlYWN0IE5leHQnLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogJzIwMTctMDEtMDEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1JlYWN0IE5leHQgUG9ydGZvbGlvJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgUmVhY3QgTmV4dCBQb3J0Zm9saW8nLFxyXG4gICAgICAgIGNvbXBhbnk6ICdSZWFjdCBOZXh0JyxcclxuICAgICAgICBzdGFydERhdGU6ICcyMDE3LTAxLTAxJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdSZWFjdCBOZXh0IFBvcnRmb2xpbycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIFJlYWN0IE5leHQgUG9ydGZvbGlvJyxcclxuICAgICAgICBjb21wYW55OiAnUmVhY3QgTmV4dCcsXHJcbiAgICAgICAgc3RhcnREYXRlOiAnMjAxNy0wMS0wMScsXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcG9ydGZvbGlvcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0NyeXB0b2N1cnJlbmN5JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgcG9ydGZvbGlvIGZvciBjcnlwdG9jdXJyZW5jeScsXHJcbiAgICAgICAgdXJsSW1hZ2U6ICdjcnlwdG8taW5mby5wbmcnLFxyXG4gICAgICAgIHVybFBhZ2U6ICcjIScsXHJcbiAgICAgICAgdGVjaHM6IFtcclxuICAgICAgICAgICAgJ0phdmFTY3JpcHQnLCAnTm9kZS5qcyAnLCAnRXhwcmVzcydcclxuICAgICAgICBdXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdQb2tlRGV4JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgcG9ydGZvbGlvIGZvciBQb2tlRGV4JyxcclxuICAgICAgICB1cmxJbWFnZTogJ3Bva2VkZXgucG5nJyxcclxuICAgICAgICB1cmxQYWdlOiAnIyEnLFxyXG4gICAgICAgIHRlY2hzOiBbXHJcbiAgICAgICAgICAgICdKYXZhU2NyaXB0JywgJ05vZGUuanMgJywgJ0V4cHJlc3MnXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJQb3J0YWZvbGlvcyIsInBvcnRmb2xpb3MiLCJwb3J0YWZvbGlvcyIsIlNraWxscyIsIm5hbWUiLCJwZXJjZW50cyIsIkV4cGVyaWVuY2VzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvbXBhbnkiLCJzdGFydERhdGUiLCJ1cmxJbWFnZSIsInVybFBhZ2UiLCJ0ZWNocyJdLCJzb3VyY2VSb290IjoiIn0=