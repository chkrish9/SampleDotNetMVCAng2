import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import  'jquery';

import { routes } from './app.router';

import { OrderByPipe } from "./components/common/orderby.pipe";
import { FilterByPipe } from "./components/common/filter.pipe";
import { KeysPipe } from "./components/common/keys.pipe";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/common/content.component';
import { HeaderComponent } from './components/common/header.component';
import { FooterComponent } from './components/common/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/common/table.component';
import { AdapterComponent } from './components/adapter/adapter.component';

import { TableService } from "./services/common/table.service";
import { AdapterService } from './services/adapter/adapter.service';
import { Adapter } from './services/adapter/adapter';


@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule,
		routes
	],
	declarations: [
		AppComponent,
		LoginComponent,
		ContentComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		AdapterComponent,
		TableComponent,
		OrderByPipe,
		FilterByPipe,
		KeysPipe
	],
	providers: [
		TableService,
		AdapterService,
		Adapter
	],
	bootstrap: [AppComponent]
})
export class AppModule { }