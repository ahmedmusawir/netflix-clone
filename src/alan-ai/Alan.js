import { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../features/currentGenreOrCategory';
import { useNavigate } from 'react-router-dom';

import { ColorModeContext } from '../contexts/ToggleColorMode';
import { fetchToken } from '../utils';

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    alanBtn({
      key: '0c7e3b118701baa7f45d7841c34b1cce2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, mode, genres, genre }) => {
        if (command === 'changeMode') {
          // Call the client code that will react to the received command
          if (command === 'changeMode') {
            if (mode === 'dark') {
              setMode('dark');
            }
          }
        }
        if (command === 'changeMode') {
          // Call the client code that will react to the received command
          if (command === 'changeMode') {
            if (mode === 'light') {
              setMode('light');
            }
          }
        }
        if (command === 'login') {
          // Call the client code that will react to the received command
          fetchToken();
        }

        if (command === 'logout') {
          localStorage.clear();
          window.location.href = '/';
        }

        if (command === 'chooseGenre') {
          const foundGenre = genres.find(
            (g) => g.name.toLowerCase() === genre.toLowerCase()
          );

          console.log('Genre by Alan:', foundGenre);

          if (foundGenre) {
            navigate('/');
            dispatch(selectGenreOrCategory(foundGenre.id));
          }
        }

        // if (command === 'go:back') {
        //   // Call the client code that will react to the received command
        // }
      },
    });
  }, []);
};

export default useAlan;
