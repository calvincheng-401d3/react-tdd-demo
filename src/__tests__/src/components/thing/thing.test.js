import React from "react";
import renderer from "react-test-renderer"; //we don't use this in code sandbox bot locally..
import Thing from "../../../../components/thing/thing.js";

// import Enzyme, { shallow, render, mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// Enzyme.configure({ adapter: new Adapter() });

//functional test
//tested it rendered
//tested it changes state
//does not test look, wehre it is etc...
describe("<Thing />", () => {
  it("is alive at application start", () => {
    //shallow just renders the component. Basic rendering, no state, no nothing else, jsut a baisc rendering
    let app = shallow(<Thing />);
    expect(app.find(".thing").exists()).toBeTruthy();
  });

  it("toggles state.stuff on a click", () => {
    //mount will fire up Thing, wire up the state, and do the full cycle
    //now i have access to Thing and button functionality
    let app = mount(<Thing />);
    let button = app.find("button");
    button.simulate("click");
    expect(app.state("stuff")).toBe(false);
    expect(app.state("polarity")).toEqual("negative");
    expect(app.find("span").text()).toContain("false");

    button.simulate("click");
    expect(app.state("stuff")).toBe(true);
    expect(app.state("polarity")).toEqual("positive");
    expect(app.find("span").text()).toContain("true");
  });

  //first time this runs will be right. SEcond time is what matters
  it('renders right', ()=>{
    const tree = renderer.create(<Thing />).toJSON();
    expect(tree).toMatchSnapshot();
  })


});

//
