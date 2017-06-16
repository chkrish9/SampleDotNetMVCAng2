import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { ContentComponent } from './../common/content.component';


@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: './Login.html'
})
export class LoginComponent implements OnInit {
	usernameValue: string;
	passwordValue: string;
	set username(value) {
		this.usernameValue = value;
	}
	get username() {
		return this.usernameValue;
	}
	set password(value) {
		this.passwordValue = value;
	}
	get password() {
		return this.passwordValue;
	}
	isAutenticate: boolean;
	constructor(private cc: ContentComponent, private router: Router, private http: Http) {
		//called first time before the ngOnInit()
		this.isAutenticate = cc.isAuthenticate;
	}

	ngOnInit() {
		//called after the constructor and called  after the first ngOnChanges() 
	}

	login(user: NgForm) {
		//Get without parameter example

		//this.http.get(`/App-Logon`)
		//	.toPromise()
		//	.then(response => {
		//		this.ac.setisAuthenticate(true);
		//		this.router.navigateByUrl('/home');
		//	})
		//	.catch(this.handleError);

		//Get with parameter example

		//this.http.get(`/App-Logon?id=${this.id}`)
		//	.toPromise()
		//	.then(response => {
		//		this.ac.setisAuthenticate(true);
		//		this.router.navigateByUrl('/home');
		//	})
		//	.catch(this.handleError);

		//Post example
	
		this.http.post(`/App-Logon`, { username: user.value.username, password: user.value.password })
			.toPromise()
			.then(response => {
				if (response.json().Result === true) {
					this.cc.setisAuthenticate(true);
					this.cc.setUser(user.value.username);
					this.router.navigateByUrl('/home');
				} else {
					alert("Invalid Username and Password");
				}
			})
			.catch(this.handleError);
		
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}