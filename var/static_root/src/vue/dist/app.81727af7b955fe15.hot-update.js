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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _csrf_csrf_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../csrf/csrf_token */ \"./src/csrf/csrf_token.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      post: {}\n    };\n  },\n\n  props: {\n    slug: {\n      type: String,\n      required: true\n    }\n  },\n  computed: {\n    post() {\n      return this.$store.state.post;\n    }\n\n  },\n\n  mounted() {\n    this.$store.dispatch(\"fetchDetail\", this.slug);\n  },\n\n  methods: {// getDetailPost() {\n    //   fetch(`/post-api/posts/${this.slug}/`, {\n    //     method: \"GET\",\n    //     headers: {\n    //       \"Content-Type\": \"application/json\",\n    //       'X-CSRFTOKEN':csrftoken\n    //     },\n    //   })\n    //     .then((response) => response.json())\n    //     .then((data) => {\n    //       this.post = data\n    //       console.log(data)\n    //     })\n    //     .catch((error) => console.log(error));\n    // },\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1Bvc3REZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOztBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEE7O0FBS0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBckJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9Qb3N0RGV0YWlscy52dWU/ZWYwYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPlxyXG4gICAgICA8aDI+e3sgcG9zdC5wb3N0IH19PC9oMj5cclxuICAgICAgPGgzPnt7IHBvc3QubmFtZSB9fTwvaDM+XHJcbiAgICAgIDxoND57eyBwb3N0LmRhdGUgfX08L2g0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBjc3JmdG9rZW4gfSBmcm9tIFwiLi4vY3NyZi9jc3JmX3Rva2VuXCI7XHJcbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3N0OiB7fSxcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgcHJvcHM6IHtcclxuICAgIHNsdWc6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgcG9zdCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnBvc3Q7XHJcbiAgICB9XHJcbiAgfSwgIFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcImZldGNoRGV0YWlsXCIsIHRoaXMuc2x1Zyk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvLyBnZXREZXRhaWxQb3N0KCkge1xyXG4gICAgLy8gICBmZXRjaChgL3Bvc3QtYXBpL3Bvc3RzLyR7dGhpcy5zbHVnfS9gLCB7XHJcbiAgICAvLyAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgLy8gICAgICAgJ1gtQ1NSRlRPS0VOJzpjc3JmdG9rZW5cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgICB0aGlzLnBvc3QgPSBkYXRhXHJcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIC8vIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGU+XHJcbi5kZXRhaWwge1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xyXG59XHJcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PostDetails.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PostDetails.vue?vue&type=template&id=85f2aafc":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PostDetails.vue?vue&type=template&id=85f2aafc ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"container\"\n};\nconst _hoisted_2 = {\n  class: \"detail\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.post.post), 1\n  /* TEXT */\n  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.post.name), 1\n  /* TEXT */\n  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h4\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.post.date), 1\n  /* TEXT */\n  )])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9Qb3N0RGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODVmMmFhZmMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7QUFDQTs7O0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3REZXRhaWxzLnZ1ZT9lZjBjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+XHJcbiAgICAgIDxoMj57eyBwb3N0LnBvc3QgfX08L2gyPlxyXG4gICAgICA8aDM+e3sgcG9zdC5uYW1lIH19PC9oMz5cclxuICAgICAgPGg0Pnt7IHBvc3QuZGF0ZSB9fTwvaDQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IGNzcmZ0b2tlbiB9IGZyb20gXCIuLi9jc3JmL2NzcmZfdG9rZW5cIjtcclxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvc3Q6IHt9LFxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBwcm9wczoge1xyXG4gICAgc2x1Zzoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBwb3N0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucG9zdDtcclxuICAgIH1cclxuICB9LCAgXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwiZmV0Y2hEZXRhaWxcIiwgdGhpcy5zbHVnKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8vIGdldERldGFpbFBvc3QoKSB7XHJcbiAgICAvLyAgIGZldGNoKGAvcG9zdC1hcGkvcG9zdHMvJHt0aGlzLnNsdWd9L2AsIHtcclxuICAgIC8vICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAvLyAgICAgaGVhZGVyczoge1xyXG4gICAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyAgICAgICAnWC1DU1JGVE9LRU4nOmNzcmZ0b2tlblxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICAgIHRoaXMucG9zdCA9IGRhdGFcclxuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgLy8gfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZT5cclxuLmRldGFpbCB7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XHJcbn1cclxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PostDetails.vue?vue&type=template&id=85f2aafc\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "31cbbb7d512657f0"; }
/******/ }();
/******/ 
/******/ }
);