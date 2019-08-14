import axios from 'axios';
import { takeLatest, put, call, fork } from 'redux-saga/effects';
import {
  LOAD_COUNTRIES_INFO_REQUEST,
  LOAD_COUNTRIES_INFO_SUCCESS,
  LOAD_COUNTRIES_INFO_FAILURE,
} from '../reducers/countriesInfo';

axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes';

function loadCountriesInfoAPI() {
  return axios.get('');
}

function* loadCountriesInfo() {
  try {
    const result = yield call(loadCountriesInfoAPI);
    yield put({
      type: LOAD_COUNTRIES_INFO_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOAD_COUNTRIES_INFO_FAILURE,
      error: e,
    });
  }
}

function* watchLoadCountriesInfo() {
  yield takeLatest(LOAD_COUNTRIES_INFO_REQUEST, loadCountriesInfo);
}

export default function* rootSaga() {
  yield fork(watchLoadCountriesInfo);
}
