(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"background:#f5f5f5\" class=\"container\">\r\n  <app-users></app-users>\r\n  <router-outlet></router-outlet>\r\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users-form-modal/users-form-modal.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users-form-modal/users-form-modal.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background: #299be4;color: #fff;\" class=\"modal-header\">\r\n  <h4 class=\"modal-title\">{{modalTitle}}</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"false\">&times;</span>\r\n  </button>\r\n</div>\r\n\r\n<mat-tab-group style=\"overflow: hidden\">\r\n  <mat-tab *ngIf=\"!newForm\" label=\"Details\">\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 img\">\r\n          <img style=\"max-width:100%;max-height:100%\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzOpl3-kqfNbPcA_u_qEZcSuvu5Je4Ce_FkTMMjxhB-J1wWin-Q\" alt=\"\" class=\"img-rounded\">\r\n          <blockquote>\r\n            <small><cite title=\"About user\">{{user.aboutUser}}</cite></small>\r\n          </blockquote>\r\n        </div>\r\n        <div  class=\"col-md-5 details\">\r\n          <blockquote>\r\n            <h5> {{user.name + ' ' + user.surname}}</h5>\r\n          </blockquote>\r\n          <hr />\r\n          <div>\r\n            <h6><i class=\"fa fa-id-card\"></i> Id Number</h6>\r\n            <i style=\"color:grey\">{{user.idNumber}}</i>\r\n          </div>\r\n          <hr />\r\n          <div>\r\n            <h6><i class=\"fa fa-id-card\"></i> Passport Number</h6>\r\n            <i style=\"color:grey\">{{user.passportNumber}}</i>\r\n          </div>\r\n          <hr />\r\n          <div>\r\n            <h6><i class=\"fa fa-mobile-alt\"></i> Mobile Number</h6>\r\n            <i style=\"color:grey\">{{user.contactDetails[0].mobileNumber}}</i>\r\n          </div>\r\n          <hr />\r\n          <div>\r\n            <h6><i class=\"fa fa-envelope\"></i> Email Address</h6>\r\n            <i style=\"color:grey\">{{user.contactDetails[0].emailAddress}}</i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </mat-tab>\r\n  <mat-tab label=\"Settings\">\r\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\">\r\n      <div style=\"margin-top:5px\" class=\"modal-boy\">\r\n        <div class=\"container\">\r\n\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col-xs-6 col-md-6 col-lg-6\">\r\n              <div class=\"form-group\">\r\n                <img [src]=\"ImageUrl\" style=\"border-radius: 5px; display:block; margin-left:auto; margin-right: auto; width: 50%; height:100px\" />\r\n                <div style=\"margin-top: 10px\" class=\"upload-btn-wrapper\">\r\n                  <button class=\"uploadbtn\">Upload an image</button>\r\n                  <input type=\"file\" #image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\" formControlName=\"image\" />\r\n                </div>\r\n              </div>\r\n              <div style=\"position: relative\" class=\"form-group\">\r\n                <textarea style=\"height:155px\" formControlName=\"aboutUser\" #aboutuser class=\"form-control\" name=\"aboutUser\" placeholder=\"Give a brief description of yourself\" required></textarea>\r\n                <span style=\"position: absolute; bottom: 10px; left: 10px;\" class=\"fa fa-commenting\"></span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-xs-6 col-md-6 col-lg-6\">\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text bg-white\">\r\n                      <i class=\"fas fa-user-circle\">\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <input type=\"text\"\r\n                         #name\r\n                         name=\"name\"\r\n                         placeholder=\"Name\"\r\n                         class=\"form-control\"\r\n                         formControlName=\"name\"\r\n                         [disabled]=\"!newForm\"\r\n                         required />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text bg-white\">\r\n                      <i class=\"fas fa-user-circle\">\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <input type=\"text\"\r\n                         #surname\r\n                         name=\"surname\"\r\n                         placeholder=\"Surname\"\r\n                         class=\"form-control\"\r\n                         formControlName=\"surname\"\r\n                         required />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text bg-white\">\r\n                      <i class=\"fas fa-id-card\">\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <input type=\"text\"\r\n                         #idnumber\r\n                         name=\"idnumber\"\r\n                         placeholder=\"13 Digit ID Number\"\r\n                         class=\"form-control\"\r\n                         formControlName=\"idNumber\"\r\n                         maxlength=\"13\" minlength=\"13\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text bg-white\">\r\n                      <i class=\"fas fa-id-card\">\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <input type=\"text\"\r\n                         #passportnumber\r\n                         name=\"passportnumber\"\r\n                         placeholder=\"10 Digit Passport Number\"\r\n                         class=\"form-control\"\r\n                         formControlName=\"passportNumber\"\r\n                         maxlength=\"10\" minlength=\"10\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text bg-white\">\r\n                      <i style=\"padding-right:7px\" class=\"fas fa-mobile-alt\">\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <input type=\"text\"\r\n                         #mobilenumber\r\n                         name=\"mobilenumber\"\r\n                         placeholder=\"10 Digit Mobile Number\"\r\n                         class=\"form-control\"\r\n                         formControlName=\"mobileNumber\"\r\n                         required maxlength=\"10\" minlength=\"10\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text bg-white\">\r\n                      <i class=\"fas fa-envelope\">\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <input type=\"text\"\r\n                         #emailaddress\r\n                         name=\"emailaddress\"\r\n                         placeholder=\"Email Address\"\r\n                         class=\"form-control\"\r\n                         formControlName=\"emailAddress\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\" style=\"width:100%\">\r\n            \r\n            <div class=\"form-group\" style=\"width:100%\">\r\n              <div class=\"btn-group d-flex\" role=\"group\" aria-label=\"\">\r\n                  <button (click)=\"deleteUser(user);  $event.preventDefault()\" class=\"btn btn-danger w-100\" [hidden]=\"newForm\" ><i class=\"fas fa-trash\"></i> Delete</button>\r\n                  <button class=\"btn btn-success w-100\" [disabled]=\"image.value == '' || myForm.invalid\"><i class=\"fas fa-database\"></i> Save</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n  </mat-tab>\r\n</mat-tab-group>\r\n\r\n  \r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-wrapper\">\r\n  <!--Table Title-->\r\n  <div class=\"table-title\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-5\">\r\n        <h2>User <b>Manager</b></h2>\r\n      </div>\r\n      <div class=\"col-sm-7\">\r\n        <div (click)=\"openFormModal()\" type=\"button\" class=\"btn btn-primary\"><i style=\"font-size: 21px;\" class=\"fas fa-plus-circle\"></i> <span style=\"font-size: 16px;\"> Add User</span></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <table class=\"table table-hover\">\r\n    <!--Table head-->\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Name</th>\r\n        <th>Id Number</th>\r\n        <th>Passport Number</th>\r\n        <th>Mobile Number</th>\r\n        <th>Email Address</th>\r\n      </tr>\r\n    </thead>\r\n    <!--Table head-->\r\n    <!--Table body-->\r\n    <tbody>\r\n      <tr (click)=\"openFormModal(user)\" style=\"cursor: pointer\" *ngFor=\"let user of service.list; let i = index\">\r\n        <th scope=\"row\">{{i + 1}}</th>\r\n        <td><a href=\"#\"><img src=\"/assets/images/person-placeholder.png\" class=\"avatar\" alt=\"Avatar\"> {{user.name + ' ' + user.surname}}</a></td>\r\n        <td>{{user.idNumber}}</td>\r\n        <td>{{user.passportNumber}}</td>\r\n        <td>{{user.contactDetails.length > 0 ? user.contactDetails[0].mobileNumber : ''}}</td>\r\n        <td>{{user.contactDetails.length > 0 ? user.contactDetails[0].emailAddress : ''}}</td>\r\n      </tr>\r\n      <tr>\r\n    </tbody>\r\n    <!--Table body-->\r\n\r\n  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'User Manager';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_form_modal_users_form_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users-form-modal/users-form-modal.component */ "./src/app/users-form-modal/users-form-modal.component.ts");
/* harmony import */ var _shared_users_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/users.model */ "./src/app/shared/users.model.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
                _users_form_modal_users_form_modal_component__WEBPACK_IMPORTED_MODULE_10__["UsersFormModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"]
            ],
            providers: [_shared_users_model__WEBPACK_IMPORTED_MODULE_11__["Users"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            entryComponents: [
                _users_form_modal_users_form_modal_component__WEBPACK_IMPORTED_MODULE_10__["UsersFormModalComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/upload-image.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/upload-image.service.ts ***!
  \************************************************/
/*! exports provided: UploadImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageService", function() { return UploadImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UploadImageService = /** @class */ (function () {
    function UploadImageService(http) {
        this.http = http;
    }
    UploadImageService.prototype.postFile = function (imageData) {
        var endpoint = 'http://localhost:61692/api/Images';
        return this.http.post(endpoint, imageData);
    };
    UploadImageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UploadImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UploadImageService);
    return UploadImageService;
}());



/***/ }),

/***/ "./src/app/shared/users.model.ts":
/*!***************************************!*\
  !*** ./src/app/shared/users.model.ts ***!
  \***************************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());



/***/ }),

