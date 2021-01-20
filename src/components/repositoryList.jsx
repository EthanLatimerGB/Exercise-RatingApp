import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import RepositoryItem from './repositoryItem';
import { useHistory } from 'react-router-native';
import useRepositories from '../hooks/useRepository';
import Text from './text';
import LoadingScreen from './loadingScreen';

const repoStyles = StyleSheet.create({
    separator: {
        height: 10
    },
    container: {
        flexDirection: 'column'
    }
});


export const RepositoryListContainer = ({ repositories, loading, error, styles }) => {
    let history = useHistory();

    const RenderItem = ({ item }) => {
        const handlePress = () => {
            history.push(`/${item.id}`);
        };
        
        return(
            <TouchableOpacity onPress={handlePress}>
                <RepositoryItem repo={item} />
            </TouchableOpacity>
        )
    };

    if(loading){
        return(<SafeAreaView style={styles}>
            <View>
                <LoadingScreen itemBeingLoaded={'Repositories'} />
            </View>
        </SafeAreaView>);
    }

    if(error || repositories === null){
        return(<SafeAreaView style={styles}>
            <View>
                <Text>An error has occured</Text>
                <Text>{error.message}</Text>
            </View>
        </SafeAreaView>);
    }
        
    return(
        <SafeAreaView style={styles}>
            <View style={repoStyles.container}>
                <FlatList
                    data={repositories}
                    renderItem={RenderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
}

const RepositoryList = ({ styles }) => {
    const { repositories, loading, error } = useRepositories();

    return <RepositoryListContainer repositories={repositories} loading={loading} error={error} styles={styles}/>
};

export default RepositoryList;