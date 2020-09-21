import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";
import Favorites from "./Favorites";

import logo from "../logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  logoWrapper: {
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  logo: {
    width: 130,
    [theme.breakpoints.up("md")]: {
      width: 280,
    },
  },
  moreIcon: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  paper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 4, 3),
  },
  closeIcon: {
    marginLeft: "auto",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const openModal = () => {
    setOpen(true);
    setAnchorEl(null);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const modalBody = (
    <Box className={classes.paper}>
      <CloseIcon className={classes.closeIcon} onClick={closeModal} />
      <Favorites displayinMobile={true} />
    </Box>
  );

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
          <IconButton
            className={classes.moreIcon}
            aria-label="display more actions"
            edge="end"
            color="inherit"
            onClick={openMenu}
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={openModal}>Favorite artists</MenuItem>
      </Menu>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalBody}
      </Modal>
    </div>
  );
};

export default Navbar;
