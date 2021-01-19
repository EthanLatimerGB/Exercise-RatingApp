import React from 'react';
import RepositoryItem from './repositoryItem';
import { View, SafeAreaView, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Text from '../components/text';
import useSingleRepository from '../hooks/useSingleRepository';
import { useParams } from 'react-router-native';
import LoadingScreen from './loadingScreen';
import theme from '../theme';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
    PrimaryView:{
        backgroundColor: theme.colors.backgroundItem
    },
    GithubButtonContainer: {
        alignContent: 'center',
        flexDirection: 'row',
    },
    GithubButton: {
        margin: 15,
        padding: 15,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        flexGrow: 1,
        alignItems: 'center'
    }
});

const SingleRepositoryInfo = () => {
    let { id } = useParams();
    const { repository, loading, error } = useSingleRepository(id);

    const onGitHubClick = () => {
        const url = repository.url;
        Linking.openURL(url);
    };

    if(error || repository === null) return (
        <SafeAreaView>
            <View>
                <Text>Error {error.message}</Text>
            </View>
        </SafeAreaView>
    );

    if(loading) return (
        <SafeAreaView>
            <LoadingScreen itemBeingLoaded={'Repository'} />
        </SafeAreaView>
    );

    return(
        <SafeAreaView>
            <View style={styles.PrimaryView}>
                <RepositoryItem repo={repository} />
                <View style={styles.GithubButtonContainer}>
                    <TouchableOpacity style={styles.GithubButton} onPress={onGitHubClick}>
                        <Text fontWeight='bold' color='textLanguage' >Open in Github</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SingleRepositoryInfo;