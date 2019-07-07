/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */
import { homePageReducer } from "./index";
import { actionTypes } from "../../../config";

describe("Home Page Reducer", () => {
  const initialState = [];
  it("should return the initial state", () => {
    expect(homePageReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle default", () => {
    expect(homePageReducer([], {})).toEqual([]);
  });

  it("should handle FETCH_STARTED", () => {
    const expectedState = {
      error: false,
      loading: true,
      success: false,
      articleArray: []
    };
    expect(
      homePageReducer(initialState, {
        type: actionTypes.FETCH_STARTED,
        payload: {
          error: false,
          loading: true,
          success: false,
          articleArray: []
        }
      })
    ).toEqual(expectedState);
  });

//   it("should handle FETCH_SUCCESS", () => {
//     const expectedState = {
//         articleArray:{
//             error: false,
//             loading: false,
//             success: true,
//             articleArray: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
//         }
//     };
//     expect(
//       homePageReducer(initialState, {
//         type: actionTypes.FETCH_SUCCESS,
//         payload: {
//           error: false,
//           loading: false,
//           success: true,
//           articleArray: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
//         }
//       })
//     ).toEqual(expectedState);
//   });

  it("should handle FETCH_FAILED", () => {
    const expectedState = {
      articleArray: [],
      error: true,
      loading: false,
      success: false
    };
    expect(
      homePageReducer(initialState, {
        type: actionTypes.FETCH_FAILED,
        payload: {
          error: true,
          loading: false,
          success: false,
          articleArray: []
        }
      })
    ).toEqual(expectedState);
  });
});
