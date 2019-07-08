/* eslint-disable no-undef */
// /* eslint-disable import/named */
// /* eslint-disable no-undef */
// /**
//  * @jest-environment jsdom
//  */

import React from "react";
import { shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";
import Image from "./index";
import { checkProps,findComponent } from "../../../../testUtils";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

const setUp = (props = {}) => {
  const wrapper = shallow(<Image {...props} />);
  return wrapper;
};

describe("Image", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
        urlToImage: 'Test'
    };
    wrapper = setUp(props);
  });

  it("Snapshot", () => {
    expect(wrapper).toMatchSnapshot("Image");
  });

  it("Checked props", () => {
    const expectedProps = {
        urlToImage: 'Test'
    };
    const propsErr = checkProps(Image, expectedProps);
    expect(propsErr).toBeUndefined();
  });

  it('should render child',()=>{
    expect(findComponent(wrapper,"Image").length).toEqual(1)
  })
});
