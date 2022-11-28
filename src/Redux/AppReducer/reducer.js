// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from './actionType';
const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_SHOES_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_SHOES_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        shoes: payload,
      };

    case types.GET_SHOES_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};


