import 'react-native'
import React from 'react'
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.shallow=shallow
global.React=React