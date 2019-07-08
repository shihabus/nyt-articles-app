/* eslint-disable no-useless-escape */
 /* eslint-disable import/named */
/* eslint-disable no-undef */
/**
* @jest-environment jsdom
*/

import React from "react";
import { shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";
import Card from "./Card";
import { findComponent, checkProps } from "../../../testUtils";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

const setUp = (props = {}) => {
  const wrapper = shallow(<Card {...props} />);
  return wrapper;
};

describe("Home Page Card", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      item: {
        byline: "Test",
        source: "Test",
        published_date: "Test",
        title: "Test",
        media:[
          {
             "type":"image",
             "subtype":"photo",
             "caption":"Marshae Jones",
             "copyright":"Jefferson County Jail",
             "approved_for_syndication":1,
             "media-metadata":[
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-square320.jpg",
                   "format":"square320",
                   "height":320,
                   "width":320
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-thumbStandard.jpg",
                   "format":"Standard Thumbnail",
                   "height":75,
                   "width":75
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/4193802805fd4e0abe4037abb9811ce0-articleInline.jpg",
                   "format":"Normal",
                   "height":238,
                   "width":190
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-sfSpan.jpg",
                   "format":"Large",
                   "height":263,
                   "width":395
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/4193802805fd4e0abe4037abb9811ce0-jumbo.jpg",
                   "format":"Jumbo",
                   "height":926,
                   "width":740
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/4193802805fd4e0abe4037abb9811ce0-superJumbo.jpg",
                   "format":"superJumbo",
                   "height":926,
                   "width":740
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-square640.jpg",
                   "format":"square640",
                   "height":640,
                   "width":640
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-thumbLarge.jpg",
                   "format":"Large Thumbnail",
                   "height":150,
                   "width":150
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-mediumThreeByTwo210.jpg",
                   "format":"mediumThreeByTwo210",
                   "height":140,
                   "width":210
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-mediumThreeByTwo440.jpg",
                   "format":"mediumThreeByTwo440",
                   "height":293,
                   "width":440
                }
             ]
          }
       ],
        id: 10,
        abstract: "Test",
        url: "Test"
      },
      handleSelection: () => {}
    };
    wrapper = setUp(props);
  });

  it("Snapshot test", () => {
    expect(wrapper).toMatchSnapshot("Card");
  });

  it("Checked props", () => {
    const expectedProps = {
      item: {
        byline: "Test",
        source: "Test",
        published_date: "Test",
        title: "Test",
        media:[
          {
             "type":"image",
             "subtype":"photo",
             "caption":"Marshae Jones",
             "copyright":"Jefferson County Jail",
             "approved_for_syndication":1,
             "media-metadata":[
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-square320.jpg",
                   "format":"square320",
                   "height":320,
                   "width":320
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-thumbStandard.jpg",
                   "format":"Standard Thumbnail",
                   "height":75,
                   "width":75
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/4193802805fd4e0abe4037abb9811ce0-articleInline.jpg",
                   "format":"Normal",
                   "height":238,
                   "width":190
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-sfSpan.jpg",
                   "format":"Large",
                   "height":263,
                   "width":395
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/4193802805fd4e0abe4037abb9811ce0-jumbo.jpg",
                   "format":"Jumbo",
                   "height":926,
                   "width":740
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/4193802805fd4e0abe4037abb9811ce0-superJumbo.jpg",
                   "format":"superJumbo",
                   "height":926,
                   "width":740
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-square640.jpg",
                   "format":"square640",
                   "height":640,
                   "width":640
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-thumbLarge.jpg",
                   "format":"Large Thumbnail",
                   "height":150,
                   "width":150
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-mediumThreeByTwo210.jpg",
                   "format":"mediumThreeByTwo210",
                   "height":140,
                   "width":210
                },
                {
                   "url":"https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-mediumThreeByTwo440.jpg",
                   "format":"mediumThreeByTwo440",
                   "height":293,
                   "width":440
                }
             ]
          }
       ],
        id: 10,
        abstract: "Test",
        url: "Test"
      },
      handleSelection: () => {}
    };
  const propsErr = checkProps(Card, expectedProps);
  expect(propsErr).toBeUndefined();
  });

  it('should render child',()=>{
    expect(findComponent(wrapper,"ImageContainer").length).toEqual(1)
    expect(findComponent(wrapper,"TextContainer").length).toEqual(1)
    expect(findComponent(wrapper,"IconContainer").length).toEqual(1)
  })
});
