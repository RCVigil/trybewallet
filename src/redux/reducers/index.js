// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
import { combineReducers } from 'redux';
import userLog from './user';
import walletCash from './wallet';

const rootReducer = combineReducers({
  user: userLog,
  wallet: walletCash,
});

export default rootReducer;
