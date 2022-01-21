import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SymptomJournal from "./container/SymptomJournal";
import { Box } from "@chakra-ui/react";
import bgImg from "./assets/images/space2.png";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
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
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Box
          backgroundImage={bgImg}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/symptoms">
                <SymptomJournal />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/me">
                <Profile />
              </Route>
              <Route exact path="/profiles/:profileId">
                <Profile />
              </Route>
            </div>
            <Footer />
          </div>
        </Box>
      </Router>
    </ApolloProvider>
  );
}

export default App;
