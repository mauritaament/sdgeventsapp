import * as actionTypes from '../constants/action-types'

const initialState = {
  loggedIn: true
}

function rootReducer(state = initialState, action) {
  if (action.type === actionTypes.LOGIN_USER) {
    state = {...state, loggedIn: action.payload}
  }
  return state
}

export default rootReducer
