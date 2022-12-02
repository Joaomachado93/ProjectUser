import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import {ReactiveFormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component'; 
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MainModule } from './main/main.module';
import { RegisterComponent } from './auth/register/register.component';
//import { AuthModule } from './auth/auth.module';
// import { MaterialModule } from './material.module';
const appRoutes:Routes =[
  {path:'list', component: ListComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
]
@NgModule({
  declarations: [ 
    AppComponent, ListComponent, LoginComponent, HomeComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent, ListComponent]
})
export class AppModule { }
     