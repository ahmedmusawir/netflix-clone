import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  imageLink: {
    display: "flex",
    justifyContent: "center",
    padding: "10% 0",
  },
  image: {
    width: "240px ",
    // filter: "invert(1)",
    // marginTop: "-.5rem",
    // border: ".5rem solid white",
    padding: ".5rem",
    position: "fixed",
    zIndex: 1000,
    background: theme.palette.mode === "dark" ? "#121212" : "white",
    top: 0,
    // [theme.breakpoints.down("md")]: {
    //   width: "185px",
    // },
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  genreImage: {
    filter: theme.palette.mode === "dark" && "invert(1)",
  },
}));
