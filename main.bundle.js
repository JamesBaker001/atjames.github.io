webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- About -->\n<section id=\"about\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h2 class=\"section-heading text-uppercase\">About</h2>\n        <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <ul class=\"timeline\">\n          <li>\n            <div class=\"timeline-image\">\n              <img class=\"rounded-circle img-fluid\" src=\"assets/img/about/1.jpg\" alt=\"\">\n            </div>\n            <div class=\"timeline-panel\">\n              <div class=\"timeline-heading\">\n                <h4>2009-2011</h4>\n                <h4 class=\"subheading\">Our Humble Beginnings</h4>\n              </div>\n              <div class=\"timeline-body\">\n                <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"timeline-inverted\">\n            <div class=\"timeline-image\">\n              <img class=\"rounded-circle img-fluid\" src=\"assets/img/about/2.jpg\" alt=\"\">\n            </div>\n            <div class=\"timeline-panel\">\n              <div class=\"timeline-heading\">\n                <h4>March 2011</h4>\n                <h4 class=\"subheading\">An Agency is Born</h4>\n              </div>\n              <div class=\"timeline-body\">\n                <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"timeline-image\">\n              <img class=\"rounded-circle img-fluid\" src=\"assets/img/about/3.jpg\" alt=\"\">\n            </div>\n            <div class=\"timeline-panel\">\n              <div class=\"timeline-heading\">\n                <h4>December 2012</h4>\n                <h4 class=\"subheading\">Transition to Full Service</h4>\n              </div>\n              <div class=\"timeline-body\">\n                <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"timeline-inverted\">\n            <div class=\"timeline-image\">\n              <img class=\"rounded-circle img-fluid\" src=\"assets/img/about/4.jpg\" alt=\"\">\n            </div>\n            <div class=\"timeline-panel\">\n              <div class=\"timeline-heading\">\n                <h4>July 2014</h4>\n                <h4 class=\"subheading\">Phase Two Expansion</h4>\n              </div>\n              <div class=\"timeline-body\">\n                <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"timeline-inverted\">\n            <div class=\"timeline-image\">\n              <h4>Be Part\n                <br>Of Our\n                <br>Story!</h4>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ".timeline {\n  position: relative;\n  padding: 0;\n  list-style: none; }\n\n.timeline:before {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 40px;\n  width: 2px;\n  margin-left: -1.5px;\n  content: '';\n  background-color: #e9ecef; }\n\n.timeline > li {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 50px; }\n\n.timeline > li:after, .timeline > li:before {\n  display: table;\n  content: ' '; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li .timeline-panel {\n  position: relative;\n  float: right;\n  width: 100%;\n  padding: 0 20px 0 100px;\n  text-align: left; }\n\n.timeline > li .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline > li .timeline-image {\n  position: absolute;\n  z-index: 100;\n  left: 0;\n  width: 80px;\n  height: 80px;\n  margin-left: 0;\n  text-align: center;\n  color: white;\n  border: 7px solid #e9ecef;\n  border-radius: 100%;\n  background-color: #fed136; }\n\n.timeline > li .timeline-image h4 {\n  font-size: 10px;\n  line-height: 14px;\n  margin-top: 12px; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right;\n  padding: 0 20px 0 100px;\n  text-align: left; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline > li:last-child {\n  margin-bottom: 0; }\n\n.timeline .timeline-heading h4 {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline .timeline-heading h4.subheading {\n  text-transform: none; }\n\n.timeline .timeline-body > ul,\n.timeline .timeline-body > p {\n  margin-bottom: 0; }\n\n@media (min-width: 768px) {\n  .timeline:before {\n    left: 50%; }\n  .timeline > li {\n    min-height: 100px;\n    margin-bottom: 100px; }\n  .timeline > li .timeline-panel {\n    float: left;\n    width: 41%;\n    padding: 0 20px 20px 30px;\n    text-align: right; }\n  .timeline > li .timeline-image {\n    left: 50%;\n    width: 100px;\n    height: 100px;\n    margin-left: -50px; }\n  .timeline > li .timeline-image h4 {\n    font-size: 13px;\n    line-height: 18px;\n    margin-top: 16px; }\n  .timeline > li.timeline-inverted > .timeline-panel {\n    float: right;\n    padding: 0 30px 20px 20px;\n    text-align: left; } }\n\n@media (min-width: 992px) {\n  .timeline > li {\n    min-height: 150px; }\n  .timeline > li .timeline-panel {\n    padding: 0 20px 20px; }\n  .timeline > li .timeline-image {\n    width: 150px;\n    height: 150px;\n    margin-left: -75px; }\n  .timeline > li .timeline-image h4 {\n    font-size: 18px;\n    line-height: 26px;\n    margin-top: 30px; }\n  .timeline > li.timeline-inverted > .timeline-panel {\n    padding: 0 20px 20px; } }\n\n@media (min-width: 1200px) {\n  .timeline > li {\n    min-height: 170px; }\n  .timeline > li .timeline-panel {\n    padding: 0 20px 20px 100px; }\n  .timeline > li .timeline-image {\n    width: 170px;\n    height: 170px;\n    margin-left: -85px; }\n  .timeline > li .timeline-image h4 {\n    margin-top: 40px; }\n  .timeline > li.timeline-inverted > .timeline-panel {\n    padding: 0 100px 20px 20px; } }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/advantages/advantages.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Advantages -->\n<section id=\"services\" class=\"bg-light\">\n\n  <span>\n      <div class=\"container\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-lg-6 order-lg-2\">\n            <div class=\"p-5\">\n              <img class=\"img-fluid rounded-circle\" src=\"../../assets/img/bg4.jpg\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"col-lg-6 order-lg-1\">\n            <div class=\"p-5\">\n              <h2 class=\"display-4\">For those about to rock...</h2>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </span>\n\n    <span>\n      <div class=\"container\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-lg-6\">\n            <div class=\"p-5\">\n              <img class=\"img-fluid rounded-circle\" src=\"../../assets/img/bg4.jpg\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"col-lg-6\">\n            <div class=\"p-5\">\n              <h2 class=\"display-4\">We salute you!</h2>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </span>\n\n    <span>\n      <div class=\"container\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-lg-6 order-lg-2\">\n            <div class=\"p-5\">\n              <img class=\"img-fluid rounded-circle\" src=\"../../assets/img/bg4.jpg\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"col-lg-6 order-lg-1\">\n            <div class=\"p-5\">\n              <h2 class=\"display-4\">Let there be rock!</h2>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </span>\n\n</section>\n"

/***/ }),

