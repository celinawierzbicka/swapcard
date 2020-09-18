import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 12,
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(3),
  },
  title: {
    fontSize: 16,
  },
  link: {
    textDecoration: "none",
  },
}));

const FavoriteArtist = ({ artist }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const removeFromFavorites = (artist) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: artist });
  }

  const selectArtist = (artist) => {
    localStorage.setItem('selectedArtist', JSON.stringify(artist));
    dispatch({type: "SELECT_ARTIST", payload: artist});
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.card}>
      <Link className={classes.link} to={`/artist/${artist.id}`} onClick={() => selectArtist(artist)}>
        <Typography className={classes.title} variant="button">
          {artist.name}
        </Typography>
      </Link>
        <RemoveCircleOutlineIcon color="primary" onClick={() => removeFromFavorites(artist)}/>
      </CardContent>
    </Card>
  );
};

export default FavoriteArtist;
