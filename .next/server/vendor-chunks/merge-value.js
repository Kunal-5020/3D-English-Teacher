"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/merge-value";
exports.ids = ["vendor-chunks/merge-value"];
exports.modules = {

/***/ "(ssr)/./node_modules/merge-value/index.js":
/*!*******************************************!*\
  !*** ./node_modules/merge-value/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isObject = __webpack_require__(/*! is-extendable */ \"(ssr)/./node_modules/is-extendable/index.js\");\nvar merge = __webpack_require__(/*! mixin-deep */ \"(ssr)/./node_modules/mixin-deep/index.js\");\nvar get = __webpack_require__(/*! get-value */ \"(ssr)/./node_modules/get-value/index.js\");\nvar set = __webpack_require__(/*! set-value */ \"(ssr)/./node_modules/set-value/index.js\");\nmodule.exports = function mergeValue(obj, prop, value) {\n    if (!isObject(obj)) {\n        throw new TypeError(\"expected an object\");\n    }\n    if (typeof prop !== \"string\" || value == null) {\n        return merge.apply(null, arguments);\n    }\n    if (typeof value === \"string\") {\n        set(obj, prop, value);\n        return obj;\n    }\n    var current = get(obj, prop);\n    if (isObject(value) && isObject(current)) {\n        value = merge({}, current, value);\n    }\n    set(obj, prop, value);\n    return obj;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWVyZ2UtdmFsdWUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUN2QixJQUFJQyxRQUFRRCxtQkFBT0EsQ0FBQztBQUNwQixJQUFJRSxNQUFNRixtQkFBT0EsQ0FBQztBQUNsQixJQUFJRyxNQUFNSCxtQkFBT0EsQ0FBQztBQUVsQkksT0FBT0MsT0FBTyxHQUFHLFNBQVNDLFdBQVdDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxLQUFLO0lBQ25ELElBQUksQ0FBQ1YsU0FBU1EsTUFBTTtRQUNsQixNQUFNLElBQUlHLFVBQVU7SUFDdEI7SUFFQSxJQUFJLE9BQU9GLFNBQVMsWUFBWUMsU0FBUyxNQUFNO1FBQzdDLE9BQU9SLE1BQU1VLEtBQUssQ0FBQyxNQUFNQztJQUMzQjtJQUVBLElBQUksT0FBT0gsVUFBVSxVQUFVO1FBQzdCTixJQUFJSSxLQUFLQyxNQUFNQztRQUNmLE9BQU9GO0lBQ1Q7SUFFQSxJQUFJTSxVQUFVWCxJQUFJSyxLQUFLQztJQUN2QixJQUFJVCxTQUFTVSxVQUFVVixTQUFTYyxVQUFVO1FBQ3hDSixRQUFRUixNQUFNLENBQUMsR0FBR1ksU0FBU0o7SUFDN0I7SUFFQU4sSUFBSUksS0FBS0MsTUFBTUM7SUFDZixPQUFPRjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vM0QtQUktRW5nbGlzaC8uL25vZGVfbW9kdWxlcy9tZXJnZS12YWx1ZS9pbmRleC5qcz8xMmYwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnaXMtZXh0ZW5kYWJsZScpO1xudmFyIG1lcmdlID0gcmVxdWlyZSgnbWl4aW4tZGVlcCcpO1xudmFyIGdldCA9IHJlcXVpcmUoJ2dldC12YWx1ZScpO1xudmFyIHNldCA9IHJlcXVpcmUoJ3NldC12YWx1ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlVmFsdWUob2JqLCBwcm9wLCB2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBhbiBvYmplY3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJvcCAhPT0gJ3N0cmluZycgfHwgdmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBtZXJnZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBzZXQob2JqLCBwcm9wLCB2YWx1ZSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciBjdXJyZW50ID0gZ2V0KG9iaiwgcHJvcCk7XG4gIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgaXNPYmplY3QoY3VycmVudCkpIHtcbiAgICB2YWx1ZSA9IG1lcmdlKHt9LCBjdXJyZW50LCB2YWx1ZSk7XG4gIH1cblxuICBzZXQob2JqLCBwcm9wLCB2YWx1ZSk7XG4gIHJldHVybiBvYmo7XG59O1xuIl0sIm5hbWVzIjpbImlzT2JqZWN0IiwicmVxdWlyZSIsIm1lcmdlIiwiZ2V0Iiwic2V0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1lcmdlVmFsdWUiLCJvYmoiLCJwcm9wIiwidmFsdWUiLCJUeXBlRXJyb3IiLCJhcHBseSIsImFyZ3VtZW50cyIsImN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/merge-value/index.js\n");

/***/ })

};
;