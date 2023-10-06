import { Component } from '@angular/core';
import { VideoService } from '../../video.service';
import { HttpParams } from '@angular/common/http';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Store } from '@ngxs/store';
import { UpdateVideos } from 'src/app/state/video.state';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  username: string;
  channelId: string;
  videos: any[];
  channel: {
    snippet: {
      title: string;
      thumbnails: {
        default: {
          url: string;
        };
        medium: {
          url: string;
        };
        high: {
          url: string;
        };
      };
    };
  };

  constructor(private videoService: VideoService, private store: Store) {}

  listVideosByChannelUsername() {
    this.videoService.searchQuery(this.username).subscribe((res: any) => {
      console.log(res);
      this.videos = res.items;
    });
    this.store.dispatch(new UpdateVideos(this.videos));
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.videos, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    // Yeni sırayı state'e kaydet
    this.store.dispatch(new UpdateVideos(this.videos));
  }

  refreshVideos() {
    // Kullanıcı adına göre videoları yeniden çekin
    this.listVideosByChannelUsername();
  }
}