/***/ "./src/app/shared/users.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/users.service.ts ***!
  \*****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.rootUrl = 'http://localhost:61692/api';
    }
    UsersService.prototype.postUser = function (formData) {
        return this.http.post(this.rootUrl + '/Users', formData);
    };
    UsersService.prototype.putUser = function (formData) {
        //this.http.put(this.rootUrl + '/ContactDetails/' + sessionStorage.getItem('Id'), formData.contactDetails[0]);
        return this.http.put(this.rootUrl + '/Users/' + formData.name, formData);
    };
    UsersService.prototype.deleteUser = function (formData) {
        return this.http.delete(this.rootUrl + '/Users/' + formData);
    };
    UsersService.prototype.refreshList = function () {
        var _this = this;
        this.http.get(this.rootUrl + '/Users')
            .toPromise()
            .then(function (res) {
            _this.list = res;
            sessionStorage.setItem('UsersList', JSON.stringify(res));
        });
    };
    UsersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/users-form-modal/users-form-modal.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/users-form-modal/users-form-modal.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzLWZvcm0tbW9kYWwvdXNlcnMtZm9ybS1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users-form-modal/users-form-modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/users-form-modal/users-form-modal.component.ts ***!
  \****************************************************************/
/*! exports provided: UsersFormModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersFormModalComponent", function() { return UsersFormModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/users.service */ "./src/app/shared/users.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_upload_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/upload-image.service */ "./src/app/shared/upload-image.service.ts");








