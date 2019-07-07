import {
  actionTypes
} from '../../../config';
import { httpsUtil } from '../../../utils';
import { URLS } from '../../../constants';

export const fetchStarted = () => ({
  type: actionTypes.FETCH_STARTED,
});

export const fetchSuccess = data => ({
  type: actionTypes.FETCH_SUCCESS,
  payload: data.results,
});

export const fetchFailed = () => ({
  type: actionTypes.FETCH_FAILED,
});

export const fetchNews = () => (dispatch) => {
  dispatch(fetchStarted());
  httpsUtil.makeGetCall(URLS.topArticles, dispatch, fetchSuccess, fetchFailed);
};


export const selectedArticle = selectedItem => ({
  type: actionTypes.SELECTED_ARTICLE,
  payload: selectedItem,
});
