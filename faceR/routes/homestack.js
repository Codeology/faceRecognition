import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';  
import {createAppContainer} from 'react-navigation';
import Home from '../src/home.js';
import Members  from '../src/members.js';

const screens = {
    Home: {
        screen: Home
    },
    Members: {
        screen: Members
    }
}

const HomeStack  = createStackNavigator(screens);
export default createAppContainer(HomeStack);
