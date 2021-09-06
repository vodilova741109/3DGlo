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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_counterTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/counterTimer */ \"./src/modules/counterTimer.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_comand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comand */ \"./src/modules/comand.js\");\n/* harmony import */ var _modules_regular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/regular */ \"./src/modules/regular.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n\n\n\n\n\n\n\n\n\n\n // таймер \n\n(0,_modules_counterTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('30 september 2021'); // меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(); // popup\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(); // табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); // слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // блок наша командв\n\n(0,_modules_comand__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // регулярные выражения\n\n(0,_modules_regular__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // калькулятор\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(100); //send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://3DGlo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      console.log(price * typeValue * squareValue);\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    totalValue.textContent = total;\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3DGlo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/comand.js":
/*!*******************************!*\
  !*** ./src/modules/comand.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar comand = function comand() {\n  var img = document.querySelectorAll('.command__photo');\n  img.forEach(function (item) {\n    var srcItem = item.src;\n    item.addEventListener('mouseover', function (event) {\n      var target = event.target;\n      event.target.src = event.target.dataset.img;\n    });\n    item.addEventListener('mouseout', function (event) {\n      event.target.src = srcItem;\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comand);\n\n//# sourceURL=webpack://3DGlo/./src/modules/comand.js?");

/***/ }),

/***/ "./src/modules/counterTimer.js":
/*!*************************************!*\
  !*** ./src/modules/counterTimer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction counterTimer(deadline) {\n  var timeHours = document.querySelector('#timer-hours');\n  var timeMinutes = document.querySelector('#timer-minutes');\n  var timeSeconds = document.querySelector('#timer-seconds');\n  var timeDay = document.querySelector('#timer-day');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60) % 24,\n        day = Math.floor(timeRemaining / 60 / 60 / 24);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds,\n      day: day\n    };\n  }\n\n  var idInterval = setInterval(updateClock, 1000);\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n    var seconds = ('0' + timer.seconds).slice(-2);\n    var minutes = ('0' + timer.minutes).slice(-2);\n    var hours = ('0' + timer.hours).slice(-2);\n    var day = ('0' + timer.day).slice(-2); // console.log(seconds, minutes, hours);\n\n    timeHours.textContent = hours;\n    timeMinutes.textContent = minutes;\n    timeSeconds.textContent = seconds;\n    timeDay.textContent = day;\n\n    if (timer.timeRemaining < 0) {\n      timeDay.textContent = '00';\n      timeHours.textContent = '00';\n      timeMinutes.textContent = '00';\n      timeSeconds.textContent = '00';\n      clearInterval(idInterval);\n    }\n  }\n\n  updateClock();\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterTimer);\n\n//# sourceURL=webpack://3DGlo/./src/modules/counterTimer.js?");

/***/ }),

