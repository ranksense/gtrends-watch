(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RouterModuleNgFactory, RenderType_ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_0, View_ɵEmptyOutletComponent_Host_0, ɵEmptyOutletComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModuleNgFactory", function() { return RouterModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵEmptyOutletComponent", function() { return RenderType_ɵEmptyOutletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵEmptyOutletComponent_0", function() { return View_ɵEmptyOutletComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵEmptyOutletComponent_Host_0", function() { return View_ɵEmptyOutletComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵEmptyOutletComponentNgFactory", function() { return ɵEmptyOutletComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var RouterModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [ɵEmptyOutletComponentNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]]])]); });

var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });

function View_ɵEmptyOutletComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵEmptyOutletComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponent"], [], null, null)], null, null); }
var ɵEmptyOutletComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponent"], View_ɵEmptyOutletComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, ɵ0, ɵ1, ɵ2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _category_topics_category_topics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-topics/category-topics.component */ "./src/app/category-topics/category-topics.component.ts");




var ɵ0 = {
    breadcrumb: {
        label: 'Dashboard',
        url: '/dashboard'
    }
}, ɵ1 = {
    breadcrumb: {
        label: 'Categories',
        url: '/trends'
    }
}, ɵ2 = {
    breadcrumb: {
        label: 'Topics',
        url: '/topics'
    }
};
var routes = [
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        data: ɵ0,
    },
    {
        path: 'trends',
        component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_1__["CategoriesComponent"],
        data: ɵ1
    },
    {
        path: 'topics/:id',
        component: _category_topics_category_topics_component__WEBPACK_IMPORTED_MODULE_3__["CategoryTopicsComponent"],
        data: ɵ2
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());




/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["h1[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    color: #999;\n    margin-bottom: 0;\n  }\nh2[_ngcontent-%COMP%] {\n    font-size: 2em;\n    margin-top: 0;\n    padding-top: 0;\n  }\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    text-decoration: none;\n    margin-top: 10px;\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n  }\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\n    color: #607d8b;\n  }\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #039be5;\n    background-color: #cfd8dc;\n  }\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    color: #039be5;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsY0FBYztFQUNoQjtBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuaDEge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6ICM5OTk7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuICBuYXYgYSB7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIG5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XG4gICAgY29sb3I6ICM2MDdkOGI7XG4gIH1cbiAgbmF2IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMDM5YmU1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG4gIH1cbiAgbmF2IGEuYWN0aXZlIHtcbiAgICBjb2xvcjogIzAzOWJlNTtcbiAgfSJdfQ== */"];



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _breadcrumb_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component.ngfactory */ "./src/app/breadcrumb/breadcrumb.component.ngfactory.js");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _messages_messages_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages/messages.component.ngfactory */ "./src/app/messages/messages.component.ngfactory.js");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "nav", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "a", [["routerLink", "/dashboard"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Dashboard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "a", [["routerLink", "/trends"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Search Trends"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "app-breadcrumb", [], null, null, null, _breadcrumb_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_BreadcrumbComponent_0"], _breadcrumb_breadcrumb_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_BreadcrumbComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 114688, null, 0, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "app-messages", [], null, null, null, _messages_messages_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MessagesComponent_0"], _messages_messages_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MessagesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"], [_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"]], null, null)], function (_ck, _v) { var currVal_3 = "/dashboard"; _ck(_v, 4, 0, currVal_3); var currVal_6 = "/trends"; _ck(_v, 7, 0, currVal_6); _ck(_v, 10, 0); _ck(_v, 12, 0); _ck(_v, 14, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).target; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).href; _ck(_v, 6, 0, currVal_4, currVal_5); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Google Trends Watcher';
    }
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! exports provided: AppServerModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return AppServerModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_server_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component.ngfactory */ "./src/app/dashboard/dashboard.component.ngfactory.js");
/* harmony import */ var _categories_categories_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories/categories.component.ngfactory */ "./src/app/categories/categories.component.ngfactory.js");
/* harmony import */ var _category_topics_category_topics_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-topics/category-topics.component.ngfactory */ "./src/app/category-topics/category-topics.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_server__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _universal_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./universal-interceptor */ "./src/app/universal-interceptor.ts");
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nguniversal/express-engine/tokens */ "@nguniversal/express-engine/tokens");
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var angular_in_memory_web_api_interfaces__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-in-memory-web-api/interfaces */ "angular-in-memory-web-api/interfaces");
/* harmony import */ var angular_in_memory_web_api_interfaces__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular_in_memory_web_api_interfaces__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var angular_in_memory_web_api_http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-in-memory-web-api/http-client-in-memory-web-api.module */ "angular-in-memory-web-api/http-client-in-memory-web-api.module");
/* harmony import */ var angular_in_memory_web_api_http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular_in_memory_web_api_http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/http */ "@angular/http");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_angular_http__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/animations */ "@angular/animations");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_angular_animations__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
/* harmony import */ var _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _category_topics_category_topics_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./category-topics/category-topics.component */ "./src/app/category-topics/category-topics.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





























var AppServerModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["DashboardComponentNgFactory"], _categories_categories_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponentNgFactory"], _category_topics_category_topics_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["CategoryTopicsComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3), new _angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_server_platform_server_d"](p3_0)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_LOADER"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_server_platform_server_c"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_server_platform_server_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵTRANSITION_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵSharedStylesHost"], null, [_angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_server_platform_server_c"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ɵServerRendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ɵServerRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵNoopAnimationDriver"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_server_platform_server_a"], [_angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ɵServerRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4352, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], null, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["ViewportScroller"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵNullViewportScroller"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], function (p0_0, p1_0) { return [p0_0, new _universal_interceptor__WEBPACK_IMPORTED_MODULE_16__["UniversalInterceptor"](p1_0)]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"], [2, _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_17__["REQUEST"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_in_memory_web_api_interfaces__WEBPACK_IMPORTED_MODULE_18__["InMemoryDbService"], _in_memory_data_service__WEBPACK_IMPORTED_MODULE_19__["InMemoryDataService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["XhrFactory"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpBackend"], angular_in_memory_web_api_http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_20__["httpClientInMemBackendServiceFactory"], [angular_in_memory_web_api_interfaces__WEBPACK_IMPORTED_MODULE_18__["InMemoryDbService"], angular_in_memory_web_api_interfaces__WEBPACK_IMPORTED_MODULE_18__["InMemoryBackendConfig"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpHandler"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_server_platform_server_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_21__["BrowserXhr"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_21__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_21__["BaseResponseOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_21__["XSRFStrategy"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_server_platform_server_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_21__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_21__["XHRBackend"], [_angular_http__WEBPACK_IMPORTED_MODULE_21__["BrowserXhr"], _angular_http__WEBPACK_IMPORTED_MODULE_21__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_21__["XSRFStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_21__["RequestOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_21__["BaseRequestOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_http__WEBPACK_IMPORTED_MODULE_21__["Http"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_server_platform_server_g"], [_angular_http__WEBPACK_IMPORTED_MODULE_21__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_21__["RequestOptions"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_22__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], "serverApp", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵTRANSITION_ID"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_i"](p1_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_h"](p2_0, p2_1, p2_2)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵTRANSITION_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_23__["ModuleMapNgFactoryLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_23__["MODULE_MAP"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], function () { return [[{ path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["ɵ0"] }, { path: "trends", component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_26__["CategoriesComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["ɵ1"] }, { path: "topics/:id", component: _category_topics_category_topics_component__WEBPACK_IMPORTED_MODULE_27__["CategoryTopicsComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["ɵ2"] }, { path: "", redirectTo: "/dashboard", pathMatch: "full" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_in_memory_web_api_http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_20__["HttpClientInMemoryWebApiModule"], angular_in_memory_web_api_http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_20__["HttpClientInMemoryWebApiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_28__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_28__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_http__WEBPACK_IMPORTED_MODULE_21__["HttpModule"], _angular_http__WEBPACK_IMPORTED_MODULE_21__["HttpModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ServerModule"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_10__["ServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_23__["ModuleMapLoaderModule"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_23__["ModuleMapLoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, angular_in_memory_web_api_interfaces__WEBPACK_IMPORTED_MODULE_18__["InMemoryBackendConfig"], { dataEncapsulation: false }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"], "NoopAnimations", [])]); });



/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! exports provided: AppServerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return AppServerModule; });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());



/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.css.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.css.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".breadcrumb[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  list-style: none;\n  background-color: #eee;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  font-size: 18px;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]:before {\n  padding: 8px;\n  color: black;\n  content: \"/\\00a0\";\n}\n\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0275d8;\n  text-decoration: none;\n}\n\n.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #607D8B;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWIge1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi5icmVhZGNydW1iIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5icmVhZGNydW1iIGxpK2xpOmJlZm9yZSB7XG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6IGJsYWNrO1xuICBjb250ZW50OiBcIi9cXDAwYTBcIjtcbn1cblxuLmJyZWFkY3J1bWIgbGkgYSB7XG4gIGNvbG9yOiAjMDI3NWQ4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5icmVhZGNydW1iIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzYwN0Q4QjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iXX0= */"];



/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_BreadcrumbComponent, View_BreadcrumbComponent_0, View_BreadcrumbComponent_Host_0, BreadcrumbComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BreadcrumbComponent", function() { return RenderType_BreadcrumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BreadcrumbComponent_0", function() { return View_BreadcrumbComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BreadcrumbComponent_Host_0", function() { return View_BreadcrumbComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponentNgFactory", function() { return BreadcrumbComponentNgFactory; });
/* harmony import */ var _breadcrumb_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb.component.css.shim.ngstyle */ "./src/app/breadcrumb/breadcrumb.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb.component */ "./src/app/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_BreadcrumbComponent = [_breadcrumb_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BreadcrumbComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BreadcrumbComponent, data: {} });

function View_BreadcrumbComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, _v.context.$implicit.url); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.label; _ck(_v, 4, 0, currVal_3); }); }
function View_BreadcrumbComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "ol", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "a", [["class", "breadcrumb"], ["routerLink", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BreadcrumbComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = ""; _ck(_v, 3, 0, currVal_2); var currVal_3 = _co.breadcrumbs; _ck(_v, 6, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_BreadcrumbComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-breadcrumb", [], null, null, null, View_BreadcrumbComponent_0, RenderType_BreadcrumbComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BreadcrumbComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-breadcrumb", _breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], View_BreadcrumbComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.ts":
/*!****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);



var BreadcrumbComponent = /** @class */ (function () {
    /**
     * @class DetailComponent
     * @constructor
     */
    function BreadcrumbComponent(activatedRoute, router, _renderer2, _document) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._renderer2 = _renderer2;
        this._document = _document;
        this.breadcrumbs = [];
    }
    /**
     * Let's go!
     *
     * @class DetailComponent
     * @method ngOnInit
     */
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        //subscribe to the NavigationEnd event
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function (event) {
            //set breadcrumbs
            var root = _this.activatedRoute.root;
            _this.breadcrumbs = _this.getBreadcrumbs(root);
            console.log('breadcrumbs', _this.breadcrumbs);
            var itemListElement = '';
            _this.breadcrumbs.forEach(function (item) {
                itemListElement = itemListElement +
                    ("{\n          \"@type\": \"ListItem\",\n          \"name\": \"" + item.label + "\",\n          \"item\": \"" + item.url + "\"\n        },\n        ");
            });
            itemListElement = itemListElement.substring(0, itemListElement.length - 2);
            var s = _this._renderer2.createElement('script');
            s.type = "application/ld+json";
            s.text = "\n        {\n          \"@context\": \"https://schema.org\",\n          \"@type\": \"BreadcrumbList\",\n          \"itemListElement\": [" + itemListElement + "]\n        }\n      ";
            _this._renderer2.appendChild(_this._document.body, s);
        });
    };
    /**
     * Returns array of IBreadcrumb objects that represent the breadcrumb
     *
     * @class DetailComponent
     * @method getBreadcrumbs
     * @param {ActivateRoute} route
     * @param {string} url
     * @param {IBreadcrumb[]} breadcrumbs
     */
    BreadcrumbComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ""; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        //get the child routes
        var children = route.children;
        //return if there are no more children
        if (children.length === 0) {
            return breadcrumbs;
        }
        //iterate over each children
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            //verify primary route
            if (child.outlet !== _angular_router__WEBPACK_IMPORTED_MODULE_1__["PRIMARY_OUTLET"]) {
                continue;
            }
            //verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            //get the route's URL segment
            var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join("/");
            //append route URL to URL
            url += "/" + routeURL;
            //add breadcrumb
            var breadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB]['label'],
                params: child.snapshot.params,
                url: url
            };
            breadcrumbs.push(breadcrumb);
            //recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
    };
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/categories/categories.component.css.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".categories[_ngcontent-%COMP%] {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.categories[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n.categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color:#607D8B;\n}\n.categories[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete[_ngcontent-%COMP%] {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDO0FBQ3pDO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbi5jYXRlZ29yaWVzIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDE1ZW07XG59XG4uY2F0ZWdvcmllcyBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBtYXJnaW46IC41ZW07XG4gIHBhZGRpbmc6IC4zZW0gMDtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuIFxuLmNhdGVnb3JpZXMgbGk6aG92ZXIge1xuICBjb2xvcjogIzYwN0Q4QjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgbGVmdDogLjFlbTtcbn1cbiBcbi5jYXRlZ29yaWVzIGEge1xuICBjb2xvcjogIzg4ODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjUwcHg7XG59XG4gXG4uY2F0ZWdvcmllcyBhOmhvdmVyIHtcbiAgY29sb3I6IzYwN0Q4Qjtcbn1cbiBcbi5jYXRlZ29yaWVzIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWluLXdpZHRoOiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cbiBcbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IGhhbmQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cbiBcbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG4gXG5idXR0b24uZGVsZXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxOTRweDtcbiAgdG9wOiAtMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"];



/***/ }),

/***/ "./src/app/categories/categories.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/categories/categories.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_CategoriesComponent, View_CategoriesComponent_0, View_CategoriesComponent_Host_0, CategoriesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CategoriesComponent", function() { return RenderType_CategoriesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoriesComponent_0", function() { return View_CategoriesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoriesComponent_Host_0", function() { return View_CategoriesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponentNgFactory", function() { return CategoriesComponentNgFactory; });
/* harmony import */ var _categories_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.component.css.shim.ngstyle */ "./src/app/categories/categories.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _meta_tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../meta-tags.service */ "./src/app/meta-tags.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_CategoriesComponent = [_categories_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CategoriesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CategoriesComponent, data: {} });

function View_CategoriesComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "badge"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "button", [["class", "delete"], ["data-protractor", "delete-category-button"], ["title", "delete category"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.delete(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["x"]))], function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/topics/", _v.context.$implicit.id, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.id; _ck(_v, 4, 0, currVal_3); var currVal_4 = _v.context.$implicit.name; _ck(_v, 5, 0, currVal_4); }); }
function View_CategoriesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Search Trends"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Category name: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, [["categoryName", 1]], null, 0, "input", [["data-protractor", "category-name-input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "button", [["data-protractor", "create-category-button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.add(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).value);
        var pd_0 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).value = "") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" add "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "ul", [["class", "categories"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CategoriesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.categories; _ck(_v, 10, 0, currVal_0); }, null); }
function View_CategoriesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-categories", [], null, null, null, View_CategoriesComponent_0, RenderType_CategoriesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"], [_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"], _meta_tags_service__WEBPACK_IMPORTED_MODULE_6__["MetaTagsService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CategoriesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-categories", _categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"], View_CategoriesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _meta_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meta-tags.service */ "./src/app/meta-tags.service.ts");

//import { CATEGORIES } from '../mock-categories';


var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoryService, metaTagsService) {
        this.categoryService = categoryService;
        this.metaTagsService = metaTagsService;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
        //SEO tags
        this.metaTagsService.setCanonicalURL();
        this.metaTagsService.setPageTitle('Global Trends - Google Trends Watcher');
        this.metaTagsService.setMetaDescription("Use the global trends page to narrow down into specific categories");
    };
    CategoriesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.categoryService.addCategory({ name: name })
            .subscribe(function (hero) {
            _this.categories.push(hero);
        });
    };
    CategoriesComponent.prototype.delete = function (category) {
        this.categories = this.categories.filter(function (c) { return c !== category; });
        this.categoryService.deleteCategory(category).subscribe();
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
    };
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/category-search/category-search.component.css.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/category-search/category-search.component.css.shim.ngstyle.js ***!
  \*******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border-bottom: 1px solid gray;\n    border-left: 1px solid gray;\n    border-right: 1px solid gray;\n    width: 200px;\n    height: 16px;\n    padding: 5px;\n    background-color: white;\n    cursor: pointer;\n    list-style-type: none;\n  }\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    background-color: #607D8B;\n  }\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #888;\n    display: block;\n    text-decoration: none;\n  }\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: white;\n  }\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n    color: white;\n  }\n#search-box[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 20px;\n  }\nul.search-result[_ngcontent-%COMP%] {\n    margin-top: 0;\n    padding-left: 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnktc2VhcmNoL2NhdGVnb3J5LXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQztJQUNJLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtBQUdBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS1zZWFyY2gvY2F0ZWdvcnktc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDYXRlZ29yeVNlYXJjaCBwcml2YXRlIHN0eWxlcyAqL1xuLnNlYXJjaC1yZXN1bHQgbGkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cbiAgIFxuICAuc2VhcmNoLXJlc3VsdCBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgfVxuICAgXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGEge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAgXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuc2VhcmNoLXJlc3VsdCBsaSBhOmFjdGl2ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gICNzZWFyY2gtYm94IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gICBcbiAgIFxuICB1bC5zZWFyY2gtcmVzdWx0IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfSJdfQ== */"];



/***/ }),

/***/ "./src/app/category-search/category-search.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/category-search/category-search.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_CategorySearchComponent, View_CategorySearchComponent_0, View_CategorySearchComponent_Host_0, CategorySearchComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CategorySearchComponent", function() { return RenderType_CategorySearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategorySearchComponent_0", function() { return View_CategorySearchComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategorySearchComponent_Host_0", function() { return View_CategorySearchComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySearchComponentNgFactory", function() { return CategorySearchComponentNgFactory; });
/* harmony import */ var _category_search_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-search.component.css.shim.ngstyle */ "./src/app/category-search/category-search.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _category_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-search.component */ "./src/app/category-search/category-search.component.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_CategorySearchComponent = [_category_search_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CategorySearchComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CategorySearchComponent, data: {} });

function View_CategorySearchComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "]))], function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/topics/", _v.context.$implicit.id, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_3); }); }
function View_CategorySearchComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["id", "search-component"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Category Search"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, [["searchBox", 1]], null, 0, "input", [["id", "search-box"]], null, [[null, "input"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_co.search(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "ul", [["class", "search-result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_CategorySearchComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform(_co.categories$)); _ck(_v, 6, 0, currVal_0); }, null); }
function View_CategorySearchComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-category-search", [], null, null, null, View_CategorySearchComponent_0, RenderType_CategorySearchComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _category_search_component__WEBPACK_IMPORTED_MODULE_4__["CategorySearchComponent"], [_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CategorySearchComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-category-search", _category_search_component__WEBPACK_IMPORTED_MODULE_4__["CategorySearchComponent"], View_CategorySearchComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/category-search/category-search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/category-search/category-search.component.ts ***!
  \**************************************************************/
