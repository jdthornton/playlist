import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getTrack, getTracks, getPlaylistTracks, getPlaylist, getToken, savePlaylist } from '../utils/SpotifyManager';
import { getAuthState } from './auth';
import { getSearchState } from './search';

import {
  REQUEST_PLAYLIST,
  MAKE_PLAYLIST,
  RECEIVE_PLAYLIST
} from '../reducers/tracks';
import {
  makeSelection
} from '../reducers/search';

function* makePlaylistSaga({payload}){
  let { token } = yield select(getAuthState)
  let { selection } = yield select(getSearchState);
  if (selection) {
      let { tracks, mainTrack } = yield call(getTracks, selection, token);

      yield put({ type: RECEIVE_PLAYLIST, payload: { tracks: tracks, mainTrack: mainTrack, userPlaylist: false }})
  } else {
      let track = yield call(getTrack, payload, token);
      let { tracks, mainTrack } = yield call(getTracks, track, token);

      yield put({ type: RECEIVE_PLAYLIST, payload: { tracks: tracks, mainTrack: mainTrack, userPlaylist: false }})
      yield put(makeSelection(track));
  }
}

function* getPlaylistSaga({payload}){
  let { token } = yield select(getAuthState);
  let { selection } = yield select(getSearchState);

  let tracks = yield call(getPlaylistTracks, payload, token);
  yield put({ type: RECEIVE_PLAYLIST, payload: { tracks: tracks, mainTrack: { image: selection.images[0].url, title: selection.name }, userPlaylist: true }})
}

export default function* tracksSagas() {
  yield takeEvery(MAKE_PLAYLIST, makePlaylistSaga);
  yield takeEvery(REQUEST_PLAYLIST, getPlaylistSaga);
}
