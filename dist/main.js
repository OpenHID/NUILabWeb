(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 800px;\r\n    /* margin: auto; */\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n\r\n.name {\r\n    color: black;\r\n    font-size: 18px;\r\n}\r\n\r\n.title {\r\n    color: grey;\r\n    font-size: 14px;\r\n}\r\n\r\nbutton {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    font-size: 22px;\r\n    color: black;\r\n}\r\n\r\nbutton:hover, a:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.PeopleTitle{\r\n    text-align:center;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <!-- Header Group photo -->\r\n    <div style=\"background: url('/assets/images/people/header_photo.jpg'); width: 100%; height: 280px; background-size: cover; background-position: 50% 25%;\"></div>\r\n   \r\n    <div class=\"table\">\r\n        <div class=\"row\" style=\"padding:16px;\">\r\n            <div class=\"col-md-4\" style=\"text-align:center\">\r\n                <img src=\"assets/images/general/map.svg\" style=\"width: 70%; max-height: 240px;\">\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <br>\r\n                <h4>Who are We?</h4>\r\n                <p style=\"text-align: justify\">We are a multi-disciplinary group, with our primary site at Colorado State University and with a still active site at Florida International University. We have included a diverse background of knowledge and origins. While CS-centric, former students have included majors, such as Statistics, Mathematics, Biology, Psychology, Engineering, and Architecture, among others. We have had members from multiple places, including USA, Cuba, Chile, Colombia, Jamaica, Dominican Republic, China, Brazil, and Venezuela, among others.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- CONTENT USING JSON OBJ -->\r\n<div class=\"container\">\r\n    <br><hr><br>\r\n</div>\r\n\r\n<!-- Faculty People -->\r\n<div *ngIf=\"faculty.PHD.length\" class=\"container\">\r\n    <div class=\"table\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 PeopleTitle\">\r\n                <h2>Faculty</h2>\r\n            </div>\r\n        </div>\r\n        \r\n        <div *ngFor=\"let person of faculty.PHD\" class=\"row\" style=\"padding:20px;\">\r\n            <div class=\"col-md-2\" style=\"text-align:center;\">\r\n                <img [src]=\"person.image\" style=\"width: 100%; max-height: 200px; max-width: 200px; border: 3px solid rgb(34, 104, 45)\">\r\n            </div>\r\n            <div class=\"col-md-10\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-10\">\r\n                        <h3>{{person.name}}, {{person.education}}</h3>\r\n                        <h5>{{person.position}}</h5>\r\n                        <h5 style=\"color: rgb(34, 104, 45)\">{{person.university}}</h5>\r\n                        <p>{{person.email}}</p>\r\n                    </div>\r\n                    \r\n                    <div class=\"col-md-2\">\r\n                        <a [href]=\"person.cv\" target=\"NEW\"><h5>CV</h5></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\" style=\"text-align:justify\">\r\n                       <span [innerHTML]=\"person.description\"> </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <br><hr><br>\r\n</div>\r\n<!-- All current Students -->\r\n\r\n<div class=\"container\">\r\n    <div class=\"table\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 PeopleTitle\">\r\n                <h2>Current Assistants and Volunteers</h2>\r\n            </div>\r\n        </div>\r\n        \r\n        <!-- Current PHD Students -->\r\n        <div *ngIf=\"current.PHD.length\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>PH.D. Students</h3>\r\n                </div>\r\n            </div>\r\n            <div *ngFor=\"let person of current.PHD\" class=\"row\" style=\"padding:20px;\">\r\n                <div class=\"col-md-2\" style=\"text-align:center;\">\r\n                    <img [src]=\"person.image\" style=\"width: 100%; max-height: 200px; max-width: 200px;\">\r\n                </div>\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            <h3>{{person.name}}, {{person.major}} - {{person.education}}</h3>\r\n                            <h5>{{person.position}}</h5>\r\n                            <h5 style=\"color: rgb(18, 18, 124)\">{{person.university}}</h5>\r\n                            <p>{{person.email}}</p>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-md-2\">\r\n                            <!-- <a [href]=\"person.cv\" target=\"NEW\"><h5>CV</h5></a> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"text-align:justify\">\r\n                        <span [innerHTML]=\"person.description\"> </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <!-- Current Master Students -->\r\n        <div *ngIf=\"current.MDS.length\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Master Students</h3>\r\n                </div>\r\n            </div>\r\n            <div *ngFor=\"let person of current.MDS\" class=\"row\" style=\"padding:20px;\">\r\n                <div class=\"col-md-2\" style=\"text-align:center;\">\r\n                    <img [src]=\"person.image\" style=\"width: 100%; max-height: 200px; max-width: 200px; border: 3px solid rgb(18, 18, 124);\">\r\n                </div>\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            <h3>{{person.name}}, {{person.major}} - {{person.education}}</h3>\r\n                            <h5>{{person.position}}</h5>\r\n                            <h5 style=\"color: rgb(18, 18, 124)\">{{person.university}}</h5>\r\n                            <p>{{person.email}}</p>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-md-2\">\r\n                            <!-- <a [href]=\"person.cv\" target=\"NEW\"><h5>CV</h5></a> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"text-align:justify\">\r\n                        <span [innerHTML]=\"person.description\"> </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Current Bachelor Students -->\r\n        <div *ngIf=\"current.BS.length\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Bachelor Students</h3>\r\n                </div>\r\n            </div>\r\n            <div *ngFor=\"let person of current.BS\" class=\"row\" style=\"padding:20px;\">\r\n                <div class=\"col-md-2\" style=\"text-align:center;\">\r\n                    <img [src]=\"person.image\" style=\"width: 100%; max-height: 200px; max-width: 200px; border: 3px solid rgb(18, 18, 124);\">\r\n                </div>\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            <h3>{{person.name}}, {{person.major}} - {{person.education}}</h3>\r\n                            <h5>{{person.position}}</h5>\r\n                            <h5 style=\"color: rgb(18, 18, 124)\">{{person.university}}</h5>\r\n                            <p>{{person.email}}</p>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-md-2\">\r\n                            <!-- <a [href]=\"person.cv\" target=\"NEW\"><h5>CV</h5></a> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"text-align:justify\">\r\n                        <span [innerHTML]=\"person.description\"> </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Current Bachelor Students -->\r\n        <div *ngIf=\"current.BSCSU.length\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                </div>\r\n            </div>\r\n            <div *ngFor=\"let person of current.BSCSU\" class=\"row\" style=\"padding:20px;\">\r\n                <div class=\"col-md-2\" style=\"text-align:center;\">\r\n                    <img [src]=\"person.image\" style=\"width: 100%; max-height: 200px; max-width: 200px; border: 3px solid rgb(34, 104, 45);\">\r\n                </div>\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            <h3>{{person.name}}, {{person.major}} - {{person.education}}</h3>\r\n                            <h5>{{person.position}}</h5>\r\n                            <h5 style=\"color: rgb(34, 104, 45)\">{{person.university}}</h5>\r\n                            <p>{{person.email}}</p>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-md-2\">\r\n                            <!-- <a [href]=\"person.cv\" target=\"NEW\"><h5>CV</h5></a> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"text-align:justify\">\r\n                        <span [innerHTML]=\"person.description\"> </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"current.BSN.length\">\r\n            <div class=\"row\">\r\n            </div>\r\n            <div *ngFor=\"let person of current.BSN\" class=\"row\" style=\"padding:20px;\">\r\n                <div class=\"col-md-2\" style=\"text-align:center;\">\r\n                    <img [src]=\"person.image\" style=\"width: 100%; max-height: 200px; max-width: 200px;\">\r\n                </div>\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            <h3>{{person.name}}, {{person.major}} - {{person.education}}</h3>\r\n                            <h5>{{person.position}}</h5>\r\n                            <h5 style=\"color: rgb(18, 18, 124)\">{{person.university}}</h5>\r\n                            <p>{{person.email}}</p>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-md-2\">\r\n                            <!-- <a [href]=\"person.cv\" target=\"NEW\"><h5>CV</h5></a> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"text-align:justify\">\r\n                        <span [innerHTML]=\"person.description\"> </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <br><hr><br>\r\n</div>\r\n<!-- All Former Students -->\r\n<div class=\"container\">\r\n    <div class=\"table\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 PeopleTitle\">\r\n                <h2>Former Assistants and Volunteers</h2>\r\n            </div>\r\n        </div>\r\n        \r\n        <!-- Current PHD Students -->\r\n        <div *ngIf=\"oldStudents.PHD.length\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>PH.D. Students</h3>\r\n                </div>\r\n            </div>\r\n            <div *ngFor=\"let person of oldStudents.PHD\" class=\"row\" style=\"padding:20px;\">\r\n                <div class=\"col-md-2\" style=\"text-align:center;\">\r\n                    <img [src]=\"person.image\" style=\"width: 100%; max-height: 200px; max-width: 200px; border: 3px solid rgb(18, 18, 124);\">\r\n                </div>\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            <h3>{{person.name}}, {{person.major}} - {{person.education}}</h3>\r\n                            <h5>{{person.position}}</h5>\r\n                            <h5 style=\"color: rgb(18, 18, 124)\">{{person.university}}</h5>\r\n                            <p>{{person.email}}</p>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-md-2\">\r\n                            <!-- <a [href]=\"person.cv\" target=\"NEW\"><h5>CV</h5></a> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"text-align:justify\">\r\n                        <span [innerHTML]=\"person.description\"> </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <!-- Current Master Students -->\r\n        <div *ngIf=\"oldStudents.MDS.length\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Graduate Students</h3>\r\n                </div>\r\n            </div>\r\n            <div *ngFor=\"let person of oldStudents.MDS\" class=\"row\" style=\"padding:20px;\">\r\n                <div class=\"col-md-2\" style=\"text-align:center;\">\r\n                    <img [src]=\"person.image\" style=\"width: 100%; max-height: 200px; max-width: 200px; border: 3px solid rgb(18, 18, 124);\">\r\n                </div>\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            <h3>{{person.name}}, {{person.major}} - {{person.education}}</h3>\r\n                            <h5>{{person.position}}</h5>\r\n                            <h5 style=\"color: rgb(18, 18, 124)\">{{person.university}}</h5>\r\n                            <p>{{person.email}}</p>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-md-2\">\r\n                            <!-- <a [href]=\"person.cv\" target=\"NEW\"><h5>CV</h5></a> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"text-align:justify\">\r\n                        <span [innerHTML]=\"person.description\"> </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Current Bachelor Students -->\r\n        <div *ngIf=\"oldStudents.BS.length\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Bachelor Students</h3>\r\n                </div>\r\n            </div>\r\n            <div *ngFor=\"let person of oldStudents.BS\" class=\"row\" style=\"padding:20px;\">\r\n                <div class=\"col-md-2\" style=\"text-align:center;\">\r\n                    <img [src]=\"person.image\" style=\"width: 100%; max-height: 200px; max-width: 200px; border: 3px solid rgb(18, 18, 124);\">\r\n                </div>\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            <h3>{{person.name}}, {{person.major}} - {{person.education}}</h3>\r\n                            <h5>{{person.position}}</h5>\r\n                            <h5 style=\"color: rgb(18, 18, 124)\">{{person.university}}</h5>\r\n                            <p>{{person.email}}</p>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-md-2\">\r\n                            <!-- <a [href]=\"person.cv\" target=\"NEW\"><h5>CV</h5></a> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"text-align:justify\">\r\n                        <span [innerHTML]=\"person.description\"> </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"oldStudents.BSN.length\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                </div>\r\n            </div>\r\n            <div *ngFor=\"let person of oldStudents.BSN\" class=\"row\" style=\"padding:20px;\">\r\n                <div class=\"col-md-2\" style=\"text-align:center;\">\r\n                    <img [src]=\"person.image\" style=\"width: 100%; max-height: 200px; max-width: 200px;\">\r\n                </div>\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            <h3>{{person.name}}, {{person.major}} - {{person.education}}</h3>\r\n                            <h5>{{person.position}}</h5>\r\n                            <h5 style=\"color: rgb(18, 18, 124)\">{{person.university}}</h5>\r\n                            <p>{{person.email}}</p>\r\n                        </div>\r\n                        \r\n                        <div class=\"col-md-2\">\r\n                            <!-- <a [href]=\"person.cv\" target=\"NEW\"><h5>CV</h5></a> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\" style=\"text-align:justify\">\r\n                        <span [innerHTML]=\"person.description\"> </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.service */ "./src/app/about/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent(_globals, _EmpService) {
        this._globals = _globals;
        this._EmpService = _EmpService;
        this.employees = _EmpService.getEmployees();
        if (this.employees != null) {
            if (this.employees.Faculty != null) {
                this.faculty = this.employees.Faculty;
            }
            if (this.employees.Current != null) {
                this.current = this.employees.Current;
            }
            if (this.employees.Former != null) {
                this.oldStudents = this.employees.Former;
            }
        }
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"], _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/employee.service.ts":
/*!*******************************************!*\
  !*** ./src/app/about/employee.service.ts ***!
  \*******************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
    }
    EmployeeService.prototype.getEmployees = function () {
        return ({
            "Faculty": {
                "PHD": [
                    {
                        "name": "Francisco R. Ortega",
                        "education": "Ph. D.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Visiting Assistant Professor & Director of NUILab",
                        "email": "fortega@colostate.edu",
                        "university": "Colorado State University (Fort Collins, CO)",
                        "cv": "http://openhid.com/fortega/cv.pdf",
                        "website": "website",
                        "image": "assets/images/people/francisco-ortega2.jpg",
                        "description": "<p>Dr. Francisco R. Ortega is an Assistant Professor at Colorado State University. Dr. Ortega earned his Ph.D. in Computer Science (CS) in the field of Human-Computer Interaction (HCI) and 3D User Interfaces (3DUI) from Florida International University (FIU). He also hold a position of Post-Doc and Visiting Assistant Professor at FIU between February 2015 to July 2018. Broadly speaking, his research has focused on gesture interaction, which includes gesture recognition and elicitation. His main research area focuses on improving user interaction by (a) eliciting (hand and full-body) gesture sets by user elicitation, and (b) developing interactive gesture-recognition algorithms. His secondary research aims to discover how to increase interest for CS in non-CS entry-level college students via virtual and augmented reality games. His research has resulted in multiple peer-reviewed publications in venues such as ACM ISS, ACM SUI, and IEEE 3DUI, among others. He is the first-author of Interaction Design for 3D User Interfaces: The World of Modern Input Devices for Research, Applications, and Game Development book by CRC Press. Dr. Ortega serves as Vertically Integrated Projects coordinator that promotes applied research for undergraduate students across disciplines.<\/p> <p>Dr. Ortega is committed to teaching and integrating research in the classroom. He has taught multiple courses including CS capstone, Programming II (Java), Programming III (C), Operating Systems, Principles of Relational Database Management Systems (graduate), Network Management and Control Standards (graduate), Net-Centric (using Python), Web Application Programming, Website Management, and Construction, Windows Programming (C#), Digital Forensics, Advanced Digital Forensics (graduate), Advanced Ethical Hacking (graduate), and Practical Applied Security (graduate).<\/p>"
                    }
                ]
            },
            "Current": {
                "PHD": {},
                "MDS": [
                    {
                        "name": "Fernando de Zayas",
                        "education": "B.S.,M.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Graduate Research Assistant",
                        "email": "TBA",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/fernando-zayas.jpg",
                        "description": "Graduate research assistant."
                    }
                ],
                "BS": [
                    {
                        "name": "Seidan Jamides",
                        "education": "B.S.",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Assistant",
                        "email": "sjami006@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/seidan-jamides.jpg",
                        "description": "Seidan Jamides is an undergraduate research assistant majoring Computer Science. He is currently performing research in gesture elicitation."
                    },
                    {
                        "name": "Cristina Villarroel",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Assistant",
                        "email": "cvill141@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/cristina-villarroel.jpg",
                        "description": "Cristina Villarroel is an undergraduate research assistant collaborating with OpenHID research."
                    },
                    {
                        "name": "Pablo Mueller",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Assistant",
                        "email": "pmuel001@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/pablo-mueller.jpg",
                        "description": "Pablo Mueller is an undergraduate assistant researching gesture recognition."
                    },
                    {
                        "name": "Andy Pujol",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Assistant",
                        "email": "apujo010@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/andy-pujol.jpg",
                        "description": "Undergraduate research assistant majoring Computer Science."
                    },
                    {
                        "name": "Arelys Alvarez",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Assistant",
                        "email": "TBA",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/arelys-alvarez.jpg",
                        "description": "Undergraduate research assistant majoring Computer Science."
                    },
                    {
                        "name": "Santiago Bolivar",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Assistant",
                        "email": "sboli001@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/santiago-bolivar.jpg",
                        "description": "Santiago Bolivar is an undergraduate assistant researching about the impact of Computer Science to interest minorities on persuing the major."
                    },
                    {
                        "name": "Joseph Medina",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Assistant",
                        "email": "TBA",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/joseph-medina.jpg",
                        "description": "Undergraduate research assistant majoring Computer Science."
                    },
                    {
                        "name": "Jason Garcia",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Assistant",
                        "email": "TBA",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/jason-garcia.jpg",
                        "description": "Undergraduate research assistant majoring Computer Science."
                    },
                ],
                "BSN": [
                    {
                        "name": "Catherine Angelini",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Volunteer",
                        "email": "TBA",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/openhid-logo.png",
                        "description": "Undergraduate research volunteer majoring Computer Science."
                    },
                    {
                        "name": "Ciana Rogers",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Assistant",
                        "email": "TBA",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/openhid-logo.png",
                        "description": "Undergraduate research assistant majoring Computer Science."
                    },
                    {
                        "name": "Fidel Hernandez",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Assistant",
                        "email": "TBA",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/openhid-logo.png",
                        "description": "Undergraduate research assistant majoring Computer Science."
                    },
                    {
                        "name": "Vanesa Perez",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Assistant",
                        "email": "TBA",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/openhid-logo.png",
                        "description": "Undergraduate research assistant majoring Computer Science."
                    },
                    {
                        "name": "Edilmary Urdaneta",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Assistant",
                        "email": "eurda010@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/openhid-logo.png",
                        "description": "Undergraduate research assistant majoring Computer Science."
                    },
                    {
                        "name": "Maia Obregon",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Volunteer",
                        "email": "mzock001@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/openhid-logo.png",
                        "description": "Undergraduate research volunteer majoring Computer Science."
                    },
                    {
                        "name": "Jessica Silva",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Volunteer",
                        "email": "jsilv039@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/openhid-logo.png",
                        "description": "Undergraduate research volunteer majoring Computer Science."
                    }
                ],
                "BSCSU": //Have to come up with a way to make this more organized and streamlined
                [
                    {
                        "name": "Kellyn Dassler",
                        "education": "B.S.",
                        "universtiy": "Colorado State University",
                        "major": "Computer Science",
                        "position": "Undergraduate Research Assistant",
                        "email": "kellyndassler@gmail.com ",
                        "university": "Colorado State University (Fort Collins, CO)",
                        "website": "website",
                        "image": "assets/images/people/kellyn-dassler.jpg",
                        "description": "Undergraduate research assistant majoring Computer Science."
                    }
                ]
            },
            "Former": {
                "PHD": {},
                "MDS": [
                    {
                        "name": "Katherine Tarre",
                        "education": "B.S., M.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Statistics",
                        "position": "Ph.D. student at FIU with Dr. Naphtali D. Rishe",
                        "email": "ktarr007@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/katherine-tarre.jpg",
                        "description": "Katherine Tarre is an undergraduate research assistant majoring in Statistics and International Relations. Her work is primarily focused on experimental design and statistical analysis using various computer software. In her free time she enjoys reading and problem solving. Katherine Tarre is an undergraduate research assistant majoring in Statistics and International Relations. Her work is primarily focused on experimental design and statistical analysis using various computer software. In her free time she enjoys reading and problem solving."
                    },
                    {
                        "name": "Ruben Balcazar",
                        "education": "B.S.,M.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Biology, Computer Science",
                        "position": "Engineer at Ultimate Software (Former Graduate Research Assistant)",
                        "email": "rbalc001@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/ruben-balcazar.jpg",
                        "description": "Ruben Balcazar was a graduate research assistant for the OpenHID Lab. His contributions include Unity plugins for OpenHID compliant hardware."
                    },
                    {
                        "name": "Jules Calella",
                        "education": "B.S.,M.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Electrical Engineer",
                        "position": "Senior Electrical Engineer at BioBrace (Former Graduate Research Assistant)",
                        "email": "jcale004@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/jules-calella.jpg",
                        "description": "Jules Calella is a graduate research assistant. He has a primary interest is in electronics, with a focus in communications and digital electronics."
                    },
                    {
                        "name": "Mathew Kress",
                        "education": "B.S., M.S",
                        "universtiy": "Florida International Universty",
                        "major": "Software Engineering, Computer Engineering",
                        "position": "Former graduate Research Assistant",
                        "email": "mkres006@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/mathew-kress.jpg",
                        "description": "Mathew Kress is a graduate volunteer working on applications with the HTC Vive and Hololens."
                    }
                ],
                "BS": [
                    {
                        "name": "Alain Galvan",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Engineer at Marmoset Toolbag (Former Undergraduate Research Assistant)",
                        "email": "agalv023@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/alain-galvan.jpg",
                        "description": "Alain Galvan was a researcher focused on graphics programming, procedurally generated environments, and making tools for artists/musicians. He's been awarded in MLH Hackathons, Newgrounds, Codepen, among other venues."
                    },
                    {
                        "name": "Lukas Borges",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Engineer at Marmoset Toolbag (Former Undergraduate Research Assistant)",
                        "email": "lborg019@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/lukas-borges.jpg",
                        "description": "Lukas is an undergraduate focused on Augmented Reality and Game Development in Unity."
                    },
                    {
                        "name": "Jason Lee Thomas",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Senior Engineer at Citrix (Former Undergraduate Research Assistant)",
                        "email": "jasthoma@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/jason-lee-thomas.jpg",
                        "description": "Jason Lee Thomas was an undergraduate research assistant, who focused on low end C++ programming for the OpenHID Framework (TAMGeF)."
                    },
                    {
                        "name": "Jonathan Bernal",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Embeded Software Engineer at BioBrace (Former Undergraduate Gesture Research Assistant)",
                        "email": "jbern102@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/jonathan-bernal.jpg",
                        "description": "Jonathan F. Bernal was an undergraduate research assistant, currently conducting research on Human-computer Multimodal Interaction and Augmented and Mixed Reality. Jonathan was also part of the ARCH program of the FIU Honors College. His major hobbies are biking and drawing."
                    },
                    {
                        "name": "Luis Averhoff",
                        "education": "B.S.",
                        "universtiy": "Florida International Universty",
                        "major": "Computer Science",
                        "position": "Former Undergraduate Assistant",
                        "email": "laver008@fiu.edu",
                        "university": "Florida International University (Miami, FL)",
                        "website": "website",
                        "image": "assets/images/people/luis-averhoff.jpg",
                        "description": "Luis Averhoff was an undergraduate research assistant during fall 2017 until summer 2018."
                    }
                ],
                "BSN": []
            }
        });
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], EmployeeService);
    return EmployeeService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publications/publications.component */ "./src/app/publications/publications.component.ts");
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources/resources.component */ "./src/app/resources/resources.component.ts");
/* harmony import */ var _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teaching/teaching.component */ "./src/app/teaching/teaching.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Website main pages components







var routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'About', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'Contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'Projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
    { path: 'Publications', component: _publications_publications_component__WEBPACK_IMPORTED_MODULE_6__["PublicationsComponent"] },
    { path: 'Resources', component: _resources_resources_component__WEBPACK_IMPORTED_MODULE_7__["ResourcesComponent"] },
    { path: 'Teaching', component: _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_8__["TeachingComponent"] }
    //{ path: '**', component: NotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    border: 1px solid #e7e7e7;\r\n    background-color: #f3f3f3;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: #666;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #ddd;\r\n}\r\n\r\nli a.active {\r\n    color: white;\r\n    background-color: #1e4d2b;\r\n}\r\n\r\n.footer {\r\n    background: linear-gradient(rgba(217, 120, 45, 0.75) 0%, rgba(217, 120, 45, 0) 25%) #d9782d;\r\n    /* padding: 3em 1.618em; */\r\n    width: 100%;\r\n    text-align: center; }\r\n\r\n.footer hr {\r\n    border: 1px solid rgba(255, 255, 255, 0.1);\r\n    margin: 0 auto 1.5em;\r\n    width: 12em; \r\n}\r\n\r\n.footer p {\r\n    color: rgba(255, 255, 255, 0.4);\r\n    font-size: 0.9em;\r\n    line-height: 1.5em;\r\n    margin: auto;\r\n    max-width: 35em; \r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START FOOTER -->\r\n<div>\r\n  <menu-bar></menu-bar>\r\n</div>\r\n<!-- END FOOTER -->\r\n\r\n<!--START EACH PAGE CONTENT -->\r\n<router-outlet></router-outlet>\r\n<!-- END EACH PAGE CONTENT -->\r\n\r\n<!-- START FOOTER -->\r\n<div>\r\n  <footbar></footbar>\r\n</div>\r\n<!-- END FOOTER -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_globals, _router) {
        this._globals = _globals;
        this._router = _router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._router.navigate(['']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./publications/publications.component */ "./src/app/publications/publications.component.ts");
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resources/resources.component */ "./src/app/resources/resources.component.ts");
/* harmony import */ var _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./teaching/teaching.component */ "./src/app/teaching/teaching.component.ts");
/* harmony import */ var _other_menubar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./other/menubar.component */ "./src/app/other/menubar.component.ts");
/* harmony import */ var _other_footbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./other/footbar.component */ "./src/app/other/footbar.component.ts");
/* harmony import */ var _about_employee_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/employee.service */ "./src/app/about/employee.service.ts");
/* harmony import */ var _publications_publication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./publications/publication.service */ "./src/app/publications/publication.service.ts");
/* harmony import */ var _teaching_teaching_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./teaching/teaching.service */ "./src/app/teaching/teaching.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Routing Module to redirect pages

