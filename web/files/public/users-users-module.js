(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.RESOURCE = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "/users/";
    }
    UsersService.prototype.listAll = function () {
        return this.http.get(this.RESOURCE);
    };
    UsersService.prototype.listOne = function (id) {
        return this.http.get("" + this.RESOURCE + id);
    };
    UsersService.prototype.create = function (u) {
        return this.http.post(this.RESOURCE, u).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    UsersService.prototype.edit = function (u) {
        return this.http.put("" + this.RESOURCE + u.id, u).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/users/create/create.component.html":
/*!****************************************************!*\
  !*** ./src/app/users/create/create.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert my-0\" role=\"alert\">\n  <div class=\"modal-header border-bottom border-light\">\n    <h4 class=\"modal-title\">Cadastrar Usuário</h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form class=\"form-auth\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n    <div class=\"modal-body\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-sm-12\">\n          <label for=\"name\">Nome</label>\n          <input type=\"text\" class=\"form-control\" ngModel #name=\"ngModel\" name=\"name\"\n            placeholder=\"Ex: Lois Lane\" minlength=\"5\" maxlength=\"100\" required />\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-1\">\n        <div class=\"col-sm-12\">\n          <label for=\"email\">email</label>\n          <input type=\"email\" class=\"form-control\" ngModel #email=\"ngModel\" name=\"email\"\n            placeholder=\"Ex: loislane@dailyplanet.com\" email required />\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-1\">\n        <div class=\"col-sm-6\">\n          <label for=\"password\">Senha</label>\n          <input type=\"text\" class=\"form-control\" ngModel #password=\"ngModel\" name=\"password\" placeholder=\"Ex: $enH4-F0Rte\" minlength=\"5\"\n            maxlength=\"100\" required />\n        </div>\n        <div class=\"col-sm-6\">\n          <label for=\"role\">Função</label>\n          <select class=\"form-control\" ngModel #role=\"ngModel\" name=\"role\" required>\n            <option selected value=\"analista\">Analista</option>\n            <option value=\"gestor\">Gestor</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"alert alert-warning\" [hidden]=\"email.valid || email.pristine\">\n        <small><strong>Erro: </strong>O email informado é inválido.</small>\n      </div>\n      <div class=\"row justify-content-center py-1\">\n        <div *ngIf=\"error\" class=\"alert alert-warning\">\n          <small>{{error}}</small>\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-3\">\n        <div class=\"text-center\">\n          <button type=\"button\" class=\"btn btn-outline-success\" data-dismiss=\"modal\"\n            (click)=\"onClose()\">Cancelar</button>\n          <button type=\"submit\" [disabled]=\"!f.form.valid\" class=\"btn btn-primary\" id=\"cadastrar\"\n            name=\"cadastrar\">Cadastrar</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/users/create/create.component.ts":
/*!**************************************************!*\
  !*** ./src/app/users/create/create.component.ts ***!
  \**************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");





var CreateComponent = /** @class */ (function () {
    function CreateComponent(usersService, bsModalRef, router, route) {
        this.usersService = usersService;
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
        this.user = {
            name: f.form.value.name,
            email: f.form.value.email,
            role: f.form.value.role,
            password: f.form.value.password,
            PrefectureId: this.currentUser['PrefectureId']
        };
        this.usersService.create(this.user)
            .subscribe(function (success) {
            _this.bsModalRef.hide();
            _this.router.navigate(['/users']);
        }, function (error) { return _this.error = error; });
    };
    CreateComponent.prototype.onClose = function () {
        this.bsModalRef.hide();
        this.router.navigate(['/users']);
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/users/create/create.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/users/detail/detail.component.html":
/*!****************************************************!*\
  !*** ./src/app/users/detail/detail.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3 border-0\">\n  <div *ngIf=\"users$ | async as response; else loadingError\">\n    <div *ngIf=\"response.success; else paramError\">\n      <div class=\"card\">\n        <div class=\"card-header bg-light\" [ngClass]=\"{'text-danger': response.user.isActive == false}\">\n          <h3>{{ response.user.name }} - ({{ response.user.role }})</h3>\n        </div>\n        <div class=\"card-body\">\n\n          <h5 class=\"card-subtitle mb-2 text-muted\">email: {{ response.user.email }}</h5>\n          <p class=\"card-text\">\n            <small>\n              Usuário cadastrado em {{ response.user.createdAt | date: 'dd/MM/yyyy' }}.\n            </small>\n          </p>\n          <a [routerLink]=\"[ '/users']\" class=\"card-link\">Voltar</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #loading>\n    <app-loading></app-loading>\n  </ng-template>\n\n  <ng-template #loadingError>\n    <div *ngIf=\"error$ | async; else loading\" class=\"card mt-3 border-0\">\n      <app-param-error [message]=\"defaultMessage\" type=\"warning\"></app-param-error>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/users/detail/detail.component.ts":
/*!**************************************************!*\
  !*** ./src/app/users/detail/detail.component.ts ***!
  \**************************************************/
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
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert-modal.service */ "./src/app/services/alert-modal.service.ts");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, router, usersService, alertService) {
        this.route = route;
        this.router = router;
        this.usersService = usersService;
        this.alertService = alertService;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.users$ = _this.usersService.listOne(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                _this.alertService.showAlertDanger(error);
                _this.error$.next(true);
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                if (!data['success'] && data['message']) {
                    if (id != 'new') {
                        _this.alertService.showAlertWarning(data['message']);
                        _this.router.navigate(['/users']);
                    }
                    return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
                }
            }));
        });
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/users/detail/detail.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            src_app_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__["AlertModalService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/users/edit/edit.component.html":
/*!************************************************!*\
  !*** ./src/app/users/edit/edit.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert my-0\" role=\"alert\">\n  <div class=\"modal-header border-bottom border-light\">\n    <h4 class=\"modal-title\">Editar Usuário</h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onCancel()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form class=\"form-auth\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <div class=\"card-body\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-sm-12\">\n          <label for=\"name\">Nome</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\"\n            placeholder=\"Ex: Lois Lane\" minlength=\"5\" maxlength=\"100\" required />\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-1\">\n        <div class=\"col-sm-9\">\n          <label for=\"email\">E-mail</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" name=\"email\"\n            placeholder=\"Ex: loislane@dailyplanet.com\" minlength=\"5\" maxlength=\"100\" required />\n        </div>\n        <div class=\"col-sm-3\">\n          <label for=\"role\">Função</label>\n          <select class=\"form-control\" formControlName=\"role\" required>\n            <option value=\"analista\">Analista</option>\n            <option value=\"gestor\">Gestor</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-1\">\n        <div *ngIf=\"error\" class=\"alert alert-warning\">\n          <small>{{error}}</small>\n        </div>\n      </div>\n      <div class=\"row justify-content-center py-3\">\n        <div class=\"text-center\">\n          <button type=\"reset\" class=\"btn btn-outline-success\" (click)=\"onCancel()\">Cancelar</button>\n          <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary\" id=\"editar\"\n            name=\"editar\">Editar</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/users/edit/edit.component.ts":
/*!**********************************************!*\
  !*** ./src/app/users/edit/edit.component.ts ***!
  \**********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");





var EditComponent = /** @class */ (function () {
    function EditComponent(usersService, bsModalRef, fb) {
        this.usersService = usersService;
        this.bsModalRef = bsModalRef;
        this.fb = fb;
        this.submitted = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            id: [null],
            name: [null],
            email: [null],
            role: [null]
        });
        var user$ = this.usersService.listOne(this.id);
        user$.subscribe(function (data) { return _this.updateForm(data['user']); });
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.usersService.edit({
            id: this.form.value.id,
            name: this.form.value.name,
            email: this.form.value.email,
            role: this.form.value.role
        }).subscribe(function (success) {
            _this.bsModalRef.hide();
        }, function (error) { return _this.error = "Erro ao editar usu\u00E1rio. Servidor retornou " + error; });
    };
    EditComponent.prototype.updateForm = function (user) {
        this.form.patchValue({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        });
    };
    EditComponent.prototype.onCancel = function () {
        this.form.reset();
        this.bsModalRef.hide();
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/users/edit/edit.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/users/list/list.component.html":
/*!************************************************!*\
  !*** ./src/app/users/list/list.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3 border-0\">\n  <div class=\"card-header border-0 bg-white\">\n    <div class=\"float-left\">\n      <h4>Usuários</h4>\n    </div>\n    <div class=\"float-right\">\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"create()\">\n        <fa-icon [icon]=\"faPlus\"></fa-icon> <span class=\"d-none d-lg-inline\">Cadastrar</span>\n      </button>\n      <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"onRefresh()\">\n        <fa-icon [icon]=\"faSync\"></fa-icon> <span class=\"d-none d-lg-inline\">Atualizar</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"panel row\" *ngIf=\"users$ | async as response; else loadingError\">\n      <table class=\"table table-hover\" *ngIf=\"response.success; else paramError\">\n        <thead>\n          <tr>\n            <th class=\"border-0 bg-dark text-white\">Nome</th>\n            <th class=\"border-0 bg-dark text-white\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let user of response.users\">\n            <td class=\"border-bottom border-dark text-left\">\n              <a [routerLink]=\"[ '/users', user.id ]\" [ngClass]=\"{'text-secondary': !user.isActive}\">\n                {{ user.name }}\n              </a>\n            </td>\n            <td class=\"border-bottom border-dark\">\n              <span class=\"float-right\">\n                <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\n                  <button class=\"btn btn-outline-primary mb-1 btn-sm\" (click)=\"edit(user.id)\">\n                    <fa-icon [icon]=\"faPencilAlt\"></fa-icon>\n                  </button>\n                  <button *ngIf=\"user.isActive\" class=\"btn btn-success mb-1 btn-sm\"\n                    (click)=\"changeState(user.id, user.isActive)\">\n                    <fa-icon [icon]=\"faCheck\"></fa-icon>\n                  </button>\n                  <button *ngIf=\"!user.isActive\" class=\"btn btn-outline-secondary mb-1 btn-sm\"\n                    (click)=\"changeState(user.id, user.isActive)\">\n                    <fa-icon [icon]=\"faCheck\"></fa-icon>\n                  </button>\n                </div>\n              </span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ng-template #paramError>\n      <app-param-error [message]=\"emptyMessage\"></app-param-error>\n    </ng-template>\n\n    <ng-template #loading>\n      <app-loading></app-loading>\n    </ng-template>\n\n    <ng-template #loadingError>\n      <div *ngIf=\"error$ | async; else loading\" class=\"card mt-3 border-0\">\n        <app-param-error message=\"Entre em contato com o administrador do sistema!\" type=\"danger\"></app-param-error>\n      </div>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/users/list/list.component.ts":
/*!**********************************************!*\
  !*** ./src/app/users/list/list.component.ts ***!
  \**********************************************/
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
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create/create.component */ "./src/app/users/create/create.component.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit/edit.component */ "./src/app/users/edit/edit.component.ts");










var ListComponent = /** @class */ (function () {
    function ListComponent(usersService, alertService, modalService) {
        this.usersService = usersService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.emptyMessage = 'Não exitem usuários cadastrados!';
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
        this.users$ = this.usersService.listAll()
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
        this.usersService.edit({
            id: id,
            isActive: !isActive
        }).subscribe(function (success) { return _this.onRefresh(); }, function (error) { return _this.alertService.showAlertDanger("Erro ao editar usu\u00E1rio. Servidor retornou " + error); });
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/users/list/list.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _services_alert_modal_service__WEBPACK_IMPORTED_MODULE_2__["AlertModalService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/users/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/users/detail/detail.component.ts");





var routes = [
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: ':id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"] }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/users/list/list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/users/detail/detail.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create/create.component */ "./src/app/users/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/users/edit/edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _layout_param_error_param_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/param-error/param-error.component */ "./src/app/layout/param-error/param-error.component.ts");
/* harmony import */ var _layout_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layout/server-error/server-error.component */ "./src/app/layout/server-error/server-error.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");













var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]],
            entryComponents: [
                _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"],
                _layout_param_error_param_error_component__WEBPACK_IMPORTED_MODULE_10__["ParamErrorComponent"],
                _layout_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_11__["ServerErrorComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map