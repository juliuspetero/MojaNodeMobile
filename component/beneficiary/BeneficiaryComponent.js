import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card as PaperCard} from 'react-native-paper';
import HeaderComponent from "../layout/HeaderComponent";
import {Entypo} from '@expo/vector-icons';

const BeneficiaryComponent = () => {
    return (
        <View style={styles.screen}>
            <HeaderComponent title="Beneficiaries/Recipients"/>
            <View style={styles.container}>
                <View style={styles.row}>
                    <PaperCard style={styles.card}>
                        <Text style={styles.icon}>
                            <Entypo name="tv" size={50} color="black" style={styles.icon}/>
                        </Text>
                        <Text style={styles.bottomText}> Pay TV</Text>
                    </PaperCard>
                    <PaperCard style={styles.card}>
                        <Text style={styles.icon}>
                            <Entypo name="tv" size={50} color="black" style={styles.icon}/>
                        </Text>
                        <Text style={styles.bottomText}> Pay TV</Text>
                    </PaperCard>
                </View>
                <View style={[styles.row, {marginTop: -50}]}>
                    < PaperCard style={styles.card}>
                        <Text style={styles.icon}>
                            <Entypo name="tv" size={50} color="black" style={styles.icon}/>
                        </Text>
                        <Text style={styles.bottomText}> Pay TV</Text>
                    </PaperCard>
                    <PaperCard style={styles.card}>
                        <Text style={styles.icon}>
                            <Entypo name="tv" size={50} color="black" style={styles.icon}/>
                        </Text>
                        <Text style={styles.bottomText}> Pay TV</Text>
                    </PaperCard>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',

    },
    container: {
        backgroundColor: 'lightblue',
        flex: 1, flexDirection: 'column',
        justifyContent: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
    },
    card: {
        margin: 10,
        flexDirection: 'row',
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
        width: 250,
        height: 250,
        paddingTop: 40
    },
    bottomText: {
        textAlign: 'center',
    },
    icon: {
        textAlign: 'center',
        padding: 20
    }

});

export default BeneficiaryComponent;