// Site Components













//Global variables

// Google Maps API

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                _publications_publications_component__WEBPACK_IMPORTED_MODULE_9__["PublicationsComponent"],
                _resources_resources_component__WEBPACK_IMPORTED_MODULE_10__["ResourcesComponent"],
                _teaching_teaching_component__WEBPACK_IMPORTED_MODULE_11__["TeachingComponent"],
                _other_menubar_component__WEBPACK_IMPORTED_MODULE_12__["MenubarComponent"],
                _other_footbar_component__WEBPACK_IMPORTED_MODULE_13__["FootbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_18__["AgmCoreModule"].forRoot({
                    apiKey: ' AIzaSyDZAsRcQHusi9gsviGBonQeststp3PQgDc '
                })
            ],
            providers: [
                _about_employee_service__WEBPACK_IMPORTED_MODULE_14__["EmployeeService"],
                _publications_publication_service__WEBPACK_IMPORTED_MODULE_15__["PublicationService"],
                _teaching_teaching_service__WEBPACK_IMPORTED_MODULE_16__["TeachService"],
                _globals__WEBPACK_IMPORTED_MODULE_17__["Globals"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 400px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Map here -->\r\n<!-- Key:  AIzaSyDZAsRcQHusi9gsviGBonQeststp3PQgDc   -->\r\n<div class=\"container\">\r\n    <div class=\"table\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <h1>Contact Us</h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                Computer Science Department\r\n                <br>279 Computer Science Building\r\n                <br>1100 Center Avenue Mall\r\n                <!-- Office: TBA -->\r\n                <br>Fort Collins, CO 80523\r\n                <!-- Phone Number: (970)-xxx-xxxx -->\r\n                <br><b>Email:</b> fortega@colostate.edu \r\n                <br><b>Computer Science Phone Number Phone:</b> (970) 491-5792\r\n                <br><b>Computer Science FAX: (970) 491-2466</b>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div style=\"align-content: center; height:450px;\" class=\"col-md-12\">\r\n                <iframe \r\n                    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.5918001318782!2d-105.08558228430793!3d40.57269075406271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87694a56c0fe863d%3A0x34cdac708b647feb!2s1100+Center+Ave+Mall%2C+Fort+Collins%2C+CO+80521!5e0!3m2!1sen!2sus!4v1531095678017\" \r\n                    width=\"100%\" \r\n                    height=\"100%\" \r\n                    frameborder=\"0\" \r\n                    style=\"border:0\" \r\n                    allowfullscreen>\r\n                </iframe>\r\n            </div>\r\n        </div>\r\n        <br>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = (function () {
    function Globals() {
        this.UniversityShort = 'CSU';
        this.LabShort = 'NUI';
        this.LabLong = 'Natural User Interaction';
        this.LabOldShort = 'OpenHID';
        this.LabOldLong = 'Open Human Interaction Design';
    }
    Globals = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\r\n    height: 100%;\r\n    background-color: steelblue;\r\n}\r\n\r\n/* The hero image */\r\n\r\n.hero-image {\r\n    /* The image used */\r\n    background-image: url(\"/../../assets/images/codevr-preview.png\");\r\n    /* /home/stonb/Workspace/openhid/src/assets/images/background.jpg */\r\n\r\n    /* Set a specific height */\r\n    height: 50%;\r\n\r\n    /* Position and center the image to scale nicely on all screens */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n}\r\n\r\n/* Place text in the middle of the image */\r\n\r\n.hero-text {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color: white;\r\n}\r\n\r\n.fullscreen-video {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    width: auto;\r\n    height: auto;\r\n    z-index: -100;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n            transform: translateX(-50%) translateY(-50%); }\r\n\r\n.openhid-logo {\r\n    display: block;\r\n    margin: 32px 0 16px 0;\r\n    min-width: 240px;\r\n    min-height: 200px;\r\n    z-index: 10;\r\n    background: url(\"/assets/images/general/openhid-logo.png\") no-repeat scroll center center/contain; }\r\n\r\n.fullscreen-video {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    width: auto;\r\n    height: auto;\r\n    z-index: -100;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n    transform: translateX(-50%) translateY(-50%); \r\n}\r\n\r\n.transparentBox{\r\n    display: flex;\r\n    justify-content: center;\r\n    min-height: calc(60% - 64px);\r\n    align-items: center;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    color: #fff;\r\n    text-shadow: 0 0 4px rgba(0,0,0,0.3);\r\n    padding-bottom: 32px;\r\n}\r\n\r\n.logoanimation {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin:-60px 0 0 -60px;\r\n    -webkit-animation:spin 4s linear infinite;\r\n    animation:spin 4s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }\r\n\r\n@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }\r\n\r\n.bannerParent{\r\n    position: absolute;\r\n    z-index: -10;\r\n}\r\n\r\n.contentSite{\r\n    background-color: white;\r\n    padding: 2em;\r\n}\r\n\r\n.clearContent{\r\n    text-align: center;\r\n    font-size: 2em;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table\">\r\n<div class=\"row\">\r\n<div class=\"col md-12\">\r\n\r\n<div class=\"bannerParent\">\r\n    <div class=\"bannerVideo\">\r\n        <video class=\"fullscreen-video\" autoplay=\"autoplay\" poster=\"/assets/videos/background.jpg\" loop=\"loop\">\r\n            <source src=\"/assets/videos/background.mp4\" type=\"video/mp4\">\r\n            <source src=\"/assets/videos/background.m4v\">\r\n            <source src=\"/assets/videos/background.webm\" type=\"video/webm\">\r\n            <source src=\"/assets/videos/background.ogv\" type=\"video/ogv\">\r\n        </video>\r\n    </div>\r\n\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"clearContent hero\">\r\n    <div class=\"table\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"openhid-logo\"></div>\r\n                <b style=\"font-weight: 1.5em;\">{{ _globals.LabShort }}</b> Lab\r\n                <br><a href=\"http://www.cs.colostate.edu/cstop/\">CSU's </a>{{ _globals.LabLong }} Lab\r\n                <br>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"contentSite\">\r\n    \r\n    <div class=\"container\">\r\n    <!-- Header -->\r\n    \r\n    \r\n    <!-- title -->\r\n\r\n    <!-- <div class=\"table\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"hero\">\r\n                    <h1><b style=\"font-weight: 800\">{{ _globals.LabShort }}</b> Lab</h1>\r\n                    <h2><a href=\"http://www.cs.colostate.edu/cstop/\">CSU's </a>{{ _globals.LabLong }} Lab</h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n    <br>\r\n    <!-- Content -->\r\n    <div>\r\n        <div class=\"table\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <img src=\"assets/images/general/proom.png\" style=\"max-width: 100%; max-height: 100%;\">\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <article>\r\n                        <h4>What is the {{ _globals.LabShort }} Lab?</h4>\r\n                        <p style=\"text-align:justify\">{{_globals.LabShort}} Lab, (Formerly known as {{_globals.LabOldShort}}), founded in January 2015, is dedicated to the research and development of 3D User Interfaces including selection, manipulation and navigation, Gesture User Interfaces including recognition and elicitation, Multi-Modal Interaction, and Virtual &amp; Augmented Reality, among other research interest we have. In general, we concentrate in the research of Gesture User Interfaces and how those along with other modalities may improve the user's interaction. We strive to advance Human-Centered Computing state of the art.</p>\r\n                        <p style=\"text-align:justify\">{{_globals.LabShort}} Lab was originally founded at Florida International University (with the initial help of FIU's High Performance Database Research Center) and now resides in its new home at Colorado State University in the Computer Science Department.  The lab founder and director is Francisco R. Ortega, Ph.D. </p>\r\n                    </article>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_globals) {
        this._globals = _globals;
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/other/footbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/other/footbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    background: linear-gradient(rgba(217, 120, 45, 0.75) 0%, rgba(217, 120, 45, 0) 25%) #d9782d;\r\n    padding: 3em 1.618em;\r\n    width: 100%;\r\n    text-align: center; }\r\n\r\n.footer hr {\r\n    border: 1px solid rgba(255, 255, 255, 0.1);\r\n    margin: 0 auto 1.5em;\r\n    width: 12em; \r\n}\r\n\r\n.footer p {\r\n    color: rgba(255, 255, 255, 0.4);\r\n    font-size: 0.9em;\r\n    line-height: 1.5em;\r\n    margin: auto;\r\n    max-width: 35em; \r\n}"

/***/ }),

/***/ "./src/app/other/footbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/other/footbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\"><a href=\"http://www.cs.colostate.edu/cstop/\"><img src=\"/assets/images/general/CSU_Logo.png\" alt=\"Logo image\" style=\"width: 240px\"></a>\r\n    <hr>\r\n    <p style=\"color:white;\">The {{_globals.LabShort }} lab is a member of the <br><a style=\"color: darkgreen;\" href=\"http://www.cs.colostate.edu/cstop/\">{{_globals.UniversityShort }}'s College of Computing Sciences</a></p>\r\n</footer>"

/***/ }),

