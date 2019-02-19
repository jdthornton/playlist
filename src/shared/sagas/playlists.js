import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getPlaylists, getToken, getPlaylistsByCategory } from '../utils/SpotifyManager';
import { getAuthState } from './auth';

import {
  RECEIVE_TOKEN
} from '../reducers/auth';
import {
  REQUEST_PLAYLISTS,
  REQUEST_PLAYLISTS__SUCCESS,
  REQUEST_PLAYLISTS__FAILURE
} from '../reducers/playlists';


function* playlistsSaga({payload}){
  try {
    const auth = yield select(getAuthState);
    let token;
    if (auth.token && auth.expiration > Date.now()) {
        token = auth.token;
    } else {
      let response = yield call(getToken);
      token = response.token
      yield put({ type: RECEIVE_TOKEN, payload: token });
    }

    let { playlists } = yield call(getPlaylistsByCategory, payload.slug, token);
    yield put({ type: REQUEST_PLAYLISTS__SUCCESS, payload: playlists.items })

  } catch (e) {
    console.log("ERROR", e);
  }
}


export default function*() {
  yield takeEvery(REQUEST_PLAYLISTS, playlistsSaga);
}
