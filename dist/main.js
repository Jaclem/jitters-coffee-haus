/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/jitter-banner.jpg */ "./src/assets/jitter-banner.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Marcellus&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\nhtml,\nbody {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: rgb(231, 231, 231);\n  height: 100vh;\n}\n\n.nav-bar {\n  position: relative;\n}\n\n.nav-img {\n  position: relative;\n  width: 100%;\n  height: 800px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center;\n  object-fit: cover;\n}\n\n.list-container {\n  display: flex;\n  position: absolute;\n  justify-content: space-around;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n.nav-lists {\n  list-style-type: none;\n  padding: 20px;\n  margin-top: 20px;\n}\n\n.nav-links {\n  color: rgb(61, 61, 61);\n  text-decoration: none;\n  font-family: \"Yanone Kaffeesatz\", sans-serif;\n  font-size: 18px;\n  letter-spacing: 2px;\n}\n\n.welcome-container {\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: rgba(155, 77, 4, 0.425);\n  gap: 40px;\n  top: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.welcome-header {\n  font-family: \"Marcellus\", serif;\n  letter-spacing: 7px;\n  font-size: 60px;\n  color: rgb(37, 37, 37);\n}\n\n.welcome-par {\n  font-family: \"Marcellus\", serif;\n  letter-spacing: 2px;\n  font-size: 18px;\n  width: 70%;\n  font-style: italic;\n  color: rgb(61, 61, 61);\n}\n\n@media screen and (max-width: 1050px) {\n  .nav-img {\n    height: auto;\n  }\n}\n@media screen and (max-width: 950px) {\n  .nav-img {\n    height: 500px;\n  }\n  .welcome-header {\n    font-size: 30px;\n  }\n  .welcome-par {\n    font-size: 20px;\n    width: 100%;\n  }\n}\n.img-container {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 20px;\n}\n.img-container img {\n  height: 400px;\n  width: 300px;\n  transition: transform 0.1s;\n  object-fit: cover;\n  cursor: pointer;\n}\n.img-container img:hover {\n  transform: scale(1.1);\n}\n\n.title-container {\n  display: flex;\n  justify-content: space-evenly;\n  text-align: center;\n  margin-top: 20px;\n}\n.title-container h1 {\n  font-family: \"Marcellus\", serif;\n  font-size: 25px;\n  letter-spacing: 5px;\n  width: 300px;\n  color: rgb(61, 61, 61);\n}\n\n.menu-container {\n  display: flex;\n  justify-content: column;\n  align-items: center;\n  height: 700px;\n}\n\n.menu-aside-left {\n  height: 200px;\n  width: 50%;\n}\n.menu-aside-left h1 {\n  font-family: \"Marcellus\", serif;\n  color: rgb(61, 61, 61);\n  text-align: center;\n}\n.menu-aside-left p {\n  margin: 20px 0;\n  font-family: \"Marcellus\", serif;\n  text-align: center;\n  letter-spacing: 2px;\n  font-size: 18px;\n  font-style: italic;\n  color: rgb(61, 61, 61);\n}\n.menu-aside-left button {\n  display: flex;\n  margin: auto;\n  font-family: \"Marcellus\", serif;\n  letter-spacing: 2px;\n  padding: 15px 35px;\n  border: none;\n  border-radius: 2px;\n  background-color: orange;\n  cursor: pointer;\n}\n\n.menu-aside-right {\n  text-align: center;\n  width: 50%;\n}\n.menu-aside-right img {\n  height: 500px;\n  width: 400px;\n  transition: transform 0.1s;\n  object-fit: cover;\n  cursor: pointer;\n}\n\n.footer-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  gap: 25px;\n  height: 190px;\n  background-color: #121212;\n}\n\n.element-one {\n  width: 300px;\n}\n\n.footer-container {\n  padding: 20px;\n}\n.footer-container h1 {\n  font-family: \"Marcellus\", serif;\n  color: rgb(171, 171, 171);\n  margin-bottom: 20px;\n}\n.footer-container p {\n  font-family: \"Marcellus\", serif;\n  color: rgb(171, 171, 171);\n}\n\n.sub-container {\n  height: 100px;\n  width: 500px;\n}\n.sub-container label {\n  align-items: center;\n  text-align: center;\n  color: rgb(171, 171, 171);\n}\n\n.sub-div {\n  display: flex;\n  gap: 10px;\n  margin-top: 20px;\n}\n.sub-div input {\n  border: none;\n  background-color: rgb(231, 231, 231);\n  padding-left: 5px;\n}\n.sub-div button {\n  font-family: \"Marcellus\", serif;\n  padding: 3px 20px;\n  border: none;\n  border-radius: 3px;\n  background-color: orange;\n  color: white;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/style/main.scss","webpack://./src/style/_header.scss","webpack://./src/style/_main-content.scss","webpack://./src/style/_footer.scss"],"names":[],"mappings":"AAEA;;;EAGE,sBAAA;EACA,UAAA;EACA,SAAA;AAAF;;AAGA;EACE,oCAAA;EACA,aAAA;AAAF;;ACZA;EACE,kBAAA;ADeF;;ACXA;EACE,kBAAA;EACA,WAAA;EACA,aAAA;EACA,oEAAA;EACA,iBAAA;ADcF;;ACVA;EACE,aAAA;EACA,kBAAA;EACA,6BAAA;EACA,MAAA;EACA,WAAA;EACA,UAAA;ADaF;;ACVA;EACE,qBAAA;EACA,aAAA;EACA,gBAAA;ADaF;;ACVA;EACE,sBAAA;EACA,qBAAA;EACA,4CAAA;EACA,eAAA;EACA,mBAAA;ADaF;;ACTA;EACE,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yCAAA;EACA,SAAA;EACA,MAAA;EACA,YAAA;EACA,WAAA;ADYF;;ACTA;EACE,+BAAA;EACA,mBAAA;EACA,eAAA;EACA,sBAAA;ADYF;;ACTA;EACE,+BAAA;EACA,mBAAA;EACA,eAAA;EACA,UAAA;EACA,kBAAA;EACA,sBAAA;ADYF;;ACTA;EACE;IACE,YAAA;EDYF;AACF;ACTA;EAEE;IACE,aAAA;EDUF;ECPA;IACE,eAAA;EDSF;ECNA;IACE,eAAA;IACA,WAAA;EDQF;AACF;AE9FA;EACE,aAAA;EACA,6BAAA;EACA,gBAAA;AFgGF;AE9FE;EACE,aAAA;EACA,YAAA;EACA,0BAAA;EACA,iBAAA;EACA,eAAA;AFgGJ;AE7FE;EACE,qBAAA;AF+FJ;;AE3FA;EACE,aAAA;EACA,6BAAA;EACA,kBAAA;EACA,gBAAA;AF8FF;AE5FE;EACE,+BAAA;EACA,eAAA;EACA,mBAAA;EACA,YAAA;EACA,sBAAA;AF8FJ;;AE1FA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;AF6FF;;AE1FA;EACE,aAAA;EACA,UAAA;AF6FF;AE3FE;EACE,+BAAA;EACA,sBAAA;EACA,kBAAA;AF6FJ;AE1FE;EACE,cAAA;EACA,+BAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,sBAAA;AF4FJ;AEzFE;EACE,aAAA;EACA,YAAA;EACA,+BAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,wBAAA;EACA,eAAA;AF2FJ;;AEvFA;EACE,kBAAA;EACA,UAAA;AF0FF;AExFE;EACE,aAAA;EACA,YAAA;EACA,0BAAA;EACA,iBAAA;EACA,eAAA;AF0FJ;;AG7KA;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,SAAA;EACA,aAAA;EACA,yBAAA;AHgLF;;AG7KA;EACE,YAAA;AHgLF;;AG7KA;EACE,aAAA;AHgLF;AG9KE;EACE,+BAAA;EACA,yBAAA;EACA,mBAAA;AHgLJ;AG7KE;EACE,+BAAA;EACA,yBAAA;AH+KJ;;AG3KA;EACE,aAAA;EACA,YAAA;AH8KF;AG5KE;EACE,mBAAA;EACA,kBAAA;EACA,yBAAA;AH8KJ;;AG1KA;EACE,aAAA;EACA,SAAA;EACA,gBAAA;AH6KF;AG3KE;EACE,YAAA;EACA,oCAAA;EACA,iBAAA;AH6KJ;AG1KE;EACE,+BAAA;EACA,iBAAA;EACA,YAAA;EACA,kBAAA;EACA,wBAAA;EACA,YAAA;EACA,eAAA;AH4KJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');\r\n\r\n*,\r\nhtml,\r\nbody {\r\n  box-sizing: border-box;\r\n  padding: 0; \r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(231, 231, 231);\r\n  height: 100vh;\r\n}\r\n\r\n@import './header';\r\n@import './main-content';\r\n@import './footer';",".nav-bar {\r\n  position: relative;\r\n}\r\n\r\n// image on the main page\r\n.nav-img {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 800px; // make height: auto; when sizing for phone screen\r\n  background: url('../assets/jitter-banner.jpg') no-repeat center;\r\n  object-fit: cover;\r\n}\r\n\r\n// container that holds the list items home, menu, contact us\r\n.list-container {\r\n  display: flex;\r\n  position: absolute;\r\n  justify-content: space-around;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.nav-lists {\r\n  list-style-type: none;\r\n  padding: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.nav-links {\r\n  color: rgb(61, 61, 61);\r\n  text-decoration: none;\r\n  font-family: 'Yanone Kaffeesatz', sans-serif;\r\n  font-size: 18px;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n// container that holds the h1 and p elements in the middle of the photo\r\n.welcome-container {\r\n  display: flex;\r\n  position: absolute;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  background-color: rgba(155, 77, 4, 0.425);\r\n  gap: 40px;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.welcome-header {\r\n  font-family: 'Marcellus', serif;\r\n  letter-spacing: 7px;\r\n  font-size: 60px;\r\n  color: rgb(37, 37, 37);\r\n}\r\n\r\n.welcome-par {\r\n  font-family: 'Marcellus', serif;\r\n  letter-spacing: 2px;\r\n  font-size: 18px;\r\n  width: 70%;\r\n  font-style: italic;\r\n  color: rgb(61, 61, 61);\r\n}\r\n\r\n@media screen and (max-width: 1050px) {\r\n  .nav-img {\r\n    height: auto;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 950px) {\r\n\r\n  .nav-img {\r\n    height: 500px;\r\n  }\r\n\r\n  .welcome-header {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .welcome-par {\r\n    font-size: 20px;\r\n    width: 100%;\r\n  }\r\n}","\r\n.img-container {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  margin-top: 20px;\r\n\r\n  img {\r\n    height: 400px;\r\n    width: 300px;\r\n    transition: transform .1s;\r\n    object-fit: cover;\r\n    cursor: pointer;\r\n  }\r\n\r\n  img:hover {\r\n    transform: scale(1.1);\r\n  }\r\n}\r\n\r\n.title-container {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n  margin-top: 20px;\r\n\r\n  h1 {\r\n    font-family: 'Marcellus', serif;\r\n    font-size: 25px;\r\n    letter-spacing: 5px;\r\n    width: 300px;\r\n    color: rgb(61, 61, 61);\r\n  }\r\n}\r\n\r\n.menu-container {\r\n  display: flex;\r\n  justify-content: column;\r\n  align-items: center;\r\n  height: 700px;\r\n}\r\n\r\n.menu-aside-left {\r\n  height: 200px;\r\n  width: 50%;\r\n\r\n  h1 {\r\n    font-family: 'Marcellus', serif;\r\n    color: rgb(61, 61, 61);\r\n    text-align: center;\r\n  }\r\n\r\n  p {\r\n    margin: 20px 0;\r\n    font-family: 'Marcellus', serif;\r\n    text-align: center;\r\n    letter-spacing: 2px;\r\n    font-size: 18px;\r\n    font-style: italic;\r\n    color: rgb(61, 61, 61);\r\n  }\r\n\r\n  button {\r\n    display: flex;\r\n    margin: auto;\r\n    font-family: 'Marcellus', serif;\r\n    letter-spacing: 2px;\r\n    padding: 15px 35px;\r\n    border: none;\r\n    border-radius: 2px;\r\n    background-color: orange;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.menu-aside-right {\r\n  text-align: center;\r\n  width: 50%;\r\n\r\n  img {\r\n    height: 500px;\r\n    width: 400px;\r\n    transition: transform .1s;\r\n    object-fit: cover;\r\n    cursor: pointer;\r\n  }\r\n}\r\n",".footer-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  gap: 25px;\r\n  height: 190px;\r\n  background-color: #121212;\r\n}\r\n\r\n.element-one {\r\n  width: 300px;\r\n}\r\n\r\n.footer-container {\r\n  padding: 20px;\r\n\r\n  h1 {\r\n    font-family: 'Marcellus', serif;\r\n    color: rgb(171, 171, 171);\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  p {\r\n    font-family: 'Marcellus', serif;\r\n    color: rgb(171, 171, 171); \r\n  }\r\n}\r\n\r\n.sub-container {\r\n  height: 100px;\r\n  width: 500px;\r\n\r\n  label {\r\n    align-items: center;\r\n    text-align: center;\r\n    color: rgb(171, 171, 171);\r\n  }\r\n}\r\n\r\n.sub-div {\r\n  display: flex;\r\n  gap: 10px;\r\n  margin-top: 20px;\r\n\r\n  input {\r\n    border: none;\r\n    background-color: rgb(231, 231, 231);\r\n    padding-left: 5px;\r\n  }\r\n\r\n  button {\r\n    font-family: 'Marcellus', serif;\r\n    padding: 3px 20px;\r\n    border: none;\r\n    border-radius: 3px;\r\n    background-color: orange;\r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function footer() {
  const footerContainer = document.createElement('div');
  footerContainer.className = 'footer-container';
  document.body.appendChild(footerContainer);

  const elFactory = (type, parent, ...className) => {
    const el = document.createElement(type);
    parent.appendChild(el);

    if(className.length !== 0){
      el.className = className;
    }

    return el;
  } 

  const elementOne = elFactory('div', footerContainer, 'element-one');
  const elementHeader = elFactory('h1', elementOne);
  const elementText = elFactory('p', elementOne);

  elementHeader.textContent = 'Jitters Coffee Haus';
  elementText.textContent = 'The most delicious caffeinated drinks this side of Atlanta';

  const subContainer = elFactory('div', footerContainer, 'sub-container');
  const subLabel = elFactory('label', subContainer);
  const subDiv = elFactory('div', subContainer, 'sub-div');
  const subInput = elFactory('input', subDiv);
  const subBtn = elFactory('button', subDiv);

  subLabel.textContent = 'Sign up to our monthly news letter and receive monthly deals on coffee, accessaries, and more!';
  subBtn.textContent = 'Subscribe';  
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer());

