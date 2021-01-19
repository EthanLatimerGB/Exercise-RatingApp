import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView, Button } from 'react-native';
import { Link } from 'react-router-native';
import Text from './text';
import theme from '../theme';

import Constants from 'expo-constants';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../graphql/queries';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        padding: 10,
        height: 70,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        alignContent: 'center',
        backgroundColor: theme.backgrounds.appBar,
    }
});

const RepositoriesTab = () => {
    return(
        <Link to='/'>
            <View>
                <Text isAppbar='true' fontWeight='bold'>Repositories</Text>
            </View>
        </Link>
    );
};

const SignInTab = () => {
    //handle signing in and out here
    const { data, loading, error } = useQuery(AUTHORIZED_USER);
    const authStorage = useContext(AuthStorageContext);

    const client = useApolloClient();

    const handleSignout = async () => {
        authStorage.deleteAccessToken();
        await client.resetStore();
    };

    if(error) return(
        <View>
            <Text fontWeight='bold'>An error has occured</Text>
        </View>
    );

    if(loading) return (
        <View>
            <Text fontWeight='bold'>Loading...</Text>
        </View>
    );

    if(data.authorizedUser) return(
        <View>
            <Button title={`Sign out of ${data.authorizedUser.username}`} onPress={handleSignout}/>
        </View> 
    );

    return(
        <Link to='/signin/'>
            <View>
                <Text isAppbar='true' fontWeight='bold'>Sign In</Text>
            </View>
        </Link>
    );
};


const AppBar = () => {
    return(
        <View style={styles.container}>
            <ScrollView horizontal>
                <RepositoriesTab/>
                <SignInTab/>
            </ScrollView>
        </View>
    );
};

export default AppBar;
