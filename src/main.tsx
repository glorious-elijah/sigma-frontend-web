import { StrictMode } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/", // TODO replace with backend endpoint setup in a dotenv
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
