import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useGetGenresQuery } from "../../services/TMDB";
import { useTheme } from "@mui/styles";
import useStyles from "./styles";
import genresIcons from "../../assets/genres";
import { useDispatch, useSelector } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

const Sidebar = ({ setMobileOpen }) => {
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const theme = useTheme();
  const classes = useStyles();

  const { data, isFetching } = useGetGenresQuery();
  // console.log('A Genre:', genreIdOrCategoryName);
  const dispatch = useDispatch();

  useEffect(() => {
    setMobileOpen(false);
  }, [genreIdOrCategoryName]);

  if (isFetching) {
    return (
      <Box display={"flex"} justifyContent={"center"}>
        <CircularProgress size={"4rem"} />
      </Box>
    );
  }

  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  const redLogo =
    "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
  const blueLogo =
    "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

  return (
    <div>
      <Link to={"/"} className={classes.imageLink}>
        <img
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="Filmpire Logo"
          className={classes.image}
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader sx={{ mt: "3rem" }}>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItemButton
              onClick={() => dispatch(selectGenreOrCategory(value))}
            >
              <ListItemIcon>
                <img
                  src={genresIcons[label.toLocaleLowerCase()]}
                  className={classes.genreImage}
                  height={30}
                  alt="whatever"
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genre</ListSubheader>
        {data.genres.map(({ id, name }) => (
          <Link key={id} className={classes.links} to="/">
            <ListItemButton onClick={() => dispatch(selectGenreOrCategory(id))}>
              <ListItemIcon>
                <img
                  src={genresIcons[name.toLowerCase()]}
                  className={classes.genreImage}
                  height={30}
                  alt="whatever"
                />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
