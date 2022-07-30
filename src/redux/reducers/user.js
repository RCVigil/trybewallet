// Esse reducer será responsável por tratar as informações da pessoa usuária
import { NEW_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_USER:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;
