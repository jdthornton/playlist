import { all } from 'redux-saga/effects';

import authSagas from './auth';
import playerSagas from './player';
import playlistsSagas from './playlists';
import searchSagas from './search';
import tracksSagas from './tracks';
import modalSagas from './modal';

export default function* rootSaga() {
  yield all([
    authSagas(),
    playerSagas(),
    playlistsSagas(),
    searchSagas(),
    tracksSagas(),
    modalSagas()
  ])
}
