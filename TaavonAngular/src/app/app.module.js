"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var new_letter_component_1 = require("./new-letter/new-letter.component");
var received_letter_component_1 = require("./received-letter/received-letter.component");
var sended_letter_component_1 = require("./sended-letter/sended-letter.component");
var letter_entry_component_1 = require("./letter-entry/letter-entry.component");
var search_letter_component_1 = require("./search-letter/search-letter.component");
var indicators_component_1 = require("./indicators/indicators.component");
var news_component_1 = require("./news/news.component");
var users_component_1 = require("./users/users.component");
var edit_users_component_1 = require("./edit-users/edit-users.component");
var login_component_1 = require("./login/login.component");
var AppRoutes = [
    { path: 'new', component: new_letter_component_1.NewLetterComponent },
    { path: 'received', component: received_letter_component_1.ReceivedLetterComponent },
    { path: 'sended', component: sended_letter_component_1.SendedLetterComponent },
    { path: 'entry', component: letter_entry_component_1.LetterEntryComponent },
    { path: 'search', component: search_letter_component_1.SearchLetterComponent },
    { path: 'indicator', component: indicators_component_1.IndicatorsComponent },
    { path: 'news', component: news_component_1.NewsComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'editusers', component: edit_users_component_1.EditUsersComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                new_letter_component_1.NewLetterComponent,
                received_letter_component_1.ReceivedLetterComponent,
                sended_letter_component_1.SendedLetterComponent,
                letter_entry_component_1.LetterEntryComponent,
                search_letter_component_1.SearchLetterComponent,
                indicators_component_1.IndicatorsComponent,
                news_component_1.NewsComponent,
                users_component_1.UsersComponent,
                edit_users_component_1.EditUsersComponent,
                login_component_1.LoginComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(AppRoutes)
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
