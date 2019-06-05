import { FETCH_FAILED, FETCH_STARTED, FETCH_SUCCESS } from '../../../config/actionTypes';

const homePageInitialState = {
    articleArray: [],
    loading: false,
    error: false,
    success: false,
    selectedArticle:{}
}

export const homePageReducer = (state = homePageInitialState, action) => {
    switch (action.type) {
        case FETCH_STARTED:
            return { ...state, success: false, error: false, loading: true }
        case FETCH_SUCCESS:
            return { ...state, articleArray: action.payload, success: true, error: false, loading: false }
        case FETCH_FAILED:
            return { ...state, success: false, error: true, loading: false }
        default:
            return state
    }
}