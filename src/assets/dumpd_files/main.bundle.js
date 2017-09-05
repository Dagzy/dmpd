webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* body{\n\tbackground-color: black;\n\tcolor: deeppink;\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"navShouldBe()\"><app-nav> </app-nav></div>\n<router-outlet> </router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(db, afAuth, af) {
        this.db = db;
        this.afAuth = afAuth;
        this.af = af;
        this.title = 'app';
        this.user = this.afAuth.auth.currentUser;
    }
    AppComponent.prototype.navShouldBe = function () {
        var state;
        var url = window.location.href;
        var indexOfSlash;
        for (var i = 0; i < url.length; i++) {
            if (url[i] === '/') {
                indexOfSlash = i;
            }
        }
        var urlEnd = url.substring(indexOfSlash, url.length);
        if (urlEnd === "/" || urlEnd === "/landing") {
            state = false;
        }
        else {
            state = true;
        }
        return state;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_create_component__ = __webpack_require__("../../../../../src/app/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_messageService__ = __webpack_require__("../../../../../src/app/services/messageService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authService__ = __webpack_require__("../../../../../src/app/services/authService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_embed_video__ = __webpack_require__("../../../../ngx-embed-video/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ngx_embed_video__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// New imports to update based on AngularFire2 version 4





var config = {
    apiKey: "AIzaSyBBWJJG70QSKgGlWzz5D3lXgZitVNDp-XQ",
    authDomain: "split-500b7.firebaseapp.com",
    databaseURL: "https://split-500b7.firebaseio.com",
    projectId: "split-500b7",
    storageBucket: "",
    messagingSenderId: "524073548350"
};
var appRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__["a" /* HomepageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'landing',
        component: __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__["a" /* LandingComponent */]
    },
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_8__create_create_component__["a" /* CreateComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__edit_edit_component__["a" /* EditComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'messages',
        component: __WEBPACK_IMPORTED_MODULE_17__messages_messages_component__["a" /* MessagesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__create_create_component__["a" /* CreateComponent */],
            __WEBPACK_IMPORTED_MODULE_12__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_17__messages_messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__edit_edit_component__["a" /* EditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } //debugging
            ),
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_19_ngx_embed_video__["EmbedVideo"].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_messageService__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_11__services_authService__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input, label {\n\tmargin: auto;\n\tfloat: none;\n\tdisplay:inline-block;\n\t/* width: auto; */\n\tpadding: 4px;\n\tfont-size: 25px;\n}\nh2 {\n\tcolor: #d60000;\n\ttext-align: center;\n\tfont-size: 38px;\n}\nh3{\n\tcolor: #1c1c1c;\n}\n\n.constructedTitle {\n\twidth: 100%;\n\theight: auto;\n}\n\n.panel-default{\n\tborder: 2px solid #1c1c1c;\n\tborder-radius: 8px;\n\tborder: transparent;\n\tborder-radius:  0px 8px 0px 8px;\n\tbackground: transparent\n}\n\n/* title */\n.panel-default>.panel-heading.a{\n\tbackground-color: #e8e8e8;\n\tborder-radius: 8px;\n}\n.panel-default>.panel-heading>input.constructedTitle {\n\tbackground-color: #FCFCFC;\n\tborder-radius: 8px;\n\tborder: 1px solid #e8e8e8;\n\toutline-color: #b00505;\n\tmargin: 1px;\n}\n\n/* other stuff */\n.panel-default>.panel-heading{\n\tbackground-color: #FCFCFC;\n\tborder-radius: 8px;\n}\n.panel-default>.panel-body {\n\tbackground-color: #e8e8e8;\n\tborder-radius: 8px;\n}\n/* for printed message only */\n.panel-default>.panel-heading>.panel-body {\n\tbackground-color: #fcfcfc;\n\tborder-radius: 8px;\n}\n\n/* category, etc, buttons: radio/checkbox */\nbutton.btn.btn-primary{\n\tvertical-align: middle;\n}\ninput[type=radio], input[type=checkbox] {\n\tdisplay:none;\n\toverflow-y: auto;\n}\ninput[type=radio] + label, input[type=checkbox] + label {\n\tdisplay:inline-block;\n\tmargin:-2px;\n\tpadding: 4px 12px;\n\tmargin-bottom: 5px;\n\tfont-size: 14px;\n\tline-height: 20px;\n\tcolor: #f5f5f5;\n\ttext-align: center;\n\tborder-radius: 8px;\n  \t/*box-shadow: 0 9px #999; \n\ttext-shadow: 0 1px 1px rgba(255,255,255,0.75); \n\tvertical-align: middle; */\n\tcursor: pointer;\n\t/* background-color: white; */\n\tbackground-color: #811025;\n\t/* background-image: -webkit-gradient(linear,0 0,0 100%,from(#7a0003),to(#d60000));\n\tbackground-image: -webkit-linear-gradient(top,#7a0003,#d60000);\n\tbackground-image: -o-linear-gradient(top,#7a0003,#d60000);\n\tbackground-image: linear-gradient(to bottom,#7a0003,#d60000);  */\n\tbackground-repeat: repeat-x;\n\tborder: 1px solid #ccc;\n\tborder-color: #e6e6e6 #e6e6e6 #bfbfbf;\n\tborder-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);\n\tborder-bottom-color: #b3b3b3; \n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff',endColorstr='#ffe6e6e6',GradientType=0);\n\tfilter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n\tbox-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05); \n\toverflow-y: auto; \n\tdisplay: block;\n}\ninput[type=radio] + label:hover, input[type=checkbox] + label:hover{\n\tbackground-image: none;\n\toutline: 0;\n\tbox-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);\n\tbackground-color: #630007;\n\toverflow-y: auto; \n\tdisplay: block;\n}\n/*input[type=radio]:checked + label.highlight, input[type=checkbox]:checked + label.highlight{\n\tbackground-image: none;\n\toutline: 0;\n\t-webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);\n\t-moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);\n\tbox-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);\n\tbackground-color:#b00505;\n\t overflow-y: auto; \n\tdisplay: block;\n} */\n.highlight{\n\tbackground-image: none;\n\toutline: 0;\n\tbox-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);\n\tbackground-color:#b00505 !important;\n\t overflow-y: auto; \n\tdisplay: block;\n}\n\n/* buttons */\n.btn {\n\tbackground-color: #811025;\n\tborder: transparent;\n\tfont-size: 20px;\n\tword-wrap: break-word;         /* All browsers since IE 5.5+ */\n\toverflow-wrap: break-word;     /* Renamed property in CSS3 draft spec */ \n\twhite-space: normal;\n}\n.btn:hover{\n\tbackground-color: #630007;\n}\n.btn:focus{\n\tbackground-color: #b00505;\n\toutline-color: transparent;\n}\n@media all and (max-width:480px) {\n\t.btn-group {\n\t\twidth: 100%; \n\t\tdisplay:block;\n\t} \n} \n/* #saveCancel {\n\tmin-width:20%;\n    max-width:20%;\n\tmargin:0% 39% 0% 40%; \n} */\n#outer\n{\n    width:100%;\n    text-align: center;\n}\n.inner\n{\n    display: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<h1 style=\"font-size: 50px;color: #f5f5f5; text-align: center; text-shadow: -.5px -.5px #757575, .5px -.5px #757575, -.5px .5px #757575, .5px .5px #757575; \"><strong>New Message</strong></h1>\n<div class='container'>\n    <div class=\"row\">\n        <div class=\"col-md-10 col-sm-offset-1\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading a\">\n                    <input type=\"text\" placeholder=\"Title of Message\" class=\"constructedTitle\" [(ngModel)]=\"model.title\"/>\n                    <input type=\"text\" placeholder=\"Your Phone Number (Ex: +12223334444)\" class=\"constructedTitle\" [(ngModel)]=\"model.phoneNum\"/>\n                    <h3>The Send to Phone function is being revamped, so it will not send to a phone :(</h3>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n                              <!-- <div class=\"col-md-4 col-sm-pull-7\">\n                                  <div class=\"panel panel-default\">\n                                      <div class=\"panel-heading\">\n                                      </div>\n                                  </div>\n                              </div> -->\n\n\n<div class='container'>\n    <div class=\"row\">\n        <!-- rows do same line and coumns do different lines -->\n        <div class=\"col-md-12\">\n            <br/>\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\"><h1 style=\"text-align: center; color: #d60000;\">Category</h1></div>\n                <div class=\"panel-body\" ng-init=\"active = true\">\n                    <!-- <ul class=\"categories\"> -->\n                    <!-- the nums re[present thst if 0, load amicable -->\n                    <div class=\"btn-group btn-group-justified\">\n                        <div class=\"btn-group\">\n                            <input type=\"radio\" id=\"amicable\" name=\"cat\">\n                            <label for=\"amicable\" class=\"btn btn-primary\" id=\"amicable\" (click)=\"setType(5)\" style=\"border-radius:8px; font-size: 20px;\">Amicable</label>\n                        </div>\n\n                        <div class=\"btn-group\">\n                            <input type=\"radio\" id=\"blunt\" name=\"cat\">\n                            <label for=\"blunt\" class=\"btn btn-primary\" id=\"blunt\" (click)=\"setType(1)\" style=\"border-radius:8px; font-size: 20px;\">Blunt</label>\n                        </div>\n\n                        <div class=\"btn-group\">\n                                <input type=\"radio\" id=\"haikus\" name=\"cat\">\n                                <label for=\"haikus\" class=\"btn btn-primary\" id=\"haikus\" (click)=\"setType(2)\" style=\"border-radius:8px; font-size: 20px;\" >Haikus</label>\n                        </div>\n\n                        <div class=\"btn-group\">\n                            <input type=\"radio\" id=\"harsh\" name=\"cat\">\n                            <label for=\"harsh\" class=\"btn btn-primary\" id=\"harsh\" (click)=\"setType(3)\" style=\"border-radius:8px; font-size: 20px;\">Harsh</label>\n                        </div>\n\n                        <div class=\"btn-group\">\n                            <input type=\"radio\" id=\"poems\" name=\"cat\">\n                            <label for=\"poems\" class=\"btn btn-primary\" id=\"poems\" (click)=\"setType(4)\" style=\"border-radius:8px; font-size: 20px;\" >Poems</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class='container' *ngIf=\"this.category\">\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\"><h1 style=\"color: #d60000; text-align: center;\" id=\"intro\">Greeting</h1></div>\n                <div class=\"panel-body\">\n                    <div *ngIf=\"category == 5\" >\n                        <div class=\"amicable\" *ngFor=\"let sentence of amicable.intro; let i = index\">\n                            <input type=\"radio\" id=\"{{sentence}}\" name=\"intro\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"selectIntro('amicable-intro', sentence, i)\" [class.highlight]=\"isActivated('amicable-intro',i)\" id=\"{{sentence}}\" [(ngModel)]=\"model.intro\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                    <div  *ngIf=\"category == 1\">\n                        <div class=\"blunt\" *ngFor=\"let sentence of blunt.intro; let i = index\">\n                            <input type=\"radio\" id=\"{{sentence}}\" name=\"intro\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"selectIntro('blunt-intro', sentence, i)\" [class.highlight]=\"isActivated('blunt-intro',i)\" id=\"{{sentence}}\" [(ngModel)]=\"model.intro\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                    <div *ngIf=\"category == 2\">\n                        <div *ngFor=\"let sentence of haikus.intro; let i = index\">\n                            <input type=\"radio\" id=\"{{sentence}}\" name=\"intro\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"selectIntro('haikus-intro', sentence, i)\" [class.highlight]=\"isActivated('haikus-intro',i)\" id=\"{{sentence}}\" [(ngModel)]=\"model.intro\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                    <div *ngIf=\"category == 3\">\n                        <div class=\"harsh\" *ngFor=\"let sentence of harsh.intro; let i = index\">\n                            <input type=\"radio\" id=\"{{sentence}}\" name=\"intro\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"selectIntro('harsh-intro', sentence, i)\" [class.highlight]=\"isActivated('harsh-intro',i)\" id=\"{{sentence}}\" [(ngModel)]=\"model.intro\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                    <div class=\"poems\" *ngIf=\"category == 4; let i = index\">\n                        <div *ngFor=\"let sentence of poems.intro; let i = index\">\n                            <input type=\"radio\" id=\"{{sentence}}\" name=\"intro\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"selectIntro('poems-intro', sentence, i)\" [class.highlight]=\"isActivated('poems-intro',i)\" id=\"{{sentence}}\" [(ngModel)]=\"model.intro\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4 col-md-offset-1\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\"><h1 style=\"color: #d60000; text-align: center;\" id=\"mid\">Main Message</h1></div>\n                <div class=\"panel-body\">\n                    <div *ngIf=\"category == 5\">\n                        <div *ngFor=\" let sentence of amicable.mid; let i = index\">\n                            <input type=\"checkbox\" id=\"{{sentence}}\" name=\"mid\" value=\"all\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"appendToMid('amicable-mid',sentence,i)\" [class.highlight]=\"isActivated('amicable-mid',i)\" [(ngModel)]=\"model.mid\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                    <div *ngIf=\"category == 1\">\n                        <div *ngFor=\"let sentence of blunt.mid; let i = index\">\n                            <input type=\"checkbox\" id=\"{{sentence}}\" name=\"mid\" value=\"all\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"appendToMid('blunt-mid',sentence,i)\" [class.highlight]=\"isActivated('blunt-mid',i)\" [(ngModel)]=\"model.mid\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                    <div *ngIf=\"category == 2\">\n                        <div *ngFor=\"let sentence of haikus.mid2; let i = index\">\n                            <input type=\"radio\" id=\"{{sentence}}\" name=\"mid2\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"selectMid('haikus-mid2',sentence,i)\" [class.highlight]=\"isActivated('haikus-mid2',i)\" [(ngModel)]=\"model.mid2\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                    <div *ngIf=\"category == 3\">\n                        <div *ngFor=\"let sentence of harsh.mid; let i = index\">\n                            <input type=\"checkbox\" id=\"{{sentence}}\" name=\"mid\" value=\"all\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"appendToMid('harsh-mid',sentence,i)\" [class.highlight]=\"isActivated('harsh-mid',i)\" [(ngModel)]=\"model.mid\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                    <div *ngIf=\"category == 4\">\n                        <div *ngFor=\"let sentence of poems.mid2; let i = index\">\n                            <input type=\"radio\" id=\"{{sentence}}\" name=\"mid2\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"selectMid('poems-mid2',sentence,i)\" [class.highlight]=\"isActivated('poems-mid2',i)\" [(ngModel)]=\"model.mid2\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3 col-md-offset-1\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\"><h1 style=\"color: #d60000; text-align: center;\" id=\"end\">Goodbye</h1></div>\n                <div class=\"panel-body\">\n                    <div *ngIf=\"category == 5\">\n                        <div class=\"prac\" *ngFor=\" let sentence of amicable.end; let i = index\">\n                            <input type=\"radio\" id=\"{{sentence}}\" name=\"end\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"selectEnd('amicable-end',sentence,i)\" [class.highlight]=\"isActivated('amicable-end',i)\"[(ngModel)]=\"model.end\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                    <div *ngIf=\"category == 1\">\n                        <div *ngFor=\"let sentence of blunt.end; let i = index\">\n                            <input type=\"radio\" id=\"{{sentence}}\" name=\"end\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"selectEnd('blunt-end',sentence,i)\" [class.highlight]=\"isActivated('blunt-end',i)\"[(ngModel)]=\"model.end\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                    <div *ngIf=\"category == 2\">\n                        <div *ngFor=\"let sentence of haikus.end; let i = index\">\n                            <input type=\"radio\" id=\"{{sentence}}\" name=\"end\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"selectEnd('haikus-end',sentence,i)\" [class.highlight]=\"isActivated('haikus-end',i)\"[(ngModel)]=\"model.end\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                    <div *ngIf=\"category == 3\">\n                        <div *ngFor=\"let sentence of harsh.end; let i = index\">\n                            <input type=\"radio\" id=\"{{sentence}}\" name=\"end\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"selectEnd('harsh-end',sentence,i)\" [class.highlight]=\"isActivated('harsh-end',i)\"[(ngModel)]=\"model.end\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                    <div *ngIf=\"category == 4\">\n                        <div *ngFor=\"let sentence of poems.end; let i = index\">\n                            <input type=\"radio\" id=\"{{sentence}}\" name=\"end\">\n                            <label for=\"{{sentence}}\" class=\"btn btn-primary\" (click)=\"selectEnd('poems-end',sentence,i)\" [class.highlight]=\"isActivated('poems-end',i)\"[(ngModel)]=\"model.end\" ngDefaultControl style=\"font-size: 18px;\">{{sentence}}</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<br/>\n<br/>\n\n<div class=\"container\">\n    <div *ngIf=\"!(weHaveTitle())\"></div>\n    <div *ngIf=\"(weHaveTitle())\">\n        <div class=\"row\">\n            <div class=\"col-md-12\" id=\"message\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <div *ngIf=\"this.model.title\" >\n                            <h2>{{this.model.title}}</h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"!(weHaveMessage())\"></div>\n    <div *ngIf=\"(weHaveMessage())\">\n        <div class=\"row\">\n            <div class=\"col-md-12\" id=\"message\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" style=\"background-color: #e8e8e8\">\n                        <div class=\"panel-body\">\n                            <div *ngIf=\"this.constructedMessage\">\n                                <h3>{{this.constructedMessage}}</h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<br/>\n\n<div id=\"outer\">\n    <div class=\"inner\">\n        <a routerLink=\"/messages\" role=\"button\" id=\"def-save\" (click)=\"onSubmit(i)\" class=\"btn btn-danger btn-lg\">Save</a>\n    </div>\n    <div class=\"inner\">\n        <a routerLink=\"/home\" role=\"button\" class=\"btn btn-danger btn-lg\">Cancel</a>\n    </div>\n</div>\n  <!-- <div>\n     <button (click)='updateMsg(i)'>CLick me</button>\n  </div> -->\n  <!-- <div class=\"container\" *ngIf=\"\">\n    <input type=\"text\" [(ngModel)]=\"messageContent\">\n  </div> -->\n\n<br/>\n<br/>\n"

/***/ }),

/***/ "../../../../../src/app/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messageService__ = __webpack_require__("../../../../../src/app/services/messageService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authService__ = __webpack_require__("../../../../../src/app/services/authService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateComponent = (function () {
    // colon specifies type??..... create class after : and a class makes it own datatype
    function CreateComponent(messageService, db, http, fb) {
        this.messageService = messageService;
        this.db = db;
        this.http = http;
        this.fb = fb;
        this.message = {};
        this.messageContent = "";
        this.midArray = [];
        this.activated = {};
        this.model = {
            title: '',
            intro: '',
            mid: '',
            mid2: '',
            end: '',
            phoneNum: ''
        };
        this.amicable = {
            intro: ["Hey, friend. We need to talk.", "This won't be easy, but there’s something I need to get off my chest.", "I don’t think you will like this, but you need to hear it."],
            mid: ["I think we need a break.", "I don’t want to hold you back.", "I love you too much, and it scares me.", "You deserve someone better", "I don't deserve you.", "You deserve so much more than I can give.", "It’s not you. It’s me.", "I need to focus on me right now.", "I’m not sure what I want, but as long as I feel this way, it’s not fair to you.", "We’ve tried so hard to make this work, but I think it’s time to let go.", "I have a lot more growing to do before I’m ready for something like this.", "I love you but I’m not in love with you.", "I love you enough to want something better for you than what I can give.", "You deserve to find your perfect match. It’s just not me."],
            end: ["I would like nothing more than to remain friends.", "We work better as friends, and I hope we can go back to the way things were.", "I really wish it could have worked out between us. I’m sorry it had to end like this.", "I’m sorry it had to end like this.", "I promise that someone out there is perfect for you. It’s just not me.", "I wish you all the best.", "I will always cherish the wonderful moments we’ve had.", "If you want to talk about this in person, please don’t hesitate to call."]
        };
        this.blunt = {
            intro: ["I’m breaking up with you.", "I’ll come right out and say it: I’m breaking up with you.", "It’s time to face the facts. We aren’t meant to be together."],
            mid: ["I just don’t want you.", "We aren’t right for each other.", "Our relationship is taking up too much of my time.", "I gave you too many chances. This was the last straw.", "I’m not going to say, “It’s not you; it’s me.” It clearly you.", "I don’t want to be stuck in a loveless relationship.", "Something about us doesn’t feel right, and I need to do something about it.", "I need something more.", "We’ve both changed and grown apart.", "Love shouldn’t be this hard.", "We are not each other’s soulmate.", "I never asked for a lot. All I ever wanted was to be liked by you for who I was, not for who you wanted me to be.", "Nothing can come close to the intensity with which I loved you, except maybe the intensity with which you took me for granted.", "You are not worth my love if you need reasons to find me worthy of yours."],
            end: ["I don’t think we should stay friends, so this is my last goodbye.", "Don’t try to convince me otherwise. I’ve already made up my mind.", "I just don’t see this working.", "This isn't working, and I don't think it ever will.", "Goodbye.", "This day would never have come if you loved me just as much as I have always loved you."]
        };
        this.haikus = {
            intro: ["Letting go is hard,", "I am leaving you,", "I’m saying goodbye.", "I don’t deserve this.", "I need to tell you", "You bore me to tears.", "You bore me to death.", "You deserve better.", "Hey. We need to talk.", "I don't deserve this."],
            mid2: ["and forgetting is harder,", "so this is my last goodbye.", "This loveless relationship", "Don’t come running back to me.", "that I'm breaking up with you.", "I don’t love you anymore.", "I can do better than you.", "Never contact me again.", "I need to focus on me.", "This isn’t worth the effort.", "I am breaking up with you.", "I’m better off without you."],
            end: ["but I will succeed.", "Please don’t contact me.", "is over for good.", "I will turn you down.", "See you later, chump.", "Bye! See you never!", "I deserve better.", "Please leave me alone.", "Goodbye forever.", "Can we still be friends?", "That is all. Goodbye.", "This is for the best."]
        };
        this.harsh = {
            intro: ["I’m breaking up with you.", "Today is great because I’m dumping you!", "‘Tis a lovely day to leave you."],
            mid: ["You are inferior to me.", "I deserve better.", "You don’t deserve me.", "You bore me.", "You’re beneath me.", "This isn’t worth the effort.", "You’re not worth the effort.", "I would have been better off if we had never met.", "I don’t love you anymore.", "I don’t love you anymore. In fact, I don't know if I ever did.", "You’re dragging me down.", "I need to make some changes in my life, and one of them is you.", "I hate being around you.", "I've found someone better."],
            end: ["Never contact me again.", "I hope you find someone as terrible as you.", "I’m not sure who could love you, but I definitely know I don’t.", "Don’t come running back to me.", "Breaking up with you will always remain one of my best accomplishments.", "Don’t let the door hit you on the way out."]
        };
        this.poems = {
            intro: ["Roses are Red. Violets are blue."],
            mid2: ["Trash is dumped,", "I'm saying goodbye because", "I'm breaking up with you.", "I hate your face.", "You suck like a vacuum."],
            end: ["and so are you.", "I'm better off without you.", "Leave me the hell alone.", "I'm breaking up with you.", "It's not me; it's you."]
        };
    }
    CreateComponent.prototype.setType = function (typeNumber) {
        this.category = typeNumber;
    };
    CreateComponent.prototype.selectIntro = function (identifier, word, index) {
        console.log(identifier, word, index);
        //Store what the value should be after click
        var value = !this.activated[identifier][index];
        //Reset all indexes to be false(null)
        this.activated[identifier] = [];
        //Set button just clicked to the value stored above
        this.activated[identifier][index] = value;
        this.intro = word;
        this.updateMessage();
    };
    CreateComponent.prototype.appendToMid = function (identifier, word, index) {
        if (this.midArray.includes(word))
            // tskes away stuff. at index of teh word take one
            this.midArray.splice(this.midArray.indexOf(word), 1);
        else
            this.midArray.push(word);
        // takes array and convert to string
        // ["hi","hello","wassup"] -> "hi,hello,wassup" -> the () makes it a spacr nit a ,
        this.mid = this.midArray.join(" ");
        this.updateMessage();
        this.activated[identifier][index] = !this.activated[identifier][index];
    };
    CreateComponent.prototype.selectMid = function (identifier, word, index) {
        //    console.log(identifier, word);
        this.mid2 = word;
        var value = !this.activated[identifier][index];
        //Reset all indexes to be false(null)
        this.activated[identifier] = [];
        //Set button just clicked to the value stored above
        this.activated[identifier][index] = value;
        this.updateMessage();
    };
    CreateComponent.prototype.selectEnd = function (identifier, word, index) {
        this.end = word;
        var value = !this.activated[identifier][index];
        //Reset all indexes to be false(null)
        this.activated[identifier] = [];
        //Set button just clicked to the value stored above
        this.activated[identifier][index] = value;
        this.updateMessage();
    };
    CreateComponent.prototype.updateTitle = function () {
        this.constructedTitle = (!!this.title ? this.title : "");
    };
    CreateComponent.prototype.updateMessage = function () {
        //ternary. if this is true, put; if not, noth9ng
        // null -> true -> false   for the !!
        this.constructedMessage = (!!this.intro ? this.intro : "") + " " + ((!!this.mid ? this.mid : "") || (!!this.mid2 ? this.mid2 : "")) + " " + (!!this.end ? this.end : "");
    };
    CreateComponent.prototype.weHaveTitle = function () {
        return !!(this.model.title);
    };
    CreateComponent.prototype.weHaveMessage = function () {
        return !!(this.constructedMessage);
    };
    CreateComponent.prototype.isActivated = function (word, index) {
        //We check if the list does not exist in object already, and if it doesn't, we make it
        if (!this.activated[word])
            this.activated[word] = [];
        //Return the boolean value stored in the index of the list
        return this.activated[word][index];
    };
    CreateComponent.prototype.ngOnInit = function () {
        // this.messageComp.getTheMessages()
        // console.log("Got the messages on the create page")
    };
    CreateComponent.prototype.updateMsg = function (id) {
        console.log(id);
        var self = this;
        this.db.database.ref('/messages').on("value", function (data) {
            console.log(data.val());
            id = data.val();
            Object.keys(data.val()).forEach(function (key) {
                if (id === key) {
                    self.messageContent = data.val()[key].text;
                    return data.val()[key];
                }
            });
        });
    };
    CreateComponent.prototype.onSubmit = function (makeMessage) {
        this.messageService.makeMessage({ title: this.model.title, text: this.constructedMessage, phoneNum: this.model.phoneNum }, this.fb.getUserId());
    };
    CreateComponent.prototype.alertify = function () {
        window.confirm("This Feature Unavailable On The Trial Version.");
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create',
        template: __webpack_require__("../../../../../src/app/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create/create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_messageService__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_messageService__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_authService__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authService__["a" /* FirebaseService */]) === "function" && _d || Object])
], CreateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-default{\n\tborder: 2px solid #1c1c1c;\n\tborder-radius: 8px;\n\tborder: transparent;\n\tborder-radius:  0px 8px 0px 8px;\n\tbackground: transparent\n}\n.panel-default>.panel-heading, .panel-default>.panel-body{\n\tbackground-color: #e8e8e8;\n\tborder-radius: 8px;\n}\n.panel-heading textarea{\n  font-size: 30px;\n  width: 100%;\n\theight: 100%;\n  background-color: #FCFCFC;\n  color: #1c1c1c;\n  border: transparent;\n  border-radius: 8px;\n  font-weight: bold;\n  outline-color: #b00505;\n}\n.panel-body textarea{\n  font-size: 30px;\n  min-width: 100%;\n  max-width: 100%;\n  height: 300px;\n  background-color: #fcfcfc;\n  color: #1c1c1c;\n  border: transparent;\n  border-radius: 8px;\n  outline-color: #b00505;\n}\n\n/* buttons */\n.btn{\n\tdisplay: inline-block;\n\tbackground-color: #811025;\n\tborder: transparent;\n}\n.btn:hover {\n\tbackground-color: #630007;\n}\n.btn:focus{\n\tbackground-color: #b00505;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<h1><strong>Update \"{{model.title}}\" Message</strong></h1>\n<div class=\"container\">\n  <div class=\"form col-xs-12\">\n      <br>\n      <br>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><textarea [(ngModel)]=\"model.title\" name=\"title\" style=\"text-align: center\"></textarea></div>\n        <br>\n        <div class=\"panel-body\"><textarea [(ngModel)]=\"model.message\" name=\"message\"></textarea></div>\n      </div>\n    <br>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"col-sm-offset-5\">\n    <a routerLink=\"/messages\" role=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"updateMessage()\">Save</a>\n    <a routerLink=\"/messages\" role=\"button\" class=\"btn btn-danger btn-lg\">Cancel</a>\n  </div>\n</div>\n<br>\n<br>\n"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messageService__ = __webpack_require__("../../../../../src/app/services/messageService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authService__ = __webpack_require__("../../../../../src/app/services/authService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = (function () {
    function EditComponent(router, route, msgs, db, fb) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.msgs = msgs;
        this.db = db;
        this.fb = fb;
        this.model = {
            title: "",
            message: ""
        };
        this.route.params.subscribe(function (params) {
            _this.msgs.getMsgbyId(params.id).then(function (message) {
                _this.model.title = message.title;
                _this.model.message = message.text;
            });
        });
    }
    EditComponent.prototype.updateMessage = function (makeMessage) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.msgs.update(params.id, _this.model.title, _this.model.message);
        });
    };
    EditComponent.prototype.ngOnInit = function () {
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_messageService__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_messageService__["a" /* MessageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_authService__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_authService__["a" /* FirebaseService */]) === "function" && _e || Object])
], EditComponent);

