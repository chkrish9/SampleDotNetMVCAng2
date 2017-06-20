import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
	transform(array: Array<string>, prop: string, propVal: string): any {
		if (!propVal) return array;
		return array && array.filter(pet => pet[prop] && pet[prop].toString().indexOf(propVal) > -1);
	}
}
