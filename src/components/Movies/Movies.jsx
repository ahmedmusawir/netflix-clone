import React, { useState, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { FeaturedMovie, MovieList, Pagination } from '../';
import useStyles from './styles';

const Movies = () => {
  const classes = useStyles();
  const { data, isFetching } = useGetMoviesQuery();
  //   console.log('Movies:', data);
  if (isFetching) {
    return (
      <Box display={'flex'} justifyContent={'center'}>
        <CircularProgress size={'4rem'} />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display={'flex'} alignItems={'center'} mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else...
        </Typography>
      </Box>
    );
  }

  return (
    // <div className={classes.mainContainer}>
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
