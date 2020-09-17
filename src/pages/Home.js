import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Favorites from '../components/Favorites';
import { SEARCH_ARTISTS } from "../queries";
import "./Home.css";

const Home = () => {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("nirvana");
  const { loading, error, data, refetch } = useQuery(SEARCH_ARTISTS, {variables: { searchTerm }, errorPolicy: 'all' })
  
  useEffect(() => {
    refetch();
  }, [searchTerm])

  useEffect(() => {
    if(data && data.search.artists) setArtists(data.search.artists.nodes)
  }, [data])

  const handleChange = (inputValue) => {
    setSearchTerm(inputValue);
  };

  return (
    <div className="Home">
      <SearchBar handleChange={handleChange} />
      <SearchResults artists={artists} loading={loading} error={error}/>
      <Favorites />
    </div>
  );
};

export default Home;
