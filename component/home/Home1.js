import React from 'react';
import {Button, Text, View} from 'react-native';

const Home1 = ({navigation}) => {
    return (
        <View>
            <Text>This is home 1 stack!!</Text>
            <Button
                title="Go to Home 2 stack"
                onPress={() => navigation.navigate('Home 2')}
            />
        </View>
    );
}

export default Home1;
