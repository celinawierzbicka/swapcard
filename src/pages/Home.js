import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useSelector, useDispatch } from "react-redux";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useDebounce from "../hooks/useDebounce";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Favorites from "../components/Favorites";
import { SEARCH_ARTISTS } from "../queries";

const useStyles = makeStyles((theme) => ({
  mainHome: {
    display: "flex",
  },
  wrapper: {
    width: "100%",
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
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const { loading, error, data, refetch } = useQuery(SEARCH_ARTISTS, {
    variables: { searchTerm },
    errorPolicy: "all",
    skip: isFirstRender,
    fetchPolicy: 'cache-and-network',
  });

  // new data is fetched on every update of debouncedSearchTerm using Apollo's refetch function
  useEffect(() => {
    refetch();
  }, [debouncedSearchTerm, refetch]);

  useEffect(() => {
    if (data && data.search.artists) dispatch({ type: "SEARCH_ARTISTS", payload: data.search.artists.nodes });
  }, [data, dispatch]);

  // searchTerm is updated on search form submit and not on each new letter
  // typed to prevent excessive number or queries that slow down loading of results.
  // If form is sumitted with empty string, searchTerm is not updated to prevent call to database,
  // and instead alert on no empty string search is displayed
  const handleChange = async (inputValue) => {
    if(inputValue === "") {
      setEmptyStringSearch(true);
    } else {
      setEmptyStringSearch(false);
      await dispatch({ type: "SET_SEARCH_TERM", payload: inputValue });
      setIsFirstRender(false);
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
          searchTerm={searchTerm}
        />
      </Box>
      <Favorites displayinMobile={false} />
    </Container>
  );
};

export default Home;
