import { combineReducers,createStore, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';

import {homePageReducer} from '../app/HomePage/store';
import {detailsPageReducer} from '../app/DetailsPage/store';

const rootReducer= combineReducers({
    articles:homePageReducer,
    selection:detailsPageReducer
})

export const initStore=() => createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
