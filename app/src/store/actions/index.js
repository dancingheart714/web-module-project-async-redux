import axios from 'axios';

export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';
export const FETCH_QUOTES_START = 'FETCH_QUOTES_START';
export const FETCH_QUOTES_FAILURE = 'FETCH_QUOTES_FAILURE';

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_QUOTES_START' });

    axios
      .get('https://game-of-thrones-quotes.herokuapp.com/v1/random')
      .then((res) => {
        dispatch({
          type: 'FETCH_QUOTES_SUCCESS',
          payload: res.data.results,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_QUOTES_FAILURE',
          payload: err.message,
        });
      });
  };
};
