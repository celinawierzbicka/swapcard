import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
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
}));

const FavoriteArtist = ({ artist }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const removeFromFavorites = (artist) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: artist });
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.card}>
        <Typography className={classes.title} variant="button">
          {artist.name}
        </Typography>
        <DeleteIcon color="primary" onClick={() => removeFromFavorites(artist)}/>
      </CardContent>
    </Card>
  );
};

export default FavoriteArtist;
