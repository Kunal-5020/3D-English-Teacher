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

/***/ "(app-pages-browser)/./src/components/pages/lessons.jsx":
/*!******************************************!*\
  !*** ./src/components/pages/lessons.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Experience2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Experience2 */ \"(app-pages-browser)/./src/components/Experience2.jsx\");\n/* harmony import */ var _lessons_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lessons.css */ \"(app-pages-browser)/./src/components/pages/lessons.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n// Predefined data variable for lesson files\nconst data = {\n    English: {\n        1: {\n            audioFiles: [\n                \"/assets/English/1/audio/1.mp3\"\n            ],\n            textFiles: [\n                \"/assets/English/1/text/1.txt\"\n            ]\n        }\n    },\n    Hindi: {\n        1: {\n            audioFiles: [\n                \"/assets/Hindi/1/audio/1.1.mp3\",\n                \"/assets/Hindi/1/audio/1.2.mp3\"\n            ],\n            textFiles: [\n                \"/assets/Hindi/1/text/1.1.txt\",\n                \"/assets/Hindi/1/text/1.2.txt\"\n            ]\n        }\n    }\n};\nconst Lessons = ()=>{\n    _s();\n    const lessons = Array.from({\n        length: 90\n    }, (_, i)=>\"Lesson \".concat(i + 1));\n    const [lessonInfo, setLessonInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [lessonData, setLessonData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLessonStarted, setIsLessonStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isPaused, setIsPaused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Track whether the lesson is paused\n    const [showEndPopup, setShowEndPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Show the end popup after audio ends\n    // Function to fetch text and audio files' content\n    const fetchLessonData = async (language, lessonNumber)=>{\n        try {\n            var _data_language;\n            // Fetch files from predefined `data` variable\n            const lessonContent = (_data_language = data[language]) === null || _data_language === void 0 ? void 0 : _data_language[lessonNumber];\n            if (!lessonContent) {\n                throw new Error(\"Lesson data not found.\");\n            }\n            // Fetch text file content\n            const textContents = await Promise.all(lessonContent.textFiles.map(async (textFile)=>{\n                const response = await fetch(textFile);\n                if (!response.ok) throw new Error(\"Failed to fetch \".concat(textFile));\n                return response.text(); // Get text content\n            }));\n            // Fetch audio file content\n            const audioContents = await Promise.all(lessonContent.audioFiles.map(async (audioFile)=>{\n                const response = await fetch(audioFile);\n                if (!response.ok) throw new Error(\"Failed to fetch \".concat(audioFile));\n                const blob = await response.blob(); // Get audio as Blob\n                return URL.createObjectURL(blob); // Create URL for Blob\n            }));\n            // Return processed lesson data\n            return {\n                textFiles: textContents,\n                audioFiles: audioContents\n            };\n        } catch (error) {\n            console.error(\"Error fetching lesson data: \", error);\n            return null;\n        }\n    };\n    // Function to handle button click\n    const handleButtonClick = async (language, lessonNumber)=>{\n        const data = await fetchLessonData(language, lessonNumber);\n        if (data) {\n            setLessonData(data);\n            setLessonInfo(\"\".concat(language, \"-Lesson \").concat(lessonNumber)); // Format lesson info\n            setIsLessonStarted(false); // Reset lesson start state\n            setShowEndPopup(false); // Hide the end popup when loading new lesson\n        } else {\n            alert(\"Failed to load lesson data.\");\n        }\n    };\n    // Function to handle start/pause toggle\n    const toggleAudio = ()=>{\n        if (isLessonStarted) {\n            setIsPaused(!isPaused);\n        } else {\n            setIsLessonStarted(true);\n        }\n    };\n    // Handle the end of the audio and show the end popup\n    const handleAudioEnd = ()=>{\n        setShowEndPopup(true);\n    };\n    // Function to restart the lesson\n    const restartLesson = ()=>{\n        setShowEndPopup(false);\n        setIsLessonStarted(false);\n        setIsPaused(false);\n    };\n    // Function to return to the dashboard\n    const returnToDashboard = ()=>{\n        setLessonInfo(null); // Go back to the lesson selection screen\n        setLessonData(null); // Clear the lesson data\n    };\n    return lessonInfo === null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"lessons-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"lessons-heading\",\n                children: \"Lessons\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lessons-grid\",\n                children: lessons.map((lesson, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lesson-card\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: lesson\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                                lineNumber: 125,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Click the button below to start this lesson.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                                lineNumber: 126,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"button-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"play-button\",\n                                        onClick: ()=>handleButtonClick(\"English\", index + 1),\n                                        children: \"English\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"play-button\",\n                                        onClick: ()=>handleButtonClick(\"Hindi\", index + 1),\n                                        children: \"Hindi\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                                lineNumber: 127,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                lineNumber: 122,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n        lineNumber: 120,\n        columnNumber: 9\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"start-pause-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"start-pause-button\",\n                    onClick: toggleAudio,\n                    children: isLessonStarted ? isPaused ? \"Resume\" : \"Pause\" : \"Start Lesson\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                    lineNumber: 149,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                lineNumber: 148,\n                columnNumber: 13\n            }, undefined),\n            isLessonStarted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Experience2__WEBPACK_IMPORTED_MODULE_2__.Experience, {\n                lesson: lessonData,\n                lessonInfo: lessonInfo,\n                onAudioEnd: handleAudioEnd,\n                isPaused: isPaused\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                lineNumber: 156,\n                columnNumber: 17\n            }, undefined),\n            showEndPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"end-popup\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lesson completed!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                        lineNumber: 167,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: returnToDashboard,\n                        children: \"Return to Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                        lineNumber: 168,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: restartLesson,\n                        children: \"Restart Lesson\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                        lineNumber: 169,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\pages\\\\lessons.jsx\",\n                lineNumber: 166,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Lessons, \"XQV3KzqHw2HtQbqJhSynYBgdU9g=\");\n_c = Lessons;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lessons);\nvar _c;\n$RefreshReg$(_c, \"Lessons\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2xlc3NvbnMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1EO0FBQ1A7QUFDckI7QUFFdkIsNENBQTRDO0FBQzVDLE1BQU1JLE9BQU87SUFDVEMsU0FBUztRQUNMLEdBQUc7WUFDQ0MsWUFBWTtnQkFDUjthQUNIO1lBQ0RDLFdBQVc7Z0JBQ1A7YUFDSDtRQUNMO0lBQ0o7SUFDQUMsT0FBTztRQUNILEdBQUc7WUFDQ0YsWUFBWTtnQkFDUjtnQkFDQTthQUNIO1lBQ0RDLFdBQVc7Z0JBQ1A7Z0JBQ0E7YUFDSDtRQUNMO0lBQ0o7QUFDSjtBQUVBLE1BQU1FLFVBQVU7O0lBQ1osTUFBTUMsVUFBVUMsTUFBTUMsSUFBSSxDQUFDO1FBQUVDLFFBQVE7SUFBRyxHQUFHLENBQUNDLEdBQUdDLElBQU0sVUFBZ0IsT0FBTkEsSUFBSTtJQUNuRSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2lCLFlBQVlDLGNBQWMsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ21CLGlCQUFpQkMsbUJBQW1CLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNxQixVQUFVQyxZQUFZLEdBQUd0QiwrQ0FBUUEsQ0FBQyxRQUFRLHFDQUFxQztJQUN0RixNQUFNLENBQUN1QixjQUFjQyxnQkFBZ0IsR0FBR3hCLCtDQUFRQSxDQUFDLFFBQVEsc0NBQXNDO0lBRS9GLGtEQUFrRDtJQUNsRCxNQUFNeUIsa0JBQWtCLE9BQU9DLFVBQVVDO1FBQ3JDLElBQUk7Z0JBRXNCeEI7WUFEdEIsOENBQThDO1lBQzlDLE1BQU15QixpQkFBZ0J6QixpQkFBQUEsSUFBSSxDQUFDdUIsU0FBUyxjQUFkdkIscUNBQUFBLGNBQWdCLENBQUN3QixhQUFhO1lBQ3BELElBQUksQ0FBQ0MsZUFBZTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ3BCO1lBRUEsMEJB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WUFBWVo7Z0JBQ1o1QixVQUFVQTs7Ozs7O1lBS2pCRSw4QkFDRyw4REFBQzZCO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0s7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0M7d0JBQU9DLFNBQVNUO2tDQUFtQjs7Ozs7O2tDQUNwQyw4REFBQ1E7d0JBQU9DLFNBQVNWO2tDQUFlOzs7Ozs7Ozs7Ozs7OztBQUtwRDtHQS9JTTFDO0tBQUFBO0FBaUpOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2xlc3NvbnMuanN4P2YxZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEV4cGVyaWVuY2UgfSBmcm9tICcuLi9FeHBlcmllbmNlMic7XHJcbmltcG9ydCAnLi9sZXNzb25zLmNzcyc7XHJcblxyXG4vLyBQcmVkZWZpbmVkIGRhdGEgdmFyaWFibGUgZm9yIGxlc3NvbiBmaWxlc1xyXG5jb25zdCBkYXRhID0ge1xyXG4gICAgRW5nbGlzaDoge1xyXG4gICAgICAgIDE6IHtcclxuICAgICAgICAgICAgYXVkaW9GaWxlczogW1xyXG4gICAgICAgICAgICAgICAgXCIvYXNzZXRzL0VuZ2xpc2gvMS9hdWRpby8xLm1wM1wiLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB0ZXh0RmlsZXM6IFtcclxuICAgICAgICAgICAgICAgIFwiL2Fzc2V0cy9FbmdsaXNoLzEvdGV4dC8xLnR4dFwiLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgSGluZGk6IHtcclxuICAgICAgICAxOiB7XHJcbiAgICAgICAgICAgIGF1ZGlvRmlsZXM6IFtcclxuICAgICAgICAgICAgICAgIFwiL2Fzc2V0cy9IaW5kaS8xL2F1ZGlvLzEuMS5tcDNcIixcclxuICAgICAgICAgICAgICAgIFwiL2Fzc2V0cy9IaW5kaS8xL2F1ZGlvLzEuMi5tcDNcIixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdGV4dEZpbGVzOiBbXHJcbiAgICAgICAgICAgICAgICBcIi9hc3NldHMvSGluZGkvMS90ZXh0LzEuMS50eHRcIixcclxuICAgICAgICAgICAgICAgIFwiL2Fzc2V0cy9IaW5kaS8xL3RleHQvMS4yLnR4dFwiLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgTGVzc29ucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxlc3NvbnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA5MCB9LCAoXywgaSkgPT4gYExlc3NvbiAke2kgKyAxfWApO1xyXG4gICAgY29uc3QgW2xlc3NvbkluZm8sIHNldExlc3NvbkluZm9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbGVzc29uRGF0YSwgc2V0TGVzc29uRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtpc0xlc3NvblN0YXJ0ZWQsIHNldElzTGVzc29uU3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNQYXVzZWQsIHNldElzUGF1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gVHJhY2sgd2hldGhlciB0aGUgbGVzc29uIGlzIHBhdXNlZFxyXG4gICAgY29uc3QgW3Nob3dFbmRQb3B1cCwgc2V0U2hvd0VuZFBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gU2hvdyB0aGUgZW5kIHBvcHVwIGFmdGVyIGF1ZGlvIGVuZHNcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byBmZXRjaCB0ZXh0IGFuZCBhdWRpbyBmaWxlcycgY29udGVudFxyXG4gICAgY29uc3QgZmV0Y2hMZXNzb25EYXRhID0gYXN5bmMgKGxhbmd1YWdlLCBsZXNzb25OdW1iZXIpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBGZXRjaCBmaWxlcyBmcm9tIHByZWRlZmluZWQgYGRhdGFgIHZhcmlhYmxlXHJcbiAgICAgICAgICAgIGNvbnN0IGxlc3NvbkNvbnRlbnQgPSBkYXRhW2xhbmd1YWdlXT8uW2xlc3Nvbk51bWJlcl07XHJcbiAgICAgICAgICAgIGlmICghbGVzc29uQ29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMZXNzb24gZGF0YSBub3QgZm91bmQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZldGNoIHRleHQgZmlsZSBjb250ZW50XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRDb250ZW50cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICAgICAgbGVzc29uQ29udGVudC50ZXh0RmlsZXMubWFwKGFzeW5jICh0ZXh0RmlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGV4dEZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoICR7dGV4dEZpbGV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTsgLy8gR2V0IHRleHQgY29udGVudFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZldGNoIGF1ZGlvIGZpbGUgY29udGVudFxyXG4gICAgICAgICAgICBjb25zdCBhdWRpb0NvbnRlbnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgICAgICBsZXNzb25Db250ZW50LmF1ZGlvRmlsZXMubWFwKGFzeW5jIChhdWRpb0ZpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGF1ZGlvRmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggJHthdWRpb0ZpbGV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTsgLy8gR2V0IGF1ZGlvIGFzIEJsb2JcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTsgLy8gQ3JlYXRlIFVSTCBmb3IgQmxvYlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJldHVybiBwcm9jZXNzZWQgbGVzc29uIGRhdGFcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRleHRGaWxlczogdGV4dENvbnRlbnRzLFxyXG4gICAgICAgICAgICAgICAgYXVkaW9GaWxlczogYXVkaW9Db250ZW50cyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBsZXNzb24gZGF0YTogJywgZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBidXR0b24gY2xpY2tcclxuICAgIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gYXN5bmMgKGxhbmd1YWdlLCBsZXNzb25OdW1iZXIpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hMZXNzb25EYXRhKGxhbmd1YWdlLCBsZXNzb25OdW1iZXIpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBzZXRMZXNzb25EYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRMZXNzb25JbmZvKGAke2xhbmd1YWdlfS1MZXNzb24gJHtsZXNzb25OdW1iZXJ9YCk7IC8vIEZvcm1hdCBsZXNzb24gaW5mb1xyXG4gICAgICAgICAgICBzZXRJc0xlc3NvblN0YXJ0ZWQoZmFsc2UpOyAvLyBSZXNldCBsZXNzb24gc3RhcnQgc3RhdGVcclxuICAgICAgICAgICAgc2V0U2hvd0VuZFBvcHVwKGZhbHNlKTsgLy8gSGlkZSB0aGUgZW5kIHBvcHVwIHdoZW4gbG9hZGluZyBuZXcgbGVzc29uXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBsb2FkIGxlc3NvbiBkYXRhLicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHN0YXJ0L3BhdXNlIHRvZ2dsZVxyXG4gICAgY29uc3QgdG9nZ2xlQXVkaW8gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTGVzc29uU3RhcnRlZCkge1xyXG4gICAgICAgICAgICBzZXRJc1BhdXNlZCghaXNQYXVzZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzTGVzc29uU3RhcnRlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEhhbmRsZSB0aGUgZW5kIG9mIHRoZSBhdWRpbyBhbmQgc2hvdyB0aGUgZW5kIHBvcHVwXHJcbiAgICBjb25zdCBoYW5kbGVBdWRpb0VuZCA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93RW5kUG9wdXAodHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEZ1bmN0aW9uIHRvIHJlc3RhcnQgdGhlIGxlc3NvblxyXG4gICAgY29uc3QgcmVzdGFydExlc3NvbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93RW5kUG9wdXAoZmFsc2UpO1xyXG4gICAgICAgIHNldElzTGVzc29uU3RhcnRlZChmYWxzZSk7XHJcbiAgICAgICAgc2V0SXNQYXVzZWQoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBGdW5jdGlvbiB0byByZXR1cm4gdG8gdGhlIGRhc2hib2FyZFxyXG4gICAgY29uc3QgcmV0dXJuVG9EYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TGVzc29uSW5mbyhudWxsKTsgLy8gR28gYmFjayB0byB0aGUgbGVzc29uIHNlbGVjdGlvbiBzY3JlZW5cclxuICAgICAgICBzZXRMZXNzb25EYXRhKG51bGwpOyAvLyBDbGVhciB0aGUgbGVzc29uIGRhdGFcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGxlc3NvbkluZm8gPT09IG51bGwgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXNzb25zLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibGVzc29ucy1oZWFkaW5nXCI+TGVzc29uczwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVzc29ucy1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICB7bGVzc29ucy5tYXAoKGxlc3NvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImxlc3Nvbi1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57bGVzc29ufTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNsaWNrIHRoZSBidXR0b24gYmVsb3cgdG8gc3RhcnQgdGhpcyBsZXNzb24uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbGF5LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soJ0VuZ2xpc2gnLCBpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZ2xpc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYXktYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljaygnSGluZGknLCBpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpbmRpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsvKiBTaG93IHRoZSBzdGFydC9wYXVzZSBidXR0b24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnQtcGF1c2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN0YXJ0LXBhdXNlLWJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZUF1ZGlvfT5cclxuICAgICAgICAgICAgICAgICAgICB7aXNMZXNzb25TdGFydGVkID8gKGlzUGF1c2VkID8gJ1Jlc3VtZScgOiAnUGF1c2UnKSA6ICdTdGFydCBMZXNzb24nfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFNob3cgbGVzc29uIHBsYXliYWNrICovfVxyXG4gICAgICAgICAgICB7aXNMZXNzb25TdGFydGVkICYmIChcclxuICAgICAgICAgICAgICAgIDxFeHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgbGVzc29uPXtsZXNzb25EYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIGxlc3NvbkluZm89e2xlc3NvbkluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgb25BdWRpb0VuZD17aGFuZGxlQXVkaW9FbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQYXVzZWQ9e2lzUGF1c2VkfSAvLyBQYXNzIHRoZSBwYXVzZWQgc3RhdGUgdG8gY29udHJvbCBwbGF5YmFja1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBTaG93IGVuZCBwb3B1cCBhZnRlciB0aGUgYXVkaW8gZW5kcyAqL31cclxuICAgICAgICAgICAge3Nob3dFbmRQb3B1cCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVuZC1wb3B1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkxlc3NvbiBjb21wbGV0ZWQhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmV0dXJuVG9EYXNoYm9hcmR9PlJldHVybiB0byBEYXNoYm9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc3RhcnRMZXNzb259PlJlc3RhcnQgTGVzc29uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZXNzb25zO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkV4cGVyaWVuY2UiLCJkYXRhIiwiRW5nbGlzaCIsImF1ZGlvRmlsZXMiLCJ0ZXh0RmlsZXMiLCJIaW5kaSIsIkxlc3NvbnMiLCJsZXNzb25zIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImkiLCJsZXNzb25JbmZvIiwic2V0TGVzc29uSW5mbyIsImxlc3NvbkRhdGEiLCJzZXRMZXNzb25EYXRhIiwiaXNMZXNzb25TdGFydGVkIiwic2V0SXNMZXNzb25TdGFydGVkIiwiaXNQYXVzZWQiLCJzZXRJc1BhdXNlZCIsInNob3dFbmRQb3B1cCIsInNldFNob3dFbmRQb3B1cCIsImZldGNoTGVzc29uRGF0YSIsImxhbmd1YWdlIiwibGVzc29uTnVtYmVyIiwibGVzc29uQ29udGVudCIsIkVycm9yIiwidGV4dENvbnRlbnRzIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInRleHRGaWxlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwidGV4dCIsImF1ZGlvQ29udGVudHMiLCJhdWRpb0ZpbGUiLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJhbGVydCIsInRvZ2dsZUF1ZGlvIiwiaGFuZGxlQXVkaW9FbmQiLCJyZXN0YXJ0TGVzc29uIiwicmV0dXJuVG9EYXNoYm9hcmQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImxlc3NvbiIsImluZGV4IiwiaDMiLCJwIiwiYnV0dG9uIiwib25DbGljayIsIm9uQXVkaW9FbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/pages/lessons.jsx\n"));

/***/ })

});