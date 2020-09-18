import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteArtist from "./FavoriteArtist";

const useStyles = makeStyles((theme) => ({
  favoritesWrapper: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    // border: `solid 1px ${theme.palette.primary.main}`,
    borderRadius: 5,
  },
  message: {
    maxWidth: 275,
    marginTop: 12,
  },
}));

const Favorites = () => {
  const classes = useStyles();
  const favoriteArtists = useSelector((state) => state.favoriteArtists);

  useEffect(() => {
    localStorage.setItem("favoriteArtists", JSON.stringify(favoriteArtists));
  }, [favoriteArtists]);

  const noFavoritesMessage = (
    <Box className={classes.message}>
      <Typography>
        You don't have any favorite artists yet. Search for artists and add them
        to favorites.
      </Typography>
    </Box>
  );

  const renderFavotiteArtists = (artists) => {
    return artists.map((artist) => <FavoriteArtist artist={artist} />);
  };

  return (
    <Box className={classes.favoritesWrapper}>
      <Typography variant="h6">Favorite artists:</Typography>
      {favoriteArtists.length > 0
        ? renderFavotiteArtists(favoriteArtists)
        : noFavoritesMessage}
    </Box>
  );
};

export default Favorites;
