(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["concierge-concierge-module"],{

/***/ "./src/app/concierge/concierge-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/concierge/concierge-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ConciergeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConciergeRoutingModule", function() { return ConciergeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/concierge/login/login.component.ts");




var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
var ConciergeRoutingModule = /** @class */ (function () {
    function ConciergeRoutingModule() {
    }
    ConciergeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ConciergeRoutingModule);
    return ConciergeRoutingModule;
}());



/***/ }),

/***/ "./src/app/concierge/concierge.module.ts":
/*!***********************************************!*\
  !*** ./src/app/concierge/concierge.module.ts ***!
  \***********************************************/
/*! exports provided: ConciergeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConciergeModule", function() { return ConciergeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _concierge_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./concierge-routing.module */ "./src/app/concierge/concierge-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/concierge/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");








var ConciergeModule = /** @class */ (function () {
    function ConciergeModule() {
    }
    ConciergeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _concierge_routing_module__WEBPACK_IMPORTED_MODULE_3__["ConciergeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot(),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
            ]
        })
    ], ConciergeModule);
    return ConciergeModule;
}());



/***/ }),

/***/ "./src/app/concierge/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/concierge/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n  <img class=\"mb-4\" src=\"/assets/img/onixx.png\" alt=\"Onixx Sistemas\" class=\"mx-auto d-block p-3\" />\n\n  <!-- Login form -->\n  <h4 class=\"h4 mb-3 font-weight-normal\">&nbsp;</h4>\n  <label for=\"email\" class=\"sr-only\">E-mail</label>\n  <input type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"E-mail\" required name=\"email\" ngModel\n    #email=\"ngModel\" email autofocus>\n\n  <label for=\"password\" class=\"sr-only\">Senha</label>\n  <input type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Senha\" minlength=\"5\" maxlength=\"40\" required\n    name=\"password\" ngModel #password=\"ngModel\" password>\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.form.valid\">\n    <fa-icon [icon]=\"faSignInAlt\"></fa-icon> Entrar\n  </button>\n  <alert [hidden]=\"email.valid || email.pristine\" type=\"warning\">\n    <small><strong>Erro: </strong>O email informado é inválido.</small>\n  </alert>\n  <alert [hidden]=\"password.valid || password.pristine\" type=\"warning\">\n    <small><strong>Erro: </strong>Senha muito curta.</small>\n  </alert>\n  <alert *ngIf=\"error\" type=\"warning\">\n    <small><strong>Erro: </strong>{{error}}</small>\n  </alert>\n  <!--#login-form end-->\n</form>"

/***/ }),

/***/ "./src/app/concierge/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/concierge/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.submitted = false;
        this.returnUrl = 'returnUrl';
        this.error = '';
        this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSignInAlt"];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams[this.returnUrl] || '/home';
    };
    LoginComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.submitted = true;
        if (f.invalid) {
            return null;
        }
        this.authenticationService.login(f.value.email, f.value.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (user) {
            if (typeof user === user) {
                _this.error = 'Nível de acesso não autorizado.';
            }
            else {
                _this.router.navigate([_this.returnUrl]);
            }
        }, function (error) {
            _this.error = 'Verifique as informações e tente novamente.';
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/concierge/login/login.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=concierge-concierge-module.js.map