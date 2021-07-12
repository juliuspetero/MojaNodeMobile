import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeComponent from "./HomeComponent";
import {Image} from "react-native";
import Home1 from "./Home1";
import Home2 from "./Home2";

const HomeStackComponent = () => {
    const HomeStackNavigator = createStackNavigator();
    return (
        <HomeStackNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    height: 60,
                    backgroundColor: 'darkslateblue'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 23,
                    textAlign: 'center'
                },
            }}
        >
            <HomeStackNavigator.Screen name="Home" component={HomeComponent}
                                       options={{
                                           headerTitle: () => <Image source={require('../../assets/logo.png')}/>,
                                           title: 'Home'
                                       }}
            />
            <HomeStackNavigator.Screen name="Home 1" component={Home1}/>
            <HomeStackNavigator.Screen name="Home 2" component={Home2}/>
        </HomeStackNavigator.Navigator>

    );
}

export default HomeStackComponent;
