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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap\">\n  <app-navbar></app-navbar>\n  <main class=\"content\">\n    <router-outlet></router-outlet>\n  </main>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppInjector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_api_guard__ = __webpack_require__("../../../../../src/app/guards/api.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_partials_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/partials/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_partials_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/partials/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_auth_login_login_component__ = __webpack_require__("../../../../../src/app/components/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_auth_register_register_component__ = __webpack_require__("../../../../../src/app/components/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_company_company_create_company_create_component__ = __webpack_require__("../../../../../src/app/components/company/company-create/company-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_company_company_list_company_list_component__ = __webpack_require__("../../../../../src/app/components/company/company-list/company-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_company_company_update_company_update_component__ = __webpack_require__("../../../../../src/app/components/company/company-update/company-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dialogs_dialog_default_dialog_default_component__ = __webpack_require__("../../../../../src/app/components/dialogs/dialog-default/dialog-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dialogs_dialog_remove_dialog_remove_component__ = __webpack_require__("../../../../../src/app/components/dialogs/dialog-remove/dialog-remove.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//services


// import { Model } from './models/model';
//guards

//Components












var AppModule = /** @class */ (function () {
    function AppModule(injector) {
        AppInjector = injector;
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_partials_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_partials_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_auth_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_auth_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_company_company_create_company_create_component__["a" /* CompanyCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_company_company_list_company_list_component__["a" /* CompanyListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_company_company_update_company_update_component__["a" /* CompanyUpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_dialogs_dialog_default_dialog_default_component__["a" /* DialogDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_dialogs_dialog_remove_dialog_remove_component__["a" /* DialogRemoveComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_facebook__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialogModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_22__components_dialogs_dialog_default_dialog_default_component__["a" /* DialogDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_dialogs_dialog_remove_dialog_remove_component__["a" /* DialogRemoveComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_util_service__["a" /* UtilService */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_11__guards_api_guard__["a" /* ApiGuard */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Injector */]])
    ], AppModule);
    return AppModule;
}());

var AppInjector;


/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_login_login_component__ = __webpack_require__("../../../../../src/app/components/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_api_guard__ = __webpack_require__("../../../../../src/app/guards/api.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_company_company_create_company_create_component__ = __webpack_require__("../../../../../src/app/components/company/company-create/company-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_company_company_list_company_list_component__ = __webpack_require__("../../../../../src/app/components/company/company-list/company-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_company_company_update_company_update_component__ = __webpack_require__("../../../../../src/app/components/company/company-update/company-update.component.ts");


//Auth

//Guards

//User

//Company



var APP_ROUTES = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_auth_login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: 'user/update', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_api_guard__["a" /* ApiGuard */]], pathMatch: 'full' },
    { path: 'company/create', component: __WEBPACK_IMPORTED_MODULE_5__components_company_company_create_company_create_component__["a" /* CompanyCreateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_api_guard__["a" /* ApiGuard */]], pathMatch: 'full' },
    { path: 'company/list', component: __WEBPACK_IMPORTED_MODULE_6__components_company_company_list_company_list_component__["a" /* CompanyListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_api_guard__["a" /* ApiGuard */]], pathMatch: 'full' },
    { path: 'company/update/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_company_company_update_company_update_component__["a" /* CompanyUpdateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_api_guard__["a" /* ApiGuard */]], pathMatch: 'full' },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container{\n  margin-top:100px;\n}\n\n/*.example-card{*/\n\n/*min-width: 150px;*/\n\n/*max-width: 500px;*/\n\n/*width: 100%;*/\n\n/*}*/\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngClass.lt-md=\"mt-50\" ngClass.gt-sm=\"mt-100\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <mat-card ngClass.lt-sm=\"width-300\" ngClass.gt-sm=\"width-500\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"mat-display-1\">{{title}}</div>\n    <div *ngIf=\"register===true\" fxLayout=\"row\" fxLayoutAlign=\"center\"><a (click)=\"onTryLogin()\">Click Here&nbsp;</a>to log in.</div>\n    <form (ngSubmit)=\"onSubmit()\"  [formGroup]=\"loginForm\">\n\n      <mat-form-field class=\"full-width\">\n        <input formControlName=\"unique\" [(ngModel)]=\"user_info.unique\" matInput placeholder=\"Email or Phone\" name=\"unique\" [autofocus]=\"true\">\n        <!--<mat-hint>Errors appear instantly!</mat-hint>-->\n        <mat-error>{{getInputErrorMessage('unique')}}</mat-error>\n      </mat-form-field>\n\n\n      <mat-form-field class=\"full-width\">\n        <input formControlName=\"password\" type=\"password\" matInput [(ngModel)]=\"user_info.password\" placeholder=\"Password\" name=\"password\">\n        <mat-error>{{getInputErrorMessage('password')}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field *ngIf=\"register===true\" class=\"full-width\">\n        <input formControlName=\"confirmPassword\" type=\"password\" matInput [(ngModel)]=\"user_info.confirm_password\" placeholder=\"Confirm Password\" name=\"confirm-password\">\n        <mat-error>{{getInputErrorMessage('confirmPassword')}}</mat-error>\n      </mat-form-field>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" >\n        <button mat-raised-button [disabled]=\"!loginForm.valid\">Submit</button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__ = __webpack_require__("../../../../../src/app/helpers/util.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.user_info = {};
        this.title = 'Login / Register';
        this.register = false;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            unique: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            confirmPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
        });
    }
    LoginComponent.prototype.getInputErrorMessage = function (input_name) {
        var err_message = '';
        if (this.loginForm.get(input_name).hasError('required')) {
            if (input_name == 'unique') {
                err_message = 'You must enter an Email or Phone number.';
            }
            else {
                err_message = 'You must enter a Password.';
            }
        }
        if (this.loginForm.get(input_name).hasError('custom')) {
            err_message = this.loginForm.get(input_name).getError('custom');
        }
        return err_message;
    };
    LoginComponent.prototype.throwInputError = function (input_name, message) {
        this.loginForm.get(input_name).setErrors({ custom: message });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = {
                    unique_key: this.user_info.unique,
                    password: this.user_info.password,
                };
                this.register === false ? this.login(data) : this.create(data);
                return [2 /*return*/];
            });
        });
    };
    LoginComponent.prototype.onTryLogin = function () {
        this.register = false;
        this.title = "Log in / Register";
        var unique = this.user_info.unique;
        this.loginForm.reset({ unique: unique });
        this.loginForm.setErrors(null);
    };
    LoginComponent.prototype.login = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var err, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* Util */].to(__WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */].LoginReg(data))];
                    case 1:
                        _a = _b.sent(), err = _a[0], this.user = _a[1];
                        if (err) {
                            if (err.message.includes('password') || err.message.includes('Password')) {
                                this.throwInputError('password', err.message);
                            }
                            else if (err.message === 'Not registered') {
                                this.title = "Please Register";
                                this.register = true;
                            }
                            else if (err.message.includes('phone') || err.message.includes('email')) {
                                this.throwInputError('unique', err.message);
                            }
                            else {
                                this.throwInputError('unique', err.message);
                            }
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, this.user.to('update')];
                }
            });
        });
    };
    LoginComponent.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var err, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.user_info.confirm_password != this.user_info.password) {
                            this.throwInputError('confirmPassword', 'Passwords do not match');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* Util */].to(__WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */].CreateAccount(data))];
                    case 1:
                        _a = _b.sent(), err = _a[0], this.user = _a[1];
                        if (err)
                            __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* Util */].TE(err);
                        return [2 /*return*/, this.user.to('update')];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/auth/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company/company-create/company-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company/company-create/company-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngClass.lt-md=\"mt-50\" ngClass.gt-sm=\"mt-100\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <mat-card ngClass.lt-md=\"width-300\" ngClass.gt-sm=\"width-500\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"mat-display-1\">Create Company</div>\n    <form (ngSubmit)=\"onSubmit()\"  [formGroup]=\"companyForm\">\n\n      <mat-form-field class=\"full-width\">\n        <input formControlName=\"name\" [(ngModel)]=\"company_info.name\" matInput placeholder=\"Name\" name=\"name\">\n        <!--<mat-hint>Errors appear instantly!</mat-hint>-->\n        <mat-error>{{getInputErrorMessage('name')}}</mat-error>\n      </mat-form-field>\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" >\n        <button mat-raised-button [disabled]=\"!companyForm.valid\">create</button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/company/company-create/company-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_company_model__ = __webpack_require__("../../../../../src/app/models/company.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_util_helper__ = __webpack_require__("../../../../../src/app/helpers/util.helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CompanyCreateComponent = /** @class */ (function () {
    function CompanyCreateComponent(snackBar) {
        this.snackBar = snackBar;
        this.company_info = { name: '' };
        this.companyForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
        });
    }
    CompanyCreateComponent.prototype.getInputErrorMessage = function (input_name) {
        var err_message = '';
        if (this.companyForm.get(input_name).hasError('required'))
            err_message = 'You must enter a Company name.';
        if (this.companyForm.get(input_name).hasError('custom')) {
            err_message = this.companyForm.get(input_name).getError('custom');
        }
        return err_message;
    };
    CompanyCreateComponent.prototype.ngOnInit = function () {
    };
    CompanyCreateComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err, company, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helpers_util_helper__["a" /* Util */].to(__WEBPACK_IMPORTED_MODULE_2__models_company_model__["a" /* Company */].CreateAPI(this.company_info))];
                    case 1:
                        _a = _b.sent(), err = _a[0], company = _a[1];
                        company.to('update');
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-create',
            template: __webpack_require__("../../../../../src/app/components/company/company-create/company-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company/company-create/company-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatSnackBar */]])
    ], CompanyCreateComponent);
    return CompanyCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company/company-list/company-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company/company-list/company-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div ngClass.lt-md=\"mt-50\" ngClass.gt-sm=\"mt-100\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <mat-card ngClass.lt-md=\"width-300\" ngClass.gt-sm=\"width-500\">\n\n    <div class=\"center center mat-subheading-1\" *ngIf=\"companies.length <= 0 || !companies\">\n      You have no companies\n      <a routerLink=\"/company/create\" >Click Here</a> to create one!\n    </div>\n\n    <div class=\"center center mat-subheading-1\" *ngIf=\"companies.length > 0\">\n      <div>Click on any of the companies to edit</div>\n      <div *ngFor=\"let company of companies\">\n        <br>\n        <button class=\"center \" mat-raised-button (click)=\"company.to('update')\">{{company.name}}</button>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end\">\n        <a mat-button routerLink=\"/company/create\" >Create Company</a>\n      </div>\n    </div>\n\n  </mat-card>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/company/company-list/company-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_company_model__ = __webpack_require__("../../../../../src/app/models/company.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CompanyListComponent = /** @class */ (function () {
    function CompanyListComponent() {
        this.companies = [];
    }
    CompanyListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__models_company_model__["a" /* Company */].getAllAuthCompanies()];
                    case 1:
                        _a.companies = _b.sent();
                        this.user = __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */].Auth();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-list',
            template: __webpack_require__("../../../../../src/app/components/company/company-list/company-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company/company-list/company-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyListComponent);
    return CompanyListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/company/company-update/company-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company/company-update/company-update.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div ngClass.lt-md=\"mt-50\" ngClass.gt-sm=\"mt-100\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <mat-card ngClass.lt-md=\"width-300\" ngClass.gt-sm=\"width-500\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"mat-display-1\">Update Company: {{company.name}}</div>\n    <form (ngSubmit)=\"onSubmit()\"  [formGroup]=\"companyForm\">\n\n      <mat-form-field class=\"full-width\">\n        <input formControlName=\"name\" [(ngModel)]=\"company.name\" matInput placeholder=\"Name\" name=\"name\">\n        <!--<mat-hint>Errors appear instantly!</mat-hint>-->\n        <mat-error>{{getInputErrorMessage('name')}}</mat-error>\n      </mat-form-field>\n\n      <h2>\n        Users:\n      </h2>\n      <div *ngFor=\"let user of users\">\n          {{user.full_name}}\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" >\n        <button mat-raised-button [disabled]=\"!companyForm.valid\">Update</button>\n      </div>\n    </form>\n\n    <div fxLayoutAlign=\"end\">\n      <button mat-button (click)=\"onDelete()\">delete</button>\n    </div>\n\n\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/company/company-update/company-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__ = __webpack_require__("../../../../../src/app/helpers/util.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_company_model__ = __webpack_require__("../../../../../src/app/models/company.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CompanyUpdateComponent = /** @class */ (function () {
    function CompanyUpdateComponent(aRoute, snackBar) {
        this.aRoute = aRoute;
        this.snackBar = snackBar;
        this.company = { name: '' };
        this.companyForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required]),
        });
    }
    CompanyUpdateComponent.prototype.getInputErrorMessage = function (input_name) {
        var err_message = '';
        if (this.companyForm.get(input_name).hasError('required'))
            err_message = 'You must enter a name for the company.';
        if (this.companyForm.get(input_name).hasError('custom')) {
            err_message = this.companyForm.get(input_name).getError('custom');
        }
        return err_message;
    };
    CompanyUpdateComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* Util */].getUrlParams(this.aRoute)];
                    case 1:
                        _a.url_params = _c.sent();
                        _b = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3__models_company_model__["a" /* Company */].getById(this.url_params.id)];
                    case 2:
                        _b.company = _c.sent();
                        this.users = this.company.Users();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyUpdateComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err, res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* Util */].to(this.company.saveAPI())];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        if (err) {
                            if (err.message == 'Nothing Updated')
                                this.snackBar.open('Company', 'Nothing to Update', { duration: 2000 });
                            return [2 /*return*/];
                        }
                        this.snackBar.open('Company', 'Successfully updated', { duration: 2000 });
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyUpdateComponent.prototype.onDelete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var remove, err, res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* Util */].openRemoveDialog({ data: { title: 'Warning', body: 'Are you sure you want to delete this company?' } })];
                    case 1:
                        remove = _b.sent();
                        if (!remove) return [3 /*break*/, 3];
                        err = void 0, res = void 0;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* Util */].to(this.company.removeAPI())];
                    case 2:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        if (err) {
                            console.log(err, 'err');
                            if (err.message == 'Nothing Updated')
                                this.snackBar.open('Company', 'Nothing to Update', { duration: 2000 });
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_3__models_company_model__["a" /* Company */].to('list')];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CompanyUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-update',
            template: __webpack_require__("../../../../../src/app/components/company/company-update/company-update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company/company-update/company-update.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatSnackBar */]])
    ], CompanyUpdateComponent);
    return CompanyUpdateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialogs/dialog-default/dialog-default.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialogs/dialog-default/dialog-default.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dialog-default works!\n</p>\n<div>\n  <button mat-raised-button (click)=\"onNoClick()\">Close</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dialogs/dialog-default/dialog-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogDefaultComponent = /** @class */ (function () {
    function DialogDefaultComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogDefaultComponent.prototype.ngOnInit = function () {
    };
    DialogDefaultComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog-default',
            template: __webpack_require__("../../../../../src/app/components/dialogs/dialog-default/dialog-default.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialogs/dialog-default/dialog-default.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], DialogDefaultComponent);
    return DialogDefaultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialogs/dialog-remove/dialog-remove.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialogs/dialog-remove/dialog-remove.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\" fxFlexFill fxLayoutGap=\"30px\">\n  <div fxLayout=\"row\" fxFlexAlign=\"center\">\n      <h1>{{data.title}}</h1>\n  </div>\n\n\n  <div fxLayout=\"row\" fxFlexAlign=\"center\">\n    <h2>{{data.body}}</h2>\n  </div>\n\n  <div fxFlex=\"grow\" fxLayout=\"row\"  fxLayoutAlign=\"center end\" fxLayoutGap=\"10px\">\n    <button mat-raised-button (click)=\"onCancel()\">Cancel</button>\n    <button mat-raised-button (click)=\"onDelete()\">Delete</button>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dialogs/dialog-remove/dialog-remove.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogRemoveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogRemoveComponent = /** @class */ (function () {
    function DialogRemoveComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.remove = false;
    }
    DialogRemoveComponent.prototype.ngOnInit = function () {
    };
    DialogRemoveComponent.prototype.onDelete = function () {
        this.remove = true;
        this.dialogRef.close(this.remove);
    };
    DialogRemoveComponent.prototype.onCancel = function () {
        this.dialogRef.close(this.remove);
    };
    DialogRemoveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog-remove',
            template: __webpack_require__("../../../../../src/app/components/dialogs/dialog-remove/dialog-remove.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialogs/dialog-remove/dialog-remove.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], DialogRemoveComponent);
    return DialogRemoveComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngClass.lt-md=\"mt-50\" ngClass.gt-sm=\"mt-100\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <mat-card ngClass.lt-sm=\"width-300\" ngClass.gt-sm=\"width-500\">\n    <h1 fxLayoutAlign=\"center center\" >The Most Advanced</h1>\n    <h3 fxLayoutAlign=\"center center\" >NG Front End Framework to Date</h3>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(util) {
        this.util = util;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/partials/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{\n  background-color:var(--footer)\n}\n\n.footer1{\n  padding: 30px;\n  margin-top:30px\n}\n\n.footer2{\n  background-color:var(--footer2);\n  color:white;\n  padding:10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/partials/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <!--the links will only display when the user is logged out. can be changed easily by editing ngIf statement-->\n  <div *ngIf=\"!user\" fxLayoutAlign=\"space-around center\" class=\"footer1\" >\n    <div fxLayout=\"column\" *ngFor=\"let link_groups of footer_links\">\n      <div fxLayout=\"column\">\n        <h3 style=\"padding-bottom: 10px;\">{{link_groups.header}}</h3>\n      </div>\n      <div *ngFor=\"let link of link_groups.links\">\n        <div><h5><a routerLink=\"{{link.route}}\">{{link.name}}</a></h5></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer2\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    &copy; {{date}}<a style=\"color:white\" routerLink=\"/home\">&nbsp;{{env.app_first}}<span>&nbsp;{{env.app_second}}</span></a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/partials/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_util_helper__ = __webpack_require__("../../../../../src/app/helpers/util.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
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
        this.date = new Date().getFullYear();
        // Refers to interface in case footer links are specialized for each user
        // this is all hard coded data. can be pulled from a db/user specific
        this.footer_links = [
            {
                header: 'Products',
                links: [
                    { name: 'Software', route: 'home' },
                    { name: 'Hardware', route: 'login' },
                    { name: 'Robots', route: 'home' }
                ]
            },
            {
                header: 'Contact',
                links: [
                    { name: 'Email', route: 'home' },
                    { name: 'Call', route: 'login' },
                    { name: 'Locations', route: 'user/update' }
                ]
            },
            {
                header: 'About',
                links: [
                    { name: 'Our Mission', route: 'home' },
                    { name: 'Our Story', route: 'login' },
                    { name: 'Our People', route: 'home' }
                ]
            }
        ];
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */].Auth();
        this.env = __WEBPACK_IMPORTED_MODULE_1__helpers_util_helper__["a" /* Util */].env;
        __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */].on(['auth', 'saveApi'], function (auth_state) {
            console.log('the user has:', auth_state);
            _this.user = __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */].Auth();
            // we can dynamically make the view check on cvertain events. For large apps this is very efficient
        });
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/partials/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/partials/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/partials/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill-remaining-space {\n  /*This fills the remaining space, by using flexbox.\n Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.nav-button{\n  color:white;\n}\n\n.nav-menu-item{\n  font-family: 'Raleway', sans-serif;\n  font-weight: 300;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/partials/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z3\">\n\n  <button mat-button routerLink=\"/\">\n    <mat-icon>home</mat-icon>\n    {{env.app_name}}\n  </button>\n\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"fill-remaining-space\"></span>\n  <div *ngIf=\"user\" fxShow=\"false\" fxShow.gt-sm>Hi {{user.full_name}}!</div>\n\n  <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\n    <div *ngIf=\"user\">\n        <button *ngFor=\"let link of nav_links_user\" class=\"nav-button\" mat-button routerLink=\"{{link.route}}\">{{link.name}}</button>\n      <button class=\"nav-button\" mat-button (click)=\"onLogout()\">Logout</button>\n    </div>\n    <div *ngIf=\"!user\">\n      <button *ngFor=\"let link of nav_links_no_user\" class=\"nav-button\" mat-button routerLink=\"{{link.route}}\">{{link.name}}</button>\n    </div>\n\n  </div>\n  <button mat-button [mat-menu-trigger-for]=\"rootMenu\" fxHide=\"false\" fxHide.gt-sm>\n    <mat-icon>menu</mat-icon>\n  </button>\n\n</mat-toolbar>\n<mat-menu yPosition=\"below\" #rootMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <div *ngIf=\"user\">\n    <h3 class=\"nav-menu-item\" style=\"padding: 15px;\">Hi {{user.full_name}}!</h3>\n    <button *ngFor=\"let link of nav_links_user\" class=\"nav-menu-item\" mat-menu-item routerLink=\"{{link.route}}\">{{link.name}}</button>\n    <mat-divider></mat-divider>\n    <button class=\"nav-menu-item\" mat-menu-item (click)=\"onLogout()\">Logout</button>\n  </div>\n\n  <div *ngIf=\"!user\">\n    <button *ngFor=\"let link of nav_links_no_user\" class=\"nav-menu-item\" mat-menu-item routerLink=\"{{link.route}}\">{{link.name}}</button>\n  </div>\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/app/components/partials/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_util_helper__ = __webpack_require__("../../../../../src/app/helpers/util.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(cd) {
        this.cd = cd;
        this.nav_links_user = [
            { route: 'user/update', name: 'Profile' },
            { route: 'company/create', name: 'Create Company' },
            { route: 'company/list', name: 'My Companies' }
        ];
        this.nav_links_no_user = [
            { route: 'home', name: 'Home' },
            { route: 'login', name: 'Login/Register' }
        ];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */].Auth();
        this.env = __WEBPACK_IMPORTED_MODULE_1__helpers_util_helper__["a" /* Util */].env;
        // I am intentionally over complicating this here to show how useful this can become in a large app
        __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */].on(['auth', 'saveApi'], function (auth_state) {
            console.log('the user has:', auth_state);
            _this.user = __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */].Auth();
            // we can dynamically make the view check on certain events. For large apps this is very efficient
            _this.cd.markForCheck(); // this makes the view check for updates once
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */].Auth())
            this.user.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/partials/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/partials/navbar/navbar.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngClass.lt-md=\"mt-50\" ngClass.gt-sm=\"mt-100\" fxLayout=\"row\" fxLayoutAlign=\"center space-around\" style=\"margin-bottom: 50px;\">\n  <mat-card ngClass.lt-md=\"width-300\" ngClass.gt-sm=\"width-500\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"mat-display-1\">Update Profile Information</div>\n    <form (ngSubmit)=\"onSubmit()\"  [formGroup]=\"profileForm\">\n\n      <mat-form-field class=\"full-width\">\n        <input formControlName=\"email\" [(ngModel)]=\"user.email\" matInput placeholder=\"Email\" name=\"email\">\n        <!--<mat-hint>Errors appear instantly!</mat-hint>-->\n        <mat-error>{{getInputErrorMessage('email')}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width\">\n        <input formControlName=\"phone\" [(ngModel)]=\"user.phone\" matInput placeholder=\"Phone Number\" name=\"phone\">\n        <!--<mat-hint>Errors appear instantly!</mat-hint>-->\n        <mat-error>{{getInputErrorMessage('phone')}}</mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width\">\n        <input formControlName=\"first\" [(ngModel)]=\"user.first\" matInput placeholder=\"First Name\" name=\"first\">\n        <!--<mat-hint>Errors appear instantly!</mat-hint>-->\n        <!--<mat-error>{{getInputErrorMessage('phone')}}</mat-error>-->\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width\">\n        <input formControlName=\"last\" [(ngModel)]=\"user.last\" matInput placeholder=\"Last Name\" name=\"last\">\n        <!--<mat-hint>Errors appear instantly!</mat-hint>-->\n        <!--<mat-error>{{getInputErrorMessage('phone')}}</mat-error>-->\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width\">\n        <input formControlName=\"full_name\" [(ngModel)]=\"user.full_name\" matInput placeholder=\"Full Name\" name=\"full\">\n        <!--<mat-hint>Errors appear instantly!</mat-hint>-->\n        <!--<mat-error>{{getInputErrorMessage('phone')}}</mat-error>-->\n      </mat-form-field>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" >\n        <button mat-raised-button [disabled]=\"!profileForm.valid\">Save</button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__ = __webpack_require__("../../../../../src/app/helpers/util.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(snackBar) {
        this.snackBar = snackBar;
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []),
            first: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []),
            last: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []),
            full_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', []),
        });
    }
    ProfileComponent.prototype.getInputErrorMessage = function (input_name) {
        var err_message = '';
        if (this.profileForm.get(input_name).hasError('required'))
            err_message = 'You must enter an Email or Phone number.';
        if (this.profileForm.get(input_name).hasError('custom')) {
            err_message = this.profileForm.get(input_name).getError('custom');
        }
        return err_message;
    };
    ProfileComponent.prototype.throwInputError = function (input_name, message) {
        this.profileForm.get(input_name).setErrors({ custom: message });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */].Auth();
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */].Auth())
            this.user.reload(); //makes sure if values arent saved other components arent updated
    };
    ProfileComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err, res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* Util */].to(this.user.saveAPI())];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        if (err) {
                            if (err.message.includes('phone') || err.message.includes('Phone')) {
                                this.throwInputError('phone', err.message);
                            }
                            if (err.message.includes('email') || err.message.includes('Email')) {
                                this.throwInputError('email', err.message);
                            }
                            if (err.message == 'Nothing Updated')
                                this.snackBar.open('User', 'Nothing to Update', { duration: 2000 });
                            return [2 /*return*/];
                        }
                        this.snackBar.open('User', 'Successfully Updated', { duration: 2000 });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatSnackBar */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/api.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__ = __webpack_require__("../../../../../src/app/helpers/util.helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiGuard = /** @class */ (function () {
    function ApiGuard() {
    }
    ApiGuard.prototype.canActivate = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */].Auth()) {
            return true;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__helpers_util_helper__["a" /* Util */].route('/home');
            return false;
        }
    };
    ApiGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ApiGuard);
    return ApiGuard;
}());



