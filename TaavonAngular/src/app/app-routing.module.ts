import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MainComponent } from './main/main.component';
import { NewLetterComponent } from './main/new-letter/new-letter.component';
import { A4Component } from './main/new-letter/a4/a4.component';
import { A5Component } from './main/new-letter/a5/a5.component';
import { ReceivedLetterComponent } from './main/received-letter/received-letter.component';
import { SendedLetterComponent } from './main/sended-letter/sended-letter.component';
import { LetterEntryComponent } from './main/letter-entry/letter-entry.component';
import { SearchLetterComponent } from './main/search-letter/search-letter.component';
import { IndicatorsComponent } from './main/indicators/indicators.component';
import { NewsComponent } from './main/news/news.component';
import { UsersComponent } from './main/users/users.component';
import { EditUsersComponent } from './main/edit-users/edit-users.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forget', component: ForgetPasswordComponent },
  {
    path: 'main', component: MainComponent, children: [
      {
        path: 'new', component: NewLetterComponent, children: [
          { path: 'A4', component: A4Component },
          { path: 'A5', component: A5Component }
        ]
      },
      { path: 'received', component: ReceivedLetterComponent },
      { path: 'sended', component: SendedLetterComponent },
      { path: 'entry', component: LetterEntryComponent },
      { path: 'search', component: SearchLetterComponent },
      { path: 'indicator', component: IndicatorsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'editusers', component: EditUsersComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
