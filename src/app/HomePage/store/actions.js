import {
  FETCH_STARTED,
  FETCH_FAILED,
  FETCH_SUCCESS,
  SELECTED_ARTICLE
} from "../../../config";
import { httpsUtil } from "../../../utils";
import { URLS } from '../../../constants'

export const fetchNews=()=>{
    return dispatch=>{
        dispatch(fetchStarted())
        httpsUtil.makeGetCall(URLS.topArticles,dispatch,fetchSuccess,fetchFailed)
    }
}

const fetchStarted = () => ({
  type: FETCH_STARTED
});

const fetchSuccess = data => {
  return {
    type: FETCH_SUCCESS,
    payload: data.results
  };
};

const fetchFailed=()=>({
    type: FETCH_FAILED
})

export const selectedArticle = selectedItem => ({
  type: SELECTED_ARTICLE,
  payload: selectedItem
});
