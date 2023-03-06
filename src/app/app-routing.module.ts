import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './Views/Acceuil/body/body.component';
import { LoginComponent } from './Views/login/login.component';

const routes: Routes = [

  {path:'',
   component:BodyComponent,
   pathMatch: 'full',},
   {
  path:'login',
  component:LoginComponent,
  data:{

    title:'login page'
  }


   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
