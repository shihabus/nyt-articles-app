/* eslint-disable no-undef */
// /* eslint-disable import/named */
// /* eslint-disable no-undef */
// /**
//  * @jest-environment jsdom
//  */

import React from "react";
import { shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";
import Footer from "./index";
import { checkProps,findComponent } from "../../../../../testUtils";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

const setUp = (props = {}) => {
  const wrapper = shallow(<Footer {...props} />);
  return wrapper;
};

describe("Footer", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
        source: 'Test',
        published_date: 'Test'
    };
    wrapper = setUp(props);
  });

  it("Snapshot", () => {
    expect(wrapper).toMatchSnapshot("Footer");
  });

  it("Checked props", () => {
    const expectedProps = {
        source: 'Test',
        published_date: 'Test'
    };
    const propsErr = checkProps(Footer, expectedProps);
    expect(propsErr).toBeUndefined();
  });

  it('should render child',()=>{
    expect(findComponent(wrapper,"Source Text").length).toEqual(1)
    expect(findComponent(wrapper,"Date container").length).toEqual(1)
  })
});
