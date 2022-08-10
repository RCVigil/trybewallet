import { NEW_EXPENSES, NEW_WALLET, DEL_LINE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_WALLET:
    return {
      ...state,
      currencies: action.payload,
    };
  case NEW_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.value],
      idToEdit: action.payload,
    };
  case DEL_LINE:
    return {
      ...state,
      expenses: [...state.expenses].filter((elem) => elem.id !== action.payload),
    };

  default:
    return state;
  }
}

export default wallet;
