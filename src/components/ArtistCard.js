import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import defaultImage from '../images.png';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(2),
    padding: 0,
    flexBasis: 345,
  },
  media: {
    height: 230,
  },
  link: {
    textDecoration: "none",
  },
}));

const ArtistCard = ({ artist }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const image = artist.mediaWikiImages.length > 0 ? artist.mediaWikiImages[0].url : defaultImage;
  const imageTitle = artist.mediaWikiImages.length > 0 ? artist.mediaWikiImages[0].canonicalTitle : null;
  const description = artist.disambiguation ? artist.disambiguation : "No description available."

  const selectArtist = (artist) => {
    localStorage.setItem('selectedArtist', JSON.stringify(artist));
    dispatch({type: "SELECT_ARTIST", payload: artist});
  }

  return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={image}
          title={imageTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {artist.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link className={classes.link} to={`/artist/${artist.id}`} onClick={() => selectArtist(artist)}>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
  );
}

export default ArtistCard;