/***/ "./src/app/other/footbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/other/footbar.component.ts ***!
  \********************************************/
/*! exports provided: FootbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootbarComponent", function() { return FootbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FootbarComponent = (function () {
    function FootbarComponent(_globals) {
        this._globals = _globals;
    }
    FootbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'footbar',
            template: __webpack_require__(/*! ./footbar.component.html */ "./src/app/other/footbar.component.html"),
            styles: [__webpack_require__(/*! ./footbar.component.css */ "./src/app/other/footbar.component.css")]
        }),
        __metadata("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"]])
    ], FootbarComponent);
    return FootbarComponent;
}());



/***/ }),

/***/ "./src/app/other/menubar.component.css":
/*!*********************************************!*\
  !*** ./src/app/other/menubar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    border: 1px solid #e7e7e7;\r\n    background-color: #f3f3f3;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: #666;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #ddd;\r\n}\r\n\r\nli a.active {\r\n    color: white;\r\n    background-color: #1e4d2b;\r\n}\r\n\r\n.HeaderLogo\r\n{\r\n    float: left;\r\n    height: 25px;\r\n}\r\n\r\n.HeaderText\r\n{\r\n    color: white;\r\n    font-size: 1em;\r\n}\r\n\r\n.HeaderLogoText\r\n{\r\n    background-color: darkgreen;\r\n}\r\n\r\n.HeaderLogoText a:hover\r\n{\r\n    background-color: darkgreen;\r\n}\r\n\r\n.abs-center-x {\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n}"

/***/ }),

