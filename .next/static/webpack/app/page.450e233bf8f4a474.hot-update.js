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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dashboard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.css */ \"(app-pages-browser)/./src/components/dashboard/dashboard.css\");\n/* harmony import */ var _pages_lessons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/lessons */ \"(app-pages-browser)/./src/components/pages/lessons.jsx\");\n/* harmony import */ var _pages_doubts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/doubts */ \"(app-pages-browser)/./src/components/pages/doubts.jsx\");\n/* harmony import */ var _pages_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/settings */ \"(app-pages-browser)/./src/components/pages/settings.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const [currentView, setCurrentView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"userInfo\");\n    const [completedLessons, setCompletedLessons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(67);\n    const totalLessons = 90;\n    const [isSidebarHidden, setSidebarHidden] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const renderContent = ()=>{\n        switch(currentView){\n            case \"lessons\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_lessons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 24\n                }, undefined);\n            case \"doubts\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_doubts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 24\n                }, undefined);\n            case \"settings\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_settings__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 24\n                }, undefined);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Your Progress\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"completed-lessons-section\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"wrapper\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"circle left\",\n                                            style: {\n                                                animationDuration: \"\".concat(6 - completedLessons / totalLessons * 10, \"s\")\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"circle right\",\n                                            style: {\n                                                animationDuration: \"\".concat(3 - completedLessons / totalLessons * 5, \"s\")\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"center-text\",\n                                            children: [\n                                                completedLessons,\n                                                \"/\",\n                                                totalLessons\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"continue-button\",\n                                    children: \"Continue\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 21\n                }, undefined);\n        }\n    };\n    const toggleSidebar = ()=>{\n        setSidebarHidden(!isSidebarHidden);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dashboard-container \".concat(isSidebarHidden ? \"sidebar-hidden\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sidebar \".concat(isSidebarHidden ? \"hidden\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: currentView === \"userInfo\" ? \"active\" : \"\",\n                                    onClick: ()=>setCurrentView(\"userInfo\"),\n                                    children: \"User Info\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: currentView === \"lessons\" ? \"active\" : \"\",\n                                    onClick: ()=>setCurrentView(\"lessons\"),\n                                    children: \"Lessons\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: currentView === \"doubts\" ? \"active\" : \"\",\n                                    onClick: ()=>setCurrentView(\"doubts\"),\n                                    children: \"Doubts\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: currentView === \"settings\" ? \"active\" : \"\",\n                                    onClick: ()=>setCurrentView(\"settings\"),\n                                    children: \"Profile Settings\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"toggle-sidebar-button\",\n                        onClick: toggleSidebar,\n                        children: [\n                            isSidebarHidden ? \"Show\" : \"Hide\",\n                            \" Sidebar\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content-section\",\n                children: renderContent()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\dashboard\\\\userDashboard.jsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Dashboard, \"BFVAgrFCCYfzgw7J2Ebur54BQNM=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyRGFzaGJvYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ2Y7QUFDYztBQUNGO0FBQ0k7QUFFekMsTUFBTUssWUFBWTs7SUFDZCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTyxrQkFBa0JDLG9CQUFvQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNUyxlQUFlO0lBQ3JCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxpQkFBaUIsR0FBR1gsK0NBQVFBLENBQUM7SUFFckQsTUFBTVksZ0JBQWdCO1FBQ2xCLE9BQVFQO1lBQ0osS0FBSztnQkFDRCxxQkFBTyw4REFBQ0osc0RBQU9BOzs7OztZQUNuQixLQUFLO2dCQUNELHFCQUFPLDhEQUFDQyxxREFBTUE7Ozs7O1lBQ2xCLEtBQUs7Z0JBQ0QscUJBQU8sOERBQUNDLHVEQUFRQTs7Ozs7WUFDcEI7Z0JBQ0kscUJBQ0ksOERBQUNVOztzQ0FDRyw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0Q7NEJBQUlFLFdBQVU7OzhDQUNYLDhEQUFDRjtvQ0FBSUUsV0FBVTs7c0RBQ1gsOERBQUNGOzRDQUNHRSxXQUFVOzRDQUNWQyxPQUFPO2dEQUNIQyxtQkFBbUIsR0FBOEMsT0FBM0MsSUFBSSxtQkFBb0JSLGVBQWdCLElBQUc7NENBQ3JFOzs7Ozs7c0RBRUosOERBQUNJOzRDQUNHRSxXQUFVOzRDQUNWQyxPQUFPO2dEQUNIQyxtQkFBbUIsR0FBNkMsT0FBMUMsSUFBSSxtQkFBb0JSLGVBQWdCLEdBQUU7NENBQ3BFOzs7Ozs7c0RBRUosOERBQUNJOzRDQUFJRSxXQUFVOztnREFDVlI7Z0RBQWlCO2dEQUFFRTs7Ozs7Ozs7Ozs7Ozs4Q0FHNUIsOERBQUNTO29DQUFPSCxXQUFVOzhDQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBSXhEO0lBQ0o7SUFFQSxNQUFNSSxnQkFBZ0I7UUFDbEJSLGlCQUFpQixDQUFDRDtJQUN0QjtJQUVBLHFCQUNJLDhEQUFDRztRQUFJRSxXQUFXLHVCQUErRCxPQUF4Q0wsa0JBQWtCLG1CQUFtQjs7MEJBQ3hFLDhEQUFDRztnQkFBSUUsV0FBVyxXQUEyQyxPQUFoQ0wsa0JBQWtCLFdBQVc7O2tDQUNwRCw4REFBQ1U7OzBDQUNHLDhEQUFDQzswQ0FDRyw0RUFBQ0M7b0NBQ0dDLE1BQUs7b0NBQ0xSLFdBQVdWLGdCQUFnQixhQUFhLFdBQVc7b0NBQ25EbUIsU0FBUyxJQUFNbEIsZUFBZTs4Q0FDakM7Ozs7Ozs7Ozs7OzBDQUlMLDhEQUFDZTswQ0FDRyw0RUFBQ0M7b0NBQ0dDLE1BQUs7b0NBQ0xSLFdBQVdWLGdCQUFnQixZQUFZLFdBQVc7b0NBQ2xEbUIsU0FBUyxJQUFNbEIsZUFBZTs4Q0FDakM7Ozs7Ozs7Ozs7OzBDQUlMLDhEQUFDZTswQ0FDRyw0RUFBQ0M7b0NBQ0dDLE1BQUs7b0NBQ0xSLFdBQVdWLGdCQUFnQixXQUFXLFdBQVc7b0NBQ2pEbUIsU0FBUyxJQUFNbEIsZUFBZTs4Q0FDakM7Ozs7Ozs7Ozs7OzBDQUlMLDhEQUFDZTswQ0FDRyw0RUFBQ0M7b0NBQ0dDLE1BQUs7b0NBQ0xSLFdBQVdWLGdCQUFnQixhQUFhLFdBQVc7b0NBQ25EbUIsU0FBUyxJQUFNbEIsZUFBZTs4Q0FDakM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtULDhEQUFDWTt3QkFBT0gsV0FBVTt3QkFBd0JTLFNBQVNMOzs0QkFDOUNULGtCQUFrQixTQUFTOzRCQUFPOzs7Ozs7Ozs7Ozs7OzBCQUczQyw4REFBQ0c7Z0JBQUlFLFdBQVU7MEJBQW1CSDs7Ozs7Ozs7Ozs7O0FBRzlDO0dBL0ZNUjtLQUFBQTtBQWlHTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckRhc2hib2FyZC5qc3g/MzVhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9kYXNoYm9hcmQuY3NzJztcclxuaW1wb3J0IExlc3NvbnMgZnJvbSAnLi4vcGFnZXMvbGVzc29ucyc7XHJcbmltcG9ydCBEb3VidHMgZnJvbSAnLi4vcGFnZXMvZG91YnRzJztcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uL3BhZ2VzL3NldHRpbmdzJztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50Vmlldywgc2V0Q3VycmVudFZpZXddID0gdXNlU3RhdGUoJ3VzZXJJbmZvJyk7XHJcbiAgICBjb25zdCBbY29tcGxldGVkTGVzc29ucywgc2V0Q29tcGxldGVkTGVzc29uc10gPSB1c2VTdGF0ZSg2Nyk7IFxyXG4gICAgY29uc3QgdG90YWxMZXNzb25zID0gOTA7XHJcbiAgICBjb25zdCBbaXNTaWRlYmFySGlkZGVuLCBzZXRTaWRlYmFySGlkZGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoY3VycmVudFZpZXcpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGVzc29ucyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExlc3NvbnMgLz47XHJcbiAgICAgICAgICAgIGNhc2UgJ2RvdWJ0cyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPERvdWJ0cyAvPjtcclxuICAgICAgICAgICAgY2FzZSAnc2V0dGluZ3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxTZXR0aW5ncyAvPjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPllvdXIgUHJvZ3Jlc3M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBsZXRlZC1sZXNzb25zLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlIGxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IGAkezYgLSAoY29tcGxldGVkTGVzc29ucyAvIHRvdGFsTGVzc29ucykgKiAxMH1zYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUgcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IGAkezMgLSAoY29tcGxldGVkTGVzc29ucyAvIHRvdGFsTGVzc29ucykgKiA1fXNgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21wbGV0ZWRMZXNzb25zfS97dG90YWxMZXNzb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRpbnVlLWJ1dHRvblwiPkNvbnRpbnVlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2lkZWJhckhpZGRlbighaXNTaWRlYmFySGlkZGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGRhc2hib2FyZC1jb250YWluZXIgJHtpc1NpZGViYXJIaWRkZW4gPyAnc2lkZWJhci1oaWRkZW4nIDogJyd9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZWJhciAke2lzU2lkZWJhckhpZGRlbiA/ICdoaWRkZW4nIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50VmlldyA9PT0gJ3VzZXJJbmZvJyA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50VmlldygndXNlckluZm8nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlciBJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudFZpZXcgPT09ICdsZXNzb25zJyA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50VmlldygnbGVzc29ucycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZXNzb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudFZpZXcgPT09ICdkb3VidHMnID8gJ2FjdGl2ZScgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRWaWV3KCdkb3VidHMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRG91YnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudFZpZXcgPT09ICdzZXR0aW5ncycgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFZpZXcoJ3NldHRpbmdzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2ZpbGUgU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0b2dnbGUtc2lkZWJhci1idXR0b25cIiBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfT5cclxuICAgICAgICAgICAgICAgICAgICB7aXNTaWRlYmFySGlkZGVuID8gJ1Nob3cnIDogJ0hpZGUnfSBTaWRlYmFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uXCI+e3JlbmRlckNvbnRlbnQoKX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGVzc29ucyIsIkRvdWJ0cyIsIlNldHRpbmdzIiwiRGFzaGJvYXJkIiwiY3VycmVudFZpZXciLCJzZXRDdXJyZW50VmlldyIsImNvbXBsZXRlZExlc3NvbnMiLCJzZXRDb21wbGV0ZWRMZXNzb25zIiwidG90YWxMZXNzb25zIiwiaXNTaWRlYmFySGlkZGVuIiwic2V0U2lkZWJhckhpZGRlbiIsInJlbmRlckNvbnRlbnQiLCJkaXYiLCJoMiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJidXR0b24iLCJ0b2dnbGVTaWRlYmFyIiwidWwiLCJsaSIsImEiLCJocmVmIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/userDashboard.jsx\n"));

/***/ })

});