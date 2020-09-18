import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const SimpleBreadcrumbs = ({ artist }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Search Results
      </Link>
      <Typography color="textPrimary">Artist: {artist.name}</Typography>
    </Breadcrumbs>
  );
};

export default SimpleBreadcrumbs;
