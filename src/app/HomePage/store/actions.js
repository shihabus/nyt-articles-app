import {
  FETCH_STARTED,
  FETCH_FAILED,
  FETCH_SUCCESS,
  SELECTED_ARTICLE,
} from '../../../config';
import { httpsUtil } from '../../../utils';
import { URLS } from '../../../constants';

const fetchStarted = () => ({
  type: FETCH_STARTED,
});

const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data.results,
});

const fetchFailed = () => ({
  type: FETCH_FAILED,
});

export const fetchNews = () => (dispatch) => {
  dispatch(fetchStarted());
  httpsUtil.makeGetCall(URLS.topArticles, dispatch, fetchSuccess, fetchFailed);
};


export const selectedArticle = selectedItem => ({
  type: SELECTED_ARTICLE,
  payload: selectedItem,
});
