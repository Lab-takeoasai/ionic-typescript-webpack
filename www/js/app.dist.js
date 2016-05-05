/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var testController_1 = __webpack_require__(1);
	angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
	    .run(function ($ionicPlatform) {
	    $ionicPlatform.ready(function () {
	        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
	            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	            cordova.plugins.Keyboard.disableScroll(true);
	        }
	        if (window.StatusBar) {
	            StatusBar.styleDefault();
	        }
	    });
	})
	    .config(function ($stateProvider, $urlRouterProvider) {
	    $stateProvider
	        .state('tab', {
	        url: '/tab',
	        abstract: true,
	        templateUrl: 'templates/tabs.html'
	    })
	        .state('tab.dash', {
	        url: '/dash',
	        views: {
	            'tab-dash': {
	                templateUrl: 'templates/tab-dash.html',
	                controller: testController_1.default,
	                controllerAs: "vm"
	            }
	        }
	    })
	        .state('tab.chats', {
	        url: '/chats',
	        views: {
	            'tab-chats': {
	                templateUrl: 'templates/tab-chats.html',
	                controller: 'ChatsCtrl'
	            }
	        }
	    })
	        .state('tab.chat-detail', {
	        url: '/chats/:chatId',
	        views: {
	            'tab-chats': {
	                templateUrl: 'templates/chat-detail.html',
	                controller: TestController
	            }
	        }
	    })
	        .state('tab.account', {
	        url: '/account',
	        views: {
	            'tab-account': {
	                templateUrl: 'templates/tab-account.html',
	                controller: 'AccountCtrl'
	            }
	        }
	    });
	    $urlRouterProvider.otherwise('/tab/dash');
	});
	var TestController = (function () {
	    function TestController() {
	        console.log("aaaaaaaaaaa");
	    }
	    return TestController;
	}());
	__webpack_require__(2);
	__webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var TestController = (function () {
	    function TestController() {
	        this.test = "tnthhtnhrthtnhthshh";
	        console.log("bbbbb");
	    }
	    return TestController;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TestController;


/***/ },
/* 2 */
/***/ function(module, exports) {

	angular.module('starter.controllers', [])
	    .controller('DashCtrl', function ($scope) { })
	    .controller('ChatsCtrl', function ($scope, Chats) {
	    $scope.chats = Chats.all();
	    $scope.remove = function (chat) {
	        Chats.remove(chat);
	    };
	})
	    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
	    $scope.chat = Chats.get($stateParams.chatId);
	})
	    .controller('AccountCtrl', function ($scope) {
	    $scope.settings = {
	        enableFriends: true
	    };
	});


/***/ },
/* 3 */
/***/ function(module, exports) {

	angular.module('starter.services', [])
	    .factory('Chats', function () {
	    var chats = [{
	            id: 0,
	            name: 'Ben Sparrow',
	            lastText: 'You on your way?',
	            face: 'img/ben.png'
	        }, {
	            id: 1,
	            name: 'Max Lynx',
	            lastText: 'Hey, it\'s me',
	            face: 'img/max.png'
	        }, {
	            id: 2,
	            name: 'Adam Bradleyson',
	            lastText: 'I should buy a boat',
	            face: 'img/adam.jpg'
	        }, {
	            id: 3,
	            name: 'Perry Governor',
	            lastText: 'Look at my mukluks!',
	            face: 'img/perry.png'
	        }, {
	            id: 4,
	            name: 'Mike Harrington',
	            lastText: 'This is wicked good ice cream.',
	            face: 'img/mike.png'
	        }];
	    return {
	        all: function () {
	            return chats;
	        },
	        remove: function (chat) {
	            chats.splice(chats.indexOf(chat), 1);
	        },
	        get: function (chatId) {
	            for (var i = 0; i < chats.length; i++) {
	                if (chats[i].id === parseInt(chatId)) {
	                    return chats[i];
	                }
	            }
	            return null;
	        }
	    };
	});


/***/ }
/******/ ]);