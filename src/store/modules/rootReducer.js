import { combineReducers } from 'redux';

import user from './user/reducer';
import utils from './utils/reducer';

export default combineReducers({
  user,
  utils,
});
