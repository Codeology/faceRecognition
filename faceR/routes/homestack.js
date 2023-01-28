import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';  
import {createAppContainer} from 'react-navigation';
import Home from '../src/home.js';
import Members  from '../src/members.js';
import Selection from '../src/selection.js';
import test from '../src/test.js';

const screens = {
    Home: {
        screen: Home
    },
    Selection: {
        screen: Selection
    },
    Members: {
        screen: Members
    },
    test: {
        screen: test
    }
}

const HomeStack  = createStackNavigator(screens);
export default createAppContainer(HomeStack);
