import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteArtist from "./FavoriteArtist";

const useStyles = makeStyles((theme) => ({
  favoritesWrapper: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      width: "25%",
      alignSelf: "flex-start",
      padding: theme.spacing(3),
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      borderLeft: `2px solid ${theme.palette.primary.main}`
    },
  },
  favoritesWrapperMobile: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignSelf: "flex-start",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  message: {
    maxWidth: 275,
    marginTop: 12,
  },
}));

const Favorites = ({ displayinMobile }) => {
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

  // Favorites component receives a prop 'diaplayInMobile' with value true or false to assign proper className
  // in mobile view the component is displayed only inside the modal (accessible througn Navbar menu)
  // in desktop view Favorites is displayed only as a side bar on the right side of the page view
  const className = displayinMobile ? classes.favoritesWrapperMobile : classes.favoritesWrapper;

  const renderFavotiteArtists = (artists) => {
    return artists.map((artist) => (
      <FavoriteArtist key={artist.id} artist={artist} />
    ));
  };

  return (
    <Box className={className}>
      <Typography variant="h6">Favorite artists:</Typography>
      {favoriteArtists.length > 0
        ? renderFavotiteArtists(favoriteArtists)
        : noFavoritesMessage}
    </Box>
  );
};

export default Favorites;
