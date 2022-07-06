import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider, createHttpLink } from "@apollo/react-hooks";
import { setContext } from "@apollo/client/link/context";
import { getAccessToken } from "./accessToken";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getAccessToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  credentials: "include",
});

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
// });

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
