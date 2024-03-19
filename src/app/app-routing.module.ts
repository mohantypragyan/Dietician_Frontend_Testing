import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadpatientsComponent } from './readpatients/readpatients/readpatients.component';
import { ViewtestreportsComponent } from './viewtestreports/viewtestreports/viewtestreports.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [                   
  {path : 'readpatients', component:ReadpatientsComponent},
  { path : 'testreports', component:ViewtestreportsComponent},
  {path : 'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
