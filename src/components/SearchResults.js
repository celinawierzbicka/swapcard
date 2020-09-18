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
  const { artists, loading, error, emptyStringSearch, searchTerm } = props;
  const classes = useStyles();

  const errorMessage = "Sorry, something went wrong. Please try again.";
  const emptyStringMessage = "Please make sure the search field is not empty.";
  const infoMessage = "Type the name of the artist and hit enter.";

  const displayInfoMessage = searchTerm === "" && !error;

  const renderArtists = (artists) => {
    return artists.map((artist) => (
      <ArtistCard key={artist.id} artist={artist} />
    ));
  };

  return (
    <Box className={classes.root}>
      {loading ? <ClipLoader className={classes.spinner} size={100} loading={loading} /> : null}
      {error ? <Alert severity="error">{errorMessage}</Alert> : null}
      {emptyStringSearch ? <Alert severity="error">{emptyStringMessage}</Alert> : null}
      {!loading && !error && !emptyStringSearch ? renderArtists(artists) : null}
      {displayInfoMessage ? <Alert severity="info">{infoMessage}</Alert> : null}
    </Box>
  );
};

export default SearchResults;
