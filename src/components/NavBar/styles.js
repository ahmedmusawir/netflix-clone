import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  sidebarContainer: {
    // border: '3px dotted red',
    position: "relative",
    zIndex: 10000,
    // background: 'white',
  },
  toolbar: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px",
    // [theme.breakpoints.down("sm")]: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      flexWrap: "wrap",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawer: {
    // [theme.breakpoints.up("sm")]: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    zIndex: 1000,
  },
  drawerPaper: {
    width: drawerWidth,
    // border: '1rem dotted red',
  },
  desktopDrawer: {
    minHeight: "300vh",
    // boxShadow: '2px 2px 8px #e7e7e7',
    boxShadow: "4px 0px 8px 0px #e7e7e7",
  },
  linkButton: {
    "&:hover": {
      color: "white !important",
      textDecoration: "none",
    },
  },
}));