/*! exports provided: CategorySearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySearchComponent", function() { return CategorySearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");




var CategorySearchComponent = /** @class */ (function () {
    function CategorySearchComponent(categoryService) {
        this.categoryService = categoryService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // Push a search term into the observable stream.
    CategorySearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    CategorySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categories$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.categoryService.searchCategories(term); }));
    };
    return CategorySearchComponent;
}());



/***/ }),

/***/ "./src/app/category-topics/category-topics.component.css.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/category-topics/category-topics.component.css.shim.ngstyle.js ***!
  \*******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".topics[_ngcontent-%COMP%] {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 45em;\n  }\n.topics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    position: relative;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n.topics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #888;\n    text-decoration: none;\n    position: relative;\n    display: block;\n    width: 750px;\n  }\n.topics[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    min-width: 16px;\n    text-align: left;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnktdG9waWNzL2NhdGVnb3J5LXRvcGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDtBQUNqRDtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7RUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS10b3BpY3MvY2F0ZWdvcnktdG9waWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDYXRlZ29yeVRvcGljc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuLnRvcGljcyB7XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDQ1ZW07XG4gIH1cbiAgLnRvcGljcyBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gICAgbWFyZ2luOiAuNWVtO1xuICAgIHBhZGRpbmc6IC4zZW0gMDtcbiAgICBoZWlnaHQ6IDEuNmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAgXG4gIC50b3BpY3Mgc3BhbiB7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNzUwcHg7XG4gIH1cbiAgIFxuICAudG9waWNzIC5iYWRnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHRvcDogLTRweDtcbiAgICBoZWlnaHQ6IDEuOGVtO1xuICAgIG1pbi13aWR0aDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgfVxuICAgXG4iXX0= */"];



/***/ }),

