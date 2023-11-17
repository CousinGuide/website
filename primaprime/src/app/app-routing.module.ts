import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