/***/ "./src/app/other/menubar.component.html":
/*!**********************************************!*\
  !*** ./src/app/other/menubar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- NAVBAR STARTS -->\r\n<!-- <div class=\"container\">\r\n    <ul >\r\n      <li class=\"HeaderLogoText\">\r\n        <a [routerLink]=\"['/Home']\">\r\n          <img src=\"../../assets/images/general/openhid-logo.png\" class=\"HeaderLogo\">\r\n          &nbsp; <span class=\"HeaderText\"><b>NUI Labs</b></span>\r\n        </a>\r\n      </li>\r\n      <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>\r\n      <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/Home']\">Home</a></li>\r\n      <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/About']\">About Us</a></li>\r\n      <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/Projects']\">Projects</a></li>\r\n      <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/Contact']\">Contact</a></li>\r\n      <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/Publications']\">Publications</a></li>\r\n      <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/Resources']\">Resources</a></li>\r\n      <li><a href=\"https://users.cs.fiu.edu/~fortega/\">Teaching</a></li>\r\n      <li><a href=\"http://3dinputbook.com/\">Books</a></li>\r\n    </ul>\r\n</div> -->\r\n  <!-- NAVBAR ENDS -->\r\n\r\n  <!-- NEW NAV BAR START -->\r\n  <nav class=\"navbar navbar-expand-md navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/Home']\">NUI LAB</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavAltMarkup\">\r\n      <div class=\"navbar-nav\">\r\n        <a class=\"nav-item nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/Home']\">Home <span class=\"sr-only\">(current)</span></a>\r\n        <a class=\"nav-item nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/About']\">About Us</a>\r\n        <a class=\"nav-item nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/Projects']\">Projects</a>\r\n        <a class=\"nav-item nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/Publications']\">Publications</a>\r\n        <a class=\"nav-item nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/Contact']\">Contact</a>\r\n        <a class=\"nav-item nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/Resources']\">Resources</a>\r\n        <a class=\"nav-item nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/Teaching']\">Teaching</a>\r\n        <a class=\"nav-item nav-link\" href=\"http://3dinputbook.com/\" target=\"NEW\">Books</a>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- NEW NAV BAR END -->\r\n\r\n"

/***/ }),

/***/ "./src/app/other/menubar.component.ts":
/*!********************************************!*\
  !*** ./src/app/other/menubar.component.ts ***!
  \********************************************/
