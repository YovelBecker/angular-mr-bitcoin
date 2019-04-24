import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { SignupComponent } from './signup/signup.component';
import { ContactDetailsPageComponent } from './contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './contact-edit-page/contact-edit-page.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomepageComponent},
  {path:'contact/edit', component: ContactEditPageComponent},
  {path:'contact/:id', component: ContactDetailsPageComponent},
  {path:'contact/edit/:id', component: ContactEditPageComponent},
  {path:'contact', component: ContactPageComponent,},
  {path:'statistics', component: StatisticsPageComponent},
  {path:'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
