import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Route,RouterModule } from '@angular/router';
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

const AppRoutes: Route[] = [
  { path: 'new', component: NewLetterComponent },
  { path: 'received', component: ReceivedLetterComponent },
  { path: 'sended', component: SendedLetterComponent },
  { path: 'entry', component: LetterEntryComponent },
  { path: 'search', component: SearchLetterComponent },
  { path: 'indicator', component: IndicatorsComponent },
  { path: 'news', component: NewsComponent},
  { path: 'users', component: UsersComponent },
  { path: 'editusers', component: EditUsersComponent},
  { path: 'login', component: LoginComponent},
]

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
export class AppModule { }
