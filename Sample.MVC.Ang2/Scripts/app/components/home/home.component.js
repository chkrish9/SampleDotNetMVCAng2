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
var http_1 = require("@angular/http");
require("rxjs/Rx");
require("rxjs/add/operator/map");
var HomeComponent = (function () {
    function HomeComponent(_http) {
        this._http = _http;
        this.dataTable = [];
        this.urlPosts = 'https://jsonplaceholder.typicode.com/posts';
        this.urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
        this.sortBy = "title";
        this.sortOrder = "asc";
        this.isRowFilterEnable = true;
        this.tableColumns = [
            { title: 'Id', datafield: 'id', width: 10 },
            { title: 'Title', datafield: 'title', width: 30 },
            { title: 'Body', datafield: 'body', width: 60 },
        ];
        this.options = {
            sortBy: this.sortBy,
            sortOrder: this.sortOrder,
            tableColumns: this.tableColumns,
            url: '/Scripts/App/Components/Home/data.json',
            isRowFilterEnable: this.isRowFilterEnable,
            height: $(window).height() - 100 - 35,
            isRemote: false,
            data: this.getData()
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getData = function () {
        var obj = [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
            },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                "userId": 1,
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure↵voluptatem occaecati omnis e…↵molestiae porro eius odio et labore et velit aut"
            }
        ];
        return obj;
    };
    HomeComponent.prototype.rowClick = function (rowdata) {
        console.log(event.currentTarget);
        console.log(rowdata);
        rowdata.title = "Murali";
        return rowdata;
    };
    HomeComponent.prototype.cellClick = function (event) {
        console.log(event.currentTarget);
        console.log(event.rowdata[event.datafiled]);
        event.rowdata[event.datafiled] = "krish";
        return event.rowdata[event.datafiled];
    };
    HomeComponent.prototype.render = function (event) {
        return event.value;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: './Home.html',
    }),
    __metadata("design:paramtypes", [http_1.Http])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map