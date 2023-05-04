import React, { useRef } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
} from "./components";
import useStyles from "./styles";
import useAlan from "./alan-ai/Alan";
import useScrollToTop from "./utils/useScrollToTop";

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();
  useScrollToTop();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/approved" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="*" element="Not Found" />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