/***/ "./src/app/category-topics/category-topics.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/category-topics/category-topics.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_CategoryTopicsComponent, View_CategoryTopicsComponent_0, View_CategoryTopicsComponent_Host_0, CategoryTopicsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CategoryTopicsComponent", function() { return RenderType_CategoryTopicsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoryTopicsComponent_0", function() { return View_CategoryTopicsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoryTopicsComponent_Host_0", function() { return View_CategoryTopicsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTopicsComponentNgFactory", function() { return CategoryTopicsComponentNgFactory; });
/* harmony import */ var _category_topics_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-topics.component.css.shim.ngstyle */ "./src/app/category-topics/category-topics.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _category_topics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-topics.component */ "./src/app/category-topics/category-topics.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _meta_tags_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../meta-tags.service */ "./src/app/meta-tags.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_CategoryTopicsComponent = [_category_topics_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CategoryTopicsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CategoryTopicsComponent, data: {} });

function View_CategoryTopicsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "topic badge"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }); }
function View_CategoryTopicsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " Details"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["id: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 7, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["name: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 5, "input", [["data-protractor", "category-name-input"], ["placeholder", "name"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.category.name = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "button", [["data-protractor", "go-back-button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["go back"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "button", [["data-protractor", "save-button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.save() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "ul", [["class", "topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CategoryTopicsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_9 = _co.category.name; _ck(_v, 14, 0, currVal_9); var currVal_10 = _co.category.topics; _ck(_v, 23, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.category.name)); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.category.id; _ck(_v, 7, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_CategoryTopicsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CategoryTopicsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.category; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CategoryTopicsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-category-topics", [], null, null, null, View_CategoryTopicsComponent_0, RenderType_CategoryTopicsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _category_topics_component__WEBPACK_IMPORTED_MODULE_4__["CategoryTopicsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _meta_tags_service__WEBPACK_IMPORTED_MODULE_7__["MetaTagsService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CategoryTopicsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-category-topics", _category_topics_component__WEBPACK_IMPORTED_MODULE_4__["CategoryTopicsComponent"], View_CategoryTopicsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/category-topics/category-topics.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/category-topics/category-topics.component.ts ***!
  \**************************************************************/
/*! exports provided: CategoryTopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTopicsComponent", function() { return CategoryTopicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _meta_tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../meta-tags.service */ "./src/app/meta-tags.service.ts");







var CategoryTopicsComponent = /** @class */ (function () {
    function CategoryTopicsComponent(route, categoryService, location, metaTagsService) {
        this.route = route;
        this.categoryService = categoryService;
        this.location = location;
        this.metaTagsService = metaTagsService;
        this.componentDestroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    CategoryTopicsComponent.prototype.ngOnInit = function () {
        this.getCategory();
        // SEO tags
        this.metaTagsService.setCanonicalURL();
        this.metaTagsService.setPageTitle('Selected Trends - Google Trends Watcher');
        this.metaTagsService.setMetaDescription('Use the selected trends page to find the latest topics breaking out in Google Trends');
    };
    CategoryTopicsComponent.prototype.ngOnDestroy = function () {
        this.componentDestroyed.next();
        this.componentDestroyed.complete();
    };
    CategoryTopicsComponent.prototype.getCategory = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.categoryService.getCategory(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.componentDestroyed)).subscribe(function (category) {
            _this.category = category;
            _this.metaTagsService.setPageTitle(_this.category.name + " Trends - Google Trends Watcher");
            _this.metaTagsService.setMetaDescription("Use the " + _this.category.name + " trends page to find the latest topics breaking out in Google Trends");
        });
    };
    CategoryTopicsComponent.prototype.save = function () {
        var _this = this;
        this.categoryService.updateCategory(this.category)
            .subscribe(function () { return _this.goBack(); });
    };
    CategoryTopicsComponent.prototype.goBack = function () {
        this.location.back();
    };
    return CategoryTopicsComponent;
}());



/***/ }),

/***/ "./src/app/category.service.ts":
/*!*************************************!*\
  !*** ./src/app/category.service.ts ***!
  \*************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);


//import { CATEGORIES } from './mock-categories';





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CategoryService = /** @class */ (function () {
    function CategoryService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.categoriesUrl = 'api/categories'; // URL to web api
    }
    CategoryService.prototype.getCategories = function () {
        var _this = this;
        // TODO: send the message _after_ fetching the categories
        //this.messageService.add('CategoryService: fetched categories');
        //return of(CATEGORIES);
        return this.http.get(this.categoriesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log('fetched categories'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCategories', [])));
    };
    /** GET category by id. Will 404 if id not found */
    CategoryService.prototype.getCategory = function (id) {
        var _this = this;
        var url = this.categoriesUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched category id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getCategory id=" + id)));
    };
    /** PUT: update the category on the server */
    CategoryService.prototype.updateCategory = function (category) {
        var _this = this;
        return this.http.put(this.categoriesUrl, category, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated category id=" + category.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateCategory')));
    };
    /** POST: add a new category to the server */
    CategoryService.prototype.addCategory = function (category) {
        var _this = this;
        return this.http.post(this.categoriesUrl, category, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newCategory) { return _this.log("added category w/ id=" + newCategory.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addCategory')));
    };
    /** DELETE: delete the category from the server */
    CategoryService.prototype.deleteCategory = function (category) {
        var _this = this;
        var id = typeof category === 'number' ? category : category.id;
        var url = this.categoriesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted category id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteCategory')));
    };
    /* GET categories whose name contains search term */
    CategoryService.prototype.searchCategories = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty category array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        return this.http.get(this.categoriesUrl + "/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("found categories matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchCategories', [])));
    };
    /* GET topics whose title contains search term */
    CategoryService.prototype.searchTopics = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty category array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        return this.http.get(this.categoriesUrl + "/?topics=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("found categories with topics matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchTopics', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    CategoryService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
        };
    };
    //private topicsUrl = 'api/topics';  // URL to web api
    CategoryService.prototype.log = function (message) {
        this.messageService.add("CategoryService: " + message);
    };
    CategoryService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"]({ factory: function CategoryService_Factory() { return new CategoryService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"](_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: CategoryService, providedIn: "root" });
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css.shim.ngstyle.js ***!
  \*******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[class*='col-'][_ngcontent-%COMP%] {\n    float: left;\n    padding-right: 20px;\n    padding-bottom: 20px;\n  }\n[class*='col-'][_ngcontent-%COMP%]:last-of-type {\n    padding-right: 0;\n  }\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n  }\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\n    box-sizing: border-box;\n  }\nh3[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 0;\n  }\nh4[_ngcontent-%COMP%] {\n    position: relative;\n  }\n.grid[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n.col-1-4[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n.module[_ngcontent-%COMP%] {\n    padding: 20px;\n    text-align: center;\n    color: #eee;\n    max-height: 120px;\n    min-width: 120px;\n    background-color: #607d8b;\n    border-radius: 2px;\n  }\n.module[_ngcontent-%COMP%]:hover {\n    background-color: #eee;\n    cursor: pointer;\n    color: #607d8b;\n  }\n.grid-pad[_ngcontent-%COMP%] {\n    padding: 10px 0;\n  }\n.grid-pad[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%]:last-of-type {\n    padding-right: 20px;\n  }\n@media (max-width: 600px) {\n    .module[_ngcontent-%COMP%] {\n      font-size: 10px;\n      max-height: 75px; }\n  }\n@media (max-width: 1024px) {\n    .grid[_ngcontent-%COMP%] {\n      margin: 0;\n    }\n    .module[_ngcontent-%COMP%] {\n      min-width: 60px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUM1QztJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNBO0lBR0Usc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0E7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRTtNQUNFLGVBQWU7TUFDZixnQkFBZ0IsRUFBRTtFQUN0QjtBQUNBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7SUFDQTtNQUNFLGVBQWU7SUFDakI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuW2NsYXNzKj0nY29sLSddIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gICosICo6YWZ0ZXIsICo6YmVmb3JlIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIGg0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmdyaWQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuY29sLTEtNCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICAubW9kdWxlIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2VlZTtcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG4gIC5tb2R1bGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjNjA3ZDhiO1xuICB9XG4gIC5ncmlkLXBhZCB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG4gIC5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLm1vZHVsZSB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBtYXgtaGVpZ2h0OiA3NXB4OyB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5ncmlkIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLm1vZHVsZSB7XG4gICAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgfVxuICB9Il19 */"];



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_DashboardComponent, View_DashboardComponent_0, View_DashboardComponent_Host_0, DashboardComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DashboardComponent", function() { return RenderType_DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_0", function() { return View_DashboardComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_Host_0", function() { return View_DashboardComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponentNgFactory", function() { return DashboardComponentNgFactory; });
/* harmony import */ var _dashboard_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.css.shim.ngstyle */ "./src/app/dashboard/dashboard.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _category_search_category_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category-search/category-search.component.ngfactory */ "./src/app/category-search/category-search.component.ngfactory.js");
/* harmony import */ var _category_search_category_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category-search/category-search.component */ "./src/app/category-search/category-search.component.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _topics_search_topics_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../topics-search/topics-search.component.ngfactory */ "./src/app/topics-search/topics-search.component.ngfactory.js");
/* harmony import */ var _topics_search_topics_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../topics-search/topics-search.component */ "./src/app/topics-search/topics-search.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _meta_tags_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../meta-tags.service */ "./src/app/meta-tags.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_DashboardComponent = [_dashboard_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DashboardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DashboardComponent, data: {} });

function View_DashboardComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "a", [["class", "col-1-4"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "module category"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/topics/", _v.context.$implicit.id, ""); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.name; _ck(_v, 4, 0, currVal_3); }); }
function View_DashboardComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Top Search Trends"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "grid grid-pad"], ["data-protractor", "top-search-trends"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DashboardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-category-search", [], null, null, null, _category_search_category_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_CategorySearchComponent_0"], _category_search_category_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_CategorySearchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _category_search_category_search_component__WEBPACK_IMPORTED_MODULE_5__["CategorySearchComponent"], [_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "app-topics-search", [], null, null, null, _topics_search_topics_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TopicsSearchComponent_0"], _topics_search_topics_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TopicsSearchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 114688, null, 0, _topics_search_topics_search_component__WEBPACK_IMPORTED_MODULE_8__["TopicsSearchComponent"], [_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.categories; _ck(_v, 4, 0, currVal_0); _ck(_v, 6, 0); _ck(_v, 8, 0); }, null); }
function View_DashboardComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-dashboard", [], null, null, null, View_DashboardComponent_0, RenderType_DashboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], [_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"], _meta_tags_service__WEBPACK_IMPORTED_MODULE_10__["MetaTagsService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DashboardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-dashboard", _dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], View_DashboardComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _meta_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meta-tags.service */ "./src/app/meta-tags.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(categoryService, metaTagsService) {
        this.categoryService = categoryService;
        this.metaTagsService = metaTagsService;
        this.categories = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getCategories();
        //SEO tags
        this.metaTagsService.setCanonicalURL();
        this.metaTagsService.setPageTitle('Main Dashboard - Google Trends Watcher');
        this.metaTagsService.setMetaDescription("Use the dashboard to find the latest trends to watch for in Google Trends");
    };
    DashboardComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories.slice(1, 5); });
    };
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        /*const categories = [
         { id: 1, name: 'All Categories' },
         { id: 2, name: 'Business' },
         { id: 3, name: 'Entertainment' },
         { id: 4, name: 'Sci/Tech' },
         { id: 5, name: 'Sports' },
         { id: 6, name: 'Top Stories' }
       ];*/
        var categories = [
            { id: 1, name: 'All Categories',
                topics: ["blink-182 & Lil Wayne announce co-headlining tour", "Duchess Meghan's royal baby is here and it's a boy, Buckingham Palace says", "Bookmakers suspend betting on royal baby birthdate amid speculation that Meghan has given birth", "Microsoft open-sources its quantum computing development tools", "Giants vs. Reds odds, line: MLB picks, predictions for May 6 from model on 73-51 roll", "St. Charles levee breach prompts evacuations", "Gina Rodriguez Marries Longtime Love Joe LoCicero", "Spider-Man: Far From Home's new trailer spoils Avengers: Endgame, explodes the MCU", "Wall Street falls after Trump's China tariff threat", "Wendy's is bringing back its spicy chicken nuggets…eet racked up more than 2 million likes in 2 days", "China State Funds Sought to Cushion Blow as Stocks Tumble", "S&P Metals & Mining SPDR (XME) Looking To Gain Traction: What the Technicals Reveal", "Sunscreens may enter bloodstream, but health effect unknown, study finds"]
            },
            { id: 2, name: 'Business',
                topics: ["Chance the Rapper leads Twitter order for Wendy's to bring back spicy chicken nuggets", "Microsoft open-sources its quantum computing development tools", "Riot Employees Prepare For Walkout Today", "Barclays Reaffirms Equal Weight Rating for WOLTERS KLUWER/ADR (WTKWY)", "Which Stocks Have the Most to Lose From Trump's Trade War and How to Know When They Hit Bottom", "Greenlight's David Einhorn pitches long on AerCap, short on GATX at Sohn Conference", "Glenview's Larry Robbins says he's shorting 3M shares", "Pfizer gets US approval for $225000 a year heart drug", "It may surprise you: Jaguar Health, Inc. (NASDAQ:JAGX)", "Asian stocks mixed after Wall Street day that was listless", "Microsoft Launches the Azure Blockchain Service", "Sunscreens may enter bloodstream, but health effect unknown, study finds"]
            },
            { id: 3, name: 'Entertainment',
                topics: ["Lil Wayne and Blink-182 are teaming up for new tour", "A Timeline of Live Performances at the Met Gala", "INCUBUS Announces 20th-Anniversary Tour For Acclaimed 'Make Yourself' Album", "46th annual Daytime Emmy Awards: The winners list", "The Young and the Restless Spoilers Raw Breakdown: Monday, May 6", "Singer Joy Villa wears anti-abortion gown on Daytime Emmys red carpet: 'Pro-life is pro-woman'", "Review: Jacqueline MacInnes Wood wins 2019 Outstanding Lead Actress Emmy", "2019 Daytime Emmy Winners Gallery", "Bookmakers suspend betting on royal baby birthdate amid speculation that Meghan has given birth", "'Rachael Ray,' Kyler Pettis are early Daytime Emmy Award winners", "Daytime Emmys 2019: DailyMailTV wins Outstanding E… News Program... as Alex Trebek accepts award ...", "Curvy socialite Kim Kardashian earns up to KSh 50 million from a sponsored Instagram post", "Famous faces tweet congratulations to Prince Harry, Meghan Markle after royal baby arrives", "Wendy Williams' Estranged Husband Demanding Spousal Support in Divorce Proceedings", "Wyatt Learns Thomas Wants Hope As Sally Comes Clean", "Joyner Lucas Exposes DMs from Tomi Lahren", "Ed Sheeran's Been Playing His New Song At His Concerts And No One Realised!", "DAYTIME EMMY WINNER: Outstanding Supporting Actor In A Drama Series"]
            },
            { id: 4, name: 'Sci/Tech',
                topics: ["Microsoft open-sources its quantum computing development tools", "Assassin's Creed Ragnarok Screenshots, Details Leak", "Machine learning for .NET devs: ML.NET goes GA", "Microsoft is making Cortana better at holding conversations", "Original Devil May Cry Coming to Nintendo Switch This Summer", "Ted Chiang, the mind behind Arrival, returns with another awe-inducing sci-fi collection", "Microsoft's Fluent Design System goes cross platform with iOS, Android, and the web", "Scientists Record The First Collision Between Black Hole And Neutron Star", "Windows 10 on ARM firmware for Lumia 950 XL now available", "Microsoft just teased a slick new Minecraft AR game for your phone", "The Gaia Spacecraft Was Studying Stars, But It Found Something Else — 3 Asteroids", "First demonstration of antimatter wave interferometry", "Angela Ahrendts Shares Lessons She Learned While Working at Apple", "For InSight, Dust Cleanings Will Yield New Science", "Evil Clippy: a tool for making undetectable malicious Microsoft Office docs", "Cheetah Mobile previews international edition of top-selling CM Translator at Microsoft Build 2019", "Google Stadia vs. Project xCloud: Here's what we know so far"]
            },
            { id: 5, name: 'Sports',
                topics: ["Premier League title race LIVE: 2018-19 EPL table as it stands for Man City and Liverpool", "Cincinnati's Jesse Winker on the bench Monday afternoon", "Serie A: Milan vs Bologna 1-0, as Suso opened the score", "AFC Champions League: Esteghlal bow out after Al Duhail draw [VIDEO]", "Flyers add Therrien, Yeo as assistants to Vigneault", "Ben Askren Meets Jordan Burroughs At Beat The Streets", "The Cincinnati Reds were attacked by bees, further proof that Ohio is the seventh ring of hell", "Tiger Woods to complete legendary golf foursome with Presidential Medal of Freedom", "LIVE Ashleigh Barty - Danielle Collins WTA Madrid - 6 May 2019", "Get to know new Mets reliever Wilmer Font, who might also be best rotation fill-in option", "SNY analyst Ron Darling announces he's been diagnosed with thyroid cancer", "Manchester City hold talks over £42million deal for Sporting Lisbon midfielder Bruno Fernandes", "Autosport Podcast: Has Formula E become too random?"]
            },
            { id: 6, name: 'Top Stories',
                topics: ["Blink-182, Lil Wayne Announce Co-Headlining Summer Tour", "Met Gala exhibit features Bjork's swan dress as it explores 'camp' in fashion", "INCUBUS Announces 20th-Anniversary Tour For Acclaimed 'Make Yourself' Album", "TV Stars Talk Judge Judy, \"Diversity of Platforms and Diversity of Content\" at Daytime Emmys", "Jet Traveling From Las Vegas To Mexico Lost, Says Official", "Chance the Rapper leads Twitter order for Wendy's to bring back spicy chicken nuggets", "Manchester City vs Leicester City: TV channel, live stream, squad news & preview", "Serie A: Milan vs Bologna 1-0, as Suso opened the score", "Our readers react to Daytime Emmys 2019: Were they…t ever' or 'a complete mess'? And so many upsets!", "Dem state lawmaker records himself harassing pro-life woman outside Planned Parenthood", "Flyers add Therrien, Yeo as assistants to Vigneault", "Assassin's Creed Ragnarok Screenshots, Details Leak", "Duchess Meghan's royal baby is here and it's a boy, Buckingham Palace says"]
            }
        ];
        return { categories: categories };
    };
    // Overrides the genId method to ensure that a category always has an id.
    // If the categories array is empty,
    // the method below returns the initial number (11).
    // if the categories array is not empty, the method below returns the highest
    // category id + 1.
    InMemoryDataService.prototype.genId = function (categories) {
        return categories.length > 0 ? Math.max.apply(Math, categories.map(function (category) { return category.id; })) + 1 : 11;
    };
    InMemoryDataService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]({ factory: function InMemoryDataService_Factory() { return new InMemoryDataService(); }, token: InMemoryDataService, providedIn: "root" });
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]({ factory: function MessageService_Factory() { return new MessageService(); }, token: MessageService, providedIn: "root" });
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/messages/messages.component.css.shim.ngstyle.js ***!
  \*****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["h2[_ngcontent-%COMP%] {\n    color: red;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: lighter;\n  }\nbody[_ngcontent-%COMP%] {\n    margin: 2em;\n  }\nbody[_ngcontent-%COMP%], input[text][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n    color: crimson;\n    font-family: Cambria, Georgia;\n  }\nbutton.clear[_ngcontent-%COMP%] {\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n  }\nbutton[_ngcontent-%COMP%]:hover {\n    background-color: #cfd8dc;\n  }\nbutton[_ngcontent-%COMP%]:disabled {\n    background-color: #eee;\n    color: #aaa;\n    cursor: auto;\n  }\nbutton.clear[_ngcontent-%COMP%] {\n    color: #888;\n    margin-bottom: 12px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0M7SUFDSSxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLG9CQUFvQjtFQUN0QjtBQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsNkJBQTZCO0VBQy9CO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVzc2FnZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmgyIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB9XG4gIGJvZHkge1xuICAgIG1hcmdpbjogMmVtO1xuICB9XG4gIGJvZHksIGlucHV0W3RleHRdLCBidXR0b24ge1xuICAgIGNvbG9yOiBjcmltc29uO1xuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xuICB9XG4gICBcbiAgYnV0dG9uLmNsZWFyIHtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjdXJzb3I6IGhhbmQ7XG4gIH1cbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICB9XG4gIGJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogI2FhYTtcbiAgICBjdXJzb3I6IGF1dG87XG4gIH1cbiAgYnV0dG9uLmNsZWFyIHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9Il19 */"];