/***/ }),

/***/ "./src/headerBanner.js":
/*!*****************************!*\
  !*** ./src/headerBanner.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_paper_background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/paper-background.jpg */ "./src/assets/paper-background.jpg");


function headerBanner() {
  const navBar = document.createElement('nav');
  const liContainer = document.createElement('div');
  const bannerTextContainer = document.createElement('div');
  const bannerHeaderText = document.createElement('h1');
  const bannerParagraphText = document.createElement('p');
  const bannerImg = new Image();

  navBar.setAttribute('class', 'nav-bar');

  bannerTextContainer.className = 'welcome-container';
  bannerHeaderText.className = 'welcome-header';
  bannerParagraphText.className = 'welcome-par';
  bannerImg.className = 'nav-img';
  liContainer.className = 'list-container';
  bannerImg.src = _assets_paper_background_jpg__WEBPACK_IMPORTED_MODULE_0__;

  bannerHeaderText.textContent = 'JITTERS COFFEE HAUS';
  bannerParagraphText.textContent = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident';

  bannerTextContainer.appendChild(bannerHeaderText);
  bannerTextContainer.appendChild(bannerParagraphText);
  document.body.appendChild(navBar);
  navBar.appendChild(bannerImg);
  navBar.appendChild(liContainer);
  navBar.appendChild(bannerTextContainer);

  // creates 3 list items and "a" tags to append to the nav-bar element
  for(let i = 0; i < 3; i++) {
    const liTags = document.createElement('li');
    const aTags = document.createElement('a');

    liTags.className = 'nav-lists';
    aTags.className = 'nav-links';

    if(i <= 0){
      aTags.textContent = 'Home';
      aTags.setAttribute('id', 'home-btn');
      aTags.setAttribute('href', '#');
    } else if(i <= 1){
      aTags.textContent = 'Menu';
      aTags.setAttribute('id', 'menu-btn');
      aTags.setAttribute('href', '#');
    } else if(i <= 2) {
      aTags.textContent = 'Contact Us';
      aTags.setAttribute('id', 'contact-btn');
      aTags.setAttribute('href', '#');
    }

    liTags.appendChild(aTags);
    liContainer.appendChild(liTags);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerBanner());

/***/ }),

