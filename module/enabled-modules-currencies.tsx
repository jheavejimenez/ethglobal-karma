import { gql } from '@apollo/client/core';
import { apolloClient } from '../repositories/authentication/apollo-client';
import { login } from '../repositories/authentication/login';
import { getAddressFromSigner } from '../ethers.service';
import { prettyJSON } from '../helpers';

const ENABLED_CURRENCIES = `
  query {
    enabledModuleCurrencies {
      name
      symbol
      decimals
      address
    }
  }
`;

const enabledCurrenciesRequest = () => {
  return apolloClient.query({
    query: gql(ENABLED_CURRENCIES),
  });
};

export const enabledCurrencies = async () => {
  const address = getAddressFromSigner();
  console.log('enabled currencies: address', address);

  await login(address);

  const result = await enabledCurrenciesRequest();

  prettyJSON('enabled currencies: result', result.data);

  return result.data;
};
