import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MasterComponent } from './pages/master/master.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoEditorComponent } from './pages/produto-editor/produto-editor.component';
import { ProdutoListComponent } from './pages/produto-list/produto-list.component';
import { MaskDirective } from './directives/mask.directive';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { ManagerGuard } from './guards/manager.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MasterComponent,
    ProdutoEditorComponent,
    ProdutoListComponent,
    MaskDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticatedGuard,
    ManagerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
