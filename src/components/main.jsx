import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './repositoryList';
import AppBar from './appBar';
import SignIn from './signIn';
import theme from '../theme';


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.backgrounds.main
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar/>
            <Switch>
                <Route path='/' exact>
                    <RepositoryList style={styles.container}/>
                </Route>
                <Route path='/signin/' exact>
                    <SignIn/>
                </Route>
                <Redirect to='/'/>
            </Switch>
        </View>
    );
};

export default Main;

