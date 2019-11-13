import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AwsAmplifyModule } from '@lebara-mono/aws-amplify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ConfirmCodeComponent } from './auth/confirm-code/confirm-code.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ConfirmCodeComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AwsAmplifyModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [LoaderComponent]
})
export class AppModule {}
