import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
import { LetterNumberDirective } from './shared/directives/letter-number.directive';
import { A4Component } from './main/new-letter/a4/a4.component';
import { A5Component } from './main/new-letter/a5/a5.component';
import { SignUploadComponent } from './main/users/sign-upload/sign-upload.component';
import { SearchReceiverDirective } from './shared/directives/search-receiver.directive';
import { SearchComponent } from './shared/components/search/search.component';
import { DataService } from 'src/app/shared/services/data.service';
import { TestComponent } from './shared/components/test/test.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SlimLoadingBarModule } from '@cime/ngx-slim-loading-bar';


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
    ForgetPasswordComponent,
    LetterNumberDirective,
    A4Component,
    A5Component,
    SignUploadComponent,
    SearchReceiverDirective,
    SearchComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(notifierOptions),
    DpDatePickerModule,
    CKEditorModule,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
