import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: './Home.html',
})
export class HomeComponent implements OnInit {
	private dataTable: Array<object> = [];
	private urlPosts: string = 'https://jsonplaceholder.typicode.com/posts';
	private urlPhotos: string = 'https://jsonplaceholder.typicode.com/photos';
	sortBy: string = "title";
	sortOrder: string = "asc";
	isRowFilterEnable:boolean=true;
	tableColumns: Array<object> = [
		{ title: 'Id', datafield: 'id', width: 10 },
		{ title:'Title',datafield: 'title', width: 30 },
		{ title: 'Body', datafield: 'body', width: 60 },
	];
	public options:any;
	constructor(private _http: Http) {
		this.options = {
			sortBy: this.sortBy,
			sortOrder: this.sortOrder,
			tableColumns: this.tableColumns,
			url: '/Scripts/App/Components/Home/data.json',
			isRowFilterEnable: this.isRowFilterEnable,
			height: $(window).height() - 100,
			isRemote: false,
			data: this.getData()
		}
	}
	ngOnInit(): void {
		
	}

	getData(): Array<object> {
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
		]
		return obj;
	}

	rowClick(rowdata: any) {
		console.log(event.currentTarget);
		console.log(rowdata);
		rowdata.title = "Murali";
		return rowdata;
	}

	cellClick(event: any) {
		console.log(event.currentTarget);
		console.log(event.rowdata[event.datafiled]);
		event.rowdata[event.datafiled] = "krish";
		return event.rowdata[event.datafiled];
	}
	render(event: any) {
		return event.value;
	}
}