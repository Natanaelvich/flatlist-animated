import { all } from 'redux-saga/effects';

import user, { initCheck } from './user/sagas';

export default function* rootSaga() {
  return yield all([initCheck(), user]);
}
