webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.loop {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n  left: 0;\n  right: 48px;\n  margin: 0;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n\n::scrollbar {\n  display: none;\n}\n\n.scroll-sec {\n    position: relative;\n    padding: 32px;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n}\n.scroll-sec.inwindow {\n    opacity: 1;\n}\n.scroll-sec.enter {\n    transition: all 0.48s ease;\n}\n.scroll-sec.exiting {\n    opacity: 0;\n}\n\n#title-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.title h1 {\n    font-size: 72px;\n    color: transparent;    \n    line-height: 64px;\n    \n    margin: 0;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n}\n\n.blurry-text {\n   text-shadow: 0 0 36px var(--main-light-color);\n   text-shadow: 0 0 36px var(--main-light-color);\n   color: transparent;\n    \n   transition: color 1.48s ease, text-shadow 1.48s ease;\n}\n\n/*#18110f;*/\n.title.row, .subtitle.row {\n    margin: 16px;\n}\n\n.subtitle h3 {\n    font-size: 24px;\n    font-variant: all-small-caps;\n    /*background-image: linear-gradient(to bottom, #323232 50%, transparent 50%);\n    background-size: 100% 200%;\n    background-position: 0 -100%;*/\n    color: transparent; \n    margin-right: 8px;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n    \n    transition: all 0.48s ease;\n}\n\n.subtitle h3.selected {\n    color: var(--main-light-color);\n    color: var(--main-light-color);\n    background-position: 0 0;\n}\n.subtitle h3.enter, .title h1.enter {\n    color: var(--main-light-color);\n    color: var(--main-light-color);\n    text-shadow: var(--text-shadow-default);\n    text-shadow: var(--text-shadow-default);\n}\n.title h1.enter.resume {\n    cursor: pointer;\n}\n\n#resumeInfo {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    opacity: 0.0;\n    position: relative;\n    text-shadow: var(--text-shadow-default);\n    text-shadow: var(--text-shadow-default);\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    color: #d12229;\n    padding-right: 8px;\n    width: 100%;\n    cursor: pointer;\n    font-size: 12px;\n    transition: opacity 0.48s ease;\n}\n#resumeInfo.visible {\n    opacity: 0.84;\n}\n.subtitle h3.enter.red {\n    color: #d12229;\n    cursor: pointer;\n}\n.subtitle hr {\n    margin-top: 12px;\n    margin-bottom: 0;\n    text-shadow: 0 0 36px transparent;\n    width: 0px;\n    border-top: 1px solid #f4f4f4;\n    border-top: 1px solid var(--main-light-color);\n    border-top: 1px solid var(--main-light-color);\n    transition: all 0.48s ease;\n}\n\n.subtitle hr.enter {\n    width: 100%;\n}\n\n.filler {\n    width: 100%;\n}\n\n/*   INTRO STUFF   */\n.intro-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n/*    max-width: 600px;*/\n    margin: 0px;\n    left: 8px;\n    position: absolute;\n    width: auto;\n    bottom: 16px;\n    z-index: 600;\n}\n\n#links {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n\n.link {\n    width: 50%;\n    height: 50%;\n/*    overflow: hidden;*/\n    margin: 0;\n    padding: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; \n/*    flex-basis: calc(50% - 40px);  */\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    cursor: pointer;\n    background-repeat: no-repeat;\n/*    background:*/\n    background-position: center;\n    background-size: 25px 25px;\n}\n\n.link-overlay {\n/*    background-color: #cbcbcb;*/\n    opacity: 1.0;  \n    -webkit-filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.48));  \n            filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.48));\n    \n/*    filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.64));*/\n}\n\n.link-overlay:hover {\n    transition: all 0.48s ease;\n    opacity: .48;\n}\n\n.dark {\n/*    background: rgba(49, 49, 49, 0.92);*/\n    padding: 4px;\n}\n\n/* prof pic */\n#prof .img-holder {\n    width: 100%;\n}\n\n/*NAV OVERLAY*/\n/*old nav\n#nav-overlay {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    list-style: none;\n    right: 0;\n    top: 0;\n    padding: 0;\n    z-index: 1000;\n    height: 100%;\n    width: 48px;\n    background: #1a1a1a;\n    transition: all 0.48s ease;\n}\n*/\n/*new nav*/\n#nav-overlay {\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    list-style: none;\n    right: 16px;\n    top: 48px;\n    bottom: 48px;\n    padding: 0;\n    z-index: 1000;\n    height: auto;\n    width: 48px;\n    margin: 0;\n    background: var(--main-bg-color);\n    background: var(--main-bg-color);\n    transition: all 0.48s ease;\n    border: solid 1px #f4f4f4;\n    border: solid 1px var(--main-light-color);\n    border: solid 1px var(--main-light-color);\n/*    background: white;*/\n}\n#nav-overlay.show {\n    -webkit-animation: openUp 2.84s 1;\n            animation: openUp 2.84s 1;\n}\n@-webkit-keyframes openUp {\n    0% {\n        opacity: 0;\n        top: 50%;\n        bottom: 50%;\n    }\n    50% {\n        opacity: 0;\n        top: 50%;\n        bottom: 50%;\n    }\n    60% {\n        top: 50%;\n        bottom: 50%;\n    }\n    100% {\n        opacity: 1;\n        top: 48px;\n        bottom: 48px;\n    }\n}\n@keyframes openUp {\n    0% {\n        opacity: 0;\n        top: 50%;\n        bottom: 50%;\n    }\n    50% {\n        opacity: 0;\n        top: 50%;\n        bottom: 50%;\n    }\n    60% {\n        top: 50%;\n        bottom: 50%;\n    }\n    100% {\n        opacity: 1;\n        top: 48px;\n        bottom: 48px;\n    }\n}\n.nav-item-holder {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#nav-overlay li {\n    cursor: pointer;\n}\n#nav-overlay li .nav-text {\n    font-size: 20px;\n    font-variant: all-small-caps;\n    text-shadow: var(--text-shadow-default);\n    text-shadow: var(--text-shadow-default);\n    color: #c3c3c3;\n    color: var(--secondary-light-color);\n    color: var(--secondary-light-color);\n/*    color: gray;*/\n    padding: 0 8px 0 8px;\n    transition: all 0.24s ease;\n    display: none;\n}\n#nav-overlay li .nav-icon {\n    display: block;    \n    height: 48px;\n    width: 48px;\n    background-size: 30px;\n    background-position: center;\n    background-repeat: no-repeat;\n    opacity: 1.0;  \n    -webkit-filter: drop-shadow(8px 8px 12px rgba(0,0,0,0.24));\n    transition: all 0.48s ease;\n    \n}\n\n#nav-overlay li .nav-icon:hover, #nav-overlay li.selected .nav-icon {\n    transition: all 0.48s ease;\n    opacity: 0.48;  \n}\n\n#nav-overlay .vertical-sep {\n    height: 16px;\n    border-left: 1px solid #f4f4f4;\n}\n#nav-overlay li:hover .nav-text, #nav-overlay li.selected .nav-text{\n    color: #f4f4f4;\n}\n\n#nav-overlay li img {\n    width: 30px;\n    height: 46px;\n    padding: 0 8px 0 8px;\n}\n#nav-overlay li.selected img {\n    display: none;\n}\n/*NAV TOGGLE*/\n#nav-toggle hr {\n    border-top: 1px solid #f4f4f4;\n}\n#nav-toggle {\n    opacity: 0;\n    cursor: pointer;\n    position: absolute;\n    top: 16px;\n    right: 24px;\n    transition: all 0.48s ease;\n    z-index: 800;\n    width: 32px;\n    height: 32px;\n}\n#nav-toggle.open {\n    top: 56px;\n}\n#nav-toggle span {\n  display: block;\n  height: 2px;\n  width: 100%;\n  background: #f4f4f4;\n  opacity: 1;\n  position: absolute;\n  left: 0;\n\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  transition: .25s ease-in-out;\n}\n#nav-toggle:hover, #nav-toggle.enter:hover {\n    opacity: 0.48;\n}\n\n#nav-toggle span:nth-child(1) {\n  top: 4px;\n}\n\n#nav-toggle span:nth-child(2), #nav-toggle span:nth-child(3) {\n  top: 16px;\n}\n\n#nav-toggle span:nth-child(4) {\n  top: 28px;\n}\n\n#nav-toggle.open span:nth-child(1) {\n  top: 18px;\n  width: 0%;\n  left: 50%;\n}\n\n#nav-toggle.open span:nth-child(2) {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n#nav-toggle.open span:nth-child(3) {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\n#nav-toggle.open span:nth-child(4) {\n  top: 18px;\n  width: 0%;\n  left: 50%;\n}\n\n\n/*SWIPE HINT OVERLAY*/\n.arrow-hint {\n/*    z-index: -1;*/\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n}\n\na.hint-overlay {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 16px 0 16px 0;\n  height: 40px;\n  width: 40px;\n  cursor: pointer;\n  transition: opacity 0.48s ease;\n}\na.hint-overlay i {\n    position: relative;\n    border: solid 0px #f4f4f4;\n    border-right-width: 2px;\n    width: 40px;\n}\na.hint-overlay i.arr-1 {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n    left: 2.6px;\n    \n}\na.hint-overlay i.arr-2 {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    right: 2.6px;\n}\na.hint-overlay:hover {\n    opacity: 0.48;\n}\na.hint-overlay i.arr-1 {\n    -webkit-animation-name: arr-hover-1;\n            animation-name: arr-hover-1;\n    -webkit-animation-duration: 1.84s;\n            animation-duration: 1.84s;\n}\na.hint-overlay i.arr-2 {\n    -webkit-animation-name: arr-hover-2;\n            animation-name: arr-hover-2;\n    -webkit-animation-duration: 1.84s;\n            animation-duration: 1.84s;\n}\n.arr-up {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    top: 16px;\n}\n.arr-down {\n    bottom: 16px;\n}\n@-webkit-keyframes arr-hover-1 {\n    \n    0% {\n        top: 40px;\n        height: 0px;\n    }\n    60% {\n        top: 40px;\n        height: 0px;\n    }\n    80% {\n        top: 0px;\n        height: 40px;\n    }\n    100% {\n        top: 0px;\n        height: 40px;\n    }\n}\n@keyframes arr-hover-1 {\n    \n    0% {\n        top: 40px;\n        height: 0px;\n    }\n    60% {\n        top: 40px;\n        height: 0px;\n    }\n    80% {\n        top: 0px;\n        height: 40px;\n    }\n    100% {\n        top: 0px;\n        height: 40px;\n    }\n}\n@-webkit-keyframes arr-hover-2 {\n    \n    0% {\n        right: 16.5px;\n        top: 32.5px;\n        height: 0px;\n    }\n    80% {\n        right: 16.5px;\n        top: 32.5px;\n        height: 0px;\n    }\n    100% {\n        right: 2.5px;\n        top: 0px;\n        height: 40px;\n    }\n}\n@keyframes arr-hover-2 {\n    \n    0% {\n        right: 16.5px;\n        top: 32.5px;\n        height: 0px;\n    }\n    80% {\n        right: 16.5px;\n        top: 32.5px;\n        height: 0px;\n    }\n    100% {\n        right: 2.5px;\n        top: 0px;\n        height: 40px;\n    }\n}\n@-webkit-keyframes intro-appear {\n  0% {\n    z-index: 1000;\n    opacity: 0;\n  }\n  25% {\n    z-index: 1000;\n    opacity: 0;\n  }\n\n  50% {\n    z-index: 1000;\n    opacity: 1;\n  }\n\n  100% {\n    z-index: 1000;\n    opacity: 0;\n  }\n}\n@keyframes intro-appear {\n  0% {\n    z-index: 1000;\n    opacity: 0;\n  }\n  25% {\n    z-index: 1000;\n    opacity: 0;\n  }\n\n  50% {\n    z-index: 1000;\n    opacity: 1;\n  }\n\n  100% {\n    z-index: 1000;\n    opacity: 0;\n  }\n}\n\n@media screen and (max-width: 360px) {\n    #displayer {\n        padding: 16px;\n        width: 100%;\n        height: 40%;\n    }\n    \n    .title h1 {\n        font-size: 36px;\n        line-height: 36px;\n    }\n    .subtitle h3 {\n        font-size: 16px;\n    }\n    .intro-container {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end;\n    }\n    #links { \n        width: 74px;\n        height: 74px;\n/*        flex-wrap: wrap-reverse;*/\n    }\n}\n@media screen and (max-width: 352px) {\n    .subtitle h3 {\n        width: 100%;\n    }\n} \n@media screen and (max-width: 400px) {\n    #nav-toggle.enter {\n        z-index: 1020;\n        opacity: 1;\n    }\n    \n    #nav-overlay {\n        top: -10%;\n        bottom: 110%;\n        opacity: 0;\n    }\n    #nav-overlay.open {\n        top: 48px;\n        bottom: 48px;\n        opacity: 1;\n    }\n    .loop {\n        right: 0;\n    }\n}\n\n@media screen and (min-width: 361px) {\n    #displayer {\n        padding: 16px;\n        width: 100%;\n        height: 40%;\n    }\n\n    .title.row, .subtitle.row {\n        margin: 16px;\n    }\n    .title h1 {\n        font-size: 64px;\n    }\n    .subtitle h3 {\n        font-size: 16px;\n    }\n    #links { \n        width: 74px;\n        height: 74px;\n/*        flex-wrap: wrap-reverse;*/\n    }\n    .hexagon-in2 {\n        background-size: 150px;\n    }\n}\n@media screen and (min-width: 470px) and (max-width: 600px) {\n    #displayer {\n        padding: 16px;\n        width: 100%;\n        height: 48%;\n    }\n}\n@media screen and (min-width: 620px) {\n    #displayer {\n        padding: 16px;\n        width: 100%;\n        height: 60%;\n    }\n    .loop {\n        right: 100px;\n    }\n    #nav-overlay {\n        width: 100px;\n    }\n    #nav-overlay li .nav-text {\n        display: block;\n    }\n    #nav-overlay li .nav-icon {\n        display: none;\n    }\n}\n\n@media screen and (min-width: 720px) {\n    .title h1 {\n        font-size: 72px;\n    }\n    .subtitle h3 {\n        font-size: 24px;\n    }\n   #links { \n        width: 250px;\n        height: 100px;\n        -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap;\n    }\n    .intro-container {\n        left: 0;\n    }\n    .hexagon-in2 {\n        background-size: 200px;\n    }\n}\n\n@media screen and (min-width: 848px) {\n    #nav-overlay {\n        right: 84px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<base href=\"/home\">\n<!--The content below is only a placeholder and can be replaced.-->\n<div  [@enterAnimation] class=\"row loop js-loop\">    \n    <div id=\"title-content\" class=\"scroll-sec\">\n        <div id=\"title-holder\" class=\"dark\">\n            <div class=\"title row\">\n                <h1 class=\"blurry-text await resume\" (mouseenter)=\"showResumeInfo()\" (mouseleave)=\"closeResumeInfo()\" (click)=\"openResume()\">{{title}}</h1>\n                \n            </div>\n            <div class=\"subtitle row\">\n                <h3 class=\"blurry-text await\">\n                    {{subtitle1}}\n                </h3>\n                <h3 class=\"blurry-text await\">\n                    {{subtitle2}}\n                </h3>\n                <h3 class=\"blurry-text await red\" (click)=\"goToMusic()\">\n                    {{subtitle3}}\n                </h3>\n                <div class=\"filler\">\n                    <hr class=\"await\">\n                    <div id=\"resumeInfo\">\n                        See My Resume\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-content-holder></app-content-holder>\n    <a class=\"arr-up hint-overlay\" (click)=\"scrollUp()\">\n        <i class=\"arr-1\"></i>\n        <i class=\"arr-2\"></i>\n    </a>\n    <a class=\"arr-down hint-overlay\" (click)=\"scrollDown()\">\n        <i class=\"arr-1\"></i>\n        <i class=\"arr-2\"></i>\n    </a>\n</div>\n\n<div class=\"row intro-container\" [@enterAnimationLong]>\n    <div id=\"links\">\n       <div class=\"link-overlay link\" *ngFor=\"let sq of intro_links\"\n            [style.background-image]=\"'url('+sq.src+')'\" (click)=\"goTo(sq.link)\">\n       </div>\n    </div>\n</div>\n<a href=\"https://icons8.com\" class=\"adv-icons\" [@enterAnimationLong]> Icon pack by Icons8</a>\n<div id=\"nav-toggle\" (click)=\"ToggleNav()\" class=\"await\">\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n</div>\n<ul id=\"nav-overlay\">\n    <div *ngFor=\"let page of pages; let first = first; let last = last\" class=\"nav-item-holder\" [@enterAnimationLong]>\n        <li class=\"nav-item\" [class]=\"first ? 'selected nav-item' : 'nav-item'\">\n            <h3 class=\"nav-text\">\n                {{page.name}}\n            </h3>\n            <div class=\"nav-icon\" [style.background-image]=\"'url('+page.icon+')'\"\n                 [style.background-size]=\"contain\">\n            </div>\n        </li>\n        <div *ngIf=\"!last\" class=\"vertical-sep\"></div>\n    </div>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_wheel_indicator__ = __webpack_require__("../../../../wheel-indicator/lib/wheel-indicator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_wheel_indicator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_wheel_indicator__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//declare var WheelIndicator:any;
var AppComponent = (function () {
    function AppComponent(router, activeRoute) {
        var _this = this;
        this.activeRoute = activeRoute;
        this.title = 'Steven Hurtado';
        this.subtitle1 = 'Student.';
        this.subtitle2 = 'Developer.';
        this.subtitle3 = 'Musician.';
        this.stop = true;
        this.instantiated = false;
        this.nav_opened = false;
        this.pages = [{ "name": "Home", "icon": "../assets/home.png" }, { "name": "Portfolio", "icon": "../assets/portfolio.png" }, { "name": "Experience", "icon": "../assets/experience.png" }, { "name": "Skills", "icon": "../assets/skills.png" }];
        this.displayerInd = 0;
        this.activateInd = 0;
        this.resumeLink = "../assets/Steven_Hurtado_Resume.pdf";
        this.intro_links = [
            { "src": "../assets/email.png", "src2": "../assets/email-icon-resource-hov.svg",
                "link": "mailto:shurt91112@gmail.com", "bg": "#323232", "title": "Email Me" }, { "src": "../assets/linkedin.png", "src2": "../assets/linked-resource-hov.svg", "bg": "#cbcbcb",
                "link": "https://www.linkedin.com/in/steven-hurtado", "title": "LinkedIn" }, { "src": "../assets/github.png", "src2": "../assets/git-resource-hov.svg",
                "link": "https://www.github.com/SHurtado91112", "bg": "#cbcbcb", "title": "GitHub" }, { "src": "../assets/soundcloud.png", "src2": "../assets/sound-resource-hov.svg",
                "link": "https://www.soundcloud.com/steveshidae", "bg": "#323232", "title": "SoundCloud" }
        ];
        router.events.forEach(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                if (_this.ws) {
                    _this.ws.destroy();
                }
            }
            // NavigationStart
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
            _this.router = router;
        });
    }
    AppComponent.prototype.onResize = function (event) {
        if (window.innerWidth <= 400) {
            var el = document.getElementById("nav-overlay");
            el.classList.remove("show");
        }
    };
    AppComponent.prototype.onScroll = function ($event) {
        console.log($event.srcElement.scrollLeft, $event.srcElement.scrollTop);
    };
    ;
    AppComponent.prototype.selectSubtitle = function (event, ind) {
        var target = event.target || event.srcElement || event.currentTarget;
        var alreadySelected = Array.from(document.getElementsByClassName("selected"));
        alreadySelected.forEach(function (element) {
            element.classList.remove("selected");
        });
        target.classList.add("selected");
        //for carousel data
        this.displayerInd = ind;
    };
    AppComponent.prototype.IsEmbedded = function (image) {
        var endOf = image.src.substring(image.src.length - 3);
        return !(endOf == "mp4");
    };
    AppComponent.prototype.IsVideo = function (image) {
        var endOf = image.src.substring(image.src.length - 3);
        return !(endOf == "jpg");
    };
    AppComponent.prototype.getVideoStyles = function (image) {
        return { 'width': '100%', 'height': image.settings.height };
    };
    AppComponent.prototype.getStyles = function (image) {
        return { 'background-image': 'url(' + image.src + ')',
            'background-size': image.settings.size,
            'background-position': image.settings.position, 'background-repeat': 'no-repeat', 'background-color': '#323232' };
    };
    AppComponent.prototype.getProfPic = function () {
        return { 'background-image': "../assets/prof.jpg" };
    };
    AppComponent.prototype.goTo = function (link) {
        window.open(link, "_blank");
    };
    AppComponent.prototype.goToMusic = function () {
        var router = this.router;
        var flash = document.getElementById("loader-flash");
        flash.classList.add("active");
        setTimeout(function () {
            router.navigate(['music']);
            flash.classList.remove("out");
            flash.classList.remove("active");
        }, 480);
    };
    AppComponent.prototype.showResumeInfo = function () {
        var resumeInfo = document.getElementById("resumeInfo");
        if (resumeInfo != null) {
            resumeInfo.classList.add("visible");
        }
    };
    AppComponent.prototype.closeResumeInfo = function () {
        var resumeInfo = document.getElementById("resumeInfo");
        if (resumeInfo != null) {
            resumeInfo.classList.remove("visible");
        }
    };
    AppComponent.prototype.openResume = function () {
        window.open(this.resumeLink, "_blank");
    };
    AppComponent.prototype.ngOnInit = function () {
        this.referenceInstance = this;
    };
    AppComponent.prototype.updateNavigation = function (dir) {
        var navItems = Array.from(document.getElementsByClassName("nav-item"));
        var selected = document.getElementsByClassName("selected")[0];
        if (selected == null) {
            return;
        }
        selected.classList.remove("selected");
        var indPrime = navItems.indexOf(selected);
        var index = 0;
        if (dir > 0)
            index = indPrime + 1;
        else
            index = indPrime - 1;
        if (index < 0)
            index = navItems.length - 1;
        else if (index >= navItems.length)
            index = 0;
        var setTo = document.getElementsByClassName("nav-item")[index];
        setTo.classList.add("selected");
    };
    AppComponent.prototype.scrollUp = function () {
        if (this.stop) {
            return;
        }
        var self = this.referenceInstance;
        console.log('scrolling up');
        var scrollSections = Array.from(document.getElementsByClassName("scroll-sec"));
        scrollSections.forEach(function (element, index) {
            var elem = element;
            //reshuffle
            elem.style.top = parseInt(elem.style.top) + 100 + "%";
            if (parseInt(elem.style.top) > 99 * (scrollSections.length - 1)) {
                elem.style.top = -100 + "%";
            }
            //visibility check
            if (parseInt(elem.style.top) == 0) {
                elem.classList.add("inwindow");
                console.log(elem);
                var child = elem.getElementsByTagName("content-skill")[0];
                if (child != null) {
                    console.log("child exists: " + child);
                    //add focus to searchInput
                    setTimeout(function () {
                        document.getElementById("searchInput").focus();
                    }, 480);
                }
            }
            else {
                elem.classList.remove("inwindow");
            }
        });
        this.updateNavigation(-1);
    };
    AppComponent.prototype.scrollDown = function () {
        if (this.stop) {
            return;
        }
        var self = this.referenceInstance;
        console.log('scrolling down');
        var scrollSections = Array.from(document.getElementsByClassName("scroll-sec"));
        scrollSections.forEach(function (element, index) {
            var elem = element;
            console.log(elem);
            //shuffle
            elem.style.top = parseInt(elem.style.top) - 100 + "%";
            if (parseInt(elem.style.top) < -100) {
                elem.style.top = 100 * (scrollSections.length - 2) + "%";
            }
            //visibility check
            if (parseInt(elem.style.top) == 0) {
                elem.classList.add("inwindow");
                var child = elem.getElementsByTagName("content-skill")[0];
                if (child != null) {
                    console.log("child exists: " + child);
                    //add focus to searchInput
                    setTimeout(function () {
                        document.getElementById("searchInput").focus();
                    }, 480);
                }
            }
            else {
                elem.classList.remove("inwindow");
            }
        });
        this.updateNavigation(1);
    };
    AppComponent.prototype.GoToSelected = function (ind, indP, sharedInstance) {
        var delta = ind - indP;
        for (var i = 0; i < Math.abs(delta); i++) {
            if (delta < 0) {
                sharedInstance.scrollUp();
            }
            else {
                sharedInstance.scrollDown();
            }
        }
    };
    AppComponent.prototype.scrollSetUp = function (sharedInstance) {
        var scrollSections = Array.from(document.getElementsByClassName("scroll-sec"));
        scrollSections.forEach(function (element, index) {
            var elem = element;
            if (index * 100 == 0) {
                elem.classList.add("inwindow");
            }
            else {
                elem.classList.remove("inwindow");
            }
            elem.style.top = (index * 100) + "%";
            //reshuffle sections
            if (parseInt(elem.style.top) > 99 * (scrollSections.length - 1)) {
                elem.style.top = -100 + "%";
            }
        });
        //BY TOUCH
        var lastTouch;
        if (!sharedInstance.instantiated) {
            document.getElementsByClassName("loop")[0].addEventListener("touchstart", TouchStart);
            document.getElementsByClassName("loop")[0].addEventListener("touchend", TouchEnd);
            //BY SWIPE (WEB)
            //var WheelSwipe = require('wheel-swipe');
            sharedInstance.ws = new __WEBPACK_IMPORTED_MODULE_2_wheel_indicator__({
                elem: window,
                callback: function (e) {
                    switch (e.direction) {
                        case "up":
                            sharedInstance.scrollUp();
                            break;
                        case "down":
                            sharedInstance.scrollDown();
                            break;
                    }
                }
            });
            //nav functionality
            var navItems = Array.from(document.getElementsByClassName("nav-item"));
            navItems.forEach(function (element, index) {
                element.addEventListener("click", function () {
                    var selected = document.getElementsByClassName("selected")[0];
                    var indPrime = navItems.indexOf(selected);
                    sharedInstance.GoToSelected(index, indPrime, sharedInstance);
                });
            });
            sharedInstance.instantiated = true;
        }
        function TouchStart(e) {
            lastTouch = e.touches[0];
        }
        function TouchEnd(e) {
            var touch = e.changedTouches[0];
            var threshold = 20;
            var deltaY = Math.abs(touch.clientY - lastTouch.clientY);
            var deltaX = Math.abs(touch.clientX - lastTouch.clientX);
            if (touch.clientY > lastTouch.clientY && deltaY > threshold && deltaY > deltaX) {
                sharedInstance.scrollUp();
            }
            else if (touch.clientY < lastTouch.clientY && deltaY > threshold && deltaY > deltaX) {
                sharedInstance.scrollDown();
            }
            lastTouch = touch;
        }
        //mobile check
        function mobilecheck() {
            var check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true; })(navigator.userAgent || navigator.vendor);
            return check;
        }
        ;
    };
    AppComponent.prototype.ToggleNav = function () {
        var target = document.getElementById("nav-toggle");
        var navoverlay = document.getElementById("nav-overlay");
        this.nav_opened = !this.nav_opened;
        if (this.nav_opened) {
            navoverlay.classList.add("open");
            target.classList.add("open");
        }
        else {
            navoverlay.classList.remove("open");
            target.classList.remove("open");
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this.referenceInstance;
        setTimeout(function () {
            var awaited = Array.from(document.getElementsByClassName("await"));
            awaited.forEach(function (element) {
                element.classList.add("enter");
            });
            var awaited = Array.from(document.getElementsByClassName("scroll-sec"));
            awaited.forEach(function (element) {
                element.classList.add("enter");
            });
            setTimeout(function () {
                self.stop = false;
                var sec = _this.activeRoute.snapshot.params['sec'];
                var ind = _this.activeRoute.snapshot.params['ind'];
                if (sec != null && ind != null) {
                    var i = sec + 1;
                    if (i > 2) {
                        i = 2;
                    }
                    while (i-- > 0) {
                        self.scrollDown();
                    }
                }
            }, 840);
        }, 840);
        this.scrollSetUp(self);
        //window check to present navoverlay intro
        if (window.innerWidth > 400) {
            var el = document.getElementById("nav-overlay");
            el.classList.add("show");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onScroll", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* trigger */])('enterAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])(840, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])(840, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* trigger */])('enterAnimationLonger', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])(3680, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0, offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0, offset: 0.9 }),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0.48, offset: 1 })
                        ]))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])(3680, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* trigger */])('enterAnimationLong', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])(3680, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0, offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0, offset: 0.6 }),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 1, offset: 1 })
                        ]))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])(3680, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],
            host: {}
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.detail_service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailService = (function () {
    function DetailService() {
        console.log('DetailService initted');
    }
    DetailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DetailService);
    return DetailService;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_root__ = __webpack_require__("../../../../../src/app/app.root.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__content_holder_app_content_holder__ = __webpack_require__("../../../../../src/app/content_holder/app.content_holder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__content_holder_content_partials_app_content__ = __webpack_require__("../../../../../src/app/content_holder/content_partials/app.content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__content_holder_content_partials_app_content_skill__ = __webpack_require__("../../../../../src/app/content_holder/content_partials/app.content_skill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__content_holder_content_partials_content_music_app_content_music__ = __webpack_require__("../../../../../src/app/content_holder/content_partials/content_music/app.content_music.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__content_holder_content_partials_content_detail_app_content_detail__ = __webpack_require__("../../../../../src/app/content_holder/content_partials/content_detail/app.content_detail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_detail_service__ = __webpack_require__("../../../../../src/app/app.detail_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_intersection_observer__ = __webpack_require__("../../../../intersection-observer/intersection-observer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_intersection_observer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_intersection_observer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__content_holder_content_partials_content_music_safe_pipe__ = __webpack_require__("../../../../../src/app/content_holder/content_partials/content_music/safe.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// Remember to import `intersection-observer` polyfill to support all major browsers


var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home/:sec/:ind', component: __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */] },
    { path: 'music', component: __WEBPACK_IMPORTED_MODULE_9__content_holder_content_partials_content_music_app_content_music__["a" /* ContentMusicComponent */] },
    { path: 'detail/:id/:ind', component: __WEBPACK_IMPORTED_MODULE_10__content_holder_content_partials_content_detail_app_content_detail__["a" /* ContentDetailComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_root__["a" /* AppRootComponent */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__content_holder_app_content_holder__["a" /* ContentHolderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__content_holder_content_partials_app_content__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__content_holder_content_partials_app_content_skill__["a" /* ContentSkillComponent */],
                __WEBPACK_IMPORTED_MODULE_9__content_holder_content_partials_content_music_app_content_music__["a" /* ContentMusicComponent */],
                __WEBPACK_IMPORTED_MODULE_10__content_holder_content_partials_content_detail_app_content_detail__["a" /* ContentDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__content_holder_content_partials_content_music_safe_pipe__["a" /* SafePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__app_detail_service__["a" /* DetailService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_root__["a" /* AppRootComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.root.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.root.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppRootComponent = (function () {
    function AppRootComponent() {
        this.title = 'Steven Hurtado';
    }
    AppRootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.root.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppRootComponent);
    return AppRootComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content_holder/app.content_holder.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host, #content_holder {   \n    margin-top: 100px;\n}\n\n.center-content {\n    float: none;\n}\n\n.divider {\n\theight: 10px;\n\tborder: 0;\n    margin-top: 0;\n\tbox-shadow: 0 10px 10px -10px #8c8b8b inset;\n}\n\n.content-container {\n    position: absolute;\n    height: 100%;\n/*    height: -webkit-fill-available;*/\n    width: 100%;\n}\n.content-container content, .content-container content-skill {\n    opacity: 0;\n    transition: all 0.84s ease;\n}\n.content-container.inwindow content, .content-container.inwindow content-skill {\n    opacity: 1;\n}\n\n.content-switcher {\n    position: fixed;\n    bottom: 8px;\n    z-index: 500;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.content-switcher h4 {\n    font-style: normal;\n    color: #323232;\n    margin: 16px;\n    cursor: pointer;\n}\n.content-switcher hr {\n    position: absolute;\n    width: 76px;\n    border-top: 1px solid #323232;\n    margin-left: -66px;\n    transition: margin-left 0.48s ease, width 0.48s ease;\n}\n\n.content-switcher.content-switched hr {\n    margin-left: 54px;\n    width: 100px;\n}\n\n@media screen and (max-width: 360px) {\n    .content-switcher {\n        position: fixed;\n        bottom: 8px;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: start;\n            -ms-flex-align: start;\n                align-items: flex-start;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        /* min-height: 200px; */\n        margin: 8px;\n    }\n    .content-switcher h4 {\n        font-style: normal;\n        color: #323232;\n        margin: 8px;\n        cursor: pointer;\n    }\n    .content-switcher hr {\n        position: absolute;\n        border-top: 1px solid #323232;\n        margin-left: 8px;\n        margin-top: 38px;\n        transition: margin-left 0.48s ease, margin-top 0.48s ease, width 0.48s ease;\n    }\n\n    .content-switcher.content-switched hr {\n        margin-left: 8px;\n        margin-top: 82px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content_holder/app.content_holder.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let sec of contentSections; let i = index\" class=\"content-container scroll-sec\">\n    <content [titleData]=\"sec.title\" [contentData]=\"sec.items\"[contentSections]=\"contentSections\" [index]=\"i\" class=\"host-content\"></content>\n</div>\n<div class=\"content-container scroll-sec\">\n    <content-skill [titleData]=\"skillTitle\"[featureList]=\"skills\" [highlightList]=\"highlights\"></content-skill>\n</div>"

/***/ }),

/***/ "../../../../../src/app/content_holder/app.content_holder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentHolderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_intersection_observer__ = __webpack_require__("../../../../intersection-observer/intersection-observer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_intersection_observer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_intersection_observer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Remember to import `intersection-observer` polyfill to support all major browsers

var ContentHolderComponent = (function () {
    function ContentHolderComponent() {
        this.title = "Content";
        this.showContent = false;
        this.contentSwitch = true;
        this.visible = {};
        this.skillTitle = "Skills";
        this.highlights = ["Mobile", "Resume", "Music", "iOS", "Web"];
        this.skills = {
            "Mobile": ["iOS", "Android", "Swift", "Objective-C", "Android Studio", "XCode", "Xamarin", "Full-Stack", "Adobe", "Disney"],
            "Web": ["HTML", "CSS", "JavaScript", "JQuery", "Angular", "Node.js", "npm", ".NET", "ASP .NET Core 2.0", ".NET MVC", "C#", "Front-End", "Back-End", "Full-Stack", "Disney"],
            "iOS": ["Objective-C", "Swift", "CocoaPods", "AFNetworking", "OneSignal", "AutoLayout", "UITouch", "Apple Pencil", "ARKit", "XCode", "CoreML"],
            "Objective-C": ["iOS", "Mobile", "UITouch", "CocoaPods", "AutoLayout", "OneSignal", "Apple Pencil", "CoreML"],
            "Swift": ["iOS", "Mobile", "UITouch", "CocoaPods", "AutoLayout", "ARKit", "AFNetworking", "Apple Pencil", "Frameworks"],
            "ARKit": ["Miya", "3D", "iOS", "Mobile"],
            "UITouch": ["Apple Pencil", "Force Sensitivity", "Texturing", "iOS", "Mobile"],
            "Apple Pencil": ["UITouch", "iOS", "Mobile"],
            "Android": ["Java", "Android Studio", "Firebase", "XML"],
            "Front-End": ["Design", "CSS", "JavaScript", "JQuery", "Angular", "Adobe", "InDesign", "Illustrator", "Photoshop", "Animate", "Flexbox", "Bootstrap"],
            "Back-End": [".NET", "Firebase", "JSON", "JSON.NET", "Database", "SQL", "MS SQL Server", "Oracle", "Java", "C#", "Angular", "REST", "SOAP", "Security"],
            "Design": ["Adobe", "InDesign", "Illustrator", "Photoshop", "Animate", "Front-End", "Storyboards", "UX", "3D", "2D"],
            "2D": ["Awesome Island", "GameMaker"],
            "3D": ["Awesome Island 2018 (TBA)", "Blender", "Unreal Engine"],
            "Adobe": ["Summer 2018", "iOS", "Apple Pencil", "InDesign", "Illustrator", "Photoshop", "Animate", "Front-End", "Back-End", "Full-Stack"],
            "Disney": ["Spring 2018", "Xamarin", "C#", ".NET", "ASP .NET Core 2.0", ".NET MVC", "JSON.NET", "SQL", "Front-End", "Back-End", "Full-Stack"],
            "Full-Stack": ["Front-End", "Back-End", "Mobile", "Web", "Adobe", "Disney"],
            "Database": ["SQL", "MS SQL Server", "Oracle"],
            "SQL": ["Database", "MS SQL Server", "Oracle", "JSON Support"],
            "Frameworks": [".NET", "AFNetworking", "UITouch", "ARKit", "CoreML", "Angular", "JSON.NET", "Firebase", "Xamarin", "Twitter API", "Facebook API"],
            "Xamarin": ["Hybrid", "Mobile", "iOS", "Android", "C#"],
            "JSON": ["JSON.NET", "Newtonsoft", "REST"],
            "Java": ["Back-End", "Android", "Mobile"],
            "C#": ["Xamarin", ".NET", ".NET MVC", "ASP .NET Core 2.0", "Back-End"],
            "Internships": ["Check out the 'Experience' tab!"],
            "Experience": ["Check out the 'Experience' tab!"],
            "Projects": ["Check out the 'Portfolio' tab!"],
            "Portfolio": ["Check out the 'Portfolio' tab!"],
            "Resume": ["Press Enter."],
            "Music": ["Press Enter."]
        };
        this.contentSections = [];
    }
    ContentHolderComponent.prototype.toggleContent = function (content) {
        switch (content) {
            case 0:
                this.contentSwitch = true;
                document.getElementsByClassName("content-switcher")[0].classList.remove("content-switched");
                break;
            case 1:
                this.contentSwitch = false;
                document.getElementsByClassName("content-switcher")[0].classList.add("content-switched");
                break;
            default:
                break;
        }
    };
    ContentHolderComponent.prototype.init = function () {
        if (!this.contentSwitch && this.showContent) {
            document.getElementsByClassName("content-switcher")[0].classList.add("content-switched");
        }
    };
    ContentHolderComponent.prototype.initSections = function () {
        this.contentSections =
            [{
                    "title": "Portfolio",
                    "items": [
                        {
                            "id": "Miya",
                            "img": "../assets/Miya-Logo.svg",
                            "color": "#ff5a5a",
                            "bio": "Miya is a personal research application for interactive AR-based home automation and indoor positioning. Tools and technology currently being used include: Swift iOS, Raspberry Pi, and Firebase by Google.",
                            "images": ["../assets/miya-1.jpeg", "../assets/miya-2.jpeg", "../assets/miya-3.jpg"],
                            "links": []
                        },
                        {
                            "id": "Zippy Contact",
                            "img": "../assets/zippy-logo-opc.svg",
                            "color": "#1bc405",
                            "bio": "Zippy Contact is an iOS application that will allow you to save time in making a phone call by assigning a unique gesture to listed contacts in your phone.",
                            "images": ["../assets/zippy-1.png", "../assets/zippy-2.png"],
                            "links": [
                                { "link": "https://github.com/SHurtado91112/Zippy-Contact",
                                    "img": "../assets/github.png" },
                                { "link": "https://devpost.com/software/zippy-contact",
                                    "img": "../assets/web.png" }
                            ]
                        },
                        {
                            "id": "Autowise Loan Tracker",
                            "img": "../assets/Autowise-Logo.svg",
                            "color": "#1bc405",
                            "bio": "This application is intended as the paperless replacement for loan applications for Autowise, a used-card dealership in Tallahassee, Florida. It also provides Autowise's customers the ability to track their application details, so they can login online whenever they want, and check their application and comments (updates, requests for more information) instead of flooding the phone lines.",
                            "images": ["../assets/auto-1.png", "../assets/auto-2.png", "../assets/auto-3.png"],
                            "links": [
                                { "link": "https://github.com/MEAN-Script-Org/Autowise-Loan-Tracker",
                                    "img": "../assets/github.png" }
                            ]
                        },
                        {
                            "id": "Langua",
                            "img": "../assets/langua-logo.png",
                            "color": "#1bc405",
                            "bio": "Language learning application that provides mentors, resources, and courses for learning clients. Final project for CodePath University's iOS boot camp. Includes: course registration, chat features with a live feed of who’s online, and database supported through Firebase by Google.",
                            "images": ["../assets/lang-1.png", "../assets/lang-2.png", "../assets/lang-3.png", "../assets/lang-4.png", "../assets/lang-5.png"],
                            "links": [
                                { "link": "https://github.com/Langua/Langua",
                                    "img": "../assets/github.png" }
                            ]
                        },
                        {
                            "id": "SGSenate",
                            "img": "../assets/sgsenate-logo.png",
                            "color": "#1bc405",
                            "bio": "SGSenate is an iOS application made for the University of Florida's Student Government senate hearings in order to replace their 100% paper system. Functionality includes: displaying SG’s agenda, bills, and miscellaneous items, a live queue for public debates, a voting system on concurrent bills, and admin features.",
                            "images": [],
                            "links": [
                                { "link": "https://github.com/SHurtado91112/SGSenate",
                                    "img": "../assets/github.png" }
                            ]
                        },
                        {
                            "id": "Chirpi",
                            "img": "../assets/chirpi-logo.png",
                            "color": "#1bc405",
                            "bio": "Chirpi is a basic twitter app to read and compose tweets using the Twitter API. This was one of many clone applications made to further iOS development skills for Code Path University's iOS boot camp.",
                            "images": ["../assets/chirp-1.png", "../assets/chirp-2.png", "../assets/chirp-3.png", "../assets/chirp-4.png"],
                            "links": [
                                { "link": "https://github.com/SHurtado91112/Chirpi",
                                    "img": "../assets/github.png" }
                            ]
                        },
                        {
                            "id": "Fiestagram",
                            "img": "../assets/fiestagram-logo.png",
                            "color": "#1bc405",
                            "bio": "Fiestagram is a photo sharing app using Parse as its backend. No real party inside. Simply an Instagram clone. With lots of confetti. This was one of many clone applications made to further iOS development skills for Code Path University's iOS boot camp.",
                            "images": ["../assets/fiesta-1.png", "../assets/fiesta-2.png", "../assets/fiesta-3.png", "../assets/fiesta-4.png"],
                            "links": [
                                { "link": "https://github.com/SHurtado91112/Fiestagram",
                                    "img": "../assets/github.png" }
                            ]
                        }
                    ]
                },
                {
                    "title": "Experience",
                    "items": [
                        {
                            "id": "Adobe",
                            "img": "../assets/adobe-logo.svg",
                            "color": "#ff0000",
                            "bio": "My 2018 Summer internship as a Full-Stack Mobile Development Intern on Adobe Acrobat's iOS team. I researched and built a demo of a handwriting-to-text proof of concept feature as my main project. I also built shippable features that were requested in high demand from customers.",
                            "images": ["../assets/adobe-1.png", "../assets/adobe-2.jpg"],
                            "links": []
                        },
                        {
                            "id": "Disney",
                            "img": "../assets/Disney_Logo.png",
                            "color": "#006e99",
                            "bio": "My 2018 Spring internship as a Software Engineering Intern at Walt Disney World's Central Shops. I updated an internal Xamarin based application for searching attraction documents, built and designed ASP .NET tools and UI Framework to make it easier for future developers on the team, and added Disney internal authentication for Central Shops’ customer facing websites.",
                            "images": ["../assets/disney-1.jpg", "../assets/disney-2.jpeg", "../assets/disney-3.jpeg"],
                            "links": []
                        },
                        {
                            "id": "Agora",
                            "img": "../assets/agora-logo.svg",
                            "color": "#184C7C",
                            "bio": "My 2017 Summer internship as a Software Engineering Intern at Agora, a Gainesville based startup. I mainly worked developing various features on both their iOS and Android platforms. I added a point-system for Agora members, a notification subscription feature, and enhanced the UX and performance of the application on both platforms.",
                            "images": ["../assets/agora-1.jpg", "../assets/agora-2.png", "../assets/agora-3.gif"],
                            "links": [{ "link": "https://www.agoraorg.com/about-us",
                                    "img": "../assets/web.png" }]
                        },
                        {
                            "id": "University of Florida",
                            "img": "../assets/uf-logo.png",
                            "color": "#ff0000",
                            "bio": "I worked as a Teaching Assistant for Programming Fundamentals COP3502 at the University of Florida. I held labs and office hours to better develop students in basic programming concepts. In terms of involvement on campus, I also acted as the Vice President of Professional Affairs for UF's Association for Computing Machinery. In that role, I worked directly with sponsoring companies and related student organizations to provide opportunities for our members.",
                            "images": ["../assets/uf-1.jpg", "../assets/uf-2.png", "../assets/uf-3.jpg"],
                            "links": [{ "link": "https://ufacm.xyz/",
                                    "img": "../assets/web.png" }]
                        },
                        {
                            "id": "iD Tech",
                            "img": "../assets/id-logo.png",
                            "color": "#24f04b",
                            "bio": "Over the Summer of 2016 I worked as a C++/Java Programming Instructor for iD Tech Camps at their Boca Raton site. I instructed students between the ages of 13-17 in the C++/Java Programming Languages. I taught programming basics, including Object-Orientation and dynamic memory allocation.",
                            "images": ["../assets/id-1.jpg", "../assets/id-2.jpg", "../assets/id-3.jpg"],
                            "links": []
                        }
                    ]
                }];
    };
    ContentHolderComponent.prototype.ngOnInit = function () {
        this.initSections();
    };
    ContentHolderComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ContentHolderComponent.prototype, "showContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ContentHolderComponent.prototype, "contentSwitch", void 0);
    ContentHolderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content-holder',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None,
            template: __webpack_require__("../../../../../src/app/content_holder/app.content_holder.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css"), __webpack_require__("../../../../../src/app/content_holder/app.content_holder.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* trigger */])('enterAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])(480, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])(480, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],
            host: {}
        })
    ], ContentHolderComponent);
    return ContentHolderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content_holder/content_partials/app.content.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    min-width: 164px;\n    height: 100%;\n    padding: 84px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.carouselContent {\n  width: 100%;\n/*  max-width: 755px;*/\n  min-width: 132px;\n  height: 48vh;\n  min-height: 200px;\n  position: relative;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n#carousel {\n  width: 100%;\n  height: auto;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  \n  transition: all 0.48s ease;\n}\n\n#carousel figure {\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  background-color: #a5a5a5a3;\n  overflow: hidden;\n    transition: opacity 0.48s, -webkit-transform 0.48s;\n    transition: opacity 0.48s, transform 0.48s;\n    transition: opacity 0.48s, transform 0.48s, -webkit-transform 0.48s;\n}\n\n#carousel figure:nth-child(1) { -webkit-transform: rotateY(   0deg ) translateZ( 288px ); transform: rotateY(   0deg ) translateZ( 288px ); }\n#carousel figure:nth-child(2) { -webkit-transform: rotateY(  40deg ) translateZ( 288px ); transform: rotateY(  40deg ) translateZ( 288px ); }\n#carousel figure:nth-child(3) { -webkit-transform: rotateY(  80deg ) translateZ( 288px ); transform: rotateY(  80deg ) translateZ( 288px ); }\n#carousel figure:nth-child(4) { -webkit-transform: rotateY( 120deg ) translateZ( 288px ); transform: rotateY( 120deg ) translateZ( 288px ); }\n#carousel figure:nth-child(5) { -webkit-transform: rotateY( 160deg ) translateZ( 288px ); transform: rotateY( 160deg ) translateZ( 288px ); }\n#carousel figure:nth-child(6) { -webkit-transform: rotateY( 200deg ) translateZ( 288px ); transform: rotateY( 200deg ) translateZ( 288px ); }\n#carousel figure:nth-child(7) { -webkit-transform: rotateY( 240deg ) translateZ( 288px ); transform: rotateY( 240deg ) translateZ( 288px ); }\n#carousel figure:nth-child(8) { -webkit-transform: rotateY( 280deg ) translateZ( 288px ); transform: rotateY( 280deg ) translateZ( 288px ); }\n#carousel figure:nth-child(9) { -webkit-transform: rotateY( 320deg ) translateZ( 288px ); transform: rotateY( 320deg ) translateZ( 288px ); }\n\nfigure.frosted:before {\n    content: '';\n    background: inherit; \n    position: absolute;\n    width: 100%;\n    height: 100%;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.48);\n    -webkit-filter: blur(0px);\n            filter: blur(0px);\n}\n\n/*  switcher    */\n:host img.turner {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    opacity: 0.48;\n    transition: opacity 0.48s ease;\n    z-index: 700;\n    top: 50%;\n    cursor: pointer;\n}\n\n.carouselContent {\n    cursor: pointer;\n}\n\nimg.logos {\n    width: 80%;\n    max-width: 300px;\n    padding: 8px;\n    \n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n}\n\n:host img.turner:hover {\n    opacity: 1.0;\n}\n\n#turn-right {\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    left: 90%;\n}\n#turn-left {\n    -webkit-transform: translate(-50%, -50%) rotate(180deg);\n            transform: translate(-50%, -50%) rotate(180deg);\n    left: 10%;\n}\n\n/*  SLIDER FOR CAROUSEL */\n.slidecontainer {\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 100%;\n    bottom: 18%;\n    margin: 64px 0 64px 0;\n    transition: all 0.48s ease;\n}\n\n/* The slider itself */\n.slider {\n    -webkit-appearance: none;  /* Override default CSS styles */\n    -moz-appearance: none;\n         appearance: none;\n    width: 60%;\n    height: 1px; /* Specified height */\n    \n    background: #f4f4f4; /* Grey background */\n    outline: none; /* Remove outline */\n    opacity: 0.48; /* Set transparency (for mouse-over effects on hover) */ /* 0.2 seconds transition on hover */\n    transition: all .48s ease;\n}\n\n/* Mouse-over effects */\n.slider:hover {\n    opacity: 1; /* Fully shown on mouse-over */\n}\n\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */ \n.slider::-webkit-slider-thumb {\n    -webkit-appearance: none; /* Override default look */\n    appearance: none;\n    width: 24px; /* Set a specific slider handle width */\n    height: 24px; /* Slider handle height */\n    border-radius: 50%;\n    border-width: 1px;\n    border-color: #f4f4f4;\n    border-color: var(--main-light-color);\n    border-color: var(--main-light-color);\n    border-style: solid;\n    overflow: hidden;\n    background: #7a7979;\n    background: var(--main-bg-color);\n    background: var(--main-bg-color);\n    cursor: pointer; /* Cursor on hover */\n    transition: all 0.48s ease;\n}\n.slider::-webkit-slider-thumb:hover{\n    border-width: 18px;\n}\n\n.slider::-moz-range-thumb {\n    width: 25px; /* Set a specific slider handle width */\n    height: 25px; /* Slider handle height */\n    border-radius: 50%;\n    background: #7a7979;\n    background: var(--main-bg-color);\n    background: var(--main-bg-color);\n    cursor: pointer; /* Cursor on hover */\n}\n\n.contentTitle {\n    z-index: 3000;\n    position: absolute;\n    top: 96px;\n    left: 16px;\n    border-bottom: 1px solid #f4f4f4;\n    border-bottom: 1px solid var(--main-light-color, #f4f4f4);\n    transition: all 0.48s ease;\n}\n.contentTitle h3 {\n    color: #f4f4f4;\n    color: var(--main-light-color, #f4f4f4);\n    font-size: 20px;\n    text-shadow: var(--text-shadow-default);\n    text-shadow: var(--text-shadow-default);\n    line-height: 20px;\n    font-weight: 100;\n    transition: all 0.48s ease;\n}\n\n@media screen and (min-width: 480px) {\n    :host {\n        padding: 124px;\n    }   \n}\n@media screen and (min-width: 648px) {\n    :host {\n        padding: 148px;\n    }\n    .contentTitle {\n        top: 72px;\n        left: 32px;\n    }\n    .contentTitle h3 {\n        font-size: 24px;\n        line-height: 24px;\n    }\n}\n@media screen and (max-width: 424px) {\n    #carousel {\n        top: 84px;\n        bottom: 84px;\n    }\n}\n@media screen and (min-width: 424px) and (max-width: 600px) {\n    #carousel {\n        top: 64px;\n        bottom: 64px;\n    }\n}\n@media screen and (min-width: 600px) and (max-width: 724px) {\n    #carousel {\n        top: 48px;\n        bottom: 48px;\n    }\n    .slidecontainer {\n        bottom: 16%;\n    }\n}\n@media screen and (min-width: 724px) {\n    .slidecontainer {\n        bottom: 10%;\n    }\n}\n@media screen and (min-width: 784px) {\n    :host {\n        padding: 184px;\n    }    \n}\n@media screen and (min-width: 942px) {\n    :host {\n        padding: 248px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content_holder/content_partials/app.content.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contentTitle\">\n    <h3>\n        {{titleData}}\n    </h3>\n</div>\n\n<section #carouselContent class=\"carouselContent\" [@enterAnimation]>\n<!--    [routerLink]=\"['/detail', this.index, ind]\"-->\n    <div id=\"carousel\">\n        <figure *ngFor=\"let cont of contentData; let ind = index\">\n            <img class=\"logos\" [src]=\"cont.img\" draggable=\"false\" (click)=\"contentClicked(ind)\"/>\n        </figure>\n    </div>\n</section>\n<div class=\"slidecontainer\">\n  <input #slider type=\"range\" min=\"1\" max=\"{{contentData.length}}\" value=\"1\" class=\"slider\" id=\"myRange\" step=\"0.1\" (input)=\"SliderUpdated($event)\">\n    {{SliderInit(slider)}}\n</div>"

/***/ }),

/***/ "../../../../../src/app/content_holder/content_partials/app.content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_detail_service__ = __webpack_require__("../../../../../src/app/app.detail_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentComponent = (function () {
    function ContentComponent(detailService, route, router) {
        this.detailService = detailService;
        this.route = route;
        this.router = router;
        this.contentData = [];
        this.contentSections = [];
        this.index = 0;
        this.incr = 0;
        this.rotation = 0;
        this.rotateFn = 'rotateY';
        this.theta = 0;
        this.radius = 0;
    }
    ContentComponent.prototype.onResize = function (event) {
        if (this.carouselTarget != null) {
            this.carouselSetUp(this.carouselTarget);
        }
    };
    ContentComponent.prototype.SliderInit = function (e) {
        this.slideElement = e;
    };
    ContentComponent.prototype.SliderUpdated = function (e) {
        this.slideElement = e.target;
        var value = Math.trunc(this.slideElement.value);
        this.incr = value - 1;
        this.rotation = this.theta * this.incr * -1;
        this.carouselTransform();
    };
    ContentComponent.prototype.enter = function () {
        this.visible = true;
    };
    ContentComponent.prototype.leave = function () {
        this.visible = false;
    };
    ContentComponent.prototype.contentClicked = function (ind) {
        var router = this.router;
        var flash = document.getElementById("loader-flash");
        var sharedInstance = this;
        flash.classList.add("active");
        setTimeout(function () {
            router.navigate(['detail', sharedInstance.index, ind]);
            flash.classList.remove("out");
            flash.classList.remove("active");
        }, 480);
    };
    ContentComponent.prototype.trackData = function (index, cont) {
        return cont.id;
    };
    ContentComponent.prototype.turn = function (dir) {
        switch (dir) {
            case 0:
                this.incr += 1;
                break;
            case 1:
                this.incr += -1;
                break;
            default: break;
        }
        var increment = this.incr;
        var limiter = this.contentData.length;
        var mod = (increment + 1) % limiter;
        if (mod <= 0)
            mod += limiter;
        this.slideElement.value = mod;
        this.rotation = this.theta * increment * -1;
        this.carouselTransform();
    };
    ContentComponent.prototype.carouselTransform = function () {
        this.carousel.style.transform = 'translateZ(-' + this.radius + 'px) ' + this.rotateFn + '(' + this.rotation + 'deg)';
    };
    ContentComponent.prototype.carouselSwipeSetUp = function () {
        //BY TOUCH
        var sharedInstance = this;
        var lastTouch;
        this.carousel.addEventListener("touchstart", function (e) {
            lastTouch = e.touches[0];
        });
        this.carousel.addEventListener("touchend", function (e) {
            var touch = e.changedTouches[0];
            var threshold = 20;
            var deltaY = Math.abs(touch.clientY - lastTouch.clientY);
            var deltaX = Math.abs(touch.clientX - lastTouch.clientX);
            if (touch.clientX < lastTouch.clientX && deltaX > threshold && deltaX > deltaY) {
                //right
                sharedInstance.turn(0);
            }
            else if (touch.clientX > lastTouch.clientX && deltaX > threshold && deltaX > deltaY) {
                //left
                sharedInstance.turn(1);
            }
            lastTouch = touch;
        });
        //FOR WEB
        var carouselParent = this.carousel.parentNode;
        var startedSwipe = false;
        carouselParent.addEventListener("mousedown", function (e) {
            startedSwipe = true;
            lastTouch = e;
        });
        document.addEventListener("mouseup", function (e) {
            if (!startedSwipe) {
                return;
            }
            startedSwipe = false;
            var touch = e;
            var threshold = 20;
            var deltaY = Math.abs(touch.clientY - lastTouch.clientY);
            var deltaX = Math.abs(touch.clientX - lastTouch.clientX);
            if (touch.clientX < lastTouch.clientX && deltaX > threshold && deltaX > deltaY) {
                //right
                sharedInstance.turn(0);
            }
            else if (touch.clientX > lastTouch.clientX && deltaX > threshold && deltaX > deltaY) {
                //left
                sharedInstance.turn(1);
            }
            lastTouch = touch;
        });
    };
    ContentComponent.prototype.carouselSetUp = function (target) {
        //set up for carousel js
        var panelCount = this.contentData.length;
        this.carouselTarget = target;
        this.carousel = target.querySelector("#carousel");
        //document.getElementById('carousel');
        var panelSize = this.carousel.offsetWidth;
        this.rotateFn = 'rotateY';
        this.theta = 360 / panelCount;
        var theta = this.theta;
        // do some trig to figure out how big the carousel
        // is in 3D space
        this.radius = Math.round((panelSize / 2) / Math.tan(Math.PI / panelCount));
        var radius = this.radius;
        var panel, angle, i;
        for (i = 0; i < panelCount; i++) {
            panel = this.carousel.children[i];
            angle = theta * i;
            panel.style.opacity = 1;
            // rotate panel, then push it out in 3D space
            panel.style.transform = this.rotateFn + '(' + angle + 'deg) translateZ(' + radius + 'px)';
            panel.classList.add('frosted');
        }
        // adjust rotation so panels are always flat
        this.rotation = Math.round(this.rotation / theta) * theta;
        var rotation = this.rotation;
        this.carouselTransform();
    };
    ContentComponent.prototype.ngOnInit = function () {
        this.visible = false;
    };
    ContentComponent.prototype.ngOnDestroy = function () {
        this.detailService.content = this.contentSections;
    };
    ContentComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //listener and set up for enter detection of content
        var config = { attributes: true };
        var sharedInstance = this;
        // Callback function to execute when mutations are observed
        var callback = function (mutationsList) {
            for (var _i = 0, mutationsList_1 = mutationsList; _i < mutationsList_1.length; _i++) {
                var mutation = mutationsList_1[_i];
                if (mutation.type == 'attributes') {
                    if (mutation.attributeName == 'style') {
                        sharedInstance.carouselSetUp(mutation.target);
                    }
                }
            }
        };
        var elementInstance = this.carouselContent.nativeElement;
        var carouselView = Array.from(document.getElementsByClassName("content-container"));
        carouselView.forEach(function (element) {
            var elem = element;
            if (isDescendant(elem, elementInstance)) {
                // Create an observer instance linked to the callback function
                var observer = new MutationObserver(callback);
                // Start observing the target node for configured mutations
                _this.carousel = elem.querySelector("#carousel");
                observer.observe(elem, config);
                _this.carouselSwipeSetUp();
            }
        });
        function isDescendant(parent, child) {
            var node = child.parentNode;
            while (node != null) {
                if (node == parent) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        }
        setTimeout(function () {
            var sec = _this.route.snapshot.params['sec'];
            var ind = _this.route.snapshot.params['ind'];
            if (sec != null && ind != null) {
                var validator = sharedInstance.titleData == "Portfolio" ? 0 : 1;
                if (validator != sec) {
                    return;
                }
                var i = parseInt(ind);
                if (i > sharedInstance.contentData.length) {
                    i = sharedInstance.contentData.length;
                }
                while (i-- > 0) {
                    sharedInstance.turn(0);
                }
            }
        }, 1480);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentComponent.prototype, "contentData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentComponent.prototype, "contentSections", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ContentComponent.prototype, "titleData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('carouselContent'),
        __metadata("design:type", Object)
    ], ContentComponent.prototype, "carouselContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ContentComponent.prototype, "onResize", null);
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'content',
            template: __webpack_require__("../../../../../src/app/content_holder/content_partials/app.content.html"),
            styles: [__webpack_require__("../../../../../src/app/content_holder/content_partials/app.content.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* trigger */])('enterAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])(480, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])(480, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],
            host: {}
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_detail_service__["a" /* DetailService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content_holder/content_partials/app.content_skill.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 32px !important;\n}\n.searchContainer {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n#searchInput {\n    background: none;\n    outline: none;\n    border: 0;\n    border-bottom: 1px solid var(--main-light-color);\n    border-bottom: 1px solid var(--main-light-color);\n    color: var(--main-light-color);\n    color: var(--main-light-color);\n    font-family: -apple-system, BlinkMacSystemFont, 'Montserrat', Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 36px;\n    font-weight: 100;\n    max-width: 100%;\n    transition: all 0.48s ease;\n}\n#searchInput.blur {\n   text-shadow: var(--text-shadow-default);\n   text-shadow: var(--text-shadow-default);\n   color: transparent;\n}\n#searchInput::-webkit-input-placeholder {\n  opacity: 1;\n  color: var(--secondary-light-color);\n  color: var(--secondary-light-color);\n  -webkit-transition: all 0.48s ease;\n}\n#searchInput.blur::-webkit-input-placeholder {\n  opacity: 0;\n}\n\n.searchResult {\n    color: var(--main-light-color);\n    color: var(--main-light-color);\n    opacity: 0.48;\n    font-family: -apple-system, BlinkMacSystemFont, 'Montserrat', Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 20px;\n    line-height: 20px;\n    font-weight: 100;\n    padding: 8px;\n    border-bottom: 1px solid transparent;\n    transition: all 0.48s ease;\n    -webkit-animation: 0.84s enterResult 1;\n            animation: 0.84s enterResult 1;\n    cursor: pointer;\n}\n.searchResult:hover {\n    opacity: 1;\n    font-size: 24px;\n    line-height: 24px;\n    border-bottom: 1px solid var(--main-light-color);\n    border-bottom: 1px solid var(--main-light-color);\n}\n@-webkit-keyframes enterResult {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 0.48;\n    }\n}\n@keyframes enterResult {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 0.48;\n    }\n}\n.searchWall {\n    padding: 32px 0 0 0;    \n    display: -webkit-box;    \n    display: -ms-flexbox;    \n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    max-height: 320px;\n    max-width: 480px;\n    width: 100%;\n    transition: all 0.48s ease;\n}\n#searchModalBtn {\n    cursor: pointer;\n    color: var(--secondary-light-color);\n    color: var(--secondary-light-color);\n    font-weight: 100;\n    font-size: 14px;\n    opacity: 0.48;\n    transition: all 0.48s ease;\n}\n#searchModalBtn:hover {\n    opacity: 1.0;\n    color: var(--main-light-color);\n    color: var(--main-light-color);\n}\n#searchModal {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.24);\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: none;\n    opacity: 0.0;\n    z-index: 3000;\n    transition: opacity 0.48s ease;\n}\n#searchModal.display {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n#searchModal.show {\n    opacity: 1.0;\n}\n#searchModal #modalContainer {\n    min-width: 300px;\n    height: 50vh;\n    border-radius: 12px;\n    min-height: 200px;\n    background: rgba(255, 255, 255, 0.48);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow: hidden;\n    padding: 8px;\n}\n\n.blur-glass::before {\n    content: '';\n    height: 50vh;\n    min-width: 300px;\n    background: inherit;\n    position: fixed;\n    box-shadow: inset 0 0 0 300px rgba(137, 137, 137, 0.68);\n     -webkit-filter: blur(10px); \n    filter: blur(8px);\n    border-radius: 12px;\n    z-index: -1;\n}\n#searchModal #modalContainer .featureItem\n{\n    font-weight: 100;\n    font-size: 16px;\n    color: black;\n    text-shadow: var(--text-shadow-default);\n    text-shadow: var(--text-shadow-default);\n    cursor: pointer;\n    transition: all 0.48s ease;\n}\n#searchModal #modalContainer .featureItem:hover\n{\n    color: var(--main-light-color);\n    color: var(--main-light-color);\n}\n@media screen and (max-width: 400px) \n{\n    .searchResult {\n        font-size: 16px;\n        line-height: 16px;\n    }\n    .searchResult:hover {\n        font-size: 18px;\n        line-height: 18px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content_holder/content_partials/app.content_skill.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contentTitle\">\n    <h3>\n        {{titleData}}\n    </h3>\n</div>\n<div class=\"searchContainer\">\n    <input type=\"text\" #searchInput id=\"searchInput\" placeholder=\"Try 'Mobile'\"/>\n</div>\n<div id=\"searchModalBtn\" (click)=\"openSearchModal()\">\n    What can I search for?\n</div>\n<div class=\"searchWall\">\n    <div *ngFor=\"let skill of resultList\" class=\"searchResult\" (click)=\"searchThis(skill)\">\n        {{skill}}\n    </div>\n    <div *ngIf=\"resultList.length == 0\" class=\"searchWallContent\"></div>\n</div>\n<div id=\"searchModal\" (click)=\"dismissSearchModal()\">\n    <div id=\"modalContainer\" class=\"blur-glass\">\n        <div *ngFor=\"let feature of getKeys(featureList)\" class=\"featureItem\" (click)=\"searchThis(feature); dismissSearchModal()\">\n            {{feature}}\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/content_holder/content_partials/app.content_skill.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentSkillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentSkillComponent = (function () {
    function ContentSkillComponent(route, router) {
        this.route = route;
        this.router = router;
        this.featureList = {};
        this.highlightList = {};
        this.resultList = [];
        this.resumeLink = "../assets/Steven_Hurtado_Resume.pdf";
    }
    ContentSkillComponent.prototype.initSearchInput = function (sharedInstance) {
        this.inputElement = document.getElementById("searchInput");
        this.inputElement.addEventListener("keyup", function (event) {
            var target = event.target;
            if (event.keyCode === 13) {
                sharedInstance.activateSpecialInput(target.value);
            }
            sharedInstance.searchThis(target.value);
        });
        var interv = 0;
        setTimeout(updatePlaceholder, 2240);
        function updatePlaceholder() {
            if (sharedInstance.inputElement == null) {
                return;
            }
            if (sharedInstance.inputElement.value == "") {
                sharedInstance.inputElement.classList.add("blur");
            }
            setTimeout(function () {
                if (sharedInstance.inputElement.value == "") {
                    sharedInstance.inputElement.placeholder = "Try '" + sharedInstance.highlightList[interv++] + "'";
                }
                if (interv >= sharedInstance.highlightList.length) {
                    interv = 0;
                }
                sharedInstance.inputElement.classList.remove("blur");
                setTimeout(updatePlaceholder, 1760);
            }, 480);
        }
    };
    ContentSkillComponent.prototype.activateSpecialInput = function (skill) {
        switch (skill.toLowerCase()) {
            case "resume":
                window.open(this.resumeLink);
                break;
            case "music":
                var router = this.router;
                var flash = document.getElementById("loader-flash");
                flash.classList.add("active");
                setTimeout(function () {
                    router.navigate(['music']);
                    flash.classList.remove("out");
                    flash.classList.remove("active");
                }, 480);
                break;
            default:
                break;
        }
    };
    ContentSkillComponent.prototype.getKeys = function (list) {
        return Object.keys(list);
    };
    ContentSkillComponent.prototype.searchThis = function (skill) {
        var sharedInstance = this;
        this.inputElement.value = skill;
        var resultList = sharedInstance.resultList;
        var featureList = sharedInstance.featureList;
        //clear result list
        resultList = [];
        var input = skill;
        if (input == "") {
            sharedInstance.resultList = [];
            return;
        }
        var keys = this.getKeys(featureList);
        var ind;
        for (ind in keys) {
            var key = keys[ind];
            if (key.toLowerCase().includes(input.toLowerCase())) {
                var list = featureList[key];
                resultList.push.apply(resultList, list);
            }
        }
        document.getElementById("searchInput").focus();
        sharedInstance.resultList = resultList;
    };
    ContentSkillComponent.prototype.openSearchModal = function () {
        var searchModal = document.getElementById("searchModal");
        searchModal.classList.add("display");
        setTimeout(function () {
            searchModal.classList.add("show");
        }, 20);
    };
    ContentSkillComponent.prototype.dismissSearchModal = function () {
        var searchModal = document.getElementById("searchModal");
        searchModal.classList.remove("show");
        setTimeout(function () {
            searchModal.classList.remove("display");
        }, 481);
    };
    ContentSkillComponent.prototype.setUpSearchWall = function (self) {
    };
    ContentSkillComponent.prototype.ngOnInit = function () {
    };
    ContentSkillComponent.prototype.ngAfterViewInit = function () {
        var sharedInstance = this;
        this.initSearchInput(sharedInstance);
        this.setUpSearchWall(sharedInstance);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentSkillComponent.prototype, "featureList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentSkillComponent.prototype, "highlightList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentSkillComponent.prototype, "resultList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ContentSkillComponent.prototype, "titleData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentSkillComponent.prototype, "inputElement", void 0);
    ContentSkillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'content-skill',
            template: __webpack_require__("../../../../../src/app/content_holder/content_partials/app.content_skill.html"),
            styles: [__webpack_require__("../../../../../src/app/content_holder/content_partials/app.content.css"), __webpack_require__("../../../../../src/app/content_holder/content_partials/app.content_skill.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* trigger */])('enterAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])(480, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])(480, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],
            host: {}
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ContentSkillComponent);
    return ContentSkillComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content_holder/content_partials/content_detail/app.content_detail.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#detail-page {\n    overflow-y: scroll;\n    height: 100%;\n    width: 100%;\n    background: var(--main-bg-color);\n    background: var(--main-bg-color);\n}\n.grid-section\n{    \n\tdisplay: -webkit-box;    \n\tdisplay: -ms-flexbox;    \n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n    max-width: 100%;\n}\n.grid-section .grid-title {\n    box-shadow: var(--box-shadow-default);\n    box-shadow: var(--box-shadow-default);\n    background: var(--main-dark-color);\n    background: var(--main-dark-color);\n    background-position: 100% 40%;\n    background-size: 48%;\n    background-blend-mode: soft-light;\n    background-repeat: no-repeat;\n    height: 20vh;\n    position: fixed;\n    z-index: 1000;\n    overflow: hidden;\n}\n#grid-home-link {\n    cursor: pointer;\n    position: absolute;\n    left: 0;\n    top: 10vh;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    margin: 16px;\n    opacity: 0.48;\n    transition: all 0.48s ease;\n}\n#grid-home-link img {\n    width: 32px;\n}\n#grid-home-link:hover {\n    opacity: 1.0;\n}\n.grid-section .grid-title h1 {\n    color: var(--main-light-color);\n    color: var(--main-light-color);\n    margin: 48px;\n}\n.grid-section .grid-bio {\n/*    box-shadow: 0px 0px 8px 2px inset var(--secondary-light-color);*/\n    margin-top: 20vh;\n    background: var(--main-light-color);\n    background: var(--main-light-color);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.grid-section .grid-bio p {\n    margin: 16px 48px 16px 48px;\n    max-width: 400px;\n}\n\n.grid-section .grid-title, .grid-section .grid-bio {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.grid-section .grid-card {\n    width: 50%;\n    height: 50%;\n    overflow: hidden;\n    transition: all 0.48s ease;\n}\n.grid-section .grid-card .grid-img {\n    width: 100%;\n    height: auto;\n    opacity: 0.48;\n    transition: all 0.48s ease;\n}\n.grid-section .grid-card:hover .grid-img {\n    opacity: 1.0;\n}\n\n.grid-section .grid-card.grid-links { \n    min-height: 200px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.grid-section .grid-card.grid-links .grid-link img {\n    cursor: pointer;\n    -webkit-filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.48));\n            filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.48));\n    opacity: 1.0;\n    transition: all 0.48s ease;\n}\n.grid-section .grid-card.grid-links .grid-link img:hover {\n    opacity: 0.48;\n}\n\n/*\n\n@media screen and (max-width: 384px) {\n    .grid-section .grid-title h1 {\n        font-size: 24px;\n    }    \n}\n*/\n\n@media screen and (max-width: 424px) {\n    .grid-section .grid-card {\n        width: 100%;\n    }\n}\n\n@media screen and (max-width: 584px) {\n    .grid-section .grid-title h1 {\n        font-size: 48px;\n    }    \n}\n\n@media screen and (min-width: 748px) {\n    .grid-section .grid-card {\n        width: 33.33%;\n    }\n    .grid-section .grid-card.grid-links { \n        width: 100%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content_holder/content_partials/content_detail/app.content_detail.html":
/***/ (function(module, exports) {

module.exports = "<base href=\"/detail\">\n<div id=\"detail-page\">\n    <div class=\"grid-section\">\n        <div class=\"grid-title\" [style.background-image]=\"'url('+this.currentItem['img']+')'\">\n            <a id=\"grid-home-link\" (click)=\"goHome()\">\n                <img src=\"../../../../assets/back.png\"/>\n            </a>\n            <h1>\n                {{currentItem['id']}}\n            </h1>\n<!--            <img src=\"{{}}\"/>-->\n        </div>\n        <div class=\"grid-bio\">\n            <p>\n                {{currentItem['bio']}}\n            </p>\n        </div>\n        <div class=\"grid-card\" *ngFor=\"let img of currentItem['images']\">\n            <img class=\"grid-img\" src=\"{{img}}\"/>\n        </div>\n        <div class=\"grid-card grid-links\">\n            <a class=\"grid-link\" *ngFor=\"let link of currentItem['links']\" href=\"{{link['link']}}\" target=\"_blank\">\n                <img src=\"{{link['img']}}\"/>\n            </a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/content_holder/content_partials/content_detail/app.content_detail.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_detail_service__ = __webpack_require__("../../../../../src/app/app.detail_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentDetailComponent = (function () {
    function ContentDetailComponent(detailService, route, router) {
        this.detailService = detailService;
        this.route = route;
        this.router = router;
        this.currentItem = {};
        this.sections = [];
        this.section = 0;
        this.index = 0;
    }
    ContentDetailComponent.prototype.goHome = function () {
        var router = this.router;
        var flash = document.getElementById("loader-flash");
        var sharedInstance = this;
        flash.classList.add("active");
        setTimeout(function () {
            router.navigate(['home', sharedInstance.section, sharedInstance.index]);
            flash.classList.remove("out");
            flash.classList.remove("active");
        }, 480);
    };
    ContentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.section = params['id'];
            _this.index = params['ind'];
        });
        if (!this.detailService || !this.detailService.content) {
            this.router.navigate(['home']);
        }
        this.sections = this.detailService.content;
        if (this.index >= this.sections[this.section].length) {
            this.router.navigate(['home']);
        }
        this.currentItem = this.sections[this.section]['items'][this.index];
    };
    ContentDetailComponent.prototype.ngAfterViewInit = function () {
        var sharedInstance = this;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentDetailComponent.prototype, "currentItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentDetailComponent.prototype, "sections", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentDetailComponent.prototype, "section", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentDetailComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ContentDetailComponent.prototype, "titleData", void 0);
    ContentDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'content-detail',
            template: __webpack_require__("../../../../../src/app/content_holder/content_partials/content_detail/app.content_detail.html"),
            styles: [__webpack_require__("../../../../../src/app/content_holder/content_partials/content_detail/app.content_detail.css")],
            host: {}
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_detail_service__["a" /* DetailService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], ContentDetailComponent);
    return ContentDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content_holder/content_partials/content_music/app.content_music.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#music-page {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n#stop-music {\n  position: absolute;  \n  height: 40px;\n  width: 40px;\n  z-index: 1000;\n  cursor: pointer;\n  transition: all 0.48s ease;\n  display: none;\n}\n#stop-music:hover {\n    opacity: 0.48;\n    -webkit-transform: scale(1.24);\n            transform: scale(1.24);\n}\n#stop-music i {\n    position: absolute;\n    border: ridge 0px var(--main-light-color);\n    border: ridge 0px var(--main-light-color);\n    border-right-width: 4px;\n    height: 40px;\n    -webkit-animation: stop-intro 0.48s 1;\n            animation: stop-intro 0.48s 1;\n}\n#stop-music i#stop-1 {\n    left: 0px;\n}\n#stop-music i#stop-2 {\n    left: 40px;\n}\n\n#start-music {\n  position: absolute;  \n  height: 40px;\n  width: 40px;\n  z-index: 1000;\n  cursor: pointer;\n  transition: all 0.48s ease;\n}\n#start-music:hover {\n    opacity: 0.48;\n    -webkit-transform: scale(1.24);\n            transform: scale(1.24);\n}\n#start-music i {\n    position: absolute;\n    border: ridge 0px var(--main-light-color);\n    border: ridge 0px var(--main-light-color);\n    border-right-width: 4px;\n    height: 40px;\n}\n#start-music i#play-1 {\n    -webkit-transform: rotate(120deg);\n            transform: rotate(120deg);\n    left: 17px;\n    top: -10px;\n    -webkit-animation: play-1 1.48s 1;\n            animation: play-1 1.48s 1;\n    /* border-color: red; */\n    \n}\n#start-music i#play-2 {\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg);\n    left: 17px;\n    top: 10px;\n    -webkit-animation: play-2 1.48s 1;\n            animation: play-2 1.48s 1;\n}\n#start-music i#play-3 {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    left: 0;\n    -webkit-animation: play-3 1.48s 1;\n            animation: play-3 1.48s 1;\n}\n\n@-webkit-keyframes stop-intro {\n    0% {\n        height: 0;\n    }\n    100% {\n        height: 40px;\n    }\n}\n\n@keyframes stop-intro {\n    0% {\n        height: 0;\n    }\n    100% {\n        height: 40px;\n    }\n}\n\n@-webkit-keyframes play-1 {\n    0% {\n        height: 0;\n        left: 0;\n        top: 0;\n        opacity: 0;\n    }\n    25% {\n        height: 40px;\n        left: 17px;\n        top: -10px;\n        opacity: 1;\n    }\n    75% {\n        height: 40px;\n        left: 17px;\n        top: -10px;\n    }\n    100% {\n    }\n}\n\n@keyframes play-1 {\n    0% {\n        height: 0;\n        left: 0;\n        top: 0;\n        opacity: 0;\n    }\n    25% {\n        height: 40px;\n        left: 17px;\n        top: -10px;\n        opacity: 1;\n    }\n    75% {\n        height: 40px;\n        left: 17px;\n        top: -10px;\n    }\n    100% {\n    }\n}\n@-webkit-keyframes play-2 {\n    0% {\n        height: 0;\n        left: 34px;\n        top: 20px;\n    }\n    25% {\n        height: 0;\n        left: 34px;\n        top: 20px;\n    }\n    50% {\n        height: 40px;\n        left: 17px;\n        top: 10px;\n    }\n    75% {\n        height: 40px;\n        left: 17px;\n        top: 10px;\n    }\n    100% {\n    }\n}\n@keyframes play-2 {\n    0% {\n        height: 0;\n        left: 34px;\n        top: 20px;\n    }\n    25% {\n        height: 0;\n        left: 34px;\n        top: 20px;\n    }\n    50% {\n        height: 40px;\n        left: 17px;\n        top: 10px;\n    }\n    75% {\n        height: 40px;\n        left: 17px;\n        top: 10px;\n    }\n    100% {\n    }\n}\n@-webkit-keyframes play-3 {\n    0% {\n        height: 0;\n        left: 0;\n    }\n    50% {\n        height: 0;\n        left: 0;\n        top: 40px;\n        opacity: 0;\n    }\n    75% {\n        height: 40px;\n        left: 0;\n        top: 0;\n        opacity: 1;\n    }\n    100% {\n    }\n}\n@keyframes play-3 {\n    0% {\n        height: 0;\n        left: 0;\n    }\n    50% {\n        height: 0;\n        left: 0;\n        top: 40px;\n        opacity: 0;\n    }\n    75% {\n        height: 40px;\n        left: 0;\n        top: 0;\n        opacity: 1;\n    }\n    100% {\n    }\n}\n\n#home-link {\n    position: absolute;\n    left: 0;\n    top: 0;\n    margin: 16px;\n    opacity: 0.48;\n    z-index: 1000;\n    transition: all 0.48s ease;\n}\n#home-link img {\n    width: 32px;\n}\n#home-link:hover {\n    opacity: 1.0;\n}\n\n#sound-list {\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    right: 0;\n    top: 0;\n    padding: 32px 32px 0px 0px;\n    opacity: 0.0;\n    transition: all 1.48s ease;\n}\n#sound-list.initted {\n    opacity: 1.0;\n    z-index: 1001;\n}\n\n#sound-list .sound-item {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n#sound-list .sound-item .grid-link {\n    width: 100%;\n    cursor: pointer;\n    opacity: 0.48;\n    transition: all 0.48s ease;\n}\n#sound-list .sound-item .grid-link:hover, #sound-list .sound-item .grid-link.selected {\n    opacity: 1.0;\n}\n\n#sound-list .sound-item .grid-link h4 {\n    text-align: left;\n    font-size: 14px;\n    color: var(--main-light-color);\n    color: var(--main-light-color);\n}\n\n#sound-list .sound-item .grid-link p {\n    text-align: left;\n    font-size: 12px;\n    color: var(--secondary-light-color);\n    color: var(--secondary-light-color);\n}\n\n#canvas {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.0;\n  transition: all 1.48s ease;\n}\n#canvas.initted {\n    opacity: 1.0;\n}\n\naudio {\n  position: fixed;\n  opacity: 0;\n  left: 10px;\n  bottom: 10px;\n  width: calc(100% - 20px);\n}\n\n#music-footer {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    z-index: 1001;\n    opacity: 0.0;\n    width: 100%;\n    padding: 16px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    transition: all 0.48s ease;\n}\n#music-footer.initted {\n    opacity: 1.0;\n}\n#music-footer p {\n    color: var(--secondary-light-color);\n    color: var(--secondary-light-color);\n}\n#music-footer p, #music-footer a {\n    font-size: 10px;\n} \n\n@media screen and (max-height: 648px) {\n    #sound-list .sound-item .grid-link h4 {\n        font-size: 12px;\n        line-height: 12px;\n    }\n\n    #sound-list .sound-item .grid-link p {    \n        font-size: 10px;\n        line-height: 10px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content_holder/content_partials/content_music/app.content_music.html":
/***/ (function(module, exports) {

module.exports = "<base href=\"/music\">\n<script>\n</script>\n<div id=\"music-page\">\n    <a id=\"home-link\" href=\"/\">\n        <img src=\"../../../../assets/home.png\"/>\n    </a>\n    <div id=\"start-music\" (click)=\"toggleMusic(1)\">\n        <i id=\"play-1\"></i>\n        <i id=\"play-2\"></i>\n        <i id=\"play-3\"></i>\n    </div>\n    <div id=\"stop-music\" (click)=\"toggleMusic(0)\">\n        <i id=\"stop-1\"></i>\n        <i id=\"stop-2\"></i>\n    </div>\n    <div id=\"sound-list\">\n        <div *ngFor=\"let music of musicList; let ind = index\" class=\"sound-item\">\n            <a class=\"grid-link\" (click)=\"playWithSelected(ind, music['link'])\">\n                <h4>{{music['title']}}</h4>\n                <p>{{music['sub']}}</p>\n            </a>\n        </div>\n    </div>\n    <div id=\"music-footer\">\n        <p>I have more than just these samples on my\n        <a href=\"https://www.soundcloud.com/steveshidae\">soundcloud. </a>Take a listen and tell me what you think!</p>\n    </div>\n    <div id=\"content\">\n      <canvas id=\"canvas\"></canvas>\n      <audio id=\"audio\" controls></audio>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/content_holder/content_partials/content_music/app.content_music.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentMusicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentMusicComponent = (function () {
    function ContentMusicComponent() {
        this.musicList = [{
                "title": "Legal Drink",
                "sub": "Out on Soundcloud.",
                "link": "../../../../assets/legaldrink_sample.m4a"
            }, {
                "title": "Venting",
                "sub": "Coming out soon.",
                "link": "../../../../assets/venting_sample.m4a"
            }, {
                "title": "Break Out Of It",
                "sub": "Out on Soundcloud.",
                "link": "../../../../assets/breakout_sample.m4a"
            }, {
                "title": "First Thing On My Mind (You Are)",
                "sub": "Out on Soundcloud.",
                "link": "../../../../assets/firstthing_sample.m4a"
            }];
        this.initMusic = true;
        this.currentIndex = 0;
    }
    ContentMusicComponent.prototype.toggleMusic = function (start) {
        var startMusic = document.getElementById("start-music");
        var stopMusic = document.getElementById("stop-music");
        if (start) {
            startMusic.style.display = "none";
            stopMusic.style.display = "block";
            this.playCurrentSelected();
        }
        else {
            startMusic.style.display = "block";
            stopMusic.style.display = "none";
            this.pauseCurrentSelected();
        }
    };
    ContentMusicComponent.prototype.endOfAudio = function () {
        this.currentIndex++;
        if (this.currentIndex >= this.musicList.length) {
            this.currentIndex = 0;
        }
        this.playWithSelected(this.currentIndex, this.musicList[this.currentIndex]['link']);
    };
    ContentMusicComponent.prototype.playCurrentSelected = function () {
        if (this.initMusic) {
            this.initMusic = false;
            var sharedInstance = this;
            setTimeout(function () {
                sharedInstance.playWithSelected(0, sharedInstance.musicList[0]['link']);
            }, 480);
            document.getElementById("canvas").classList.add("initted");
            document.getElementById("sound-list").classList.add("initted");
            document.getElementById("music-footer").classList.add("initted");
        }
        var audio = document.getElementById("audio");
        audio.play();
    };
    ContentMusicComponent.prototype.pauseCurrentSelected = function () {
        var audio = document.getElementById("audio");
        audio.pause();
    };
    ContentMusicComponent.prototype.playWithSelected = function (ind, link) {
        var startMusic = document.getElementById("start-music");
        var stopMusic = document.getElementById("stop-music");
        startMusic.style.display = "none";
        stopMusic.style.display = "block";
        this.playCurrentSelected();
        this.currentIndex = ind;
        var gridLinkArray = Array.from(document.querySelectorAll('.grid-link'));
        gridLinkArray.forEach(function (elem) {
            elem.classList.remove("selected");
        });
        document.getElementsByClassName("grid-link")[ind].classList.add("selected");
        var audio = document.getElementById("audio");
        audio.src = link;
        audio.play();
    };
    ContentMusicComponent.prototype.ngOnInit = function () {
    };
    ContentMusicComponent.prototype.ngAfterViewInit = function () {
        var sharedInstance = this;
        var audio = document.getElementById("audio");
        var context = new AudioContext();
        var src = context.createMediaElementSource(audio);
        var analyser = context.createAnalyser();
        var canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var ctx = canvas.getContext("2d");
        src.connect(analyser);
        analyser.connect(context.destination);
        analyser.fftSize = 256;
        var bufferLength = analyser.frequencyBinCount;
        console.log(bufferLength);
        var dataArray = new Uint8Array(bufferLength);
        var WIDTH = canvas.width;
        var HEIGHT = canvas.height;
        var barWidth = (WIDTH / bufferLength) * 2.5;
        var barHeight;
        var x = 0;
        function renderFrame() {
            requestAnimationFrame(renderFrame);
            x = 0;
            analyser.getByteFrequencyData(dataArray);
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, WIDTH, HEIGHT);
            for (var i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i];
                var r = barHeight + (25 * (i / bufferLength));
                var g = 250 * (i / bufferLength);
                var b = 50;
                ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
                x += barWidth + 1;
            }
        }
        renderFrame();
        audio.addEventListener("ended", function () {
            audio.currentTime = 0;
            sharedInstance.endOfAudio();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentMusicComponent.prototype, "musicList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentMusicComponent.prototype, "initMusic", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentMusicComponent.prototype, "currentIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentMusicComponent.prototype, "context", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentMusicComponent.prototype, "src", void 0);
    ContentMusicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'content-music',
            template: __webpack_require__("../../../../../src/app/content_holder/content_partials/content_music/app.content_music.html"),
            styles: [__webpack_require__("../../../../../src/app/content_holder/content_partials/content_music/app.content_music.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* trigger */])('enterAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])(480, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])(480, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],
            host: {}
        }),
        __metadata("design:paramtypes", [])
    ], ContentMusicComponent);
    return ContentMusicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content_holder/content_partials/content_music/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'safeUrl' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map