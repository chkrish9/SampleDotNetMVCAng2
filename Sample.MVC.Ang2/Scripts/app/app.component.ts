import { Component, OnInit } from '@angular/core';
import { ContentComponent } from './Components/Common/content.component';
@Component({
	selector: 'communication-hub-container',
	template: `<layout></layout>`
})
export class AppComponent implements OnInit{
	constructor() {
		//called first time before the ngOnInit()
	}

	ngOnInit() {
		//called after the constructor and called  after the first ngOnChanges() 
	}

}