/***/ }),

/***/ "../../../../../src/app/helpers/api.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_helper__ = __webpack_require__("../../../../../src/app/helpers/util.helper.ts");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var API = /** @class */ (function () {
    function API() {
    }
    //************************************
    //********* STATIC METHODS ***********
    //************************************
    API.save = function (model, uri, update_data) {
        return __awaiter(this, void 0, void 0, function () {
            var err, res, differences, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!update_data) {
                            differences = model.instanceDifference();
                            if (__WEBPACK_IMPORTED_MODULE_0_underscore__["isEmpty"](differences))
                                __WEBPACK_IMPORTED_MODULE_1__util_helper__["a" /* Util */].TE('Nothing Updated');
                            update_data = __WEBPACK_IMPORTED_MODULE_0_underscore__["pick"](differences, function (value, key, object) { return model.apiUpdateValues.includes(key); });
                            if (__WEBPACK_IMPORTED_MODULE_0_underscore__["isEmpty"](update_data))
                                __WEBPACK_IMPORTED_MODULE_1__util_helper__["a" /* Util */].TE('Nothing Updated');
                        }
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__util_helper__["a" /* Util */].to(__WEBPACK_IMPORTED_MODULE_1__util_helper__["a" /* Util */].put(uri, update_data))];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        if (err)
                            __WEBPACK_IMPORTED_MODULE_1__util_helper__["a" /* Util */].TE(err, true);
                        if (!res.success)
                            __WEBPACK_IMPORTED_MODULE_1__util_helper__["a" /* Util */].TE(res.error, true);
                        model.emit('saveApi', update_data, true);
                        model.save();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    API.remove = function (model, uri) {
        return __awaiter(this, void 0, void 0, function () {
            var err, res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__util_helper__["a" /* Util */].to(__WEBPACK_IMPORTED_MODULE_1__util_helper__["a" /* Util */].delete(uri))];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        if (err)
                            __WEBPACK_IMPORTED_MODULE_1__util_helper__["a" /* Util */].TE(err, true);
                        model.emit('removeApi', {}, true);
                        model.remove();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return API;
}());



/***/ }),