/*! exports provided: MenubarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubarComponent", function() { return MenubarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenubarComponent = (function () {
    function MenubarComponent() {
    }
    MenubarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu-bar',
            template: __webpack_require__(/*! ./menubar.component.html */ "./src/app/other/menubar.component.html"),
            styles: [__webpack_require__(/*! ./menubar.component.css */ "./src/app/other/menubar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenubarComponent);
    return MenubarComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.portrait {\r\n    height: 80px;\r\n    width: 30px;\r\n}\r\n\r\n.landscape {\r\n    height: 30px;\r\n    width: 80px;\r\n}\r\n\r\n.square {\r\n    height: 75px;\r\n    width: 75px;\r\n}"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Projects Container -->\r\n<div class=\"container\">\r\n    <div class=\"table\">\r\n        <!-- START CirGR Project -->\r\n        <div class=\"row\" style=\"background-color: rgba(235,235,235, 0.9); padding:20px\">\r\n            <div class=\"col-md-4 .portrait\">\r\n                <img src=\"assets/images/general/circgr-preview.png\">\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <h2>CircGR: Multi-touch Gesture Recognition</h2>\r\n                <h4><b>Complete</b></h4>\r\n                <h6>OpenHID Lab, HPDRC, among others</h6>\r\n                <h6><b>Balcazar, R., Ortega, F., Tarre, K., Barreto, A., Weiss, M., Rishe, N.</b></h6>\r\n                <p style = \"text-align: justify\">CircGR is a multi-touch non-symbolic gesture recognition algorithm, which utilizes circular statistic measures to implement linearithmic (O(n log n)) template-based matching. CircGR provides a solution to gesture designers, which allows for building complex multi-touch gestures with high- confidence accuracy. We demonstrated the algorithm and described a user study with 60 subjects and over 12,000 gestures collected for an original gesture set of 36. The accuracy is over 99% with the Matthews correlation coefficient of 0.95. In addition, early gesture detection was successful in CircGR as well.</p>\r\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://circgr.com\">Website</a>\r\n            </div>\r\n        </div>\r\n        <!-- END CirGR Project -->\r\n        <br>\r\n        <!-- START CodeVR Project -->\r\n        <div class=\"row\" style=\"padding:20px\">\r\n            <div class=\"col-md-4 .portrait\">\r\n                <img src=\"assets/images/general/codevr-preview.png\">\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <h2>CodeVR</h2>\r\n                <h4><b>In Progress</b></h4>\r\n                <h6>OpenHID Lab, HPDRC, among others</h6>\r\n                <h6><b>Ortega, Rishe, Galvan, Borges</b></h6>\r\n                <p style = \"text-align: justify\">This project seeks to improve Computer Science education using virtual reality for computer science students.</p>\r\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"https://github.com/openhid/code-vr\">Github</a>            \r\n            </div>\r\n        </div>\r\n        <!-- END CodeVR Project -->\r\n        <br>\r\n        <!-- START Multimodal Project -->\r\n        <div class=\"row\" style=\"background-color: rgba(235,235,235, 0.9); padding:20px\">\r\n            <div class=\"col-md-4 .portrait\">\r\n                <img src=\"assets/images/general/abstract_bg2.jpg\">\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <h2>Multimodal Gesture Recognition for Multi-touch and Pen</h2>\r\n                <h4><b>In Progress</b></h4>\r\n                <h6>OpenHID Lab, HPDRC, among others</h6>\r\n                <h6><b>Ortega, Rishe, Balcazar, Thomas, Galvan</b></h6>\r\n                <p style = \"text-align: justify\">This project seeks to find minimal features for gesture recognition in a multimodal environment using multitouch and pen, while keeping the complexity of of the implementation aligned with the $ (dollar) family algorithms.</p>\r\n                <!-- <a class=\"btn btn-success\" style=\"padding:6px\" href=\"https://github.com/openhid/code-vr\">Github</a>             -->\r\n            </div>\r\n        </div>\r\n        <!-- END Multimodal Project -->\r\n        <br>\r\n        <!-- START VR Programming Project -->\r\n        <div class=\"row\" style=\"padding:20px\">\r\n            <div class=\"col-md-4 .portrait\">\r\n                <img width=\"300\" height=\"200\" src=\"assets/images/general/abstract_bg4.jpg\">\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <h2>VR Programming Application</h2>\r\n                <h4><b>In Progress</b></h4>\r\n                <h6>OpenHID Lab, HPDRC, among others</h6>\r\n                <h6><b>Ortega, Rishe, Galvan</b></h6>\r\n                <p style = \"text-align: justify\">A VR programming application for increasing the number of women and minorities in computer science. </p>\r\n                <!-- <a class=\"btn btn-success\" style=\"padding:6px\" href=\"https://github.com/openhid/code-vr\">Github</a>             -->\r\n            </div>\r\n        </div>\r\n        <!-- END VR Programming Project -->\r\n        <br>\r\n        <!-- START Procedural Skybox Project -->\r\n        <div class=\"row\" style=\"background-color: rgba(235,235,235, 0.9); padding:20px\">\r\n            <div class=\"col-md-4 .portrait\">\r\n                <img src=\"assets/images/general/abstract_bg2.jpg\">\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <h2>Procedural Skybox Generation</h2>\r\n                <h4><b>Completed</b></h4>\r\n                <h6>OpenHID Lab, HPDRC, among others</h6>\r\n                <h6><b>Ortega, Rishe, Galvan</b></h6>\r\n                <p style = \"text-align: justify\">An algorithm for efficiently generating a physically correct space skybox for use in real time rendering.</p>\r\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://ieeexplore.ieee.org/abstract/document/7893331/\">IEEE Xplore</a>\r\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://openhid.com/assets/papers/gesture_elicitation_for_3d_travel_via_multi-touch_and_mid-air_systems_for_procedurally_generated_pseudo-universe.pdf\">PDF</a>\r\n            </div>\r\n        </div>\r\n        <!-- END Procedural Skybox Project -->\r\n        <br>\r\n        <!-- START Gesture Elicitation Project -->\r\n        <div class=\"row\" style=\"padding:20px\">\r\n            <div class=\"col-md-4 .portrait\">\r\n                <img src=\"assets/images/general/abstract_bg4.jpg\">\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <h2>Gesture Elicitation for 3D</h2>\r\n                <h4><b>Completed</b></h4>\r\n                <h6>OpenHID Lab, HPDRC, among others</h6>\r\n                <h6><b>(Hidden for Now)</b></h6>\r\n                <p style = \"text-align: justify\">This atempts to elicit gestures from multitouch/vision based cameras to study different aspects of travel and wayfinding.</p>\r\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://ieeexplore.ieee.org/abstract/document/7893331/\">IEEE Xplore</a>\r\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://openhid.com/assets/papers/gesture_elicitation_for_3d_travel_via_multi-touch_and_mid-air_systems_for_procedurally_generated_pseudo-universe.pdf\">PDF</a>\r\n            </div>\r\n        </div>\r\n        <!-- END Gesture Elicitation Project -->\r\n        <br>\r\n        <!-- START 3D Navigation Project -->\r\n        <div class=\"row\" style=\"background-color: rgba(235,235,235, 0.9); padding:20px\">\r\n            <div class=\"col-md-4 .portrait\">\r\n                <img src=\"assets/images/general/abstract_bg2.jpg\">\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <h2>3D Navigation (Using Multitouch Desktop Displays)</h2>\r\n                <h4><b>Completed</b></h4>\r\n                <h6>OpenHID Lab, HPDRC, among others</h6>\r\n                <h6><b>Ortega, Barreto, Rishe, Jennifer Fernadez, Christian Martinez, Jules Calella</b></h6>\r\n                <p style = \"text-align: justify\">This atempts to elicit gestures from multitouch/vision based cameras to study different aspects of travel and wayfinding.</p>\r\n                <!-- <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://openhid.com/assets/papers/gesture_elicitation_for_3d_travel_via_multi-touch_and_mid-air_systems_for_procedurally_generated_pseudo-universe.pdf\">PDF</a> -->\r\n            </div>\r\n        </div>\r\n        <!-- END 3D Navigation Project -->\r\n        <br>\r\n        <!-- START Smart Learning Desk Project -->\r\n        <div class=\"row\" style=\"padding:20px\">\r\n            <div class=\"col-md-4 .portrait\">\r\n                <img src=\"assets/images/general/abstract_bg4.jpg\">\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <h2>Smart Learning Desk</h2>\r\n                <h4><b>Completed</b></h4>\r\n                <h6>OpenHID Lab, HPDRC, among others</h6>\r\n                <h6><b>Ortega, Rishe, Emmanuel Norde, Bryan Rodriguez, Fernando Garcia, Juan Araguren, Galvan, Thomas, Balcazar</b></h6>\r\n                <p style = \"text-align: justify\">The Smart Learning Desk is currently being developed to integrate vision and touch targeted for the advancement of K-12 and college education.</p>\r\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"https://sites.google.com/site/vrkelvar/vr2016\">Webpage</a>\r\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"https://docs.google.com/viewer?a=v&amp;amp;pid=sites&amp;amp;srcid=ZGVmYXVsdGRvbWFpbnx2cmtlbHZhcnxneDoxZWUyMTc0YjgwNDZkYjQ4\">Google Docs</a>\r\n            </div>\r\n        </div>\r\n        <!-- END Smart Learning Desk Project -->\r\n        <br>\r\n        <!-- TAMGeF Project -->\r\n        <div class=\"row\" style=\"background-color: rgba(235,235,235, 0.9); padding:20px\">\r\n            <div class=\"col-md-4 .portrait\">\r\n                <img src=\"assets/images/general/abstract_bg2.jpg\">\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <h2>TAMGeF: Touch, midAir, and Motion Gesture Framework</h2>\r\n                <h4><b>In Progress</b></h4>\r\n                <h6>OpenHID Lab, HPDRC, among others</h6>\r\n                <h6><b>Ortega, Rishe, Thomas, Balcazar, Galvan</b></h6>\r\n                <p style = \"text-align: justify\">TAMGeF is a modern, parallel, template-based C++ API for multi-touch (and pen), mid-air (vision-based devices), and motion (e.g., gyroscope) devices with the purpose of recognizing multiple gestures.</p>\r\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"https://www.youtube.com/watch?v=PbSF8dhGgpA\"><i class=\"fa fa-youtube\"></i>YouTube</a>\r\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"https://dl.acm.org/citation.cfm?id=2794355\">ACM</a>\r\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://openhid.com/assets/papers/tamgef-_touch-midair-motion_framework_for_spatial_input.pdf\">PDF</a>\r\n            </div>\r\n        </div>\r\n        <!-- END TAMGeF Project -->\r\n        <br>\r\n        <!-- TAMGeF Project -->\r\n        <div class=\"row\" style=\"padding:20px\">\r\n            <div class=\"col-md-4 .portrait\">\r\n                <img src=\"assets/images/general/abstract_bg4.jpg\">\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <h2>Spider Sensor</h2>\r\n                <h4><b>Completed</b></h4>\r\n                <h6>OpenHID Lab, HPDRC, Calella, mong others</h6>\r\n                <h6><b>Ortega, Barreto, Rishe</b></h6>\r\n                <p style = \"text-align: justify\">The project covers the design of new hardware for motion sensing and the development of gesture algorithms for this type of sensor. </p>\r\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://ieeexplore.ieee.org/abstract/document/7808524/\">IEEE Xplore</a>\r\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://openhid.com/assets/papers/handmagic-_towards_user_interaction_with_inertial_measuring_units.pdf\">ABC</a>\r\n            </div>\r\n        </div>\r\n        <!-- END TAMGeF Project -->\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'project',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/publications/publication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/publications/publication.service.ts ***!
  \*****************************************************/
/*! exports provided: PublicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationService", function() { return PublicationService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PublicationService = (function () {
    function PublicationService(_http) {
        var _this = this;
        this._http = _http;
        this.getPublications = function () {
            console.log("In getConfiguration of ConfigurationService");
            return _this._http.get('../assets/json/publications.json ').map(function (res) { return res.json(); });
        };
    }
    PublicationService.prototype.getPublication = function () {
        return ({
            "RefereedJournals": [
                {
                    "name": "<b>Ortega, F.<\/b>, Tarre, K., Rishe, N., and Barreto, A., \"3D Navigation for 6DOF Using Multi-Touch vs. GamePad\", under submission in International Journal of HumanComputer Studies, 2017.",
                    "links": []
                },
                {
                    "name": "Cofino J., Barreto A., Abyarjoo F., and <b>Ortega, F.<\/b>, \"Sonically-Enhanced Tabular Screen-Reading\", Journal on Technology & Persons with Disabilities (JTPD),Vol. 2, pp. 46–57, 2014.",
                    "links": [
                        { "from": "SOAR", "url": "http://scholarworks.csun.edu/handle/10211.3/133374" },
                        { "from": "PDF", "url": "assets/papers/sonically-enhanced_tabular_screen-reading.pdf" }
                    ]
                },
                {
                    "name": "Ren P., Barreto A., Huang J., Gao Y., <b>Ortega, F.<\/b>, and Adjouadi, M., \"Off-line and On-line Stress Detection through Processing of the Pupil Diameter Signal.\" In Annals of Biomedical Engineering, vol. 42, no. 1, pp. 162–176, 2014.",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/article/10.1007/s10439-013-0880-9" },
                        { "from": "PDF", "url": "/assets/papers/off-line_and_on-line_stress_detection_through_processing_of_the_pupil_diameter_signal.pdf" }
                    ]
                }
            ],
            "RefereedConferences": [
                {
                    "name": "Balcazar, R., <b>Ortega, F.<\/b>, Tarre, K., Barreto, A., Weiss, M., Rishe, N., \"CircGR : Real-Time Multi-Touch Circular Gesture Recognition\", to appear in Proceedings of the 2017 ACM on Interactive Surfaces and Spaces (ISS ’17). Brighton, England.",
                    "links": []
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Galvan, A., Tarre, K., Barreto, A., Rishe, N., Bernal, J., Balcazar, R., and Thomas, J., \"Gesture Elicitation for 3D Travel via Multi-Touch and Mid-Air Systems for Procedurally Generated Pseudo-Universe.\" In 2017 IEEE Symposium on 3D User Interfaces (3DUI), Los Angeles, CA, 2017, pp 144–153.",
                    "links": [
                        { "from": "IEEE Xplore", "url": "https://link.springer.com/article/10.1007/s10439-013-0880-9" },
                        { "from": "PDF", "url": "assets/papers/gesture_elicitation_for_3d_travel_via_multi-touch_and_mid-air_systems_for_procedurally_generated_pseudo-universe.pdf" }
                    ]
                },
                {
                    "name": "Tangnimitchok, S., O-Larnnithipong, N., Barreto, A.,<b>Ortega, F.<\/b> R., and Rishe, N. D., \"Finding an Efficient Threshold for Fixation Detection in Eye Gaze Tracking.\" In International Conference on Human-Computer Interaction, Interaction Platforms and Techniques of the series Lecture Notes in Computer Science- Volume 9732, pp. 93-103, Springer-Verlag New York, Inc., Jul. 2016. ",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/chapter/10.1007/978-3-319-39516-6_9" },
                        { "from": "PDF", "url": "assets/papers/finding_an_efficient_threshold_for_fixation_detection_in_eye_gaze_tracking.pdf" }
                    ]
                },
                {
                    "name": "Abyarjoo, F., O-Larnnithipong, N., Tangnimitchok, S., Adjouadi, M., <b>Ortega, F.<\/b>, and Barreto, A., \"PostureMonitor: Real-Time IMU Wearable Technology to Foster Poise and Health.\" In International Conference of Design, User Experience, and Usability of the series Lecture Notes in Computer Science, vol. 9188, Springer International Publishing, pp 543–552, Aug. 2015.",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/chapter/10.1007/978-3-319-20889-3_50" },
                        { "from": "PDF", "url": "assets/papers/posturemonitor-_real-time_imu_wearable_technology_to_foster_poise_and_health.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., Adjouadi, M., Abyarjoo, F., and O-Larnnithipong, N., \"GyroTouch: Wrist Gyroscope with a Multi-Touch Display.\" In International Conference on Human-Computer Interaction, Human-Computer Interaction: Interaction Technologies of the series Lecture Notes in Computer Science, vol. 9170, pp. 262–270, Springer International Publishing, Aug. 2015.",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/chapter/10.1007/978-3-319-20916-6_25" },
                        { "from": "PDF", "url": "assets/papers/gyrotouch-_wrist_gyroscope_with_a_multi-touch_display.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., Adjouadi, M., and Abyarjoo, F., \"Multi-Touch Gesture Recognition Using Feature Extraction.\" In Innovations and Advances in Computing, Informatics, Systems Sciences, Networking and Engineering of the series Lecture Notes in Electrical Engineering, vol. 313, pp. 291–296, Springer International Publishing, 2015. ",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/chapter/10.1007/978-3-319-06773-5_39" },
                        { "from": "PDF", "url": "assets/papers/multi-touch_gesture_recognition_using_feature_extraction.pdf" }
                    ]
                },
                {
                    "name": "Abyarjoo, F., Barreto, A., Cofino, J., and <b>Ortega, F.<\/b>, \"Implementing a Sensor Fusion Algorithm for 3D Orientation Detection with Inertial/Magnetic Sensors.\" In Innovations and Advances in Computing, Informatics, Systems Sciences, Networking and Engineering of the series Lecture Notes in Electrical Engineering, vol. 313, pp. 305–310, Springer International Publishing, 2015.",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/chapter/10.1007/978-3-319-06773-5_41" },
                        { "from": "PDF", "url": "assets/papers/implementing_a_sensor_fusion_algorithm_for_3d_orientation_detection_with_inertial_magnetic_sensors.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Liu, S., Hernandez, F., Barreto, A., Rishe, N., and Adjouadi, M., \"PeNTa: Multi-Touch Modeling using Petri Nets.\" In International Conference on Human-Computer Interaction, Human-Computer Interaction: Theories, Methods, and Tools of the series Lecture Notes in Computer Science, HCI International 2014), vol 8510, pages 361–372. Springer International Publishing, June 2014.",
                    "links": []
                },
                {
                    "name": "Cofino, J., Barreto, A., Abyarjoo, F., and <b>Ortega, F.<\/b>, \"Sonifying HTML Tables for Audio-Spatially Enhanced Non-Visual Navigation.\" In IEEE SoutheastCon, 2013 Proceedings of IEEE, Jacksonville, FL, pp. 1–5, 2013.",
                    "links": [
                        { "from": "IEEE Xplore", "url": "http://ieeexplore.ieee.org/abstract/document/6567417/" },
                        { "from": "PDF", "url": "assets/papers/sonifying_html_tables_for_audio-spatially_enhanced_non-visual_navigation.pdf" }
                    ]
                },
                {
                    "name": "Abyarjoo, F., Barreto, A., Abyarjoo, S., <b>Ortega, F.<\/b>, and Cofino, J., \"Monitoring Human Wrist Rotation in Three Degrees of Freedom.\" In IEEE SoutheastCon, 2013 Proceedings of IEEE, Jacksonville, FL, pp. 1–5, 2013.",
                    "links": [
                        { "from": "IEEE Xplore", "url": "http://ieeexplore.ieee.org/abstract/document/6567517/" },
                        { "from": "PDF", "url": "assets/papers/monitoring_human_wrist_rotation_in_three_degrees_of_freedom.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., and Adjouadi, M., \"Interaction with 3D Environments Using Multi-Touch Screens.\" In Innovations and Advances in Computer, Information, Systems Sciences, and Engineering of the series Lecture Notes in Electrical Engineering, vol. 152, pp. 381–392, CISSE. Springer, New York, 2013.",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/chapter/10.1007%2F978-1-4614-3535-8_33" },
                        { "from": "PDF", "url": "assets/papers/interaction_with_3d_environments_using_multi-touch_screens.pdf" }
                    ]
                },
                {
                    "name": "Wu, Y., Hernandez, F., <b>Ortega, F.<\/b>, Clarke, P., and France, R., \"Measuring the Effort for Creating and Using Domain-Specific Models.\" In Proceedings of the 10th Workshop on Domain-Specific Modeling (DSM ’10). ACM, New York, NY, USA, article 14, pages 6, 2010.",
                    "links": [
                        { "from": "ACM", "url": "https://dl.acm.org/citation.cfm?id=2060360" },
                        { "from": "PDF", "url": "assets/papers/measuring_the_effort_for_creating_and_using_domain-specific_models.pdf" }
                    ]
                },
                {
                    "name": "Verhoef, T., Lisetti, C., Barreto, A., <b>Ortega, F.<\/b>, Van der Zant, T., and Cnossen, F., \"Bio-sensing for Emotional Characterization without Word Labels.\" In Human-Computer Interaction. Ambient, Ubiquitous and Intelligent Interaction, 13th International Conference, HCI International. LNCS 5612, pp. 693–702, 2009.",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/chapter/10.1007/978-3-642-02580-8_76" },
                        { "from": "PDF", "url": "assets/papers/bio-sensing_for_emotional_characterization_without_word_labels.pdf" }
                    ]
                }
            ],
            "Workshop": [
                {
                    "name": "<b>Ortega, F.<\/b>, Jamides, S., Barreto, A., and Rishe, N., \"The Tabletop is dead. Long Live the Tabletop!\", to appear in The Disappearing Tabletop: Social and Technical Challenges for Cross-Surface Collaboration workshop on Interactive Surfaces and Spaces (ISS ’17).",
                    "links": []
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Bolivar, S., Bernal, J., Galvan, A., Tarre, K., Rishe, N., and Barreto, A., Twards a 3D Virtual Programming Language to Increase the Number of Women in Computer Science Education.\" In 2017 IEEE Virtual Reality Workshop on K-12 Embodied Learning through Virtual &amp; Augmented Reality (KELVAR), Los Angeles, CA. pp. 1–6.",
                    "links": [
                        { "from": "IEEE Xplore", "url": "http://ieeexplore.ieee.org/abstract/document/7961558/" },
                        { "from": "PDF", "url": "/assets/papers/towards_a_3d_virtual_programming_language_to_increase_the_number_of_women_in_computer_science_education.pdf" }
                    ]
                },
                {
                    "name": "Galvan, A., <b>Ortega<\/b>, F., and Rishe, N., \"Procedural Celestial Rendering for 3D Navigation.\" In 2017 IEEE Symposium on 3D User Interfaces (3DUI), Los Angeles, CA. 2017. pp. 211–212. ",
                    "links": [
                        { "from": "IEEE Xplore", "url": "http://ieeexplore.ieee.org/abstract/document/7893346/" },
                        { "from": "PDF", "url": "/assets/papers/procedural_celestial_rendering_for_3d_navigation.pdf" }
                    ]
                },
                {
                    "name": "Calella, J., <b>Ortega, F.<\/b>, Rishe, N., Barreto, A., and Bernal, J., \"HandMagic: Towards User Interaction with Inertial Measuring Units.\" In 2016 IEEE SENSORS. Orlando, FL. 2016, pp. 1-3.",
                    "links": [
                        { "from": "IEEE Xplore", "url": "http://ieeexplore.ieee.org/abstract/document/7808524/" },
                        { "from": "PDF", "url": "/assets/papers/handmagic-_towards_user_interaction_with_inertial_measuring_units.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Balcazar, R., Barreto, A., and Rishe, N., \"Smart Learning Desk: Towards an Interactive Classroom.\" In IEEE Virtual Reality 2016 Workshop on K-12 Embodied Learning through Virtual & Augmented Reality (KELVAR ’16), Mar. 2016.",
                    "links": [
                        { "from": "WEBPAGE", "url": "https://sites.google.com/site/vrkelvar/vr2016" },
                        { "from": "GOOGLE DOC", "url": "https://docs.google.com/viewer?a=v&amp;amp;pid=sites&amp;amp;srcid=ZGVmYXVsdGRvbWFpbnx2cmtlbHZhcnxneDoxZWUyMTc0YjgwNDZkYjQ4" }
                    ]
                },
                {
                    "name": "Vassigh, S., Elias, A.,<b> Ortega, F.<\/b>, Davis, D., Gallardo, G., Alhaffar, H., Borges, L., Bernal, J., and Rishe, N., \"Integrating Building Information Modeling with Augmented Reality for Interdisciplinary Learning.\" In Mixed and Augmented Reality (ISMAR-Adjunct), 2016 IEEE International Symposium on, pp. 260–261, IEEE, 2016.",
                    "links": [
                        { "from": "IEEE Xplore", "url": "http://ieeexplore.ieee.org/abstract/document/7836510/" },
                        { "from": "PDF", "url": "/assets/papers/integrating_building_information_modeling_with_augmented_reality_for_interdisciplinary_learning.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Rishe, N., and Barreto, A., \"TAMGeF: Touch-midAir-Motion Framework for Spatial Input.\" In Proceedings of the 3rd ACM Symposium on Spatial User Interaction (SUI ’15). ACM, New York, NY, USA, pp. 136, 2015.",
                    "links": [
                        { "from": "ACM", "url": "https://dl.acm.org/citation.cfm?id=2794355" },
                        { "from": "PDF", "url": "/assets/papers/tamgef-_touch-midair-motion_framework_for_spatial_input.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., Adjouadi, M., and Liu, S., \"Exploring Modeling Language for Multi-Touch Systems Using Petri Nets.\" In Proceedings of the 2013 ACM International Conference on Interactive Tabletops and Surfaces (ITS ’13), ACM, New York, NY, USA. pp. 361–364. 2013.",
                    "links": [
                        { "from": "ACM", "url": "https://dl.acm.org/citation.cfm?id=2512400" },
                        { "from": "PDF", "url": "/assets/papers/exploring_modeling_language_for_multi-touch_systems_using_petri_nets.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., and Rishe, N., \"Augmenting Multi-Touch with Commodity Devices.\" In Proceedings of the 1st Symposium on Spatial User Interaction (SUI 13). ACM, New York, NY, USA, p. 95. 2013.",
                    "links": [
                        { "from": "ACM", "url": "https://dl.acm.org/citation.cfm?id=2491399" },
                        { "from": "PDF", "url": "/assets/papers/augmenting_multi-touch_with_commodity_devices.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N. and Adjouadi, M., and Abyarjoo, F., \"Poster: Real-Time Gesture Detection for Multi-Touch Devices.\" In IEEE 8th Symposium on 3D User Interfaces, pp. 167-168. 2013.",
                    "links": []
                },
                {
                    "name": "Hernandez, H.,<b> Ortega, F.<\/b>, \"Eberos GML2D: A Graphical Domain-Specific Language for Modeling 2D Video Games.\" In Proceedings of the 10th Workshop on Domain-Specific Modeling (DSM ’10). ACM, New York, NY, USA, article 4, pages 6, 2010.",
                    "links": [
                        { "from": "Citeseerx", "url": "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.682.9199" },
                        { "from": "PDF", "url": "/assets/papers/A_Graphical_Domain-Specific_Language_for_Modeling_2D_Video_Games.pdf" }
                    ]
                }
            ],
            "Other": [
                {
                    "name": "Aazhang, B., Abler, R. T., Allebach, J. P., Bost, L. F., Cavallaro, J. R., Chong, E. K. P., Coyle, E. J., Cullers, J. B. S., Dennis, S. M., Dong, Y., Enjeti, P. N., Filippas, A. V., Froyd, J. E., Garmire, D., George, J., Gilchrist, B. E., Hohner, G. S., Hughes, W. L., Johnson, A., Kim, C., Kim, H., Klenke, R. H., Lagoudas, M. Z., Llewellyn, D. C., Lu, Y., Lybarger, K. J., Marshall, S., Muralidharan, S., Ohta, A. T.,<b> Ortega, F. R.<\/b>, Riskin, E. A., Rizzo, D. M., Ryder, C. R., Shiroma, W. A., Siller, T. J., Sonnenberg-Klein, J., Sadjadi, S. M., Strachan, S. M., Taheri, M., Woods, G. L., Zoltowski, C. B., Fabien, B. C., Johnson, P., Collins, R., and Murray, P. \"Vertically Integrated Projects (VIP) Programs: Multidisciplinary Projects with Homes in Any Discipline\" In 2017 ASEE Annual Conference & Exposition, Columbus, Ohio. June, 2017.",
                    "links": [
                        { "from": "ASEE Peer", "url": "https://peer.asee.org/29103" }
                    ]
                }
            ],
            "Books": [
                {
                    "name": "<b>Ortega, F.<\/b>, Rishe, N., and Barreto, A., 3D Multimodal interaction: With an Input Perspective, CRC Press/AK Peters book. New York, NY. 2018.",
                    "links": []
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Rishe, N., and Barreto, A., Multi-Touch: Gesture Recognition, Elicitation, and More, CRC Press/AK Peters book. New York, NY. 2018.",
                    "links": []
                },
                {
                    "name": "<b>Ortega, F<\/b>. Abyarjoo, F., Barreto, A., Rishe, N., and Adjouadi, M., Interaction design for 3D user interfaces: the world of modern input devices for research, applications, and game development. CRC Press/AK Peters, New York, NY, 2016.",
                    "links": []
                }
            ],
            "BookChapters": [
                {
                    "name": "Hernandez, H.,<b> Ortega, F.<\/b>, \"Reducing Video Game Creation Effort with Eberos GML2D.\" Chapter in Game Development Tools Books edited by Marwan Y. Ansari. AK Peters/CRC Press. New York, NY, 2011.",
                    "links": []
                }
            ],
            "NonRefeered": [
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., and Adjouadi, M., \"Towards 3D Data Environments Using Multi-Touch Screens.\" In ACHI 2012: The Fifth International Conference on Advances in Computer-Human Interactions, pp. 118–121, 2012.",
                    "links": [
                        { "from": "Citeseerx", "url": "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.683.4461" },
                        { "from": "PDF", "url": "/assets/papers/towards_3d_data_environments_using_multi-touch_screens.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., Adjoudi, M., and Abyarjoo, F., \"GyroTouch: Complementing the Multi-Touch Display.\" In ACM Richard Tapia Celebration of Diversity in Computing, 2014.",
                    "links": [
                        { "from": "Citeseerx", "url": "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.707.8806" },
                        { "from": "PDF", "url": "/assets/papers/gyrotouch-_complementing_the_multi-touch_display.pdf" }
                    ]
                },
                {
                    "name": "Cofino, J., Barreto, A., Abyarjoo, F., and <b>Ortega, F.<\/b>, \"B.A.S.S. Blind-Assistive Spatialized Screen-reading.\" In ACM Richard Tapia Celebration of Diversity in Computing, 2014.",
                    "links": [
                        { "from": "FIU Digital Commons", "url": "http://digitalcommons.fiu.edu/etd/1570/" }
                    ]
                }
            ]
        });
    };
    PublicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], PublicationService);
    return PublicationService;
}());



/***/ }),

