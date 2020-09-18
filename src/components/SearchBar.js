import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  searchBar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up('md')]: {
      width: 350,
    },
  },
  input: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      width: 350,
    },
  },
  searchButton: {
    [theme.breakpoints.up('md')]: {
      width: 350,
    },
  },
}));

const Search = ({ handleChange }) => {
  const classes = useStyles();
  const [inputValue, setSetInputValue] = useState("");

  const onInputChange = (e) => {
    setSetInputValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    handleChange(inputValue);
  };

  return (
    <Box className={classes.wrapper}>
      <form onSubmit={onFormSubmit} className={classes.form}>
        <Box className={classes.searchBar}>
          <TextField
            className={classes.input}
            id="outlined-basic"
            variant="outlined"
            placeholder="Search artists..."
            onChange={onInputChange}
            value={inputValue}
          >
          </TextField>
          <Button
            className={classes.searchButton}
            type="submit"
            variant="contained"
            color="primary"
            onClick={onFormSubmit}
          >
            Search
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Search;
