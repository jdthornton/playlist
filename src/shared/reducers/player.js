export const LOAD_TRACK = "LOAD_TRACK";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const SET_PROGRESS_MODE = 'SET_PROGRESS_MODE';
export const UPDATE_TRACK_PROGRESS = 'UPDATE_TRACK_PROGRESS';
export const PLAY_NEXT_TRACK = 'PLAY_NEXT_TRACK';
export const PLAY_PREVIOUS_TRACK = 'PLAY_PREVIOUS_TRACK';
export const SELECT_TRACK = 'SELECT_TRACK';

export const playerActions = {
    loadAndPlay: payload => ({type: SELECT_TRACK, payload}),
    togglePlay: () => ({type: TOGGLE_PLAY}),
    playNext: () => ({type: PLAY_NEXT_TRACK}),
    playPrevious: () => ({type: PLAY_PREVIOUS_TRACK}),
    setProgressMode: payload => ({type: SET_PROGRESS_MODE, payload}),
    updateProgress: payload => ({ type: UPDATE_TRACK_PROGRESS, payload })
};

const initialState = { loadedTrack: null, isPlaying: false, progress: 0, settingProgress: false };

const playerReducer = (previousState = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_TRACK:
            return {
              loadedTrack: payload,
              isPlaying: true,
              progress: 0
            }
        case TOGGLE_PLAY:
          return {
              ...previousState,
              isPlaying: !previousState.isPlaying
          };
        case SET_PROGRESS_MODE:
          return {
              ...previousState,
              settingProgress: payload
          };
        case UPDATE_TRACK_PROGRESS:
          return {
              ...previousState,
              progress: payload
          };
        default:
            return previousState;
    }
};

export default playerReducer;
