"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"]("app",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PostDetails.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PostDetails.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _csrf_csrf_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../csrf/csrf_token */ \"./src/csrf/csrf_token.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      post: {}\n    };\n  },\n\n  props: {\n    slug: {\n      type: String,\n      required: true\n    }\n  },\n  methods: { // getDetailPost() {\n    //   fetch(`/post-api/posts/${this.slug}/`, {\n    //     method: \"GET\",\n    //     headers: {\n    //       \"Content-Type\": \"application/json\",\n    //       'X-CSRFTOKEN':csrftoken\n    //     },\n    //   })\n    //     .then((response) => response.json())\n    //     .then((data) => {\n    //       this.post = data\n    //       console.log(data)\n    //     })\n    //     .catch((error) => console.log(error));\n    // },\n    ...(0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['fetchDetailPost'])\n  },\n  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['getDetailPost']),\n\n  created() {\n    this.fetchDetailPost();\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1Bvc3REZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFXQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBa0JBOztBQUNBO0FBQ0E7QUFDQTs7QUFuQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3REZXRhaWxzLnZ1ZT9lZjBjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+XHJcbiAgICAgIDxoMj57eyBnZXREZXRhaWxQb3N0LnBvc3QgfX08L2gyPlxyXG4gICAgICA8aDM+e3sgcG9zdC5uYW1lIH19PC9oMz5cclxuICAgICAgPGg0Pnt7IHBvc3QuZGF0ZSB9fTwvaDQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7Y3NyZnRva2VufSBmcm9tICcuLi9jc3JmL2NzcmZfdG9rZW4nXHJcbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvc3Q6IHt9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcHJvcHM6IHtcclxuICAgIHNsdWc6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvLyBnZXREZXRhaWxQb3N0KCkge1xyXG4gICAgLy8gICBmZXRjaChgL3Bvc3QtYXBpL3Bvc3RzLyR7dGhpcy5zbHVnfS9gLCB7XHJcbiAgICAvLyAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgLy8gICAgICAgJ1gtQ1NSRlRPS0VOJzpjc3JmdG9rZW5cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgICB0aGlzLnBvc3QgPSBkYXRhXHJcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIC8vIH0sXHJcbiAgICAuLi5tYXBBY3Rpb25zKFsnZmV0Y2hEZXRhaWxQb3N0JywgXSlcclxuICB9LFxyXG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKFsnZ2V0RGV0YWlsUG9zdCcsIF0pLFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLmZldGNoRGV0YWlsUG9zdCgpXHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZT5cclxuICAuZGV0YWlsIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XHJcblxyXG4gIH1cclxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PostDetails.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PostDetails.vue?vue&type=template&id=85f2aafc":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PostDetails.vue?vue&type=template&id=85f2aafc ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"container\"\n};\nconst _hoisted_2 = {\n  class: \"detail\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getDetailPost.post), 1\n  /* TEXT */\n  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.post.name), 1\n  /* TEXT */\n  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h4\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.post.date), 1\n  /* TEXT */\n  )])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9Qb3N0RGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODVmMmFhZmMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7QUFDQTs7O0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3REZXRhaWxzLnZ1ZT9lZjBjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+XHJcbiAgICAgIDxoMj57eyBnZXREZXRhaWxQb3N0LnBvc3QgfX08L2gyPlxyXG4gICAgICA8aDM+e3sgcG9zdC5uYW1lIH19PC9oMz5cclxuICAgICAgPGg0Pnt7IHBvc3QuZGF0ZSB9fTwvaDQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7Y3NyZnRva2VufSBmcm9tICcuLi9jc3JmL2NzcmZfdG9rZW4nXHJcbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvc3Q6IHt9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcHJvcHM6IHtcclxuICAgIHNsdWc6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvLyBnZXREZXRhaWxQb3N0KCkge1xyXG4gICAgLy8gICBmZXRjaChgL3Bvc3QtYXBpL3Bvc3RzLyR7dGhpcy5zbHVnfS9gLCB7XHJcbiAgICAvLyAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgLy8gICAgICAgJ1gtQ1NSRlRPS0VOJzpjc3JmdG9rZW5cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgICB0aGlzLnBvc3QgPSBkYXRhXHJcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIC8vIH0sXHJcbiAgICAuLi5tYXBBY3Rpb25zKFsnZmV0Y2hEZXRhaWxQb3N0JywgXSlcclxuICB9LFxyXG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKFsnZ2V0RGV0YWlsUG9zdCcsIF0pLFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLmZldGNoRGV0YWlsUG9zdCgpXHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZT5cclxuICAuZGV0YWlsIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XHJcblxyXG4gIH1cclxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PostDetails.vue?vue&type=template&id=85f2aafc\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b9f2df6f48b3f3a6"; }
/******/ }();
/******/ 
/******/ }
);