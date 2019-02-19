import { savePlaylist, login, getUser } from '../utils/SpotifyManager';

export const setModal = "SET_MODAL";
export const spotifyError = "SHOW_ERROR";
export const savePlaylist = "SAVE_PLAYLIST"

const initialState = { isOpen: false, error: false };

export const actionCreators = {
    openModal: (modal) => ({ type: setModal, isOpen: modal }),

    closeModal: () => ({ type: setModal, isOpen: false }),

    savePlaylist: (name, privacy) => ({ type: setModal, isOpen: "loading" })
};

const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === setModal) {
        return {
            isOpen: action.isOpen
        };
    }
    if (action.type === spotifyError) {
        return {
            isOpen: true,
            error: action.error
        };
    }

    return state;
};

export default reducer;
