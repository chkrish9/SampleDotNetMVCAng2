import { Component } from '@angular/core';
@Component({
	moduleId: module.id,
	selector: 'header-component',
	templateUrl: './Header.html',
	inputs: ['isLogedIn', 'username']
})
export class HeaderComponent {
	public isLogedIn: boolean;
	public username: string;
	getContentHeight() {
		return $(window).height() - 100;
	}
}