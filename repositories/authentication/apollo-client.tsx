import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '../../database/StoreData';

const httpLink = new HttpLink({ uri: 'https://api-mumbai.lens.dev/' });

const authLink = new ApolloLink(async (operation, forward) => {
  const token = await getData('auth_token');

  if (token !== undefined) {
    const json = JSON.parse(token);
    const test = json.authenticate.accessToken;
    operation.setContext({
      headers: {
        'x-access-token': `Bearer ${test}`
      }
    });
  } else {
    operation.setContext({
      headers: {
        'x-access-token': ''
      }
    });
  }



  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
