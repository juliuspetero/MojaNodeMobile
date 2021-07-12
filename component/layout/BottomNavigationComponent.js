import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import {Entypo, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

import SettingComponent from "../account/SettingComponent";
import HomeStackComponent from "../home/HomeStackComponent";
import BeneficiaryComponent from "../beneficiary/BeneficiaryComponent";
import AdministrationComponent from "../administration/AdministrationComponent";
import ItemComponent from "../item/ItemComponent";


const BottomNavigationComponent = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStackComponent}
                            options={{
                                tabBarLabel: "Home",
                                tabBarIcon: ({color, size}) => <Ionicons name="ios-home" color={color} size={size}/>
                            }}
                />

                <Tab.Screen name="Items" component={ItemComponent}
                            options={{
                                tabBarLabel: "Items",
                                tabBarIcon: ({color, size}) => <Entypo  name="cup" color={color} size={size}/>
                            }}
                />

                <Tab.Screen name="Beneficiaries" component={BeneficiaryComponent}
                            options={{
                                tabBarLabel: "Beneficiaries",
                                tabBarIcon: ({color, size}) => <Ionicons name="ios-home" color={color} size={size}/>
                            }}
                />

                <Tab.Screen name="Administration" component={AdministrationComponent}
                            options={{
                                tabBarLabel: "Administration",
                                tabBarIcon: ({color, size}) => <Ionicons name="ios-settings" color={color} size={size}/>
                            }}
                />

                <Tab.Screen name="Wallet" component={HomeStackComponent}
                            options={{
                                tabBarLabel: "Wallet",
                                tabBarIcon: ({color, size}) => <MaterialIcons name="account-balance-wallet"
                                                                              color={color} size={size}/>
                            }}
                />
                <Tab.Screen name="My account" component={SettingComponent}
                            options={{
                                tabBarLabel: "My Account",
                                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="account" size={size}
                                                                                       color={color}/>
                            }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomNavigationComponent;