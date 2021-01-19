import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './text';


const styles = StyleSheet.create({
    component: {
        padding: 30,
        borderRadius: 15,
        backgroundColor: theme.colors.backgroundItem,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const LoadingScreen = (props) => {
    if(props.itemBeingLoaded === null){
        return(
            <View style={styles.component}>
                <Text fontWeight='bold' color='primary'>Loading</Text>
            </View>
        );
    }

    return(
        <View style={styles.component}>
            <Text fontWeight='bold' color='primary'>{props.itemBeingLoaded} is loading</Text>
        </View>
    );
}

export default LoadingScreen;