/***/ "./src/app/publications/publications.component.css":
/*!*********************************************************!*\
  !*** ./src/app/publications/publications.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pub {\r\n    padding: 10px;\r\n    min-height: 100px;\r\n}"

/***/ }),

/***/ "./src/app/publications/publications.component.html":
/*!**********************************************************!*\
  !*** ./src/app/publications/publications.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br>\r\n    <h1 style=\"text-align: center;\">Publications</h1>\r\n    <div class=\"table\">\r\n        <div *ngIf=\"!publications.RefeeredJournals\" class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <!-- Start Refeered Journals -->\r\n                <div class=\"row\">\r\n                    <div class=\"com-md-12\"><h3>Refereed Journals</h3></div>\r\n                </div>\r\n                \r\n                <div *ngFor=\"let pub of publications.RefereedJournals\" class=\"row\">\r\n                    <div class=\"col-md-12 pub\">\r\n                        <div class=\"row\">\r\n                           <div class=\"col-md-12\" style=\"text-align: justify\">\r\n                                {{getCounter()}}.&nbsp;<span [innerHTML]=\"pub.name\"></span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div *ngIf=\"pub.links\" class=\"col-md-4\">\r\n                                <span *ngFor=\"let link of pub.links\">\r\n                                    [<a [attr.href]=\"link.url\">{{link.from}}</a>]\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-md-8\">\r\n                                <!-- empty div -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- End Refeered Journals -->\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"publications.RefereedConferences\" class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <!-- Start Refereed Conferences -->\r\n                <div class=\"row\">\r\n                    <div class=\"com-md-12\"><h3>Refereed Conferences</h3></div>\r\n                </div>\r\n                                \r\n                <div *ngFor=\"let pub of publications.RefereedConferences\" class=\"row\">\r\n                    <div class=\"col-md-12 pub\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\" style=\"text-align: justify\">\r\n                                {{getCounter()}}.&nbsp;<span [innerHTML]=\"pub.name\"></span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div *ngIf=\"pub.links\" class=\"col-md-4\">\r\n                                <span *ngFor=\"let link of pub.links\">\r\n                                    [<a [attr.href]=\"link.url\">{{link.from}}</a>]\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-md-8\">\r\n                                <!-- empty div -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- End Refeered Journals -->\r\n            </div>\r\n        </div>\r\n        \r\n        <div *ngIf=\"publications.Workshop\" class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <!-- Start Workshop and Poster -->\r\n                <h3>Workshop and Poster Refereed Papers</h3>\r\n                \r\n                <div *ngFor=\"let pub of publications.Workshop\" class=\"row\">\r\n                    <div class=\"col-md-12 pub\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\" style=\"text-align: justify\">\r\n                                {{getCounter()}}.&nbsp;<span [innerHTML]=\"pub.name\"></span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div *ngIf=\"pub.links\" class=\"col-md-4\">\r\n                                <span *ngFor=\"let link of pub.links\">\r\n                                    [<a [attr.href]=\"link.url\">{{link.from}}</a>]\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-md-8\">\r\n                                <!-- empty div -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- End Workshop and Poster -->\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"publications.Other\" class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <!-- Start Other Referred Papers -->\r\n                <h3>Other Referred Papers</h3>\r\n                \r\n                <div *ngFor=\"let pub of publications.Other\" class=\"row\">\r\n                    <div class=\"col-md-12 pub\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\" style=\"text-align: justify\">\r\n                                {{getCounter()}}.&nbsp;<span [innerHTML]=\"pub.name\"></span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div *ngIf=\"pub.links\" class=\"col-md-4\">\r\n                                <span *ngFor=\"let link of pub.links\">\r\n                                    [<a [attr.href]=\"link.url\">{{link.from}}</a>]\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-md-8\">\r\n                                <!-- empty div -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- End Other Referred Papers -->\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"publications.Books\" class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <!-- Start Books -->\r\n                <h3>Books</h3>\r\n                \r\n                <div *ngFor=\"let pub of publications.Books\" class=\"row\">\r\n                    <div class=\"col-md-12 pub\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\" style=\"text-align: justify\">\r\n                                {{getCounter()}}.&nbsp;<span [innerHTML]=\"pub.name\"></span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div *ngIf=\"pub.links\" class=\"col-md-4\">\r\n                                <span *ngFor=\"let link of pub.links\">\r\n                                    [<a [attr.href]=\"link.url\">{{link.from}}</a>]\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-md-8\">\r\n                                <!-- empty div -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- End Books -->\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"publications.BookChapters\" class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <!-- Start Book Chapters -->\r\n                <h3>Book Chapters</h3>\r\n                \r\n                <div *ngFor=\"let pub of publications.BookChapters\" class=\"row\">\r\n                    <div class=\"col-md-12 pub\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\" style=\"text-align: justify\">\r\n                                {{getCounter()}}.&nbsp;<span [innerHTML]=\"pub.name\"></span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div *ngIf=\"pub.links\" class=\"col-md-4\">\r\n                                <span *ngFor=\"let link of pub.links\">\r\n                                    [<a [attr.href]=\"link.url\">{{link.from}}</a>]\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-md-8\">\r\n                                <!-- empty div -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- End Book Chapters -->\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"publications.NonRefeered\" class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <!-- Start Non-refereed Papers -->\r\n                <h3>Non-refereed Papers</h3>\r\n                \r\n                <div *ngFor=\"let pub of publications.NonRefeered\" class=\"row\">\r\n                    <div class=\"col-md-12 pub\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\" style=\"text-align: justify\">\r\n                                {{getCounter()}}.&nbsp;<span [innerHTML]=\"pub.name\"></span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div *ngIf=\"pub.links\" class=\"col-md-4\">\r\n                                <span *ngFor=\"let link of pub.links\">\r\n                                    [<a [attr.href]=\"link.url\">{{link.from}}</a>]\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-md-8\">\r\n                                <!-- empty div -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- End Non-refereed Papers -->\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/publications/publications.component.ts":
/*!********************************************************!*\
  !*** ./src/app/publications/publications.component.ts ***!
  \********************************************************/
