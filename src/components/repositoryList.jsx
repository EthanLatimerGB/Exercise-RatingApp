import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import RepositoryItem from './repositoryItem';
import useRepositories from '../hooks/useRepository';
import Text from './text';

const repoStyles = StyleSheet.create({
    separator: {
        height: 10
    },
    container: {
        flexDirection: 'column'
    }
});

const itemSeparator = () => <View style={repoStyles.separator}/>;

const RepositoryList = ({ styles }) => {
    const RenderItem = ({ item }) => (
        <RepositoryItem 
            id={item.id}
            fullName={item.fullName}
            description={item.description}
            language={item.language}
            forksCount={item.forksCount}
            stargazersCount={item.stargazersCount}
            ratingAverage={item.ratingAverage}
            reviewCount={item.reviewCount}
            ownerAvatarUrl={item.ownerAvatarUrl}
        />
    );

    const { repositories, loading, error } = useRepositories();

    const repositoryNode = repositories;

    if(loading){
        <SafeAreaView style={styles}>
            <View>
                <Text>Loading Repositories</Text>
            </View>
        </SafeAreaView>;
    }

    if(error){
        <SafeAreaView style={styles}>
            <View>
                <Text>An error has occured</Text>
            </View>
        </SafeAreaView>;
    }
        
    return(
        <SafeAreaView style={styles}>
            <View style={repoStyles.container}>
                <FlatList
                    data={repositoryNode}
                    ItemSeparatorComponent={itemSeparator}
                    renderItem={RenderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

export default RepositoryList;