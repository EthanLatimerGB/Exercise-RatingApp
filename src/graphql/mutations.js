import { gql } from 'apollo-boost';

export const AUTHENTICATE_USER = gql`
    mutation Authorize($username:String!, $password:String!) {
        authorize(credentials: { username: $username, password: $password }) {
            accessToken
        }
    }
`;