/*! exports provided: PublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function() { return PublicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _publication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publication.service */ "./src/app/publications/publication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicationsComponent = (function () {
    function PublicationsComponent(_PubService) {
        this._PubService = _PubService;
        this.index = 0;
        this.publications = _PubService.getPublication();
        this.index = 0;
    }
    PublicationsComponent.prototype.IncreseCounter = function () {
        this.index++;
    };
    PublicationsComponent.prototype.getCounter = function () {
        this.IncreseCounter();
        return this.index;
    };
    PublicationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'publications',
            template: __webpack_require__(/*! ./publications.component.html */ "./src/app/publications/publications.component.html"),
            styles: [__webpack_require__(/*! ./publications.component.css */ "./src/app/publications/publications.component.css")]
        }),
        __metadata("design:paramtypes", [_publication_service__WEBPACK_IMPORTED_MODULE_1__["PublicationService"]])
    ], PublicationsComponent);
    return PublicationsComponent;
}());



/***/ }),

/***/ "./src/app/resources/resources.component.css":
/*!***************************************************!*\
  !*** ./src/app/resources/resources.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ResourceSize{\r\n    height: 150 px;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.refImg{\r\n    max-height: 80 px;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    max-height: 120px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.portrait {\r\n    height: 80px;\r\n    width: 30px;\r\n}\r\n\r\n.landscape {\r\n    height: 30px;\r\n    width: 80px;\r\n}\r\n\r\n.square {\r\n    height: 75px;\r\n    width: 75px;\r\n}"

/***/ }),

