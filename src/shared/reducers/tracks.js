export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REQUEST_PLAYLIST = "REQUEST_PLAYLIST";
export const REQUEST_PLAYLIST__SUCCESS = "REQUEST_PLAYLIST__SUCCESS";
export const REQUEST_PLAYLIST__FAILURE = "REQUEST_PLAYLIST__FAILURE";
export const ADD_TRACK = "ADD_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const MAKE_PLAYLIST = 'MAKE_PLAYLIST';

export const makePlaylist = payload => ({type: MAKE_PLAYLIST, payload})
export const viewPlaylist = payload => ({type: REQUEST_PLAYLIST, payload})
export const savePlaylist = () => ({ type: "SET_MODAL", isOpen: "playlist" })
export const addTrack = payload => ({ type: ADD_TRACK, payload })
export const removeTrack = payload => ({ type: REMOVE_TRACK, payload })

const initialState = { mainTrack: {}, tracks: [], isLoading: false };

const tracksReducer = (previousState = initialState, { type, payload }) => {
    switch (type) {
        case MAKE_PLAYLIST:
            return {
              ...initialState,
              mainTrack: { image: payload.album.images[0].url, title: `${payload.name}, ${payload.artists[0].name}` },
              isLoading: true
            }
        case REQUEST_PLAYLIST:
            return {
              ...initialState,
              mainTrack: { image: payload.images[0].url, title: payload.name },
              isLoading: true
            }
        case REQUEST_PLAYLIST__SUCCESS:
          return {
              ...previousState,
              tracks: payload,
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
