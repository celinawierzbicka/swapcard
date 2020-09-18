import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginTop: 12,
  },
  card: {
    display: "flex",
    flexDirection: "column-reverse",
    padding: 12,
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row",
      justifyContent: "space-between",
    }
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 16,
  },
  date: {
    marginRight: 14,
    display: "flex",
  },
  pos: {
    marginBottom: 6,
  },
}));

const Release = ({ release }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.card}>
        <Typography className={classes.title} variant="button">
          {bull} {release.title}
        </Typography>
        <Box className={classes.date}>
          <Typography className={classes.pos}  color="textSecondary">
            Release date: 
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {release.date}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Release;
