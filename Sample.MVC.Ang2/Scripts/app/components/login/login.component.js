"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/toPromise");
var http_1 = require("@angular/http");
var content_component_1 = require("./../common/content.component");
var LoginComponent = (function () {
    function LoginComponent(cc, router, http) {
        this.cc = cc;
        this.router = router;
        this.http = http;
        //called first time before the ngOnInit()
        this.isAutenticate = cc.isAuthenticate;
    }
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () {
            return this.usernameValue;
        },
        set: function (value) {
            this.usernameValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.passwordValue;
        },
        set: function (value) {
            this.passwordValue = value;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        //called after the constructor and called  after the first ngOnChanges() 
    };
    LoginComponent.prototype.login = function (user) {
        //Get without parameter example
        var _this = this;
        //this.http.get(`/App-Logon`)
        //	.toPromise()
        //	.then(response => {
        //		this.ac.setisAuthenticate(true);
        //		this.router.navigateByUrl('/home');
        //	})
        //	.catch(this.handleError);
        //Get with parameter example
        //this.http.get(`/App-Logon?id=${this.id}`)
        //	.toPromise()
        //	.then(response => {
        //		this.ac.setisAuthenticate(true);
        //		this.router.navigateByUrl('/home');
        //	})
        //	.catch(this.handleError);
        //Post example
        this.http.post("/App-Logon", { username: user.value.username, password: user.value.password })
            .toPromise()
            .then(function (response) {
            if (response.json().Result === true) {
                _this.cc.setisAuthenticate(true);
                _this.cc.setUser(user.value.username);
                _this.router.navigateByUrl('/home');
            }
            else {
                alert("Invalid Username and Password");
            }
        })
            .catch(this.handleError);
    };
    LoginComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: './Login.html'
    }),
    __metadata("design:paramtypes", [content_component_1.ContentComponent, router_1.Router, http_1.Http])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map