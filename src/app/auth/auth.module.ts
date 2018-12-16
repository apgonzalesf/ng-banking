import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import { SigninComponent } from './signin/signin.component'; 



const routes: Routes=[
  {path:'signin', component:SigninComponent ,data:{title : 'Sign in'} }
]

@NgModule({
  declarations: [ SigninComponent],
  imports: [RouterModule.forChild(routes)]
})
export class AuthModule { }
