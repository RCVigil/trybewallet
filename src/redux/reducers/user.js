// Esse reducer será responsável por tratar as informações da pessoa usuária

import { NEW_USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: 'alguem@alguem.com',
  },
};

function userLog(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_USER:
    return {
      ...state,
      state: action.payload.user,
    };
  default:
    return state;
  }
}

export default userLog;
