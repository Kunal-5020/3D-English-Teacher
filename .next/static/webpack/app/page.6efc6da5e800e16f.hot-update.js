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

/***/ "(app-pages-browser)/./src/components/auth/Auth.jsx":
/*!**************************************!*\
  !*** ./src/components/auth/Auth.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.css */ \"(app-pages-browser)/./src/components/auth/auth.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst Auth = (param)=>{\n    let { setIsAuthenticated } = param;\n    _s();\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Toggle between login and signup\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        age: \"\",\n        highestEducation: \"\"\n    });\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleToggle = ()=>{\n        setIsLogin(!isLogin);\n        setFormData({\n            name: \"\",\n            email: \"\",\n            password: \"\",\n            age: \"\",\n            highestEducation: \"\"\n        }); // Reset form\n        setMessage(\"\"); // Reset message\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const url = isLogin ? \"/api/auth/login\" : \"/api/auth/signup\";\n        const payload = isLogin ? {\n            email: formData.email,\n            password: formData.password\n        } : {\n            name: formData.name,\n            email: formData.email,\n            password: formData.password,\n            age: formData.age,\n            highestEducation: formData.highestEducation\n        };\n        try {\n            const response = await fetch(url, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(payload)\n            });\n            const result = await response.json();\n            if (response.ok) {\n                if (isLogin) {\n                    // Save token in localStorage and update authentication state\n                    localStorage.setItem(\"token\", result);\n                    setIsAuthenticated(true); // Update parent component to indicate user is logged in\n                    setMessage(\"Login Successful!\");\n                } else {\n                    setMessage(result.message || \"Signup successful!\");\n                }\n            } else {\n                setMessage(result.error || \"Something went wrong.\");\n            }\n        } catch (error) {\n            setMessage(\"Error connecting to server.\");\n            console.error(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"form-box\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: isLogin ? \"Login\" : \"Signup\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        !isLogin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-box\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        name: \"name\",\n                                        placeholder: \"Name\",\n                                        value: formData.name,\n                                        onChange: handleChange,\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-box\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"number\",\n                                        name: \"age\",\n                                        placeholder: \"Age\",\n                                        min: \"1\",\n                                        value: formData.age,\n                                        onChange: handleChange,\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-box\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        name: \"highestEducation\",\n                                        placeholder: \"Highest Education\",\n                                        value: formData.highestEducation,\n                                        onChange: handleChange,\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"input-box\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                name: \"email\",\n                                placeholder: \"Email\",\n                                value: formData.email,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"input-box\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                name: \"password\",\n                                placeholder: \"Password\",\n                                value: formData.password,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                            lineNumber: 123,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"submit-btn\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"message\",\n                    children: message\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                    lineNumber: 137,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"toggle-text\",\n                    children: [\n                        isLogin ? \"Don't have an account?\" : \"Already have an account?\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleToggle,\n                            className: \"toggle-btn\",\n                            children: isLogin ? \"Sign Up\" : \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                            lineNumber: 140,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n                    lineNumber: 138,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\auth\\\\Auth.jsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Auth, \"TjKySEq0KTQv2stupJPmT1Hr6cE=\");\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNwQjtBQUVwQixNQUFNRSxPQUFPO1FBQUMsRUFBRUMsa0JBQWtCLEVBQUU7O0lBQ2xDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQyxPQUFPLGtDQUFrQztJQUNoRixNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7UUFDdkNPLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLEtBQUs7UUFDTEMsa0JBQWtCO0lBQ3BCO0lBQ0EsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1jLGVBQWU7UUFDbkJWLFdBQVcsQ0FBQ0Q7UUFDWkcsWUFBWTtZQUFFQyxNQUFNO1lBQUlDLE9BQU87WUFBSUMsVUFBVTtZQUFJQyxLQUFLO1lBQUlDLGtCQUFrQjtRQUFHLElBQUksYUFBYTtRQUNoR0UsV0FBVyxLQUFLLGdCQUFnQjtJQUNsQztJQUVBLE1BQU1FLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFVCxJQUFJLEVBQUVVLEtBQUssRUFBRSxHQUFHRCxFQUFFRSxNQUFNO1FBQ2hDWixZQUFZLENBQUNhLE9BQVU7Z0JBQ3JCLEdBQUdBLElBQUk7Z0JBQ1AsQ0FBQ1osS0FBSyxFQUFFVTtZQUNWO0lBQ0Y7SUFFQSxNQUFNRyxlQUFlLE9BQU9KO1FBQzFCQSxFQUFFSyxjQUFjO1FBRWhCLE1BQU1DLE1BQU1uQixVQUFVLG9CQUFvQjtRQUUxQyxNQUFNb0IsVUFBVXBCLFVBQ1o7WUFBRUssT0FBT0gsU0FBU0csS0FBSztZQUFFQyxVQUFVSixTQUFTSSxRQUFRO1FBQUMsSUFDckQ7WUFDRUYsTUFBTUYsU0FBU0UsSUFBSTtZQUNuQkMsT0FBT0gsU0FBU0csS0FBSztZQUNyQkMsVUFBVUosU0FBU0ksUUFBUTtZQUMzQkMsS0FBS0wsU0FBU0ssR0FBRztZQUNqQkMsa0JBQWtCTixTQUFTTSxnQkFBZ0I7UUFDN0M7UUFFSixJQUFJO1lBQ0YsTUFBTWEsV0FBVyxNQUFNQyxNQUFNSCxLQUFLO2dCQUNoQ0ksUUFBUTtnQkFDUkMsU0FBUztvQkFBRSxnQkFBZ0I7Z0JBQW1CO2dCQUM5Q0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUDtZQUN2QjtZQUVBLE1BQU1RLFNBQVMsTUFBTVAsU0FBU1EsSUFBSTtZQUVsQyxJQUFJUixTQUFTUyxFQUFFLEVBQUU7Z0JBQ2YsSUFBSTlCLFNBQVM7b0JBQ1gsNkRBQTZEO29CQUM3RCtCLGFBQWFDLE9BQU8sQ0FBQyxTQUFTSjtvQkFDOUI3QixtQkFBbUIsT0FBTyx3REFBd0Q7b0JBQ2xGVyxXQUFXO2dCQUdiLE9BQU87b0JBQ0xBLFdBQVdrQixPQUFPbkIsT0FBTyxJQUFJO2dCQUMvQjtZQUNGLE9BQU87Z0JBQ0xDLFdBQVdrQixPQUFPSyxLQUFLLElBQUk7WUFDN0I7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZHZCLFdBQVc7WUFDWHdCLFFBQVFELEtBQUssQ0FBQyxVQUFVQTtRQUMxQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQzs4QkFBSXJDLFVBQVUsVUFBVTs7Ozs7OzhCQUN6Qiw4REFBQ3NDO29CQUFLQyxVQUFVdEI7O3dCQUNiLENBQUNqQix5QkFDQTs7OENBQ0UsOERBQUNtQztvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0k7d0NBQ0NDLE1BQUs7d0NBQ0xyQyxNQUFLO3dDQUNMc0MsYUFBWTt3Q0FDWjVCLE9BQU9aLFNBQVNFLElBQUk7d0NBQ3BCdUMsVUFBVS9CO3dDQUNWZ0MsUUFBUTs7Ozs7Ozs7Ozs7OENBR1osOERBQUNUO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDSTt3Q0FDQ0MsTUFBSzt3Q0FDTHJDLE1BQUs7d0NBQ0xzQyxhQUFZO3dDQUNaRyxLQUFJO3dDQUNKL0IsT0FBT1osU0FBU0ssR0FBRzt3Q0FDbkJvQyxVQUFVL0I7d0NBQ1ZnQyxRQUFROzs7Ozs7Ozs7Ozs4Q0FHWiw4REFBQ1Q7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNJO3dDQUNDQyxNQUFLO3dDQUNMckMsTUFBSzt3Q0FDTHNDLGFBQVk7d0NBQ1o1QixPQUFPWixTQUFTTSxnQkFBZ0I7d0NBQ2hDbUMsVUFBVS9CO3dDQUNWZ0MsUUFBUTs7Ozs7Ozs7Ozs7OztzQ0FLaEIsOERBQUNUOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDSTtnQ0FDQ0MsTUFBSztnQ0FDTHJDLE1BQUs7Z0NBQ0xzQyxhQUFZO2dDQUNaNUIsT0FBT1osU0FBU0csS0FBSztnQ0FDckJzQyxVQUFVL0I7Z0NBQ1ZnQyxRQUFROzs7Ozs7Ozs7OztzQ0FHWiw4REFBQ1Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNJO2dDQUNDQyxNQUFLO2dDQUNMckMsTUFBSztnQ0FDTHNDLGFBQVk7Z0NBQ1o1QixPQUFPWixTQUFTSSxRQUFRO2dDQUN4QnFDLFVBQVUvQjtnQ0FDVmdDLFFBQVE7Ozs7Ozs7Ozs7O3NDQUdaLDhEQUFDRTs0QkFBT0wsTUFBSzs0QkFBU0wsV0FBVTtzQ0FBYTs7Ozs7Ozs7Ozs7O2dCQUk5QzNCLHlCQUFXLDhEQUFDc0M7b0JBQUVYLFdBQVU7OEJBQVczQjs7Ozs7OzhCQUNwQyw4REFBQ3NDO29CQUFFWCxXQUFVOzt3QkFDVnBDLFVBQVUsMkJBQTJCO3NDQUN0Qyw4REFBQzhDOzRCQUFPRSxTQUFTckM7NEJBQWN5QixXQUFVO3NDQUN0Q3BDLFVBQVUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkM7R0EvSU1GO0tBQUFBO0FBaUpOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aC5qc3g/YTNhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9hdXRoLmNzc1wiO1xyXG5cclxuY29uc3QgQXV0aCA9ICh7IHNldElzQXV0aGVudGljYXRlZCB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7IC8vIFRvZ2dsZSBiZXR3ZWVuIGxvZ2luIGFuZCBzaWdudXBcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgYWdlOiBcIlwiLFxyXG4gICAgaGlnaGVzdEVkdWNhdGlvbjogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2dpbighaXNMb2dpbik7XHJcbiAgICBzZXRGb3JtRGF0YSh7IG5hbWU6IFwiXCIsIGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiwgYWdlOiBcIlwiLCBoaWdoZXN0RWR1Y2F0aW9uOiBcIlwiIH0pOyAvLyBSZXNldCBmb3JtXHJcbiAgICBzZXRNZXNzYWdlKFwiXCIpOyAvLyBSZXNldCBtZXNzYWdlXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybURhdGEoKHByZXYpID0+ICh7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB1cmwgPSBpc0xvZ2luID8gXCIvYXBpL2F1dGgvbG9naW5cIiA6IFwiL2FwaS9hdXRoL3NpZ251cFwiO1xyXG5cclxuICAgIGNvbnN0IHBheWxvYWQgPSBpc0xvZ2luXHJcbiAgICAgID8geyBlbWFpbDogZm9ybURhdGEuZW1haWwsIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCB9XHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgbmFtZTogZm9ybURhdGEubmFtZSxcclxuICAgICAgICAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCxcclxuICAgICAgICAgIGFnZTogZm9ybURhdGEuYWdlLFxyXG4gICAgICAgICAgaGlnaGVzdEVkdWNhdGlvbjogZm9ybURhdGEuaGlnaGVzdEVkdWNhdGlvbixcclxuICAgICAgICB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgaWYgKGlzTG9naW4pIHtcclxuICAgICAgICAgIC8vIFNhdmUgdG9rZW4gaW4gbG9jYWxTdG9yYWdlIGFuZCB1cGRhdGUgYXV0aGVudGljYXRpb24gc3RhdGVcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzdWx0KTtcclxuICAgICAgICAgIHNldElzQXV0aGVudGljYXRlZCh0cnVlKTsgLy8gVXBkYXRlIHBhcmVudCBjb21wb25lbnQgdG8gaW5kaWNhdGUgdXNlciBpcyBsb2dnZWQgaW5cclxuICAgICAgICAgIHNldE1lc3NhZ2UoXCJMb2dpbiBTdWNjZXNzZnVsIVwiKTtcclxuICAgICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0TWVzc2FnZShyZXN1bHQubWVzc2FnZSB8fCBcIlNpZ251cCBzdWNjZXNzZnVsIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShyZXN1bHQuZXJyb3IgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJFcnJvciBjb25uZWN0aW5nIHRvIHNlcnZlci5cIik7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYm94XCI+XHJcbiAgICAgICAgPGgyPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJTaWdudXBcIn08L2gyPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgeyFpc0xvZ2luICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdlXCJcclxuICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaGlnaGVzdEVkdWNhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGlnaGVzdCBFZHVjYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuaGlnaGVzdEVkdWNhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic3VibWl0LWJ0blwiPlxyXG4gICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICB7bWVzc2FnZSAmJiA8cCBjbGFzc05hbWU9XCJtZXNzYWdlXCI+e21lc3NhZ2V9PC9wPn1cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b2dnbGUtdGV4dFwiPlxyXG4gICAgICAgICAge2lzTG9naW4gPyBcIkRvbid0IGhhdmUgYW4gYWNjb3VudD9cIiA6IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XCJ9XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0gY2xhc3NOYW1lPVwidG9nZ2xlLWJ0blwiPlxyXG4gICAgICAgICAgICB7aXNMb2dpbiA/IFwiU2lnbiBVcFwiIDogXCJMb2dpblwifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF1dGgiLCJzZXRJc0F1dGhlbnRpY2F0ZWQiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImFnZSIsImhpZ2hlc3RFZHVjYXRpb24iLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZVRvZ2dsZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsInBheWxvYWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0IiwianNvbiIsIm9rIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwibWluIiwiYnV0dG9uIiwicCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/Auth.jsx\n"));

/***/ })

});