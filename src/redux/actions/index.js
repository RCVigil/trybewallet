// Coloque aqui suas actions
export const NEW_USER = 'NEW_USER';

export const newUser = (email) => ({
  type: NEW_USER,
  email,
});

export const NEW_WALLET = 'NEW_WALLET';

export const newWallet = (payload) => ({
  type: NEW_WALLET,
  payload,
});

export const NEW_EXPENSES = 'NEW_EXPENSES';

export const newExpenses = (value, payload) => ({
  type: NEW_EXPENSES,
  value,
  payload,
});

export const DEL_LINE = 'DEL_LINE';

export const deleteLine = (payload) => ({
  type: DEL_LINE,
  payload,
});