/***/ "../../../../../src/app/helpers/env.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Env; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var Env = /** @class */ (function () {
    function Env() {
    }
    Object.defineProperty(Env, "app_first", {
        //************************************
        //********* STATIC METHODS ***********
        //************************************
        get: function () {
            return this.app_name.split(' ')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Env, "app_second", {
        get: function () {
            var name = '';
            if (this.app_name.split(' ').length > 1) {
                name = this.app_name.split(' ').slice(1).join(' ');
            }
            return name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Env, "app_name", {
        get: function () {
            if (!this._app_name) {
                this.app_name = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].app_name;
            }
            return this._app_name;
        },
        set: function (name) {
            this._app_name = name;
            this._app_first = name.split(' ')[0];
            if (name.split(' ').length > 1) {
                this._app_second = name.split(' ').slice(1).join(' ');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Env;
}());



/***/ }),

/***/ "../../../../../src/app/helpers/util.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse_error__ = __webpack_require__("../../../../parse-error/lib/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__env_helper__ = __webpack_require__("../../../../../src/app/helpers/env.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dialogs_dialog_default_dialog_default_component__ = __webpack_require__("../../../../../src/app/components/dialogs/dialog-default/dialog-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dialogs_dialog_remove_dialog_remove_component__ = __webpack_require__("../../../../../src/app/components/dialogs/dialog-remove/dialog-remove.component.ts");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// import { FacebookService, InitParams, LoginOptions } from 'ngx-facebook';





var Util = /** @class */ (function () {
    function Util() {
    }
    Object.defineProperty(Util, "router", {
        //************************************
        //********* Dependencies *************
        //************************************
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Util, "http", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Util, "dialog", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatDialog */]);
        },
        enumerable: true,
        configurable: true
    });
    //************************************
    Util.openDefaultDialog = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var dialog;
            return __generator(this, function (_a) {
                if (!config)
                    config = { width: '250px', height: '250px', data: { title: 'title test', body: 'Are you sure you want to delete this?' } };
                dialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__components_dialogs_dialog_default_dialog_default_component__["a" /* DialogDefaultComponent */], config);
                return [2 /*return*/, new Promise(function (resolve) {
                        dialog.afterClosed().subscribe(function (result) {
                            console.log('The dialog was closed', result);
                            resolve();
                        });
                    })
                    // dialog.afterClosed().subscribe(result => {
                    //   console.log('The dialog was closed');
                    // });
                ];
            });
        });
    };
    Util.openRemoveDialog = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var nconfig, dialog;
            return __generator(this, function (_a) {
                nconfig = {};
                nconfig['width'] = (!config || !config.width) ? '250px' : config.width;
                nconfig['height'] = (!config || !config.height) ? '250px' : config.height;
                nconfig['data'] = (!config || !config.data) ? { 'title': 'Warning', 'body': 'Are you sure you want to delete this?' } : config.data;
                dialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__components_dialogs_dialog_remove_dialog_remove_component__["a" /* DialogRemoveComponent */], nconfig);
                return [2 /*return*/, new Promise(function (resolve) {
                        dialog.afterClosed().subscribe(function (result) {
                            resolve(result);
                        });
                    })];
            });
        });
    };
    Object.defineProperty(Util, "env", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_6__env_helper__["a" /* Env */];
        },
        enumerable: true,
        configurable: true
    });
    Util.getUrlParams = function (aroute) {
        return new Promise(function (resolve) {
            aroute.params.subscribe(function (params) { return resolve(params); });
        });
    };
    Util.to = function (promise, parse) {
        return promise.then(function (data) {
            return [null, data];
        }).catch(function (err) {
            if (parse === false)
                return [err];
            return [__WEBPACK_IMPORTED_MODULE_1_parse_error__(err)];
        });
    };
    Util.route = function (uri) {
        this.router.navigate([uri]);
    };
    Util.getApiUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
    };
    Util.apiHeaders = function (headers) {
        headers.append('Content-Type', 'application/json');
        var user = __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */].Auth();
        if (user) {
            var token = user.token;
            headers.append('Authorization', token);
        }
        return headers;
    };
    Util.responder = function (err, res) {
        var send;
        if (err)
            send = err;
        if (res)
            send = res;
        return JSON.parse(send._body);
    };
    Util.post = function (url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, err, res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        if (url[0] == '/') {
                            url = this.getApiUrl() + url;
                            headers = this.apiHeaders(headers);
                        }
                        return [4 /*yield*/, this.to(this.http.post(url, data, { headers: headers }).toPromise(), false)];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        return [2 /*return*/, this.responder(err, res)];
                }
            });
        });
    };
    Util.put = function (url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, err, res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        if (url[0] == '/') {
                            url = this.getApiUrl() + url;
                            headers = this.apiHeaders(headers);
                        }
                        return [4 /*yield*/, this.to(this.http.put(url, data, { headers: headers }).toPromise(), false)];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        return [2 /*return*/, this.responder(err, res)];
                }
            });
        });
    };
    Util.patch = function (url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, err, res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        if (url[0] == '/') {
                            url = this.getApiUrl() + url;
                            headers = this.apiHeaders(headers);
                        }
                        return [4 /*yield*/, this.to(this.http.patch(url, data, { headers: headers }).toPromise(), false)];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        return [2 /*return*/, this.responder(err, res)];
                }
            });
        });
    };
    Util.delete = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, err, res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        if (url[0] == '/') {
                            url = this.getApiUrl() + url;
                            headers = this.apiHeaders(headers);
                        }
                        return [4 /*yield*/, this.to(this.http.delete(url, { headers: headers }).toPromise(), false)];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        return [2 /*return*/, this.responder(err, res)];
                }
            });
        });
    };
    Util.get = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, err, res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        if (url[0] == '/') {
                            url = this.getApiUrl() + url;
                            headers = this.apiHeaders(headers);
                        }
                        return [4 /*yield*/, this.to(this.http.get(url, { headers: headers }).toPromise(), false)];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        return [2 /*return*/, this.responder(err, res)];
                }
            });
        });
    };
    Util.capFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    Util.TE = function (err_message, log) {
        if (log === true) {
            console.error(err_message);
        }
        throw new Error(err_message);
    };
    return Util;
}());



