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
                <Text color='textSecondary' fontWeight='bold'>{props.fullName}</Text>
                <Text>{props.description}</Text>
            </View>
            <Text color='textLanguage' format='language'>{props.language}</Text>
        </View>
    </View>
);

//Converts numerical data to string data using K, M
const suffixConverter = (number) => {
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


const StatisticsItem = ({ statisticName, statisticData }) => {
    const numberSuffix = suffixConverter(statisticData);

    return(
        <View style={{flexGrow: 1, alignItems: 'center' }} >
            <Text color='textPrimary' fontWeight='bold'>{numberSuffix}</Text>
            <Text>{statisticName}</Text>
        </View>
    );
};

const StatisticsList = ({ forksCount, stargazersCount, ratingAverage, reviewCount }) => {

    return(
        <View style={styles.statisticsContainer}>
            <StatisticsItem statisticName='Stars' statisticData={stargazersCount} />
            <StatisticsItem statisticName='Forks' statisticData={forksCount} />
            <StatisticsItem statisticName='Rating' statisticData={ratingAverage} />
            <StatisticsItem statisticName='Reviews' statisticData={reviewCount} />
        </View>
    );
};

const RepositoryItem = (props) => {
    return(
        <View key={props.id} style={styles.mainStyle}>
            <DisplayInfomrationList ownerAvatarUrl={props.ownerAvatarUrl} fullName={props.fullName} description={props.description} language={props.language}/> 
            <StatisticsList forksCount={props.forksCount} stargazersCount={props.stargazersCount} ratingAverage={props.ratingAverage} reviewCount={props.reviewCount}/>
        </View>
    );
};

export default RepositoryItem;