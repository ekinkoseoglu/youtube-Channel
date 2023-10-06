// video.state.ts

import { State, Action, StateContext, Selector } from '@ngxs/store';

// State için model tanımı
export interface VideoStateModel {
  videos: any[]; // Videoları burada saklayın
}

// Videoları güncellemek için bir Action sınıfı tanımlama
export class UpdateVideos {
  static readonly type = '[Videos] Update'; // Action tipi
  constructor(public payload: any[]) {} // Videoları güncellemek için payload
}

// Video State'ini tanımlama
@State<VideoStateModel>({
  name: 'videos', // State'in adı
  defaults: {
    videos: [],
  },
})
export class VideoState {
  // State içindeki videoları seçmek için bir Selector tanımlama
  @Selector()
  static getVideos(state: VideoStateModel) {
    return state.videos;
  }

  // Videoları güncellemek için bir Action tanımlama
  @Action(UpdateVideos)
  updateVideos(ctx: StateContext<VideoStateModel>, { payload }: UpdateVideos) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      videos: payload,
    });
    console.log(ctx.getState());
  }
}