/***/ "./src/mainContent.js":
/*!****************************!*\
  !*** ./src/mainContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_latte_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/latte.jpg */ "./src/assets/latte.jpg");
/* harmony import */ var _assets_americano_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/americano.jpg */ "./src/assets/americano.jpg");
/* harmony import */ var _assets_mocha_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/mocha.jpg */ "./src/assets/mocha.jpg");
/* harmony import */ var _assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/placeholder.jpg */ "./src/assets/placeholder.jpg");





function mainContent() {
  const mainContainer = document.createElement('main');
  mainContainer.className = 'main-container';
  document.body.appendChild(mainContainer);

  const elFactory = (type, parent, ...className) => {
    const el = document.createElement(type);
    parent.appendChild(el);

    if(className.length !== 0){
      el.className = className;
    }

    return el;
  }

  const imgFactory = (name, src, className, parent) => {
    name = new Image();
    name.className = className;
    name.src = src;
    parent.appendChild(name);
  }

  const imgContainer = elFactory('div', mainContainer, 'img-container');

  const latte = imgFactory('latte', _assets_latte_jpg__WEBPACK_IMPORTED_MODULE_0__, 'latte-img', imgContainer);
  const americano = imgFactory('Americano', _assets_americano_jpg__WEBPACK_IMPORTED_MODULE_1__, 'americano-img', imgContainer);
  const moca = imgFactory('mocha', _assets_mocha_jpg__WEBPACK_IMPORTED_MODULE_2__, 'mocha-latte', imgContainer);

  const titleContainer = elFactory('div', mainContainer, 'title-container');

  for(let i = 0; i < 3; i++){
    if(i <= 0){
      const title = elFactory('h1', titleContainer);
      title.textContent = 'Latte';
    } else if(i <= 1){
      const title = elFactory('h1', titleContainer);
      title.textContent = 'Americano';
    } else if(i <= 2) {
      const title = elFactory('h1', titleContainer);
      title.textContent = 'Mocha';
    }
  }

  const menuContainer = elFactory('div', mainContainer, 'menu-container');
  const menuContent = elFactory('div', menuContainer, 'menu-aside-left');
  const menuAside = elFactory('div' , menuContainer, 'menu-aside-right');
  const menuHeader = elFactory('h1', menuContent);
  const menuText = elFactory('p', menuContent);
  const menuBtn = elFactory('button', menuContent);

  const placeholder = imgFactory('placeholder', _assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_3__, 'placeholder-img', menuAside);

  menuHeader.textContent = 'Test';
  menuText.textContent = 'ljsdflkjsdf lksdkkfke, l;askkkdfjsl';
  menuBtn.textContent = 'Menu';

  menuBtn.setAttribute('href', '#');

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainContent());

