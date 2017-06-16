import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Adapter } from './adapter';

@Injectable()
export class AdapterService {
	constructor(private _http: Http) { }

	getData(url: string): Observable<Object[]> {
		return this._http.get(url).map(res =>
			res.json()
		);
	}
}