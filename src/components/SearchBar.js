import React from "react";
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { SEARCH_ARTISTS } from '../queries';

const Search = () => {
  return (
    <Query query={SEARCH_ARTISTS} variables={{ searchTerm: "Star" }}>
      {({ data, loading, error }) => {
        if(loading) return <div>Loading</div>
        if(error) return <div>Error</div>
        console.log(data)
        return (
          <div>
            <input type="search" />
            <ul>
              {data.search.artists.nodes.map(artist => <div key={artist.id}><Link to={`/artist/${artist.id}`}>{artist.name}</Link></div>)}
            </ul>
          </div>
        )
      }}
    </Query>
    )
};

export default Search;
