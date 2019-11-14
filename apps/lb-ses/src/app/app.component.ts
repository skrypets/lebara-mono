import {
  Component,
  ChangeDetectorRef,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { AuthService } from './auth/auth.service';
import Auth from '@aws-amplify/auth';

@Component({
  selector: 'lebara-mono-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Lebara Email Dashboard';
  mobileQuery: MediaQueryList;
  nav = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'My Account',
      path: '/auth/signin'
    }
  ];
  avatar: string;
  private _mobileQueryListener: () => void;
  @Output() toggleSideNav = new EventEmitter();

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public auth: AuthService,
    private toast: MatSnackBar
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    auth.authState.subscribe((event: string) => {
      if (event === AuthService.SIGN_IN) this.checkSession();
      if (event === AuthService.SIGN_OUT) this.avatar = undefined;
    });
  }

  ngOnInit() {
    this.checkSession();
  }

  async checkSession() {
    try {
      const userInfo = await Auth.currentUserInfo();
      if (userInfo && userInfo.attributes.profile) {
      }
    } catch (error) {
      console.log('no session: ', error);
    }
  }

  toggleMobileNav(nav: MatSidenav) {
    if (this.mobileQuery.matches) {
      nav.toggle();
    }
  }
}
