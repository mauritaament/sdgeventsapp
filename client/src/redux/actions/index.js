import {LOGIN_USER} from '../constants/action-types';

export function loginUser(payload) {
  return {type: LOGIN_USER, payload};
};