/***/ }),

/***/ "./src/app/messages/messages.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/messages/messages.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_MessagesComponent, View_MessagesComponent_0, View_MessagesComponent_Host_0, MessagesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MessagesComponent", function() { return RenderType_MessagesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MessagesComponent_0", function() { return View_MessagesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MessagesComponent_Host_0", function() { return View_MessagesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponentNgFactory", function() { return MessagesComponentNgFactory; });
/* harmony import */ var _messages_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.component.css.shim.ngstyle */ "./src/app/messages/messages.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_MessagesComponent = [_messages_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MessagesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MessagesComponent, data: {} });

function View_MessagesComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_MessagesComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Messages"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "button", [["class", "clear"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.messageService.clear() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["clear"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MessagesComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.messageService.messages; _ck(_v, 6, 0, currVal_0); }, null); }
function View_MessagesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MessagesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.messageService.messages.length; _ck(_v, 1, 0, currVal_0); }, null); }
function View_MessagesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-messages", [], null, null, null, View_MessagesComponent_0, RenderType_MessagesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _messages_component__WEBPACK_IMPORTED_MODULE_3__["MessagesComponent"], [_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MessagesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-messages", _messages_component__WEBPACK_IMPORTED_MODULE_3__["MessagesComponent"], View_MessagesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/meta-tags.service.ts":
/*!**************************************!*\
  !*** ./src/app/meta-tags.service.ts ***!
  \**************************************/
