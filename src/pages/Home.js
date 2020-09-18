import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useSelector, useDispatch } from "react-redux";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Favorites from "../components/Favorites";
import { SEARCH_ARTISTS } from "../queries";

const useStyles = makeStyles((theme) => ({
  mainHome: {
    display: "flex",
  },
  wrapper: {
    [theme.breakpoints.up('md')]: {
      width: "80%",
    },
  }
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // isFirstRender variable is set to prevent initial data fetch with useQuery and "" as initial value of searchTerm
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [emptyStringSearch, setEmptyStringSearch] = useState(false);

  const artists = useSelector(state => state.artists);
  const searchTerm = useSelector((state) => state.searchTerm);

  const { loading, error, data, refetch } = useQuery(SEARCH_ARTISTS, {
    variables: { searchTerm },
    errorPolicy: "all",
    skip: isFirstRender,
  });

  // new data is fetched on every update of searchTerm using Apollo's refetch function
  useEffect(() => {
    refetch();
  }, [searchTerm, refetch]);

  useEffect(() => {
    if (data && data.search.artists) dispatch({ type: "SEARCH_ARTISTS", payload: data.search.artists.nodes });
  }, [data, dispatch]);

  // searchTerm is updated on search form submit and not on each new letter
  // typed to prevent excessive number or queries that slow down loading of results.
  // If form is sumitted with empty string, searchTerm is not updated to prevent call to database,
  // and instead alert on no emty string search is displayed
  const handleChange = (inputValue) => {
    if(inputValue === "") {
      setEmptyStringSearch(true);
    } else {
      setIsFirstRender(false);
      setEmptyStringSearch(false);
      dispatch({ type: "SET_SEARCH_TERM", payload: inputValue });
    }
  };

  return (
    <Container maxWidth={false} className={classes.mainHome}>
      <Box className={classes.wrapper}>
        <SearchBar handleChange={handleChange} />
        <SearchResults
          artists={artists}
          loading={loading}
          error={error}
          emptyStringSearch={emptyStringSearch}
        />
      </Box>
      <Favorites displayinMobile={false} />
    </Container>
  );
};

export default Home;
