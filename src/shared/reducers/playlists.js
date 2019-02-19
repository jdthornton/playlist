export const REQUEST_PLAYLISTS = 'REQUEST_PLAYLISTS';
export const REQUEST_PLAYLISTS__SUCCESS = 'REQUEST_PLAYLISTS__SUCCESS';
export const REQUEST_PLAYLISTS__FAILURE = 'REQUEST_PLAYLISTS__FAILURE';

export const requestPlaylists = (categoryName, slug) => ({type: REQUEST_PLAYLISTS, payload: {categoryName, slug}});

const initialState = { playlists: [], categoryName: "Featured", isLoading: false };

const playlistsReducer = (previousState = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_PLAYLISTS:
            return {
              ...previousState,
              categoryName: payload.categoryName,
              isLoading: true
            }
        case REQUEST_PLAYLISTS__SUCCESS:
            return {
              ...previousState,
              playlists: payload,
              isLoading: false
            };
        default:
            return previousState;
    }
};

export default playlistsReducer;
