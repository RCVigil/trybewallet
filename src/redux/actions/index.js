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
