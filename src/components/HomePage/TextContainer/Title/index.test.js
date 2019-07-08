/* eslint-disable no-undef */
// /* eslint-disable import/named */
// /* eslint-disable no-undef */
// /**
//  * @jest-environment jsdom
//  */

import React from "react";
import { shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";
import Title from "./index";
import { checkProps,findComponent } from "../../../../../testUtils";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

const setUp = (props = {}) => {
  const wrapper = shallow(<Title {...props} />);
  return wrapper;
};

describe("Title", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
        title: 'Test'
    };
    wrapper = setUp(props);
  });

  it("Snapshot", () => {
    expect(wrapper).toMatchSnapshot("Title");
  });

  it("Checked props", () => {
    const expectedProps = {
        title: 'Test'
    };
    const propsErr = checkProps(Title, expectedProps);
    expect(propsErr).toBeUndefined();
  });

  it('should render child',()=>{
    expect(findComponent(wrapper,"Title").length).toEqual(1)
  })
});
