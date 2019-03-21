(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./src/app/categories/categories-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function() { return CategoriesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/categories/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/categories/detail/detail.component.ts");





var routes = [
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: ':id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"] }
];
var CategoriesRoutingModule = /** @class */ (function () {
    function CategoriesRoutingModule() {
    }
    CategoriesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategoriesRoutingModule);
    return CategoriesRoutingModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/categories/categories-routing.module.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/categories/create/create.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/categories/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/categories/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/categories/edit/edit.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _layout_param_error_param_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layout/param-error/param-error.component */ "./src/app/layout/param-error/param-error.component.ts");
/* harmony import */ var _layout_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layout/server-error/server-error.component */ "./src/app/layout/server-error/server-error.component.ts");













var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]],
            entryComponents: [
                _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"],
                _layout_param_error_param_error_component__WEBPACK_IMPORTED_MODULE_11__["ParamErrorComponent"],
                _layout_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_12__["ServerErrorComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
            ]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());



/***/ }),

/***/ "./src/app/categories/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/categories/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert my-0\" role=\"alert\">\n  <div class=\"modal-header border-bottom border-light\">\n    <h4 class=\"modal-title\">Cadastrar Categoria</h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form class=\"form-auth\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n    <div class=\"modal-body\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-sm-12\">\n          <label for=\"description\">Descrição</label>\n          <input type=\"text\" class=\"form-control\" ngModel #description=\"ngModel\" name=\"description\"\n            placeholder=\"Ex: Pagamentos Diversos\" minlength=\"5\" maxlength=\"100\" required />\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-1\">\n        <div *ngIf=\"error\" class=\"alert alert-warning\">\n          <small>{{error}}</small>\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-3\">\n        <div class=\"text-center\">\n          <button type=\"button\" class=\"btn btn-outline-success\" data-dismiss=\"modal\" (click)=\"onClose()\">Cancelar</button>\n          <button type=\"submit\" [disabled]=\"!f.form.valid\" class=\"btn btn-primary\" id=\"cadastrar\"\n            name=\"cadastrar\">Cadastrar</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/categories/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/categories/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");





var CreateComponent = /** @class */ (function () {
    function CreateComponent(categoriesService, bsModalRef, router, route) {
        this.categoriesService = categoriesService;
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
        this.category = {
            description: f.form.value.description,
            PrefectureId: this.currentUser['PrefectureId'],
            UserId: this.currentUser['id']
        };
        this.categoriesService.create(this.category)
            .subscribe(function (success) {
            _this.bsModalRef.hide();
            _this.router.navigate(['/categories']);
        }, function (error) { return _this.error = error; });
    };
    CreateComponent.prototype.onClose = function () {
        this.bsModalRef.hide();
        this.router.navigate(['/categories']);
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/categories/create/create.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/categories/detail/detail.component.html":
/*!*********************************************************!*\
  !*** ./src/app/categories/detail/detail.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3 border-0\">\n  <div *ngIf=\"category$ | async as response; else loadingError\">\n    <div *ngIf=\"response.success; else paramError\">\n      <div class=\"card\">\n        <div class=\"card-header bg-light\" [ngClass]=\"{'text-danger': response.category.isActive == false}\">\n          <h3>{{ response.category.description }}</h3>\n        </div>\n        <div class=\"card-body\">\n          <p class=\"card-text\">\n            <small>\n              Categoria cadastrada em {{ response.category.createdAt | date: 'dd/MM/yyyy' }}\n              por {{ response.category.User.name }}.\n            </small>\n          </p>\n          <a [routerLink]=\"[ '/categories']\" class=\"card-link\">Voltar</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #loading>\n    <app-loading></app-loading>\n  </ng-template>\n\n  <ng-template #loadingError>\n    <div *ngIf=\"error$ | async; else loading\" class=\"card mt-3 border-0\">\n      <app-param-error [message]=\"defaultMessage\" type=\"warning\"></app-param-error>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/categories/detail/detail.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/categories/detail/detail.component.ts ***!
  \*******************************************************/
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
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var src_app_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert-modal.service */ "./src/app/services/alert-modal.service.ts");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, router, categoriesService, alertService) {
        this.route = route;
        this.router = router;
        this.categoriesService = categoriesService;
        this.alertService = alertService;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.category$ = _this.categoriesService.listOne(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                _this.alertService.showAlertDanger(error);
                _this.error$.next(true);
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                if (!data['success'] && data['message']) {
                    if (id != 'new') {
                        _this.alertService.showAlertWarning(data['message']);
                        _this.router.navigate(['/categories']);
                    }
                    return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
                }
            }));
        });
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/categories/detail/detail.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"],
            src_app_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__["AlertModalService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/categories/edit/edit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/categories/edit/edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert my-0\" role=\"alert\">\n  <div class=\"modal-header border-bottom border-light\">\n    <h4 class=\"modal-title\">Editar Categoria</h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onCancel()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form class=\"form-auth\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <div class=\"card-body\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-sm-12\">\n          <label for=\"description\">Descrição</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"description\" name=\"description\"\n            placeholder=\"Ex: Pagamento de Pessoal\" minlength=\"5\" maxlength=\"100\" required />\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-1\">\n        <div *ngIf=\"error\" class=\"alert alert-warning\">\n          <small>{{error}}</small>\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-3\">\n        <div class=\"text-center\">\n          <button type=\"reset\" class=\"btn btn-outline-success\" (click)=\"onCancel()\">Cancelar</button>\n          <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary\" id=\"editar\"\n            name=\"editar\">Editar</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/categories/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/categories/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");





