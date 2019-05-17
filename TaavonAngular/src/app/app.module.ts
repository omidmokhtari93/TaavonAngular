import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Route,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewLetterComponent } from './main/new-letter/new-letter.component';
import { ReceivedLetterComponent } from './main/received-letter/received-letter.component';
import { SendedLetterComponent } from './main/sended-letter/sended-letter.component';
import { LetterEntryComponent } from './main/letter-entry/letter-entry.component';
import { SearchLetterComponent } from './main/search-letter/search-letter.component';
import { IndicatorsComponent } from './main/indicators/indicators.component';
import { NewsComponent } from './main/news/news.component';
import { UsersComponent } from './main/users/users.component';
import { EditUsersComponent } from './main/edit-users/edit-users.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotifierModule } from 'angular-notifier';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';

const appRoutes: Route[] = [
  { path: 'login', component: LoginComponent},
  { path: 'forget', component: ForgetPasswordComponent},
  {
    path: 'main', component: MainComponent, children: [
      { path: 'new', component: NewLetterComponent },
      { path: 'received', component: ReceivedLetterComponent },
      { path: 'sended', component: SendedLetterComponent },
      { path: 'entry', component: LetterEntryComponent },
      { path: 'search', component: SearchLetterComponent },
      { path: 'indicator', component: IndicatorsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'editusers', component: EditUsersComponent },
      ]
  },
]
const notifierOptions: {} = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 12
    }
  },
  behaviour: {
    autoHide: 3000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  }
}

@NgModule({
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
    LoginComponent,
    MainComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NotifierModule.withConfig(notifierOptions),
    DpDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
