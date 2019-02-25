import { call, put, select, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getTracks, getPlaylistTracks } from '../utils/SpotifyManager';
import { getAuthState } from './auth';
import { getSearchState } from './search';
import { addToast } from '../reducers/toast';

import {
  REQUEST_PLAYLIST,
  MAKE_PLAYLIST,
  REQUEST_PLAYLIST__SUCCESS,
  REQUEST_PLAYLIST__FAILURE
} from '../reducers/tracks';

export const getTracklist = ({tracks}) => tracks.tracks

function* makePlaylistSaga(action){
  try {
    yield put(push("/make?id="+action.payload.id))
    let { token } = yield select(getAuthState)

    let payload = yield call(getTracks, action.payload, token);
    yield put({ type: REQUEST_PLAYLIST__SUCCESS, payload})

  } catch (e) {
    yield put(push("/"))
    yield put(addToast("Error Loading Playlist"))
  }
}

function* getPlaylistSaga(action){
  try {
    yield put(push("/get?id="+action.payload.id))
    let { token } = yield select(getAuthState);

    let payload = yield call(getPlaylistTracks, action.payload.tracks.href, token);
    yield put({ type: REQUEST_PLAYLIST__SUCCESS, payload})

  } catch (e) {
    yield put(push("/"))
    yield put(addToast("Error Loading Playlist"))
  }

}

export default function* tracksSagas() {
  yield takeEvery(MAKE_PLAYLIST, makePlaylistSaga);
  yield takeEvery(REQUEST_PLAYLIST, getPlaylistSaga);
}