var EditComponent = /** @class */ (function () {
    function EditComponent(categoriesService, fb, bsModalRef) {
        this.categoriesService = categoriesService;
        this.fb = fb;
        this.bsModalRef = bsModalRef;
        this.submitted = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            id: [null],
            description: [null]
        });
        var category$ = this.categoriesService.listOne(this.id);
        category$.subscribe(function (data) { return _this.updateForm(data['category']); });
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.categoriesService.edit({
            id: this.form.value.id,
            description: this.form.value.description
        }).subscribe(function (success) {
            _this.bsModalRef.hide();
        }, function (error) { return _this.error = "Erro ao editar categoria. Servidor retornou " + error; });
    };
    EditComponent.prototype.updateForm = function (category) {
        this.form.patchValue({
            id: category.id,
            description: category.description
        });
    };
    EditComponent.prototype.onCancel = function () {
        this.form.reset();
        this.bsModalRef.hide();
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/categories/edit/edit.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/categories/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/categories/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3 border-0\">\n  <div class=\"card-header border-0 bg-white\">\n    <div class=\"float-left\">\n      <h4>Categorias</h4>\n    </div>\n    <div class=\"float-right\">\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"create()\">\n        <fa-icon [icon]=\"faPlus\"></fa-icon> <span class=\"d-none d-lg-inline\">Cadastrar</span>\n      </button>\n      <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"onRefresh()\">\n        <fa-icon [icon]=\"faSync\"></fa-icon> <span class=\"d-none d-lg-inline\">Atualizar</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"panel row\" *ngIf=\"categories$ | async as response; else loadingError\">\n      <table class=\"table table-hover\" *ngIf=\"response.success; else paramError\">\n        <thead>\n          <tr>\n            <th class=\"border-0 bg-dark text-white\">Descrição</th>\n            <th class=\"border-0 bg-dark text-white\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let category of response.categories\">\n            <td class=\"border-bottom border-dark text-left\">\n              <a [routerLink]=\"[ '/categories', category.id ]\" [ngClass]=\"{'text-secondary': !category.isActive}\">\n                {{ category.description }}\n              </a>\n            </td>\n            <td class=\"border-bottom border-dark\">\n              <span class=\"float-right\">\n                <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\n                  <button class=\"btn btn-outline-primary mb-1 btn-sm\" (click)=\"edit(category.id)\">\n                    <fa-icon [icon]=\"faPencilAlt\"></fa-icon>\n                  </button>\n                  <button *ngIf=\"category.isActive\" class=\"btn btn-success mb-1 btn-sm\"\n                    (click)=\"changeState(category.id, category.isActive)\">\n                    <fa-icon [icon]=\"faCheck\"></fa-icon>\n                  </button>\n                  <button *ngIf=\"!category.isActive\" class=\"btn btn-outline-secondary mb-1 btn-sm\"\n                    (click)=\"changeState(category.id, category.isActive)\">\n                    <fa-icon [icon]=\"faCheck\"></fa-icon>\n                  </button>\n                </div>\n              </span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ng-template #paramError>\n      <app-param-error [message]=\"emptyMessage\"></app-param-error>\n    </ng-template>\n\n    <ng-template #loading>\n      <app-loading></app-loading>\n    </ng-template>\n\n    <ng-template #loadingError>\n      <div *ngIf=\"error$ | async; else loading\" class=\"card mt-3 border-0\">\n        <app-param-error message=\"Entre em contato com o administrador do sistema!\" type=\"danger\"></app-param-error>\n      </div>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/categories/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/categories/list/list.component.ts ***!
  \***************************************************/
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
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create/create.component */ "./src/app/categories/create/create.component.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit/edit.component */ "./src/app/categories/edit/edit.component.ts");










var ListComponent = /** @class */ (function () {
    function ListComponent(categoriesService, alertService, modalService) {
        this.categoriesService = categoriesService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.emptyMessage = 'Não exitem categorias cadastradas!';
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
        this.categories$ = this.categoriesService.listAll()
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
        this.categoriesService.edit({
            id: id,
            isActive: !isActive
        }).subscribe(function (success) { return _this.onRefresh(); }, function (error) { return _this.alertService.showAlertDanger("Erro ao editar categoria. Servidor retornou " + error); });
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/categories/list/list.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"],
            _services_alert_modal_service__WEBPACK_IMPORTED_MODULE_2__["AlertModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CategoriesService = /** @class */ (function () {
    function CategoriesService(http) {
        this.http = http;
        this.RESOURCE = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "/categories/";
    }
    CategoriesService.prototype.listAll = function () {
        return this.http.get(this.RESOURCE);
    };
    CategoriesService.prototype.listOne = function (id) {
        return this.http.get("" + this.RESOURCE + id);
    };
    CategoriesService.prototype.create = function (category) {
        return this.http.post(this.RESOURCE, category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    CategoriesService.prototype.edit = function (category) {
        return this.http.put("" + this.RESOURCE + category.id, category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ })

}]);
//# sourceMappingURL=categories-categories-module.js.map