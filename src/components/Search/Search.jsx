import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../../features/currentGenreOrCategory";
import { useLocation, useNavigate } from "react-router-dom";
import useStyles from "./styles";

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  // const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // navigate("/");
      dispatch(searchMovie(query));
    }
  };

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     console.log("Key Press on Search ENTER", query);
  //     dispatch(searchMovie(query));
  //   }
  // };

  // useEffect(() => {
  //   setQuery("");
  //   dispatch(searchMovie("")); // Reset the search query in the Redux store
  // }, [location.pathname, dispatch]);

  if (location.pathname !== "/") return null;

  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          placeholder: "Search",
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
