import {AUTH} from './actionTypes';

export const storeProfile = (profileObj) => ({
    type: AUTH,
    payload: profileObj,
  });