/***/ }),

/***/ "../../../../../src/app/models/company.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_browser_model__ = __webpack_require__("../../../../browser-model/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_browser_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_browser_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_api_helper__ = __webpack_require__("../../../../../src/app/helpers/api.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__ = __webpack_require__("../../../../../src/app/helpers/util.helper.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// import { Model }            from './model';



var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(obj) {
        var _this = _super.call(this, obj) || this;
        _this.apiUpdateValues = ['name']; //these are the values that will be sent to the API
        return _this;
    }
    Company.prototype.Users = function () {
        return this.belongsToMany(__WEBPACK_IMPORTED_MODULE_1__user_model__["a" /* User */], 'users.user', 'id', true);
    };
    Company.prototype.to = function (action) {
        return __WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* Util */].route('/company/' + action + '/' + this.id);
    };
    Company.prototype.saveAPI = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_2__helpers_api_helper__["a" /* API */].save(this, '/v1/companies/' + this.id)];
            });
        });
    };
    Company.prototype.removeAPI = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_2__helpers_api_helper__["a" /* API */].remove(this, '/v1/companies/' + this.id)];
            });
        });
    };
    //Static
    Company.to = function (action) {
        return __WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* Util */].route('/company/' + action);
    };
    Company.getAllAuthCompanies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err, res, companies, i, company_info, company, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* Util */].to(__WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* Util */].get('/v1/companies'))];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        if (err)
                            __WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* Util */].TE(err.message, true);
                        if (!res.success)
                            __WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* Util */].TE(res.error, true);
                        companies = [];
                        for (i in res.companies) {
                            company_info = res.companies[i];
                            company = this.resCreate(company_info);
                            companies.push(company);
                        }
                        return [2 /*return*/, companies];
                }
            });
        });
    };
    Company.resCreate = function (res_company) {
        var company = this.findById(res_company.id);
        if (company)
            return company;
        var company_info = res_company;
        company_info.id = res_company.id;
        company_info.users = res_company.users;
        company = this.create(company_info);
        return company;
    };
    Company.CreateAPI = function (companyInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var err, res, company, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* Util */].to(__WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* Util */].post('/v1/companies', companyInfo))];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        if (err)
                            __WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* Util */].TE(err.message, true);
                        if (!res.success)
                            __WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* Util */].TE(res.error, true);
                        company = this.resCreate(res.company);
                        company.emit(['newly-created'], companyInfo, true);
                        return [2 /*return*/, company];
                }
            });
        });
    };
    Company.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var company, err, res, company_info, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        company = this.findById(id);
                        if (company)
                            return [2 /*return*/, company];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* Util */].to(__WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* Util */].get('/v1/companies/' + id))];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        if (err)
                            __WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* Util */].TE(err.message, true);
                        if (!res.success)
                            __WEBPACK_IMPORTED_MODULE_3__helpers_util_helper__["a" /* Util */].TE(res.error, true);
                        company_info = res.company;
                        company = this.resCreate(res.company);
                        return [2 /*return*/, company];
                }
            });
        });
    };
    Company.SCHEMA = {
        id: { type: 'string', primary: true },
        name: { type: 'string' },
        test: { name: { type: 'string' } },
        users: [{ user: { type: 'string' }, permissions: [{ type: 'string' }] }],
    };
    return Company;
}(__WEBPACK_IMPORTED_MODULE_0_browser_model__["Model"]));



