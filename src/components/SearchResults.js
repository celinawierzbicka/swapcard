import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import ClipLoader from "react-spinners/ClipLoader";
import ArtistCard from "./ArtistCard";

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
  alert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const SearchResults = (props) => {
  const { artists, loading, error, emptyStringSearch } = props;
  const classes = useStyles();

  const errorMessage = error ? "Sorry, something went wrong. Please try again." : "Please make sure the search field is not empty.";

  const renderArtists = (artists) => {
    return artists.map((artist) => (
      <ArtistCard key={artist.id} artist={artist} />
    ));
  };

  return (
    <Box className={classes.root}>
      {loading ? <ClipLoader className={classes.spinner} size={100} loading={loading} /> : null}
      {error || emptyStringSearch ? <Alert severity="error">{errorMessage}</Alert> : null}
      {!loading && !error && !emptyStringSearch ? renderArtists(artists) : null}
    </Box>
  );
};

export default SearchResults;
