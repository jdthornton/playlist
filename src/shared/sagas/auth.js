import { call, put, takeEvery } from 'redux-saga/effects';

import { RECEIVE_USER_DATA, RECEIVE_TOKEN, LOGIN } from '../reducers/auth';
import { login, getUser } from '../utils/SpotifyManager';

export const getAuthState = ({auth}) => auth

export function* loginSaga(){
  const token = yield call(login)
  yield put({type: RECEIVE_TOKEN, payload: token})

  const user = yield call(getUser, token);
  yield put({type: RECEIVE_USER_DATA, payload: user});
}

export default function* authSagas() {
  yield takeEvery(LOGIN, loginSaga);
}
