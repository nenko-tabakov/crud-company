webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <app-company></app-company>\n  <app-messages></app-messages>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__company_company_component__ = __webpack_require__("./src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__company_detail_company_detail_component__ = __webpack_require__("./src/app/company-detail/company-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_messages_component__ = __webpack_require__("./src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__message_service__ = __webpack_require__("./src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__company_company_component__["a" /* CompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_6__company_detail_company_detail_component__["a" /* CompanyDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__messages_messages_component__["a" /* MessagesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/beneficialOwner.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficialOwner; });
var BeneficialOwner = /** @class */ (function () {
    function BeneficialOwner(name) {
        this.name = name;
    }
    return BeneficialOwner;
}());



/***/ }),

/***/ "./src/app/company-detail/company-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company-detail/company-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"company\" class=\"form-group\">\n  <h2>{{company.name}}</h2>\n  <div>\n    <label>Name:</label>\n    <input required class=\"form-control\" [(ngModel)]=\"company.name\" placeholder=\"Company name\">\n  </div>\n  <div>\n    <label>City:</label>\n    <input required class=\"form-control\" [(ngModel)]=\"company.city\" placeholder=\"City\">\n  </div>\n  <div>\n    <label>Address:</label>\n    <input required class=\"form-control\" [(ngModel)]=\"company.address\" placeholder=\"Address\">\n  </div>\n  <div>\n    <label>Country:</label>\n    <input required class=\"form-control\" [(ngModel)]=\"company.country\" placeholder=\"Country\">\n  </div>\n  <div>\n    <label>Phone number:</label>\n    <input class=\"form-control\" [(ngModel)]=\"company.phoneNumber\" placeholder=\"Phone number\">\n  </div>\n  <div>\n    <label>E-mail:</label>\n    <input class=\"form-control\" [(ngModel)]=\"company.email\" placeholder=\"E-mail\">\n  </div>\n\n  <div>\n    Beneficial Owners\n    <ul>\n      <li *ngFor=\"let owner of beneficialOwners\">{{owner.name}}</li>\n    </ul>\n  </div>\n\n  <button class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n  <button class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\n  <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#addBeneficialOwner\">\n    Add Beneficial Owner\n  </button>\n</div>\n\n<div class=\"modal fade\" id=\"addBeneficialOwner\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Create Beneficial Owner</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"company\" class=\"form-group\">\n          <div>\n            <label>Name:</label>\n            <input required class=\"form-control\" [(ngModel)]=\"beneficialOwnerName\" placeholder=\"Beneficial owner name\">\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addBeneficialOwner()\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/company-detail/company-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_service__ = __webpack_require__("./src/app/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company__ = __webpack_require__("./src/app/company.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyDetailComponent = /** @class */ (function () {
    function CompanyDetailComponent(companyService) {
        this.companyService = companyService;
    }
    CompanyDetailComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(CompanyDetailComponent.prototype, "company", {
        get: function () {
            return this._company;
        },
        set: function (company) {
            this._company = company;
            this.getBeneficialOwners();
        },
        enumerable: true,
        configurable: true
    });
    CompanyDetailComponent.prototype.save = function () {
        this.companyService.updateCompany(this.company).subscribe();
    };
    CompanyDetailComponent.prototype.delete = function () {
        var _this = this;
        this.companyService.deleteCompany(this.company.id).subscribe(function () { return _this.reload(); });
    };
    CompanyDetailComponent.prototype.addBeneficialOwner = function () {
        var _this = this;
        this.companyService.addBeneficialOwner(this.beneficialOwnerName, this.company.id, function () { return _this.reload(); });
    };
    CompanyDetailComponent.prototype.getBeneficialOwners = function () {
        var _this = this;
        this.companyService.getBeneficialOwners(this.company.id).subscribe(function (owners) { return _this.beneficialOwners = owners; });
    };
    CompanyDetailComponent.prototype.reload = function () {
        location.reload();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__company__["a" /* Company */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company__["a" /* Company */]])
    ], CompanyDetailComponent.prototype, "company", null);
    CompanyDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-company-detail',
            template: __webpack_require__("./src/app/company-detail/company-detail.component.html"),
            styles: [__webpack_require__("./src/app/company-detail/company-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */]])
    ], CompanyDetailComponent);
    return CompanyDetailComponent;
}());



/***/ }),

