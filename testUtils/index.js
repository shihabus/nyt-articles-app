import checkPropTypes,{ assertPropTypes } from 'check-prop-types'
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {rootReducer} from '../src/store'

const composedEnhancer = compose(applyMiddleware(thunk));


export const findComponent=(component,attr)=>{
    const wrapper=component.find(`[testID="${attr}"]`)
    return wrapper
}

export const checkProps=(component,expectedProps)=>{
    const propsErr=checkPropTypes(component.propTypes,expectedProps,'props',component.name)
    return propsErr
}

export const testStore=(initialState)=>{
    const createStoreWithMiddleware=createStore(rootReducer, initialState, composedEnhancer)
    return createStoreWithMiddleware
}