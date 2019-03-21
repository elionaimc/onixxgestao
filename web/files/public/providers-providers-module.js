(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["providers-providers-module"],{

/***/ "./src/app/providers/create/create.component.html":
/*!********************************************************!*\
  !*** ./src/app/providers/create/create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert my-0\" role=\"alert\">\n  <div class=\"modal-header border-bottom border-light\">\n    <h4 class=\"modal-title\">Cadastrar Fornecedor</h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form class=\"form-auth\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n  <div class=\"modal-body\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-sm-12\">\n          <label for=\"razaoSocial\">Razão Social</label>\n          <input type=\"text\" class=\"form-control\" ngModel #socialName=\"ngModel\" name=\"socialName\"\n            placeholder=\"Ex: Indústrias Acme LTDA\" minlength=\"5\" maxlength=\"100\" required />\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-1\">\n        <div class=\"col-sm-12\">\n          <label for=\"CNPJ\">CNPJ</label>\n          <input type=\"text\" class=\"form-control\" ngModel #cnpj=\"ngModel\" name=\"cnpj\" placeholder=\"Ex: 000.000.000/0000-00\" minlength=\"10\"\n            maxlength=\"40\" required />\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-1\">\n        <div *ngIf=\"error\" class=\"alert alert-warning\">\n          <small>{{error}}</small>\n        </div>\n      </div>\n    <div class=\"row justify-content-center py-3\">\n      <div class=\"text-center\">\n        <button type=\"button\" class=\"btn btn-outline-success\" data-dismiss=\"modal\" (click)=\"onClose()\">Cancelar</button>\n        <button type=\"submit\" [disabled]=\"!f.form.valid\" class=\"btn btn-primary\" id=\"cadastrar\"\n          name=\"cadastrar\">Cadastrar</button>\n      </div>\n    </div>\n  </div>\n  </form>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");





var CreateComponent = /** @class */ (function () {
    function CreateComponent(providersService, bsModalRef, router, route) {
        this.providersService = providersService;
        this.bsModalRef = bsModalRef;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    CreateComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.submitted = true;
        if (f.invalid) {
            return;
        }
        this.provider = {
            socialName: f.form.value.socialName,
            cnpj: f.form.value.cnpj,
            PrefectureId: this.currentUser['PrefectureId'],
            UserId: this.currentUser['id']
        };
        this.providersService.create(this.provider)
            .subscribe(function (success) {
            _this.bsModalRef.hide();
            _this.router.navigate(['/providers']);
        }, function (error) { return _this.error = error; });
    };
    CreateComponent.prototype.onClose = function () {
        this.bsModalRef.hide();
        this.router.navigate(['/providers']);
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/providers/create/create.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_providers_service__WEBPACK_IMPORTED_MODULE_2__["ProvidersService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = "<div class=\"card mt-3 border-0\">\n<div *ngIf=\"provider$ | async as response; else loadingError\">\n  <div *ngIf=\"response.success; else paramError\">\n    <div class=\"card\">\n      <div class=\"card-header bg-light\"\n        [ngClass]=\"{'text-danger': response.provider.isActive == false}\">\n          <h3>{{ response.provider.socialName }}</h3>\n      </div>\n      <div class=\"card-body\">\n        \n        <h5 class=\"card-subtitle mb-2 text-muted\">CNPJ: {{ response.provider.cnpj }}</h5>\n        <p class=\"card-text\">\n          <small>\n            Fornecedor cadastrado em {{ response.provider.createdAt | date: 'dd/MM/yyyy' }}\n            por {{ response.provider.User.name }}.\n          </small>\n        </p>\n        <a [routerLink]=\"[ '/providers']\" class=\"card-link\">Voltar</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #loading>\n  <app-loading></app-loading>\n</ng-template>\n\n<ng-template #loadingError>\n  <div *ngIf=\"error$ | async; else loading\" class=\"card mt-3 border-0\">\n    <app-param-error [message]=\"defaultMessage\" type=\"warning\"></app-param-error>\n  </div>\n</ng-template>\n</div>"

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
/* harmony import */ var src_app_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert-modal.service */ "./src/app/services/alert-modal.service.ts");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, router, providersService, alertService) {
        this.route = route;
        this.router = router;
        this.providersService = providersService;
        this.alertService = alertService;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.provider$ = _this.providersService.listOne(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                _this.alertService.showAlertDanger(error);
                _this.error$.next(true);
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                if (!data['success'] && data['message']) {
                    if (id != 'new') {
                        _this.alertService.showAlertWarning(data['message']);
                        _this.router.navigate(['/providers']);
                    }
                    return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
                }
            }));
        });
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/providers/detail/detail.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_providers_service__WEBPACK_IMPORTED_MODULE_5__["ProvidersService"],
            src_app_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__["AlertModalService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/providers/edit/edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/providers/edit/edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert my-0\" role=\"alert\">\n  <div class=\"modal-header border-bottom border-light\">\n    <h4 class=\"modal-title\">Editar Fornecedor</h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onCancel()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form class=\"form-auth\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <div class=\"card-body\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-sm-12\">\n          <label for=\"razaoSocial\">Razão Social</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"socialName\" name=\"razaoSocial\"\n            placeholder=\"Ex: Indústrias Acme LTDA\" minlength=\"5\" maxlength=\"100\" required />\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-1\">\n        <div class=\"col-sm-12\">\n          <label for=\"CNPJ\">CNPJ</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"cnpj\" name=\"CNPJ\"\n            placeholder=\"Ex: 000.000.000/0000-00\" minlength=\"5\" maxlength=\"100\" required />\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-1\">\n        <div *ngIf=\"error\" class=\"alert alert-warning\">\n          <small>{{error}}</small>\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-3\">\n        <div class=\"text-center\">\n          <button type=\"reset\" class=\"btn btn-outline-success\" (click)=\"onCancel()\">Cancelar</button>\n          <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary\" id=\"editar\"\n            name=\"editar\">Editar</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/providers/edit/edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/edit/edit.component.ts ***!
  \**************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_providers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/providers.service */ "./src/app/services/providers.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");





var EditComponent = /** @class */ (function () {
    function EditComponent(providersService, fb, bsModalRef) {
        this.providersService = providersService;
        this.fb = fb;
        this.bsModalRef = bsModalRef;
        this.submitted = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            id: [null],
            cnpj: [null],
            socialName: [null]
        });
        var provider$ = this.providersService.listOne(this.id);
        provider$.subscribe(function (data) { return _this.updateForm(data['provider']); });
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.providersService.edit({
            id: this.form.value.id,
            socialName: this.form.value.socialName,
            cnpj: this.form.value.cnpj
        }).subscribe(function (success) {
            _this.bsModalRef.hide();
        }, function (error) { return _this.error = "Erro ao editar fornecedor. Servidor retornou " + error; });
    };
    EditComponent.prototype.updateForm = function (provider) {
        this.form.patchValue({
            id: provider.id,
            socialName: provider.socialName,
            cnpj: provider.cnpj
        });
    };
    EditComponent.prototype.onCancel = function () {
        this.form.reset();
        this.bsModalRef.hide();
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/providers/edit/edit.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_providers_service__WEBPACK_IMPORTED_MODULE_2__["ProvidersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/providers/list/list.component.html":
/*!****************************************************!*\
  !*** ./src/app/providers/list/list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3 border-0\">\n  <div class=\"card-header border-0 bg-white\">\n    <div class=\"float-left\">\n      <h4>Fornecedores</h4>\n    </div>\n    <div class=\"float-right\">\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"create()\">\n        <fa-icon [icon]=\"faPlus\"></fa-icon> <span class=\"d-none d-lg-inline\">Cadastrar</span>\n      </button>\n      <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"onRefresh()\">\n        <fa-icon [icon]=\"faSync\"></fa-icon> <span class=\"d-none d-lg-inline\">Atualizar</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"panel row\" *ngIf=\"providers$ | async as response; else loadingError\">\n      <table class=\"table table-hover\" *ngIf=\"response.success; else paramError\">\n        <thead>\n          <tr>\n            <th class=\"border-0 bg-dark text-white\">Razão Social</th>\n            <th class=\"border-0 bg-dark text-white\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let provider of response.providers\">\n            <td class=\"border-bottom border-dark text-left\">\n              <a [routerLink]=\"[ '/providers', provider.id ]\" [ngClass]=\"{'text-secondary': !provider.isActive}\">\n                {{ provider.socialName }}\n              </a>\n            </td>\n            <td class=\"border-bottom border-dark\">\n              <span class=\"float-right\">\n                <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\n                  <button class=\"btn btn-outline-primary mb-1 btn-sm\" (click)=\"edit(provider.id)\">\n                    <fa-icon [icon]=\"faPencilAlt\"></fa-icon>\n                  </button>\n                  <button *ngIf=\"provider.isActive\" class=\"btn btn-success mb-1 btn-sm\"\n                  (click)=\"changeState(provider.id, provider.isActive)\">\n                    <fa-icon [icon]=\"faCheck\"></fa-icon>\n                  </button>\n                  <button *ngIf=\"!provider.isActive\" class=\"btn btn-outline-secondary mb-1 btn-sm\"\n                  (click)=\"changeState(provider.id, provider.isActive)\">\n                  <fa-icon [icon]=\"faCheck\"></fa-icon>\n                  </button>\n                </div>\n              </span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ng-template #paramError>\n      <app-param-error [message]=\"emptyMessage\"></app-param-error>\n    </ng-template>\n\n    <ng-template #loading>\n      <app-loading></app-loading>\n    </ng-template>\n\n    <ng-template #loadingError>\n      <div *ngIf=\"error$ | async; else loading\" class=\"card mt-3 border-0\">\n        <app-param-error message=\"Entre em contato com o administrador do sistema!\" type=\"danger\"></app-param-error>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"

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
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _services_alert_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/alert-modal.service */ "./src/app/services/alert-modal.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_providers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/providers.service */ "./src/app/services/providers.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create/create.component */ "./src/app/providers/create/create.component.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit/edit.component */ "./src/app/providers/edit/edit.component.ts");










var ListComponent = /** @class */ (function () {
    function ListComponent(providersService, alertService, modalService) {
        this.providersService = providersService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.emptyMessage = 'Não exitem fornecedores cadastrados!';
        this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPencilAlt"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCheck"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPlus"];
        this.faSync = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faSync"];
        this.modalOptions = {
            class: 'modal-lg'
        };
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onRefresh();
        this.modalService.onHide.subscribe(function () { return _this.onRefresh(); });
    };
    ListComponent.prototype.onRefresh = function () {
        var _this = this;
        this.providers$ = this.providersService.listAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertService.showAlertDanger(error);
            _this.error$.next(true);
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
        }));
    };
    ListComponent.prototype.create = function () {
        this.modalService.show(_create_create_component__WEBPACK_IMPORTED_MODULE_7__["CreateComponent"], this.modalOptions);
    };
    ListComponent.prototype.edit = function (id) {
        this.modalOptions['initialState'] = { id: id };
        this.modalService.show(_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"], this.modalOptions);
    };
    ListComponent.prototype.changeState = function (id, isActive) {
        var _this = this;
        this.providersService.edit({
            id: id,
            isActive: !isActive
        }).subscribe(function (success) { return _this.onRefresh(); }, function (error) { return _this.alertService.showAlertDanger("Erro ao editar fornecedor. Servidor retornou " + error); });
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/providers/list/list.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_providers_service__WEBPACK_IMPORTED_MODULE_5__["ProvidersService"],
            _services_alert_modal_service__WEBPACK_IMPORTED_MODULE_2__["AlertModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
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





var routes = [
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
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
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/providers/edit/edit.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");













var ProvidersModule = /** @class */ (function () {
    function ProvidersModule() {
    }
    ProvidersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"]],
            entryComponents: [
                _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"],
                _layout_param_error_param_error_component__WEBPACK_IMPORTED_MODULE_9__["ParamErrorComponent"],
                _layout_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_10__["ServerErrorComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _providers_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProvidersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"]
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





var ProvidersService = /** @class */ (function () {
    function ProvidersService(http) {
        this.http = http;
        this.RESOURCE = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "/providers/";
    }
    ProvidersService.prototype.listAll = function () {
        return this.http.get(this.RESOURCE);
    };
    ProvidersService.prototype.listOne = function (id) {
        return this.http.get("" + this.RESOURCE + id);
    };
    ProvidersService.prototype.create = function (provider) {
        return this.http.post(this.RESOURCE, provider).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    ProvidersService.prototype.edit = function (provider) {
        return this.http.put("" + this.RESOURCE + provider.id, provider).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    ProvidersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProvidersService);
    return ProvidersService;
}());



/***/ })

}]);
//# sourceMappingURL=providers-providers-module.js.map