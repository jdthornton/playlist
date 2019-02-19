import { call, put, select, takeEvery } from 'redux-saga/effects';
import { autocomplete } from '../utils/SpotifyManager';
import { getAuthState } from './auth';

import {
  REQUEST_SUGGESTIONS,
  REQUEST_SUGGESTIONS__SUCCESS,
  REQUEST_SUGGESTIONS__FAILURE
} from '../reducers/search';

export const getSearchState = ({search}) => search;

function* suggestionsSaga({payload}){
  try {
    const { token } = yield select(getAuthState);
    const suggestions = yield call(autocomplete, payload, token);

    yield put({ type: REQUEST_SUGGESTIONS__SUCCESS, payload: suggestions.tracks.items })
  } catch (e) {
    console.log("ERROR RECIEVING SUGGESTIONS");
  }

}

export default function* searchSagas() {
  yield takeEvery(REQUEST_SUGGESTIONS, suggestionsSaga);
}
