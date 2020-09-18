import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Chip, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { useSelector, useDispatch } from "react-redux";
import Release from "../components/Release";
import Favorites from "../components/Favorites";

const useStyles = makeStyles((theme) => ({
  mainArtistDetails: {
    display: "flex",
    justifyContent: "center",
  },
  artistDetails: {
    padding: theme.spacing(6),
    width: "50%",
  },
  sectionHeading: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4),
  },
  sectionTags: {
    marginBottom: theme.spacing(4),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  favorites: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  star: {
    marginLeft: theme.spacing(1),
  },
  filled: {
    fill: "yellow",
  },
  empty: {
    fill: "none",
  },
}));

const ArtistDetails = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  // aertist and facoriteArtists are stores in Redux store
  const artist = useSelector((state) => state.selectedArtist);
  const favoriteArtists = useSelector((state) => state.favoriteArtists);

  useEffect(() => {
    localStorage.setItem("favoriteArtists", JSON.stringify(favoriteArtists));
  }, [favoriteArtists]);

  const isFavorite = favoriteArtists.some((favArt) => favArt.id === artist.id);

  const starIcon = isFavorite ? (
    <StarIcon
      color="primary"
      className={classes.star}
      onClick={() => removeFromFavorites(artist)}
    />
  ) : (
    <StarBorderIcon
      className={classes.star}
      onClick={() => addToFavorites(artist)}
    />
  );

  const favoritesActionText = isFavorite
    ? "Remove from favorites"
    : "Add to favorites";

  const handleClose = () => setOpen(false);

  const addToFavorites = (artist) => {
    setOpen(true);
    dispatch({ type: "ADD_TO_FAVORITES", payload: artist });
  };

  const removeFromFavorites = (artist) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: artist });
  };

  const renderTags = (tags) => {
    return tags.map((tag, index) => (
      <Chip key={index} label={tag.node.name} className={classes.chip} />
    ));
  };

  const renderReleases = (releases) => {
    return releases.map((release) => (
      <Release key={release.node.id} release={release.node} />
    ));
  };

  return (
    <Container maxWidth="false" className={classes.mainArtistDetails}>
      <Box className={classes.artistDetails}>
        <Box className={classes.sectionHeading}>
          <Typography variant="h2" component="h2">
            {artist.name}
          </Typography>
          <Box className={classes.favorites}>
            <Typography>{favoritesActionText}</Typography>
            {starIcon}
          </Box>
        </Box>
        <Box className={classes.sectionTags}>
          {renderTags(artist.tags.edges)}
        </Box>
        <Box className={classes.sectionReleases}>
          <Typography variant="h5" component="p">
            Releases
          </Typography>
          {renderReleases(artist.releases.edges)}
        </Box>
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleClose} severity="success">
            {artist.name} was added to favorites!
          </Alert>
        </Snackbar>
      </Box>
      <Favorites />
    </Container>
  );
};

export default ArtistDetails;