/*! exports provided: MetaTagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaTagsService", function() { return MetaTagsService; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);




var MetaTagsService = /** @class */ (function () {
    function MetaTagsService(title, meta, doc) {
        this.title = title;
        this.meta = meta;
        this.doc = doc;
    }
    MetaTagsService.prototype.setPageTitle = function (title) {
        this.title.setTitle(title);
    };
    MetaTagsService.prototype.setCanonicalURL = function () {
        //check if it is exists first
        var canonical = this.doc.querySelector('link[rel="canonical"]');
        if (canonical === null) { // added this to eliminate duplicate canonical
            var link = this.doc.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.doc.head.appendChild(link);
            link.setAttribute('href', this.doc.URL);
        }
    };
    MetaTagsService.prototype.setMetaDescription = function (desc) {
        this.meta.updateTag({ name: 'description', content: desc });
    };
    MetaTagsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function MetaTagsService_Factory() { return new MetaTagsService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: MetaTagsService, providedIn: "root" });
    return MetaTagsService;
}());



/***/ }),

/***/ "./src/app/topics-search/topics-search.component.css.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/topics-search/topics-search.component.css.shim.ngstyle.js ***!
  \***************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border-bottom: 1px solid gray;\n    border-left: 1px solid gray;\n    border-right: 1px solid gray;\n    width: 1000px;\n    height: 16px;\n    padding: 5px;\n    background-color: white;\n    cursor: pointer;\n    list-style-type: none;\n  }\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    background-color: #607D8B;\n  }\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #888;\n    display: block;\n    text-decoration: none;\n  }\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: white;\n  }\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n    color: white;\n  }\n#search-box[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 20px;\n  }\nul.search-result[_ngcontent-%COMP%] {\n    margin-top: 0;\n    padding-left: 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9waWNzLXNlYXJjaC90b3BpY3Mtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkO0FBR0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RvcGljcy1zZWFyY2gvdG9waWNzLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVG9waWNzU2VhcmNoIHByaXZhdGUgc3R5bGVzICovXG4uc2VhcmNoLXJlc3VsdCBsaSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cbiAgIFxuICAuc2VhcmNoLXJlc3VsdCBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgfVxuICAgXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGEge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAgXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuc2VhcmNoLXJlc3VsdCBsaSBhOmFjdGl2ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gICNzZWFyY2gtYm94IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gICBcbiAgIFxuICB1bC5zZWFyY2gtcmVzdWx0IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfSJdfQ== */"];



