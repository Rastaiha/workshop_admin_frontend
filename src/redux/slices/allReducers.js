import { combineReducers } from 'redux';

import { accountReducer } from './account';
import { currentStateReducer } from './currentState';
import { eventReducer } from './event'
import { mentorReducer } from './mentor';
import { notificationReducer } from './notifications';
import { redirectReducer } from './redirect';
import { translatorReducer } from './translator';

const allReducers = combineReducers({
  account: accountReducer,
  currentState: currentStateReducer,
  event: eventReducer,
  notifications: notificationReducer,
  mentor: mentorReducer,
  redirect: redirectReducer,
  Intl: translatorReducer,
});

export default allReducers;
