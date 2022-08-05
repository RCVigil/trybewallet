const currenciesApi = 'https://economia.awesomeapi.com.br';

const getCurrenciesMoney = async () => {
  try {
    const request = await fetch(`${currenciesApi}/json/all`);
    const data = await request.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getCurrenciesMoney;
