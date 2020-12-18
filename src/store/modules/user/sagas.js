import { all, takeLatest, put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setSignInError, signInSuccess, setLoadingSingin } from './actions';
import api from '../../../services/api';

export function* initCheck() {
  const userData = yield call([AsyncStorage, 'getItem'], '@user:data');

  if (userData) {
    yield put(signInSuccess(JSON.parse(userData)));
  }
}

function* singnin({ payload }) {
  try {
    yield put(setLoadingSingin(true));
    const response = yield call(api.post, 'usuario/login/', {
      login: payload.login,
      senha: payload.senha,
    });

    yield put(signInSuccess(response.data));

    yield call(
      [AsyncStorage, 'setItem'],
      '@user:data',
      JSON.stringify(response.data)
    );

    const { token } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;
    yield put(setSignInError(false));
  } catch (error) {
    yield put(setSignInError(true));
  } finally {
    yield put(setLoadingSingin(false));
  }
}

export default all([takeLatest('@user/SIGN_IN_REQUEST', singnin)]);
