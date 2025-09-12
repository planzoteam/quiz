import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
})
export class LoginPage {
  public loginWithSpotify() {
    const clientId = '8dc7deb02262449cac03e0ba56ec38aa';
    const redirectUri = 'http://192.168.100.27:4200/home-page';
    const scopes =
      'playlist-read-private playlist-read-collaborative user-read-email user-read-private';

    window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
      scopes
    )}&redirect_uri=${encodeURIComponent(redirectUri)}`;
  }
}
