import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ArtistItem from "./ArtistItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const SearchResults = ({ artists }) => {
  const classes = useStyles();

  const renderArtists = (artists) => {
    return artists.map((artist) => <ArtistItem key={artist.id} artist={artist} />);
  };

  return <Box className={classes.root}>{renderArtists(artists)}</Box>;
};

export default SearchResults;
