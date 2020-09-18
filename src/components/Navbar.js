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
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  logoWrapper: {
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  logo: {
    width: 130,
    [theme.breakpoints.up('md')]: {
      width: 280,
    },
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
              <img className={classes.logo} src={logo} alt="logo" />
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