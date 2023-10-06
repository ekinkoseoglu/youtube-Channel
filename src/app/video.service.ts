import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private apiKey = ''; // Your YouTube API Key here
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) {}

  searchQuery(query: string) {
    return this.http.get(
      `${this.apiUrl}/search?part=snippet&maxResults=15&q=${query}&key=${this.apiKey}`
    );
  }
}
