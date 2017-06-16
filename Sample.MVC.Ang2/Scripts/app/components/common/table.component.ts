import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TableService } from './../../services/common/table.service';

@Component({
	moduleId: module.id,
	selector: 'table-component',
	templateUrl: './Table.html',
	providers: [TableService]
})
export class TableComponent implements OnInit {
	private dataTable: Array<object>;
	private sortBy: string;
	private sortOrder: string;
	private filterType: string;
	private filterValue: string;
	private isRowFilterEnable: boolean;
	private tableColumns: Array<object>;
	private url: string;
	private isRemote: boolean;
	private height: number;

	@Input() options: any;
	@Output() rowClickEvent= new EventEmitter();
	@Output() cellClickEvent = new EventEmitter();
	@Input() renderEvent: (event:any) => any;
	constructor(private tableservice: TableService) { }

	ngOnInit(): void {
		this.sortBy = this.options.sortBy;
		this.sortOrder = this.options.sortOrder;
		this.filterType = this.options.filterType;
		this.filterValue = this.options.filterValue;
		this.isRowFilterEnable = this.options.isRowFilterEnable;
		this.tableColumns = this.options.tableColumns;
		this.height = this.options.height;
		this.isRemote = this.options.isRemote;
		if (this.isRemote) {
			this.tableservice.getData(this.options.url).subscribe(data => {
				this.dataTable = data;
			});
		} else {
			this.dataTable = this.options.data;
		}
	}

	getTableHeight() {
		return this.height;
	}
	sort(order: any) {
		//console.log(order);
		this.sortOrder = order.sortOrder;
		this.sortBy = order.sortBy;
	}
	filter(filter: any) {
		//console.log(filter);
		this.filterType = filter.filterType;
		this.filterValue = filter.filterValue;
	}
	checkIsColumnHide(key: string) {
		let isExist = this.tableColumns.find(tc => tc['datafield'] == key);
		return (isExist) ? false : true;
	}
	getColumnWidth(key: string) {
		let column = this.tableColumns.find(tc => tc['datafield'] == key);
		return (column) ? column['width'] : 0;
	}
	rowClick(datarow: any) {
		datarow = this.rowClickEvent.emit(datarow);
	}
	cellClick(rowdata: any, datafiled: any) {
		rowdata = this.cellClickEvent.emit({ rowdata: rowdata, datafiled: datafiled });
	}
	render(value: any, datafiled: any) {
		if (this.renderEvent)
			return this.renderEvent({ value: value, datafiled: datafiled });
		return value;
	}
}