/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_browser_model__ = __webpack_require__("../../../../browser-model/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_browser_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_browser_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_model__ = __webpack_require__("../../../../../src/app/models/company.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_api_helper__ = __webpack_require__("../../../../../src/app/helpers/api.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_util_helper__ = __webpack_require__("../../../../../src/app/helpers/util.helper.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(obj) {
        var _this = _super.call(this, obj) || this;
        _this.apiUpdateValues = ['email', 'phone', 'first', 'last']; //these are the values that will be sent to the API
        return _this;
    }
    Object.defineProperty(User.prototype, "full_name", {
        get: function () {
            var full_name = '';
            if (this.first)
                full_name = "" + this.first;
            if (this.last)
                full_name = full_name + " " + this.last;
            return full_name;
        },
        set: function (name) {
            if (name) {
                var split = name.split(' ');
                this.first = split[0];
                if (split[1])
                    this.last = split[1];
            }
            else {
                this.first = '';
                this.last = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.logout = function () {
        this.remove();
        localStorage.clear(); //remove all data in storage
        __WEBPACK_IMPORTED_MODULE_4__helpers_util_helper__["a" /* Util */].route('/home');
        this.emit(['logout', 'auth'], 'logout', true);
    };
    User.prototype.saveAPI = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_3__helpers_api_helper__["a" /* API */].save(this, '/v1/users')];
            });
        });
    };
    User.prototype.Companies = function () {
        return this.belongsToMany(__WEBPACK_IMPORTED_MODULE_1__company_model__["a" /* Company */], 'users.user', 'id');
    };
    User.prototype.to = function (action) {
        return __WEBPACK_IMPORTED_MODULE_4__helpers_util_helper__["a" /* Util */].route('/user/' + action);
    };
    User.prototype.parseToken = function () {
        return __WEBPACK_IMPORTED_MODULE_2_jwt_decode__(this.token);
    };
    Object.defineProperty(User, "fb", {
        //************************************
        //********* STATIC METHODS ***********
        //************************************
        get: function () {
            // return Util.fb;
            return {};
        },
        enumerable: true,
        configurable: true
    });
    User.Auth = function () {
        var user = this.findOne({ auth: true });
        if (user) {
            var parse = user.parseToken();
            var cur_time_date = new Date();
            var cur_time = cur_time_date.getTime() / 1000;
            if (cur_time >= parse.exp) {
                user.logout();
                return null;
            }
        }
        return user;
    };
    User.Login = function (info) {
        var user_info = info.user;
        user_info.auth = true;
        user_info.token = info.token;
        var user = User.create(user_info);
        user.emit(['login', 'auth'], 'login', true);
        return user;
    };
    User.LoginReg = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var res, err, login_info, user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helpers_util_helper__["a" /* Util */].to(__WEBPACK_IMPORTED_MODULE_4__helpers_util_helper__["a" /* Util */].post('/v1/users/login', data))];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        if (err)
                            __WEBPACK_IMPORTED_MODULE_4__helpers_util_helper__["a" /* Util */].TE(err, true);
                        if (!res.success)
                            __WEBPACK_IMPORTED_MODULE_4__helpers_util_helper__["a" /* Util */].TE(res.error, true);
                        login_info = {
                            token: res.token,
                            user: res.user,
                        };
                        user = this.Login(login_info);
                        return [2 /*return*/, user];
                }
            });
        });
    };
    User.CreateAccount = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var err, res, login_info, user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4__helpers_util_helper__["a" /* Util */].to(__WEBPACK_IMPORTED_MODULE_4__helpers_util_helper__["a" /* Util */].post('/v1/users', data))];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        if (err)
                            __WEBPACK_IMPORTED_MODULE_4__helpers_util_helper__["a" /* Util */].TE(err, true);
                        if (!res.success)
                            __WEBPACK_IMPORTED_MODULE_4__helpers_util_helper__["a" /* Util */].TE(res.error, true);
                        login_info = {
                            token: res.token,
                            user: res.user,
                        };
                        user = this.Login(login_info);
                        return [2 /*return*/, user];
                }
            });
        });
    };
    User.SCHEMA = {
        id: { type: 'string', primary: true },
        first: { type: 'string' },
        last: { type: 'string' },
        email: { type: 'string' },
        phone: { type: 'string' },
        auth: { type: 'boolean' },
        token: { type: 'string' },
    };
    return User;
}(__WEBPACK_IMPORTED_MODULE_0_browser_model__["Model"]));



/***/ }),

/***/ "../../../../../src/app/services/util.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
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

var UtilService = /** @class */ (function () {
    function UtilService() {
        // this.env = this.envService;
        // let initParams: InitParams = {
        //   appId: this.env.facebook_app_id,
        //   xfbml: true,
        //   version: 'v2.8'
        // };
        // this.fb.init(initParams);
    }
    UtilService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UtilService);
    return UtilService;
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
    production: false,
    apiUrl: 'http://127.0.0.1:3000',
    facebook_app_id: '1234567890',
    app_name: 'Website DevName',
    url: 'http://localhost:1515',
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["b" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map