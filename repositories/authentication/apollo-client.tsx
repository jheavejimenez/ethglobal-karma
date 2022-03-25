import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpLink = new HttpLink({ uri: 'https://api-mumbai.lens.dev/' });

const authLink = new ApolloLink((operation, forward) => {
  const token = AsyncStorage.getItem('auth_token');

  operation.setContext({
    headers: {
      'x-access-token': token ? `Bearer ${token}` : ''
    }
  });

  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
