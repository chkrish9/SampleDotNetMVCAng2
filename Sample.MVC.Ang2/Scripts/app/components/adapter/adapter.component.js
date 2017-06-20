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
var adapter_service_1 = require("./../../services/adapter/adapter.service");
var adapter_1 = require("./../../services/adapter/adapter");
var AdapterComponent = (function () {
    function AdapterComponent(adapterservice) {
        this.adapterservice = adapterservice;
        this.genders = [
            { value: 'F', display: 'Female' },
            { value: 'M', display: 'Male' }
        ];
        this.roles = [
            { value: 'admin', display: 'Administrator' },
            { value: 'guest', display: 'Guest' },
            { value: 'custom', display: 'Custom' }
        ];
        this.topics = [
            { value: 'game', display: 'Gaming' },
            { value: 'tech', display: 'Technology' },
            { value: 'life', display: 'Lifestyle' },
        ];
        this.toggles = [
            { value: 'toggled', display: 'Toggled' },
            { value: 'untoggled', display: 'UnToggled' },
        ];
        this.t = {
            true: { value: 'toggled', display: 'Toggled' },
            false: { value: 'untoggled', display: 'UnToggled' }
        };
        this.adapter = new adapter_1.Adapter();
        this.dataTable = [];
        this.sortBy = "title";
        this.sortOrder = "asc";
        this.isRowFilterEnable = true;
        this.tableColumns = [
            { title: 'Title', datafield: 'title', width: 100 },
        ];
        //called first time before the ngOnInit()
        this.options = {
            sortBy: this.sortBy,
            sortOrder: this.sortOrder,
            tableColumns: this.tableColumns,
            height: $(window).height() - 100 - 35,
            url: '/Scripts/App/Components/Home/data.json',
            isRowFilterEnable: this.isRowFilterEnable,
            isRemote: true,
        };
        this.user = {
            name: 'Murali',
            age: 30,
            gender: this.genders[1].value,
            role: "custom",
            isActive: true,
            toggle: this.toggles[0].value,
            topics: ['game', 'tech', 'life']
        };
    }
    AdapterComponent.prototype.ngOnInit = function () {
        //called after the constructor and called  after the first ngOnChanges() 
    };
    AdapterComponent.prototype.getContentHeight = function () {
        return $(window).height() - 100 - 45;
    };
    AdapterComponent.prototype.rowClick = function (rowdata) {
        this.adapter = rowdata;
    };
    AdapterComponent.prototype.save = function (isValid, f) {
        if (!isValid)
            return;
        console.log(f);
    };
    return AdapterComponent;
}());
AdapterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'adapter',
        templateUrl: './Adapter.html',
        providers: [adapter_service_1.AdapterService]
    }),
    __metadata("design:paramtypes", [adapter_service_1.AdapterService])
], AdapterComponent);
exports.AdapterComponent = AdapterComponent;
//# sourceMappingURL=adapter.component.js.map