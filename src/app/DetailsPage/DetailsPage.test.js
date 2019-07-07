/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import React from "react";
import { createSerializer } from "enzyme-to-json";
import { connect } from "react-redux";
import DetailsPage, { mapStateToProps } from "./DetailsPage";
import { findComponent, testStore,checkProps } from "../../../testUtils";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

const setUp = (initialStore = {}) => {
  const store = testStore(initialStore);
  const wrapper = shallow(<DetailsPage store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Display Page", () => {
  let wrapper;
  beforeEach(() => {
    const initialStore = {
      selection: {
        selectedArticle: {
          abstract: "test",
          byline: "test",
          imageURL: "test",
          published_date: "2019-07-02",
          source: "The New York Times",
          title: "Test",
          url:
            "https://www.nytimes.com/2019/07/02/nyregion/judge-james-troiano-rape.html"
        }
      }
    };
    wrapper = setUp(initialStore);
  });

  it("Snapshot test", () => {
    expect(wrapper).toMatchSnapshot('Display page');
  });

  it('should render child components',()=>{
    expect(findComponent(wrapper,"ImageSection").length).toEqual(1)
    expect(findComponent(wrapper,"DetailsCard").length).toEqual(1)
  })

  it('Checked props',()=>{
    const expectedProps={
        selectedArticle: {
            abstract: 'Test',
            byline: 'Test',
            published_date: 'Test',
            source: 'Test',
            title: 'Test',
            url: 'Test',
            imageURL: 'Test'
          }
    }
    const propsErr=checkProps(DetailsPage,expectedProps)
    expect(propsErr).toBeUndefined()
  })
});