var UsersFormModalComponent = /** @class */ (function () {
    function UsersFormModalComponent(imageService, toastr, service, httpService, activeModal, formBuilder) {
        this.imageService = imageService;
        this.toastr = toastr;
        this.service = service;
        this.httpService = httpService;
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.ImageUrl = "/assets/images/person-placeholder.png";
        this.fileToUpload = null;
        if (sessionStorage.getItem("CurrentUser"))
            this.newForm = false;
        else
            this.newForm = true;
        this.user = sessionStorage.getItem("CurrentUser") ? JSON.parse(sessionStorage.getItem("CurrentUser")) : {};
        this.modalTitle = this.user.name ? 'User' : 'New User';
        //Check user is new and add contactdetails field for length check in the createform method
        if (!this.user.name) {
            this.user.contactDetails = [];
            this.user.image = [];
        }
        ;
        this.createForm();
    }
    UsersFormModalComponent.prototype.deleteUser = function (user) {
        var _this = this;
        //Update contact first and then update user
        if (confirm('Are you sure you want to delete this user?')) {
            this.activeModal.close(this.myForm.value);
            this.httpService.delete('http://localhost:61692/api/ContactDetails/' + user.contactDetails[0].id).subscribe(function (res) {
                _this.service.deleteUser(user.name).subscribe(function (res) {
                    console.log(res);
                    _this.toastr.warning('User deleted successfully', 'User Manager');
                    _this.service.refreshList();
                }, function (err) {
                    console.log(err);
                });
            }, function (err) {
                console.log(err);
            });
        }
    };
    UsersFormModalComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        //Show image preview
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.ImageUrl = event.target.result;
            //Convert image to bytes
            _this.ImageBytes = _this.convertDataURIToBinary(_this.ImageUrl);
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    UsersFormModalComponent.prototype.convertDataURIToBinary = function (dataURI) {
        var BASE64_MARKER = ';base64,';
        var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
        var base64 = dataURI.substring(base64Index);
        var raw = window.atob(base64);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));
        for (var i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return array;
    };
    UsersFormModalComponent.prototype.createForm = function () {
        this.myForm = this.formBuilder.group({
            name: this.user ? this.user.name : '',
            surname: this.user ? this.user.surname : '',
            idNumber: this.user ? this.user.idNumber : '',
            passportNumber: this.user ? this.user.passportNumber : '',
            mobileNumber: this.user.contactDetails.length > 0 ? this.user.contactDetails[0].mobileNumber : '',
            emailAddress: this.user.contactDetails.length > 0 ? this.user.contactDetails[0].emailAddress : '',
            aboutUser: this.user.aboutUser ? this.user.aboutUser : '',
            image: this.user.image > 0 ? this.user.image : null,
        });
        if (this.newForm == false)
            this.myForm.controls['name'].disable();
    };
    UsersFormModalComponent.prototype.submitForm = function () {
        //close modal
        this.activeModal.close(this.myForm.value);
        //create image object
        this.image = { aboutUser: this.myForm.value.aboutUser, imageName: this.myForm.value.image, imageContent: this.ImageBytes, name: this.myForm.value.name };
        //push into object filed
        this.myForm.value.image = [];
        this.myForm.value.image.push(this.image);
        JSON.stringify(this.myForm.value.image);
        //Create contact object
        var contact = {};
        if (sessionStorage.getItem("Id"))
            contact = { id: Number(sessionStorage.getItem("Id")), mobileNumber: this.myForm.value.mobileNumber, emailAddress: this.myForm.value.emailAddress };
        else
            contact = { mobileNumber: this.myForm.value.mobileNumber, emailAddress: this.myForm.value.emailAddress };
        //Create contactdetail field in user object
        this.myForm.value.contactDetails = [];
        //push object into field
        this.myForm.value.contactDetails.push(contact);
        JSON.stringify(this.myForm.value.contactDetails);
        //delete fields as they are not part of original users model
        delete this.myForm.value.mobileNumber;
        delete this.myForm.value.emailAddress;
        delete this.myForm.value.aboutUser;
        if (sessionStorage.getItem('CurrentUser')) {
            //disable() somehow removed user field
            this.myForm.value.name = JSON.parse(sessionStorage.getItem('CurrentUser')).name;
            this.UpdateUser(this.myForm.value);
        }
        else {
            this.AddUser(this.myForm.value);
        }
    };
    UsersFormModalComponent.prototype.checkUserExists = function (name) {
        var usersList = JSON.parse(sessionStorage.getItem('UsersList'));
        for (var i = 0; i < usersList.length; i++) {
            if (usersList[i].name.toLowerCase() == name.toLowerCase()) {
                return true;
            }
        }
        return false;
    };
    UsersFormModalComponent.prototype.AddUser = function (user) {
        var _this = this;
        var userexists = this.checkUserExists(user.name);
        if (userexists) {
            this.toastr.info('User Name Already Exists', 'User Manager');
            this.service.refreshList();
        }
        else {
            this.service.postUser(user).subscribe(function (res) {
                console.log(res);
                _this.toastr.success('User created successfully', 'User Manager');
                _this.service.refreshList();
            }, function (err) {
                console.log(err);
            });
        }
    };
    UsersFormModalComponent.prototype.UpdateUser = function (user) {
        var _this = this;
        //Update contact first and then update user
        this.httpService.put('http://localhost:61692/api/ContactDetails/' + user.contactDetails[0].id, user.contactDetails[0]).subscribe(function (res) {
            _this.service.putUser(user).subscribe(function (res) {
                console.log(res);
                _this.toastr.info('User updated successfully', 'User Manager');
                _this.service.refreshList();
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    UsersFormModalComponent.prototype.ngOnInit = function () {
    };
    UsersFormModalComponent.prototype.closeModal = function () {
        this.activeModal.close('Modal Closed');
    };
    UsersFormModalComponent.ctorParameters = function () { return [
        { type: _shared_upload_image_service__WEBPACK_IMPORTED_MODULE_7__["UploadImageService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _shared_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UsersFormModalComponent.prototype, "user", void 0);
    UsersFormModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-form-modal',
            template: __webpack_require__(/*! raw-loader!./users-form-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/users-form-modal/users-form-modal.component.html"),
            providers: [_shared_upload_image_service__WEBPACK_IMPORTED_MODULE_7__["UploadImageService"]],
            styles: [__webpack_require__(/*! ./users-form-modal.component.css */ "./src/app/users-form-modal/users-form-modal.component.css")]
        })
    ], UsersFormModalComponent);
    return UsersFormModalComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _users_form_modal_users_form_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../users-form-modal/users-form-modal.component */ "./src/app/users-form-modal/users-form-modal.component.ts");
/* harmony import */ var _shared_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/users.service */ "./src/app/shared/users.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var UsersComponent = /** @class */ (function () {
    function UsersComponent(toastr, service, httpService, modalService) {
        this.toastr = toastr;
        this.service = service;
        this.httpService = httpService;
        this.modalService = modalService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.service.refreshList();
    };
    UsersComponent.prototype.openFormModal = function (user) {
        if (user) {
            sessionStorage.setItem("CurrentUser", JSON.stringify(user));
            sessionStorage.setItem("Id", JSON.stringify(user.contactDetails[0].id));
        }
        else {
            sessionStorage.removeItem("CurrentUser");
            sessionStorage.removeItem("Id");
        }
        var modalRef = this.modalService.open(_users_form_modal_users_form_modal_component__WEBPACK_IMPORTED_MODULE_4__["UsersFormModalComponent"]);
        modalRef.componentInstance.user = user;
        modalRef.result.then(function (result) {
            console.log(result);
        }).catch(function (error) {
            console.log(error);
        });
    };
    UsersComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _shared_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
    ]; };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        })
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Claudia Goma\Documents\User-Manager\UsersClient\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map