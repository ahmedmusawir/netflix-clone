import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';
import { Movie } from '../';

const MovieList = ({ movies }) => {
  const classes = useStyles();

  console.log('Movies in MovieList:', movies);

  return (
    <Grid
      container
      className={classes.moviesContainer}
      sx={{ overflowY: 'scroll' }}
    >
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
