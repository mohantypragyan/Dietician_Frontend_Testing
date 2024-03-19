import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import {MatSelectModule} from '@angular/material/select'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatInputModule} from '@angular/material/input';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';  // remove if not required //
import { DialogModule } from 'primeng/dialog';
import { ReadpatientsComponent } from './readpatients/readpatients/readpatients.component';
import { ViewtestreportsComponent } from './viewtestreports/viewtestreports/viewtestreports.component';
import {MatDatepickerModule} from '@angular/material/datepicker';  
import { MatNativeDateModule } from '@angular/material/core';
import { Button, ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './Auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ReadpatientsComponent,
    ViewtestreportsComponent,
    LoginComponent
  ],
  imports: [
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectCountryModule.forRoot('de'),
    TableModule,
    InputTextModule,
    DialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
