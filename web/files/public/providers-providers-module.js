(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["providers-providers-module"],{

/***/ "./src/app/providers/create/create.component.html":
/*!********************************************************!*\
  !*** ./src/app/providers/create/create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel py-5 px-5\">\n  <form class=\"form-auth border rounded border-primary px-2 py-2\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-sm-9\">\n        <label for=\"authorized\">\n          <h3>Cadastrar Fornecedor</h3>\n        </label>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-sm-9\">\n        <label for=\"name\">Nome</label>\n        <input type=\"text\" id=\"name\" class=\"form-control\" ngModel #name=\"ngModel\" \n         name=\"name\" placeholder=\"Nome\" minlength=\"5\" maxlength=\"40\" required/>\n      </div>\n    </div>\n    <div class=\"row justify-content-center py-1\">\n      <div class=\"col-sm-9\">\n        <label for=\"cnpj\">CNPJ</label>\n        <input type=\"text\" id=\"cnpj\" class=\"form-control\" ngModel #cnpj=\"ngModel\"\n         name=\"cnpj\" placeholder=\"CNPJ\" minlength=\"10\" maxlength=\"40\" required/>\n      </div>\n    </div>\n    <div class=\"row justify-content-center py-3\">\n      <div class=\"text-center\">\n        <button type=\"submit\" [disabled]=\"!f.form.valid\" class=\"btn btn-success btn-lg\" id=\"cadastrar\"\n          name=\"cadastrar\">Cadastrar</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/providers/create/create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/providers/create/create.component.ts ***!
  \******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_providers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/providers.service */ "./src/app/services/providers.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var CreateComponent = /** @class */ (function () {
    function CreateComponent(service) {
        this.service = service;
        this.splash = true;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.submitted = false;
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.onSubmit = function (f) {
        this.submitted = true;
        if (f.invalid) {
            return;
        }
        console.log(f.form.value.name);
        this.service.create(f.form.value.name, f.form.value.cnpj)
            .subscribe();
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/providers/create/create.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_providers_service__WEBPACK_IMPORTED_MODULE_2__["ProvidersService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/providers/detail/detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/providers/detail/detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"provider$ | async as response; else loadingError\">\n  <div *ngIf=\"response.success; else paramError\">\n    <span>Nome: {{ response.provider.name }}</span>\n  </div>\n\n  <ng-template #paramError>\n    <app-param-error></app-param-error>\n  </ng-template>\n\n</div>\n\n<ng-template #loading>\n  <app-loading></app-loading>\n</ng-template>\n\n<ng-template #loadingError>\n  <div *ngIf=\"error$ | async; else loading\" class=\"card mt-3 border-0\">\n    <app-server-error></app-server-error>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/providers/detail/detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/providers/detail/detail.component.ts ***!
  \******************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_providers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/providers.service */ "./src/app/services/providers.service.ts");






var DetailComponent = /** @class */ (function () {
    function DetailComponent(router, service) {
        this.router = router;
        this.service = service;
        this.splash = true;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.control = this.router.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.provider$ = _this.service.listOne(_this.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                _this.error$.next(true);
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }));
        });
    };
    DetailComponent.prototype.ngOnDestroy = function () {
        this.control.unsubscribe();
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/providers/detail/detail.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_providers_service__WEBPACK_IMPORTED_MODULE_5__["ProvidersService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/providers/list/list.component.html":
/*!****************************************************!*\
  !*** ./src/app/providers/list/list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3 border-0\">\n  <div class=\"card-header border-0 bg-white\">\n    <div class=\"float-left\">\n      <h4>Fornecedores</h4>\n    </div>\n    <div class=\"float-right\">\n      <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['novo']\">Cadastrar</button>\n\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"onRefresh()\">Atualizar</button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"panel row\" *ngIf=\"providers$ | async as response; else loadingError\">\n      <table class=\"table table-hover\" *ngIf=\"response.success; else loading\">\n        <!--<thead>\n          <tr>\n            <th>Fornecedor</th>\n            <th></th>\n          </tr>\n        </thead>-->\n        <tbody>\n          <tr *ngFor=\"let provider of response.providers\">\n            <td class=\"border-0\"><a [routerLink]=\"[ '/providers', provider.id ]\">{{ provider.name }}</a></td>\n            <td class=\"border-0\">\n              <span class=\"float-right\">\n                <button class=\"btn btn-warning mb-1 btn-sm\">\n                  Atualizar\n                </button>\n\n                <button class=\"btn btn-danger mb-1 btn-sm\">\n                  Remover\n                </button>\n              </span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <ng-template #loading>\n      <app-loading></app-loading>\n    </ng-template>\n\n    <ng-template #loadingError>\n      <div *ngIf=\"error$ | async; else loading\" class=\"card mt-3 border-0\">\n        <app-server-error></app-server-error>\n      </div>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/providers/list/list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/list/list.component.ts ***!
  \**************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_providers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/providers.service */ "./src/app/services/providers.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ListComponent = /** @class */ (function () {
    function ListComponent(service) {
        this.service = service;
        this.splash = true;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ListComponent.prototype.ngOnInit = function () {
        this.onRefresh();
    };
    ListComponent.prototype.onRefresh = function () {
        var _this = this;
        this.providers$ = this.service.listAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.error$.next(true);
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }));
    };
    ListComponent.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () { return _this.splash = false; }, 4000);
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/providers/list/list.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_providers_service__WEBPACK_IMPORTED_MODULE_3__["ProvidersService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/providers/providers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/providers/providers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ProvidersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersRoutingModule", function() { return ProvidersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/providers/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/providers/detail/detail.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "./src/app/providers/create/create.component.ts");






var routes = [
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: 'novo', component: _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"] },
    { path: ':id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"] }
];
var ProvidersRoutingModule = /** @class */ (function () {
    function ProvidersRoutingModule() {
    }
    ProvidersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProvidersRoutingModule);
    return ProvidersRoutingModule;
}());



/***/ }),

