import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import logo from '../logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  logoWrapper: {
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Box className={classes.logoWrapper}>
              <img src={logo} alt="logo" />
            </Box>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Artists Base
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;