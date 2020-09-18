import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const SimpleBreadcrumbs = ({ artist }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/">
        Search Results
      </Link>
      <Typography color="textPrimary">Artist: {artist.name}</Typography>
    </Breadcrumbs>
  );
};

export default SimpleBreadcrumbs;
