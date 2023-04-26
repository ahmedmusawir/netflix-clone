import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { genreOrCategory } from '../features/currentGenreOrCategory';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get Movies by Type
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        console.log('Genre or Cat', genreIdOrCategoryName);

        // popular, top_rated, upcoming --> string
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === 'string'
        ) {
          return `/movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }
        // 13 34 56 --> number
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === 'number'
        ) {
          return `/discover/movie/?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }
        return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    // Get Movie Genres
    getGenres: builder.query({
      query: () => {
        return `/genre/movie/list?api_key=${tmdbApiKey}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
