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

/***/ "(app-pages-browser)/./src/components/Teacher.jsx":
/*!************************************!*\
  !*** ./src/components/Teacher.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Teacher: function() { return /* binding */ Teacher; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useAITeacher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useAITeacher */ \"(app-pages-browser)/./src/hooks/useAITeacher.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/useGLTF.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/useAnimations.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/web/Html.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-8afac004.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/math/MathUtils */ \"(app-pages-browser)/./node_modules/three/src/math/MathUtils.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ANIMATION_FADE_TIME = 0.5;\nfunction Teacher(param) {\n    let { teacher, ...props } = param;\n    _s();\n    const group = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const { scene } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_3__.useGLTF)(\"/models/Teacher_\".concat(teacher, \".glb\"));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        scene.traverse((child)=>{\n            if (child.material) {\n                child.material = new three__WEBPACK_IMPORTED_MODULE_4__.MeshStandardMaterial({\n                    map: child.material.map\n                });\n            }\n        });\n    }, [\n        scene\n    ]);\n    const currentMessage = (0,_hooks_useAITeacher__WEBPACK_IMPORTED_MODULE_1__.useAITeacher)((state)=>state.currentMessage);\n    const loading = (0,_hooks_useAITeacher__WEBPACK_IMPORTED_MODULE_1__.useAITeacher)((state)=>state.loading);\n    const { animations } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_3__.useGLTF)(\"/models/animations_\".concat(teacher, \".glb\"));\n    const { actions, mixer } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useAnimations)(animations, group);\n    const [animation, setAnimation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Idle\");\n    // Blink effect\n    const [blink, setBlink] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let blinkTimeout;\n        const nextBlink = ()=>{\n            blinkTimeout = setTimeout(()=>{\n                setBlink(true);\n                setTimeout(()=>{\n                    setBlink(false);\n                    nextBlink();\n                }, 100);\n            }, (0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_6__.randInt)(1000, 5000));\n        };\n        nextBlink();\n        return ()=>clearTimeout(blinkTimeout);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (loading) {\n            setAnimation(\"Thinking\");\n        } else if (currentMessage) {\n            setAnimation((0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_6__.randInt)(0, 1) ? \"Talking\" : \"Talking2\");\n        } else {\n            setAnimation(\"Idle\");\n        }\n    }, [\n        currentMessage,\n        loading\n    ]);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_7__.C)(()=>{\n        // Smile\n        lerpMorphTarget(\"mouthSmile\", 0.2, 0.5);\n        // Blinking\n        lerpMorphTarget(\"eye_close\", blink ? 1 : 0, 0.5);\n        // Reset all morph targets before setting new ones\n        for(let i = 0; i <= 21; i++){\n            lerpMorphTarget(i, 0, 0.1);\n        }\n        if (currentMessage && currentMessage.visemes && currentMessage.audioPlayer) {\n            // Process visemes\n            for(let i = currentMessage.visemes.length - 1; i >= 0; i--){\n                const viseme = currentMessage.visemes[i];\n                console.log(viseme);\n                // Check if the current audio time has reached or exceeded the viseme time\n                if (currentMessage.audioPlayer.currentTime * 1000 >= viseme[0]) {\n                    lerpMorphTarget(viseme[1], 1, 0.2); // Apply the viseme's morph target\n                    break; // Stop after applying the most recent viseme\n                }\n            }\n            // Handle animation switching\n            if (actions[animation] && actions[animation].time > actions[animation].getClip().duration - ANIMATION_FADE_TIME) {\n                setAnimation((animation)=>animation === \"Talking\" ? \"Talking2\" : \"Talking\");\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _actions_animation;\n        (_actions_animation = actions[animation]) === null || _actions_animation === void 0 ? void 0 : _actions_animation.reset().fadeIn(mixer.time > 0 ? ANIMATION_FADE_TIME : 0).play();\n        return ()=>{\n            var _actions_animation;\n            (_actions_animation = actions[animation]) === null || _actions_animation === void 0 ? void 0 : _actions_animation.fadeOut(ANIMATION_FADE_TIME);\n        };\n    }, [\n        animation,\n        actions\n    ]);\n    const lerpMorphTarget = function(target, value) {\n        let speed = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.1;\n        scene.traverse((child)=>{\n            if (child.isSkinnedMesh && child.morphTargetDictionary) {\n                const index = child.morphTargetDictionary[target];\n                if (index === undefined || child.morphTargetInfluences[index] === undefined) {\n                    return;\n                }\n                child.morphTargetInfluences[index] = three__WEBPACK_IMPORTED_MODULE_4__.MathUtils.lerp(child.morphTargetInfluences[index], value, speed);\n            }\n        });\n    };\n    const [thinkingText, setThinkingText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\".\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (loading) {\n            const interval = setInterval(()=>{\n                setThinkingText((thinkingText)=>{\n                    if (thinkingText.length === 3) {\n                        return \".\";\n                    }\n                    return thinkingText + \".\";\n                });\n            }, 500);\n            return ()=>clearInterval(interval);\n        }\n    }, [\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n        ...props,\n        dispose: null,\n        ref: group,\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.Html, {\n                \"position-y\": teacher === \"Nanami\" ? 1.6 : 1.8,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center items-center -translate-x-1/2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"relative flex h-8 w-8 items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\Teacher.jsx\",\n                                lineNumber: 146,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"relative inline-flex items-center justify-center duration-75 rounded-full h-8 w-8 bg-white/80\",\n                                children: thinkingText\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\Teacher.jsx\",\n                                lineNumber: 147,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\Teacher.jsx\",\n                        lineNumber: 145,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\Teacher.jsx\",\n                    lineNumber: 144,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\Teacher.jsx\",\n                lineNumber: 143,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n                object: scene\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\Teacher.jsx\",\n                lineNumber: 154,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kunal\\\\OneDrive\\\\Desktop\\\\test2\\\\3D-English-Teacher\\\\src\\\\components\\\\Teacher.jsx\",\n        lineNumber: 141,\n        columnNumber: 5\n    }, this);\n}\n_s(Teacher, \"miv3jzgI2hfRbZy3ajOuBbsGjdY=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_3__.useGLTF,\n        _hooks_useAITeacher__WEBPACK_IMPORTED_MODULE_1__.useAITeacher,\n        _hooks_useAITeacher__WEBPACK_IMPORTED_MODULE_1__.useAITeacher,\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_3__.useGLTF,\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useAnimations,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_7__.C\n    ];\n});\n_c = Teacher;\n_hooks_useAITeacher__WEBPACK_IMPORTED_MODULE_1__.teachers.forEach((teacher)=>{\n    _react_three_drei__WEBPACK_IMPORTED_MODULE_3__.useGLTF.preload(\"/models/Teacher_\".concat(teacher, \".glb\"));\n    _react_three_drei__WEBPACK_IMPORTED_MODULE_3__.useGLTF.preload(\"/models/animations_\".concat(teacher, \".glb\"));\n});\nvar _c;\n$RefreshReg$(_c, \"Teacher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RlYWNoZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDRztBQUNuQjtBQUNNO0FBQ0k7QUFDTDtBQUVuRCxNQUFNWSxzQkFBc0I7QUFFckIsU0FBU0MsUUFBUSxLQUFxQjtRQUFyQixFQUFFQyxPQUFPLEVBQUUsR0FBR0MsT0FBTyxHQUFyQjs7SUFDdEIsTUFBTUMsUUFBUVQsNkNBQU1BO0lBQ3BCLE1BQU0sRUFBRVUsS0FBSyxFQUFFLEdBQUdiLDBEQUFPQSxDQUFDLG1CQUEyQixPQUFSVSxTQUFRO0lBRXJEUixnREFBU0EsQ0FBQztRQUNSVyxNQUFNQyxRQUFRLENBQUMsQ0FBQ0M7WUFDZCxJQUFJQSxNQUFNQyxRQUFRLEVBQUU7Z0JBQ2xCRCxNQUFNQyxRQUFRLEdBQUcsSUFBSVYsdURBQW9CQSxDQUFDO29CQUN4Q1csS0FBS0YsTUFBTUMsUUFBUSxDQUFDQyxHQUFHO2dCQUN6QjtZQUNGO1FBQ0Y7SUFDRixHQUFHO1FBQUNKO0tBQU07SUFFVixNQUFNSyxpQkFBaUJyQixpRUFBWUEsQ0FBQyxDQUFDc0IsUUFBVUEsTUFBTUQsY0FBYztJQUNuRSxNQUFNRSxVQUFVdkIsaUVBQVlBLENBQUMsQ0FBQ3NCLFFBQVVBLE1BQU1DLE9BQU87SUFDckQsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR3JCLDBEQUFPQSxDQUFDLHNCQUE4QixPQUFSVSxTQUFRO0lBQzdELE1BQU0sRUFBRVksT0FBTyxFQUFFQyxLQUFLLEVBQUUsR0FBR3hCLGdFQUFhQSxDQUFDc0IsWUFBWVQ7SUFDckQsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUUzQyxlQUFlO0lBQ2YsTUFBTSxDQUFDc0IsT0FBT0MsU0FBUyxHQUFHdkIsK0NBQVFBLENBQUM7SUFFbkNGLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSTBCO1FBQ0osTUFBTUMsWUFBWTtZQUNoQkQsZUFBZUUsV0FB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QixDQUFDRDtvQkFDZixJQUFJQSxhQUFhckIsTUFBTSxLQUFLLEdBQUc7d0JBQzdCLE9BQU87b0JBQ1Q7b0JBQ0EsT0FBT3FCLGVBQWU7Z0JBQ3hCO1lBQ0YsR0FBRztZQUNILE9BQU8sSUFBTUksY0FBY0Y7UUFDN0I7SUFDRixHQUFHO1FBQUN2QztLQUFRO0lBRVoscUJBQ0UsOERBQUNSO1FBQU8sR0FBR0QsS0FBSztRQUFFbUQsU0FBUztRQUFNQyxLQUFLbkQ7O1lBQ25DUSx5QkFDQyw4REFBQ3RCLG1EQUFJQTtnQkFBQ2tFLGNBQVl0RCxZQUFZLFdBQVcsTUFBTTswQkFDN0MsNEVBQUN1RDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUtELFdBQVU7OzBDQUNkLDhEQUFDQztnQ0FBS0QsV0FBVTs7Ozs7OzBDQUNoQiw4REFBQ0M7Z0NBQUtELFdBQVU7MENBQ2JUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1YLDhEQUFDVztnQkFBVUMsUUFBUXhEOzs7Ozs7Ozs7Ozs7QUFHekI7R0FuSmdCSjs7UUFFSVQsc0RBQU9BO1FBWUZILDZEQUFZQTtRQUNuQkEsNkRBQVlBO1FBQ0xHLHNEQUFPQTtRQUNIRCw0REFBYUE7UUErQnhDRSxpREFBUUE7OztLQWhETVE7QUFxSmhCYix5REFBUUEsQ0FBQzBFLE9BQU8sQ0FBQyxDQUFDNUQ7SUFDaEJWLHNEQUFPQSxDQUFDdUUsT0FBTyxDQUFDLG1CQUEyQixPQUFSN0QsU0FBUTtJQUMzQ1Ysc0RBQU9BLENBQUN1RSxPQUFPLENBQUMsc0JBQThCLE9BQVI3RCxTQUFRO0FBQ2hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RlYWNoZXIuanN4P2JkNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGVhY2hlcnMsIHVzZUFJVGVhY2hlciB9IGZyb20gXCJAL2hvb2tzL3VzZUFJVGVhY2hlclwiO1xyXG5pbXBvcnQgeyBIdG1sLCB1c2VBbmltYXRpb25zLCB1c2VHTFRGIH0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XHJcbmltcG9ydCB7IHVzZUZyYW1lIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWF0aFV0aWxzLCBNZXNoU3RhbmRhcmRNYXRlcmlhbCB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyByYW5kSW50IH0gZnJvbSBcInRocmVlL3NyYy9tYXRoL01hdGhVdGlsc1wiO1xyXG5cclxuY29uc3QgQU5JTUFUSU9OX0ZBREVfVElNRSA9IDAuNTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUZWFjaGVyKHsgdGVhY2hlciwgLi4ucHJvcHMgfSkge1xyXG4gIGNvbnN0IGdyb3VwID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgeyBzY2VuZSB9ID0gdXNlR0xURihgL21vZGVscy9UZWFjaGVyXyR7dGVhY2hlcn0uZ2xiYCk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjZW5lLnRyYXZlcnNlKChjaGlsZCkgPT4ge1xyXG4gICAgICBpZiAoY2hpbGQubWF0ZXJpYWwpIHtcclxuICAgICAgICBjaGlsZC5tYXRlcmlhbCA9IG5ldyBNZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgICBtYXA6IGNoaWxkLm1hdGVyaWFsLm1hcCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW3NjZW5lXSk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRNZXNzYWdlID0gdXNlQUlUZWFjaGVyKChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudE1lc3NhZ2UpO1xyXG4gIGNvbnN0IGxvYWRpbmcgPSB1c2VBSVRlYWNoZXIoKHN0YXRlKSA9PiBzdGF0ZS5sb2FkaW5nKTtcclxuICBjb25zdCB7IGFuaW1hdGlvbnMgfSA9IHVzZUdMVEYoYC9tb2RlbHMvYW5pbWF0aW9uc18ke3RlYWNoZXJ9LmdsYmApO1xyXG4gIGNvbnN0IHsgYWN0aW9ucywgbWl4ZXIgfSA9IHVzZUFuaW1hdGlvbnMoYW5pbWF0aW9ucywgZ3JvdXApO1xyXG4gIGNvbnN0IFthbmltYXRpb24sIHNldEFuaW1hdGlvbl0gPSB1c2VTdGF0ZShcIklkbGVcIik7XHJcblxyXG4gIC8vIEJsaW5rIGVmZmVjdFxyXG4gIGNvbnN0IFtibGluaywgc2V0QmxpbmtdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGJsaW5rVGltZW91dDtcclxuICAgIGNvbnN0IG5leHRCbGluayA9ICgpID0+IHtcclxuICAgICAgYmxpbmtUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0QmxpbmsodHJ1ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRCbGluayhmYWxzZSk7XHJcbiAgICAgICAgICBuZXh0QmxpbmsoKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgICB9LCByYW5kSW50KDEwMDAsIDUwMDApKTtcclxuICAgIH07XHJcbiAgICBuZXh0QmxpbmsoKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoYmxpbmtUaW1lb3V0KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICBzZXRBbmltYXRpb24oXCJUaGlua2luZ1wiKTtcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudE1lc3NhZ2UpIHtcclxuICAgICAgc2V0QW5pbWF0aW9uKHJhbmRJbnQoMCwgMSkgPyBcIlRhbGtpbmdcIiA6IFwiVGFsa2luZzJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRBbmltYXRpb24oXCJJZGxlXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtjdXJyZW50TWVzc2FnZSwgbG9hZGluZ10pO1xyXG5cclxuICB1c2VGcmFtZSgoKSA9PiB7ICAvLyB7Y2FtZXJhfVxyXG4gICAgLy8gU21pbGVcclxuICAgIGxlcnBNb3JwaFRhcmdldChcIm1vdXRoU21pbGVcIiwgMC4yLCAwLjUpO1xyXG4gICAgLy8gQmxpbmtpbmdcclxuICAgIGxlcnBNb3JwaFRhcmdldChcImV5ZV9jbG9zZVwiLCBibGluayA/IDEgOiAwLCAwLjUpO1xyXG5cclxuICAgIC8vIFJlc2V0IGFsbCBtb3JwaCB0YXJnZXRzIGJlZm9yZSBzZXR0aW5nIG5ldyBvbmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAyMTsgaSsrKSB7XHJcbiAgICAgIGxlcnBNb3JwaFRhcmdldChpLCAwLCAwLjEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoY3VycmVudE1lc3NhZ2UgJiYgY3VycmVudE1lc3NhZ2UudmlzZW1lcyAmJiBjdXJyZW50TWVzc2FnZS5hdWRpb1BsYXllcikge1xyXG4gICAgICAvLyBQcm9jZXNzIHZpc2VtZXNcclxuICAgICAgZm9yIChsZXQgaSA9IGN1cnJlbnRNZXNzYWdlLnZpc2VtZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCB2aXNlbWUgPSBjdXJyZW50TWVzc2FnZS52aXNlbWVzW2ldO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpc2VtZSk7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgYXVkaW8gdGltZSBoYXMgcmVhY2hlZCBvciBleGNlZWRlZCB0aGUgdmlzZW1lIHRpbWVcclxuICAgICAgICBpZiAoY3VycmVudE1lc3NhZ2UuYXVkaW9QbGF5ZXIuY3VycmVudFRpbWUgKiAxMDAwID49IHZpc2VtZVswXSkge1xyXG4gICAgICAgICAgbGVycE1vcnBoVGFyZ2V0KHZpc2VtZVsxXSwgMSwgMC4yKTsgLy8gQXBwbHkgdGhlIHZpc2VtZSdzIG1vcnBoIHRhcmdldFxyXG4gICAgICAgICAgYnJlYWs7IC8vIFN0b3AgYWZ0ZXIgYXBwbHlpbmcgdGhlIG1vc3QgcmVjZW50IHZpc2VtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC8vIEhhbmRsZSBhbmltYXRpb24gc3dpdGNoaW5nXHJcbiAgICAgIGlmIChcclxuICAgICAgICBhY3Rpb25zW2FuaW1hdGlvbl0gJiZcclxuICAgICAgICBhY3Rpb25zW2FuaW1hdGlvbl0udGltZSA+XHJcbiAgICAgICAgICBhY3Rpb25zW2FuaW1hdGlvbl0uZ2V0Q2xpcCgpLmR1cmF0aW9uIC0gQU5JTUFUSU9OX0ZBREVfVElNRVxyXG4gICAgICApIHtcclxuICAgICAgICBzZXRBbmltYXRpb24oKGFuaW1hdGlvbikgPT5cclxuICAgICAgICAgIGFuaW1hdGlvbiA9PT0gXCJUYWxraW5nXCIgPyBcIlRhbGtpbmcyXCIgOiBcIlRhbGtpbmdcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWN0aW9uc1thbmltYXRpb25dXHJcbiAgICAgID8ucmVzZXQoKVxyXG4gICAgICAuZmFkZUluKG1peGVyLnRpbWUgPiAwID8gQU5JTUFUSU9OX0ZBREVfVElNRSA6IDApXHJcbiAgICAgIC5wbGF5KCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBhY3Rpb25zW2FuaW1hdGlvbl0/LmZhZGVPdXQoQU5JTUFUSU9OX0ZBREVfVElNRSk7XHJcbiAgICB9O1xyXG4gIH0sIFthbmltYXRpb24sIGFjdGlvbnNdKTtcclxuXHJcbiAgY29uc3QgbGVycE1vcnBoVGFyZ2V0ID0gKHRhcmdldCwgdmFsdWUsIHNwZWVkID0gMC4xKSA9PiB7XHJcbiAgICBzY2VuZS50cmF2ZXJzZSgoY2hpbGQpID0+IHtcclxuICAgICAgaWYgKGNoaWxkLmlzU2tpbm5lZE1lc2ggJiYgY2hpbGQubW9ycGhUYXJnZXREaWN0aW9uYXJ5KSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjaGlsZC5tb3JwaFRhcmdldERpY3Rpb25hcnlbdGFyZ2V0XTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBpbmRleCA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICBjaGlsZC5tb3JwaFRhcmdldEluZmx1ZW5jZXNbaW5kZXhdID09PSB1bmRlZmluZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hpbGQubW9ycGhUYXJnZXRJbmZsdWVuY2VzW2luZGV4XSA9IE1hdGhVdGlscy5sZXJwKFxyXG4gICAgICAgICAgY2hpbGQubW9ycGhUYXJnZXRJbmZsdWVuY2VzW2luZGV4XSxcclxuICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgc3BlZWRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbdGhpbmtpbmdUZXh0LCBzZXRUaGlua2luZ1RleHRdID0gdXNlU3RhdGUoXCIuXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGhpbmtpbmdUZXh0KCh0aGlua2luZ1RleHQpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlua2luZ1RleHQubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIi5cIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0aGlua2luZ1RleHQgKyBcIi5cIjtcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG4gIH0sIFtsb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Z3JvdXAgey4uLnByb3BzfSBkaXNwb3NlPXtudWxsfSByZWY9e2dyb3VwfT5cclxuICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgIDxIdG1sIHBvc2l0aW9uLXk9e3RlYWNoZXIgPT09IFwiTmFuYW1pXCIgPyAxLjYgOiAxLjh9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAtdHJhbnNsYXRlLXgtMS8yXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaC04IHctOCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmltYXRlLXBpbmcgYWJzb2x1dGUgaW5saW5lLWZsZXggaC1mdWxsIHctZnVsbCByb3VuZGVkLWZ1bGwgYmctd2hpdGUgb3BhY2l0eS03NVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZHVyYXRpb24tNzUgcm91bmRlZC1mdWxsIGgtOCB3LTggYmctd2hpdGUvODBcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlua2luZ1RleHR9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0h0bWw+XHJcbiAgICAgICl9XHJcbiAgICAgIDxwcmltaXRpdmUgb2JqZWN0PXtzY2VuZX0gLz5cclxuICAgIDwvZ3JvdXA+XHJcbiAgKTtcclxufVxyXG5cclxudGVhY2hlcnMuZm9yRWFjaCgodGVhY2hlcikgPT4ge1xyXG4gIHVzZUdMVEYucHJlbG9hZChgL21vZGVscy9UZWFjaGVyXyR7dGVhY2hlcn0uZ2xiYCk7XHJcbiAgdXNlR0xURi5wcmVsb2FkKGAvbW9kZWxzL2FuaW1hdGlvbnNfJHt0ZWFjaGVyfS5nbGJgKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJ0ZWFjaGVycyIsInVzZUFJVGVhY2hlciIsIkh0bWwiLCJ1c2VBbmltYXRpb25zIiwidXNlR0xURiIsInVzZUZyYW1lIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJNYXRoVXRpbHMiLCJNZXNoU3RhbmRhcmRNYXRlcmlhbCIsInJhbmRJbnQiLCJBTklNQVRJT05fRkFERV9USU1FIiwiVGVhY2hlciIsInRlYWNoZXIiLCJwcm9wcyIsImdyb3VwIiwic2NlbmUiLCJ0cmF2ZXJzZSIsImNoaWxkIiwibWF0ZXJpYWwiLCJtYXAiLCJjdXJyZW50TWVzc2FnZSIsInN0YXRlIiwibG9hZGluZyIsImFuaW1hdGlvbnMiLCJhY3Rpb25zIiwibWl4ZXIiLCJhbmltYXRpb24iLCJzZXRBbmltYXRpb24iLCJibGluayIsInNldEJsaW5rIiwiYmxpbmtUaW1lb3V0IiwibmV4dEJsaW5rIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImxlcnBNb3JwaFRhcmdldCIsImkiLCJ2aXNlbWVzIiwiYXVkaW9QbGF5ZXIiLCJsZW5ndGgiLCJ2aXNlbWUiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRpbWUiLCJ0aW1lIiwiZ2V0Q2xpcCIsImR1cmF0aW9uIiwicmVzZXQiLCJmYWRlSW4iLCJwbGF5IiwiZmFkZU91dCIsInRhcmdldCIsInZhbHVlIiwic3BlZWQiLCJpc1NraW5uZWRNZXNoIiwibW9ycGhUYXJnZXREaWN0aW9uYXJ5IiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJtb3JwaFRhcmdldEluZmx1ZW5jZXMiLCJsZXJwIiwidGhpbmtpbmdUZXh0Iiwic2V0VGhpbmtpbmdUZXh0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXNwb3NlIiwicmVmIiwicG9zaXRpb24teSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJwcmltaXRpdmUiLCJvYmplY3QiLCJmb3JFYWNoIiwicHJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Teacher.jsx\n"));

/***/ })

});