import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IzbornikComponent } from './izbornik/izbornik.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { RegistrationComponent } from './registration/registration.component';
import { SportlistComponent } from './sportlist/sportlist.component';

const routes: Routes = [
  {path:"", redirectTo:"/registration", pathMatch:"full"},
  {path:"registration", component:RegistrationComponent},
  {path:"registrationSuccess", component:RegistrationSuccessComponent},
  // {path:"/login", component:},
  {path:"offers", component:SportlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {





 }
 export const RoutingComponents=[RegistrationComponent,IzbornikComponent]


