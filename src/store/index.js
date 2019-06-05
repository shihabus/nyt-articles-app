import { combineReducers} from "redux";
import homePage from '../app/HomePage/store/reducer';

export default combineReducers({
    articles:homePage
})

