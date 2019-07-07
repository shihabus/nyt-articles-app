import { actionTypes } from '../../../config';

const homePageInitialState = [];

export const homePageReducer = (state = homePageInitialState, {type,payload}) => {
  switch (type) {
    case actionTypes.FETCH_STARTED:
      return {
        ...state, success: false, error: false, loading: true,articleArray: []
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state, articleArray: payload, success: true, error: false, loading: false,
      };
    case actionTypes.FETCH_FAILED:
      return {
        ...state, success: false, error: true, loading: false,articleArray: []
      };
    default:
      return state;
  }
};
