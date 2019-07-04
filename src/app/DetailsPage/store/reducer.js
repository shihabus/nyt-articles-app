import { SELECTED_ARTICLE } from '../../../config';

const initialState = {};

export const detailsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_ARTICLE:
      return { ...state, selectedArticle: action.payload };

    default:
      return state;
  }
};
