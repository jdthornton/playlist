import { call, put, select, takeEvery } from 'redux-saga/effects';

import {
  LOAD_TRACK,
  SELECT_TRACK,
  PLAY_NEXT_TRACK,
  PLAY_PREVIOUS_TRACK
} from '../reducers/player';

export const getTracks = ({tracks}) => tracks.tracks
export const getCurrentTrack = ({player}) => player.loadedTrack

function* trackSaga({payload}){
  let tracks = yield select(getTracks);
  yield put({type: LOAD_TRACK, payload: {index: payload, track: tracks[payload]}})
}

function* playNextSaga(){
  let tracks = yield select(getTracks);
  let { index } = yield select(getCurrentTrack);
  for (let i = index + 1; i < tracks.length; i++) {
      if (tracks[i].preview_url) {
          yield put({ type: LOAD_TRACK, payload: { index: i, track: tracks[i] } })
          return;
      }
  }
}

function* playPreviousSaga(){
  let tracks = yield select(getTracks);
  let { index } = yield select(getCurrentTrack);
  for (let i = index - 1; i >= 0; i--) {
      if (tracks[i].preview_url) {
          yield put({ type: LOAD_TRACK, payload: { index: i, track: tracks[i] } })
          return;
      }
  }
}

export default function* playerSagas() {
  yield takeEvery(SELECT_TRACK, trackSaga);
  yield takeEvery(PLAY_NEXT_TRACK, playNextSaga);
  yield takeEvery(PLAY_PREVIOUS_TRACK, playPreviousSaga);
}
