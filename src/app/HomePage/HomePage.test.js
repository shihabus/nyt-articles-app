/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import React from "react";
import { createSerializer } from "enzyme-to-json";
import { connect } from "react-redux";
import HomePage, { mapStateToProps } from "./HomePage";
import { findComponent, testStore, checkProps } from "../../../testUtils";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

const setUp = (initialStore = {}) => {
  const store = testStore(initialStore);
  const wrapper = shallow(<HomePage store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Home Page", () => {
  let wrapper;
  beforeEach(() => {
    const initialStore = {
      selection: {
        articles: {
          loading: true,
          articleArray: [],
          error: false,
          success: false
        }
      }
    };
    wrapper = setUp(initialStore);
  });

  it("Snapshot", () => {
    expect(wrapper).toMatchSnapshot("Home page");
  });

  it("Checked props", () => {
    const expectedProps = {
      fetchNews: () => {},
      articleArray: [{ id: 1 }, { id: 2 }],
      error: true,
      loading: 1,
      selectedArticle: () => {}
    };
    const propsErr = checkProps(HomePage, expectedProps);
    expect(propsErr).toBeUndefined();
  });

  it("should render List component on success", () => {
    expect(findComponent(wrapper, "List").length).toEqual(1);
  });

  //   it("should render Error component", () => {
  //     // expect(findComponent(wrapper, "Error").length).toEqual(1);
  //     expect(1).toEqual(1)

  //   });

  //   it("should render Loader component", () => {
  //     // expect(findComponent(wrapper, "Loader").length).toEqual(1);
  //     expect(1).toEqual(1)
  //   });
});
