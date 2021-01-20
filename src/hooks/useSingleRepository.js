import { useQuery } from '@apollo/react-hooks';
import { useEffect, useMemo, useState } from 'react';
import { FETCH_SINGLE_REPOSITORY } from '../graphql/queries';

const useSingleRepository = ( id ) => {
    const { data, loading, error } = useQuery(FETCH_SINGLE_REPOSITORY, {
        variables: { id }
    });

    const repositories = useMemo(() => {
        if(data){
            const reposList = data ? data.repository : null;
            reposList.reviews = reposList.reviews.edges ? reposList.reviews.edges.map(review => review.node) : [];
            return reposList;
        }
    }, [data]);
    
    return { repository: repositories, loading, error };
};

export default useSingleRepository;