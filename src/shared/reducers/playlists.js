export const REQUEST_PLAYLISTS = 'REQUEST_PLAYLISTS';
export const REQUEST_PLAYLISTS__SUCCESS = 'REQUEST_PLAYLISTS__SUCCESS';
export const REQUEST_PLAYLISTS__FAILURE = 'REQUEST_PLAYLISTS__FAILURE';

export const requestPlaylists = payload => ({type: REQUEST_PLAYLISTS, payload});

const initialState = { playlists: [], categoryName: "Featured", isLoading: false, error: false };

const playlistsReducer = (previousState = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_PLAYLISTS:
            return {
              ...previousState,
              categoryName: payload.name,
              isLoading: true
            }
        case REQUEST_PLAYLISTS__SUCCESS:
            return {
              ...previousState,
              playlists: payload,
              isLoading: false,
              error: false
            }
        case REQUEST_PLAYLISTS__FAILURE:
            return {
              ...previousState,
              isLoading: false,
              error: true
            }
        default:
            return previousState;
    }
};

export default playlistsReducer;