/***/ "./src/app/providers/providers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/providers.module.ts ***!
  \***********************************************/
/*! exports provided: ProvidersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersModule", function() { return ProvidersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _providers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers-routing.module */ "./src/app/providers/providers-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/providers/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/providers/detail/detail.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create/create.component */ "./src/app/providers/create/create.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _layout_param_error_param_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/param-error/param-error.component */ "./src/app/layout/param-error/param-error.component.ts");
/* harmony import */ var _layout_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/server-error/server-error.component */ "./src/app/layout/server-error/server-error.component.ts");











var ProvidersModule = /** @class */ (function () {
    function ProvidersModule() {
    }
    ProvidersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"]],
            entryComponents: [
                _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"],
                _layout_param_error_param_error_component__WEBPACK_IMPORTED_MODULE_9__["ParamErrorComponent"],
                _layout_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_10__["ServerErrorComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _providers_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProvidersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"]
            ]
        })
    ], ProvidersModule);
    return ProvidersModule;
}());



/***/ }),

/***/ "./src/app/services/providers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/providers.service.ts ***!
  \***********************************************/
/*! exports provided: ProvidersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersService", function() { return ProvidersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ProvidersService = /** @class */ (function () {
    function ProvidersService(http, router) {
        this.http = http;
        this.router = router;
        this.RESOURCE = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "/providers";
    }
    ProvidersService.prototype.listAll = function () {
        return this.http.get(this.RESOURCE);
    };
    ProvidersService.prototype.listOne = function (id) {
        return this.http.get(this.RESOURCE + '/' + id);
    };
    ProvidersService.prototype.create = function (name, cnpj) {
        var _this = this;
        return this.http.post(this.RESOURCE + '/', { name: name, cnpj: cnpj }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (success) {
            if (success) {
                _this.router.navigate(['/providers']);
            }
        }));
    };
    ProvidersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ProvidersService);
    return ProvidersService;
}());



/***/ })

}]);
//# sourceMappingURL=providers-providers-module.js.map