var _a, _b, _c, _d, _e;
// makeMessage(theMessage, userId){ //function that takes in a message object and a user Id
//   theMessage.ownerId = userId //adds the Id to the message object
//   this.db.database.ref('/messages').push(theMessage) //adds it to the database
// }
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  color: #fcfcfc;\n  font-size: 70px;\n  text-align: center;\n  text-shadow: -.5px -.5px #757575, .5px -.5px #757575, -.5px .5px #757575, .5px .5px #757575; \n}\na {\n  font-size: 23px;\n}\n/* \n#pushpanel {\n  margin-top:  0px;\n} */\n/* \n#msgtxt {\n  background-color: #FCFCFC;\n  color: #1c1c1c;\n} */\n\n/* slogo */\nimg{\n  width: 750px;\n  height: auto;\n}\n@media screen and (max-device-width: 480px) {\n\timg { \n\t\twidth: 100%;\n    height: auto;\n\t}\n}\n.gradient {\n\tbackground-image:\n    \tradial-gradient(\n      \trgba(117, 117, 117, .9),\n      \trgba(252,252,252, .2),\n      \ttransparent\n    );\n\twidth: 100%;\n\theight: auto;\n\tfloat: left;\n\tposition: relative;\n\tdisplay: block;\n}\n\n/* button to make stuff */\np{\n  text-align: center;\n}\n#msgttl {\n  background-color: #811025;\n  color: #FCFCFC;\n  border: transparent;\n  border-radius: 8px;\n  word-wrap: break-word;         /* All browsers since IE 5.5+ */\n  overflow-wrap: break-word;     /* Renamed property in CSS3 draft spec */ \n  white-space: normal;\n}\n#msgttl:hover {\n  background-color: #630007;\n  color: #FCFCFC;\n}\n#msgttl:active {\n  background-color: #b00505;\n  color: #FCFCFC;\n}\n@media screen and (max-device-width: 480px) {\n\t#msgttl { \n\t\twidth: 90%;\n    height: auto;\n\t}\n}\n/* vdeio */\n.video-wrapper {\n  position: relative; \n  padding-bottom: 56.25%; /* 16:9 */  \n  padding-top: 25px; \n  margin: auto;\n}\n.video-wrapper iframe {\n  position: absolute; \n  top: 0; \n  left: 0; \n  width: 100%; \n  height: 100%;\n}\n.container {\n  width: 100%; \n  max-width: 750px; \n  margin: auto;\n}\n\n\n/* .panel{\n  border: 1px solid #757575;\n  border-radius: 8px;\n}\n.panel-heading{\n  border-radius: 8px;\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <br>\n  <br>\n  <br>\n  <h1>Welcome to</h1>\n  <h1 class=\"gradient\"><img src=\"../assets/dumpdlogo/testinngngngn.png\"></h1>\n</div>\n\n<br>\n<br>\n<br>\n <div class=\"wrapper text-center\">\n    <div class=\"btn-group\">\n      <p><a class=\"btn btn-primary btn-md\" id=\"msgttl\" routerLink=\"/create\" role=\"button\">Write A Message For That <s>Special</s> Someone</a></p>\n      <!-- &lt;/3 to make a </3 -->\n    </div>\n</div>\n<br>\n<!-- npm install ngx-embed-video - -save -->\n<div class=\"container\">\n    <div class=\"video-wrapper\">\n      <iframe  src=\"//www.youtube.com/embed/L9oMb3_UW-o\"  frameborder=\"0\" allowfullscreen ></iframe>\n    </div>\n</div>\n<!-- <div class=\"container\">\n  <div class=\"row justify-content-around\">\n    <div style=\"float: right;\">\n      <ul> -->\n    <!--This creates the containers for the for-loop to populate  -->\n          <!-- <li *ngFor=\"let message of pieces;let i=index\" style=\"display: inline;\">\n            <div class=\"panel panel-default col-md-4 col-md-offset-1\" id=\"msgtxt\"> -->\n            <!-- <div class=\"col-lg-3 col-md-4 col-xs-6 thumb\"> -->\n              <!-- <a routerLink= {{message.url}} class=\"panel-heading\" id=\"msgttl\">{{message.title}}</a>\n              <form class=\"panel-body\" >{{message.text}}</form> -->\n            <!-- </div> -->\n          <!-- </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div> -->\n<br/>\n<br/>\n<br/>\n<br/>"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authService__ = __webpack_require__("../../../../../src/app/services/authService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messageService__ = __webpack_require__("../../../../../src/app/services/messageService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_embed_video__ = __webpack_require__("../../../../ngx-embed-video/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_embed_video__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomepageComponent = (function () {
    function HomepageComponent(messageService, auth, embedService) {
        this.messageService = messageService;
        this.auth = auth;
        this.embedService = embedService;
        //video 
        this.youtubeUrl = "https://www.youtube.com/watch?v=L9oMb3_UW-o";
        this.youtubeId = "L9oMb3_UW-o";
        this.pieces = [];
        console.log(this.embedService.embed(this.youtubeUrl));
        console.log(this.embedService.embed_youtube(this.youtubeId));
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.populate();
    };
    HomepageComponent.prototype.populate = function () {
        console.log("GEWFIJSDLK");
        var self = this;
        this.messageService.queryByUser(this.auth.getUser(), function (theData) {
            self.pieces = self.messageService.filterToArray(theData);
        });
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_messageService__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_messageService__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_authService__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authService__["a" /* FirebaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_embed_video__["EmbedVideoService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_embed_video__["EmbedVideoService"]) === "function" && _c || Object])
], HomepageComponent);

var _a, _b, _c;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nimg{\n  width: 625px;\n  height: auto;\n}\n@media screen and (max-device-width: 480px) {\n\timg { \n\t\twidth: 100%;\n    height: auto;\n\t}\n}\n.gradient {\n\tbackground-image:\n    \tradial-gradient(\n      \trgba(117, 117, 117, .9),\n      \trgba(252,252,252, .1),\n      \ttransparent\n    );\n\twidth: 100%;\n\theight: auto;\n\n}\n\nhtml {\n  overflow-y: scroll;\n}\n\nbody {\n  background: #c1bdba;\n  font-family: 'Titillium Web', sans-serif;\n}\n\na {\n  text-decoration: none;\n  color: #f5f5f5;\n  transition: .5s ease;\n}\na:hover {\n  color: pink;\n}\n\n.form {\n  background: rgba(28, 28, 28, .3);\n  padding: 40px;\n  max-width: 600px;\n  margin: 40px auto;\n  border-radius: 40px;\n  box-shadow: 0 4px 10px 4px rgba(255, 255, 255, .6);\n}\n\n.tab-group {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 40px 0;\n}\n.tab-group:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.tab-group li a {\n  display: block;\n  text-decoration: none;\n  padding: 15px;\n  background: rgba( 232, 232, 232, .25);\n  color: white;\n  font-size: 20px;\n  float: left;\n  width: 50%;\n  text-align: center;\n  cursor: pointer;\n  transition: .5s ease;\n  border-radius: 8px;\n}\n.tab-group li a:hover {\n  background-color: #630007;\n  color: #f5f5f5;\n}\n.tab-group .active a {\n  background-color: #811025;\n  color: #f5f5f5;\n}\n\n.tab-content > div:last-child {\n  display: none;\n}\n\nh1 {\n  text-align: center;\n  color: #f5f5f5;\n  font-weight: 300;\n  margin: 0 0 40px;\n}\n\n/* label {\n  position: absolute;\n  -webkit-transform: translateY(6px);\n          transform: translateY(6px);\n  left: 13px;\n  color: rgba(255, 255, 255, 1);\n  -webkit-transition: all 0.25s ease;\n  transition: all 0.25s ease;\n  -webkit-backface-visibility: hidden;\n  pointer-events: none;\n  font-size: 22px;\n}\nlabel .req {\n  margin: 2px;\n  color: pink;\n}\n\nlabel.active {\n  -webkit-transform: translateY(50px);\n          transform: translateY(50px);\n  left: 2px;\n  font-size: 14px;\n}\nlabel.active .req {\n  opacity: 0;\n}\n\nlabel.highlight {\n  color: #ffffff;\n} */\n\ninput, textarea {\n  font-size: 22px;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 5px 10px;\n  background: none;\n  background-image: none;\n  border: 1px solid rgba(245, 245, 245, .8);\n  color: rgba(245, 245, 245,1);\n  border-radius: 8px;\n  transition: border-color .25s ease, box-shadow .25s ease;\n}\ninput::-webkit-input-placeholder{\n  color: rgba(245, 245, 245,.7);\n}\ninput:-ms-input-placeholder{\n  color: rgba(245, 245, 245,.7);\n}\ninput::placeholder{\n  color: rgba(245, 245, 245,.7);\n}\ninput:focus, textarea:focus {\n  outline: 0;\n  border-color: #1c1c1c;\n  color: white;\n  background-color: rgba( 99, 0, 7, .4);\n}\n\n/* textarea {\n  border: 2px solid #a0b3b0;\n  resize: vertical;\n} */\n\n.field-wrap {\n  position: relative;\n  margin-bottom: 40px;\n}\n\n.top-row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.top-row > div {\n  float: left;\n  width: 48%;\n  margin-right: 4%;\n}\n.top-row > div:last-child {\n  margin: 0;\n}\n\n.button {\n  border: 0;\n  outline: none;\n  border-radius: 8px;\n  padding: 15px 0;\n  font-size: 2rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .1em;\n  background: #811025;\n  color: #ffffff;\n  transition: all 0.5s ease;\n  -webkit-appearance: none;\n}\n.button:hover {\n  background: #630007;\n}\n.button:focus {\n  background: #b00505;\n}\n\n.button-block {\n  display: block;\n  width: 100%;\n}\n\n.forgot {\n  margin-top: -20px;\n  text-align: right;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"fb-root\"></div>\n<br/>\n<div>\n\t<h1 class=\"gradient\"><img src=\"../assets/dumpdlogo/dumpd-2copyy.png\"></h1>\n</div>\n<div class='container'>\n\t<div class=\"form\">\n\t\t<div *ngIf=\"signup;else login\">   <!--based on the signup boolean in the typescript, displays this div or the ngTemplate below -->\n\t\t\t<ul class=\"tab-group\">\n\t\t\t\t<li class=\"tab active\"><a>Sign Up</a></li>\n\t\t\t\t<li class=\"tab\" (click)=\"swap()\"><a>Log In</a></li>\n\t\t\t</ul>\n\t\t\t<div id=\"signup\">\n\t\t\t\t<div class=\"top-row\"></div>\n\t\t\t\t<div class=\"field-wrap\">\n\t\t\t\t\t<input placeholder=\"Email\" id=\"login\" type=\"email\"required autocomplete=\"off\" [(ngModel)]=\"model.newEmail\"(keyup.enter)=\"create()\"/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field-wrap\">\n\t\t\t\t\t<input id=\"password\" placeholder=\"Set A Password\" type=\"password\"required autocomplete=\"off\" [(ngModel)]=\"model.newPass\" (keyup.enter)=\"create()\"/>\n\t\t\t\t\t<a style=\"font-size: 18px;\">Please enter at least 6 characters</a>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" (click)=\"create()\" class=\"button button-block\">Get Started</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<ng-template #login> <!-- the ng-template is for the login view when you swap from signup to login -->\n\t\t\t<ul class=\"tab-group\">\n\t\t\t\t<li class=\"tab\" (click)=\"swap()\"><a>Sign Up</a></li>\n\t\t\t\t<li class=\"tab active\"><a>Log In</a></li>\n\t\t\t</ul>\n\t\t\t<div id=\"login\">\n\t\t\t\t<!-- <h1>Welcome Back!</h1> -->\n\t\t\t\t<div class=\"field-wrap\">\n\t\t\t\t\t<input type=\"email\"required placeholder=\"Email\" autocomplete=\"off\" [(ngModel)]=\"model.email\" (keyup.enter)=\"logIn()\"/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field-wrap\">\n\t\t\t\t\t<input placeholder=\"Password\" type=\"password\"required autocomplete=\"off\" [(ngModel)]=\"model.pass\" (keyup.enter)=\"logIn()\"/>\n\t\t\t\t</div>\n\t\t\t\t<!-- <p class=\"forgot\"><a routerLink=\"#\">Forgot Password?</a></p> -->\n\t\t\t\t<button class=\"button button-block\" (click)=\"logIn()\" >Log In</button>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authService__ = __webpack_require__("../../../../../src/app/services/authService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = (function () {
    function LandingComponent(afAuth) {
        this.afAuth = afAuth;
        this.model = { email: "", pass: "", newPass: "", newEmail: "" }; //Object made for holding values from the DOM based on ngModel
        this.signup = false;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.swap = function () {
        this.signup = !this.signup; //swaps views from signup to login based on the signup boolean
    };
    LandingComponent.prototype.logIn = function () {
        var user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */](this.model.email, this.model.pass); //creates anew user obkject
        this.afAuth.signin(user); //runs the signin function in authService.ts
    };
    LandingComponent.prototype.create = function () {
        var user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */](this.model.newEmail, this.model.newPass); //creates a new user obkject
        this.afAuth.signup(user); //runs the signup function in authService.ts
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_authService__["a" /* FirebaseService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authService__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authService__["a" /* FirebaseService */]) === "function" && _a || Object])
], LandingComponent);

