const currenciesApi = 'https://economia.awesomeapi.com.br';

const getCurrenciesMoney = () => (
  fetch(`${currenciesApi}/json/all`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok
          ? Promise.resolve(json)
          : Promise.reject(json)
        ))
    ))
);

export default getCurrenciesMoney;
