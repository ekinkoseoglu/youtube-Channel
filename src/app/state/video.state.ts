import { State, Action, StateContext, Selector } from '@ngxs/store';

export interface VideoStateModel {
  videos: any[];
}

export class UpdateVideos {
  static readonly type = '[Videos] Update';
  constructor(public payload: any[]) {}
}

@State<VideoStateModel>({
  name: 'videos',
  defaults: {
    videos: [],
  },
})
export class VideoState {
  @Selector()
  static getVideos(state: VideoStateModel) {
    return state.videos;
  }

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
