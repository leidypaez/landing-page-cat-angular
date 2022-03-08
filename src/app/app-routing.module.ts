import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DespcriptionComponent } from './components/despcription/despcription.component';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


const routes: Routes = [
  {path: "" , component:LandingPageComponent },
  {path: "Home", component:HomeComponent},
  {path: "Description-cat", component:DespcriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
