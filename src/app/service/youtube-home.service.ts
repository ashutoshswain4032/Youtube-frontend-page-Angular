import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IYoutube1 } from '../YoutubeHome1';
import { IYoutube2 } from '../YoutubeHome2';

@Injectable({
  providedIn: 'root'
})
export class YoutubeHomeService {
   
  private _url1='http://localhost:8080/youtube/video';
  private _url2='http://localhost:8080/keywords';
  constructor(private http: HttpClient) {}
  getYoutubeHome1(): Observable<IYoutube1[]> {
    return this.http.get<IYoutube1[]>(this._url1);
  }
  getYoutubeHome2(): Observable<IYoutube2[]> {
    return this.http.get<IYoutube2[]>(this._url2);
  }
}
