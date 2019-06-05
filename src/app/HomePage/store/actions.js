import axios from 'axios'
import {
    FETCH_STARTED,
    FETCH_FAILED,
    FETCH_SUCCESS
} from '../../../config/actionTypes';

const URL = 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526'

export const fetchNews = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_STARTED,
        })
        axios.get(URL)
            .then(res => res.data)
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
                console.log('Error');
                dispatch({
                    type: FETCH_FAILED
                })
            })


    }
}
