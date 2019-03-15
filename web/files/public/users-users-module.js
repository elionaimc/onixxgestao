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




var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.RESOURCE = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "/users";
    }
    UsersService.prototype.listAll = function () {
        return this.http.get(this.RESOURCE);
    };
    UsersService.prototype.listOne = function (id) {
        return this.http.get(this.RESOURCE + '/' + id);
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

/***/ "./src/app/users/create/create.component.css":
/*!***************************************************!*\
  !*** ./src/app/users/create/create.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/users/create/create.component.html":
/*!****************************************************!*\
  !*** ./src/app/users/create/create.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  create works!\n</p>\n"

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


var CreateComponent = /** @class */ (function () {
    function CreateComponent() {
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/users/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/users/create/create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<div *ngIf=\"user$ | async as response; else loadingError\">\n  <div *ngIf=\"response.success; else paramError\">\n    <span>Nome: {{ response.user.name }}</span>\n  </div>\n\n<ng-template #paramError>\n  <app-param-error></app-param-error>\n</ng-template>\n\n</div>\n\n<ng-template #loading>\n  <app-loading></app-loading>\n</ng-template>\n\n<ng-template #loadingError>\n  <div *ngIf=\"error$ | async; else loading\" class=\"card mt-3 border-0\">\n    <app-server-error></app-server-error>\n  </div>\n</ng-template>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var DetailComponent = /** @class */ (function () {
    function DetailComponent(router, service) {
        this.router = router;
        this.service = service;
        this.splash = true;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.control = this.router.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.user$ = _this.service.listOne(_this.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                _this.error$.next(true);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }));
        });
    };
    DetailComponent.prototype.ngOnDestroy = function () {
        this.control.unsubscribe();
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/users/detail/detail.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/users/edit/edit.component.css":
/*!***********************************************!*\
  !*** ./src/app/users/edit/edit.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/edit/edit.component.html":
/*!************************************************!*\
  !*** ./src/app/users/edit/edit.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit works!\n</p>\n"

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


var EditComponent = /** @class */ (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/users/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/users/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<div class=\"card mt-3 border-0\">\n  <div class=\"card-header border-0 bg-white\">\n    <div class=\"float-left\">\n      <h4>Usuários</h4>\n    </div>\n    <div class=\"float-right\">\n      <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['novo']\">Novo Usuário</button>\n\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"onRefresh()\">Atualizar</button>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"panel row\" *ngIf=\"users$ | async as response; else loadingError\">\n      <table class=\"table table-hover\" *ngIf=\"response.success; else loading\">\n        <!--<thead>\n          <tr>\n            <th>Usuário</th>\n            <th></th>\n          </tr>\n        </thead>-->\n        <tbody>\n          <tr *ngFor=\"let user of response.users\">\n            <td class=\"border-0\"><a [routerLink]=\"[ '/users', user.id ]\">{{ user.name }}</a></td>\n            <td class=\"border-0\">\n              <span class=\"float-right\">\n                <button class=\"btn btn-warning mb-1 btn-sm\">\n                  Atualizar\n                </button>\n\n                <button class=\"btn btn-danger mb-1 btn-sm\">\n                  Remover\n                </button>\n              </span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <ng-template #loading>\n      <app-loading></app-loading>\n    </ng-template>\n    \n    <ng-template #loadingError>\n      <div *ngIf=\"error$ | async; else loading\" class=\"card mt-3 border-0\">\n        <app-server-error></app-server-error>\n      </div>\n    </ng-template>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ListComponent = /** @class */ (function () {
    function ListComponent(service) {
        this.service = service;
        this.splash = true;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ListComponent.prototype.ngOnInit = function () {
        this.onRefresh();
    };
    ListComponent.prototype.onRefresh = function () {
        var _this = this;
        this.users$ = this.service.listAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.error$.next(true);
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    };
    ListComponent.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () { return _this.splash = false; }, 4000);
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/users/list/list.component.html"),
            preserveWhitespaces: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
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
    { path: ':id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"] },
    { path: 'novo', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"] }
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
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map