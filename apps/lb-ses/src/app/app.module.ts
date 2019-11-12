import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AwsAmplifyModule } from '@lebara-mono/aws-amplify';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AwsAmplifyModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
