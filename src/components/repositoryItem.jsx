import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './text';


const styles = StyleSheet.create({
    mainStyle: {
        backgroundColor: '#FFFFFF',
        padding: 5,
    },
    infomrationContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
    },
    informationStyle: {
        paddingLeft: 10,
        alignSelf: 'stretch',
    },
    imageStyle: {
        width: 50,
        height: 50,
        padding: 5,
        alignItems: 'flex-start',
        borderRadius: 10
    },
    statisticsContainer: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

//Displays title,image, descrioption and language
const DisplayInfomrationList = (props) => (
    <View style={styles.infomrationContainer}>
        <View>
            <Image style={styles.imageStyle} source={{uri: props.ownerAvatarUrl}}/>
        </View>
        <View style={styles.informationStyle}>
            <View style={{ paddingBottom: 5 }}>
                <Text color='textSecondary' fontWeight='bold' testID='repoItem-fullnane'>{props.fullName}</Text>
                <Text testID='repoItem-description'>{props.description}</Text>
            </View>
            <Text color='textLanguage' format='language' testID='repoItem-language'>{props.language}</Text>
        </View>
    </View>
);

//Converts numerical data to string data using K, M
export const suffixConverter = (number) => {
    if(number >= 1000000){
        const numberInMillions = (number / 1000000);
        const roundedNumber = Math.round( numberInMillions * 10) / 10;
        return (roundedNumber + 'm');
    }else if(number >= 1000){
        const numberInThousands = (number / 1000);
        const roundedNumber = Math.round( numberInThousands * 10) / 10;
        return (roundedNumber + 'k');
    }else if(number >= 0){
        return number;
    }
};


const StatisticsItem = ({ statisticName, statisticData, testID }) => {
    const numberSuffix = suffixConverter(statisticData);

    return(
        <View style={{flexGrow: 1, alignItems: 'center' }} >
            <Text color='textPrimary' fontWeight='bold' testID={testID} >{numberSuffix}</Text>
            <Text>{statisticName}</Text>
        </View>
    );
};

const StatisticsList = ({ forksCount, stargazersCount, ratingAverage, reviewCount }) => {

    return(
        <View style={styles.statisticsContainer}>
            <StatisticsItem statisticName='Stars' statisticData={stargazersCount} testID='repoItem-stargazersCount'/>
            <StatisticsItem statisticName='Forks' statisticData={forksCount} testID='repoItem-forksCount'/>
            <StatisticsItem statisticName='Rating' statisticData={ratingAverage} testID='repoItem-ratingAverage'/>
            <StatisticsItem statisticName='Reviews' statisticData={reviewCount} testID='repoItem-reviewCount'/>
        </View>
    );
};

const RepositoryItem = (props) => {
    return(
        <View key={props.repo.id} style={styles.mainStyle}>
            <DisplayInfomrationList ownerAvatarUrl={props.repo.ownerAvatarUrl} fullName={props.repo.fullName} description={props.repo.description} language={props.repo.language}/> 
            <StatisticsList forksCount={props.repo.forksCount} stargazersCount={props.repo.stargazersCount} ratingAverage={props.repo.ratingAverage} reviewCount={props.repo.reviewCount}/>
        </View>
    );
};

export default RepositoryItem;