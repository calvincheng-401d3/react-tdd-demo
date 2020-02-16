//This brings in all the enzyme stuff

import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

//worst thing possible but we need it
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.rootDirectory = __dirname;

//If I didn't do the above, I'd have to do it in every file.
