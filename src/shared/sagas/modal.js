import { call, select, put, take, takeEvery } from 'redux-saga/effects';
import { SAVE_PLAYLIST_REQUEST, SAVE_PLAYLIST_REQUEST__SUCCESS, SAVE_PLAYLIST_REQUEST__FAILURE, CLOSE_MODAL } from '../reducers/modal';
import { savePlaylist } from '../utils/SpotifyManager';
import { getTracklist } from './tracks';
import { getAuthState, loginSaga } from './auth'
import { addToast } from '../reducers/toast';

export function* savePlaylistSaga({payload}){
  try {
    const auth = yield select(getAuthState);
    const tracks = yield select(getTracklist);
    var id, token;
    if (auth.user && auth.expiration > Date.now()) {
      token = auth.token;
      id = auth.user;
    } else {
      try {
        let login = yield call(loginSaga);
        token = login.token;
        id = login.user.id;
      } catch (e) {
        yield put({ type: CLOSE_MODAL })
        return;
      }
    }

    let isPublic = payload.privacy === "public";
    yield call(savePlaylist, token, id, payload.name, isPublic, tracks);
    yield put({type: SAVE_PLAYLIST_REQUEST__SUCCESS});
    yield put(addToast("Playlist Saved"))
  } catch (e) {
    yield put({type: SAVE_PLAYLIST_REQUEST__FAILURE});
  }
}

export default function* modalSagas() {
  yield takeEvery(SAVE_PLAYLIST_REQUEST, savePlaylistSaga)
}