/***/ "./src/app/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__beneficialOwner__ = __webpack_require__("./src/app/beneficialOwner.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CompanyService = /** @class */ (function () {
    function CompanyService(httpClient, messageService) {
        this.httpClient = httpClient;
        this.messageService = messageService;
        this.companiesUrl = '/companies';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
    }
    CompanyService.prototype.getCompanies = function () {
        return this.httpClient.get(this.companiesUrl)
            .map(function (result) {
            return result._embedded.companies;
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["a" /* catchError */])(this.handleError('Error while getting companies ompanies', [])));
    };
    CompanyService.prototype.getBeneficialOwners = function (companyId) {
        var url = this.companiesUrl + "/" + companyId + "/beneficialOwners";
        return this.httpClient.get(url)
            .map(function (result) {
            return result._embedded.benf_owners;
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["a" /* catchError */])(this.handleError('Error while getting beneficial owners', [])));
    };
    CompanyService.prototype.getCompany = function (id) {
        var _this = this;
        var url = this.companiesUrl + "/" + id;
        return this.httpClient.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("fetched company id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["a" /* catchError */])(this.handleError("getCompany id=" + id)));
    };
    CompanyService.prototype.updateCompany = function (company) {
        var _this = this;
        var url = this.companiesUrl + "/" + company.id;
        return this.httpClient.put(url, company, this.httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("Updated company id=" + company.id); }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["a" /* catchError */])(this.handleError("updateCompany id=" + company.id)));
    };
    CompanyService.prototype.addCompany = function (company) {
        var _this = this;
        return this.httpClient.post(this.companiesUrl, company, this.httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["b" /* tap */])(function (_) { return _this.log('Company created'); }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["a" /* catchError */])(this.handleError('Error while creating company')));
    };
    CompanyService.prototype.deleteCompany = function (id) {
        var _this = this;
        var url = this.companiesUrl + "/" + id;
        return this.httpClient.delete(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("deleted company id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["a" /* catchError */])(this.handleError("deleteCompany id=" + id)));
    };
    CompanyService.prototype.addBeneficialOwner = function (name, companyId, onSuccess) {
        var _this = this;
        var url = '/benf_owners';
        this.httpClient.post(url, new __WEBPACK_IMPORTED_MODULE_4__beneficialOwner__["a" /* BeneficialOwner */](name), this.httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("Created Beneficial Owner with name " + name); }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["a" /* catchError */])(this.handleError('Error while creating beneficial owner'))).subscribe(function (result) {
            var addOwnerToCompanyUrl = url + "/" + result.id + "/company";
            var body = window.location.hostname + ":" + window.location.port + "/" + _this.companiesUrl + "/" + companyId;
            var addOwnerHttpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'text/uri-list' })
            };
            _this.httpClient.put(addOwnerToCompanyUrl, body, addOwnerHttpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("Associated Beneficial Owner to Company " + companyId); }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["a" /* catchError */])(_this.handleError("Error while associated Beneficial Owner to Company " + companyId))).subscribe(onSuccess());
        });
    };
    CompanyService.prototype.log = function (message) {
        this.messageService.add('CompanyService: ' + message);
    };
    CompanyService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            _this.log(operation + " failed: " + error.message);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(result);
        };
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__message_service__["a" /* MessageService */]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/company.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/company/company.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Companies</h2>\n<p>\n  <a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#createCompany\" role=\"button\">\n    New Company\n  </a>\n</p>\n<div class=\"collapse\" [class.show]=\"isNewCompanyShown\" id=\"createCompany\">\n  <div class=\"card card-body\">\n    <div>\n      <label>Name:</label>\n      <input required class=\"form-control\" [(ngModel)]=\"newCompany.name\" placeholder=\"Company name\">\n    </div>\n    <div>\n      <label>City:</label>\n      <input required class=\"form-control\" [(ngModel)]=\"newCompany.city\" placeholder=\"City\">\n    </div>\n    <div>\n      <label>Address:</label>\n      <input required class=\"form-control\" [(ngModel)]=\"newCompany.address\" placeholder=\"Address\">\n    </div>\n    <div>\n      <label>Country:</label>\n      <input required class=\"form-control\" [(ngModel)]=\"newCompany.country\" placeholder=\"Country\">\n    </div>\n    <div>\n      <label>Phone number:</label>\n      <input class=\"form-control\" [(ngModel)]=\"newCompany.phoneNumber\" placeholder=\"Phone number\">\n    </div>\n    <div>\n      <label>E-mail:</label>\n      <input class=\"form-control\" [(ngModel)]=\"newCompany.email\" placeholder=\"E-mail\">\n    </div>\n\n    <button class=\"btn btn-primary\" (click)=\"createNewCompany()\">Save</button>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" [class.active]=\"company === selectedCompany\" *ngFor=\"let company of companies\" (click)=\"onSelect(company)\">\n          <span>{{company.id}}</span> - {{company.name}}\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-sm\">\n      <app-company-detail *ngIf=\"selectedCompany\" [company]=\"selectedCompany\"></app-company-detail>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company__ = __webpack_require__("./src/app/company.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(companyService) {
        this.companyService = companyService;
        this.newCompany = new __WEBPACK_IMPORTED_MODULE_1__company__["a" /* Company */]();
        this.isNewCompanyShown = false;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    CompanyComponent.prototype.onSelect = function (company) {
        this.selectedCompany = company;
    };
    CompanyComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies().subscribe(function (companies) { return _this.companies = companies; });
    };
    CompanyComponent.prototype.createNewCompany = function () {
        var _this = this;
        this.isNewCompanyShown = true;
        this.companyService.addCompany(this.newCompany).subscribe(function () {
            _this.getCompanies();
            _this.isNewCompanyShown = false;
        });
    };
    CompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-company',
            template: __webpack_require__("./src/app/company/company.component.html"),
            styles: [__webpack_require__("./src/app/company/company.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\" class=\"alert alert-primary\" role=\"alert\">\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n  <button class=\"clear\" (click)=\"messageService.clear()\">clear</button>\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("./src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map