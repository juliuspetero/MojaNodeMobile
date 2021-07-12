import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HeaderComponent = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

HeaderComponent.defaultProps = {
    title: 'MojaGap Payments',
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'
    },
    text: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    },
});

export default HeaderComponent;
