import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/aparna-ch]/apz",
  cache: new InMemoryCache(),
});

export default client;