/***/ }),

/***/ "./src/assets/americano.jpg":
/*!**********************************!*\
  !*** ./src/assets/americano.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "americano.jpg";

/***/ }),

/***/ "./src/assets/jitter-banner.jpg":
/*!**************************************!*\
  !*** ./src/assets/jitter-banner.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "jitter-banner.jpg";

/***/ }),

/***/ "./src/assets/latte.jpg":
/*!******************************!*\
  !*** ./src/assets/latte.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "latte.jpg";

/***/ }),

/***/ "./src/assets/mocha.jpg":
/*!******************************!*\
  !*** ./src/assets/mocha.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mocha.jpg";

/***/ }),

/***/ "./src/assets/paper-background.jpg":
/*!*****************************************!*\
  !*** ./src/assets/paper-background.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "paper-background.jpg";

/***/ }),

/***/ "./src/assets/placeholder.jpg":
/*!************************************!*\
  !*** ./src/assets/placeholder.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "placeholder.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _headerBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerBanner */ "./src/headerBanner.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/footer.js");





const menuBtn = document.getElementById('menu-btn');

let menuClicked = false;

_mainContent__WEBPACK_IMPORTED_MODULE_2__["default"];
_footer__WEBPACK_IMPORTED_MODULE_3__["default"];

// do {
//   headerBanner;
//   mainContent;
//   footer;
// } while (menuClicked == false);

console.log(menuBtn);
menuBtn.addEventListener('click', (e) => {
  _headerBanner__WEBPACK_IMPORTED_MODULE_1__["default"];
  _footer__WEBPACK_IMPORTED_MODULE_3__["default"];
  menuClicked = true;
});


})();

/******/ })()
;
//# sourceMappingURL=main.js.map