export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SAVE_PLAYLIST_REQUEST = "SAVE_PLAYLIST_REQUEST";
export const SAVE_PLAYLIST_REQUEST__SUCCESS = "SAVE_PLAYLIST_REQUEST__SUCCESS";
export const SAVE_PLAYLIST_REQUEST__FAILURE = "SAVE_PLAYLIST_REQUEST__FAILURE";
export const UPDATE_INPUT = "UPDATE_INPUT";

export const openModal = () => ({ type: OPEN_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const handleSavePlaylist = (name, privacy) => ({ type: SAVE_PLAYLIST_REQUEST, payload: { name, privacy } })
export const handleInputChange = (e) => ({ type: UPDATE_INPUT, payload: {name: e.target.name, value: e.target.value} })

const initialState = { isOpen: false, error: false, isLoading: false, privacy: 'public', name: '' };

export default function(previousState = initialState, { type, payload }){
  switch (type) {
    case OPEN_MODAL:
      return {
        ...initialState,
        isOpen: true
      }
    case CLOSE_MODAL:
      return initialState;
    case UPDATE_INPUT:
      return {
        ...previousState,
        [payload.name]: payload.value
      }
    case SAVE_PLAYLIST_REQUEST:
      return {
        ...previousState,
        isLoading: true
      }
    case SAVE_PLAYLIST_REQUEST__SUCCESS:
      return initialState;
    case SAVE_PLAYLIST_REQUEST__FAILURE:
      return {
        ...previousState,
        error: true,
        isLoading: false
      }
    default:
      return previousState;
  }
}
