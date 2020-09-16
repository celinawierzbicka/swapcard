import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Favorites from '../components/Favorites';
import "./Home.css";

const Home = () => {
  const [artists, setArtists] = useState([]);

  const handleChange = (data) => {
    setArtists(data.search.artists.nodes);
  };

  return (
    <div className="Home">
      <SearchBar handleChange={handleChange} />
      <SearchResults artists={artists}/>
      <Favorites />
    </div>
  );
};

export default Home;