/***/ "./src/modules/regular.js":
/*!********************************!*\
  !*** ./src/modules/regular.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar regular = function regular() {\n  // регулярные выражения\n  var inputCalc = document.querySelectorAll('.calc-block input'),\n      name = document.querySelectorAll('[name = user_name]'),\n      message = document.getElementById('form2-message'),\n      email = document.querySelectorAll('[type = email]'),\n      phone = document.querySelectorAll('[type = tel]'),\n      input = document.querySelectorAll('input'); // данные в калькуляторе\n\n  inputCalc.forEach(function (item) {\n    item.addEventListener('input', function () {\n      var text = item.value;\n      item.value = text.replace(/\\D/g, '');\n    });\n  }); // имя\n\n  name.forEach(function (item) {\n    item.addEventListener('input', function () {\n      var text = item.value;\n      item.value = text.match(/[А-ЯЁа-яё\\s-]+/ig);\n    });\n    item.addEventListener('blur', function () {\n      var text = item.value;\n\n      if (/^[\\s-]/.test(text) || /[\\s-]$/.test(text)) {\n        item.value = text.replace(/^[\\s-]/g, '').trim();\n        var textNew = item.value;\n        item.value = textNew.replace(/[\\s-]$/g, '').trim();\n      }\n\n      var name = item.value;\n      var newText = name.toLowerCase();\n\n      if (newText) {\n        item.value = newText[0].toUpperCase() + newText.slice(1);\n      }\n    });\n  }); // сообщение\n\n  message.addEventListener('input', function () {\n    var text = message.value;\n    message.value = text.match(/[А-ЯЁа-яё\\s-,:;\\.\\?!]+/ig);\n  }); //  email\n\n  email.forEach(function (item) {\n    item.addEventListener('input', function () {\n      var text = item.value;\n      item.value = text.match(/[A-Za-z@_!~'\\.\\*]+/ig);\n    });\n    item.addEventListener(\"blur\", function () {\n      var text = item.value;\n      var emailText = text.match(/\\w+@\\w+\\.\\w{2,3}/g);\n\n      if (emailText) {\n        item.value = emailText;\n      } else {\n        alert('Вы ввели не корректный email');\n      }\n    });\n  }); // телефон\n\n  phone.forEach(function (item) {\n    item.addEventListener('input', function () {\n      var text = item.value;\n      item.value = text.match(/[0-9-\\(\\)\\+]+/g);\n    });\n    item.addEventListener(\"blur\", function () {\n      var text = item.value;\n      var phoneText = text.match(/\\+?[78]([-()]*\\d){10}/g);\n\n      if (phoneText) {\n        item.value = phoneText;\n      } else {\n        alert('Вы ввели не корректный телефон');\n      }\n    });\n  });\n  input.forEach(function (item) {\n    item.addEventListener(\"blur\", function () {\n      var text = item.value;\n\n      if (/^[\\s-]/.test(text) || /[\\s-]$/.test(text)) {\n        item.value = text.replace(/^[\\s-]/g, '').trim();\n        var _textNew = item.value;\n        item.value = _textNew.replace(/[\\s-]$/g, '').trim();\n      }\n\n      item.value = text.replace(/\\s+/g, ' ').trim();\n      var textNew = item.value;\n      item.value = textNew.replace(/-+/g, '-').trim();\n    }, true);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regular);\n\n//# sourceURL=webpack://3DGlo/./src/modules/regular.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMesage = 'Спасибо мы скоро с вами свяжемся!';\n  var form = document.querySelectorAll('form'),\n      statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem;';\n  statusMessage.style.color = '#ffffff';\n  form.forEach(function (item) {\n    item.addEventListener('submit', function (event) {\n      event.preventDefault();\n      item.appendChild(statusMessage);\n      statusMessage.textContent = loadMessage;\n      var formData = new FormData(item);\n      var body = {};\n\n      var _iterator = _createForOfIteratorHelper(formData.entries()),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var val = _step.value;\n          body[val[0]] = val[1];\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      var mess = function mess(response) {\n        if (response.status !== 200) {\n          throw new Error('status network not 200');\n        }\n\n        statusMessage.textContent = successMesage;\n        setTimeout(function () {\n          statusMessage.textContent = '';\n        }, 3000);\n      };\n\n      var error = function error() {\n        statusMessage.textContent = errorMessage;\n        setTimeout(function () {\n          statusMessage.textContent = '';\n        }, 3000);\n      };\n\n      postData(body).then(mess)[\"catch\"](error);\n      postData(body);\n      var inputForm = document.querySelectorAll('form input');\n      inputForm.forEach(function (item) {\n        if (body !== '') {\n          item.value = '';\n        }\n\n        ;\n      });\n    });\n  });\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3DGlo/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slide = document.querySelectorAll('.portfolio-item'),\n    dots = document.querySelector('.portfolio-dots');\n\nfor (var i = 0; i < slide.length; i++) {\n  var dot = document.createElement('div');\n  dot.className = \"dot\";\n  dots.appendChild(dot);\n}\n\nvar slider = function slider() {\n  var dot = document.querySelectorAll('.dot'),\n      slider = document.querySelector('.portfolio-content');\n  var currentSlide = 0;\n  var interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3DGlo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tabContent[i].classList.remove('d-none');\n        tab[i].classList.add('active');\n      } else {\n        tabContent[i].classList.add('d-none');\n        tab[i].classList.remove('active');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    console.log(target);\n    target = target.closest('.service-header-tab');\n    console.log(target);\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3DGlo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var body = document.querySelector('body'),\n      menu = document.querySelector('menu');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  body.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.menu')) {\n      handlerMenu();\n    } else if (target.closest('.close-btn')) {\n      handlerMenu();\n    } else if (target.closest('menu>ul>li>a')) {\n      handlerMenu();\n    } else {\n      target = target.closest('menu');\n\n      if (!target) {\n        menu.classList.remove('active-menu');\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3DGlo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popUp = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'); // анимация меню\n\n  var count = -100;\n  var modalInterval;\n  var popupContent = document.querySelector('.popup-content');\n  var animate = false;\n\n  var modalAnimate = function modalAnimate() {\n    count++;\n\n    if (count < 150 && window.screen.width > 768) {\n      popupContent.style.top = count + 'px';\n    } else {\n      clearInterval(modalInterval);\n    }\n  };\n\n  modalInterval = setInterval(modalAnimate, 15);\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      count = -100;\n      popUp.style.display = 'block';\n      setInterval(modalAnimate, 15);\n      animate = false;\n    });\n  });\n  popUp.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popUp.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popUp.style.display = 'none';\n        clearInterval(modalInterval);\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://3DGlo/./src/modules/togglePopup.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;