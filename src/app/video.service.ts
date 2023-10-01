import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  public defaultVideos: any[] = [
    {
      id: '1',
      title: 'Video 1',
      videoImage:
        'https://img.freepik.com/free-psd/evangelist-religion-spirituality-youtube-cover-template_23-2149571172.jpg?size=626&ext=jpg',
      note: 'first video',
    },
    {
      id: '2',
      title: 'Video 2',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg',
      note: 'second video',
    },
    {
      id: '3',
      title: 'Video 3',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg3',
      note: 'third video',
    },
    {
      id: '4',
      title: 'Video 4',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg4',
      note: 'fourth video',
    },
    {
      id: '5',
      title: 'Video 5',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg5',
      note: 'fifth video',
    },
    {
      id: '6',
      title: 'Video 6',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg6',
      note: 'sixth video',
    },
    {
      id: '7',
      title: 'Video 7',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg7',
      note: 'seventh video',
    },
    {
      id: '8',
      title: 'Video 8',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg8',
      note: 'eighth video',
    },
    {
      id: '9',
      title: 'Video 9',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg9',
      note: 'ninth video',
    },
    {
      id: '10',
      title: 'Video 10',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg10',
      note: 'tenth video',
    },
  ];
  public videos: any[] = [
    {
      id: '1',
      title: 'Video 1',
      videoImage:
        'https://img.freepik.com/free-psd/evangelist-religion-spirituality-youtube-cover-template_23-2149571172.jpg?size=626&ext=jpg',
      note: 'first video',
    },
    {
      id: '2',
      title: 'Video 2',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg',
      note: 'second video',
    },
    {
      id: '3',
      title: 'Video 3',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg',
      note: 'third video',
    },
    {
      id: '4',
      title: 'Video 4',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg',
      note: 'fourth video',
    },
    {
      id: '5',
      title: 'Video 5',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg',
      note: 'fifth video',
    },
    {
      id: '6',
      title: 'Video 6',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg',
      note: 'sixth video',
    },
    {
      id: '7',
      title: 'Video 7',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg',
      note: 'seventh video',
    },
    {
      id: '8',
      title: 'Video 8',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg',
      note: 'eighth video',
    },
    {
      id: '9',
      title: 'Video 9',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg',
      note: 'ninth video',
    },
    {
      id: '10',
      title: 'Video 10',
      videoImage:
        'https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg',
      note: 'tenth video',
    },
  ];

  constructor() {}

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
