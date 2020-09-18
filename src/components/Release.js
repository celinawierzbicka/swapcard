import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column-reverse",
    padding: 12,
    minWidth: 275,
    marginTop: 12,
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row",
      justifyContent: "space-between",
    }
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

  return (
    <Card className={classes.card} variant="outlined">
      <Typography className={classes.title} variant="button">
        {release.title}
      </Typography>
      <Box className={classes.date}>
        <Typography className={classes.pos}  color="textSecondary">
          Release date: {release.date}
        </Typography>
      </Box>
    </Card>
  );
};

export default Release;
