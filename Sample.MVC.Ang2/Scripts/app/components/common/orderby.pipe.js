"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, prop, order) {
        var comparatorFn;
        if (order === 'asc') {
            comparatorFn = function (a, b) { return String.prototype.localeCompare.call(a[prop], b[prop]); };
        }
        else {
            comparatorFn = function (a, b) { return String.prototype.localeCompare.call(b[prop], a[prop]); };
        }
        return array && array.sort(comparatorFn);
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    core_1.Pipe({ name: 'orderBy' })
], OrderByPipe);
exports.OrderByPipe = OrderByPipe;
//# sourceMappingURL=orderby.pipe.js.map