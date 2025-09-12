import { Component, inject } from '@angular/core';
import { ClerkService } from '@jsrob/ngx-clerk';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss'],
})
export class HomePage {
  playlists: any[] = [];

  public async loadPlaylists() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (!code) return;

    // Wyślij kod do backendu, aby dostać access token
    const tokenRes = await fetch('https://80e2e8a74dc2.ngrok-free.app/api/users/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(code),
    });

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // Pobierz playlisty
    const playlistsRes = await fetch(
      `https://80e2e8a74dc2.ngrok-free.app/api/users/playlists?accessToken=${accessToken}`
    );
    const playlistsData = await playlistsRes.json();

    console.log('Playlisty Spotify:', playlistsData);
  }
}
