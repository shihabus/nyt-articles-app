/* eslint-disable no-undef */
// /* eslint-disable import/named */
// /* eslint-disable no-undef */
// /**
//  * @jest-environment jsdom
//  */

import React from "react";
import { shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";
import Icon from "./index";
import { findComponent } from "../../../../testUtils";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

const setUp = (props = {}) => {
  const wrapper = shallow(<Icon {...props} />);
  return wrapper;
};

describe("Icon", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("Snapshot", () => {
    expect(wrapper).toMatchSnapshot("Icon");
  });

  it('should render child',()=>{
    expect(findComponent(wrapper,"Icon").length).toEqual(1)
  })
});
