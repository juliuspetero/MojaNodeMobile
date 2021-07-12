import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import BottomNavigationComponent from "./component/layout/BottomNavigationComponent";

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <BottomNavigationComponent/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;