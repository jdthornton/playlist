export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REQUEST_PLAYLIST = "REQUEST_PLAYLIST";
export const ADD_TRACK = "ADD_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const MAKE_PLAYLIST = 'MAKE_PLAYLIST';

export const makePlaylist = payload => ({type: MAKE_PLAYLIST, payload})
export const getPlaylist = payload => ({type: REQUEST_PLAYLIST, payload})
export const savePlaylist = () => ({ type: "SET_MODAL", isOpen: "playlist" })
export const addTrack = payload => ({ type: ADD_TRACK, payload })
export const removeTrack = payload => ({ type: REMOVE_TRACK, payload })

const initialState = { mainTrack: {}, tracks: [], isLoading: false, userPlaylist: null };

const tracksReducer = (previousState = initialState, { type, payload }) => {
    switch (type) {
        case MAKE_PLAYLIST:
            return {
              isLoading: true
            }
        case REQUEST_PLAYLIST:
            return {
              isLoading: true
            }
        case RECEIVE_PLAYLIST:
          return {
              ...payload,
              isLoading: false
          };
        case ADD_TRACK:
            return {
              ...previousState,
              tracks: [payload, ...previousState.tracks]
            };
        case REMOVE_TRACK:
            return {
              ...previousState,
              tracks: [...previousState.tracks.slice(0, payload), ...previousState.tracks.slice(payload + 1)]
            };
        default:
            return previousState;
    }
};

export default tracksReducer;
