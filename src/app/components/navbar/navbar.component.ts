import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public searchMovieTitle = '';
  public loggedInUser: any;

  constructor(public _auth: AuthService) {}

  ngOnInit(): void {
    if(this._auth.user$){
      this._auth.user$.subscribe((data) => {
        this.loggedInUser = data;
      })
    }
  }
}
