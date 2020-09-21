import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import "./index.css";
import Home from "./pages/Home";
import ArtistDetails from "./pages/ArtistDetails";
import Navbar from "./components/Navbar";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const store = createStore(reducer);

const client = new ApolloClient({
  uri: "https://graphbrainz.herokuapp.com",
  onError: (({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );

    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    };
  }),
});

const Root = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/artist/:id" exact component={ArtistDetails} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
