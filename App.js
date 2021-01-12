import React from 'react';
import Main from './src/components/main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';
import Constants from 'expo-constants';

import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

const authStorage = new AuthStorage('rateRepositoryApp');

const apolloClient = createApolloClient(authStorage);

const App = () => {
    console.log(Constants.manifest);

    return (
        <NativeRouter>
            <ApolloProvider client={apolloClient}>
                <AuthStorageContext.Provider value={authStorage}>
                    <Main/>
                </AuthStorageContext.Provider>
            </ApolloProvider>
        </NativeRouter>
    );
};

export default App;