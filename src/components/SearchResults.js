import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import ClipLoader from "react-spinners/ClipLoader";
import ArtistItem from "./ArtistItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(2),
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    marginTop: theme.spacing(6),
  },
}));

const SearchResults = ({ artists, loading, error }) => {
  const classes = useStyles();

  const renderArtists = (artists) => {
    return artists.map((artist) => (
      <ArtistItem key={artist.id} artist={artist} />
    ));
  };

  return (
    <Box className={classes.root}>
      {loading ? (
        <ClipLoader
          className={classes.spinner}
          size={100}
          loading={loading}
        />
      ) : (
        renderArtists(artists)
      )}
    </Box>
  );
};

export default SearchResults;
