import { Component } from '@angular/core';
@Component({
	moduleId: module.id,
	selector: 'layout',
	templateUrl: './Layout.html',
	styles: []
})
export class ContentComponent {
	public isAuthenticate: boolean;
	public user: string;
	constructor() {
		this.isAuthenticate = false;
	}
	setisAuthenticate(value: boolean) {
		this.isAuthenticate = value;
	}
	setUser(value: string) {
		this.user = value;
    }
    getContentHeight() {
        return $(window).height() - 100;
    }
}