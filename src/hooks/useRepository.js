import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    const { data, loading, error } = useQuery(FETCH_REPOSITORIES, {
        fetchPolicy: 'cache-and-network'
    });

    const repositories = useMemo(() => {
        if(data){
            const reposList = data ? data.repositories.edges.map(edge => edge.node) : [];
            return reposList;
        }
    }, [data]);

    return { repositories, loading, error };
};

export default useRepositories;
