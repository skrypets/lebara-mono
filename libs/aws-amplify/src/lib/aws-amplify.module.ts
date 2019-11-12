import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AmplifyAngularModule,
  AmplifyService,
  AmplifyModules
} from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';

@NgModule({
  imports: [CommonModule, AmplifyAngularModule],
  providers: [
    {
      provide: AmplifyService,
      useFactory: () => {
        return AmplifyModules({
          Auth
        });
      }
    }
  ]
})
export class AwsAmplifyModule {}
