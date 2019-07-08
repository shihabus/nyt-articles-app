/* eslint-disable no-undef */
// /* eslint-disable import/named */
// /* eslint-disable no-undef */
// /**
//  * @jest-environment jsdom
//  */

import React from "react";
import { shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";
import Author from "./index";
import { checkProps,findComponent } from "../../../../../testUtils";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

const setUp = (props = {}) => {
  const wrapper = shallow(<Author {...props} />);
  return wrapper;
};

describe("Author", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      byline: "Test"
    };
    wrapper = setUp(props);
  });

  it("Snapshot", () => {
    expect(wrapper).toMatchSnapshot("Author");
  });

  it("Checked props", () => {
    const expectedProps = {
      byline: "Test"
    };
    const propsErr = checkProps(Author, expectedProps);
    expect(propsErr).toBeUndefined();
  });

  it('should render child',()=>{
    expect(findComponent(wrapper,"Author Text").length).toEqual(1)
  })
});