/***/ }),

/***/ "./src/app/topics-search/topics-search.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/topics-search/topics-search.component.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: RenderType_TopicsSearchComponent, View_TopicsSearchComponent_0, View_TopicsSearchComponent_Host_0, TopicsSearchComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TopicsSearchComponent", function() { return RenderType_TopicsSearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TopicsSearchComponent_0", function() { return View_TopicsSearchComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TopicsSearchComponent_Host_0", function() { return View_TopicsSearchComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsSearchComponentNgFactory", function() { return TopicsSearchComponentNgFactory; });
/* harmony import */ var _topics_search_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topics-search.component.css.shim.ngstyle */ "./src/app/topics-search/topics-search.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _topics_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topics-search.component */ "./src/app/topics-search/topics-search.component.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_TopicsSearchComponent = [_topics_search_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TopicsSearchComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TopicsSearchComponent, data: {} });

function View_TopicsSearchComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " - ", " "]))], function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/topics/", _v.parent.parent.context.$implicit.id, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.parent.parent.context.$implicit.name; var currVal_4 = _v.parent.context.$implicit; _ck(_v, 3, 0, currVal_3, currVal_4); }); }
function View_TopicsSearchComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TopicsSearchComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.toLowerCase().includes(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 3).value.toLowerCase()); _ck(_v, 2, 0, currVal_0); }, null); }
function View_TopicsSearchComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TopicsSearchComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.topics; _ck(_v, 2, 0, currVal_0); }, null); }
function View_TopicsSearchComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["id", "search-component"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Topics Search"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, [["searchBox", 1]], null, 0, "input", [["id", "search-box"]], null, [[null, "input"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_co.search(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "ul", [["class", "search-result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_TopicsSearchComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).transform(_co.categories$)); _ck(_v, 6, 0, currVal_0); }, null); }
function View_TopicsSearchComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-topics-search", [], null, null, null, View_TopicsSearchComponent_0, RenderType_TopicsSearchComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _topics_search_component__WEBPACK_IMPORTED_MODULE_4__["TopicsSearchComponent"], [_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TopicsSearchComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-topics-search", _topics_search_component__WEBPACK_IMPORTED_MODULE_4__["TopicsSearchComponent"], View_TopicsSearchComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/topics-search/topics-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/topics-search/topics-search.component.ts ***!
  \**********************************************************/
/*! exports provided: TopicsSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsSearchComponent", function() { return TopicsSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");




var TopicsSearchComponent = /** @class */ (function () {
    function TopicsSearchComponent(categoryService) {
        this.categoryService = categoryService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // Push a search term into the observable stream.
    TopicsSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    TopicsSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categories$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.categoryService.searchTopics(term); }));
    };
    return TopicsSearchComponent;
}());



/***/ }),

/***/ "./src/app/universal-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/universal-interceptor.ts ***!
  \******************************************/
/*! exports provided: UniversalInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversalInterceptor", function() { return UniversalInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);


var UniversalInterceptor = /** @class */ (function () {
    function UniversalInterceptor(request) {
        this.request = request;
    }
    //See: https://stackoverflow.com/questions/41757684/generic-type-observablet-requires-1-type-argument
    UniversalInterceptor.prototype.intercept = function (req, next) {
        var serverReq = req;
        if (this.request) {
            var newUrl = this.request.protocol + "://" + this.request.get('host');
            if (!req.url.startsWith('/')) {
                newUrl += '/';
            }
            newUrl += req.url;
            serverReq = req.clone({ url: newUrl });
        }
        return next.handle(serverReq);
    };
    return UniversalInterceptor;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! exports provided: AppServerModuleNgFactory, AppServerModule, LAZY_MODULE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MODULE_MAP", function() { return LAZY_MODULE_MAP; });
/* harmony import */ var _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__["AppServerModuleNgFactory"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__["AppServerModule"]; });




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}

var LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/data/Projects/2019/5_13(Angular 7, SSR, Angular Universal/BB_result/gtrends-watch/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/express-engine/tokens":
/*!*****************************************************!*\
  !*** external "@nguniversal/express-engine/tokens" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/express-engine/tokens");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "angular-in-memory-web-api/http-client-in-memory-web-api.module":
/*!*********************************************************************************!*\
  !*** external "angular-in-memory-web-api/http-client-in-memory-web-api.module" ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("angular-in-memory-web-api/http-client-in-memory-web-api.module");

/***/ }),

/***/ "angular-in-memory-web-api/interfaces":
/*!*******************************************************!*\
  !*** external "angular-in-memory-web-api/interfaces" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("angular-in-memory-web-api/interfaces");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map