import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card as PaperCard} from 'react-native-paper';
import {Ionicons, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';

import HeaderComponent from "../../layout/HeaderComponent";
import AddRoleComponent from "./AddRoleComponent";
import ListRoleComponent from "./ListRoleComponent";
import ListPermissionComponent from "./ListPermissionComponent";

const RoleComponent = ({navigation}) => {
    return (
        <View style={styles.screen}>
            {/*<HeaderComponent title="Roles & Permissions"/>*/}
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddRoleComponent')}>
                        <PaperCard style={styles.card}>
                            <Text style={styles.icon}>
                                <Ionicons name="ios-add" size={50} color="black" style={styles.icon}/>
                            </Text>
                            <Text style={styles.bottomText}>Add User Role</Text>
                        </PaperCard>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListRoleComponent')}>
                        <PaperCard style={styles.card}>
                            <Text style={styles.icon}>
                                <MaterialIcons name="pageview" size={50} color="black" style={styles.icon}/>
                            </Text>
                            <Text style={styles.bottomText}>View Roles</Text>
                        </PaperCard>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row, {marginTop: 0}]}>
                    <TouchableOpacity style={styles.button}
                                      onPress={() => navigation.navigate('ListPermissionComponent')}>
                        < PaperCard style={styles.card}>
                            <Text style={styles.icon}>
                                <MaterialIcons name="pageview" size={50} color="black"
                                               style={styles.icon}/>
                            </Text>
                            <Text style={styles.bottomText}>View Permissions</Text>
                        </PaperCard>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <PaperCard style={styles.card}>
                            <Text style={styles.icon}>
                                <MaterialCommunityIcons name="office-building" size={50} color="black"
                                                        style={styles.icon}/>
                            </Text>
                            <Text style={styles.bottomText}>Companies & Branches</Text>
                        </PaperCard>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const RoleStack = createStackNavigator();
const RoleStackComponent = () => {
    return (
        <RoleStack.Navigator>
            <RoleStack.Screen name="RoleComponent" component={RoleComponent} options={{
                title: null, headerLeft: () => null
            }}/>
            <RoleStack.Screen name="AddRoleComponent" component={AddRoleComponent}/>
            <RoleStack.Screen name="ListRoleComponent" component={ListRoleComponent}/>
            <RoleStack.Screen name="ListPermissionComponent" component={ListPermissionComponent}/>
        </RoleStack.Navigator>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',

    },
    container: {
        backgroundColor: '#DDDDDD',
        flex: 1, flexDirection: 'column',
        justifyContent: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
    },
    card: {
        flexDirection: 'row',
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
        height: 220,
        paddingTop: 40
    },
    bottomText: {
        textAlign: 'center',
    },
    icon: {
        textAlign: 'center',
        padding: 20
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        margin: 10,
        flexDirection: 'row',
        flex: 1,
        height: 250
    }
});

export default RoleStackComponent;

