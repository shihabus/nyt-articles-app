import { combineReducers} from "redux";
import {homePageReducer} from '../app/HomePage/store';
import {detailsPageReducer} from '../app/DetailsPage/store';

export default combineReducers({
    articles:homePageReducer,
    selection:detailsPageReducer
})

