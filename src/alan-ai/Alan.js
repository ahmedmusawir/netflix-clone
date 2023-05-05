import { useEffect, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useDispatch } from "react-redux";
import {
  selectGenreOrCategory,
  searchMovie,
} from "../features/currentGenreOrCategory";
import { useNavigate } from "react-router-dom";

import { ColorModeContext } from "../contexts/ToggleColorMode";
import { fetchToken } from "../utils";

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    alanBtn({
      key: "0c7e3b118701baa7f45d7841c34b1cce2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        if (command === "search") {
          dispatch(searchMovie(query));
        }

        if (command === "chooseGenre") {
          const foundGenre = genres.find(
            (g) => g.name.toLowerCase() === genreOrCategory.toLowerCase()
          );

          console.log("Genre by Alan:", foundGenre);

          if (foundGenre) {
            navigate("/");
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            const category = genreOrCategory.startsWith("top")
              ? "top_rated"
              : genreOrCategory;

            console.log("Category by Alan:", category);

            navigate("/");
            dispatch(selectGenreOrCategory(category));
          }
        }

        if (command === "changeMode") {
          // Call the client code that will react to the received command
          if (command === "changeMode") {
            if (mode === "dark") {
              setMode("dark");
            }
          }
        }
        if (command === "changeMode") {
          // Call the client code that will react to the received command
          if (command === "changeMode") {
            if (mode === "light") {
              setMode("light");
            }
          }
        }
        if (command === "login") {
          // Call the client code that will react to the received command
          fetchToken();
        }

        if (command === "logout") {
          localStorage.clear();
          window.location.href = "/";
        }
      },
    });
  }, []);
};

export default useAlan;
