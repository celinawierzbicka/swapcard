import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ArtistDetails from "./pages/ArtistDetails";
import Navbar from "./components/Navbar";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://graphbrainz.herokuapp.com",
});

const Root = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/artist/:id" component={ArtistDetails} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  </Router>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById("root")
);