var _a;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\n\tcolor: #f5f5f5;\n\ttext-align: center;\n\ttext-shadow: -.5px -.5px #1c1c1c, .5px -.5px #1c1c1c, -.5px .5px #1c1c1c, .5px .5px #1c1c1c;\n\tfont-size: 50px\n}\nh3{\n\tcolor: #f5f5f5;\n\ttext-align: center;\n\ttext-shadow: -.5px -.5px #1c1c1c, .5px -.5px #1c1c1c, -.5px .5px #1c1c1c, .5px .5px #1c1c1c;\n\tfont-size: 30px\n}\nh2, a {\n\tcolor: #1c1c1c;\n}\np, a{\n\tfont-size: 20px;\n\tcolor: #1c1c1c;\n}\n/* li {\n\tlist-style-type:none;\n} */\n\n\n/* messages box */\n.container {\n\tborder: .5px solid black;\n\tborder-radius: 8px;\n\tbackground-color: white;\n\tmargin: 0 auto;\n\twidth: 90%;\n\theight: auto;\n\tmargin-bottom: 20px;\n}\n\n\n/* 3 buttons */\nbutton.btn.btn-primary, button.btn.btn-success, button.btn.btn-danger {\n\tbackground: transparent; \n\tborder: none;\n}\n.glyphicon {\n\tmargin-bottom:1px;\n\tdisplay:block;\n\tcolor: #811025;\n\tborder: transparent;\n\tfont-size: 19px;\n\tborder-radius: 8px;\n\t/* float: right !important;\n\tclear: both; */\n\t/* padding: -2px; */\n}\n.glyphicon:hover{\n\tcolor: #630007;\n}\n.glyphicon:active{\n\tcolor: #b00505;\n\toutline: none;\n}\n.col-sm-2, .col-sm-10 {\n\tdisplay: inline-block;\n}\n.vcenter {\n\tfloat:none;\n    display:inline-block;\n    vertical-align:middle;\n    margin-right:-4px;\n}\n.col-sm-10 {\n\t/* display:block; */\n\tfloat: left;\n}\n.col-sm-2 .vcenter .pull-right {\n\t/* display:block; */\n\tfloat: right;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n@media screen and (max-device-width: 480px) {\n\t.col-sm-2 .pull-right button { \n\t\tvertical-align: bottom;\n\t\ttext-align: center;\n\t\tfloat:none;\n\t\tdisplay:inline-block;\n\t\tmargin: 0 auto;\n\t}\n\t.col-sm-10 {\n\t\tpadding: 0px 2px 0px 0px;\n\t}\n}\n\n/* no messages button */\n#msgttl {\n\tbackground-color: #811025;\n\tcolor: #FCFCFC;\n\tborder: transparent;\n\tborder-radius: 8px;\n\tfont-size: 23px;\n}\n#msgttl:hover {\n\tbackground-color: #630007;\n\tcolor: #FCFCFC;\n}\n#msgttl:active {\n\tbackground-color: #b00505;\n\tcolor: #FCFCFC;\n}\n\n#toolbar {\n    width: 100%;\n    max-width: 700px;\n    margin: 10px;\n    /* border: 1px solid black; */\n\tpadding: 10px;\n\tdisplay:block; \n\tmargin:0 auto;\n}\n/* \n#toolbar .wrapper {\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\n<div>\n\t<br>\n\t<br>\n\t<h1><strong>My Messages</strong></h1>\n</div>\n\n\n<div *ngIf=\"!(weHaveMessages())\"> <!--if there are no messages to be displayed, then it displays the following message -->\n\t<br>\n\n\t<h3>YOU HAVE NO MESSAGES... YET ;)</h3>\n\t<div id=\"toolbar\">\n\t\t<div class=\"wrapper text-center\">\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<br>\n\t\t\t\t<p><a routerLink=\"/create\" role=\"button\" id=\"msgttl\" class=\"btn btn-primary btn-lg\">Break some hearts </a></p> <!-- this button sends you to the create a message page -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n<div *ngIf=\"(weHaveMessages())\">\n\t<div class=\"container\" *ngFor=\"let message of messageList;let i=index\"> <!-- For every message that is retrieved from the filterMessages function, display and instance of this template -->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div class=\"col-sm-10 vcenter\">\n\t\t\t\t\t<h2><strong>{{message.title}}</strong></h2>\n\t\t\t\t\t<p>{{message.text}}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-2 vcenter\">\n\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\t<button (click)=\"goTo(i)\" class=\"btn btn-primary ml-auto btn-md\" id=\"fit\"><i class=\"glyphicon glyphicon-edit\"></i></button>\n\t\t\t\t\t\t<button (click)=\"quickSend(i)\" class=\"btn btn-success ml-auto btn-md\" id=\"fit1\"><i class=\"glyphicon glyphicon-send\"></i></button>\n\t\t\t\t\t\t<button (click)=\"delete(i)\" class=\"btn btn-danger ml-auto btn-md\" id=\"fit2\"><i class=\"glyphicon glyphicon-trash\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<br>\n<!-- <button (click)=\"testMessage()\">Populate Field </button> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messageService__ = __webpack_require__("../../../../../src/app/services/messageService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authService__ = __webpack_require__("../../../../../src/app/services/authService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesComponent = (function () {
    //messages
    function MessagesComponent(msgs, auth, router) {
        this.msgs = msgs;
        this.auth = auth;
        this.router = router;
        //messages
        this.messageList = []; //The Array for the message objects that are completed { title: "theTitle", text: "text"}
    } //msgs is messageService and auth is authService(stupidly called FirebaseService)
    MessagesComponent.prototype.ngOnInit = function () {
        console.clear();
        this.getTheMessages();
    };
    MessagesComponent.prototype.getTheMessages = function () {
        var self = this;
        this.msgs.queryByUser(this.auth.getUserId(), function (theData) {
            self.messages = theData;
            self.messageList = self.msgs.filterToArray(theData);
        });
    };
    MessagesComponent.prototype.goTo = function (index) {
        var self = this;
        console.log(this.messageList[index].id);
        this.router.navigate(['/edit', self.messageList[index].id]);
    };
    MessagesComponent.prototype.delete = function (index) {
        this.msgs.delete(this.messageList[index].id);
        this.getTheMessages();
    };
    MessagesComponent.prototype.weHaveMessages = function () {
        return !!(this.messages);
    };
    MessagesComponent.prototype.quickSend = function (index) {
        console.log(this.messageList[index]);
        this.msgs.sendMessage(this.messageList[index]);
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_messageService__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_messageService__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authService__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authService__["a" /* FirebaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MessagesComponent);

var _a, _b, _c;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
        console.log("User Has BEEN CREATED!");
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background-color: rgba(176, 5, 5, .55);\n  box-shadow: 0 4px 20px 4px rgba(232, 232, 232, .6);\n  border-radius: 8px;\n}\na {\n  font-size: 20px;\n  margin-top: 5px;\n}\n.navbar-inverse .navbar-brand, .navbar-inverse .navbar-nav>li>a{\n  color: #fcfcfc;\n}\n.navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-nav>li>a:hover{\n  color: #FCFCFC;\n  text-shadow: -.5px -.5px #757575, .5px -.5px #757575, -.5px .5px #757575, .5px .5px #757575;\n  background-color: #811025;\n}\n.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus {\n  color: #FCFCFC;\n  text-shadow: -.5px -.5px #757575, .5px -.5px #757575, -.5px .5px #757575, .5px .5px #757575;\n  background-color: rgba(176, 5, 5, 1);\n}\n\n.logo {\n  width: 160px;\n  vertical-align: middle;\n  margin-top: 3px;\n  height: 55px;\n}\n\n/* HAMBURGER menu */\n.navbar-inverse .navbar-toggle {\n  background-color: #b00505;\n  border: 2px solid #1c1c1c;\n}\n.navbar-inverse .navbar-toggle:hover {\n  background-color: #811025;\n}\n.navbar-inverse .navbar-toggle:active {\n  background-color: #630007;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top col-md-10 col-md-offset-1\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <img class=\"logo\" src=\"../assets/dumpdlogo/dumpd-2-top.png\">\n            <!-- the toggleState is for the hamburger menu and is needed here for it to come down -->\n            <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"toggleState()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <!-- <a class=\"navbar-brand\"><strong>dumpd</strong></a> -->\n        </div>\n        <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'in': isIn }\">\n            <ul class=\"nav navbar-nav\">\n                <li role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"><a class=\"tryme\" routerLink=\"/home\">Home</a></li>\n                <li role=\"presentation\" routerLinkActive=\"active\"><a class=\"tryme\" routerLink=\"messages\">My Messages</a></li>\n                <li role=\"presentation\" routerLinkActive=\"active\"><a class=\"tryme\" routerLink=\"create\">New Messages</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li *ngIf=\"currentUser()\"><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\" style=\"margin-top: -15px;\"></span> Logout</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<!-- subscribe to url then hamburger closes??? -->"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authService__ = __webpack_require__("../../../../../src/app/services/authService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(auth) {
        this.auth = auth;
        // this helps make the hamburger menu dropdown
        this.isIn = false; // store state
    }
    NavComponent.prototype.currentUser = function () {
        return (this.auth.getUser());
    };
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authService__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authService__["a" /* FirebaseService */]) === "function" && _a || Object])
], NavComponent);

