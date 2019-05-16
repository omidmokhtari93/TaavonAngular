var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewLetterComponent } from './new-letter/new-letter.component';
import { ReceivedLetterComponent } from './received-letter/received-letter.component';
import { SendedLetterComponent } from './sended-letter/sended-letter.component';
import { LetterEntryComponent } from './letter-entry/letter-entry.component';
import { SearchLetterComponent } from './search-letter/search-letter.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { NewsComponent } from './news/news.component';
import { UsersComponent } from './users/users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { LoginComponent } from './login/login.component';
var AppRoutes = [
    { path: 'new', component: NewLetterComponent },
    { path: 'received', component: ReceivedLetterComponent },
    { path: 'sended', component: SendedLetterComponent },
    { path: 'entry', component: LetterEntryComponent },
    { path: 'search', component: SearchLetterComponent },
    { path: 'indicator', component: IndicatorsComponent },
    { path: 'news', component: NewsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'editusers', component: EditUsersComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                NewLetterComponent,
                ReceivedLetterComponent,
                SendedLetterComponent,
                LetterEntryComponent,
                SearchLetterComponent,
                IndicatorsComponent,
                NewsComponent,
                UsersComponent,
                EditUsersComponent,
                LoginComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpModule,
                FormsModule,
                RouterModule.forRoot(AppRoutes)
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=C:/Users/IT2/source/repos/TaavonAngular/TaavonAngular/src/app/app.module.js.map