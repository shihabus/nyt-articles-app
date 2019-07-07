/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */
import { detailsPageReducer } from "./index";
import { actionTypes } from "../../../config";

describe("Details Page Reducer", () => {
  const initialState = [];
  it("should return the initial state", () => {
    expect(detailsPageReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle default',()=>{
    expect(detailsPageReducer([], {})).toEqual([]);

  })

  it("should handle SELECTED_ARTICLE", () => {
    const expectedState = {
      selectedArticle: {
        abstract: "Test",
        byline: "Test",
        imageURL: "Test",
        published_date: "Test",
        source: "Test",
        title: "Test",
        url: "Test"
      }
    };

    expect(
      detailsPageReducer(initialState,
          {
            type: actionTypes.SELECTED_ARTICLE,
            payload: {
              abstract: "Test",
              byline: "Test",
              imageURL: "Test",
              published_date: "Test",
              source: "Test",
              title: "Test",
              url: "Test"
            }
          }
      )
    ).toEqual(expectedState);

  });
});
