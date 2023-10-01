import { Component, OnDestroy, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit, OnDestroy {
  videos: any[] = [];
  localStorageKey = 'videoData';

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    const storedData = this.videoService.getItem(this.localStorageKey);
    if (storedData) {
      this.videos = storedData;
    } else {
      this.loadDefaultData();
    }
  }

  ngOnDestroy(): void {
    this.videoService.removeItem(this.localStorageKey);
  }
  refreshVideos(): void {
    this.videos = this.videoService.defaultVideos;
  }

  updateLocalStorage(): void {
    this.videoService.setItem(this.localStorageKey, this.videos);
  }

  loadDefaultData(): void {
    this.videoService.setItem(
      this.localStorageKey,
      this.videoService.defaultVideos
    );
    this.videos = this.videoService.defaultVideos;
  }

  onDrop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.videos, event.previousIndex, event.currentIndex);
    this.updateLocalStorage();
    console.log(this.videos);
  }
}
