import { Component, OnInit } from '@angular/core';
import { AdapterService } from './../../services/adapter/adapter.service';
import { Adapter } from './../../services/adapter/adapter';
import { User } from './../../services/user/user';
@Component({
	moduleId: module.id,
	selector: 'adapter',
	templateUrl: './Adapter.html',
	providers: [AdapterService]
})
export class AdapterComponent implements OnInit {
	public user: User;

	public genders = [
		{ value: 'F', display: 'Female' },
		{ value: 'M', display: 'Male' }
	];
	public roles = [
		{ value: 'admin', display: 'Administrator' },
		{ value: 'guest', display: 'Guest' },
		{ value: 'custom', display: 'Custom' }
	];

	public topics = [
		{ value: 'game', display: 'Gaming' },
		{ value: 'tech', display: 'Technology' },
		{ value: 'life', display: 'Lifestyle' },
	];

	public toggles = [
		{ value: 'toggled', display: 'Toggled' },
		{ value: 'untoggled', display: 'UnToggled' },
	];

	public t = {
		true: { value: 'toggled', display: 'Toggled' },
		false: { value: 'untoggled', display: 'UnToggled' }
	}

	adapter: Adapter = new Adapter();

	private dataTable: Array<object> = [];
	sortBy: string = "title";
	sortOrder: string = "asc";
	isRowFilterEnable: boolean = true;
	tableColumns: Array<object> = [
		{ title: 'Title', datafield: 'title', width: 100 },
	];
	public options: any;
	constructor(private adapterservice: AdapterService) {
		//called first time before the ngOnInit()
		this.options = {
			sortBy: this.sortBy,
			sortOrder: this.sortOrder,
			tableColumns: this.tableColumns,
            height: $(window).height() - 100 - 35,
			url: '/Scripts/App/Components/Home/data.json',
			isRowFilterEnable: this.isRowFilterEnable,
			isRemote: true,
		}
		this.user = {
			name: 'Murali',
			age:30,
			gender: this.genders[1].value,
			role: "custom",
			isActive: true,
			toggle: this.toggles[0].value,
			topics: ['game', 'tech', 'life']
		}			 
	}				 


	ngOnInit() {
		//called after the constructor and called  after the first ngOnChanges() 
		
	}
	getContentHeight() {
		return $(window).height() - 100 - 45;
	}
	rowClick(rowdata: any) {
		this.adapter = rowdata;
	}

	save(isValid: boolean, f: User) {
		if (!isValid) return;
		console.log(f);
	}
}