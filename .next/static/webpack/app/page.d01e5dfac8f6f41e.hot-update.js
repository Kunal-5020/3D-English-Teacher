"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/dashboard/userDashboard.jsx":
/*!****************************************************!*\
  !*** ./src/components/dashboard/userDashboard.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dashboard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.css */ \"(app-pages-browser)/./src/components/dashboard/dashboard.css\");\n/* harmony import */ var _pages_lessons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/lessons */ \"(app-pages-browser)/./src/components/pages/lessons.jsx\");\n/* harmony import */ var _pages_doubts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/doubts */ \"(app-pages-browser)/./src/components/pages/doubts.jsx\");\n/* harmony import */ var _pages_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/settings */ \"(app-pages-browser)/./src/components/pages/settings.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const [currentView, setCurrentView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"userInfo\");\n    const [completedLessons, setCompletedLessons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(67);\n    const totalLessons = 90;\n    const [isSidebarHidden, setSidebarHidden] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const renderContent = ()=>{\n        switch(currentView){\n            case \"lessons\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_lessons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 24\n                }, undefined);\n            case \"doubts\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_doubts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 24\n                }, undefined);\n            case \"settings\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_settings__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 24\n                }, undefined);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"user-info-section\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Your Progress\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"completed-lessons-section\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"wrapper\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"circle left\",\n                                            style: {\n                                                animationDuration: \"\".concat(6 - completedLessons / totalLessons * 10, \"s\")\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"circle right\",\n                                            style: {\n                                                animationDuration: \"\".concat(3 - completedLessons / totalLessons * 5, \"s\")\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"center-text\",\n                                            children: [\n                                                completedLessons,\n                                                \"/\",\n                                                totalLessons\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"continue-button\",\n                                    children: \"Continue\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 21\n                }, undefined);\n        }\n    };\n    const toggleSidebar = ()=>{\n        setSidebarHidden(!isSidebarHidden);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dashboard-container \".concat(isSidebarHidden ? \"sidebar-hidden\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sidebar \".concat(isSidebarHidden ? \"hidden\" : \"\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: currentView === \"userInfo\" ? \"active\" : \"\",\n                                onClick: ()=>setCurrentView(\"userInfo\"),\n                                children: \"User Info\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: currentView === \"lessons\" ? \"active\" : \"\",\n                                onClick: ()=>setCurrentView(\"lessons\"),\n                                children: \"Lessons\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: currentView === \"doubts\" ? \"active\" : \"\",\n                                onClick: ()=>setCurrentView(\"doubts\"),\n                                children: \"Doubts\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: currentView === \"settings\" ? \"active\" : \"\",\n                                onClick: ()=>setCurrentView(\"settings\"),\n                                children: \"Profile Settings\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content-section\",\n                children: renderContent()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"toggle-sidebar-button \".concat(isSidebarHidden ? \"rotate\" : \"\"),\n                onClick: toggleSidebar,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://i.ibb.co/x2nLhXN/arrow-right-svgrepo-com-1.png\",\n                    alt: \"toggle sidebar\",\n                    className: \"arrow-icon\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                    lineNumber: 99,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Dashboard, \"BFVAgrFCCYfzgw7J2Ebur54BQNM=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyRGFzaGJvYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ2Y7QUFDYztBQUNGO0FBQ0k7QUFHekMsTUFBTUssWUFBWTs7SUFDZCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTyxrQkFBa0JDLG9CQUFvQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNUyxlQUFlO0lBQ3JCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxpQkFBaUIsR0FBR1gsK0NBQVFBLENBQUM7SUFFckQsTUFBTVksZ0JBQWdCO1FBQ2xCLE9BQVFQO1lBQ0osS0FBSztnQkFDRCxxQkFBTyw4REFBQ0osc0RBQU9BOzs7OztZQUNuQixLQUFLO2dCQUNELHFCQUFPLDhEQUFDQyxxREFBTUE7Ozs7O1lBQ2xCLEtBQUs7Z0JBQ0QscUJBQU8sOERBQUNDLHVEQUFRQTs7Ozs7WUFDcEI7Z0JBQ0kscUJBQ0ksOERBQUNVO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0Y7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ1gsOERBQUNEOzRDQUNHQyxXQUFVOzRDQUNWRSxPQUFPO2dEQUNIQyxtQkFBbUIsR0FBOEMsT0FBM0MsSUFBSSxtQkFBb0JSLGVBQWdCLElBQUc7NENBQ3JFOzs7Ozs7c0RBRUosOERBQUNJOzRDQUNHQyxXQUFVOzRDQUNWRSxPQUFPO2dEQUNIQyxtQkFBbUIsR0FBNkMsT0FBMUMsSUFBSSxtQkFBb0JSLGVBQWdCLEdBQUU7NENBQ3BFOzs7Ozs7c0RBRUosOERBQUNJOzRDQUFJQyxXQUFVOztnREFDVlA7Z0RBQWlCO2dEQUFFRTs7Ozs7Ozs7Ozs7Ozs4Q0FHNUIsOERBQUNTO29DQUFPSixXQUFVOzhDQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBSXhEO0lBQ0o7SUFFQSxNQUFNSyxnQkFBZ0I7UUFDbEJSLGlCQUFpQixDQUFDRDtJQUN0QjtJQUVBLHFCQUNJLDhEQUFDRztRQUFJQyxXQUFXLHVCQUErRCxPQUF4Q0osa0JBQWtCLG1CQUFtQjs7MEJBQ3hFLDhEQUFDRztnQkFBSUMsV0FBVyxXQUEyQyxPQUFoQ0osa0JBQWtCLFdBQVc7MEJBQ3BELDRFQUFDVTs7c0NBQ0csOERBQUNDO3NDQUNHLDRFQUFDQztnQ0FDR0MsTUFBSztnQ0FDTFQsV0FBV1QsZ0JBQWdCLGFBQWEsV0FBVztnQ0FDbkRtQixTQUFTLElBQU1sQixlQUFlOzBDQUNqQzs7Ozs7Ozs7Ozs7c0NBSUwsOERBQUNlO3NDQUNHLDRFQUFDQztnQ0FDR0MsTUFBSztnQ0FDTFQsV0FBV1QsZ0JBQWdCLFlBQVksV0FBVztnQ0FDbERtQixTQUFTLElBQU1sQixlQUFlOzBDQUNqQzs7Ozs7Ozs7Ozs7c0NBSUwsOERBQUNlO3NDQUNHLDRFQUFDQztnQ0FDR0MsTUFBSztnQ0FDTFQsV0FBV1QsZ0JBQWdCLFdBQVcsV0FBVztnQ0FDakRtQixTQUFTLElBQU1sQixlQUFlOzBDQUNqQzs7Ozs7Ozs7Ozs7c0NBSUwsOERBQUNlO3NDQUNHLDRFQUFDQztnQ0FDR0MsTUFBSztnQ0FDTFQsV0FBV1QsZ0JBQWdCLGFBQWEsV0FBVztnQ0FDbkRtQixTQUFTLElBQU1sQixlQUFlOzBDQUNqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNYiw4REFBQ087Z0JBQUlDLFdBQVU7MEJBQW1CRjs7Ozs7OzBCQUNsQyw4REFBQ007Z0JBQU9KLFdBQVcseUJBQXlELE9BQWhDSixrQkFBa0IsV0FBVztnQkFBTWMsU0FBU0w7MEJBQ3hGLDRFQUFDTTtvQkFBSUMsS0FBSTtvQkFBeURDLEtBQUk7b0JBQWlCYixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3RztHQS9GTVY7S0FBQUE7QUFpR04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJEYXNoYm9hcmQuanN4PzM1YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vZGFzaGJvYXJkLmNzcyc7XHJcbmltcG9ydCBMZXNzb25zIGZyb20gJy4uL3BhZ2VzL2xlc3NvbnMnO1xyXG5pbXBvcnQgRG91YnRzIGZyb20gJy4uL3BhZ2VzL2RvdWJ0cyc7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuLi9wYWdlcy9zZXR0aW5ncyc7XHJcblxyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRWaWV3LCBzZXRDdXJyZW50Vmlld10gPSB1c2VTdGF0ZSgndXNlckluZm8nKTtcclxuICAgIGNvbnN0IFtjb21wbGV0ZWRMZXNzb25zLCBzZXRDb21wbGV0ZWRMZXNzb25zXSA9IHVzZVN0YXRlKDY3KTsgXHJcbiAgICBjb25zdCB0b3RhbExlc3NvbnMgPSA5MDtcclxuICAgIGNvbnN0IFtpc1NpZGViYXJIaWRkZW4sIHNldFNpZGViYXJIaWRkZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChjdXJyZW50Vmlldykge1xyXG4gICAgICAgICAgICBjYXNlICdsZXNzb25zJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8TGVzc29ucyAvPjtcclxuICAgICAgICAgICAgY2FzZSAnZG91YnRzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RG91YnRzIC8+O1xyXG4gICAgICAgICAgICBjYXNlICdzZXR0aW5ncyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFNldHRpbmdzIC8+O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mby1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Zb3VyIFByb2dyZXNzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wbGV0ZWQtbGVzc29ucy1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZSBsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBgJHs2IC0gKGNvbXBsZXRlZExlc3NvbnMgLyB0b3RhbExlc3NvbnMpICogMTB9c2AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlIHJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBgJHszIC0gKGNvbXBsZXRlZExlc3NvbnMgLyB0b3RhbExlc3NvbnMpICogNX1zYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tcGxldGVkTGVzc29uc30ve3RvdGFsTGVzc29uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb250aW51ZS1idXR0b25cIj5Db250aW51ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNpZGViYXJIaWRkZW4oIWlzU2lkZWJhckhpZGRlbik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BkYXNoYm9hcmQtY29udGFpbmVyICR7aXNTaWRlYmFySGlkZGVuID8gJ3NpZGViYXItaGlkZGVuJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNpZGViYXIgJHtpc1NpZGViYXJIaWRkZW4gPyAnaGlkZGVuJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudFZpZXcgPT09ICd1c2VySW5mbycgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFZpZXcoJ3VzZXJJbmZvJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N1cnJlbnRWaWV3ID09PSAnbGVzc29ucycgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFZpZXcoJ2xlc3NvbnMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVzc29uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N1cnJlbnRWaWV3ID09PSAnZG91YnRzJyA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50VmlldygnZG91YnRzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvdWJ0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N1cnJlbnRWaWV3ID09PSAnc2V0dGluZ3MnID8gJ2FjdGl2ZScgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRWaWV3KCdzZXR0aW5ncycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9maWxlIFNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uXCI+e3JlbmRlckNvbnRlbnQoKX08L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2B0b2dnbGUtc2lkZWJhci1idXR0b24gJHtpc1NpZGViYXJIaWRkZW4gPyAncm90YXRlJyA6ICcnfWB9IG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5pYmIuY28veDJuTGhYTi9hcnJvdy1yaWdodC1zdmdyZXBvLWNvbS0xLnBuZ1wiIGFsdD1cInRvZ2dsZSBzaWRlYmFyXCIgY2xhc3NOYW1lPVwiYXJyb3ctaWNvblwiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMZXNzb25zIiwiRG91YnRzIiwiU2V0dGluZ3MiLCJEYXNoYm9hcmQiLCJjdXJyZW50VmlldyIsInNldEN1cnJlbnRWaWV3IiwiY29tcGxldGVkTGVzc29ucyIsInNldENvbXBsZXRlZExlc3NvbnMiLCJ0b3RhbExlc3NvbnMiLCJpc1NpZGViYXJIaWRkZW4iLCJzZXRTaWRlYmFySGlkZGVuIiwicmVuZGVyQ29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic3R5bGUiLCJhbmltYXRpb25EdXJhdGlvbiIsImJ1dHRvbiIsInRvZ2dsZVNpZGViYXIiLCJ1bCIsImxpIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/userDashboard.jsx\n"));

/***/ })

});