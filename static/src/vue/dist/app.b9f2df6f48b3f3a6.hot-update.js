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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _csrf_csrf_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../csrf/csrf_token */ \"./src/csrf/csrf_token.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      post: {}\n    };\n  },\n\n  props: {\n    slug: {\n      type: String,\n      required: true\n    }\n  },\n  methods: { // getDetailPost() {\n    //   fetch(`/post-api/posts/${this.slug}/`, {\n    //     method: \"GET\",\n    //     headers: {\n    //       \"Content-Type\": \"application/json\",\n    //       'X-CSRFTOKEN':csrftoken\n    //     },\n    //   })\n    //     .then((response) => response.json())\n    //     .then((data) => {\n    //       this.post = data\n    //       console.log(data)\n    //     })\n    //     .catch((error) => console.log(error));\n    // },\n    ...(0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['fetchDetailPost'])\n  },\n  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['getDetailPost']),\n\n  created() {\n    this.fetchDetailPost();\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1Bvc3REZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFXQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBa0JBOztBQUNBO0FBQ0E7QUFDQTs7QUFuQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3REZXRhaWxzLnZ1ZT9lZjBjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+XHJcbiAgICAgIDxoMj57eyBmZXRjaERldGFpbFBvc3QucG9zdCB9fTwvaDI+XHJcbiAgICAgIDxoMz57eyBwb3N0Lm5hbWUgfX08L2gzPlxyXG4gICAgICA8aDQ+e3sgcG9zdC5kYXRlIH19PC9oND5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtjc3JmdG9rZW59IGZyb20gJy4uL2NzcmYvY3NyZl90b2tlbidcclxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zdDoge31cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBwcm9wczoge1xyXG4gICAgc2x1Zzoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8vIGdldERldGFpbFBvc3QoKSB7XHJcbiAgICAvLyAgIGZldGNoKGAvcG9zdC1hcGkvcG9zdHMvJHt0aGlzLnNsdWd9L2AsIHtcclxuICAgIC8vICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAvLyAgICAgaGVhZGVyczoge1xyXG4gICAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyAgICAgICAnWC1DU1JGVE9LRU4nOmNzcmZ0b2tlblxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICAgIHRoaXMucG9zdCA9IGRhdGFcclxuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgLy8gfSxcclxuICAgIC4uLm1hcEFjdGlvbnMoWydmZXRjaERldGFpbFBvc3QnLCBdKVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoWydnZXREZXRhaWxQb3N0JywgXSksXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZmV0Y2hEZXRhaWxQb3N0KClcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlPlxyXG4gIC5kZXRhaWwge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcclxuXHJcbiAgfVxyXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PostDetails.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PostDetails.vue?vue&type=template&id=85f2aafc":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PostDetails.vue?vue&type=template&id=85f2aafc ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"container\"\n};\nconst _hoisted_2 = {\n  class: \"detail\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.fetchDetailPost.post), 1\n  /* TEXT */\n  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.post.name), 1\n  /* TEXT */\n  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h4\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.post.date), 1\n  /* TEXT */\n  )])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9Qb3N0RGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODVmMmFhZmMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7QUFDQTs7O0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1Bvc3REZXRhaWxzLnZ1ZT9lZjBjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+XHJcbiAgICAgIDxoMj57eyBmZXRjaERldGFpbFBvc3QucG9zdCB9fTwvaDI+XHJcbiAgICAgIDxoMz57eyBwb3N0Lm5hbWUgfX08L2gzPlxyXG4gICAgICA8aDQ+e3sgcG9zdC5kYXRlIH19PC9oND5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtjc3JmdG9rZW59IGZyb20gJy4uL2NzcmYvY3NyZl90b2tlbidcclxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zdDoge31cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBwcm9wczoge1xyXG4gICAgc2x1Zzoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8vIGdldERldGFpbFBvc3QoKSB7XHJcbiAgICAvLyAgIGZldGNoKGAvcG9zdC1hcGkvcG9zdHMvJHt0aGlzLnNsdWd9L2AsIHtcclxuICAgIC8vICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAvLyAgICAgaGVhZGVyczoge1xyXG4gICAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyAgICAgICAnWC1DU1JGVE9LRU4nOmNzcmZ0b2tlblxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICAgIHRoaXMucG9zdCA9IGRhdGFcclxuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgLy8gfSxcclxuICAgIC4uLm1hcEFjdGlvbnMoWydmZXRjaERldGFpbFBvc3QnLCBdKVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoWydnZXREZXRhaWxQb3N0JywgXSksXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZmV0Y2hEZXRhaWxQb3N0KClcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlPlxyXG4gIC5kZXRhaWwge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcclxuXHJcbiAgfVxyXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PostDetails.vue?vue&type=template&id=85f2aafc\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "5c6979491a245346"; }
/******/ }();
/******/ 
/******/ }
);