/***/ "./src/app/resources/resources.component.html":
/*!****************************************************!*\
  !*** ./src/app/resources/resources.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <h1 class>RESOUCES</h1>\r\n\r\n    <div class=\"table\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h3>Links</h3>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <ul>\r\n                    <li><a href=\"https://www.una.edu/writingcenter/docs/Writing-Resources/Comparing%20the%20Annotated%20Bibliography%20to%20the%20Literature%20Review.pdf\">Comparing the Annotated Bibliography to the Literature Review </a></li>\r\n                    <li><a href=\"https://users.ece.cmu.edu/~koopman/essays/abstract.html\">How to Write an Abstract Philip Koopman</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h3>Conferences</h3>\r\n                <br>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row ResourceSize\">\r\n            <div class=\"col-md-3 ResourceSize\">\r\n                <a href=\"http://www.siggraph.org/\"><img class=\"refImg\" src=\"/assets/conferences/acm-siggraph.svg\"></a>\r\n            </div>\r\n            <div class=\"col-md-3 ResourceSize\">\r\n                <a href=\"http://www.ieee.org/conferences_events/index.html\"><img class=\"refImg\" src=\"/assets/conferences/ieee.svg\"></a>\r\n            </div>\r\n            <div class=\"col-md-3 ResourceSize\">\r\n                <a href=\"https://chi2016.acm.org/wp/\"><img class=\"refImg\" src=\"/assets/conferences/chi.svg\"></a>\r\n            </div>\r\n            <div class=\"col-md-3 ResourceSize\">\r\n                <a href=\"https://cscw.acm.org/2017/\"><img class=\"refImg\" src=\"/assets/conferences/cscw.png\"></a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 ResourceSize\">\r\n                <a href=\"http://sui-symposium.org/\"><img src=\"/assets/conferences/sui.svg\"></a>\r\n            </div>\r\n            <div class=\"col-md-3 ResourceSize\">\r\n                <a href=\"http://3dui.org/\"><img src=\"/assets/conferences/3dui.png\"></a>\r\n            </div>\r\n            <div class=\"col-md-3\"></div>\r\n        </div>\r\n        <br>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/resources/resources.component.ts":
/*!**************************************************!*\
  !*** ./src/app/resources/resources.component.ts ***!
  \**************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourcesComponent = (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'resources',
            template: __webpack_require__(/*! ./resources.component.html */ "./src/app/resources/resources.component.html"),
            styles: [__webpack_require__(/*! ./resources.component.css */ "./src/app/resources/resources.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/app/teaching/teaching.component.css":
/*!*************************************************!*\
  !*** ./src/app/teaching/teaching.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centerTitles{\r\n    text-align:center;\r\n}\r\n\r\n.classTitle{\r\n    font-size: 1.5em;\r\n}"

/***/ }),

/***/ "./src/app/teaching/teaching.component.html":
/*!**************************************************!*\
  !*** ./src/app/teaching/teaching.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Title container -->\r\n<br>\r\n<div class=\"container\">\r\n    <h1 class=\"centerTitles\">Classes</h1>\r\n</div>\r\n<div class=\"container\">\r\n    <br><hr><br>\r\n</div>\r\n\r\n<!-- Classes Container -->\r\n<div class=\"container\">\r\n    <div class=\"table\">\r\n\r\n        <!-- Fall classes div -->\r\n        <div *ngIf=\"myClasses.Semesters.Fall2018.length\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md 12\">\r\n                    <h2>Fall 2018</h2>\r\n                </div>\r\n            </div>\r\n            \r\n            <br><hr><br>\r\n\r\n            <!-- Classes Fall Div -->\r\n            <div *ngFor=\"let class of myClasses.Semesters.Fall2018\" class=\"row\">\r\n                <div class=\"col-md-1\"></div>    \r\n                <div class=\"col-md-10\">\r\n                    <b class=\"classTitle\">{{class.code}}:&nbsp;{{class.name}}</b>\r\n                    <br>\r\n                    <b>Description:</b>&nbsp;{{class.description}}\r\n                    <br>\r\n                    <span *ngIf=\"class.isLink\">\r\n                        <a [attr.href]=\"class.link\">{{class.code}} Website</a>\r\n                    </span>\r\n                </div>\r\n                <div class=\"col-md-1\"></div>\r\n            </div>\r\n        </div>\r\n\r\n        <br><hr><br>\r\n        \r\n        <!-- Spring classes div -->\r\n        <div *ngIf=\"myClasses.Semesters.Spring2019.length\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md 12\">\r\n                    <h2>Spring 2019</h2>\r\n                </div>\r\n            </div>\r\n\r\n            <br><hr><br>\r\n            \r\n            <!-- Classes Spring Div -->\r\n            <div *ngFor=\"let class of myClasses.Semesters.Spring2019\" class=\"row\">\r\n                <div class=\"col-md-1\"></div>    \r\n                <div class=\"col-md-10\">\r\n                    <b class=\"classTitle\">{{class.code}}:&nbsp;{{class.name}}</b>\r\n                    <br>\r\n                    <b>Description:</b>&nbsp;{{class.description}}\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <span *ngIf=\"class.isLink\">\r\n                        <a [attr.href]=\"class.link\">{{class.code}} Website</a>\r\n                    </span>\r\n                </div>\r\n                <div class=\"col-md-1\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/teaching/teaching.component.ts":
/*!************************************************!*\
  !*** ./src/app/teaching/teaching.component.ts ***!
  \************************************************/
/*! exports provided: TeachingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingComponent", function() { return TeachingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _teaching_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teaching.service */ "./src/app/teaching/teaching.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeachingComponent = (function () {
    function TeachingComponent(_classes) {
        this._classes = _classes;
        this.myClasses = _classes.getClasses();
        console.log(this.myClasses);
    }
    TeachingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'teaching',
            template: __webpack_require__(/*! ./teaching.component.html */ "./src/app/teaching/teaching.component.html"),
            styles: [__webpack_require__(/*! ./teaching.component.css */ "./src/app/teaching/teaching.component.css")]
        }),
        __metadata("design:paramtypes", [_teaching_service__WEBPACK_IMPORTED_MODULE_1__["TeachService"]])
    ], TeachingComponent);
    return TeachingComponent;
}());



/***/ }),

/***/ "./src/app/teaching/teaching.service.ts":
/*!**********************************************!*\
  !*** ./src/app/teaching/teaching.service.ts ***!
  \**********************************************/
/*! exports provided: TeachService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachService", function() { return TeachService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TeachService = (function () {
    function TeachService() {
    }
    TeachService.prototype.getClasses = function () {
        return ({
            "Semesters": {
                "Fall2018": [
                    {
                        "code": "CS457",
                        "name": "Computer Networks and the Internet",
                        "time": "TBA",
                        "description": "This senior level undergraduate course covers principles of data communications, local area networks, communications protocols, TCP/IP, and the Internet.",
                        "isLink": true,
                        "link": "https://www.cs.colostate.edu/~cs457"
                    }
                ],
                "Spring2019": [
                    {
                        "code": "CS464",
                        "name": "Principles of Human-Computer Interaction",
                        "time": "TBA",
                        "description": "Human-Computer Interaction teaches the fundamental issues that underlie the creation and evaluation of usable and useful computational artifacts. Over the term, students will learn how to design novel computational artifacts that enable a well-defined user group to achieve specific goals more effectively than via current means.",
                        "isLink": false,
                        "link": "https://www.cs.colostate.edu/~cs464/"
                    }
                ]
            }
        });
    };
    TeachService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TeachService);
    return TeachService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Andy Pujol\NUI Web\NUILabWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map