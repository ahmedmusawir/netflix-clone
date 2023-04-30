import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  image: {
    width: '70%',
    filter: 'invert(1)',
    marginTop: '-.5rem',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImage: {
    filter: theme.palette.mode === 'dark' && 'invert(1)',
  },
}));
