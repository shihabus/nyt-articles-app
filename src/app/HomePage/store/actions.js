import { FETCH_STARTED, FETCH_FAILED, FETCH_SUCCESS } from './actionTypes';
const URL = 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526'

export const fetchNews = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_STARTED,
        })
        fetch(URL, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(result => {
                if (result.status !== 'ok') {
                    return dispatch({
                        type: FETCH_FAILED
                    })
                }
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: result.articles
                })
            })
            .catch(() => {
                dispatch({
                    type: FETCH_FAILED
                })
            })


    }
}



