import {
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_START,
  FETCH_QUOTES_FAILURE,
} from '../actions';

const initialState = {
  isLoading: false,
  sentence: [],
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_QUOTES_SUCCESS:
      return {
        ...state,
        sentence: action.payload,
        isLoading: false,
        error: '',
      };
    case FETCH_QUOTES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
