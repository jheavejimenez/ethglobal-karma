import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const APIURL = 'https://api-mumbai.lens.dev/'

export const apolloClient= new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})
