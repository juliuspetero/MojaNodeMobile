import React from 'react';
import {Button, Text, View} from 'react-native';

const Home2 = ({navigation}) => {
    return (
        <View>
            <Text>This is home 2 stack!!</Text>
            <Button
                title="Go home stack 3"
                onPress={() => navigation.navigate('Home 2')}
            />
        </View>
    );
}

export default Home2;
