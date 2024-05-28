import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";

const client = new ApolloClient({
  uri: "https://birth-names-info.onrender.com/graphql",
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="bg-neutral-100">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
};

export default App;
