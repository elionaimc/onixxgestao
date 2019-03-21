(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/alert-modal.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/alert-modal.service.ts ***!
  \*************************************************/
/*! exports provided: AlertModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModalService", function() { return AlertModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/alert-modal/alert-modal.component */ "./src/app/shared/alert-modal/alert-modal.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AlertModalService = /** @class */ (function () {
    function AlertModalService(modalService) {
        this.modalService = modalService;
    }
    AlertModalService.prototype.showAlertDanger = function (message) {
        if (message === 'Unknown Error')
            message = 'ERRO: O servidor não está respondendo corretamente!';
        this.showAlert(message, 'danger');
    };
    AlertModalService.prototype.showAlertSuccess = function (message) {
        this.showAlert(message, 'success');
    };
    AlertModalService.prototype.showAlertWarning = function (message) {
        this.showAlert(message, 'warning');
    };
    AlertModalService.prototype.showAlertInfo = function (message) {
        this.showAlert(message, 'info');
    };
    AlertModalService.prototype.showAlertPrimary = function (message) {
        this.showAlert(message, 'primary');
    };
    AlertModalService.prototype.showAlertSecondary = function (message) {
        this.showAlert(message, 'secondary');
    };
    AlertModalService.prototype.showAlertLight = function (message) {
        this.showAlert(message, 'light');
    };
    AlertModalService.prototype.showAlertDark = function (message) {
        this.showAlert(message, 'dark');
    };
    AlertModalService.prototype.showAlert = function (message, type) {
        var bsModalRef = this.modalService.show(_shared_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_1__["AlertModalComponent"]);
        bsModalRef.content.type = type;
        bsModalRef.content.message = message;
    };
    AlertModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], AlertModalService);
    return AlertModalService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map