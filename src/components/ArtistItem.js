import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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
    flexBasis: 345,
  },
  media: {
    height: 230,
  },
}));

const ArtistItem = ({ artist }) => {
  const classes = useStyles();

  const image = artist.mediaWikiImages.length > 0 ? artist.mediaWikiImages[0].url : defaultImage;
  const imageTitle = artist.mediaWikiImages.length > 0 ? artist.mediaWikiImages[0].canonicalTitle : null;
  const description = artist.disambiguation ? artist.disambiguation : "No description available."

  return (
      <Card className={classes.root}>
        <CardActionArea>
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
        </CardActionArea>
        <CardActions>
          <Link to={`/artist/${artist.id}`}>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
  );
}

export default ArtistItem;
