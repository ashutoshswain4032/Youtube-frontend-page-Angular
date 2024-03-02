import { Component, OnInit } from '@angular/core';
import { YoutubeHomeService } from '../service/youtube-home.service';

@Component({
  selector: 'app-youtube-home',
  templateUrl: './youtube-home.component.html',
  styleUrl: './youtube-home.component.css',
})
export class YoutubeHomeComponent implements OnInit {
  public keywords: any = [];
  public youtubeVideoDetails: any = [];
  constructor(private _youtubeHomeService: YoutubeHomeService) {}

  ngOnInit() {
    this._youtubeHomeService
      .getYoutubeHome1()
      .subscribe((data) => (this.youtubeVideoDetails = data));
    this._youtubeHomeService
      .getYoutubeHome2()
      .subscribe((data) => (this.keywords = data));
  }
}
