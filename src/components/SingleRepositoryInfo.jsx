import React from 'react';
import RepositoryItem from './repositoryItem';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import Text from '../components/text';
import useSingleRepository from '../hooks/useSingleRepository';
import { useParams } from 'react-router-native';
import LoadingScreen from './loadingScreen';
import theme from '../theme';
import * as Linking from 'expo-linking';
import { format } from 'date-fns';

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 20
    },
    reviewContainer: {
        padding: 10
    },
    reviewStyle: {
        padding: 15,
        backgroundColor: theme.colors.backgroundItem,
        flexDirection: 'row',
        borderRadius: 10
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
    },
    scoreFormat: {
        borderColor: theme.colors.primary,
        borderWidth: 3,
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        justifyContent: 'center',
    },
    infoFormat: {
        paddingHorizontal: 10,
        flexShrink: 1
    }
});

const RepositoryInfo = ({repository}) => {
    const onGitHubClick = () => {
        const url = repository.url;
        Linking.openURL(url);
    };

    return(
        <View>
            <RepositoryItem repo={repository} />
            <View style={styles.GithubButtonContainer}>
                <TouchableOpacity style={styles.GithubButton} onPress={onGitHubClick}>
                    <Text fontWeight='bold' color='textLanguage' >Open in Github</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const ReviewItem = ({review}) => {
    const FormattedDate = Date.parse(review.createdAt);

    const ReviewDate = format(FormattedDate, 'dd.MM.yyyy');

    return(
        <View style={styles.reviewContainer}>
            <View style={styles.reviewStyle}>
                <View style={styles.scoreFormat}>
                    <Text fontWeight='bold' color='primary' style={{ textAlign: 'center' }}>{review.rating}</Text>
                </View>
                <View style={styles.infoFormat}>
                    <View>
                        <Text fontWeight='bold'>{review.user.username}</Text>
                        <Text color='textSecondary'>{ReviewDate}</Text>
                    </View>
                    <Text fontWeight='bold'>{review.text}</Text>
                </View>
            </View>
        </View>
    )   
};

//const itemSeparator = () => <View style={styles.separator}/>;

const SingleRepositoryInfo = () => {
    let { id } = useParams();
    const { repository, loading, error } = useSingleRepository(id);

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
            <FlatList
                data={repository.reviews}
                renderItem={({item}) => <ReviewItem review={item} /> }
                keyExtractor={({id}) => id}
                ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
                contentContainerStyle={styles.contentContainer}
            />
        </SafeAreaView>
    );
};

export default SingleRepositoryInfo;