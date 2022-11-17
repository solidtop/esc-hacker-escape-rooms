/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/filterText.js":
/*!******************************!*\
  !*** ./src/js/filterText.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ filterText)\n/* harmony export */ });\n/* harmony import */ var _renderChallenges_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderChallenges.js */ \"./src/js/renderChallenges.js\");\n\n\nfunction filterText(inputvalue, data) {\n    \n    const filteredArray = [];\n    filteredArray.filter(item => {\n        return (data[i].title).includes(inputvalue) || (data[i].description).includes(inputvalue)\n    });\n    \n    (0,_renderChallenges_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filteredArray);\n\n}\n    \n\n//# sourceURL=webpack://02-esc/./src/js/filterText.js?");

/***/ }),

/***/ "./src/js/loadData.js":
/*!****************************!*\
  !*** ./src/js/loadData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadData)\n/* harmony export */ });\nasync function loadData() {\n    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');\n    const data = await res.json();\n    return data.challenges;\n};\n\n\n//# sourceURL=webpack://02-esc/./src/js/loadData.js?");

/***/ }),

/***/ "./src/js/renderChallenges.js":
/*!************************************!*\
  !*** ./src/js/renderChallenges.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\nfunction render(data) {\n    const list = document.querySelector(\".challenges-list\");\n\n    for (let i = 0; i< data.length; i++) {\n        let card = document.createElement('li');\n        let title = document.createElement('h3');\n        let type = document.createElement('icon');\n        let description = document.createElement('p');\n        let participants = document.createElement('small');\n        let image = document.createElement('img');\n        let rating = document.createElement('ul');\n        let star = document.createElement('li');\n        let btn = document.createElement('button');\n\n        list.setAttribute('class', 'challenges-list');\n\n        list.appendChild(card);\n        card.setAttribute('class', 'challenge-item');\n        \n        card.appendChild(type);\n        if (data[i].type == 'onsite') \n            type.setAttribute('class', 'fa-solid fa-house');\n        else\n            type.setAttribute('class', 'fa-solid fa-laptop');\n        \n        card.appendChild(image);\n        image.src = data[i].image;\n        image.setAttribute('class', 'challenge-image');\n\n        card.appendChild(title);\n        title.innerHTML = data[i].title;\n        title.setAttribute('class', 'challenge-title');\n\n        card.appendChild(participants);\n        participants.innerHTML = data[i].minParticipants + ' - ' + data[i].maxParticipants + ' participants';\n        participants.setAttribute('class', 'challenge-meta');\n\n        card.appendChild(description);\n        description.innerHTML = data[i].description;\n        description.setAttribute('class', 'challenge-description');\n\n        /*card.appendChild(rating);\n        rating.setAttribute('class', 'rating');\n\n        for (let j = 0; j < Math.floor(data[i].rating); j++) {\n            rating.appendChild(star);\n            star.setAttribute('class', 'fa-solid fa-star');          \n        } \n\n        for (let k = Math.floor(data[i].rating); k < 5; k++) {\n            rating.appendChild(star);\n            star.setAttribute('class', 'fa-regular fa-star');\n        } */\n        \n        card.appendChild(btn);\n        btn.setAttribute('class', 'button primary');\n        btn.innerHTML = 'Book this room';\n    }\n};\n\n//# sourceURL=webpack://02-esc/./src/js/renderChallenges.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_loadData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/loadData.js */ \"./src/js/loadData.js\");\n/* harmony import */ var _js_renderChallenges_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/renderChallenges.js */ \"./src/js/renderChallenges.js\");\n/* harmony import */ var _js_filterText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/filterText */ \"./src/js/filterText.js\");\n\n\n\n\n\n\n \n\n (async () => {\n    console.log(await (0,_js_loadData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    let challangesArray = await (0,_js_loadData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    \n    (0,_js_renderChallenges_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(challangesArray);\n    \n    let inputvalue = document.querySelector('#letters').value;\n    document.querySelector('#letters').addEventListener('keydown', (0,_js_filterText__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(inputvalue, challangesArray));\n\n  })();\n\n\n\n//# sourceURL=webpack://02-esc/./src/script.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;