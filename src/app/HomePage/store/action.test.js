/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */
import * as actions from "./index";
import { actionTypes } from "../../../config";

describe("Home Page Actions", () => {
  
  it('should trigger start fetch', () => {
      const expectedAction={
        type: actionTypes.FETCH_STARTED,
      }
      expect(actions.fetchStarted()).toEqual(expectedAction)
  });

  it('should trigger fetch success',()=>{
      const param= {results:[]}
      const expectedAction={
        type: actionTypes.FETCH_SUCCESS,
        payload: param.results
      }
      expect(actions.fetchSuccess(param)).toEqual(expectedAction)
  })

  it('should trigger fetch failure',()=>{
      const expectedAction={
        type: actionTypes.FETCH_FAILED,
      }
      expect(actions.fetchFailed()).toEqual(expectedAction)
  })

  it('should trigger article selection',()=>{
      const param=[]
    const expectedAction={
      type: actionTypes.SELECTED_ARTICLE,
      payload: param
    }
    expect(actions.selectedArticle(param)).toEqual(expectedAction)
})


});