/***/ "./src/app/advantages/advantages.component.scss":
/***/ (function(module, exports) {

module.exports = ".service-heading {\n  margin: 15px 0;\n  text-transform: none; }\n"

/***/ }),

/***/ "./src/app/advantages/advantages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvantagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvantagesComponent = /** @class */ (function () {
    function AdvantagesComponent() {
    }
    AdvantagesComponent.prototype.ngOnInit = function () {
    };
    AdvantagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-advantages',
            template: __webpack_require__("./src/app/advantages/advantages.component.html"),
            styles: [__webpack_require__("./src/app/advantages/advantages.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvantagesComponent);
    return AdvantagesComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation-menu></app-navigation-menu>\n\n<app-header></app-header>\n<app-advantages></app-advantages>\n<!-- <app-services></app-services> -->\n<!-- <app-portfolio></app-portfolio> -->\n<app-about></app-about>\n<!-- <app-team></app-team> -->\n<!-- <app-clients></app-clients> -->\n<app-contact></app-contact>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_page_scroll__ = __webpack_require__("./node_modules/ngx-page-scroll/ngx-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        __WEBPACK_IMPORTED_MODULE_1_ngx_page_scroll__["b" /* PageScrollConfig */].defaultEasingLogic = {
            ease: function (t, b, c, d) {
                // easeInOutExpo easing
                if (t === 0) {
                    return b;
                }
                if (t === d) {
                    return b + c;
                }
                if ((t /= d / 2) < 1) {
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                }
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_page_scroll__ = __webpack_require__("./node_modules/ngx-page-scroll/ngx-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navigation_menu_navigation_menu_component__ = __webpack_require__("./src/app/shared/navigation-menu/navigation-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__advantages_advantages_component__ = __webpack_require__("./src/app/advantages/advantages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_services_component__ = __webpack_require__("./src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__portfolio_portfolio_component__ = __webpack_require__("./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__team_team_component__ = __webpack_require__("./src/app/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__clients_clients_component__ = __webpack_require__("./src/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_footer_footer_component__ = __webpack_require__("./src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_navigation_menu_navigation_menu_component__["a" /* NavigationMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__advantages_advantages_component__["a" /* AdvantagesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_page_scroll__["a" /* NgxPageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_router__["e" /* RouterModule */].forRoot(routes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Clients -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3 col-sm-6\">\n        <a href=\"#\">\n          <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/envato.jpg\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"col-md-3 col-sm-6\">\n        <a href=\"#\">\n          <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/designmodo.jpg\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"col-md-3 col-sm-6\">\n        <a href=\"#\">\n          <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/themeforest.jpg\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"col-md-3 col-sm-6\">\n        <a href=\"#\">\n          <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/logos/creative-market.jpg\" alt=\"\">\n        </a>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/clients/clients.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clients',
            template: __webpack_require__("./src/app/clients/clients.component.html"),
            styles: [__webpack_require__("./src/app/clients/clients.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Contact -->\n<section id=\"contact\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h2 class=\"section-heading text-uppercase\">People this is an exciting time to be alive.</h2>\n        <h3 class=\"section-subheading text-muted\">At James, a place for Builders.</h3>\n      </div>\n    </div>\n    <div class=\"row\">\n      {{ngForm.submitted}}\n      <div class=\"col-lg-12\">\n        <form [formGroup]=\"contactForm\" #ngForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"row\">\n            <!-- \n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" formControlName=\"name\" type=\"text\" placeholder=\"Your Name *\" required=\"required\">\n                <div *ngIf=\"name.errors?.required && ngForm.submitted\" class=\"help-block text-danger\">\n                  <ul><li>Please enter your name.</li></ul>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" formControlName=\"email\" type=\"email\" placeholder=\"Your Email *\" required=\"required\">\n                <div *ngIf=\"email.errors?.required && ngForm.submitted\" class=\"help-block text-danger\">\n                  <ul><li>Please enter your email address.</li></ul>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" formControlName=\"phone\" type=\"tel\" placeholder=\"Your Phone *\" required=\"required\">\n                <div *ngIf=\"phone.errors?.required && ngForm.submitted\" class=\"help-block text-danger\">\n                  <ul><li>Please enter your phone number.</li></ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" formControlName=\"message\" placeholder=\"Your Message *\" required=\"required\"></textarea>\n                <div *ngIf=\"message.errors?.required && ngForm.submitted\" class=\"help-block text-danger\">\n                  <ul><li>Please enter a message.</li></ul>\n                </div>\n              </div>\n            </div>\n            \n            <div class=\"clearfix\"></div>\n            -->\n            <div class=\"col-lg-12 text-center\">\n              <div id=\"success\"></div>\n\n              <button class=\"btn btn-primary btn-xl\" (click)=\"changeSuccessMessage()\">tz3e75hU4EhDU3ukyJueh5v6UvEHzGwkg3yC</button>\n              \n              <br>\n              <a class=\"text-link-colour\" href=\"http://tzscan.io/tz3e75hU4EhDU3ukyJueh5v6UvEHzGwkg3yC\" target=\"_blank\">on tzscan</a>\n\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <ngb-alert type=\"success\" [dismissible]=\"true\" *ngIf=\"!staticAlertClosed\">\n      Delegate address has been copied successfully in the clipboard.\n    </ngb-alert>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/***/ (function(module, exports) {

module.exports = "section#contact {\n  background-color: #212529;\n  background-image: url('map-image.f40ed5b1e791e9d2479b.png');\n  background-repeat: no-repeat;\n  background-position: center; }\n\nsection#contact .section-heading {\n  color: #fff; }\n\nsection#contact .form-group {\n  margin-bottom: 25px; }\n\nsection#contact .form-group input,\nsection#contact .form-group textarea {\n  padding: 20px; }\n\nsection#contact .form-group input.form-control {\n  height: auto; }\n\nsection#contact .form-group textarea.form-control {\n  height: 248px; }\n\nsection#contact .form-control:focus {\n  border-color: #fed136;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\nsection#contact ::-webkit-input-placeholder {\n  font-weight: 700;\n  color: #ced4da;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n\nsection#contact :-moz-placeholder {\n  font-weight: 700;\n  color: #ced4da;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n\nsection#contact ::-moz-placeholder {\n  font-weight: 700;\n  color: #ced4da;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n\nsection#contact :-ms-input-placeholder {\n  font-weight: 700;\n  color: #ced4da;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.staticAlertClosed = true;
        this.contactForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            message: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
        });
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.onSubmit = function () { };
    Object.defineProperty(ContactComponent.prototype, "name", {
        get: function () { return this.contactForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactComponent.prototype, "email", {
        get: function () { return this.contactForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactComponent.prototype, "phone", {
        get: function () { return this.contactForm.get('phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactComponent.prototype, "message", {
        get: function () { return this.contactForm.get('message'); },
        enumerable: true,
        configurable: true
    });
    ContactComponent.prototype.changeSuccessMessage = function () {
        var _this = this;
        this.staticAlertClosed = false;
        setTimeout(function () { return _this.staticAlertClosed = true; }, 10000);
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<header class=\"masthead\">\n  <div class=\"container\">\n    <div class=\"intro-text\">\n      <div class=\"intro-lead-in\">Not an ordinary Delegation Service</div>\n      <div class=\"intro-heading text-uppercase\">At James, a place for Builders.</div>\n      <!--\n      <a pageScroll class=\"btn btn-primary btn-xl text-uppercase\" href=\"#services\">Ttz3e75hU4EhDU3ukyJueh5v6UvEHzGwkg3yC</a> \n      -->\n\n      <button class=\"btn btn-primary btn-xl\" (click)=\"changeSuccessMessage()\">tz3e75hU4EhDU3ukyJueh5v6UvEHzGwkg3yC</button>\n\n      <br>\n      <a class=\"text-link-colour\" href=\"http://tzscan.io/tz3e75hU4EhDU3ukyJueh5v6UvEHzGwkg3yC\" target=\"_blank\">on tzscan</a>\n\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "header.masthead {\n  text-align: center;\n  color: white;\n  background-image: url('header-bg.024c32b44a06b3bb3280.jpg');\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-position: center center;\n  background-size: cover; }\n\nheader.masthead .intro-text {\n  padding-top: 150px;\n  padding-bottom: 100px; }\n\nheader.masthead .intro-text .intro-lead-in {\n  font-size: 22px;\n  font-style: italic;\n  line-height: 22px;\n  margin-bottom: 25px;\n  font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n\nheader.masthead .intro-text .intro-heading {\n  font-size: 50px;\n  font-weight: 700;\n  line-height: 50px;\n  margin-bottom: 25px;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n\n@media (min-width: 768px) {\n  header.masthead .intro-text {\n    padding-top: 300px;\n    padding-bottom: 200px; }\n  header.masthead .intro-text .intro-lead-in {\n    font-size: 40px;\n    font-style: italic;\n    line-height: 40px;\n    margin-bottom: 25px;\n    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n  header.masthead .intro-text .intro-heading {\n    font-size: 75px;\n    font-weight: 700;\n    line-height: 75px;\n    margin-bottom: 50px;\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.staticAlertClosed = true;
        this.myEasing = {
            ease: function (t, b, c, d) {
                // easeInOutExpo easing
                if (t === 0) {
                    return b;
                }
                if (t === d) {
                    return b + c;
                }
                if ((t /= d / 2) < 1) {
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                }
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.changeSuccessMessage = function () {
        var _this = this;
        this.staticAlertClosed = false;
        setTimeout(function () { return _this.staticAlertClosed = true; }, 10000);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Portfolio Grid -->\n<section class=\"bg-light\" id=\"portfolio\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h2 class=\"section-heading text-uppercase\">Portfolio</h2>\n        <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-6 portfolio-item\">\n        <a class=\"portfolio-link\" (click)=\"open(portfolioModal1)\" href=\"javascript:;\">\n          <div class=\"portfolio-hover\">\n            <div class=\"portfolio-hover-content\">\n              <i class=\"fas fa-plus fa-3x\"></i>\n            </div>\n          </div>\n          <img class=\"img-fluid\" src=\"assets/img/portfolio/01-thumbnail.jpg\" alt=\"\">\n        </a>\n        <div class=\"portfolio-caption\">\n          <h4>Threads</h4>\n          <p class=\"text-muted\">Illustration</p>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6 portfolio-item\">\n        <a class=\"portfolio-link\" (click)=\"open(portfolioModal2)\" href=\"javascript:;\">\n          <div class=\"portfolio-hover\">\n            <div class=\"portfolio-hover-content\">\n              <i class=\"fas fa-plus fa-3x\"></i>\n            </div>\n          </div>\n          <img class=\"img-fluid\" src=\"assets/img/portfolio/02-thumbnail.jpg\" alt=\"\">\n        </a>\n        <div class=\"portfolio-caption\">\n          <h4>Explore</h4>\n          <p class=\"text-muted\">Graphic Design</p>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6 portfolio-item\">\n        <a class=\"portfolio-link\" (click)=\"open(portfolioModal3)\" href=\"javascript:;\">\n          <div class=\"portfolio-hover\">\n            <div class=\"portfolio-hover-content\">\n              <i class=\"fas fa-plus fa-3x\"></i>\n            </div>\n          </div>\n          <img class=\"img-fluid\" src=\"assets/img/portfolio/03-thumbnail.jpg\" alt=\"\">\n        </a>\n        <div class=\"portfolio-caption\">\n          <h4>Finish</h4>\n          <p class=\"text-muted\">Identity</p>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6 portfolio-item\">\n        <a class=\"portfolio-link\" (click)=\"open(portfolioModal4)\" href=\"javascript:;\">\n          <div class=\"portfolio-hover\">\n            <div class=\"portfolio-hover-content\">\n              <i class=\"fas fa-plus fa-3x\"></i>\n            </div>\n          </div>\n          <img class=\"img-fluid\" src=\"assets/img/portfolio/04-thumbnail.jpg\" alt=\"\">\n        </a>\n        <div class=\"portfolio-caption\">\n          <h4>Lines</h4>\n          <p class=\"text-muted\">Branding</p>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6 portfolio-item\">\n        <a class=\"portfolio-link\" (click)=\"open(portfolioModal5)\" href=\"javascript:;\">\n          <div class=\"portfolio-hover\">\n            <div class=\"portfolio-hover-content\">\n              <i class=\"fas fa-plus fa-3x\"></i>\n            </div>\n          </div>\n          <img class=\"img-fluid\" src=\"assets/img/portfolio/05-thumbnail.jpg\" alt=\"\">\n        </a>\n        <div class=\"portfolio-caption\">\n          <h4>Southwest</h4>\n          <p class=\"text-muted\">Website Design</p>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6 portfolio-item\">\n        <a class=\"portfolio-link\" (click)=\"open(portfolioModal6)\" href=\"javascript:;\">\n          <div class=\"portfolio-hover\">\n            <div class=\"portfolio-hover-content\">\n              <i class=\"fas fa-plus fa-3x\"></i>\n            </div>\n          </div>\n          <img class=\"img-fluid\" src=\"assets/img/portfolio/06-thumbnail.jpg\" alt=\"\">\n        </a>\n        <div class=\"portfolio-caption\">\n          <h4>Window</h4>\n          <p class=\"text-muted\">Photography</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Portfolio Modals -->\n\n<!-- Modal 1 -->\n<ng-template #portfolioModal1>\n  <div class=\"portfolio-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"close-modal\" (click)=\"modal.dismiss()\">\n      <div class=\"lr\">\n        <div class=\"rl\"></div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <div class=\"modal-body\">\n            <!-- Project Details Go Here -->\n            <h2 class=\"text-uppercase\">Project Name</h2>\n            <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n            <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/01-full.jpg\" alt=\"\">\n            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n            <ul class=\"list-inline\">\n              <li>Date: January 2017</li>\n              <li>Client: Threads</li>\n              <li>Category: Illustration</li>\n            </ul>\n            <button class=\"btn btn-primary\" (click)=\"modal.dismiss()\" type=\"button\">\n              <i class=\"fas fa-times\"></i>\n              Close Project</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #portfolioModal2>\n  <div class=\"portfolio-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"close-modal\" (click)=\"modal.dismiss()\">\n      <div class=\"lr\">\n        <div class=\"rl\"></div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <div class=\"modal-body\">\n            <!-- Project Details Go Here -->\n            <h2 class=\"text-uppercase\">Project Name</h2>\n            <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n            <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/02-full.jpg\" alt=\"\">\n            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n            <ul class=\"list-inline\">\n              <li>Date: January 2017</li>\n              <li>Client: Explore</li>\n              <li>Category: Graphic Design</li>\n            </ul>\n            <button class=\"btn btn-primary\" (click)=\"modal.dismiss()\" type=\"button\">\n              <i class=\"fas fa-times\"></i>\n              Close Project</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #portfolioModal3>\n  <div class=\"portfolio-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"close-modal\" (click)=\"modal.dismiss()\">\n      <div class=\"lr\">\n        <div class=\"rl\"></div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <div class=\"modal-body\">\n            <!-- Project Details Go Here -->\n            <h2 class=\"text-uppercase\">Project Name</h2>\n            <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n            <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/03-full.jpg\" alt=\"\">\n            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n            <ul class=\"list-inline\">\n              <li>Date: January 2017</li>\n              <li>Client: Finish</li>\n              <li>Category: Identity</li>\n            </ul>\n            <button class=\"btn btn-primary\" (click)=\"modal.dismiss()\" type=\"button\">\n              <i class=\"fas fa-times\"></i>\n              Close Project</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #portfolioModal4>\n  <div class=\"portfolio-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"close-modal\" (click)=\"modal.dismiss()\">\n      <div class=\"lr\">\n        <div class=\"rl\"></div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <div class=\"modal-body\">\n            <!-- Project Details Go Here -->\n            <h2 class=\"text-uppercase\">Project Name</h2>\n            <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n            <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/04-full.jpg\" alt=\"\">\n            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n            <ul class=\"list-inline\">\n              <li>Date: January 2017</li>\n              <li>Client: Lines</li>\n              <li>Category: Branding</li>\n            </ul>\n            <button class=\"btn btn-primary\" (click)=\"modal.dismiss()\" type=\"button\">\n              <i class=\"fas fa-times\"></i>\n              Close Project</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<!-- Modal 5 -->\n<ng-template #portfolioModal5>\n  <div class=\"portfolio-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"close-modal\" (click)=\"modal.dismiss()\">\n      <div class=\"lr\">\n        <div class=\"rl\"></div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <div class=\"modal-body\">\n            <!-- Project Details Go Here -->\n            <h2 class=\"text-uppercase\">Project Name</h2>\n            <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n            <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/05-full.jpg\" alt=\"\">\n            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n            <ul class=\"list-inline\">\n              <li>Date: January 2017</li>\n              <li>Client: Southwest</li>\n              <li>Category: Website Design</li>\n            </ul>\n            <button class=\"btn btn-primary\" (click)=\"modal.dismiss()\" type=\"button\">\n              <i class=\"fas fa-times\"></i>\n              Close Project</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #portfolioModal6>\n  <div class=\"portfolio-modal\" id=\"portfolioModal6\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"close-modal\" (click)=\"modal.dismiss()\">\n      <div class=\"lr\">\n        <div class=\"rl\"></div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <div class=\"modal-body\">\n            <!-- Project Details Go Here -->\n            <h2 class=\"text-uppercase\">Project Name</h2>\n            <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n            <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/06-full.jpg\" alt=\"\">\n            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n            <ul class=\"list-inline\">\n              <li>Date: January 2017</li>\n              <li>Client: Window</li>\n              <li>Category: Photography</li>\n            </ul>\n            <button class=\"btn btn-primary\" (click)=\"modal.dismiss()\" type=\"button\">\n              <i class=\"fas fa-times\"></i>\n              Close Project</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/***/ (function(module, exports) {

module.exports = "::ng-deep .modal-dialog {\n  max-width: 100%;\n  margin-left: 15px;\n  margin-right: 15px; }\n\n::ng-deep .custom-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1050;\n  outline: 0; }\n\n::ng-deep .fade {\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n\n#portfolio .portfolio-item {\n  right: 0;\n  margin: 0 0 15px; }\n\n#portfolio .portfolio-item .portfolio-link {\n  position: relative;\n  display: block;\n  max-width: 400px;\n  margin: 0 auto;\n  cursor: pointer; }\n\n#portfolio .portfolio-item .portfolio-link .portfolio-hover {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: all ease 0.5s;\n  transition: all ease 0.5s;\n  opacity: 0;\n  background: rgba(254, 209, 54, 0.9); }\n\n#portfolio .portfolio-item .portfolio-link .portfolio-hover:hover {\n  opacity: 1; }\n\n#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content {\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  height: 20px;\n  margin-top: -12px;\n  text-align: center;\n  color: white; }\n\n#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content i {\n  margin-top: -12px; }\n\n#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h3,\n#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h4 {\n  margin: 0; }\n\n#portfolio .portfolio-item .portfolio-caption {\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 25px;\n  text-align: center;\n  background-color: #fff; }\n\n#portfolio .portfolio-item .portfolio-caption h4 {\n  margin: 0;\n  text-transform: none; }\n\n#portfolio .portfolio-item .portfolio-caption p {\n  font-size: 16px;\n  font-style: italic;\n  margin: 0;\n  font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n\n#portfolio * {\n  z-index: 2; }\n\n@media (min-width: 767px) {\n  #portfolio .portfolio-item {\n    margin: 0 0 30px; } }\n\n.portfolio-modal {\n  padding-right: 0px !important; }\n\n.portfolio-modal .modal-dialog {\n  margin: 1rem;\n  max-width: 100vw; }\n\n.portfolio-modal .modal-body {\n  padding: 100px 0;\n  text-align: center; }\n\n.portfolio-modal .modal-body h2 {\n  font-size: 3em;\n  margin-bottom: 15px; }\n\n.portfolio-modal .modal-body p {\n  margin-bottom: 30px; }\n\n.portfolio-modal .modal-body p.item-intro {\n  font-size: 16px;\n  font-style: italic;\n  margin: 20px 0 30px;\n  font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n\n.portfolio-modal .modal-body ul.list-inline {\n  margin-top: 0;\n  margin-bottom: 30px; }\n\n.portfolio-modal .modal-body img {\n  margin-bottom: 30px; }\n\n.portfolio-modal .modal-body button {\n  cursor: pointer; }\n\n.portfolio-modal .close-modal {\n  position: absolute;\n  top: 25px;\n  right: 25px;\n  width: 75px;\n  height: 75px;\n  cursor: pointer;\n  background-color: transparent;\n  z-index: 99999999; }\n\n.portfolio-modal .close-modal:hover {\n  opacity: 0.3; }\n\n.portfolio-modal .close-modal .lr {\n  /* Safari and Chrome */\n  z-index: 1051;\n  width: 1px;\n  height: 75px;\n  margin-left: 35px;\n  /* IE 9 */\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  background-color: #212529; }\n\n.portfolio-modal .close-modal .lr .rl {\n  /* Safari and Chrome */\n  z-index: 1052;\n  width: 1px;\n  height: 75px;\n  /* IE 9 */\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  background-color: #212529; }\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(modalService) {
        this.modalService = modalService;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent.prototype.open = function (content) {
        this.modal = this.modalService.open(content);
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("./src/app/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Services -->\n<section id=\"services\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h2 class=\"section-heading text-uppercase\">Services</h2>\n        <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n      </div>\n    </div>\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <span class=\"fa-stack fa-4x\">\n          <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n          <i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>\n        </span>\n        <h4 class=\"service-heading\">E-Commerce</h4>\n        <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n      </div>\n      <div class=\"col-md-4\">\n        <span class=\"fa-stack fa-4x\">\n          <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n          <i class=\"fa fa-laptop fa-stack-1x fa-inverse\"></i>\n        </span>\n        <h4 class=\"service-heading\">Responsive Design</h4>\n        <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n      </div>\n      <div class=\"col-md-4\">\n        <span class=\"fa-stack fa-4x\">\n          <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n          <i class=\"fa fa-lock fa-stack-1x fa-inverse\"></i>\n        </span>\n        <h4 class=\"service-heading\">Web Security</h4>\n        <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/***/ (function(module, exports) {

module.exports = ".service-heading {\n  margin: 15px 0;\n  text-transform: none; }\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("./src/app/services/services.component.html"),
            styles: [__webpack_require__("./src/app/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <span class=\"copyright\">Copyright &copy; At James 2018</span>\n      </div>\n      <div class=\"col-md-4\">\n        <ul class=\"list-inline social-buttons\">\n          <li class=\"list-inline-item\">\n            <a href=\"#\">\n              <i class=\"fa fa-twitter\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">\n              <i class=\"fa fa-facebook\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">\n              <i class=\"fa fa-linkedin\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-4\">\n        <ul class=\"list-inline quicklinks\">\n          <li class=\"list-inline-item\">\n            <a href=\"#\">Privacy Policy</a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">Terms of Use</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "footer {\n  padding: 25px 0;\n  text-align: center; }\n\nfooter span.copyright {\n  font-size: 90%;\n  line-height: 40px;\n  text-transform: none;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n\nfooter ul.quicklinks {\n  font-size: 90%;\n  line-height: 40px;\n  margin-bottom: 0;\n  text-transform: none;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navigation-menu/navigation-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav\n  class=\"navbar navbar-expand-lg navbar-dark fixed-top\"\n  [ngClass]=\"{'navbar-shrink': navigationPinned}\"\n  #mainNav\n  id=\"mainNav\">\n  <div ngbDropdown class=\"container\">\n    <a pageScroll class=\"navbar-brand\" (click)=\"updateHash($event)\" href=\"#page-top\">At James</a>\n    <button ngbDropdownToggle class=\"navbar-toggler navbar-toggler-right\" type=\"button\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      Menu\n      <i class=\"fa fa-bars\"></i>\n    </button>\n    <div ngbDropdownMenu class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav text-uppercase ml-auto\">\n        <li class=\"nav-item\">\n          <a pageScroll #services\n            class=\"nav-link\"\n            [ngClass]=\"{'active': isActive(services)}\"\n            (click)=\"updateHash($event)\"\n            href=\"#services\">Services</a>\n        </li>\n        <li class=\"nav-item\">\n          <a pageScroll #portfolio\n            class=\"nav-link\"\n            [ngClass]=\"{'active': isActive(portfolio)}\"\n            (click)=\"updateHash($event)\"\n            href=\"#portfolio\">Portfolio</a>\n        </li>\n        <li class=\"nav-item\">\n          <a pageScroll #about\n            class=\"nav-link\"\n            [ngClass]=\"{'active': isActive(about)}\"\n            (click)=\"updateHash($event)\"\n            href=\"#about\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a pageScroll #team\n          class=\"nav-link\"\n          [ngClass]=\"{'active': isActive(team)}\"\n          (click)=\"updateHash($event)\"\n          href=\"#team\">Team</a>\n        </li>\n        <li class=\"nav-item\">\n          <a pageScroll #contact\n          class=\"nav-link\"\n          [ngClass]=\"{'active': isActive(contact)}\"\n          (click)=\"updateHash($event)\"\n          href=\"#contact\">Contact</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navigation-menu/navigation-menu.component.scss":
/***/ (function(module, exports) {

module.exports = "#mainNav {\n  background-color: #212529; }\n\n#mainNav .navbar-toggler {\n  font-size: 12px;\n  right: 0;\n  padding: 13px;\n  text-transform: uppercase;\n  color: white;\n  border: 0;\n  background-color: #fed136;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n\n#mainNav .navbar-brand {\n  color: #fed136;\n  font-family: 'Kaushan Script', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n\n#mainNav .navbar-brand.active, #mainNav .navbar-brand:active, #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\n  color: #fec503; }\n\n#mainNav .navbar-nav .nav-item .nav-link {\n  font-size: 90%;\n  font-weight: 400;\n  padding: 0.75em 0;\n  letter-spacing: 1px;\n  color: white;\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n\n#mainNav .navbar-nav .nav-item .nav-link.active, #mainNav .navbar-nav .nav-item .nav-link:hover {\n  color: #fed136; }\n\n#navbarResponsive {\n  border: none; }\n\n@media (min-width: 992px) {\n  #mainNav {\n    padding-top: 25px;\n    padding-bottom: 25px;\n    -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;\n    transition: padding-top 0.3s, padding-bottom 0.3s;\n    border: none;\n    background-color: transparent; }\n  #mainNav .navbar-brand {\n    font-size: 1.75em;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n  #mainNav .navbar-nav .nav-item .nav-link {\n    padding: 1.1em 1em !important; }\n  #mainNav.navbar-shrink {\n    padding-top: 0;\n    padding-bottom: 0;\n    background-color: #212529; }\n  #mainNav.navbar-shrink .navbar-brand {\n    font-size: 1.25em;\n    padding: 12px 0; } }\n"

/***/ }),

/***/ "./src/app/shared/navigation-menu/navigation-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationMenuComponent = /** @class */ (function () {
    function NavigationMenuComponent(router) {
        this.router = router;
        this.navigationPinned = false;
    }
    NavigationMenuComponent.prototype.ngOnInit = function () { };
    NavigationMenuComponent.prototype.onScroll = function (event) {
        var topOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (topOffset > 100) {
            this.navigationPinned = true;
        }
        else {
            this.navigationPinned = false;
        }
    };
    NavigationMenuComponent.prototype.updateHash = function (event) {
        if (!event) {
            this.router.navigate(['/']);
            return;
        }
        var locationId = event.target.attributes.href.value.slice(1);
        this.router.navigate(['/'], { fragment: locationId });
    };
    NavigationMenuComponent.prototype.isActive = function (clickedHash) {
        return (window.location.hash === clickedHash.href.split('/')[3]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavigationMenuComponent.prototype, "onScroll", null);
    NavigationMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation-menu',
            template: __webpack_require__("./src/app/shared/navigation-menu/navigation-menu.component.html"),
            styles: [__webpack_require__("./src/app/shared/navigation-menu/navigation-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], NavigationMenuComponent);
    return NavigationMenuComponent;
}());



/***/ }),

/***/ "./src/app/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Team -->\n<section class=\"bg-light\" id=\"team\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h2 class=\"section-heading text-uppercase\">Our Amazing Team</h2>\n        <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"team-member\">\n          <img class=\"mx-auto rounded-circle\" src=\"assets/img/team/1.jpg\" alt=\"\">\n          <h4>Kay Garland</h4>\n          <p class=\"text-muted\">Lead Designer</p>\n          <ul class=\"list-inline social-buttons\">\n            <li class=\"list-inline-item\">\n              <a href=\"#\">\n                <i class=\"fa fa-twitter\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\">\n                <i class=\"fa fa-facebook\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\">\n                <i class=\"fa fa-linkedin\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"team-member\">\n          <img class=\"mx-auto rounded-circle\" src=\"assets/img/team/2.jpg\" alt=\"\">\n          <h4>Larry Parker</h4>\n          <p class=\"text-muted\">Lead Marketer</p>\n          <ul class=\"list-inline social-buttons\">\n            <li class=\"list-inline-item\">\n              <a href=\"#\">\n                <i class=\"fa fa-twitter\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\">\n                <i class=\"fa fa-facebook\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\">\n                <i class=\"fa fa-linkedin\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"team-member\">\n          <img class=\"mx-auto rounded-circle\" src=\"assets/img/team/3.jpg\" alt=\"\">\n          <h4>Diana Pertersen</h4>\n          <p class=\"text-muted\">Lead Developer</p>\n          <ul class=\"list-inline social-buttons\">\n            <li class=\"list-inline-item\">\n              <a href=\"#\">\n                <i class=\"fa fa-twitter\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\">\n                <i class=\"fa fa-facebook\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\">\n                <i class=\"fa fa-linkedin\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto text-center\">\n        <p class=\"large text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/team/team.component.scss":
/***/ (function(module, exports) {

module.exports = ".team-member {\n  margin-bottom: 50px;\n  text-align: center; }\n\n.team-member img {\n  width: 225px;\n  height: 225px;\n  border: 7px solid #fff; }\n\n.team-member h4 {\n  margin-top: 25px;\n  margin-bottom: 0;\n  text-transform: none; }\n\n.team-member p {\n  margin-top: 0; }\n"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team',
            template: __webpack_require__("./src/app/team/team.component.html"),
            styles: [__webpack_require__("./src/app/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map