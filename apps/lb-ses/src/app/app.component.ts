import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'lebara-mono-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  signedIn: boolean;
  user: any;
  greeting: string;
  constructor(private amplifyService: AmplifyService) {
    this.amplifyService.authStateChange$.subscribe(authState => {
      this.signedIn = authState.state === 'signedIn';
      if (!authState.user) {
        this.user = null;
      } else {
        this.user = authState.user;
        this.greeting = 'Hello ' + this.user.username;
      }
      console.log(authState.state);
    });
  }
  // TODO: test code, move out to an auth lib and use authguard service in case
  // AWS Cognito will be chosen as a preffered auth

  title = 'lb-ses';
}
