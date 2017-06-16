"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("jquery");
var app_router_1 = require("./app.router");
var orderby_pipe_1 = require("./components/common/orderby.pipe");
var filter_pipe_1 = require("./components/common/filter.pipe");
var keys_pipe_1 = require("./components/common/keys.pipe");
var app_component_1 = require("./app.component");
var login_component_1 = require("./components/login/login.component");
var content_component_1 = require("./components/common/content.component");
var header_component_1 = require("./components/common/header.component");
var footer_component_1 = require("./components/common/footer.component");
var home_component_1 = require("./components/home/home.component");
var table_component_1 = require("./components/common/table.component");
var adapter_component_1 = require("./components/adapter/adapter.component");
var table_service_1 = require("./services/common/table.service");
var adapter_service_1 = require("./services/adapter/adapter.service");
var adapter_1 = require("./services/adapter/adapter");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule,
            app_router_1.routes
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            content_component_1.ContentComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            home_component_1.HomeComponent,
            adapter_component_1.AdapterComponent,
            table_component_1.TableComponent,
            orderby_pipe_1.OrderByPipe,
            filter_pipe_1.FilterByPipe,
            keys_pipe_1.KeysPipe
        ],
        providers: [
            table_service_1.TableService,
            adapter_service_1.AdapterService,
            adapter_1.Adapter
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map