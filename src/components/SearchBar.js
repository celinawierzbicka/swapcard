import React from "react";
import { ApolloConsumer } from "react-apollo";
import { SEARCH_ARTISTS } from "../queries";

const Search = ({ handleChange }) => {
  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <div>
            <input
              type="search"
              placeholder="Search for artists..."
              onChange={async (event) => {
                event.persist();
                const { data } = await client.query({
                  query: SEARCH_ARTISTS,
                  variables: { searchTerm: event.target.value },
                });
                handleChange(data);
              }}
            />
          </div>
        );
      }}
    </ApolloConsumer>
  );
};

export default Search;
