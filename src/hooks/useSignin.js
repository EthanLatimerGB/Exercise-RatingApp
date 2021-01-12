import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { AUTHENTICATE_USER } from '../graphql/mutations';
import { useContext } from "react";
import { useHistory } from 'react-router-native';
import AuthStorageContext from '../contexts/AuthStorageContext';
import createApolloClient from '../utils/apolloClient';



const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);
    const [Authorize, result] = useMutation(AUTHENTICATE_USER);

    const apolloClient = useApolloClient();
    let history = useHistory();

    const signIn = async ({ username, password }) => {
        const { data } = await Authorize({ variables: { username, password }});
        await authStorage.setAccessToken(data.authorize.accessToken);
        await apolloClient.resetStore();
        history.push('/');
    };

    return [signIn, result];
};

export default useSignIn;