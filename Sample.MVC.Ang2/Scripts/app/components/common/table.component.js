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
var table_service_1 = require("./../../services/common/table.service");
var TableComponent = (function () {
    function TableComponent(tableservice) {
        this.tableservice = tableservice;
        this.rowClickEvent = new core_1.EventEmitter();
        this.cellClickEvent = new core_1.EventEmitter();
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sortBy = this.options.sortBy;
        this.sortOrder = this.options.sortOrder;
        this.filterType = this.options.filterType;
        this.filterValue = this.options.filterValue;
        this.isRowFilterEnable = this.options.isRowFilterEnable;
        this.tableColumns = this.options.tableColumns;
        this.height = this.options.height;
        this.isRemote = this.options.isRemote;
        if (this.isRemote) {
            this.tableservice.getData(this.options.url).subscribe(function (data) {
                _this.dataTable = data;
            });
        }
        else {
            this.dataTable = this.options.data;
        }
    };
    TableComponent.prototype.getTableHeight = function () {
        return this.height;
    };
    TableComponent.prototype.sort = function (order) {
        //console.log(order);
        this.sortOrder = order.sortOrder;
        this.sortBy = order.sortBy;
    };
    TableComponent.prototype.filter = function (filter) {
        //console.log(filter);
        this.filterType = filter.filterType;
        this.filterValue = filter.filterValue;
    };
    TableComponent.prototype.checkIsColumnHide = function (key) {
        var isExist = this.tableColumns.find(function (tc) { return tc['datafield'] == key; });
        return (isExist) ? false : true;
    };
    TableComponent.prototype.getColumnWidth = function (key) {
        var column = this.tableColumns.find(function (tc) { return tc['datafield'] == key; });
        return (column) ? column['width'] : 0;
    };
    TableComponent.prototype.rowClick = function (datarow) {
        datarow = this.rowClickEvent.emit(datarow);
    };
    TableComponent.prototype.cellClick = function (rowdata, datafiled) {
        rowdata = this.cellClickEvent.emit({ rowdata: rowdata, datafiled: datafiled });
    };
    TableComponent.prototype.render = function (value, datafiled) {
        if (this.renderEvent)
            return this.renderEvent({ value: value, datafiled: datafiled });
        return value;
    };
    return TableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "options", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TableComponent.prototype, "rowClickEvent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TableComponent.prototype, "cellClickEvent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], TableComponent.prototype, "renderEvent", void 0);
TableComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'table-component',
        templateUrl: './Table.html',
        providers: [table_service_1.TableService]
    }),
    __metadata("design:paramtypes", [table_service_1.TableService])
], TableComponent);
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map