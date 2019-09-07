import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MasterComponent } from './pages/master/master.component';
import { ProdutoEditorComponent } from './pages/produto-editor/produto-editor.component';
import { ProdutoListComponent } from './pages/produto-list/produto-list.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { ManagerGuard } from './guards/manager.guard';


const routes: Routes = [
  // { path: 'login/:par' , component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'product-editor', component: ProdutoEditorComponent },
  {
    path: '',
    canActivate: [AuthenticatedGuard],
    component: MasterComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'product-list',
        component: ProdutoListComponent,
        canActivate: [ManagerGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