var _a;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(afa) {
        this.afa = afa;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afa.authState.subscribe(function (authState) {
                console.warn(!!authState);
                resolve(!!authState);
            });
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = (function () {
    function FirebaseService(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.af.authState.subscribe(function (authState) {
            _this.authState = authState; //sets the variable authState to the resut of this function
        });
    }
    FirebaseService.prototype.getUserId = function () {
        return this.af.auth.currentUser.uid;
    };
    FirebaseService.prototype.getUser = function () {
        return this.af.auth.currentUser;
    };
    FirebaseService.prototype.signup = function (user) {
        var _this = this;
        this.af.auth.createUserWithEmailAndPassword(user.email, user.password) //AF's signup function takes in an email and a password (automatically saves it and stuff)
            .then(function () {
            console.log("Successfully created user");
            _this.router.navigateByUrl('/home'); //navigates to homepage
        })
            .catch(function (e) {
            console.log(e); //if error, print the error
            return alert(e);
        });
    };
    FirebaseService.prototype.signin = function (user) {
        var _this = this;
        this.af.auth.signInWithEmailAndPassword(user.email, user.password)
            .then(function () {
            _this.router.navigateByUrl('/home');
        })
            .catch(function (e) {
            console.log(e);
            return alert(e);
        });
    };
    FirebaseService.prototype.signout = function () {
        var _this = this;
        this.af.auth.signOut() //uses angular fire signout function
            .then(function () {
            _this.router.navigateByUrl('/');
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    FirebaseService.prototype.isAuthed = function () {
        return !!this.authState; //Determines whether or not there is a user logged in
    };
    FirebaseService.prototype.canActivate = function () {
        if (!!(this.getUser())) {
            return true;
        }
        else {
            this.router.navigateByUrl('landing');
            return false;
        }
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], FirebaseService);

var _a, _b;
//# sourceMappingURL=authService.js.map

/***/ }),

/***/ "../../../../../src/app/services/messageService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageService = (function () {
    function MessageService(db, http) {
        this.db = db;
        this.http = http;
    }
    MessageService.prototype.makeMessage = function (theMessage, userId) {
        theMessage.ownerId = userId; //adds the Id to the message object
        this.db.database.ref('/messages').push(theMessage); //adds it to the database
    };
    MessageService.prototype.queryByUser = function (userId, callback) {
        this.db.database.ref('/messages').orderByChild('ownerId').equalTo(userId).on("value", function (snapshot) {
            callback(snapshot.val()); //runs callback function with this data.
        });
    };
    MessageService.prototype.delete = function (messageData) {
        this.db.database.ref('/messages/' + messageData).remove(function (err) {
            if (err) {
                console.log(err);
            }
        });
    };
    MessageService.prototype.filterToArray = function (messageObject) {
        var arrayFor = [];
        Object.keys(messageObject).forEach(function (message) {
            arrayFor.push({
                title: messageObject[message].title,
                text: messageObject[message].text,
                part: messageObject[message].text,
                id: message,
                phoneNum: messageObject[message].phoneNum
            }); //This adds an object with title (gotten from the object)
        });
        return arrayFor;
    };
    // filterAMessage(messageObject){
    // 	var filteredMessage = {title: "", text: "" }
    // 	for(var x in messageObject.parts){
    //            filteredMessage.text += (messageObject.parts[x].text)
    //        }
    //        return filteredMessage
    // }
    MessageService.prototype.sendMessage = function (message) {
        var messageToSend = {
            message: {
                toNumber: message.phoneNum,
                text: message.text
            }
        };
        this.http.post('https://dmpdsms.herokuapp.com/sms', messageToSend).subscribe(function (resp) { console.log(resp); });
    };
    MessageService.prototype.getMsgbyId = function (id) {
        return this.db.database.ref('/messages/' + id).once('value').then(function (s) {
            return s.val();
        });
    };
    MessageService.prototype.update = function (messageData, newtitle, newtext) {
        this.db.database.ref('/messages/' + messageData).update({
            title: newtitle,
            text: newtext
        });
    };
    return MessageService;
}());
MessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], MessageService);

var _a, _b;
//# sourceMappingURL=messageService.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../webpack-dev-server/client/index.js?http:/localhost:4200");
module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map