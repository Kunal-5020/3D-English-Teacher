"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-plain-object";
exports.ids = ["vendor-chunks/is-plain-object"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * is-plain-object <https://github.com/jonschlinkert/is-plain-object>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Released under the MIT License.\n */ \nvar isObject = __webpack_require__(/*! isobject */ \"(ssr)/./node_modules/isobject/index.js\");\nfunction isObjectObject(o) {\n    return isObject(o) === true && Object.prototype.toString.call(o) === \"[object Object]\";\n}\nmodule.exports = function isPlainObject(o) {\n    var ctor, prot;\n    if (isObjectObject(o) === false) return false;\n    // If has modified constructor\n    ctor = o.constructor;\n    if (typeof ctor !== \"function\") return false;\n    // If has modified prototype\n    prot = ctor.prototype;\n    if (isObjectObject(prot) === false) return false;\n    // If constructor does not have an Object-specific method\n    if (prot.hasOwnProperty(\"isPrototypeOf\") === false) {\n        return false;\n    }\n    // Most likely a plain Object\n    return true;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqZWN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDLEdBRUQ7QUFFQSxJQUFJQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV2QixTQUFTQyxlQUFlQyxDQUFDO0lBQ3ZCLE9BQU9ILFNBQVNHLE9BQU8sUUFDbEJDLE9BQU9DLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUNKLE9BQU87QUFDN0M7QUFFQUssT0FBT0MsT0FBTyxHQUFHLFNBQVNDLGNBQWNQLENBQUM7SUFDdkMsSUFBSVEsTUFBS0M7SUFFVCxJQUFJVixlQUFlQyxPQUFPLE9BQU8sT0FBTztJQUV4Qyw4QkFBOEI7SUFDOUJRLE9BQU9SLEVBQUVVLFdBQVc7SUFDcEIsSUFBSSxPQUFPRixTQUFTLFlBQVksT0FBTztJQUV2Qyw0QkFBNEI7SUFDNUJDLE9BQU9ELEtBQUtOLFNBQVM7SUFDckIsSUFBSUgsZUFBZVUsVUFBVSxPQUFPLE9BQU87SUFFM0MseURBQXlEO0lBQ3pELElBQUlBLEtBQUtFLGNBQWMsQ0FBQyxxQkFBcUIsT0FBTztRQUNsRCxPQUFPO0lBQ1Q7SUFFQSw2QkFBNkI7SUFDN0IsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vM0QtQUktRW5nbGlzaC8uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmplY3QvaW5kZXguanM/Y2JjZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGlzLXBsYWluLW9iamVjdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtcGxhaW4tb2JqZWN0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0T2JqZWN0KG8pIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG8pID09PSB0cnVlXG4gICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG8pIHtcbiAgdmFyIGN0b3IscHJvdDtcblxuICBpZiAoaXNPYmplY3RPYmplY3QobykgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgaGFzIG1vZGlmaWVkIGNvbnN0cnVjdG9yXG4gIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuICBpZiAodHlwZW9mIGN0b3IgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBoYXMgbW9kaWZpZWQgcHJvdG90eXBlXG4gIHByb3QgPSBjdG9yLnByb3RvdHlwZTtcbiAgaWYgKGlzT2JqZWN0T2JqZWN0KHByb3QpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGNvbnN0cnVjdG9yIGRvZXMgbm90IGhhdmUgYW4gT2JqZWN0LXNwZWNpZmljIG1ldGhvZFxuICBpZiAocHJvdC5oYXNPd25Qcm9wZXJ0eSgnaXNQcm90b3R5cGVPZicpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIE1vc3QgbGlrZWx5IGEgcGxhaW4gT2JqZWN0XG4gIHJldHVybiB0cnVlO1xufTtcbiJdLCJuYW1lcyI6WyJpc09iamVjdCIsInJlcXVpcmUiLCJpc09iamVjdE9iamVjdCIsIm8iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJtb2R1bGUiLCJleHBvcnRzIiwiaXNQbGFpbk9iamVjdCIsImN0b3IiLCJwcm90IiwiY29uc3RydWN0b3IiLCJoYXNPd25Qcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-plain-object/index.js\n");

/***/ })

};
;