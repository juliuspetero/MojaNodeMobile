import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card as PaperCard} from 'react-native-paper';
import HeaderComponent from "../layout/HeaderComponent";
import {Entypo, FontAwesome5, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import RoleStackComponent from "./Role/RoleComponent";
import {createStackNavigator} from "@react-navigation/stack";
import ListPermissionComponent from "./Role/ListPermissionComponent";
import UserStackComponent from "./user/UserStackComponent";

const AdministrationComponent = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <HeaderComponent title="Administration"/>
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RoleStackComponent')}>
                        <PaperCard style={styles.card}>
                            <Text style={styles.icon}>
                                <FontAwesome5 name="user-lock" size={50} color="black" style={styles.icon}/>
                            </Text>
                            <Text style={styles.bottomText}>Roles & Permissions</Text>
                        </PaperCard>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserStackComponent')}>
                        <PaperCard style={styles.card}>
                            <Text style={styles.icon}>
                                <Entypo name="users" size={50} color="black" style={styles.icon}/>
                            </Text>
                            <Text style={styles.bottomText}>System Users</Text>
                        </PaperCard>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row, {marginTop: -50}]}>
                    <TouchableOpacity style={styles.button}>
                        < PaperCard style={styles.card}>
                            <Text style={styles.icon}>
                                <MaterialIcons name="account-balance-wallet" size={50} color="black"
                                               style={styles.icon}/>
                            </Text>
                            <Text style={styles.bottomText}>Wallet</Text>
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

const AdministrationStack = createStackNavigator();
const AdministrationStackComponent = () => {
    return (
        <AdministrationStack.Navigator>
            <AdministrationStack.Screen name="AdministrationComponent"
                                        component={AdministrationComponent}/>
            <AdministrationStack.Screen name="RoleStackComponent" component={RoleStackComponent}
                                        options={{  
                                            title: "Roles & Permissions"
                                        }}
            />
            <AdministrationStack.Screen name="UserStackComponent" component={UserStackComponent}/>
        </AdministrationStack.Navigator>
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
        height: 250,
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

export default AdministrationStackComponent;
